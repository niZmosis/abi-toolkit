import type { Language } from '@ethereum-abi-types-generator/types'

/**
 * Array of supported language types.
 */
export const languageTypes: Language[] = ['ts'] as const

/**
 * Map of language types to themselves for easy lookup.
 */
export const languageMap: { [K in Language]: K } = Object.fromEntries(
  languageTypes.map((type) => [type, type]),
) as any

/**
 * Type guard to check if a value is a supported language.
 * @param language - The value to check.
 * @returns True if the value is a supported language, false otherwise.
 */
export const isLanguage = (language: Language): language is Language =>
  languageTypes.includes(language as any)
