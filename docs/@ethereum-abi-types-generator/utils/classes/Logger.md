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

logger.utils.ts:53

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

logger.utils.ts:11

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

logger.utils.ts:35

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

logger.utils.ts:44

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

logger.utils.ts:27

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

logger.utils.ts:19
