import path from 'path'

import type { GeneratorContext } from '@ethereum-abi-types-generator/types'
import {
  deepClone,
  libraryMap,
  removeAllWhiteSpace,
} from '@ethereum-abi-types-generator/utils'
import fs, { type FSWatcher } from 'fs-extra'
import pretty from 'prettier'
import { describe, it, expect, vi } from 'vitest'

import abiJson from '../../../tests/mocks/fake-contract-abi.json'
import { AbiGenerator } from '../src/factories/abi-generator'

const prettier = { ...pretty }

const generatorContext = {
  library: 'web3',
  inputPath: "'abi.json'",
  outputDir: "'badOutputDir'",
  verbatimModuleSyntax: false,
  makeOutputDir: false,
} as GeneratorContext

type abiGeneratorOptionsType = {
  existsSync: boolean
  lstatSync: boolean
  callGenerate: boolean
}

const abiGeneratorOptions: abiGeneratorOptionsType = {
  existsSync: true,
  lstatSync: true,
  callGenerate: true,
}

let existsSyncSpy: ReturnType<any>
let readFileSyncSpy: ReturnType<any>
let writeFileSyncSpy: ReturnType<any>
let watchSpy: ReturnType<any>

let pathDirnameSpy: ReturnType<any>
let pathResolveSpy: ReturnType<any>

let prettierFormatSpy: ReturnType<any>

const callSuccessAbiGeneratorInstance = async (
  options: abiGeneratorOptionsType = abiGeneratorOptions,
  context: GeneratorContext = generatorContext,
) => {
  try {
    const instance = new AbiGenerator(context)

    existsSyncSpy = vi
      .spyOn(fs, 'existsSync')
      .mockReturnValue(options?.existsSync)

    if (options?.lstatSync) {
      vi.spyOn(fs, 'lstatSync').mockReturnValue({
        isDirectory: () => true,
      } as any)
    }

    readFileSyncSpy = vi
      .spyOn(fs, 'readFileSync')
      .mockReturnValue(JSON.stringify(abiJson))

    writeFileSyncSpy = vi
      .spyOn(fs, 'writeFileSync')
      .mockReturnValue(true as unknown as void)
    watchSpy = vi
      .spyOn(fs, 'watch')
      .mockReturnValue(true as unknown as FSWatcher)

    pathDirnameSpy = vi
      .spyOn(path, 'dirname')
      .mockReturnValue(generatorContext.outputDir ?? '')
    pathResolveSpy = vi.spyOn(path, 'resolve')

    prettierFormatSpy = vi.spyOn(prettier, 'format')

    if (options?.callGenerate) {
      await instance.generate()
    }

    return instance
  } catch (error) {
    console.log('BLAKLDAJSDLKJA', error)
  }

  return null
}

const prettierFormat = async (value: string) => {
  return prettier.format(value, {
    semi: false,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    bracketSpacing: true,
  })
}

describe('AbiGenerator', async () => {
  it('should clear all quotes from generatorContext.inputPath', async () => {
    console.log('HEREREREREE')
    await callSuccessAbiGeneratorInstance()
    console.log(typeof generatorContext.inputPath)
    console.log('abi.json')
    console.log(generatorContext.inputPath === 'abi.json')
    expect(generatorContext.inputPath).toEqual('abi.json')
  })

  it('should clear all quotes from generatorContext.outputDir', async () => {
    await callSuccessAbiGeneratorInstance()
    expect(generatorContext.outputDir).toEqual('badOutputDir')
  })

  it('should throw an error if output path does not exist', () => {
    const abiGeneratorOptionsClone = deepClone(abiGeneratorOptions)
    abiGeneratorOptionsClone.existsSync = false

    expect(async () => {
      await callSuccessAbiGeneratorInstance(abiGeneratorOptionsClone)
    }).toThrowError('output path must be a directory')
  })

  it('should throw an error if output path is not a directory', async () => {
    const abiGeneratorOptionsClone = deepClone(abiGeneratorOptions)
    abiGeneratorOptionsClone.lstatSync = false
    abiGeneratorOptionsClone.callGenerate = false

    vi.spyOn(fs, 'lstatSync').mockReturnValue({
      isDirectory: () => {
        console.log('HIGHJACKED')
        return false
      },
    } as any)

    const instance = await callSuccessAbiGeneratorInstance(
      abiGeneratorOptionsClone,
    )

    expect(instance).toBeDefined()

    expect(async () => await instance!.generate()).toThrowError(
      'output path must be a directory',
    )
  })

  it('should not call path.dirname if `this._context.outputDir` is defined', async () => {
    await callSuccessAbiGeneratorInstance()
    expect(pathDirnameSpy).toHaveBeenCalledTimes(0)
  })

  it('should call path.dirname 3 times if `this._context.outputDir` is not defined', async () => {
    const generatorContextClone = deepClone(generatorContext)
    expect(generatorContextClone).toBeDefined()

    generatorContextClone!.outputDir = ''

    callSuccessAbiGeneratorInstance(abiGeneratorOptions, generatorContextClone)
    expect(pathDirnameSpy).toHaveBeenCalledTimes(3)
  })

  it('should call path.resolve 5 times if `this._context.outputDir` is defined', async () => {
    await callSuccessAbiGeneratorInstance()
    expect(pathResolveSpy).toHaveBeenCalledTimes(5)
  })

  it('should call path.resolve if `this._context.outputDir` is not defined', () => {
    const generatorContextClone = deepClone(generatorContext)
    expect(generatorContextClone).toBeDefined()
    generatorContextClone!.outputDir = ''

    callSuccessAbiGeneratorInstance(abiGeneratorOptions, generatorContextClone)
    expect(pathResolveSpy).toHaveBeenCalled()
  })

  it('should call fs.existsSync 2 times', async () => {
    await callSuccessAbiGeneratorInstance()
    expect(existsSyncSpy).toHaveBeenCalledTimes(2)
  })

  it('should call fs.readFileSync 1 time', async () => {
    await callSuccessAbiGeneratorInstance()
    expect(readFileSyncSpy).toHaveBeenCalledTimes(1)
  })

  it('should call fs.writeFileSyncSpy 1 time', async () => {
    await callSuccessAbiGeneratorInstance()
    expect(writeFileSyncSpy).toHaveBeenCalledTimes(1)
  })

  it('should throw an error if library passed in is not valid', async () => {
    const generatorContextClone = deepClone(generatorContext)
    generatorContextClone.library = 'blah' as any

    expect(() => {
      callSuccessAbiGeneratorInstance(
        abiGeneratorOptions,
        generatorContextClone,
      )
    }).toThrowError('blah is not a known supported library')
  })

  it('should not call `fs.watch` if watch is not defined', async () => {
    await callSuccessAbiGeneratorInstance()
    expect(watchSpy).toHaveBeenCalledTimes(0)
  })

  it('should call `fs.watch` once if watch is set to true', async () => {
    const generatorContextClone = deepClone(generatorContext)
    generatorContextClone.watch = true

    callSuccessAbiGeneratorInstance(abiGeneratorOptions, generatorContextClone)
    expect(watchSpy).toHaveBeenCalledTimes(1)
  })

  it('should call prettier once with the default options', async () => {
    await callSuccessAbiGeneratorInstance()
    expect(prettierFormatSpy).toHaveBeenCalledTimes(1)
    expect(JSON.stringify(prettierFormatSpy.mock.calls[0][1])).toEqual(
      '{"parser":"typescript","trailingComma":"es5","singleQuote":true,"bracketSpacing":true,"printWidth":80,"plugins":[{"parsers":{"typescript":{"astFormat":"estree"}}}]}',
    )
  })

  describe('Web3', async () => {
    it('round trip', async () => {
      await callSuccessAbiGeneratorInstance()

      expect(writeFileSyncSpy.calls.mostRecent().args[0]).not.toBeUndefined()
      expect(
        removeAllWhiteSpace(writeFileSyncSpy.calls.mostRecent().args[1]),
      ).toEqual(
        removeAllWhiteSpace(
          await prettierFormat(`import BN from 'bn.js';import BigNumber from'bignumber.js';
    import {
      PromiEvent,
      TransactionReceipt,
      EventResponse,
      EventData,
      Web3ContractContext,
    } from 'ethereum-abi-types-generator';
    export interface CallOptions {
      from?: string;
      gasPrice?: string;
      gas?: number;
    }
    export interface SendOptions {
      from: string;
      value?: number | string | BN |BigNumber;
      gasPrice?: string;
      gas?: number;
    }
    export interface EstimateGasOptions {
      from?: string;
      value?: number | string | BN |BigNumber;
      gas?: number;
    }
    export interface MethodPayableReturnContext {
      send(options: SendOptions): PromiEvent<TransactionReceipt>;
      send(
        options: SendOptions,
        callback: (error: Error, result: any) => void
      ): PromiEvent<TransactionReceipt>;
      estimateGas(options: EstimateGasOptions): Promise<number>;
      estimateGas(
        options: EstimateGasOptions,
        callback: (error: Error, result: any) => void
      ): Promise<number>;
      encodeABI(): string;
    }
    export interface MethodConstantReturnContext<TCallReturn> {
      call(): Promise<TCallReturn>;
      call(options: CallOptions): Promise<TCallReturn>;
      call(
        options: CallOptions,
        callback: (error: Error, result: TCallReturn) => void
      ): Promise<TCallReturn>;
      encodeABI():string;
    }
    export interface MethodReturnContext extends MethodPayableReturnContext {}
    export type ContractContext = Web3ContractContext<
      Abi,
      AbiMethodNames,
      AbiEventsContext,
      AbiEvents
    >;
    export type AbiEvents = 'Event1' | 'Event2';
    export interface AbiEventsContext {
      Event1(
        parameters: {
          filter?: {
            token?: string | string[];
            exchange?: string | string[];
            _value?: string | string[];
          };
          fromBlock?: number;
          toBlock?: 'latest' | number;
          topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
      ): EventResponse;
      Event2(
        parameters: {
          filter?: { _owner?: string | string[]; _spender?: string | string[] };
          fromBlock?: number;
          toBlock?: 'latest' | number;
          topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
      ): EventResponse;
    }
    export type AbiMethodNames =
      | 'tupleInputOnly'
      | 'tupleInputAndOutput'
      | 'tupleNoInputNames'
      | 'tupleWithParametersNames'
      | 'byteArrayInputExample'
      | 'int8ReturnExample'
      | 'int256ReturnExample'
      | 'easyExample'
      | 'new'
      | 'getCars';
    export interface Event1EventEmittedResponse {
      token:string;
      exchange:string;
      user:string;
      _value:string;
    }
    export interface Event2EventEmittedResponse {
     _owner:string;
     _spender:string;
     _value:string
    }
    export interface TupleInputOnlyRequest {
      address: string;
      timestamps: [string | number, string | number, string | number];
    }
    export interface TupleInputAndOutputResponse {
      affiliate: string;
      offerID: string;
      creationTime: string;
      timestamp: string;
      timestamps: [string, string, string, string, string, string];
    }
    export interface TupleNoInputNamesResponse {
      affiliate: string;
      offerID: string;
      creationTime: string;
      timestamp: string;
      timestamps: [string, string, string, string, string, string];
    }
    export interface TupleWithParametersNamesResponse {
      affiliate: string;
      offerID: string;
      creationTime: string;
      timestamp: string;
      timestamps: [string, string, string, string, string, string];
    }

    export interface OwnedCarsResponse {
      tokenId:string;
      attachedComponents:[string,string,string,string];
      detachedComponents:[string,string,string,string,string,string,string,string,string,string,string];
      owner:string;
      detachedComponentsCount:string;
    }
    
    export interface Abi {
      /**
       * Payable: false
       * Constant: false
       * StateMutability: nonpayable
       * Type: function
       * @param o Type: tuple, Indexed: false
       */
      tupleInputOnly(o: TupleInputOnlyRequest): MethodReturnContext;
      /**
       * Payable: false
       * Constant: true
       * StateMutability: view
       * Type: function
       * @param exchangeAddress Type: address, Indexed: false
       * @param internalAddress Type: address, Indexed: false
       */
      tupleInputAndOutput(
        exchangeAddress: string,
        internalAddress: string
      ): MethodConstantReturnContext<TupleInputAndOutputResponse>;
      /**
       * Payable: false
       * Constant: true
       * StateMutability: view
       * Type: function
       * @param parameter0 Type: address, Indexed: false
       * @param parameter1 Type: address, Indexed: false
       */
      tupleNoInputNames(
        parameter0: string,
        parameter1: string
      ): MethodConstantReturnContext<TupleNoInputNamesResponse>;
      /**
       * Payable: false
       * Constant: true
       * StateMutability: view
       * Type: function
       * @param address1 Type: address, Indexed: false
       * @param address2 Type: address, Indexed: false
       */
      tupleWithParametersNames(
        address1: string,
        address2: string
      ): MethodConstantReturnContext<TupleWithParametersNamesResponse>;
      /**
       * Payable: true
       * Constant: false
       * StateMutability: payable
       * Type: function
       * @param inputData Type: bytes32[2], Indexed: false
       */
      byteArrayInputExample(
        inputData: [string | number[], string | number[], string | number[]]
      ): MethodPayableReturnContext;
      /**
       * Payable: false
       * Constant: true
       * StateMutability: undefined
       * Type: function
       */
      int8ReturnExample(): MethodConstantReturnContext<string>;
      /**
       * Payable: false
       * Constant: true
       * StateMutability: undefined
       * Type: function
       */
      int256ReturnExample(): MethodConstantReturnContext<string>;
      /**
       * Payable: false
       * Constant: true
       * StateMutability: undefined
       * Type: function
       * @param valid Type: boolean, Indexed: false
       * @param exchangeAddress Type: address, Indexed: false
       * @param timestamp Type: uint8, Indexed: false
       */
      easyExample(
        valid: boolean,
        exchangeAddress: string,
        timestamp: string | number
      ): MethodConstantReturnContext<string>;
      /**
       * Payable: false
       * Constant: false
       * StateMutability: undefined
       * Type: constructor
       * @param _name Type: bytes32, Indexed: false
       * @param _symbol Type: bytes32, Indexed: false
       * @param _decimals Type: uint256, Indexed: false
       * @param _supply Type: uint256, Indexed: false
       */
      'new'(
        _name: string | number[],
        _symbol: string | number[],
        _decimals: string,
        _supply: string
      ): MethodReturnContext;

      /**
       *Payable:false
       *Constant:true
       *StateMutability:view
       *Type:function
       *@param ownerType:address, Indexed:false 
       */
       getCars(owner:string): MethodConstantReturnContext<OwnedCarsResponse[]>;
      }
    `),
        ),
      )
      expect(writeFileSyncSpy.calls.mostRecent().args[2]).toEqual({
        mode: 493,
      })
    })

    it('should call _web3Factory.buildWeb3Interfaces once', async () => {
      const abiGeneratorOptionsClone = deepClone(abiGeneratorOptions)
      abiGeneratorOptionsClone.callGenerate = false

      const instance = await callSuccessAbiGeneratorInstance(
        abiGeneratorOptionsClone,
      )

      expect(instance).toBeDefined()

      const buildWeb3InterfacesSpy = vi
        .spyOn(
          // @ts-ignore
          instance._web3Factory,
          'buildInterfaces',
        )
        .mockImplementation(() => 'mockImplementation')

      const buildEthersInterfacesSpy = vi
        .spyOn(
          // @ts-ignore
          instance._ethersFactory,
          'buildInterfaces',
        )
        .mockImplementation(() => 'mockImplementation')

      await instance!.generate()

      expect(buildWeb3InterfacesSpy).toHaveBeenCalledTimes(1)
      expect(buildWeb3InterfacesSpy).toHaveBeenCalledWith('Abi')

      expect(buildEthersInterfacesSpy).toHaveBeenCalledTimes(0)
    })

    it('should call _web3Factory.buildEventInterfaceProperties once', async () => {
      const abiGeneratorOptionsClone = deepClone(abiGeneratorOptions)
      abiGeneratorOptionsClone.callGenerate = false

      const instance = await callSuccessAbiGeneratorInstance(
        abiGeneratorOptionsClone,
      )

      expect(instance).toBeDefined()

      const web3BuildEventInterfacePropertiesSpy = vi
        .spyOn(
          // @ts-ignore
          instance._web3Factory,
          'buildEventInterfaceProperties',
        )
        .mockImplementation(() => 'mockImplementation')

      const ethersBuildEventInterfacePropertiesSpy = vi
        .spyOn(
          // @ts-ignore
          instance._ethersFactory,
          'buildEventInterfaceProperties',
        )
        .mockImplementation(() => 'mockImplementation')

      await instance!.generate()

      expect(web3BuildEventInterfacePropertiesSpy).toHaveBeenCalledTimes(1)
      expect(web3BuildEventInterfacePropertiesSpy).toHaveBeenCalledWith([
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: 'token', type: 'address' },
            { indexed: true, name: 'exchange', type: 'address' },
            { indexed: false, name: 'user', type: 'address' },
            { indexed: true, name: '_value', type: 'uint256' },
          ],
          name: 'Event1',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: '_owner', type: 'address' },
            { indexed: true, name: '_spender', type: 'address' },
            { indexed: false, name: '_value', type: 'uint256' },
          ],
          name: 'Event2',
          type: 'event',
        },
        {
          constant: false,
          inputs: [
            {
              components: [
                { name: 'address', type: 'address' },
                { name: 'timestamps', type: 'uint8[2]' },
              ],
              name: 'o',
              type: 'tuple',
            },
          ],
          name: 'tupleInputOnly',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { name: 'exchangeAddress', type: 'address' },
            { name: 'internalAddress', type: 'address' },
          ],
          name: 'tupleInputAndOutput',
          outputs: [
            { name: 'affiliate', type: 'address' },
            { name: 'offerID', type: 'bytes32' },
            { name: 'creationTime', type: 'uint256' },
            { name: 'timestamp', type: 'uint8' },
            { name: 'timestamps', type: 'uint8[5]' },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { name: '', type: 'address' },
            { name: '', type: 'address' },
          ],
          name: 'tupleNoInputNames',
          outputs: [
            { name: 'affiliate', type: 'address' },
            { name: 'offerID', type: 'bytes32' },
            { name: 'creationTime', type: 'uint256' },
            { name: 'timestamp', type: 'uint8' },
            { name: 'timestamps', type: 'uint8[5]' },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { name: 'address1', type: 'address' },
            { name: 'address2', type: 'address' },
          ],
          name: 'tupleWithParametersNames',
          outputs: [
            { name: 'affiliate', type: 'address' },
            { name: 'offerID', type: 'bytes32' },
            { name: 'creationTime', type: 'uint256' },
            { name: 'timestamp', type: 'uint8' },
            { name: 'timestamps', type: 'uint8[5]' },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: false,
          inputs: [{ name: 'inputData', type: 'bytes32[2]' }],
          name: 'byteArrayInputExample',
          outputs: [],
          payable: true,
          stateMutability: 'payable',
          type: 'function',
        },
        {
          constant: true,
          gas: 783,
          inputs: [],
          name: 'int8ReturnExample',
          outputs: [{ name: 'out', type: 'uint8' }],
          payable: false,
          type: 'function',
        },
        {
          constant: true,
          gas: 783,
          inputs: [],
          name: 'int256ReturnExample',
          outputs: [{ name: 'out', type: 'uint256' }],
          payable: false,
          type: 'function',
        },
        {
          constant: true,
          gas: 783,
          inputs: [
            { name: 'valid', type: 'boolean' },
            { name: 'exchangeAddress', type: 'address' },
            { name: 'timestamp', type: 'uint8' },
          ],
          name: 'easyExample',
          outputs: [{ name: 'out', type: 'uint256' }],
          payable: false,
          type: 'function',
        },
        {
          name: '__init__',
          outputs: [],
          inputs: [
            { type: 'bytes32', name: '_name' },
            { type: 'bytes32', name: '_symbol' },
            { type: 'uint256', name: '_decimals' },
            { type: 'uint256', name: '_supply' },
          ],
          constant: false,
          payable: false,
          type: 'constructor',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
            },
          ],
          name: 'getCars',
          outputs: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: 'tokenId',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256[3]',
                  name: 'attachedComponents',
                  type: 'uint256[3]',
                },
                {
                  internalType: 'uint256[10]',
                  name: 'detachedComponents',
                  type: 'uint256[10]',
                },
                {
                  internalType: 'address',
                  name: 'owner',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'detachedComponentsCount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct Car.CarInstance[]',
              name: 'ownedCars',
              type: 'tuple[]',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
      ])

      expect(ethersBuildEventInterfacePropertiesSpy).toHaveBeenCalledTimes(0)
    })

    it('should call _web3Factory.buildMethodReturnContext 10 times', async () => {
      const abiGeneratorOptionsClone = deepClone(abiGeneratorOptions)
      abiGeneratorOptionsClone.callGenerate = false

      const instance = await callSuccessAbiGeneratorInstance(
        abiGeneratorOptionsClone,
      )

      expect(instance).toBeDefined()

      const web3BuildMethodReturnContextSpy = vi
        .spyOn(
          // @ts-ignore
          instance._web3Factory,
          'buildMethodReturnContext',
        )
        .mockImplementation(() => 'mockImplementation')

      const ethersBuildMethodReturnContextSpy = vi
        .spyOn(
          // @ts-ignore
          instance._ethersFactory,
          'buildMethodReturnContext',
        )
        .mockImplementation(() => 'mockImplementation')

      await instance!.generate()

      expect(web3BuildMethodReturnContextSpy).toHaveBeenCalledTimes(10)
      expect(ethersBuildMethodReturnContextSpy).toHaveBeenCalledTimes(0)
    })
  })

  describe('Ethers v4 or below', () => {
    it('round trip', async () => {
      const generatorContextClone = deepClone(generatorContext)
      generatorContextClone.library = libraryMap.ethers_v4

      callSuccessAbiGeneratorInstance(
        abiGeneratorOptions,
        generatorContextClone,
      )

      expect(writeFileSyncSpy.calls.mostRecent().args[0]).not.toBeUndefined()
      expect(
        removeAllWhiteSpace(writeFileSyncSpy.calls.mostRecent().args[1]),
      ).toEqual(
        removeAllWhiteSpace(
          await prettierFormat(`import { ContractTransaction } from 'ethers';
            import { Arrayish, BigNumber, BigNumberish, Interface } from 'ethers/utils';
            import { EthersContractContext } from 'ethereum-abi-types-generator';
            export type ContractContext = EthersContractContext<
              Abi,
              AbiEventsContext,
              AbiEvents
            >;
            export declare type EventFilter = {
              address?: string;
              topics?: Array<string>;
              fromBlock?: string | number;
              toBlock?: string | number;
            };
            export interface ContractTransactionOverrides {
              /**
               * The maximum units of gas for the transaction to use
               */
              gasLimit?: number;
              /**
               * The price (in wei) per unit of gas
               */
              gasPrice?: BigNumber | string | number | Promise<any>;
              /**
               * The nonce to use in the transaction
               */
              nonce?: number;
              /**
               * The amount to send with the transaction (i.e. msg.value)
               */
              value?: BigNumber | string | number | Promise<any>;
              /**
               * The chain ID (or network ID) to use
               */
              chainId?: number;
            }
            export interface ContractCallOverrides {
              /**
               * The address to execute the call as
               */
              from?: string;
              /**
               * The maximum units of gas for the transaction to use
               */
              gasLimit?: number;
            }
            export type AbiEvents = 'Event1' | 'Event2';
            export interface AbiEventsContext {
              Event1(...parameters: any): EventFilter;
              Event2(...parameters: any): EventFilter;
            }
            export type AbiMethodNames =
              | 'tupleInputOnly'
              | 'tupleInputAndOutput'
              | 'tupleNoInputNames'
              | 'tupleWithParametersNames'
              | 'byteArrayInputExample'
              | 'int8ReturnExample'
              | 'int256ReturnExample'
              | 'easyExample'
              | 'new'
              | 'getCars';
            export interface Event1EventEmittedResponse {
                token:string;
                exchange:string;
                user:string;
                _value:BigNumberish;
            }
            export interface Event2EventEmittedResponse {
              _owner:string;
              _spender:string;
              _value:BigNumberish;
            }
            export interface TupleInputOnlyRequest {
              address: string;
              timestamps: [BigNumberish, BigNumberish, BigNumberish];
            }
            export interface TupleInputAndOutputResponse {
              affiliate: string;
              0: string;
              offerID: string;
              1: string;
              creationTime: BigNumber;
              2: BigNumber;
              timestamp: number;
              3: number;
              timestamps: [number, number, number, number, number, number];
              4: [number, number, number, number, number, number];
              length: 5;
            }
            export interface TupleNoInputNamesResponse {
              affiliate: string;
              0: string;
              offerID: string;
              1: string;
              creationTime: BigNumber;
              2: BigNumber;
              timestamp: number;
              3: number;
              timestamps: [number, number, number, number, number, number];
              4: [number, number, number, number, number, number];
              length: 5;
            }
            export interface TupleWithParametersNamesResponse {
              affiliate: string;
              0: string;
              offerID: string;
              1: string;
              creationTime: BigNumber;
              2: BigNumber;
              timestamp: number;
              3: number;
              timestamps: [number, number, number, number, number, number];
              4: [number, number, number, number, number, number];
              length: 5;
            }

            export interface OwnedCarsResponse { 
              tokenId:BigNumber;
              0:BigNumber;
              attachedComponents:[BigNumber,BigNumber,BigNumber,BigNumber];
              1:[BigNumber,BigNumber,BigNumber,BigNumber];
              detachedComponents:[BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber];
              2:[BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber];
              owner:string;
              3:string;
              detachedComponentsCount:BigNumber;
              4:BigNumber;
            }

            export interface Abi {
              /**
               * Payable: false
               * Constant: false
               * StateMutability: nonpayable
               * Type: function
               * @param o Type: tuple, Indexed: false
               */
              tupleInputOnly(
                o: TupleInputOnlyRequest,
                overrides?: ContractTransactionOverrides
              ): Promise<ContractTransaction>;
              /**
               * Payable: false
               * Constant: true
               * StateMutability: view
               * Type: function
               * @param exchangeAddress Type: address, Indexed: false
               * @param internalAddress Type: address, Indexed: false
               */
              tupleInputAndOutput(
                exchangeAddress: string,
                internalAddress: string,
                overrides?: ContractCallOverrides
              ): Promise<TupleInputAndOutputResponse>;
              /**
               * Payable: false
               * Constant: true
               * StateMutability: view
               * Type: function
               * @param parameter0 Type: address, Indexed: false
               * @param parameter1 Type: address, Indexed: false
               */
              tupleNoInputNames(
                parameter0: string,
                parameter1: string,
                overrides?: ContractCallOverrides
              ): Promise<TupleNoInputNamesResponse>;
              /**
               * Payable: false
               * Constant: true
               * StateMutability: view
               * Type: function
               * @param address1 Type: address, Indexed: false
               * @param address2 Type: address, Indexed: false
               */
              tupleWithParametersNames(
                address1: string,
                address2: string,
                overrides?: ContractCallOverrides
              ): Promise<TupleWithParametersNamesResponse>;
              /**
               * Payable: true
               * Constant: false
               * StateMutability: payable
               * Type: function
               * @param inputData Type: bytes32[2], Indexed: false
               */
              byteArrayInputExample(
                inputData: [Arrayish, Arrayish, Arrayish],
                overrides?: ContractTransactionOverrides
              ): Promise<ContractTransaction>;
              /**
               * Payable: false
               * Constant: true
               * StateMutability: undefined
               * Type: function
               */
              int8ReturnExample(overrides?: ContractCallOverrides): Promise<number>;
              /**
               * Payable: false
               * Constant: true
               * StateMutability: undefined
               * Type: function
               */
              int256ReturnExample(overrides?: ContractCallOverrides): Promise<BigNumber>;
              /**
               * Payable: false
               * Constant: true
               * StateMutability: undefined
               * Type: function
               * @param valid Type: boolean, Indexed: false
               * @param exchangeAddress Type: address, Indexed: false
               * @param timestamp Type: uint8, Indexed: false
               */
              easyExample(
                valid: boolean,
                exchangeAddress: string,
                timestamp: BigNumberish,
                overrides?: ContractCallOverrides
              ): Promise<BigNumber>;
              /**
               * Payable: false
               * Constant: false
               * StateMutability: undefined
               * Type: constructor
               * @param _name Type: bytes32, Indexed: false
               * @param _symbol Type: bytes32, Indexed: false
               * @param _decimals Type: uint256, Indexed: false
               * @param _supply Type: uint256, Indexed: false
               */
              'new'(
                _name: Arrayish,
                _symbol: Arrayish,
                _decimals: BigNumberish,
                _supply: BigNumberish,
                overrides?: ContractTransactionOverrides
              ): Promise<ContractTransaction>;

              /**
               *Payable:false
               *Constant:true
               *StateMutability:view
               *Type:function
               * @param ownerType:address,Indexed:false
               */
               getCars(owner:string, overrides?:ContractCallOverrides):Promise<OwnedCarsResponse[]>;
            }
    `),
        ),
      )
      expect(writeFileSyncSpy.calls.mostRecent().args[2]).toEqual({
        mode: 493,
      })
    })

    it('should call _ethersFactory.buildEthersInterfaces once', async () => {
      const abiGeneratorOptionsClone = deepClone(abiGeneratorOptions)
      abiGeneratorOptionsClone.callGenerate = false

      const generatorContextClone = deepClone(generatorContext)
      generatorContextClone.library = libraryMap.ethers_v4

      const instance = await callSuccessAbiGeneratorInstance(
        abiGeneratorOptionsClone,
        generatorContextClone,
      )

      expect(instance).toBeDefined()

      const buildEthersInterfacesSpy = vi
        .spyOn(
          // @ts-ignore
          instance._ethersFactory,
          'buildInterfaces',
        )
        .mockImplementation(() => 'mockImplementation')

      const buildWeb3InterfacesSpy = vi
        .spyOn(
          // @ts-ignore
          instance._web3Factory,
          'buildInterfaces',
        )
        .mockImplementation(() => 'mockImplementation')

      await instance!.generate()

      expect(buildEthersInterfacesSpy).toHaveBeenCalledTimes(1)
      expect(buildEthersInterfacesSpy).toHaveBeenCalledWith(
        'Abi',
        libraryMap.ethers_v4,
      )

      expect(buildWeb3InterfacesSpy).toHaveBeenCalledTimes(0)
    })

    it('should call _ethersFactory.buildEventInterfaceProperties once', async () => {
      const abiGeneratorOptionsClone = deepClone(abiGeneratorOptions)
      abiGeneratorOptionsClone.callGenerate = false

      const generatorContextClone = deepClone(generatorContext)
      generatorContextClone.library = libraryMap.ethers_v4

      const instance = await callSuccessAbiGeneratorInstance(
        abiGeneratorOptionsClone,
        generatorContextClone,
      )

      expect(instance).toBeDefined()

      const ethersBuildEventInterfacePropertiesSpy = vi
        .spyOn(
          // @ts-ignore
          instance._ethersFactory,
          'buildEventInterfaceProperties',
        )
        .mockImplementation(() => 'mockImplementation')

      const web3BuildEventInterfacePropertiesSpy = vi
        .spyOn(
          // @ts-ignore
          instance._web3Factory,
          'buildEventInterfaceProperties',
        )
        .mockImplementation(() => 'mockImplementation')

      await instance!.generate()

      expect(ethersBuildEventInterfacePropertiesSpy).toHaveBeenCalledTimes(1)
      expect(ethersBuildEventInterfacePropertiesSpy).toHaveBeenCalledWith([
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: 'token', type: 'address' },
            { indexed: true, name: 'exchange', type: 'address' },
            { indexed: false, name: 'user', type: 'address' },
            { indexed: true, name: '_value', type: 'uint256' },
          ],
          name: 'Event1',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: '_owner', type: 'address' },
            { indexed: true, name: '_spender', type: 'address' },
            { indexed: false, name: '_value', type: 'uint256' },
          ],
          name: 'Event2',
          type: 'event',
        },
        {
          constant: false,
          inputs: [
            {
              components: [
                { name: 'address', type: 'address' },
                { name: 'timestamps', type: 'uint8[2]' },
              ],
              name: 'o',
              type: 'tuple',
            },
          ],
          name: 'tupleInputOnly',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { name: 'exchangeAddress', type: 'address' },
            { name: 'internalAddress', type: 'address' },
          ],
          name: 'tupleInputAndOutput',
          outputs: [
            { name: 'affiliate', type: 'address' },
            { name: 'offerID', type: 'bytes32' },
            { name: 'creationTime', type: 'uint256' },
            { name: 'timestamp', type: 'uint8' },
            { name: 'timestamps', type: 'uint8[5]' },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { name: '', type: 'address' },
            { name: '', type: 'address' },
          ],
          name: 'tupleNoInputNames',
          outputs: [
            { name: 'affiliate', type: 'address' },
            { name: 'offerID', type: 'bytes32' },
            { name: 'creationTime', type: 'uint256' },
            { name: 'timestamp', type: 'uint8' },
            { name: 'timestamps', type: 'uint8[5]' },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { name: 'address1', type: 'address' },
            { name: 'address2', type: 'address' },
          ],
          name: 'tupleWithParametersNames',
          outputs: [
            { name: 'affiliate', type: 'address' },
            { name: 'offerID', type: 'bytes32' },
            { name: 'creationTime', type: 'uint256' },
            { name: 'timestamp', type: 'uint8' },
            { name: 'timestamps', type: 'uint8[5]' },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: false,
          inputs: [{ name: 'inputData', type: 'bytes32[2]' }],
          name: 'byteArrayInputExample',
          outputs: [],
          payable: true,
          stateMutability: 'payable',
          type: 'function',
        },
        {
          constant: true,
          gas: 783,
          inputs: [],
          name: 'int8ReturnExample',
          outputs: [{ name: 'out', type: 'uint8' }],
          payable: false,
          type: 'function',
        },
        {
          constant: true,
          gas: 783,
          inputs: [],
          name: 'int256ReturnExample',
          outputs: [{ name: 'out', type: 'uint256' }],
          payable: false,
          type: 'function',
        },
        {
          constant: true,
          gas: 783,
          inputs: [
            { name: 'valid', type: 'boolean' },
            { name: 'exchangeAddress', type: 'address' },
            { name: 'timestamp', type: 'uint8' },
          ],
          name: 'easyExample',
          outputs: [{ name: 'out', type: 'uint256' }],
          payable: false,
          type: 'function',
        },
        {
          name: '__init__',
          outputs: [],
          inputs: [
            { type: 'bytes32', name: '_name' },
            { type: 'bytes32', name: '_symbol' },
            { type: 'uint256', name: '_decimals' },
            { type: 'uint256', name: '_supply' },
          ],
          constant: false,
          payable: false,
          type: 'constructor',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
            },
          ],
          name: 'getCars',
          outputs: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: 'tokenId',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256[3]',
                  name: 'attachedComponents',
                  type: 'uint256[3]',
                },
                {
                  internalType: 'uint256[10]',
                  name: 'detachedComponents',
                  type: 'uint256[10]',
                },
                {
                  internalType: 'address',
                  name: 'owner',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'detachedComponentsCount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct Car.CarInstance[]',
              name: 'ownedCars',
              type: 'tuple[]',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
      ])

      expect(web3BuildEventInterfacePropertiesSpy).toHaveBeenCalledTimes(0)
    })

    it('should call _ethersFactory.buildMethodReturnContext 10 times', async () => {
      const abiGeneratorOptionsClone = deepClone(abiGeneratorOptions)
      abiGeneratorOptionsClone.callGenerate = false

      const generatorContextClone = deepClone(generatorContext)
      generatorContextClone.library = libraryMap.ethers_v4

      const instance = await callSuccessAbiGeneratorInstance(
        abiGeneratorOptionsClone,
        generatorContextClone,
      )

      expect(instance).toBeDefined()

      const ethersBuildMethodReturnContextSpy = vi
        .spyOn(
          // @ts-ignore
          instance._ethersFactory,
          'buildMethodReturnContext',
        )
        .mockImplementation(() => 'mockImplementation')

      const web3BuildMethodReturnContextSpy = vi
        .spyOn(
          // @ts-ignore
          instance._web3Factory,
          'buildMethodReturnContext',
        )
        .mockImplementation(() => 'mockImplementation')

      await instance!.generate()

      expect(ethersBuildMethodReturnContextSpy).toHaveBeenCalledTimes(10)
      expect(web3BuildMethodReturnContextSpy).toHaveBeenCalledTimes(0)
    })
  })

  describe('Ethers v5', () => {
    it('round trip', async () => {
      const generatorContextClone = deepClone(generatorContext)
      generatorContextClone.library = libraryMap.ethers_v5

      callSuccessAbiGeneratorInstance(
        abiGeneratorOptions,
        generatorContextClone,
      )

      expect(writeFileSyncSpy.calls.mostRecent().args[0]).not.toBeUndefined()
      expect(
        removeAllWhiteSpace(writeFileSyncSpy.calls.mostRecent().args[1]),
      ).toEqual(
        removeAllWhiteSpace(
          await prettierFormat(`import { ContractTransaction,
                    ContractInterface,
                    BytesLike as Arrayish,
                    BigNumber,
                    BigNumberish } from "ethers"
            import { EthersContractContextV5 } from "@ethereum-abi-types-generator/converter-typescript";
            export type ContractContext = EthersContractContextV5<
              Abi,
              AbiMethodNames,
              AbiEventsContext,
              AbiEvents
            >;
            export declare type EventFilter = {
              address?: string;
              topics?: Array<string>;
              fromBlock?: string | number;
              toBlock?: string | number;
            };
            export interface ContractTransactionOverrides {
              /**
               * The maximum units of gas for the transaction to use
               */
              gasLimit?: number;
              /**
               * The price (in wei) per unit of gas
               */
              gasPrice?: BigNumber | string | number | Promise<any>;
              /**
               * The nonce to use in the transaction
               */
              nonce?: number;
              /**
               * The amount to send with the transaction (i.e. msg.value)
               */
              value?: BigNumber | string | number | Promise<any>;
              /**
               * The chain ID (or network ID) to use
               */
              chainId?: number;
            }
            export interface ContractCallOverrides {
              /**
               * The address to execute the call as
               */
              from?: string;
              /**
               * The maximum units of gas for the transaction to use
               */
              gasLimit?: number;
            }
            export type AbiEvents = 'Event1' | 'Event2';
            export interface AbiEventsContext {
              Event1(...parameters: any): EventFilter;
              Event2(...parameters: any): EventFilter;
            }
            export type AbiMethodNames =
              | 'tupleInputOnly'
              | 'tupleInputAndOutput'
              | 'tupleNoInputNames'
              | 'tupleWithParametersNames'
              | 'byteArrayInputExample'
              | 'int8ReturnExample'
              | 'int256ReturnExample'
              | 'easyExample'
              | 'new'
              | 'getCars';
            export interface Event1EventEmittedResponse {
                token:string;
                exchange:string;
                user:string;
                _value:BigNumberish;
            }
            export interface Event2EventEmittedResponse {
              _owner:string;
              _spender:string;
              _value:BigNumberish;
            }
            export interface TupleInputOnlyRequest {
              address: string;
              timestamps: [BigNumberish, BigNumberish, BigNumberish];
            }
            export interface TupleInputAndOutputResponse {
              affiliate: string;
              0: string;
              offerID: string;
              1: string;
              creationTime: BigNumber;
              2: BigNumber;
              timestamp: number;
              3: number;
              timestamps: [number, number, number, number, number, number];
              4: [number, number, number, number, number, number];
              length: 5;
            }
            export interface TupleNoInputNamesResponse {
              affiliate: string;
              0: string;
              offerID: string;
              1: string;
              creationTime: BigNumber;
              2: BigNumber;
              timestamp: number;
              3: number;
              timestamps: [number, number, number, number, number, number];
              4: [number, number, number, number, number, number];
              length: 5;
            }
            export interface TupleWithParametersNamesResponse {
              affiliate: string;
              0: string;
              offerID: string;
              1: string;
              creationTime: BigNumber;
              2: BigNumber;
              timestamp: number;
              3: number;
              timestamps: [number, number, number, number, number, number];
              4: [number, number, number, number, number, number];
              length: 5;
            }

             export interface OwnedCarsResponse { 
              tokenId:BigNumber;
              0:BigNumber;
              attachedComponents:[BigNumber,BigNumber,BigNumber,BigNumber];
              1:[BigNumber,BigNumber,BigNumber,BigNumber];
              detachedComponents:[BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber];
              2:[BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber,BigNumber];
              owner:string;
              3:string;
              detachedComponentsCount:BigNumber;
              4:BigNumber;
            }
            
            export interface Abi {
              /**
               * Payable: false
               * Constant: false
               * StateMutability: nonpayable
               * Type: function
               * @param o Type: tuple, Indexed: false
               */
              tupleInputOnly(
                o: TupleInputOnlyRequest,
                overrides?: ContractTransactionOverrides
              ): Promise<ContractTransaction>;
              /**
               * Payable: false
               * Constant: true
               * StateMutability: view
               * Type: function
               * @param exchangeAddress Type: address, Indexed: false
               * @param internalAddress Type: address, Indexed: false
               */
              tupleInputAndOutput(
                exchangeAddress: string,
                internalAddress: string,
                overrides?: ContractCallOverrides
              ): Promise<TupleInputAndOutputResponse>;
              /**
               * Payable: false
               * Constant: true
               * StateMutability: view
               * Type: function
               * @param parameter0 Type: address, Indexed: false
               * @param parameter1 Type: address, Indexed: false
               */
              tupleNoInputNames(
                parameter0: string,
                parameter1: string,
                overrides?: ContractCallOverrides
              ): Promise<TupleNoInputNamesResponse>;
              /**
               * Payable: false
               * Constant: true
               * StateMutability: view
               * Type: function
               * @param address1 Type: address, Indexed: false
               * @param address2 Type: address, Indexed: false
               */
              tupleWithParametersNames(
                address1: string,
                address2: string,
                overrides?: ContractCallOverrides
              ): Promise<TupleWithParametersNamesResponse>;
              /**
               * Payable: true
               * Constant: false
               * StateMutability: payable
               * Type: function
               * @param inputData Type: bytes32[2], Indexed: false
               */
              byteArrayInputExample(
                inputData: [Arrayish, Arrayish, Arrayish],
                overrides?: ContractTransactionOverrides
              ): Promise<ContractTransaction>;
              /**
               * Payable: false
               * Constant: true
               * StateMutability: undefined
               * Type: function
               */
              int8ReturnExample(overrides?: ContractCallOverrides): Promise<number>;
              /**
               * Payable: false
               * Constant: true
               * StateMutability: undefined
               * Type: function
               */
              int256ReturnExample(overrides?: ContractCallOverrides): Promise<BigNumber>;
              /**
               * Payable: false
               * Constant: true
               * StateMutability: undefined
               * Type: function
               * @param valid Type: boolean, Indexed: false
               * @param exchangeAddress Type: address, Indexed: false
               * @param timestamp Type: uint8, Indexed: false
               */
              easyExample(
                valid: boolean,
                exchangeAddress: string,
                timestamp: BigNumberish,
                overrides?: ContractCallOverrides
              ): Promise<BigNumber>;
              /**
               * Payable: false
               * Constant: false
               * StateMutability: undefined
               * Type: constructor
               * @param _name Type: bytes32, Indexed: false
               * @param _symbol Type: bytes32, Indexed: false
               * @param _decimals Type: uint256, Indexed: false
               * @param _supply Type: uint256, Indexed: false
               */
              'new'(
                _name: Arrayish,
                _symbol: Arrayish,
                _decimals: BigNumberish,
                _supply: BigNumberish,
                overrides?: ContractTransactionOverrides
              ): Promise<ContractTransaction>;

              /**
               *Payable:false
               *Constant:true
               *StateMutability:view
               *Type:function
               * @param ownerType:address,Indexed:false
               */
               getCars(owner:string, overrides?:ContractCallOverrides):Promise<OwnedCarsResponse[]>;
            }
    `),
        ),
      )
      expect(writeFileSyncSpy.calls.mostRecent().args[2]).toEqual({
        mode: 493,
      })
    })

    it('should call _ethersFactory.buildEthersInterfaces once', async () => {
      const abiGeneratorOptionsClone = deepClone(abiGeneratorOptions)
      abiGeneratorOptionsClone.callGenerate = false

      const generatorContextClone = deepClone(generatorContext)
      generatorContextClone.library = libraryMap.ethers_v5

      const instance = await callSuccessAbiGeneratorInstance(
        abiGeneratorOptionsClone,
        generatorContextClone,
      )

      expect(instance).toBeDefined()

      const buildEthersInterfacesSpy = vi
        .spyOn(
          // @ts-ignore
          instance._ethersFactory,
          'buildInterfaces',
        )
        .mockImplementation(() => 'mockImplementation')

      const buildWeb3InterfacesSpy = vi
        .spyOn(
          // @ts-ignore
          instance._web3Factory,
          'buildInterfaces',
        )
        .mockImplementation(() => 'mockImplementation')

      await instance!.generate()

      expect(buildEthersInterfacesSpy).toHaveBeenCalledTimes(1)
      expect(buildEthersInterfacesSpy).toHaveBeenCalledWith(
        'Abi',
        libraryMap.ethers_v5,
      )

      expect(buildWeb3InterfacesSpy).toHaveBeenCalledTimes(0)
    })

    it('should call _ethersFactory.buildEventInterfaceProperties once', async () => {
      const abiGeneratorOptionsClone = deepClone(abiGeneratorOptions)
      abiGeneratorOptionsClone.callGenerate = false

      const generatorContextClone = deepClone(generatorContext)
      generatorContextClone.library = libraryMap.ethers_v5

      const instance = await callSuccessAbiGeneratorInstance(
        abiGeneratorOptionsClone,
        generatorContextClone,
      )

      expect(instance).toBeDefined()

      const ethersBuildEventInterfacePropertiesSpy = vi
        .spyOn(
          // @ts-ignore
          instance._ethersFactory,
          'buildEventInterfaceProperties',
        )
        .mockImplementation(() => 'mockImplementation')

      const web3BuildEventInterfacePropertiesSpy = vi
        .spyOn(
          // @ts-ignore
          instance._web3Factory,
          'buildEventInterfaceProperties',
        )
        .mockImplementation(() => 'mockImplementation')

      await instance!.generate()

      expect(ethersBuildEventInterfacePropertiesSpy).toHaveBeenCalledTimes(1)
      expect(ethersBuildEventInterfacePropertiesSpy).toHaveBeenCalledWith([
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: 'token', type: 'address' },
            { indexed: true, name: 'exchange', type: 'address' },
            { indexed: false, name: 'user', type: 'address' },
            { indexed: true, name: '_value', type: 'uint256' },
          ],
          name: 'Event1',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: '_owner', type: 'address' },
            { indexed: true, name: '_spender', type: 'address' },
            { indexed: false, name: '_value', type: 'uint256' },
          ],
          name: 'Event2',
          type: 'event',
        },
        {
          constant: false,
          inputs: [
            {
              components: [
                { name: 'address', type: 'address' },
                { name: 'timestamps', type: 'uint8[2]' },
              ],
              name: 'o',
              type: 'tuple',
            },
          ],
          name: 'tupleInputOnly',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { name: 'exchangeAddress', type: 'address' },
            { name: 'internalAddress', type: 'address' },
          ],
          name: 'tupleInputAndOutput',
          outputs: [
            { name: 'affiliate', type: 'address' },
            { name: 'offerID', type: 'bytes32' },
            { name: 'creationTime', type: 'uint256' },
            { name: 'timestamp', type: 'uint8' },
            { name: 'timestamps', type: 'uint8[5]' },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { name: '', type: 'address' },
            { name: '', type: 'address' },
          ],
          name: 'tupleNoInputNames',
          outputs: [
            { name: 'affiliate', type: 'address' },
            { name: 'offerID', type: 'bytes32' },
            { name: 'creationTime', type: 'uint256' },
            { name: 'timestamp', type: 'uint8' },
            { name: 'timestamps', type: 'uint8[5]' },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { name: 'address1', type: 'address' },
            { name: 'address2', type: 'address' },
          ],
          name: 'tupleWithParametersNames',
          outputs: [
            { name: 'affiliate', type: 'address' },
            { name: 'offerID', type: 'bytes32' },
            { name: 'creationTime', type: 'uint256' },
            { name: 'timestamp', type: 'uint8' },
            { name: 'timestamps', type: 'uint8[5]' },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: false,
          inputs: [{ name: 'inputData', type: 'bytes32[2]' }],
          name: 'byteArrayInputExample',
          outputs: [],
          payable: true,
          stateMutability: 'payable',
          type: 'function',
        },
        {
          constant: true,
          gas: 783,
          inputs: [],
          name: 'int8ReturnExample',
          outputs: [{ name: 'out', type: 'uint8' }],
          payable: false,
          type: 'function',
        },
        {
          constant: true,
          gas: 783,
          inputs: [],
          name: 'int256ReturnExample',
          outputs: [{ name: 'out', type: 'uint256' }],
          payable: false,
          type: 'function',
        },
        {
          constant: true,
          gas: 783,
          inputs: [
            { name: 'valid', type: 'boolean' },
            { name: 'exchangeAddress', type: 'address' },
            { name: 'timestamp', type: 'uint8' },
          ],
          name: 'easyExample',
          outputs: [{ name: 'out', type: 'uint256' }],
          payable: false,
          type: 'function',
        },
        {
          name: '__init__',
          outputs: [],
          inputs: [
            { type: 'bytes32', name: '_name' },
            { type: 'bytes32', name: '_symbol' },
            { type: 'uint256', name: '_decimals' },
            { type: 'uint256', name: '_supply' },
          ],
          constant: false,
          payable: false,
          type: 'constructor',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
            },
          ],
          name: 'getCars',
          outputs: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: 'tokenId',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256[3]',
                  name: 'attachedComponents',
                  type: 'uint256[3]',
                },
                {
                  internalType: 'uint256[10]',
                  name: 'detachedComponents',
                  type: 'uint256[10]',
                },
                {
                  internalType: 'address',
                  name: 'owner',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'detachedComponentsCount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct Car.CarInstance[]',
              name: 'ownedCars',
              type: 'tuple[]',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
      ])

      expect(web3BuildEventInterfacePropertiesSpy).toHaveBeenCalledTimes(0)
    })

    it('should call _ethersFactory.buildMethodReturnContext 10 times', async () => {
      const abiGeneratorOptionsClone = deepClone(abiGeneratorOptions)
      abiGeneratorOptionsClone.callGenerate = false

      const generatorContextClone = deepClone(generatorContext)
      generatorContextClone.library = libraryMap.ethers_v5

      const instance = await callSuccessAbiGeneratorInstance(
        abiGeneratorOptionsClone,
        generatorContextClone,
      )

      expect(instance).toBeDefined()

      const ethersBuildMethodReturnContextSpy = vi
        .spyOn(
          // @ts-ignore
          instance._ethersFactory,
          'buildMethodReturnContext',
        )
        .mockImplementation(() => 'mockImplementation')

      const web3BuildMethodReturnContextSpy = vi
        .spyOn(
          // @ts-ignore
          instance._web3Factory,
          'buildMethodReturnContext',
        )
        .mockImplementation(() => 'mockImplementation')

      await instance!.generate()

      expect(ethersBuildMethodReturnContextSpy).toHaveBeenCalledTimes(10)
      expect(web3BuildMethodReturnContextSpy).toHaveBeenCalledTimes(0)
    })
  })
})
