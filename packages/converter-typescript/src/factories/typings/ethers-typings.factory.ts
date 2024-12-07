import type {
  AbiItem,
  Library,
  SolidityToTsTypeMapV4,
  SolidityToTsTypeMap,
  SolidityType,
  TypingsFactory,
} from '@ethereum-abi-types-generator/types'
import {
  isNeverModifyBlockchainState,
  isQuoteExactMethod,
  abiItemsMap,
} from '@ethereum-abi-types-generator/utils'

/**
 * Maps a Solidity type string to its corresponding TypeScript type string for V4
 * @param solidityType The Solidity type to map
 * @returns The corresponding TypeScript type
 */
const solidityTypeToTsTypeMapV4: SolidityToTsTypeMapV4 = {
  int: 'BigNumberish',
  uint: 'BigNumberish',
  address: 'string',
  bool: 'boolean',
  string: 'string',
  bytes: 'Arrayish',
  tuple: 'any',
  function: 'string',
} as const

/**
 * Maps a Solidity type string to its corresponding TypeScript type string for V5 and V6
 * @param solidityType The Solidity type to map
 * @returns The corresponding TypeScript type
 */
const solidityTypeToTsTypeMap: SolidityToTsTypeMap = {
  int: 'BigNumberish',
  uint: 'BigNumberish',
  address: 'string',
  bool: 'boolean',
  string: 'string',
  bytes: 'BytesLike',
  tuple: 'any',
  function: 'string',
} as const

/**
 * Maps a Solidity type to its corresponding TypeScript type
 * @param solidityType The Solidity type to map
 * @returns The corresponding TypeScript type
 */
function mapSolidityTypeToTypescriptString(
  library: Library,
  solidityType: SolidityType,
): string {
  // Check if it's a basic type
  if (solidityType in solidityTypeToTsTypeMap) {
    switch (library) {
      case 'ethers_v4':
        return solidityTypeToTsTypeMapV4[solidityType]
      case 'ethers_v5':
      case 'ethers_v6':
        return solidityTypeToTsTypeMap[solidityType]
      default:
        throw new Error(`Unsupported Ethers.js library: ${library}`)
    }
  }

  // Check for int/uint variants
  if (solidityType.match(/^(u)?int\d+$/)) {
    return 'BigNumberish'
  }

  // Check for bytes variants
  if (solidityType.match(/^bytes\d+$/)) {
    return 'Bytes'
  }

  // Handle tuple types
  if (solidityType.match(/^tuple(\[(\d*)\])*$/)) {
    const arrayMatch = solidityType.match(/\[(\d*)\]$/)
    if (arrayMatch) {
      const arrayDimension = arrayMatch[0]
      return `any${arrayDimension}` // e.g., any[5] for tuple[5]
    }
    return 'any' // for a single tuple
  }

  // Handle array types
  if (solidityType.endsWith('[]')) {
    const baseType = solidityType.slice(0, -2) as SolidityType
    const elementType = mapSolidityTypeToTypescriptString(library, baseType)
    return `${elementType}[]`
  }

  // Default case
  return 'any'
}

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

          import${verbatimModuleSyntax ? ' type' : ''} { EventFilter, ContractTransactionOverrides, ContractCallOverrides } from './common.types';

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
                    BytesLike,
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
        `
      case 'ethers_v6':
        return `
           import${verbatimModuleSyntax ? ' type' : ''} { ContractTransaction,
                    ContractInterface,
                    BytesLike,
                    BigNumberish } from "${libraryImportAlias || 'ethers'}";
           import${verbatimModuleSyntax ? ' type' : ''} { EthersContractContextV6 } from "@ethereum-abi-types-generator/converter-typescript";

           import${verbatimModuleSyntax ? ' type' : ''} { EventFilter, ContractTransactionOverrides, ContractCallOverrides } from './common.types';

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
   * @param params - The options for building event interface properties.
   * @param param.library - The Ethers library version.
   * @param param.abiItems - The array of ABI items.
   * @returns A string containing the generated event interface properties.
   */
  public buildEventInterfaceProperties({
    library,
    abiItems,
  }: {
    library: Library
    abiItems: AbiItem[]
  }): string {
    let eventProperties = ''

    for (let i = 0; i < abiItems.length; i++) {
      const abiItem = abiItems[i]

      if (!abiItem) {
        continue
      }

      if (abiItem.type === abiItemsMap.event) {
        const inputs = abiItem.inputs || []
        const params = inputs
          .map(
            (input, index) =>
              `${input.name || `param${index}`}: ${mapSolidityTypeToTypescriptString(library, input.type)}`,
          )
          .join(', ')

        eventProperties += `${abiItem.name}(${params}): EventFilter;\n`
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
        return `: Promise<number | BigNumber>`
      }

      return `: Promise<${type}>`
    }

    // Special case for quoteExact methods via Uniswap V3 protocol
    if (isQuoteExactMethod(abiItem)) {
      return `: Promise<${type}>`
    }

    // Modifies blockchain state
    return `: Promise<ContractTransaction>`
  }

  /**
   * Add overrides to the parameters.
   * @link https://docs.ethers.io/ethers.js/html/api-contract.html#overrides
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
