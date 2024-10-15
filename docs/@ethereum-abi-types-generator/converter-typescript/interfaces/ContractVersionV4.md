[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / ContractVersionV4

# Interface: ContractVersionV4

Represents a basic Ethereum contract interface.

## Extended by

- [`EthersContractV4`](EthersContractV4.md)

## Properties

### address

> `readonly` **address**: `string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:34](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L34)

***

### addressPromise

> `readonly` **addressPromise**: `Promise`\<`string`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:39](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L39)

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:40](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L40)

***

### interface

> `readonly` **interface**: `Interface`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:35](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L35)

***

### provider

> `readonly` **provider**: `Provider`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:37](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L37)

***

### signer

> `readonly` **signer**: `Signer`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:36](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L36)

## Methods

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

• **eventName**: `string` \| [`EventFilter`](../type-aliases/EventFilter.md)

• ...**args**: `any`[]

#### Returns

`boolean`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:43](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L43)

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

• **overrides?**: `TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:41](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L41)

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

• **eventName?**: `string` \| [`EventFilter`](../type-aliases/EventFilter.md)

#### Returns

`number`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:44](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L44)

***

### listeners()

> **listeners**(`eventName`): `Listener`[]

#### Parameters

• **eventName**: `string` \| [`EventFilter`](../type-aliases/EventFilter.md)

#### Returns

`Listener`[]

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:45](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L45)
