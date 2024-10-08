[**@ethereum-abi-types-generator/utils v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/utils](../README.md) / formatFilesEslint

# Function: formatFilesEslint()

> **formatFilesEslint**(`filePaths`, `eslintOptions`): `Promise`\<`void`\>

Formats the given files using ESLint with the specified configuration.

## Parameters

• **filePaths**: `string`[]

The paths of the files to format.

• **eslintOptions**: `Options`

The ESLint options.

## Returns

`Promise`\<`void`\>

A promise that resolves when the formatting is complete.

## Throws

Will throw an error if the ESLint configuration file is not found.

## Defined in

[formatters/eslint.ts:200](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/utils/src/formatters/eslint.ts#L200)
