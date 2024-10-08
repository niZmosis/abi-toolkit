[**@ethereum-abi-types-generator/types v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/types](../README.md) / GeneratorContext

# Type Alias: GeneratorContext

> **GeneratorContext**: `Omit`\<[`EatConfigContext`](EatConfigContext.md), `"makeIndexFile"` \| `"inputDirOrPath"` \| `"includeFiles"` \| `"excludeFiles"`\> & `object`

Context for the generator.

## Type declaration

### abiItems

> **abiItems**: [`AbiItem`](AbiItem.md)[]

The ABI items parsed from the input file

### inputPath

> **inputPath**: `string`

The input path for the ABI file

## Defined in

[generate.types.ts:110](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/types/src/generate.types.ts#L110)
