[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / EthersContractV4

# Interface: EthersContractV4\<TMethods, TEventsContext, TEventType\>

Represents an Ethers contract with extended functionality.

## Extends

- [`ContractVersionV4`](ContractVersionV4.md)

## Type Parameters

• **TMethods**

The contract methods

• **TEventsContext**

The context for contract events

• **TEventType**

The type of contract events

## Properties

### address

> `readonly` **address**: `string`

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`address`](ContractVersionV4.md#address)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:34](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L34)

***

### addressPromise

> `readonly` **addressPromise**: `Promise`\<`string`\>

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`addressPromise`](ContractVersionV4.md#addresspromise)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:39](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L39)

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`deployTransaction`](ContractVersionV4.md#deploytransaction)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:40](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L40)

***

### filters

> `readonly` **filters**: `TEventsContext`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:59](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L59)

***

### functions

> `readonly` **functions**: `TMethods`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:57](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L57)

***

### interface

> `readonly` **interface**: `Interface`

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`interface`](ContractVersionV4.md#interface)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:35](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L35)

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`provider`](ContractVersionV4.md#provider)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:37](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L37)

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`signer`](ContractVersionV4.md#signer)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:36](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L36)

## Methods

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<[`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>\>

#### Parameters

• **blockTag?**: `BlockTag`

#### Returns

`Promise`\<[`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:63](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L63)

***

### addListener()

> **addListener**(`eventName`, `listener`): [`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Parameters

• **eventName**: [`EventFilter`](../type-aliases/EventFilter.md) \| `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:86](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L86)

***

### attach()

> **attach**(`addressOrName`): [`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Parameters

• **addressOrName**: `string`

#### Returns

[`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:74](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L74)

***

### connect()

> **connect**(`signerOrProvider`): [`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

Type any here so if you are using a different version of ethers then
installed it will still compile

#### Parameters

• **signerOrProvider**: `any`

should be type of Wallet | Signer | Provider | string

#### Returns

[`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:71](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L71)

***

### deployed()

> **deployed**(): `Promise`\<[`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>\>

#### Returns

`Promise`\<[`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:60](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L60)

***

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

• **eventName**: `string` \| [`EventFilter`](../type-aliases/EventFilter.md)

• ...**args**: `any`[]

#### Returns

`boolean`

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`emit`](ContractVersionV4.md#emit)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:43](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L43)

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

• **overrides?**: `TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`fallback`](ContractVersionV4.md#fallback)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:41](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L41)

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

• **eventName?**: `string` \| [`EventFilter`](../type-aliases/EventFilter.md)

#### Returns

`number`

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`listenerCount`](ContractVersionV4.md#listenercount)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:44](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L44)

***

### listeners()

> **listeners**(`eventName`): `Listener`[]

#### Parameters

• **eventName**: `string` \| [`EventFilter`](../type-aliases/EventFilter.md)

#### Returns

`Listener`[]

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`listeners`](ContractVersionV4.md#listeners)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:45](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L45)

***

### on()

> **on**(`event`, `listener`): [`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Parameters

• **event**: [`EventFilter`](../type-aliases/EventFilter.md) \| `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:78](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L78)

***

### once()

> **once**(`event`, `listener`): [`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Parameters

• **event**: [`EventFilter`](../type-aliases/EventFilter.md) \| `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:82](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L82)

***

### removeAllListeners()

> **removeAllListeners**(`eventName`): [`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Parameters

• **eventName**: [`EventFilter`](../type-aliases/EventFilter.md) \| `TEventType`

#### Returns

[`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:90](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L90)

***

### removeListener()

> **removeListener**(`eventName`, `listener`): [`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Parameters

• **eventName**: `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContext`](../type-aliases/EthersContractContext.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:93](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L93)
