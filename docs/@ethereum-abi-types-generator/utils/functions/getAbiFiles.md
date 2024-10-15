[**@ethereum-abi-types-generator/utils v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/utils](../README.md) / getAbiFiles

# Function: getAbiFiles()

> **getAbiFiles**(`params`): `Promise`\<[`AbiFilePathContext`](../../types/type-aliases/AbiFilePathContext.md)[]\>

Get all the abi files and extract the .abi property if it's a Hardhat or Truffle framework

## Parameters

• **params**

The arguments

• **params.dirOrPath**: `string`

The directory or file path

• **params.fileList?**: [`AbiFilePathContext`](../../types/type-aliases/AbiFilePathContext.md)[] = `[]`

The file list, used for recursion

• **params.framework?**: [`Framework`](../../types/type-aliases/Framework.md) = `'none'`

The framework

## Returns

`Promise`\<[`AbiFilePathContext`](../../types/type-aliases/AbiFilePathContext.md)[]\>

## Defined in

[files.ts:399](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/utils/src/files.ts#L399)
