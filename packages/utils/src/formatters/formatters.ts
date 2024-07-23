import type { ESLint } from 'eslint'
import type { Options as PrettierOptions } from 'prettier'

import {
  formatCodeWithEslint,
  formatFilesEslint,
  loadEslintConfigs,
} from './eslint'
import {
  formatCodeWithPrettier,
  formatFilesPrettier,
  loadPrettierConfigs,
} from './prettier'
import { getAllFilePathsFromDirectory } from '../files'
import { Logger } from '../logger'

/**
 * Formats and lints the given code.
 *
 * @param code - The code to format and lint.
 * @param eslintOptions - The ESLint options.
 * @param eslintConfigPath - The ESLint config file path.
 * @param prettierOptions - The Prettier options.
 * @param prettierConfigPath - The Prettier config file path.
 * @returns The formatted and linted code.
 */
export async function formatAndLintCode(
  code: string,
  eslintOptions?: ESLint.Options,
  eslintConfigPath?: string,
  prettierOptions?: PrettierOptions,
  prettierConfigPath?: string,
): Promise<string> {
  let formattedCode = code

  for await (const config of loadEslintConfigs({
    eslintOptions,
    eslintConfigPath,
  })) {
    try {
      formattedCode = await formatCodeWithEslint(formattedCode, config)
      if (config.baseConfig?.plugins?.includes('prettier')) {
        return formattedCode // ESLint is configured to use Prettier
      }
    } catch (error) {
      Logger.warning(`ESLint formatting failed: ${(error as any)?.message}`)
    }
  }

  for await (const config of loadPrettierConfigs({
    prettierOptions,
    prettierConfigPath,
  })) {
    try {
      formattedCode = await formatCodeWithPrettier(formattedCode, config)
    } catch (error) {
      Logger.warning(`Prettier formatting failed: ${(error as any)?.message}`)
    }
  }

  return formattedCode
}

/**
 * Formats and lints the generated files in the specified output directory and its subdirectories.
 *
 * @param outputDir - The output directory containing the generated files.
 * @param eslintOptions - The ESLint options.
 * @param eslintConfigPath - The ESLint config file path.
 * @param prettierOptions - The Prettier options.
 * @param prettierConfigPath - The Prettier config file path.
 * @returns A promise that resolves when the formatting and linting are complete.
 */
export async function formatAndLintFiles(
  outputDir: string,
  eslintOptions?: ESLint.Options,
  eslintConfigPath?: string,
  prettierOptions?: PrettierOptions,
  prettierConfigPath?: string,
): Promise<void> {
  const filePaths = getAllFilePathsFromDirectory(outputDir)

  for await (const config of loadEslintConfigs({
    eslintOptions,
    eslintConfigPath,
  })) {
    try {
      await formatFilesEslint(filePaths, config)
      if (config.baseConfig?.plugins?.includes('prettier')) {
        return // ESLint is configured to use Prettier
      }
    } catch (error) {
      Logger.warning(`ESLint formatting failed: ${(error as any)?.message}`)
    }
  }

  for await (const config of loadPrettierConfigs({
    prettierOptions,
    prettierConfigPath,
  })) {
    try {
      await formatFilesPrettier(filePaths, config)
    } catch (error) {
      Logger.warning(`Prettier formatting failed: ${(error as any)?.message}`)
    }
  }
}
