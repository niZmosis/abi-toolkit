[**@ethereum-abi-types-generator/utils v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/utils](../README.md) / loadAbiContent

# Function: loadAbiContent()

> **loadAbiContent**(`abiFilePath`): `Promise`\<[`Rustify`](../../types/type-aliases/Rustify.md)\<[`AbiItem`](../../types/type-aliases/AbiItem.md)[] \| `object`, `string`\>\>

Load and parse ABI content

## Parameters

• **abiFilePath**: `string`

The ABI file path

## Returns

`Promise`\<[`Rustify`](../../types/type-aliases/Rustify.md)\<[`AbiItem`](../../types/type-aliases/AbiItem.md)[] \| `object`, `string`\>\>

The ABI content, or an empty string if the file is incompatible (e.g. not a JSON file or JsonFragment file)

## Defined in

[files.utils.ts:310](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/utils/src/files.utils.ts#L310)
