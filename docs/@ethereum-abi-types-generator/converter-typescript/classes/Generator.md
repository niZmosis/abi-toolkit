[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / Generator

# Class: Generator

Generator class for creating Ethereum ABI types and optional classes.

## Constructors

### new Generator()

> **new Generator**(`_context`): [`Generator`](Generator.md)

Creates a new Generator instance.

#### Parameters

• **\_context**: [`GeneratorContext`](../../types/type-aliases/GeneratorContext.md)

The generator context containing configuration options.

#### Returns

[`Generator`](Generator.md)

#### Defined in

packages/converter-typescript/src/factories/generator.ts:28

## Methods

### generate()

> **generate**(): `Promise`\<[`GeneratedResults`](../../types/type-aliases/GeneratedResults.md)\>

Generates the Ethereum ABI types and optional classes.

#### Returns

`Promise`\<[`GeneratedResults`](../../types/type-aliases/GeneratedResults.md)\>

A promise that resolves to the generated results, including typings and optional class results.

#### Defined in

packages/converter-typescript/src/factories/generator.ts:41
