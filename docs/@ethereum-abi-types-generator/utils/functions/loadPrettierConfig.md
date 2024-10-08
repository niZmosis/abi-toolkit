[**@ethereum-abi-types-generator/utils v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/utils](../README.md) / loadPrettierConfig

# Function: loadPrettierConfig()

> **loadPrettierConfig**(`params`): `Promise`\<`PrettierOptions` \| `null`\>

Loads the Prettier configuration based on the provided options and configuration path.
It prioritizes in the following order:
1. If `prettierOptions` is provided, it will be used directly.
2. If `prettierConfigPath` is provided, it will attempt to load the configuration from the specified path.
3. If neither `prettierOptions` nor `prettierConfigPath` is provided, it will try to automatically find the Prettier configuration.
4. If all methods fail, it will return a default Prettier configuration.

## Parameters

• **params**

The arguments.

• **params.prettierConfigPath?**: `string`

Optional path to the Prettier configuration file.

• **params.prettierOptions?**: `Options`

Optional Prettier options to be used directly.

## Returns

`Promise`\<`PrettierOptions` \| `null`\>

A promise that resolves to the Prettier options.

## Defined in

[formatters/prettier.ts:98](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/utils/src/formatters/prettier.ts#L98)
