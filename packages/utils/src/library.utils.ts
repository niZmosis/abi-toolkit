import type {
  Library,
  EthersLibrary,
  Web3Library,
  Framework,
} from '@abi-toolkit/types'

// ------------------------
// Ethers library types
// ------------------------

/**
 * Array of supported ethers library versions.
 */
export const ethersLibraryTypes: EthersLibrary[] = [
  'ethers_v4',
  'ethers_v5',
  'ethers_v6',
] as const

/**
 * Map of ethers library types to themselves for easy lookup.
 */
export const ethersLibraryMap: { [K in EthersLibrary]: K } = Object.fromEntries(
  ethersLibraryTypes.map((type) => [type, type]),
) as any

/**
 * Type guard to check if a library is an ethers library.
 * @param library - The library to check.
 * @returns True if the library is an ethers library, false otherwise.
 */
export const isEthersLibrary = (library: Library): library is EthersLibrary =>
  ethersLibraryTypes.includes(library as any)

// ------------------------
// Web3 library types
// ------------------------

/**
 * Array of supported web3 library versions.
 */
export const web3LibraryTypes: Web3Library[] = ['web3'] as const

/**
 * Map of web3 library types to themselves for easy lookup.
 */
export const web3LibraryMap: { [K in Web3Library]: K } = Object.fromEntries(
  web3LibraryTypes.map((type) => [type, type]),
) as any

/**
 * Type guard to check if a library is a web3 library.
 * @param library - The library to check.
 * @returns True if the library is a web3 library, false otherwise.
 */
export const isWeb3Library = (library: Library): library is Web3Library =>
  web3LibraryTypes.includes(library as any)

// ------------------------
// Library types
// ------------------------

/**
 * Array of all supported library versions.
 */
export const libraryTypes: Library[] = [
  ...ethersLibraryTypes,
  ...web3LibraryTypes,
] as const

/**
 * Map of all library types to themselves for easy lookup.
 */
export const libraryMap: { [K in Library]: K } = Object.fromEntries(
  libraryTypes.map((type) => [type, type]),
) as any

/**
 * Type guard to check if a library is a supported library.
 * @param library - The library to check.
 * @returns True if the library is a supported library, false otherwise.
 */
export const isLibrary = (library: Library): library is Library =>
  libraryTypes.includes(library as any)

// ------------------------
// Framework types
// ------------------------

/**
 * Array of supported framework types.
 */
export const frameworkTypes: Framework[] = [
  'none',
  'hardhat',
  'truffle',
] as const

/**
 * Map of framework types to themselves for easy lookup.
 */
export const frameworkMap: { [K in Framework]: K } = Object.fromEntries(
  frameworkTypes.map((type) => [type, type]),
) as any

/**
 * Type guard to check if a framework is a supported framework.
 * @param framework - The framework to check.
 * @returns True if the framework is a supported framework, false otherwise.
 */
export const isFramework = (framework: Framework): framework is Framework =>
  frameworkTypes.includes(framework as any)
