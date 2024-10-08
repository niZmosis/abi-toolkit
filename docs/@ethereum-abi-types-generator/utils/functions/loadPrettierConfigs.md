[**@ethereum-abi-types-generator/utils v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/utils](../README.md) / loadPrettierConfigs

# Function: loadPrettierConfigs()

> **loadPrettierConfigs**(`params`): `AsyncGenerator`\<`PrettierOptions`, `void`, `unknown`\>

Asynchronously loads Prettier configurations based on provided options and paths.
It prioritizes loading in the following order:
1. From provided `prettierOptions` if available.
2. From provided `prettierConfigPath` if available.
3. Automatically from the current working directory.
4. Default configuration if all else fails.

## Parameters

• **params**

The parameters for loading Prettier configurations.

• **params.prettierConfigPath?**: `string`

Optional path to the Prettier configuration file.

• **params.prettierOptions?**: `Options`

Optional Prettier options to be used directly.

## Returns

`AsyncGenerator`\<`PrettierOptions`, `void`, `unknown`\>

## Yields

The loaded Prettier configuration options.

## Defined in

[formatters/prettier.ts:130](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/utils/src/formatters/prettier.ts#L130)
