[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / Web3ContractContext

# Type Alias: Web3ContractContext\<TMethodsInterface, TMethodNamesEnum, TEventsInterface, TEventType\>

> **Web3ContractContext**\<`TMethodsInterface`, `TMethodNamesEnum`, `TEventsInterface`, `TEventType`\>: `object`

Represents the context of a Web3 contract with methods interface, method names enum, events interface, and event type.

## Type Parameters

• **TMethodsInterface**

The interface of contract methods

• **TMethodNamesEnum**

The enum of method names

• **TEventsInterface**

The interface of contract events

• **TEventType**

The type of events

## Type declaration

### address

> **address**: `string`

### events

> **events**: `TEventsInterface` & `object`

#### Type declaration

##### allEvents()

###### allEvents(options)

###### Parameters

• **options**: [`EventOptions`](../interfaces/EventOptions.md)

###### Returns

[`EventResponse`](../interfaces/EventResponse.md)

###### allEvents(options, callback)

###### Parameters

• **options**: [`EventOptions`](../interfaces/EventOptions.md)

• **callback**

###### Returns

[`EventResponse`](../interfaces/EventResponse.md)

### jsonInterface

> **jsonInterface**: [`AbiModel`](../interfaces/AbiModel.md)\<`TMethodNamesEnum`, `TEventType`\>

### methods

> **methods**: `TMethodsInterface`

### options

> **options**: [`Options`](../interfaces/Options.md)

### clone()

#### Returns

[`Web3ContractContext`](Web3ContractContext.md)\<`TMethodsInterface`, `TMethodNamesEnum`, `TEventsInterface`, `TEventType`\>

### deploy()

#### Parameters

• **options**: [`DeployOptions`](../interfaces/DeployOptions.md)

#### Returns

[`ContractSendMethod`](../interfaces/ContractSendMethod.md)\<`TMethodsInterface`, `TMethodNamesEnum`, `TEventsInterface`, `TEventType`\>

### getPastEvents()

#### getPastEvents(event)

##### Parameters

• **event**: `TEventType`

##### Returns

`Promise`\<[`EventData`](../interfaces/EventData.md)[]\>

#### getPastEvents(event, options, callback)

##### Parameters

• **event**: `TEventType`

• **options**: [`EventOptions`](../interfaces/EventOptions.md)

• **callback**

##### Returns

`Promise`\<[`EventData`](../interfaces/EventData.md)[]\>

#### getPastEvents(event, options)

##### Parameters

• **event**: `TEventType`

• **options**: [`EventOptions`](../interfaces/EventOptions.md)

##### Returns

`Promise`\<[`EventData`](../interfaces/EventData.md)[]\>

#### getPastEvents(event, callback)

##### Parameters

• **event**: `TEventType`

• **callback**

##### Returns

`Promise`\<[`EventData`](../interfaces/EventData.md)[]\>

### once()

#### once(event, callback)

##### Parameters

• **event**: `TEventType`

• **callback**

##### Returns

`void`

#### once(event, options, callback)

##### Parameters

• **event**: `TEventType`

• **options**: [`EventOptions`](../interfaces/EventOptions.md)

• **callback**

##### Returns

`void`

## Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:12](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/converter-typescript/src/types/web3-contract-context.ts#L12)
