[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / EthersContractV6

# Interface: EthersContractV6\<TMethods, TMethodNames, TEventsContext, TEventType\>

Represents an Ethers v6 contract with extended functionality.

## Extends

- [`ContractVersionV6`](ContractVersionV6.md)\<`TMethodNames`\>

## Type Parameters

• **TMethods**

The contract methods

• **TMethodNames**

The names of the contract methods

• **TEventsContext**

The context for contract events

• **TEventType**

The type of contract events

## Properties

### address

> `readonly` **address**: `string`

#### Inherited from

[`ContractVersionV6`](ContractVersionV6.md).[`address`](ContractVersionV6.md#address)

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:92](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L92)

***

### addressPromise

> `readonly` **addressPromise**: `Promise`\<`string`\>

#### Inherited from

[`ContractVersionV6`](ContractVersionV6.md).[`addressPromise`](ContractVersionV6.md#addresspromise)

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:105](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L105)

***

### callStatic

> `readonly` **callStatic**: `object`

#### Index Signature

 \[`name`: `string`\]: `ContractFunction`

#### Inherited from

[`ContractVersionV6`](ContractVersionV6.md).[`callStatic`](ContractVersionV6.md#callstatic)

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:96](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L96)

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

[`ContractVersionV6`](ContractVersionV6.md).[`deployTransaction`](ContractVersionV6.md#deploytransaction)

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:106](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L106)

***

### estimateGas

> `readonly` **estimateGas**: `object`

#### Index Signature

 \[`name`: `string`\]: `ContractFunction`\<`bigint`\>

#### Inherited from

[`ContractVersionV6`](ContractVersionV6.md).[`estimateGas`](ContractVersionV6.md#estimategas)

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:99](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L99)

***

### filters

> `readonly` **filters**: `TEventsContext`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:127](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L127)

***

### functions

> `readonly` **functions**: `TMethods`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:126](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L126)

***

### interface

> `readonly` **interface**: `InternalInterface`\<`TMethodNames`\>

#### Inherited from

[`ContractVersionV6`](ContractVersionV6.md).[`interface`](ContractVersionV6.md#interface)

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:93](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L93)

***

### populateTransaction

> `readonly` **populateTransaction**: `object`

#### Index Signature

 \[`name`: `string`\]: `ContractFunction`\<`TransactionRequest`\>

#### Inherited from

[`ContractVersionV6`](ContractVersionV6.md).[`populateTransaction`](ContractVersionV6.md#populatetransaction)

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:102](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L102)

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

[`ContractVersionV6`](ContractVersionV6.md).[`provider`](ContractVersionV6.md#provider)

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:95](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L95)

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

[`ContractVersionV6`](ContractVersionV6.md).[`signer`](ContractVersionV6.md#signer)

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:94](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L94)

## Methods

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<[`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>\>

#### Parameters

• **blockTag?**: `BlockTag`

#### Returns

`Promise`\<[`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:131](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L131)

***

### addListener()

> **addListener**(`eventName`, `listener`): [`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Parameters

• **eventName**: `EventFilter` \| `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:157](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L157)

***

### attach()

> **attach**(`addressOrName`): [`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Parameters

• **addressOrName**: `string`

#### Returns

[`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:145](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L145)

***

### connect()

> **connect**(`signerOrProvider`): [`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

Type any here so if you are using a different version of ethers then
installed it will still compile

#### Parameters

• **signerOrProvider**: `any`

should be type of Wallet | Signer | Provider | string

#### Returns

[`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:142](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L142)

***

### deployed()

> **deployed**(): `Promise`\<[`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>\>

#### Returns

`Promise`\<[`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:128](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L128)

***

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

• **eventName**: `string` \| `EventFilter`

• ...**args**: `any`[]

#### Returns

`boolean`

#### Inherited from

[`ContractVersionV6`](ContractVersionV6.md).[`emit`](ContractVersionV6.md#emit)

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:108](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L108)

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

• **overrides?**: `TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

[`ContractVersionV6`](ContractVersionV6.md).[`fallback`](ContractVersionV6.md#fallback)

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:107](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L107)

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

• **eventName?**: `string` \| `EventFilter`

#### Returns

`number`

#### Inherited from

[`ContractVersionV6`](ContractVersionV6.md).[`listenerCount`](ContractVersionV6.md#listenercount)

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:109](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L109)

***

### listeners()

> **listeners**(`eventName`): `Listener`[]

#### Parameters

• **eventName**: `string` \| `EventFilter`

#### Returns

`Listener`[]

#### Inherited from

[`ContractVersionV6`](ContractVersionV6.md).[`listeners`](ContractVersionV6.md#listeners)

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:110](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L110)

***

### on()

> **on**(`event`, `listener`): [`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Parameters

• **event**: `EventFilter` \| `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:149](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L149)

***

### once()

> **once**(`event`, `listener`): [`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Parameters

• **event**: `EventFilter` \| `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:153](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L153)

***

### queryFilter()

> **queryFilter**(`event`, `fromBlockOrBlockhash`?, `toBlock`?): `Promise`\<`TEventType`[]\>

#### Parameters

• **event**: `string` \| `EventFilter`

• **fromBlockOrBlockhash?**: `BlockTag`

• **toBlock?**: `BlockTag`

#### Returns

`Promise`\<`TEventType`[]\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:168](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L168)

***

### removeAllListeners()

> **removeAllListeners**(`eventName`): [`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Parameters

• **eventName**: `EventFilter` \| `TEventType`

#### Returns

[`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:161](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L161)

***

### removeListener()

> **removeListener**(`eventName`, `listener`): [`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Parameters

• **eventName**: `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContextV6`](../type-aliases/EthersContractContextV6.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:164](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L164)
