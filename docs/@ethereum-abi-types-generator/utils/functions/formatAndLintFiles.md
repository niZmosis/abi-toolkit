[**@ethereum-abi-types-generator/utils v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/utils](../README.md) / formatAndLintFiles

# Function: formatAndLintFiles()

> **formatAndLintFiles**(`outputDir`, `eslintOptions`?, `eslintConfigPath`?, `prettierOptions`?, `prettierConfigPath`?): `Promise`\<`void`\>

Formats and lints the generated files in the specified output directory and its subdirectories.

## Parameters

• **outputDir**: `string`

The output directory containing the generated files.

• **eslintOptions?**: `Options`

The ESLint options.

• **eslintConfigPath?**: `string`

The ESLint config file path.

• **prettierOptions?**: `Options`

The Prettier options.

• **prettierConfigPath?**: `string`

The Prettier config file path.

## Returns

`Promise`\<`void`\>

A promise that resolves when the formatting and linting are complete.

## Defined in

[formatters/formatters.ts:74](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/utils/src/formatters/formatters.ts#L74)
