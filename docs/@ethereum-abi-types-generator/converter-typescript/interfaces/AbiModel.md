[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / AbiModel

# Interface: AbiModel\<TMethodNamesEnum, TEventEnum\>

Represents the ABI model of a Web3 contract.

## Type Parameters

• **TMethodNamesEnum**

The enum of method names

• **TEventEnum**

The enum of event names

## Methods

### getEvent()

> **getEvent**(`name`): `false` \| [`AbiItemModel`](AbiItemModel.md)\<`TMethodNamesEnum`\>

#### Parameters

• **name**: `TEventEnum`

#### Returns

`false` \| [`AbiItemModel`](AbiItemModel.md)\<`TMethodNamesEnum`\>

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:84](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L84)

***

### getEventBySignature()

> **getEventBySignature**(`signature`): [`AbiItemModel`](AbiItemModel.md)\<`TMethodNamesEnum`\>

#### Parameters

• **signature**: `string`

#### Returns

[`AbiItemModel`](AbiItemModel.md)\<`TMethodNamesEnum`\>

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:88](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L88)

***

### getEvents()

> **getEvents**(): [`AbiItemModel`](AbiItemModel.md)\<`TMethodNamesEnum`\>[]

#### Returns

[`AbiItemModel`](AbiItemModel.md)\<`TMethodNamesEnum`\>[]

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:86](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L86)

***

### getMethod()

> **getMethod**(`name`): `false` \| [`AbiItemModel`](AbiItemModel.md)\<`TMethodNamesEnum`\>

#### Parameters

• **name**: `TMethodNamesEnum`

#### Returns

`false` \| [`AbiItemModel`](AbiItemModel.md)\<`TMethodNamesEnum`\>

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:78](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L78)

***

### getMethods()

> **getMethods**(): [`AbiItemModel`](AbiItemModel.md)\<`TMethodNamesEnum`\>[]

#### Returns

[`AbiItemModel`](AbiItemModel.md)\<`TMethodNamesEnum`\>[]

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:80](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L80)

***

### hasEvent()

> **hasEvent**(`name`): `boolean`

#### Parameters

• **name**: `TEventEnum`

#### Returns

`boolean`

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:90](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L90)

***

### hasMethod()

> **hasMethod**(`name`): `boolean`

#### Parameters

• **name**: `TMethodNamesEnum`

#### Returns

`boolean`

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:82](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L82)
