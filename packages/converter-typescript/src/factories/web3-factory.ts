import { AbstractFactory } from '@ethereum-abi-types-generator/converter-abstract'
import type { AbiItem, Library } from '@ethereum-abi-types-generator/types'
import {
  abiItemsMap,
  isAcceptsEther,
  isNeverModifyBlockchainState,
  libraryMap,
} from '@ethereum-abi-types-generator/utils'

import TypeScriptHelpers from '../utils/helpers'

export class Web3Factory extends AbstractFactory {
  public override buildInterfaces({
    abiName,
    verbatimModuleSyntax,
  }: {
    abiName: string
    library?: Library
    libraryImportAlias?: string
    verbatimModuleSyntax?: boolean
  }): string {
    return `import${verbatimModuleSyntax ? ' type' : ''} BN from "bn.js";
    import${verbatimModuleSyntax ? ' type' : ''} BigNumber from 'bignumber.js';
    import${verbatimModuleSyntax ? ' type' : ''} { PromiEvent, TransactionReceipt, EventResponse, EventData, Web3ContractContext } from "@ethereum-abi-types-generator/converter-typescript";

    import${verbatimModuleSyntax ? ' type' : ''} { MethodPayableReturnContext, MethodConstantReturnContext, MethodReturnContext } from './common-types';

    export type ${abiName}ContractContext = Web3ContractContext<
      ${abiName || 'Contract'},
      ${abiName}MethodNames,
      ${abiName}EventsContext,
      ${abiName}Events
    >;
    `
  }

  public buildEventInterfaceProperties({
    abiItems,
  }: {
    abiItems: AbiItem[]
  }): string {
    let eventProperties = ''
    for (let i = 0; i < abiItems.length; i++) {
      if (abiItems[i].type === abiItemsMap.event) {
        let filtersProperties = '{'
        for (let a = 0; a < abiItems[i].inputs!.length; a++) {
          if (abiItems[i].inputs![a].indexed === true) {
            const parameterType = TypeScriptHelpers.getSolidityInputTsType({
              abiInput: abiItems[i].inputs![a],
              library: libraryMap.web3,
              suffix: 'EventEmittedResponse',
            })
            filtersProperties += `${
              abiItems[i].inputs![a].name
            }?: ${parameterType} | ${parameterType}[],`
          }
        }

        filtersProperties += '}'

        const parameters = `
         {
             filter?: ${filtersProperties};
             fromBlock?: number;
             toBlock?: 'latest' | number;
             topics?: string[]
         }
         `

        eventProperties += `${abiItems[i].name}(parameters: ${parameters}, callback?: (error: Error, event: EventData) => void): EventResponse;`
      }
    }

    return eventProperties
  }

  public buildMethodReturnContext({
    abiName,
    type,
    abiItem,
  }: {
    abiName: string
    type: string
    abiItem: AbiItem
  }): string {
    if (isNeverModifyBlockchainState(abiItem)) {
      return `: ${abiName}MethodConstantReturnContext<${type}>`
    }

    if (isAcceptsEther(abiItem)) {
      return `: ${abiName}MethodPayableReturnContext`
    }

    return `: ${abiName}MethodReturnContext`
  }
}
