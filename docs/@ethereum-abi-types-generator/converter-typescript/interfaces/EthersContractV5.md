[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / EthersContractV5

# Interface: EthersContractV5\<TMethods, TMethodNames, TEventsContext, TEventType\>

Represents an Ethers v5 contract with extended functionality.

## Extends

- [`ContractVersionV5`](ContractVersionV5.md)\<`TMethodNames`\>

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

[`ContractVersionV5`](ContractVersionV5.md).[`address`](ContractVersionV5.md#address)

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:116](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L116)

***

### addressPromise

> `readonly` **addressPromise**: `Promise`\<`string`\>

#### Inherited from

[`ContractVersionV5`](ContractVersionV5.md).[`addressPromise`](ContractVersionV5.md#addresspromise)

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:138](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L138)

***

### callStatic

> `readonly` **callStatic**: `object`

#### Index Signature

 \[`name`: `string`\]: `ContractFunction`

#### Inherited from

[`ContractVersionV5`](ContractVersionV5.md).[`callStatic`](ContractVersionV5.md#callstatic)

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:120](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L120)

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

[`ContractVersionV5`](ContractVersionV5.md).[`deployTransaction`](ContractVersionV5.md#deploytransaction)

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:139](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L139)

***

### estimateGas

> `readonly` **estimateGas**: `object`

#### Index Signature

 \[`name`: `string`\]: `ContractFunction`\<`BigNumber`\>

#### Inherited from

[`ContractVersionV5`](ContractVersionV5.md).[`estimateGas`](ContractVersionV5.md#estimategas)

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:123](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L123)

***

### filters

> `readonly` **filters**: `TEventsContext`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:162](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L162)

***

### functions

> `readonly` **functions**: `TMethods`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:161](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L161)

***

### interface

> `readonly` **interface**: `InternalInterface`\<`TMethodNames`\>

#### Inherited from

[`ContractVersionV5`](ContractVersionV5.md).[`interface`](ContractVersionV5.md#interface)

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:117](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L117)

***

### populateTransaction

> `readonly` **populateTransaction**: `object`

#### Index Signature

 \[`name`: `string`\]: `ContractFunction`\<`object`\>

#### Inherited from

[`ContractVersionV5`](ContractVersionV5.md).[`populateTransaction`](ContractVersionV5.md#populatetransaction)

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:126](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L126)

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

[`ContractVersionV5`](ContractVersionV5.md).[`provider`](ContractVersionV5.md#provider)

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:119](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L119)

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

[`ContractVersionV5`](ContractVersionV5.md).[`signer`](ContractVersionV5.md#signer)

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:118](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L118)

## Methods

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<[`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>\>

#### Parameters

• **blockTag?**: `BlockTag`

#### Returns

`Promise`\<[`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:166](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L166)

***

### addListener()

> **addListener**(`eventName`, `listener`): [`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Parameters

• **eventName**: `EventFilter` \| `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:192](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L192)

***

### attach()

> **attach**(`addressOrName`): [`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Parameters

• **addressOrName**: `string`

#### Returns

[`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:180](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L180)

***

### connect()

> **connect**(`signerOrProvider`): [`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

Type any here so if you are using a different version of ethers then
installed it will still compile

#### Parameters

• **signerOrProvider**: `any`

should be type of Wallet | Signer | Provider | string

#### Returns

[`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:177](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L177)

***

### deployed()

> **deployed**(): `Promise`\<[`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>\>

#### Returns

`Promise`\<[`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:163](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L163)

***

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

• **eventName**: `string` \| `EventFilter`

• ...**args**: `any`[]

#### Returns

`boolean`

#### Inherited from

[`ContractVersionV5`](ContractVersionV5.md).[`emit`](ContractVersionV5.md#emit)

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:142](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L142)

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

• **overrides?**: `TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

[`ContractVersionV5`](ContractVersionV5.md).[`fallback`](ContractVersionV5.md#fallback)

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:140](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L140)

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

• **eventName?**: `string` \| `EventFilter`

#### Returns

`number`

#### Inherited from

[`ContractVersionV5`](ContractVersionV5.md).[`listenerCount`](ContractVersionV5.md#listenercount)

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:143](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L143)

***

### listeners()

> **listeners**(`eventName`): `Listener`[]

#### Parameters

• **eventName**: `string` \| `EventFilter`

#### Returns

`Listener`[]

#### Inherited from

[`ContractVersionV5`](ContractVersionV5.md).[`listeners`](ContractVersionV5.md#listeners)

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:144](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L144)

***

### on()

> **on**(`event`, `listener`): [`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Parameters

• **event**: `EventFilter` \| `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:184](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L184)

***

### once()

> **once**(`event`, `listener`): [`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Parameters

• **event**: `EventFilter` \| `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:188](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L188)

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

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:203](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L203)

***

### removeAllListeners()

> **removeAllListeners**(`eventName`): [`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Parameters

• **eventName**: `EventFilter` \| `TEventType`

#### Returns

[`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:196](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L196)

***

### removeListener()

> **removeListener**(`eventName`, `listener`): [`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Parameters

• **eventName**: `TEventType`

• **listener**: `Listener`

#### Returns

[`EthersContractContextV5`](../type-aliases/EthersContractContextV5.md)\<`TMethods`, `TMethodNames`, `TEventsContext`, `TEventType`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:199](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L199)
