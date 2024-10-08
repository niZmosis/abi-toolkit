[**@ethereum-abi-types-generator/types v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/types](../README.md) / TypingsConfigContext

# Type Alias: TypingsConfigContext

> **TypingsConfigContext**: `object`

Configuration options for generating typings.

## Type declaration

### outputDir

> **outputDir**: `string`

Output directory. Defaults to './ethereum-abi-types'

### outputFileName

> **outputFileName**: `string`

The file name to use for the generated typings. Only used for single file input. Defaults to name of the ABI file

### prefixTypes

> **prefixTypes**: `boolean`

Whether to prefix the name of the type with the `outputFileName`, eg. ('MyTokenContract' or 'PrefixNameContract') vs 'Contract'. Defaults to false

## Defined in

[generate.types.ts:79](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/types/src/generate.types.ts#L79)
