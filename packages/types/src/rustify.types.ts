/**
 * Represents a successful operation with a value of type `T`.
 * @template T The type of the value.
 */
export type Ok<T> = {
  type: 'ok'
  value: T
}

/**
 * Represents an erroneous operation with an error of type `E`.
 * The error type can be either 'err' or 'mute'.
 * @template E The type of the error.
 */
export type Err<E> = {
  type: 'err' | 'mute'
  error: E
}

/**
 * Represents a result that can either be a success (`Ok`) or an error (`Err`).
 * This type is inspired by Rust's Result type, providing a way to handle
 * both successful and error cases in a type-safe manner.
 *
 * @template T The type of the successful value.
 * @template E The type of the error.
 *
 * @example
 * function divide(a: number, b: number): Rustify<number, string> {
 *   if (b === 0) {
 *     return { type: 'err', error: 'Division by zero' };
 *   }
 *   return { type: 'ok', value: a / b };
 * }
 */
export type Rustify<T, E> = Ok<T> | Err<E>
