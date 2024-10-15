[**@ethereum-abi-types-generator/utils v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/utils](../README.md) / formatAndLintFiles

# Function: formatAndLintFiles()

> **formatAndLintFiles**(`typingsOutputDir`, `eslintOptions`?, `eslintConfigPath`?, `prettierOptions`?, `prettierConfigPath`?): `Promise`\<`void`\>

Formats and lints the generated files in the specified output directory and its subdirectories.

## Parameters

• **typingsOutputDir**: `string`

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

[formatters/formatters.ts:74](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/utils/src/formatters/formatters.ts#L74)
