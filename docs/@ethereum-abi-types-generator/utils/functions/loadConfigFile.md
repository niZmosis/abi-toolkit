[**@ethereum-abi-types-generator/utils v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/utils](../README.md) / loadConfigFile

# Function: loadConfigFile()

> **loadConfigFile**\<`T`\>(`configPath`, `useResolvedPath`): `Promise`\<`T` \| `null`\>

Loads a JSON file and parses its content.

## Type Parameters

• **T**

The expected type of the parsed JSON content.

## Parameters

• **configPath**: `string`

The path to the JSON file.

• **useResolvedPath**: `boolean` = `true`

Whether to use the resolved path or the original path.

## Returns

`Promise`\<`T` \| `null`\>

The parsed JSON content, or null if the file does not exist or fails to parse.

## Defined in

[files.utils.ts:93](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/utils/src/files.utils.ts#L93)
