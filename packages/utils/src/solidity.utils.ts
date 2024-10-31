import type { SolidityTypeMap } from '@ethereum-abi-types-generator/types'

/**
 * Maps a Solidity type to its corresponding string
 * @param solidityType The Solidity type to map
 * @returns The corresponding TypeScript type
 */
export const solidityTypeMap: SolidityTypeMap = {
  int: 'int',
  uint: 'uint',
  address: 'address',
  bool: 'bool',
  string: 'string',
  bytes: 'bytes',
  tuple: 'tuple',
  function: 'function',
} as const
