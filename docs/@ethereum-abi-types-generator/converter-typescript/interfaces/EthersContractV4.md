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

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:24](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L24)

***

### addressPromise

> `readonly` **addressPromise**: `Promise`\<`string`\>

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`addressPromise`](ContractVersionV4.md#addresspromise)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:29](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L29)

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`deployTransaction`](ContractVersionV4.md#deploytransaction)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:30](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L30)

***

### filters

> `readonly` **filters**: `TEventsContext`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:49](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L49)

***

### functions

> `readonly` **functions**: `TMethods`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:47](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L47)

***

### interface

> `readonly` **interface**: `Interface`

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`interface`](ContractVersionV4.md#interface)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:25](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L25)

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`provider`](ContractVersionV4.md#provider)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:27](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L27)

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`signer`](ContractVersionV4.md#signer)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:26](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L26)

## Methods

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<[`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>\>

#### Parameters

• **blockTag?**: `BlockTag`

#### Returns

`Promise`\<[`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:53](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L53)

***

### addListener()

> **addListener**(`eventName`, `listener`): [`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Parameters

• **eventName**: `EventFilter` \| `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:76](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L76)

***

### attach()

> **attach**(`addressOrName`): [`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Parameters

• **addressOrName**: `string`

#### Returns

[`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:64](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L64)

***

### connect()

> **connect**(`signerOrProvider`): [`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

Type any here so if you are using a different version of ethers then
installed it will still compile

#### Parameters

• **signerOrProvider**: `any`

should be type of Wallet | Signer | Provider | string

#### Returns

[`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:61](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L61)

***

### deployed()

> **deployed**(): `Promise`\<[`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>\>

#### Returns

`Promise`\<[`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:50](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L50)

***

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

• **eventName**: `string` \| `EventFilter`

• ...**args**: `any`[]

#### Returns

`boolean`

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`emit`](ContractVersionV4.md#emit)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:33](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L33)

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

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:31](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L31)

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

• **eventName?**: `string` \| `EventFilter`

#### Returns

`number`

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`listenerCount`](ContractVersionV4.md#listenercount)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:34](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L34)

***

### listeners()

> **listeners**(`eventName`): `Listener`[]

#### Parameters

• **eventName**: `string` \| `EventFilter`

#### Returns

`Listener`[]

#### Inherited from

[`ContractVersionV4`](ContractVersionV4.md).[`listeners`](ContractVersionV4.md#listeners)

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:35](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L35)

***

### on()

> **on**(`event`, `listener`): [`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Parameters

• **event**: `EventFilter` \| `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:68](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L68)

***

### once()

> **once**(`event`, `listener`): [`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Parameters

• **event**: `EventFilter` \| `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:72](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L72)

***

### removeAllListeners()

> **removeAllListeners**(`eventName`): [`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Parameters

• **eventName**: `EventFilter` \| `TEventType`

#### Returns

[`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:80](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L80)

***

### removeListener()

> **removeListener**(`eventName`, `listener`): [`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Parameters

• **eventName**: `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContextV4`](../type-aliases/EthersContractContextV4.md)\<`TMethods`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:83](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L83)
