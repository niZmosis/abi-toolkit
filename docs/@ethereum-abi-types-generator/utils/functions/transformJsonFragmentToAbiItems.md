[**@ethereum-abi-types-generator/utils v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/utils](../README.md) / transformJsonFragmentToAbiItems

# Function: transformJsonFragmentToAbiItems()

> **transformJsonFragmentToAbiItems**(`params`): `Promise`\<[`Rustify`](../../types/type-aliases/Rustify.md)\<[`AbiItem`](../../types/type-aliases/AbiItem.md)[], `string`\>\>

Transform a JsonFragment file to a valid JSON file

## Parameters

• **params**

The parameters

• **params.abiFilePath**: `string`

The ABI file path

• **params.content**: `string`

The content of the ABI file

## Returns

`Promise`\<[`Rustify`](../../types/type-aliases/Rustify.md)\<[`AbiItem`](../../types/type-aliases/AbiItem.md)[], `string`\>\>

The ABI items

## Defined in

[files.utils.ts:156](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/utils/src/files.utils.ts#L156)
