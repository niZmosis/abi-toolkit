[**@ethereum-abi-types-generator/utils v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/utils](../README.md) / Logger

# Class: Logger

## Constructors

### new Logger()

> **new Logger**(): [`Logger`](Logger.md)

#### Returns

[`Logger`](Logger.md)

## Methods

### consoleLog()

> `static` **consoleLog**(`msg`, ...`objects`): `void`

Wrapper around `console.log` to use its native function

#### Parameters

• **msg**: `string`

The message

• ...**objects**: `any`[]

Any additional logs

#### Returns

`void`

#### Defined in

[logger.ts:53](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/utils/src/logger.ts#L53)

***

### error()

> `static` **error**(`msg`, ...`objects`): `void`

Render `console.error` in the terminal

#### Parameters

• **msg**: `string`

The message

• ...**objects**: `any`[]

Any additional logs

#### Returns

`void`

#### Defined in

[logger.ts:11](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/utils/src/logger.ts#L11)

***

### info()

> `static` **info**(`msg`, ...`objects`): `void`

Render `console.log` in the terminal

#### Parameters

• **msg**: `string`

The message

• ...**objects**: `any`[]

Any additional logs

#### Returns

`void`

#### Defined in

[logger.ts:35](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/utils/src/logger.ts#L35)

***

### log()

> `static` **log**(`msg`, ...`objects`): `void`

Render `console.log` in the terminal

#### Parameters

• **msg**: `string`

The message

• ...**objects**: `any`[]

Any additional logs

#### Returns

`void`

#### Defined in

[logger.ts:44](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/utils/src/logger.ts#L44)

***

### success()

> `static` **success**(`msg`, ...`objects`): `void`

Render `console.log` in the terminal

#### Parameters

• **msg**: `string`

The message

• ...**objects**: `any`[]

Any additional logs

#### Returns

`void`

#### Defined in

[logger.ts:27](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/utils/src/logger.ts#L27)

***

### warning()

> `static` **warning**(`msg`, ...`objects`): `void`

Render `console.warn` in the terminal

#### Parameters

• **msg**: `string`

The message

• ...**objects**: `any`[]

Any additional logs

#### Returns

`void`

#### Defined in

[logger.ts:19](https://github.com/niZmosis/ethereum-abi-types-generator/blob/51c0ac8a6ea35330201860f8469daa0efc6ae8f2/packages/utils/src/logger.ts#L19)
