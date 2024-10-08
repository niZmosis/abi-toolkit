[**@ethereum-abi-types-generator/types v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/types](../README.md) / AbiItem

# Type Alias: AbiItem

> **AbiItem**: `object`

Represents an ABI item.

## Type declaration

### anonymous?

> `optional` **anonymous**: `boolean`

Whether the event is anonymous (used in events).

### constant?

> `optional` **constant**: `boolean`

Whether the function is constant (used in functions).

### gas?

> `optional` **gas**: `number`

The gas limit for the ABI item.

### inputs?

> `optional` **inputs**: [`AbiInput`](AbiInput.md)[]

The input parameters of the ABI item.

### name

> **name**: `string`

The name of the ABI item.

### outputs?

> `optional` **outputs**: [`AbiOutput`](AbiOutput.md)[]

The output parameters of the ABI item.

### payable?

> `optional` **payable**: `boolean`

Whether the function is payable (used in functions).

### stateMutability?

> `optional` **stateMutability**: [`StateMutabilityType`](StateMutabilityType.md)

The state mutability of the ABI item.

### type

> **type**: [`AbiItemType`](AbiItemType.md)

The type of the ABI item.

## Defined in

[abi.types.ts:58](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/types/src/abi.types.ts#L58)
