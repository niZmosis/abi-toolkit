[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / ContractSendMethod

# Interface: ContractSendMethod\<TMethodsInterface, TMethodNamesEnum, TEventsInterface, TEventType\>

Represents a contract send method for Web3.

## Type Parameters

• **TMethodsInterface**

The interface of contract methods

• **TMethodNamesEnum**

The enum of method names

• **TEventsInterface**

The interface of contract events

• **TEventType**

The type of events

## Methods

### encodeABI()

> **encodeABI**(): `string`

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:171](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/web3-contract-context.ts#L171)

***

### estimateGas()

#### estimateGas(options, callback)

> **estimateGas**(`options`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **options**: [`EstimateGasOptions`](EstimateGasOptions.md)

• **callback?**

##### Returns

`Promise`\<`number`\>

##### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:155](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/web3-contract-context.ts#L155)

#### estimateGas(callback)

> **estimateGas**(`callback`): `Promise`\<`number`\>

##### Parameters

• **callback**

##### Returns

`Promise`\<`number`\>

##### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:160](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/web3-contract-context.ts#L160)

#### estimateGas(options, callback)

> **estimateGas**(`options`, `callback`): `Promise`\<`number`\>

##### Parameters

• **options**: [`EstimateGasOptions`](EstimateGasOptions.md)

• **callback**

##### Returns

`Promise`\<`number`\>

##### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:162](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/web3-contract-context.ts#L162)

#### estimateGas(options)

> **estimateGas**(`options`): `Promise`\<`number`\>

##### Parameters

• **options**: [`EstimateGasOptions`](EstimateGasOptions.md)

##### Returns

`Promise`\<`number`\>

##### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:167](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/web3-contract-context.ts#L167)

#### estimateGas(undefined)

> **estimateGas**(): `Promise`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:169](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/web3-contract-context.ts#L169)

***

### send()

> **send**(`options`, `callback`?): [`PromiEvent`](PromiEvent.md)\<[`Web3ContractContext`](../type-aliases/Web3ContractContext.md)\<`TMethodsInterface`, `TMethodNamesEnum`, `TEventsInterface`, `TEventType`\>\>

#### Parameters

• **options**: [`SendOptions`](SendOptions.md)

• **callback?**

#### Returns

[`PromiEvent`](PromiEvent.md)\<[`Web3ContractContext`](../type-aliases/Web3ContractContext.md)\<`TMethodsInterface`, `TMethodNamesEnum`, `TEventsInterface`, `TEventType`\>\>

#### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:143](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/web3-contract-context.ts#L143)
