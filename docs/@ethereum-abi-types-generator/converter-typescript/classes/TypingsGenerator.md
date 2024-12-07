[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / TypingsGenerator

# Class: TypingsGenerator

Generator class for creating Ethereum ABI typings.

## Constructors

### new TypingsGenerator()

> **new TypingsGenerator**(`_context`): [`TypingsGenerator`](TypingsGenerator.md)

Creates a new TypingsGenerator instance.

#### Parameters

• **\_context**: [`GeneratorContext`](../../types/type-aliases/GeneratorContext.md)

The generator context containing configuration options.

#### Returns

[`TypingsGenerator`](TypingsGenerator.md)

#### Defined in

[packages/converter-typescript/src/factories/typings/typings-generator.ts:51](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/factories/typings/typings-generator.ts#L51)

## Methods

### generate()

> **generate**(): `Promise`\<[`Rustify`](../../types/type-aliases/Rustify.md)\<[`GenerateResponse`](../../types/type-aliases/GenerateResponse.md), `string`\>\>

Generates all the typings.

#### Returns

`Promise`\<[`Rustify`](../../types/type-aliases/Rustify.md)\<[`GenerateResponse`](../../types/type-aliases/GenerateResponse.md), `string`\>\>

A promise that resolves to the generated response or an error message.

#### Defined in

[packages/converter-typescript/src/factories/typings/typings-generator.ts:58](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/factories/typings/typings-generator.ts#L58)
