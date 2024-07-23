/**
 * Deep clone a object
 * @param object The object
 */
export function deepClone<T>(object: T): T {
  return JSON.parse(JSON.stringify(object)) as T
}
