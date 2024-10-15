[**@ethereum-abi-types-generator/converter-typescript v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/converter-typescript](../README.md) / PromiEvent

# Interface: PromiEvent\<T\>

Represents a PromiEvent for Web3 contract interactions.

## Extends

- `Promise`\<`T`\>

## Type Parameters

• **T**

The type of the resolved value

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

#### Inherited from

`Promise.[toStringTag]`

#### Defined in

node\_modules/.pnpm/typescript@5.5.4/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:176

## Methods

### catch()

> **catch**\<`TResult`\>(`onrejected`?): `Promise`\<`T` \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

• **TResult** = `never`

#### Parameters

• **onrejected?**: `null` \| (`reason`) => `TResult` \| `PromiseLike`\<`TResult`\>

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.catch`

#### Defined in

node\_modules/.pnpm/typescript@5.5.4/node\_modules/typescript/lib/lib.es5.d.ts:1557

***

### finally()

> **finally**(`onfinally`?): `Promise`\<`T`\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

• **onfinally?**: `null` \| () => `void`

The callback to execute when the Promise is settled (fulfilled or rejected).

#### Returns

`Promise`\<`T`\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.finally`

#### Defined in

node\_modules/.pnpm/typescript@5.5.4/node\_modules/typescript/lib/lib.es2018.promise.d.ts:29

***

### on()

#### on(type, handler)

> **on**(`type`, `handler`): [`PromiEvent`](PromiEvent.md)\<`T`\>

##### Parameters

• **type**: `"transactionHash"`

• **handler**

##### Returns

[`PromiEvent`](PromiEvent.md)\<`T`\>

##### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:212](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L212)

#### on(type, handler)

> **on**(`type`, `handler`): [`PromiEvent`](PromiEvent.md)\<`T`\>

##### Parameters

• **type**: `"receipt"`

• **handler**

##### Returns

[`PromiEvent`](PromiEvent.md)\<`T`\>

##### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:214](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L214)

#### on(type, handler)

> **on**(`type`, `handler`): [`PromiEvent`](PromiEvent.md)\<`T`\>

##### Parameters

• **type**: `"confirmation"`

• **handler**

##### Returns

[`PromiEvent`](PromiEvent.md)\<`T`\>

##### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:219](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L219)

#### on(type, handler)

> **on**(`type`, `handler`): [`PromiEvent`](PromiEvent.md)\<`T`\>

##### Parameters

• **type**: `"error"`

• **handler**

##### Returns

[`PromiEvent`](PromiEvent.md)\<`T`\>

##### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:224](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L224)

***

### once()

#### once(type, handler)

> **once**(`type`, `handler`): [`PromiEvent`](PromiEvent.md)\<`T`\>

##### Parameters

• **type**: `"transactionHash"`

• **handler**

##### Returns

[`PromiEvent`](PromiEvent.md)\<`T`\>

##### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:198](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L198)

#### once(type, handler)

> **once**(`type`, `handler`): [`PromiEvent`](PromiEvent.md)\<`T`\>

##### Parameters

• **type**: `"receipt"`

• **handler**

##### Returns

[`PromiEvent`](PromiEvent.md)\<`T`\>

##### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:200](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L200)

#### once(type, handler)

> **once**(`type`, `handler`): [`PromiEvent`](PromiEvent.md)\<`T`\>

##### Parameters

• **type**: `"confirmation"`

• **handler**

##### Returns

[`PromiEvent`](PromiEvent.md)\<`T`\>

##### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:205](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L205)

#### once(type, handler)

> **once**(`type`, `handler`): [`PromiEvent`](PromiEvent.md)\<`T`\>

##### Parameters

• **type**: `"error"`

• **handler**

##### Returns

[`PromiEvent`](PromiEvent.md)\<`T`\>

##### Defined in

[packages/converter-typescript/src/types/web3-contract-context.ts:210](https://github.com/niZmosis/ethereum-abi-types-generator/blob/b8e282ea584f52118722e9d563db502ef3e0aa75/packages/converter-typescript/src/types/web3-contract-context.ts#L210)

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled`?, `onrejected`?): `Promise`\<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

• **TResult1** = `T`

• **TResult2** = `never`

#### Parameters

• **onfulfilled?**: `null` \| (`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\>

The callback to execute when the Promise is resolved.

• **onrejected?**: `null` \| (`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\>

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

`Promise.then`

#### Defined in

node\_modules/.pnpm/typescript@5.5.4/node\_modules/typescript/lib/lib.es5.d.ts:1550
