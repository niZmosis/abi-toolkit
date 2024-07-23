import { AbstractFactory } from '@ethereum-abi-types-generator/converter-abstract'
import type { AbiItem, Library } from '@ethereum-abi-types-generator/types'
import {
  mapSolidityTypeToTypescriptString,
  isNeverModifyBlockchainState,
  abiItemsMap,
} from '@ethereum-abi-types-generator/utils'

export class EthersFactory extends AbstractFactory {
  public override buildInterfaces({
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

  public override buildEventInterfaceProperties({
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

  public override buildMethodReturnContext({
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
