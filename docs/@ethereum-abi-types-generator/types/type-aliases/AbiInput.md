[**@ethereum-abi-types-generator/types v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/types](../README.md) / AbiInput

# Type Alias: AbiInput

> **AbiInput**: `object`

Represents an input parameter in an ABI item.

## Type declaration

### components?

> `optional` **components**: [`AbiInput`](AbiInput.md)[]

The components of the input parameter, if it is an array or struct.

### indexed?

> `optional` **indexed**: `boolean`

Whether the input parameter is indexed (used in events).

### internalType?

> `optional` **internalType**: `string`

The internal type of the input parameter.

### name

> **name**: `string`

The name of the input parameter.

### type

> **type**: [`SolidityType`](SolidityType.md)

The Solidity type of the input parameter.

## Defined in

[abi.types.ts:6](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/types/src/abi.types.ts#L6)
