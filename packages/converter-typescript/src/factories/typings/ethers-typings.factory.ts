import type {
  AbiItem,
  Library,
  TypingsFactory,
} from '@ethereum-abi-types-generator/types'
import {
  mapSolidityTypeToTypescriptString,
  isNeverModifyBlockchainState,
  abiItemsMap,
} from '@ethereum-abi-types-generator/utils'

/**
 * Factory class for generating Ethers-specific typings.
 */
export class EthersFactory implements TypingsFactory {
  /**
   * Builds the interfaces for Ethers contract context.
   *
   * @param options - The options for building interfaces.
   * @param options.abiName - The name of the ABI.
   * @param options.libraryImportAlias - The alias for library import.
   * @param options.library - The Ethers library version.
   * @param options.verbatimModuleSyntax - Whether to use verbatim module syntax.
   * @returns A string containing the generated interfaces.
   */
  public buildInterfaces({
    abiName,
    libraryImportAlias,
    library,
    verbatimModuleSyntax,
  }: {
    abiName: string
    libraryImportAlias: string
    library: Library
    verbatimModuleSyntax: boolean
  }): string {
    switch (library) {
      case 'ethers_v4':
        return `
          import${verbatimModuleSyntax ? ' type' : ''} { ContractTransaction } from "${libraryImportAlias || 'ethers'}";
          import${verbatimModuleSyntax ? ' type' : ''} { Arrayish, BigNumber, BigNumberish, Interface } from "${libraryImportAlias || 'ethers'}/utils";
          import${verbatimModuleSyntax ? ' type' : ''} { EthersContractContext } from "@ethereum-abi-types-generator/converter-typescript";

          import${verbatimModuleSyntax ? ' type' : ''} { EventFilter, ContractTransactionOverrides, ContractCallOverrides } from './common-types';

          export type ContractContext = EthersContractContext<
            ${abiName || 'Contract'},
            ${abiName}EventsContext,
            ${abiName}Events
          >;
        `
      case 'ethers_v5':
        return `
           import${verbatimModuleSyntax ? ' type' : ''} { ContractTransaction,
                    ContractInterface,
                    BytesLike as Arrayish,
                    BigNumber,
                    BigNumberish } from "${libraryImportAlias || 'ethers'}";
           import${verbatimModuleSyntax ? ' type' : ''} { EthersContractContextV5 } from "@ethereum-abi-types-generator/converter-typescript";

          import${verbatimModuleSyntax ? ' type' : ''} { EventFilter, ContractTransactionOverrides, ContractCallOverrides } from './common-types';

           export type ContractContext = EthersContractContextV5<
            ${abiName || 'Contract'},
            ${abiName}MethodNames,
            ${abiName}EventsContext,
            ${abiName}Events
           >;
        `
      case 'ethers_v6':
        return `
           import${verbatimModuleSyntax ? ' type' : ''} { ContractTransaction,
                    ContractInterface,
                    BytesLike as Arrayish,
                    BigNumberish } from "${libraryImportAlias || 'ethers'}";
           import${verbatimModuleSyntax ? ' type' : ''} { EthersContractContextV6 } from "@ethereum-abi-types-generator/converter-typescript";

           import${verbatimModuleSyntax ? ' type' : ''} { EventFilter, ContractTransactionOverrides, ContractCallOverrides } from './common-types';

           export type ContractContext = EthersContractContextV6<
            ${abiName || 'Contract'},
            ${abiName}MethodNames,
            ${abiName}EventsContext,
            ${abiName}Events
           >;
        `
      default:
        throw new Error(`Unsupported ethers version ${library}`)
    }
  }

  /**
   * Builds the event interface properties for Ethers contracts.
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
      if (abiItems[i].type === abiItemsMap.event) {
        const inputs = abiItems[i].inputs || []
        const params = inputs
          .map(
            (input, index) =>
              `${input.name || `param${index}`}: ${mapSolidityTypeToTypescriptString(input.type)}`,
          )
          .join(', ')

        eventProperties += `${abiItems[i].name}(${params}): EventFilter;\n`
      }
    }

    return eventProperties
  }

  /**
   * Builds the method return context for Ethers contract methods.
   *
   * @param options - The options for building the method return context.
   * @param options.type - The return type of the method.
   * @param options.abiItem - The ABI item representing the method.
   * @returns A string representing the method return context.
   */
  public buildMethodReturnContext({
    type,
    abiItem,
  }: {
    abiName?: string
    type: string
    abiItem: AbiItem
  }): string {
    if (isNeverModifyBlockchainState(abiItem)) {
      return `: Promise<${type}>`
    }

    return `: Promise<ContractTransaction>`
  }

  /**
   * Add overrides to the parameters.
   * https://docs.ethers.io/ethers.js/html/api-contract.html#overrides
   *
   * @param options - The options for adding overrides to the parameters
   * @param options.parameters - The parameters
   * @param options.abiItem - The ABI item
   * @returns The parameters with overrides as a string
   */
  public addOverridesToParameters({
    parameters,
    abiItem,
  }: {
    parameters: string
    abiItem: AbiItem
  }): string {
    // take into consideration the `(` defined at the start
    if (parameters.length > 1) {
      parameters += ', '
    }

    if (isNeverModifyBlockchainState(abiItem)) {
      return (parameters += `overrides?: ContractCallOverrides`)
    }

    return (parameters += `overrides?: ContractTransactionOverrides`)
  }
}
