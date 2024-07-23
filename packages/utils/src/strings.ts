/**
 * Capitalize a string `hey` > `Hey`
 * @param str The value
 */
export function capitalize(str: string): string {
  if (str == null) {
    return str
  }

  return str.substring(0, 1).toUpperCase() + str.substring(1)
}

/**
 * Remove all white spaces
 * @param value The value
 */
export function removeAllWhiteSpace(value: string): string {
  return value.replace(/\s+/g, '')
}
