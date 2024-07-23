/**
 * Represents a successful operation with a value of type `T`.
 * @template T The type of the value.
 */
type Ok<T> = {
  type: 'ok'
  value: T
}

/**
 * Represents an erroneous operation with an error of type `E`.
 * The error type can be either 'err' or 'mute'.
 * @template E The type of the error.
 */
type Err<E> = {
  type: 'err' | 'mute'
  error: E
}

/**
 * Represents a result that can either be a success (`Ok`) or an error (`Err`).
 * @template T The type of the successful value.
 * @template E The type of the error.
 */
export type Rustify<T, E> = Ok<T> | Err<E>
