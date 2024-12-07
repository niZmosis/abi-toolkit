[**@ethereum-abi-types-generator/types v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/types](../README.md) / ClassConfigContext

# Type Alias: ClassConfigContext

> **ClassConfigContext**: `object`

Configuration options for generating classes.

## Type declaration

### classMulticall

> **classMulticall**: `boolean`

Whether to integrate ethereum-multicall into the class

### classOutputDir

> **classOutputDir**: `string`

The output directory for the class. If not set it will use the `typingsOutputDir`.

### classOutputFileName

> **classOutputFileName**: `string`

The file name to use for the generated class. Only used for single file input. Defaults to name of the ABI file

### classOutputFileSuffix

> **classOutputFileSuffix**: `string`

The suffix to append to the file name of the generated classes. eg. (my-abi.contract.ts vs my-abi.ts). Defaults to "contract"

### generateClasses

> **generateClasses**: `boolean`

Whether to generate classes for the generated typings

## Defined in

[generate.types.ts:93](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/types/src/generate.types.ts#L93)
