[**@ethereum-abi-types-generator/types v2.0.0**](../README.md) • **Docs**

***

[Documentation v2.0.0](../../../packages.md) / [@ethereum-abi-types-generator/types](../README.md) / Rustify

# Type Alias: Rustify\<T, E\>

> **Rustify**\<`T`, `E`\>: [`Ok`](Ok.md)\<`T`\> \| [`Err`](Err.md)\<`E`\>

Represents a result that can either be a success (`Ok`) or an error (`Err`).
This type is inspired by Rust's Result type, providing a way to handle
both successful and error cases in a type-safe manner.

## Type Parameters

• **T**

The type of the successful value.

• **E**

The type of the error.

## Example

```ts
function divide(a: number, b: number): Rustify<number, string> {
  if (b === 0) {
    return { type: 'err', error: 'Division by zero' };
  }
  return { type: 'ok', value: a / b };
}
```

## Defined in

[rustify.types.ts:36](https://github.com/niZmosis/ethereum-abi-types-generator/blob/8be0c174f1ad191b06c4413881733fc6912573c5/packages/types/src/rustify.types.ts#L36)
