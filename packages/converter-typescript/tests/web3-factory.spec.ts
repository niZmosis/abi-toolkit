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
      const verbatimModuleSyntax = false

      expect(
        removeAllWhiteSpace(
          web3Factory.buildInterfaces({
            abiName,
            verbatimModuleSyntax,
          }),
        ),
      ).toEqual(
        removeAllWhiteSpace(`import${verbatimModuleSyntax ? ' type' : ''} BN from "bn.js";
    import${verbatimModuleSyntax ? ' type' : ''} BigNumber from 'bignumber.js';
    import${verbatimModuleSyntax ? ' type' : ''} { PromiEvent, TransactionReceipt, EventResponse, EventData, Web3ContractContext } from "@ethereum-abi-types-generator/converter-typescript";

    import${verbatimModuleSyntax ? ' type' : ''} { MethodPayableReturnContext, MethodConstantReturnContext, MethodReturnContext } from './common-types';

    export type ${abiName}ContractContext = Web3ContractContext<
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
