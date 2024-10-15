import {
  isAcceptsEther,
  isNeverModifyBlockchainState,
  libraryMap,
  removeAllWhiteSpace,
} from '@ethereum-abi-types-generator/utils'
import { describe, it, expect, beforeEach } from 'vitest'

import { AbiPropertiesMock } from '../../../tests/mocks/abi-properties.mock'
import { EthersFactory } from '../src/factories/typings/ethers-typings.factory'

describe('EthersFactory', () => {
  const abiName = 'TestAbi'
  let ethersFactory: EthersFactory

  beforeEach(() => {
    ethersFactory = new EthersFactory()
  })

  describe('buildInterfaces', () => {
    it('should return correct interface for ethers version 4 or below', () => {
      const library = libraryMap.ethers_v4
      const libraryImportAlias = 'ethers'
      const verbatimModuleSyntax = false

      expect(
        removeAllWhiteSpace(
          ethersFactory.buildInterfaces({
            abiName,
            library,
            libraryImportAlias,
            verbatimModuleSyntax,
          }),
        ),
      ).toEqual(
        removeAllWhiteSpace(`
          import${verbatimModuleSyntax ? ' type' : ''} { ContractTransaction } from "${libraryImportAlias || 'ethers'}";
          import${verbatimModuleSyntax ? ' type' : ''} { Arrayish, BigNumber, BigNumberish, Interface } from "${libraryImportAlias || 'ethers'}/utils";
          import${verbatimModuleSyntax ? ' type' : ''} { EthersContractContext } from "@ethereum-abi-types-generator/converter-typescript";

          import${verbatimModuleSyntax ? ' type' : ''} { EventFilter, ContractTransactionOverrides, ContractCallOverrides } from './common.types';

          export type ContractContext = EthersContractContext<
            ${abiName || 'Contract'},
            ${abiName}EventsContext,
            ${abiName}Events
          >;
        `),
      )
    })

    it('should return correct interface for ethers version 5', () => {
      const library = libraryMap.ethers_v5
      const libraryImportAlias = 'ethers'
      const verbatimModuleSyntax = false

      expect(
        removeAllWhiteSpace(
          ethersFactory.buildInterfaces({
            abiName,
            library,
            libraryImportAlias,
            verbatimModuleSyntax,
          }),
        ),
      ).toEqual(
        removeAllWhiteSpace(`
           import${verbatimModuleSyntax ? ' type' : ''} { ContractTransaction,
                    ContractInterface,
                    BytesLike as Arrayish,
                    BigNumber,
                    BigNumberish } from "${libraryImportAlias || 'ethers'}";
           import${verbatimModuleSyntax ? ' type' : ''} { EthersContractContextV5 } from "@ethereum-abi-types-generator/converter-typescript";

          import${verbatimModuleSyntax ? ' type' : ''} { EventFilter, ContractTransactionOverrides, ContractCallOverrides } from './common.types';

           export type ContractContext = EthersContractContextV5<
            ${abiName || 'Contract'},
            ${abiName}MethodNames,
            ${abiName}EventsContext,
            ${abiName}Events
           >;
        `),
      )
    })

    it('should return correct interface for ethers version 6', () => {
      const library = libraryMap.ethers_v6
      const libraryImportAlias = 'ethers'
      const verbatimModuleSyntax = false

      expect(
        removeAllWhiteSpace(
          ethersFactory.buildInterfaces({
            abiName,
            library,
            libraryImportAlias,
            verbatimModuleSyntax,
          }),
        ),
      ).toEqual(
        removeAllWhiteSpace(`
           import${verbatimModuleSyntax ? ' type' : ''} { ContractTransaction,
                    ContractInterface,
                    BytesLike as Arrayish,
                    BigNumberish } from "${libraryImportAlias || 'ethers'}";
           import${verbatimModuleSyntax ? ' type' : ''} { EthersContractContextV6 } from "@ethereum-abi-types-generator/converter-typescript";

           import${verbatimModuleSyntax ? ' type' : ''} { EventFilter, ContractTransactionOverrides, ContractCallOverrides } from './common.types';

           export type ContractContext = EthersContractContextV6<
            ${abiName || 'Contract'},
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
        ethersFactory.buildEventInterfaceProperties({ abiItems: [] }),
      ).toEqual('')
    })

    it('should build all events from the ABI', () => {
      expect(
        removeAllWhiteSpace(
          ethersFactory.buildEventInterfaceProperties({
            abiItems: AbiPropertiesMock.AbiItemsMock,
          }),
        ),
      ).toEqual(
        removeAllWhiteSpace(
          'NewExchange(token: string, exchange: string): EventFilter;',
        ),
      )
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
