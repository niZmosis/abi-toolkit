[**@ethereum-abi-types-generator/types v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/types](../README.md) / TypingsConfigContext

# Type Alias: TypingsConfigContext

> **TypingsConfigContext**: `object`

Configuration options for generating typings.

## Type declaration

### typingsOutputDir

> **typingsOutputDir**: `string`

Output directory. Defaults to './ethereum-abi-types'

### typingsOutputFileName

> **typingsOutputFileName**: `string`

The file name to use for the generated typings. Only used for single file input. Defaults to name of the ABI file

### typingsOutputFileSuffix

> **typingsOutputFileSuffix**: `string`

The suffix to append to the file name of the generated typings. eg. (my-abi.types.ts vs my-abi.ts). Defaults to "types"

### typingsPrefixTypes

> **typingsPrefixTypes**: `boolean`

Whether to prefix the name of the type with the `typingsOutputFileName`, eg. ('MyTokenContract' or 'PrefixNameContract') vs 'Contract'. Defaults to false

## Defined in

[generate.types.ts:79](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/types/src/generate.types.ts#L79)
