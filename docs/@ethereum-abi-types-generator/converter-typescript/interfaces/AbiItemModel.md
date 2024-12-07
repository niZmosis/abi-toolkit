[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / AbiItemModel

# Interface: AbiItemModel\<TMethodNamesEnum\>

Represents an ABI item model for a Web3 contract.

## Type Parameters

• **TMethodNamesEnum**

The enum of method names

## Properties

### anonymous

> **anonymous**: `boolean`

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:101](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/web3-contract-context.ts#L101)

***

### name

> **name**: `TMethodNamesEnum`

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:99](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/web3-contract-context.ts#L99)

***

### payable

> **payable**: `boolean`

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:100](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/web3-contract-context.ts#L100)

***

### signature

> **signature**: `string`

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:98](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/web3-contract-context.ts#L98)

## Methods

### getIndexedInputs()

> **getIndexedInputs**(): [`AbiInput`](../../types/type-aliases/AbiInput.md)[]

#### Returns

[`AbiInput`](../../types/type-aliases/AbiInput.md)[]

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:107](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/web3-contract-context.ts#L107)

***

### getInputLength()

> **getInputLength**(): `number`

#### Returns

`number`

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:103](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/web3-contract-context.ts#L103)

***

### getInputs()

> **getInputs**(): [`AbiInput`](../../types/type-aliases/AbiInput.md)[]

#### Returns

[`AbiInput`](../../types/type-aliases/AbiInput.md)[]

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:105](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/web3-contract-context.ts#L105)

***

### getOutputs()

> **getOutputs**(): [`AbiOutput`](../../types/type-aliases/AbiOutput.md)[]

#### Returns

[`AbiOutput`](../../types/type-aliases/AbiOutput.md)[]

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:109](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/web3-contract-context.ts#L109)

***

### isOfType()

> **isOfType**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:111](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/web3-contract-context.ts#L111)
