/**
 * Represents the Solidity integer type.
 */
export type SolidityIntType = 'uint'

/**
 * Represents the Solidity unsigned integer type.
 */
export type SolidityUIntType = 'int'

/**
 * Represents the Solidity number types, including both integer and unsigned integer.
 */
export type SolidityNumberType = SolidityIntType | SolidityUIntType

/**
 * Represents the Solidity address type.
 */
export type SolidityAddressType = 'address'

/**
 * Represents the Solidity boolean type.
 */
export type SolidityBooleanType = 'bool'

/**
 * Represents the Solidity string type.
 */
export type SolidityStringType = 'string'

/**
 * Represents the Solidity bytes type.
 */
export type SolidityBytesType = 'bytes'

/**
 * Represents the Solidity tuple type.
 */
export type SolidityTupleType = 'tuple'

/**
 * Represents the Solidity function type.
 */
export type SolidityFunctionType = 'function'

/**
 * Represents all possible Solidity types.
 */
export type SolidityType =
  | SolidityNumberType
  | SolidityAddressType
  | SolidityBooleanType
  | SolidityStringType
  | SolidityBytesType
  | SolidityTupleType
  | SolidityFunctionType

/**
 * Maps Solidity types to themselves for type-checking purposes.
 */
export type SolidityTypeMap = { [key in SolidityType]: key }

/**
 * Maps Solidity types to their corresponding TypeScript types for Ethers.js V4.
 */
export type SolidityToTsTypeMapV4 = {
  int: 'BigNumberish'
  uint: 'BigNumberish'
  address: 'string'
  bool: 'boolean'
  string: 'string'
  bytes: 'Arrayish'
  tuple: 'any'
  function: 'string'
}

/**
 * Maps Solidity types to their corresponding TypeScript types for Ethers.js V5 an V6.
 */
export type SolidityToTsTypeMap = {
  int: 'BigNumberish'
  uint: 'BigNumberish'
  address: 'string'
  bool: 'boolean'
  string: 'string'
  bytes: 'BytesLike'
  tuple: 'any'
  function: 'string'
}
