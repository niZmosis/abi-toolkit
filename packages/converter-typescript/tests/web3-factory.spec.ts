import {
  isAcceptsEther,
  isNeverModifyBlockchainState,
  removeAllWhiteSpace,
} from '@ethereum-abi-types-generator/utils'
import { describe, it, expect, beforeEach } from 'vitest'

import { AbiPropertiesMock } from '../../../tests/mocks/abi-properties.mock'
import { Web3Factory } from '../src'

describe('Web3Factory', () => {
  const abiName = 'TestAbi'
  let web3Factory: Web3Factory

  beforeEach(() => {
    web3Factory = new Web3Factory()
  })

  describe('buildInterfaces', () => {
    it('should round correct interface', () => {
      expect(
        removeAllWhiteSpace(
          web3Factory.buildInterfaces({
            abiName,
            verbatimModuleSyntax: false,
          }),
        ),
      ).toEqual(
        removeAllWhiteSpace(`
         import BN from "bn.js";
         import BigNumber from "bignumber.js";
         import { PromiEvent, TransactionReceipt, EventResponse, EventData, Web3ContractContext } from "@ethereum-abi-types-generator/converter-typescript";

         export interface ${abiName}CallOptions {
          from?: string;
          gasPrice?: string;
          gas?: number;
        }

        export interface ${abiName}SendOptions {
          from: string;
          value?: number | string | BN | BigNumber;
          gasPrice?: string;
          gas?: number;
        }

        export interface ${abiName}EstimateGasOptions {
          from?: string;
          value?: number | string | BN | BigNumber;
          gas?: number;
        }

        export interface ${abiName}MethodPayableReturnContext {
          send(options: ${abiName}SendOptions):PromiEvent<TransactionReceipt>;
          send(
              options: ${abiName}SendOptions,
              callback: (error: Error, result: any) => void
          ): PromiEvent<TransactionReceipt>;
          estimateGas(options: ${abiName}EstimateGasOptions): Promise<number>;
          estimateGas(
              options: ${abiName}EstimateGasOptions,
              callback: (error: Error, result: any) => void
          ): Promise<number>;
          encodeABI(): string;
        }

        export interface ${abiName}MethodConstantReturnContext<TCallReturn> {
          call(): Promise<TCallReturn>;
          call(options: ${abiName}CallOptions): Promise<TCallReturn>;
          call(
          options: ${abiName}CallOptions,
          callback: (error: Error, result: TCallReturn) => void
          ): Promise<TCallReturn>;
          encodeABI():string;
        }

        export interface ${abiName}MethodReturnContext extends ${abiName}MethodPayableReturnContext {}

        export type ${abiName}ContractContext = Web3ContractContext<
          ${abiName},
          ${abiName}MethodNames,
          ${abiName}EventsContext,
          ${abiName}Events
        >;
        `),
      )
    })
  })

  describe('buildEventInterfaceProperties', () => {
    it('should return empty string if 0 length abi items', () => {
      expect(
        web3Factory.buildEventInterfaceProperties({ abiItems: [] }),
      ).toEqual('')
    })

    it('should build all events from the ABI', () => {
      expect(
        removeAllWhiteSpace(
          web3Factory.buildEventInterfaceProperties({
            abiItems: AbiPropertiesMock.AbiItemsMock,
          }),
        ),
      ).toEqual(
        removeAllWhiteSpace(`
          NewExchange(parameters:
          {
              filter?: {token?: string | string[],exchange?: string | string[],};
              fromBlock?: number;
              toBlock?: 'latest' | number;
              topics?: string[]
          },
          callback?: (error: Error, event: EventData) => void): EventResponse;
      `),
      )
    })
  })

  describe('buildMethodReturnContext', () => {
    it(`should return ${`${abiName}MethodConstantReturnContext<void>`} if abiItem.constant === true`, () => {
      expect(
        web3Factory.buildMethodReturnContext({
          abiName,
          type: 'void',
          abiItem: AbiPropertiesMock.AbiItemsMock.find((m) => m.constant)!,
        }),
      ).toEqual(`: ${abiName}MethodConstantReturnContext<void>`)
    })

    it(`should return ${`${abiName}MethodConstantReturnContext<void>`} if abiItem.stateMutability === \`view\``, () => {
      expect(
        web3Factory.buildMethodReturnContext({
          abiName,
          type: 'void',
          abiItem: AbiPropertiesMock.AbiTokenV2Mock.find(
            (m) => m.stateMutability === 'view',
          )!,
        }),
      ).toEqual(`: ${abiName}MethodConstantReturnContext<void>`)
    })

    it(`should return ${`${abiName}MethodConstantReturnContext<void>`} if abiItem.stateMutability === \`pure\``, () => {
      expect(
        web3Factory.buildMethodReturnContext({
          abiName,
          type: 'void',
          abiItem: AbiPropertiesMock.AbiItemsV2Mock.find(
            (m) => m.stateMutability === 'pure',
          )!,
        }),
      ).toEqual(`: ${abiName}MethodConstantReturnContext<void>`)
    })

    it(`should return ${`${abiName}MethodPayableReturnContext`} abiItem.payable === true`, () => {
      expect(
        web3Factory.buildMethodReturnContext({
          abiName,
          type: 'void',
          abiItem: AbiPropertiesMock.AbiTokenMock.find(
            (m) => !isNeverModifyBlockchainState(m) && m.payable,
          )!,
        }),
      ).toEqual(`: ${abiName}MethodPayableReturnContext`)
    })

    it(`should return ${`${abiName}MethodPayableReturnContext`} abiItem.stateMutability === \`payable\``, () => {
      expect(
        web3Factory.buildMethodReturnContext({
          abiName,
          type: 'void',
          abiItem: AbiPropertiesMock.AbiItemsV2Mock.find(
            (m) => !m.constant && m.stateMutability === 'payable',
          )!,
        }),
      ).toEqual(`: ${abiName}MethodPayableReturnContext`)
    })

    it(`should return ${`${abiName}MethodReturnContext`} if not accepts ether and cannot modify blockchain state`, () => {
      expect(
        web3Factory.buildMethodReturnContext({
          abiName,
          type: 'void',
          abiItem: AbiPropertiesMock.AbiTokenMock.find(
            (m) => !isNeverModifyBlockchainState(m) && !isAcceptsEther(m),
          )!,
        }),
      ).toEqual(`: ${abiName}MethodReturnContext`)
    })
  })
})
