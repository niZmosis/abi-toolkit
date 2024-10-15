[**@ethereum-abi-types-generator/utils v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/utils](../README.md) / formatFilesPrettier

# Function: formatFilesPrettier()

> **formatFilesPrettier**(`filePaths`, `prettierOptions`): `Promise`\<`void`\>

Formats the given files using Prettier with the specified configuration.

## Parameters

• **filePaths**: `string`[]

The paths of the files to format.

• **prettierOptions**: `Options`

The path to the Prettier configuration file.

## Returns

`Promise`\<`void`\>

A promise that resolves when the formatting is complete.

## Throws

Will throw an error if the Prettier configuration file is not found.

## Defined in

[formatters/prettier.ts:206](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/utils/src/formatters/prettier.ts#L206)
