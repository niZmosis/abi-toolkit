import type { AbiItem, AbiItemType } from '@abi-toolkit/types'
import type { JsonFragment } from '@ethersproject/abi'

/**
 * Array of supported ABI item types.
 */
export const AbiItemTypes: AbiItemType[] = [
  'event',
  'function',
  'constructor',
  'fallback',
] as const

/**
 * Map of ABI item types to themselves for easy lookup.
 */
export const abiItemsMap: { [K in AbiItemType]: K } = Object.fromEntries(
  AbiItemTypes.map((type) => [type, type]),
) as any

/**
 * Type guard to check if a value is a supported ABI item type.
 * @param abiItemType - The value to check.
 * @returns True if the value is a supported ABI item type, false otherwise.
 */
export const isAbiItemType = (
  abiItemType: AbiItemType,
): abiItemType is AbiItemType => AbiItemTypes.includes(abiItemType as any)

/**
 * Checks if an ABI item never modifies the blockchain state.
 * @param abiItem - The ABI item to check.
 * @returns True if the ABI item never modifies the blockchain state, false otherwise.
 */
export function isNeverModifyBlockchainState(abiItem: AbiItem): boolean {
  return (
    abiItem.constant ||
    abiItem.stateMutability === 'view' ||
    abiItem.stateMutability === 'pure'
  )
}

/**
 * Checks if an ABI item is of Uniswap Quoters quoteExact methods.
 * @param abiItem - The ABI item to check.
 * @returns True if the ABI item never modifies the blockchain state, false otherwise.
 */
export function isQuoteExactMethod(abiItem: AbiItem): boolean {
  return abiItem.name?.startsWith('quoteExact') && !!abiItem.outputs?.length
}

/**
 * Checks if an ABI item accepts Ether.
 * Used for Web3.js compatibility.
 * @param abiItem - The ABI item to check.
 * @returns True if the ABI item accepts Ether, false otherwise.
 */
export function isAcceptsEther(abiItem: AbiItem): boolean {
  return (
    !isNeverModifyBlockchainState(abiItem) &&
    (abiItem.payable || abiItem.stateMutability === 'payable')
  )
}

/**
 * Type guard to check if an object is a JSON fragment.
 * @param object - The object to check.
 * @returns True if the object is a JSON fragment, false otherwise.
 */
export function isJsonFragment(object: any): object is JsonFragment {
  if (typeof object !== 'object' || object === null) {
    return false
  }

  const isConstructor = object.type === 'constructor'
  const hasInputs = Array.isArray(object.inputs)
  const hasType = typeof object.type === 'string'

  return isConstructor || (hasInputs && hasType)
}

/**
 * Type guard to check if an array of objects are JSON fragments.
 * @param objects - The array of objects to check.
 * @returns True if the array of objects are JSON fragments, false otherwise.
 */
export function isJsonFragmentArray(objects: any): objects is JsonFragment[] {
  if (!Array.isArray(objects)) {
    return false
  }

  return objects.some(isJsonFragment)
}
