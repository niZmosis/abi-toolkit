[**@ethereum-abi-types-generator/utils v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/utils](../README.md) / isQuoteExactMethod

# Function: isQuoteExactMethod()

> **isQuoteExactMethod**(`abiItem`): `boolean`

Checks if an ABI item is of Uniswap Quoters quoteExact methods.

## Parameters

• **abiItem**: [`AbiItem`](../../types/type-aliases/AbiItem.md)

The ABI item to check.

## Returns

`boolean`

True if the ABI item never modifies the blockchain state, false otherwise.

## Defined in

[abi.utils.ts:48](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/utils/src/abi.utils.ts#L48)
