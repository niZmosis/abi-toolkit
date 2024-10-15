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

[packages/converter-typescript/src/factories/typings/typings-generator.ts:50](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/factories/typings/typings-generator.ts#L50)

## Methods

### generate()

> **generate**(): `Promise`\<[`Rustify`](../../types/type-aliases/Rustify.md)\<[`GenerateResponse`](../../types/type-aliases/GenerateResponse.md), `string`\>\>

Generates all the typings.

#### Returns

`Promise`\<[`Rustify`](../../types/type-aliases/Rustify.md)\<[`GenerateResponse`](../../types/type-aliases/GenerateResponse.md), `string`\>\>

A promise that resolves to the generated response or an error message.

#### Defined in

[packages/converter-typescript/src/factories/typings/typings-generator.ts:57](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/factories/typings/typings-generator.ts#L57)
