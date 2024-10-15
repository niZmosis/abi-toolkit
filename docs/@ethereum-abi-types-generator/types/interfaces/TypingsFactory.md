[**@ethereum-abi-types-generator/types v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/types](../README.md) / TypingsFactory

# Interface: TypingsFactory

## Methods

### buildEventInterfaceProperties()

> **buildEventInterfaceProperties**(`options`): `string`

Build event interface properties

#### Parameters

• **options**

The options for building event interface properties

• **options.abiItems**: [`AbiItem`](../type-aliases/AbiItem.md)[]

The ABI items

#### Returns

`string`

The event interface properties as a string

#### Defined in

[factory.types.ts:32](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/types/src/factory.types.ts#L32)

***

### buildInterfaces()

> **buildInterfaces**(`options`): `string`

Build generic interfaces

#### Parameters

• **options**

The options for building interfaces

• **options.abiName**: `string`

The ABI name

• **options.library**: [`Library`](../type-aliases/Library.md)

The library version

• **options.libraryImportAlias?**: `string`

The library import alias

• **options.verbatimModuleSyntax?**: `boolean`

The verbatim module syntax (add `type` to imports)

#### Returns

`string`

The library interfaces as a string

#### Defined in

[factory.types.ts:14](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/types/src/factory.types.ts#L14)

***

### buildMethodReturnContext()

> **buildMethodReturnContext**(`options`): `string`

Build the method return context

#### Parameters

• **options**

The options for building the method return context

• **options.abiItem**: [`AbiItem`](../type-aliases/AbiItem.md)

The ABI item

• **options.abiName**: `string`

The ABI name

• **options.type**: `string`

The type it returns

#### Returns

`string`

The method return context as a string

#### Defined in

[factory.types.ts:42](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/types/src/factory.types.ts#L42)
