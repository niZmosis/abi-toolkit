import {
  isAcceptsEther,
  isNeverModifyBlockchainState,
  libraryMap,
  removeAllWhiteSpace,
} from '@ethereum-abi-types-generator/utils'
import { describe, it, expect, beforeEach } from 'vitest'

import { AbiPropertiesMock } from '../../../tests/mocks/abi-properties.mock'
import { EthersFactory } from '../src'

describe('EthersFactory', () => {
  const abiName = 'TestAbi'
  let ethersFactory: EthersFactory

  beforeEach(() => {
    ethersFactory = new EthersFactory()
  })

  describe('buildInterfaces', () => {
    it('should return correct interface for ethers version 4 or below', () => {
      expect(
        removeAllWhiteSpace(
          ethersFactory.buildInterfaces({
            abiName,
            library: libraryMap.ethers_v4,
            libraryImportAlias: 'ethers',
            verbatimModuleSyntax: false,
          }),
        ),
      ).toEqual(
        removeAllWhiteSpace(`
          import { ContractTransaction } from "ethers";
          import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
          import { EthersContractContext } from "@ethereum-abi-types-generator/converter-typescript";

          export type ${abiName}ContractContext = EthersContractContext<
            ${abiName},
            ${abiName}EventsContext,
            ${abiName}Events
          >;

          export declare type ${abiName}EventFilter = {
            address?: string;
            topics?: Array<string>;
            fromBlock?: string | number;
            toBlock?: string | number;
          };

          export interface ${abiName}ContractTransactionOverrides {
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

          export interface ${abiName}ContractCallOverrides {
            /**
             * The address to execute the call as
             */
            from?: string;
            /**
             * The maximum units of gas for the transaction to use
             */
            gasLimit?: number;
          }
        `),
      )
    })

    it('should return correct interface for ethers version 5', () => {
      expect(
        removeAllWhiteSpace(
          ethersFactory.buildInterfaces({
            abiName,
            library: libraryMap.ethers_v5,
            libraryImportAlias: 'ethers',
            verbatimModuleSyntax: false,
          }),
        ),
      ).toEqual(
        removeAllWhiteSpace(`
          import { ContractTransaction,
                    ContractInterface,
                    BytesLike as Arrayish,
                    BigNumber,
                    BigNumberish } from "ethers";
           import { EthersContractContextV5 } from "@ethereum-abi-types-generator/converter-typescript";

          export type ${abiName}ContractContext = EthersContractContextV5<
            ${abiName},
            ${abiName}MethodNames,
            ${abiName}EventsContext,
            ${abiName}Events
          >;

          export declare type ${abiName}EventFilter = {
            address?: string;
            topics?: Array<string>;
            fromBlock?: string | number;
            toBlock?: string | number;
          };

          export interface ${abiName}ContractTransactionOverrides {
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

          export interface ${abiName}ContractCallOverrides {
            /**
             * The address to execute the call as
             */
            from?: string;
            /**
             * The maximum units of gas for the transaction to use
             */
            gasLimit?: number;
          }
        `),
      )
    })
  })

  describe('buildEventInterfaceProperties', () => {
    it('should return empty string if 0 length abi items', () => {
      expect(
        ethersFactory.buildEventInterfaceProperties({ abiItems: [] }),
      ).toEqual('')
    })

    it('should build all events from the ABI', () => {
      expect(
        ethersFactory.buildEventInterfaceProperties({
          abiItems: AbiPropertiesMock.AbiItemsMock,
        }),
      ).toEqual(`NewExchange(...parameters: any): ${abiName}EventFilter;`)
    })
  })

  describe('buildMethodReturnContext', () => {
    it('should return `Promise<void>` if abiItem.constant === true', () => {
      expect(
        ethersFactory.buildMethodReturnContext({
          type: 'void',
          abiItem: AbiPropertiesMock.AbiItemsMock.find((m) => m.constant)!,
        }),
      ).toEqual(': Promise<void>')
    })

    it('should return `Promise<void>` if abiItem.stateMutability === `view`', () => {
      expect(
        ethersFactory.buildMethodReturnContext({
          type: 'void',
          abiItem: AbiPropertiesMock.AbiTokenV2Mock.find(
            (m) => m.stateMutability === `view`,
          )!,
        }),
      ).toEqual(': Promise<void>')
    })

    it('should return `Promise<void>` if abiItem.stateMutability === `pure`', () => {
      expect(
        ethersFactory.buildMethodReturnContext({
          type: 'void',
          abiItem: AbiPropertiesMock.AbiItemsV2Mock.find(
            (m) => m.stateMutability === `pure`,
          )!,
        }),
      ).toEqual(': Promise<void>')
    })

    it('should return `Promise<ContractTransaction>` if abiItem.payable === true', () => {
      expect(
        ethersFactory.buildMethodReturnContext({
          type: 'void',
          abiItem: AbiPropertiesMock.AbiTokenMock.find(
            (m) => !isNeverModifyBlockchainState(m) && m.payable,
          )!,
        }),
      ).toEqual(': Promise<ContractTransaction>')
    })

    it('should return `Promise<ContractTransaction>` if abiItem.stateMutability === `payable`', () => {
      expect(
        ethersFactory.buildMethodReturnContext({
          type: 'void',
          abiItem: AbiPropertiesMock.AbiItemsV2Mock.find(
            (m) => !m.constant && m.stateMutability === 'payable',
          )!,
        }),
      ).toEqual(': Promise<ContractTransaction>')
    })

    it('should return `Promise<ContractTransaction>` if not accepts ether and cannot modify blockchain state', () => {
      expect(
        ethersFactory.buildMethodReturnContext({
          type: 'void',
          abiItem: AbiPropertiesMock.AbiTokenMock.find(
            (m) => !isNeverModifyBlockchainState(m) && !isAcceptsEther(m),
          )!,
        }),
      ).toEqual(': Promise<ContractTransaction>')
    })
  })
})
