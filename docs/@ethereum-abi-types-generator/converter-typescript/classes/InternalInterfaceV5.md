[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / InternalInterfaceV5

# Class: InternalInterfaceV5\<TMethodNames\>

Represents the internal interface of an Ethers v5 contract.

## Type Parameters

• **TMethodNames**

The names of the contract methods

## Constructors

### new InternalInterfaceV5()

> **new InternalInterfaceV5**\<`TMethodNames`\>(): [`InternalInterfaceV5`](InternalInterfaceV5.md)\<`TMethodNames`\>

#### Returns

[`InternalInterfaceV5`](InternalInterfaceV5.md)\<`TMethodNames`\>

## Properties

### deploy

> `readonly` **deploy**: `any`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:61](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L61)

***

### errors

> `readonly` **errors**: `object`

#### Index Signature

 \[`name`: `string`\]: `any`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:49](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L49)

***

### events

> `readonly` **events**: `object`

#### Index Signature

 \[`name`: `string`\]: `EventFragment`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:52](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L52)

***

### fragments

> `readonly` **fragments**: `Fragment`[]

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:48](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L48)

***

### functions

> `readonly` **functions**: `object`

#### Index Signature

 \[`name`: `string`\]: `FunctionFragment`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:55](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L55)

***

### structs

> `readonly` **structs**: `object`

#### Index Signature

 \[`name`: `string`\]: `any`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:58](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L58)

## Methods

### \_decodeParams()

> **\_decodeParams**(`params`, `data`): `Result`

#### Parameters

• **params**: `ParamType`[]

• **data**: `BytesLike`

#### Returns

`Result`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:71](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L71)

***

### \_encodeParams()

> **\_encodeParams**(`params`, `values`): `string`

#### Parameters

• **params**: `ParamType`[]

• **values**: `any`[]

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:72](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L72)

***

### decodeEventLog()

> **decodeEventLog**(`eventFragment`, `data`, `topics`?): `Result`

#### Parameters

• **eventFragment**: `string` \| `EventFragment`

• **data**: `BytesLike`

• **topics?**: `string`[]

#### Returns

`Result`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:98](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L98)

***

### decodeFunctionData()

> **decodeFunctionData**(`functionFragment`, `data`): `Result`

#### Parameters

• **functionFragment**: `TMethodNames`

• **data**: `BytesLike`

#### Returns

`Result`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:74](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L74)

***

### decodeFunctionResult()

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

• **functionFragment**: `FunctionFragment` \| `TMethodNames`

• **data**: `BytesLike`

#### Returns

`Result`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:79](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L79)

***

### encodeDeploy()

> **encodeDeploy**(`values`?): `string`

#### Parameters

• **values?**: `any`[]

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:73](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L73)

***

### encodeEventLog()

> **encodeEventLog**(`eventFragment`, `values`): `object`

#### Parameters

• **eventFragment**: `EventFragment`

• **values**: `any`[]

#### Returns

`object`

##### data

> **data**: `string`

##### topics

> **topics**: `string`[]

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:91](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L91)

***

### encodeFilterTopics()

> **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

#### Parameters

• **eventFragment**: `EventFragment`

• **values**: `any`[]

#### Returns

(`string` \| `string`[])[]

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:87](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L87)

***

### encodeFunctionData()

> **encodeFunctionData**(`functionFragment`, `values`?): `string`

#### Parameters

• **functionFragment**: `FunctionFragment` \| `TMethodNames`

• **values?**: `any`[]

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:75](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L75)

***

### encodeFunctionResult()

> **encodeFunctionResult**(`functionFragment`, `values`?): `string`

#### Parameters

• **functionFragment**: `FunctionFragment` \| `TMethodNames`

• **values?**: `any`[]

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:83](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L83)

***

### format()

> **format**(`format`?): `string` \| `string`[]

#### Parameters

• **format?**: `string`

#### Returns

`string` \| `string`[]

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:62](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L62)

***

### getEvent()

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

• **nameOrSignatureOrTopic**: `string`

#### Returns

`EventFragment`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:68](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L68)

***

### getEventTopic()

> **getEventTopic**(`eventFragment`): `string`

#### Parameters

• **eventFragment**: `string` \| `EventFragment`

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:70](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L70)

***

### getFunction()

> **getFunction**(`nameOrSignatureOrSighash`): `FunctionFragment`

#### Parameters

• **nameOrSignatureOrSighash**: `string`

#### Returns

`FunctionFragment`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:67](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L67)

***

### getSighash()

> **getSighash**(`functionFragment`): `string`

#### Parameters

• **functionFragment**: `string` \| `FunctionFragment`

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:69](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L69)

***

### parseLog()

> **parseLog**(`log`): `LogDescription`

#### Parameters

• **log**

• **log.data**: `string`

• **log.topics**: `string`[]

#### Returns

`LogDescription`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:107](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L107)

***

### parseTransaction()

> **parseTransaction**(`tx`): `TransactionDescription`

#### Parameters

• **tx**

• **tx.data**: `string`

• **tx.value?**: `BigNumberish`

#### Returns

`TransactionDescription`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:103](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L103)

***

### getAbiCoder()

> `static` **getAbiCoder**(): `AbiCoder`

#### Returns

`AbiCoder`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:63](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L63)

***

### getAddress()

> `static` **getAddress**(`address`): `string`

#### Parameters

• **address**: `string`

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:64](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L64)

***

### getEventTopic()

> `static` **getEventTopic**(`eventFragment`): `string`

#### Parameters

• **eventFragment**: `EventFragment`

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:66](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L66)

***

### getSighash()

> `static` **getSighash**(`functionFragment`): `string`

#### Parameters

• **functionFragment**: `FunctionFragment`

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:65](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L65)

***

### isInterface()

> `static` **isInterface**(`value`): `value is Interface`

#### Parameters

• **value**: `any`

#### Returns

`value is Interface`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:108](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L108)
