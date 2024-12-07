import type { AbiItem, Library, TypingsFactory } from '@abi-toolkit/types'
import {
  abiItemsMap,
  isAcceptsEther,
  isNeverModifyBlockchainState,
  isQuoteExactMethod,
  libraryMap,
} from '@abi-toolkit/utils'

import TypeScriptHelpers from '../../utils/helpers'

/**
 * Factory class for generating Web3-specific typings.
 */
export class Web3Factory implements TypingsFactory {
  /**
   * Builds the interfaces for Web3 contract context.
   *
   * @param options - The options for building interfaces.
   * @param options.abiName - The name of the ABI.
   * @param options.verbatimModuleSyntax - Whether to use verbatim module syntax.
   * @returns A string containing the generated interfaces.
   */
  public buildInterfaces({
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
    import${verbatimModuleSyntax ? ' type' : ''} { PromiEvent, TransactionReceipt, EventResponse, EventData, Web3ContractContext } from "@abi-toolkit/converter-typescript";

    import${verbatimModuleSyntax ? ' type' : ''} { MethodPayableReturnContext, MethodConstantReturnContext, MethodReturnContext } from './common.types';

    export type ${abiName}ContractContext = Web3ContractContext<
      ${abiName || 'Contract'},
      ${abiName}MethodNames,
      ${abiName}EventsContext,
      ${abiName}Events
    >;
    `
  }

  /**
   * Builds the event interface properties for Web3 contracts.
   *
   * @param options - The options for building event interface properties.
   * @param options.abiItems - The array of ABI items.
   * @returns A string containing the generated event interface properties.
   */
  public buildEventInterfaceProperties({
    abiItems,
  }: {
    abiItems: AbiItem[]
  }): string {
    let eventProperties = ''
    for (let i = 0; i < abiItems.length; i++) {
      const abiItem = abiItems[i]

      if (!abiItem) {
        continue
      }

      if (abiItem.type === abiItemsMap.event) {
        let filtersProperties = '{'
        for (let a = 0; a < abiItem.inputs!.length; a++) {
          const abiInput = abiItem.inputs?.[a]

          if (!abiInput) {
            continue
          }

          if (abiInput.indexed === true) {
            const parameterType = TypeScriptHelpers.getSolidityInputTsType({
              abiInput,
              library: libraryMap.web3,
              suffix: 'EventEmittedResponse',
            })
            filtersProperties += `${
              abiInput.name
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

        eventProperties += `${abiItem.name}(parameters: ${parameters}, callback?: (error: Error, event: EventData) => void): EventResponse;`
      }
    }

    return eventProperties
  }

  /**
   * Builds the method return context for Web3 contract methods.
   *
   * @param options - The options for building the method return context.
   * @param options.abiName - The name of the ABI.
   * @param options.type - The return type of the method.
   * @param options.abiItem - The ABI item representing the method.
   * @returns A string representing the method return context.
   */
  public buildMethodReturnContext({
    abiName,
    type,
    abiItem,
  }: {
    abiName: string
    type: string
    abiItem: AbiItem
  }): string {
    // Constant, View or Pure
    if (isNeverModifyBlockchainState(abiItem)) {
      // Special case for decimals method
      if (
        abiItem.outputs?.length === 1 &&
        abiItem.outputs[0]?.type === 'uint8' &&
        abiItem.name === 'decimals'
      ) {
        // Decimals depending on the chain, may either return a number or BigNumber.
        // Known BigNumber chains: Arbitrum, Avalanche, Base and BSC.
        return `: ${abiName}MethodConstantReturnContext<number | BigNumber>`
      }

      return `: ${abiName}MethodConstantReturnContext<${type}>`
    }

    // Special case for quoteExact methods via Uniswap V3 protocol
    if (isQuoteExactMethod(abiItem)) {
      return `: ${abiName}MethodConstantReturnContext<${type}>`
    }

    if (isAcceptsEther(abiItem)) {
      return `: ${abiName}MethodPayableReturnContext`
    }

    return `: ${abiName}MethodReturnContext`
  }
}
