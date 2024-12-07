[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / ContractVersionV4

# Interface: ContractVersionV4

Represents a basic Ethereum contract interface.

## Extended by

- [`EthersContractV4`](EthersContractV4.md)

## Properties

### address

> `readonly` **address**: `string`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:24](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L24)

***

### addressPromise

> `readonly` **addressPromise**: `Promise`\<`string`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:29](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L29)

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:30](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L30)

***

### interface

> `readonly` **interface**: `Interface`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:25](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L25)

***

### provider

> `readonly` **provider**: `Provider`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:27](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L27)

***

### signer

> `readonly` **signer**: `Signer`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:26](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L26)

## Methods

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

• **eventName**: `string` \| `EventFilter`

• ...**args**: `any`[]

#### Returns

`boolean`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:33](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L33)

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

• **overrides?**: `TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:31](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L31)

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

• **eventName?**: `string` \| `EventFilter`

#### Returns

`number`

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:34](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L34)

***

### listeners()

> **listeners**(`eventName`): `Listener`[]

#### Parameters

• **eventName**: `string` \| `EventFilter`

#### Returns

`Listener`[]

#### Defined in

[packages/converter-typescript/src/types/ethers-v4-contract-context.ts:35](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/converter-typescript/src/types/ethers-v4-contract-context.ts#L35)
