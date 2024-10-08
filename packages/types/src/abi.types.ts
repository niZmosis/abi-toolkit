import type { SolidityType } from './solidity.types'

/**
 * Represents an input parameter in an ABI item.
 */
export type AbiInput = {
  /** The name of the input parameter. */
  name: string
  /** The Solidity type of the input parameter. */
  type: SolidityType
  /** The internal type of the input parameter. */
  internalType?: string
  /** Whether the input parameter is indexed (used in events). */
  indexed?: boolean
  /** The components of the input parameter, if it is an array or struct. */
  components?: AbiInput[]
}

/**
 * Represents an output parameter in an ABI item.
 */
export type AbiOutput = {
  /** The name of the output parameter. */
  name: string
  /** The type of the output parameter. */
  type: string
  /** The internal type of the output parameter. */
  internalType?: string
  /** The components of the output parameter, if it is an array or struct. */
  components?: AbiOutput[]
}

/**
 * Represents the context of an ABI file path.
 */
export type AbiFilePathContext = {
  /** The file path to the ABI file. */
  filePath: string
  /** The ABI items in the ABI file. */
  abiItems: AbiItem[]
  /** The name of the contract in the ABI file, used by frameworks like hardhat and truffle. */
  frameworkContractName?: string | undefined
}

/**
 * Represents the types of ABI items.
 */
export type AbiItemType = 'event' | 'function' | 'constructor' | 'fallback'

/**
 * Represents the types of state mutability in an ABI item.
 */
export type StateMutabilityType = 'pure' | 'view' | 'nonpayable' | 'payable'

/**
 * Represents an ABI item.
 */
export type AbiItem = {
  /** The name of the ABI item. */
  name: string
  /** The type of the ABI item. */
  type: AbiItemType

  /** Whether the event is anonymous (used in events). */
  anonymous?: boolean

  /** Whether the function is payable (used in functions). */
  payable?: boolean
  /** Whether the function is constant (used in functions). */
  constant?: boolean
  /** The state mutability of the ABI item. */
  stateMutability?: StateMutabilityType

  /** The input parameters of the ABI item. */
  inputs?: AbiInput[]
  /** The output parameters of the ABI item. */
  outputs?: AbiOutput[]

  /** The gas limit for the ABI item. */
  gas?: number
}
