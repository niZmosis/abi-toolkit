[**@ethereum-abi-types-generator/types v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/types](../README.md) / BaseConfigContext

# Type Alias: BaseConfigContext

> **BaseConfigContext**: `object`

Base configuration options for the generator.
Applies to both typings and classes.

## Type declaration

### eslintConfigPath

> **eslintConfigPath**: `string`

ESLint config file path.

### eslintOptions

> **eslintOptions**: `ESLint.Options`

ESLint options override.

### excludeFiles

> **excludeFiles**: `string`[]

List of file paths to ignore, including all other files. Defaults to []

### framework

> **framework**: [`Framework`](Framework.md)

Framework to use. Defaults to 'none'

### includeFiles

> **includeFiles**: `string`[]

List of file paths to include, ignoring all other files. Defaults to []

### inputDirOrPath

> **inputDirOrPath**: `string`

Directory of ABI files or a single ABI file path. Required.
If command is `generate` then this is the directory of the ABI JSON/JSONFragment files.
If command is `generateClasses` then this is the directory of the generated typings files.

### language

> **language**: [`Language`](Language.md)

Language to generate. Defaults to 'ts'

### library

> **library**: [`Library`](Library.md)

Library to use. Defaults to 'web3'

### libraryImportAlias

> **libraryImportAlias**: `string`

Override the library import from name. Eg. 'from "ethers"' to 'from "ethersv5"'

### makeIndexFile

> **makeIndexFile**: `boolean`

Generate an index file exporting all the generated typings. Defaults to true

### makeOutputDir

> **makeOutputDir**: `boolean`

Make the output directory if it doesn't exist. Defaults to false

### prettierConfigPath

> **prettierConfigPath**: `string`

Prettier config file path.

### prettierOptions

> **prettierOptions**: `PrettierOptions`

Prettier options override.

### preventOverwrite

> **preventOverwrite**: `boolean`

Whether to prevent overwriting existing files. Defaults to false

### verbatimModuleSyntax

> **verbatimModuleSyntax**: `boolean`

Whether to use verbatim module syntax. Defaults to true

### watch

> **watch**: `boolean`

Whether to watch the ABI files for changes and regenerate typings. Defaults to false

## Defined in

[generate.types.ts:37](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/types/src/generate.types.ts#L37)
