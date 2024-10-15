import type {
  SolidityType,
  SolidityTypeMap,
  SolidityToTsTypeMap,
} from '@ethereum-abi-types-generator/types'

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

/**
 * Maps a Solidity type string to its corresponding TypeScript type string
 * @param solidityType The Solidity type to map
 * @returns The corresponding TypeScript type
 */
export const solidityTypeToTsTypeMap: SolidityToTsTypeMap = {
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
 * Maps a Solidity type to its corresponding TypeScript type
 * @param solidityType The Solidity type to map
 * @returns The corresponding TypeScript type
 */
export function mapSolidityTypeToTypescriptString(
  solidityType: SolidityType,
): string {
  // Check if it's a basic type
  if (solidityType in solidityTypeToTsTypeMap) {
    return solidityTypeToTsTypeMap[solidityType]
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
    const elementType = mapSolidityTypeToTypescriptString(baseType)
    return `${elementType}[]`
  }

  // Default case
  return 'any'
}
