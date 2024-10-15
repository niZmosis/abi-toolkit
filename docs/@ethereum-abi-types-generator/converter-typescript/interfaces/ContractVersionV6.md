[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / ContractVersionV6

# Interface: ContractVersionV6\<TMethodNames\>

Represents the base structure of an Ethers v6 contract.

## Extended by

- [`EthersContractV6`](EthersContractV6.md)

## Type Parameters

• **TMethodNames**

The names of the contract methods

## Properties

### address

> `readonly` **address**: `string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:92](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L92)

***

### addressPromise

> `readonly` **addressPromise**: `Promise`\<`string`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:105](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L105)

***

### callStatic

> `readonly` **callStatic**: `object`

#### Index Signature

 \[`name`: `string`\]: `ContractFunction`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:96](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L96)

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:106](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L106)

***

### estimateGas

> `readonly` **estimateGas**: `object`

#### Index Signature

 \[`name`: `string`\]: `ContractFunction`\<`bigint`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:99](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L99)

***

### interface

> `readonly` **interface**: `InternalInterface`\<`TMethodNames`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:93](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L93)

***

### populateTransaction

> `readonly` **populateTransaction**: `object`

#### Index Signature

 \[`name`: `string`\]: `ContractFunction`\<`TransactionRequest`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:102](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L102)

***

### provider

> `readonly` **provider**: `Provider`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:95](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L95)

***

### signer

> `readonly` **signer**: `Signer`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:94](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L94)

## Methods

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

• **eventName**: `string` \| `EventFilter`

• ...**args**: `any`[]

#### Returns

`boolean`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:108](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L108)

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

• **overrides?**: `TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:107](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L107)

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

• **eventName?**: `string` \| `EventFilter`

#### Returns

`number`

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:109](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L109)

***

### listeners()

> **listeners**(`eventName`): `Listener`[]

#### Parameters

• **eventName**: `string` \| `EventFilter`

#### Returns

`Listener`[]

#### Defined in

[packages/converter-typescript/src/types/ethers-v6-contract-context.ts:110](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/ethers-v6-contract-context.ts#L110)
