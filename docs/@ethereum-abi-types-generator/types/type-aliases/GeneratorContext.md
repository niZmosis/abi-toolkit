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

[generate.types.ts:116](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/types/src/generate.types.ts#L116)
