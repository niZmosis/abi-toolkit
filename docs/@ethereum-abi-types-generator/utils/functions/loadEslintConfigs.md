[**@ethereum-abi-types-generator/utils v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/utils](../README.md) / loadEslintConfigs

# Function: loadEslintConfigs()

> **loadEslintConfigs**(`params`): `AsyncGenerator`\<`ESLint.Options`, `void`, `unknown`\>

Asynchronously loads ESLint configurations based on provided options and paths.
It prioritizes loading in the following order:
1. From provided `eslintOptions` if available.
2. From provided `eslintConfigPath` if available.
3. Automatically from the current working directory.
4. Default configuration if all else fails.

## Parameters

• **params**

The parameters for loading ESLint configurations.

• **params.eslintConfigPath?**: `string`

Optional path to the ESLint configuration file.

• **params.eslintOptions?**: `Options`

Optional ESLint options to be used directly.

## Returns

`AsyncGenerator`\<`ESLint.Options`, `void`, `unknown`\>

## Yields

The loaded ESLint configuration options.

## Defined in

[formatters/eslint.ts:112](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/utils/src/formatters/eslint.ts#L112)
