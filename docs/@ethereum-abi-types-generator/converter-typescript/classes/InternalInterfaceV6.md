[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / InternalInterfaceV6

# Class: InternalInterfaceV6\<TMethodNames\>

Represents the internal interface of an Ethers v6 contract.

## Type Parameters

• **TMethodNames**

The names of the contract methods

## Constructors

### new InternalInterfaceV6()

> **new InternalInterfaceV6**\<`TMethodNames`\>(): [`InternalInterfaceV6`](InternalInterfaceV6.md)\<`TMethodNames`\>

#### Returns

[`InternalInterfaceV6`](InternalInterfaceV6.md)\<`TMethodNames`\>

## Properties

### deploy

> `readonly` **deploy**: `any`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:43](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L43)

***

### errors

> `readonly` **errors**: `Record`\<`string`, `any`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:39](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L39)

***

### events

> `readonly` **events**: `Record`\<`string`, `any`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:40](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L40)

***

### fragments

> `readonly` **fragments**: `any`[]

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:38](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L38)

***

### functions

> `readonly` **functions**: `Record`\<`string`, `any`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:41](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L41)

***

### structs

> `readonly` **structs**: `Record`\<`string`, `any`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:42](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L42)

## Methods

### \_decodeParams()

> **\_decodeParams**(`params`, `data`): `Result`

#### Parameters

• **params**: `any`[]

• **data**: `BytesLike`

#### Returns

`Result`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:53](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L53)

***

### \_encodeParams()

> **\_encodeParams**(`params`, `values`): `string`

#### Parameters

• **params**: `any`[]

• **values**: `any`[]

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:54](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L54)

***

### decodeEventLog()

> **decodeEventLog**(`eventFragment`, `data`, `topics`?): `Result`

#### Parameters

• **eventFragment**: `any`

• **data**: `BytesLike`

• **topics?**: `string`[]

#### Returns

`Result`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:77](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L77)

***

### decodeFunctionData()

> **decodeFunctionData**(`functionFragment`, `data`): `Result`

#### Parameters

• **functionFragment**: `TMethodNames`

• **data**: `BytesLike`

#### Returns

`Result`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:56](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L56)

***

### decodeFunctionResult()

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

• **functionFragment**: `any`

• **data**: `BytesLike`

#### Returns

`Result`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:61](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L61)

***

### encodeDeploy()

> **encodeDeploy**(`values`?): `string`

#### Parameters

• **values?**: `any`[]

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:55](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L55)

***

### encodeEventLog()

> **encodeEventLog**(`eventFragment`, `values`): `object`

#### Parameters

• **eventFragment**: `any`

• **values**: `any`[]

#### Returns

`object`

##### data

> **data**: `string`

##### topics

> **topics**: `string`[]

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:73](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L73)

***

### encodeFilterTopics()

> **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

#### Parameters

• **eventFragment**: `any`

• **values**: `any`[]

#### Returns

(`string` \| `string`[])[]

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:69](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L69)

***

### encodeFunctionData()

> **encodeFunctionData**(`functionFragment`, `values`?): `string`

#### Parameters

• **functionFragment**: `any`

• **values?**: `any`[]

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:57](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L57)

***

### encodeFunctionResult()

> **encodeFunctionResult**(`functionFragment`, `values`?): `string`

#### Parameters

• **functionFragment**: `any`

• **values?**: `any`[]

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:65](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L65)

***

### format()

> **format**(`format`?): `string` \| `string`[]

#### Parameters

• **format?**: `string`

#### Returns

`string` \| `string`[]

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:44](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L44)

***

### getEvent()

> **getEvent**(`nameOrSignatureOrTopic`): `any`

#### Parameters

• **nameOrSignatureOrTopic**: `string`

#### Returns

`any`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:50](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L50)

***

### getEventTopic()

> **getEventTopic**(`eventFragment`): `string`

#### Parameters

• **eventFragment**: `any`

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:52](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L52)

***

### getFunction()

> **getFunction**(`nameOrSignatureOrSighash`): `any`

#### Parameters

• **nameOrSignatureOrSighash**: `string`

#### Returns

`any`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:49](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L49)

***

### getSighash()

> **getSighash**(`functionFragment`): `string`

#### Parameters

• **functionFragment**: `any`

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:51](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L51)

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

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:83](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L83)

***

### parseTransaction()

> **parseTransaction**(`tx`): `TransactionDescription`

#### Parameters

• **tx**

• **tx.data**: `string`

• **tx.value?**: `bigint`

#### Returns

`TransactionDescription`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:82](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L82)

***

### getAbiCoder()

> `static` **getAbiCoder**(): `any`

#### Returns

`any`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:45](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L45)

***

### getAddress()

> `static` **getAddress**(`address`): `string`

#### Parameters

• **address**: `string`

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:46](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L46)

***

### getEventTopic()

> `static` **getEventTopic**(`eventFragment`): `string`

#### Parameters

• **eventFragment**: `any`

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:48](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L48)

***

### getSighash()

> `static` **getSighash**(`functionFragment`): `string`

#### Parameters

• **functionFragment**: `any`

#### Returns

`string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:47](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L47)

***

### isInterface()

> `static` **isInterface**(`value`): `value is ContractInterface`

#### Parameters

• **value**: `any`

#### Returns

`value is ContractInterface`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:84](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L84)
