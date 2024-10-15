[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / ContractVersionV5

# Interface: ContractVersionV5\<TMethodNames\>

Represents the base structure of an Ethers v5 contract.

## Extended by

- [`EthersContractV5`](EthersContractV5.md)

## Type Parameters

• **TMethodNames**

The names of the contract methods

## Properties

### address

> `readonly` **address**: `string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:116](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L116)

***

### addressPromise

> `readonly` **addressPromise**: `Promise`\<`string`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:138](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L138)

***

### callStatic

> `readonly` **callStatic**: `object`

#### Index Signature

 \[`name`: `string`\]: `ContractFunction`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:120](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L120)

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:139](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L139)

***

### estimateGas

> `readonly` **estimateGas**: `object`

#### Index Signature

 \[`name`: `string`\]: `ContractFunction`\<`BigNumber`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:123](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L123)

***

### interface

> `readonly` **interface**: `InternalInterface`\<`TMethodNames`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:117](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L117)

***

### populateTransaction

> `readonly` **populateTransaction**: `object`

#### Index Signature

 \[`name`: `string`\]: `ContractFunction`\<`object`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:126](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L126)

***

### provider

> `readonly` **provider**: `Provider`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:119](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L119)

***

### signer

> `readonly` **signer**: `Signer`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:118](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L118)

## Methods

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

• **eventName**: `string` \| `EventFilter`

• ...**args**: `any`[]

#### Returns

`boolean`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:142](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L142)

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

• **overrides?**: `TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:140](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L140)

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

• **eventName?**: `string` \| `EventFilter`

#### Returns

`number`

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:143](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L143)

***

### listeners()

> **listeners**(`eventName`): `Listener`[]

#### Parameters

• **eventName**: `string` \| `EventFilter`

#### Returns

`Listener`[]

#### Defined in

[packages/converter-typescript/src/types/ethers-v5-contract-context.ts:144](https://github.com/niZmosis/ethereum-abi-types-generator/blob/34014c6ac1a58a7622fbd21e7421270aae38bf36/packages/converter-typescript/src/types/ethers-v5-contract-context.ts#L144)
