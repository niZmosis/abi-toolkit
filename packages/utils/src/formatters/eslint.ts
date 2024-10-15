import path from 'path'

import { ESLint } from 'eslint'

import { loadConfigFile } from '../files'
import { Logger } from '../logger'

/**
 * Loads ESLint configuration from the provided options.
 * @param eslintOptions - The ESLint options to load.
 * @returns The ESLint options with `fix` set to true, or null if no options are provided.
 */
function loadEslintConfigFromOptions(
  eslintOptions?: ESLint.Options,
): ESLint.Options | null {
  if (eslintOptions) {
    eslintOptions.fix = true
    return eslintOptions
  }
  return null
}

/**
 * Loads ESLint configuration from the provided file path.
 * @param eslintConfigPath - The path to the ESLint configuration file.
 * @returns A promise that resolves to the ESLint options with `fix` set to true, or null if the configuration could not be loaded.
 */
async function loadEslintConfigFromPath(
  eslintConfigPath?: string,
): Promise<ESLint.Options | null> {
  if (eslintConfigPath) {
    const resolvedPath = path.resolve(process.cwd(), eslintConfigPath)
    const eslintConfig = await loadConfigFile<ESLint.ConfigData>(resolvedPath)

    if (eslintConfig) {
      return {
        baseConfig: eslintConfig,
        fix: true,
      }
    } else {
      Logger.warning(
        `Error loading ESLint configuration from ${eslintConfigPath}`,
      )
    }
  }
  return null
}

/**
 * Automatically loads ESLint configuration from the default `.eslintrc.json` file.
 * @returns A promise that resolves to the ESLint options with `fix` set to true, or null if the configuration could not be loaded.
 */
async function loadEslintConfigAutomatically(): Promise<ESLint.Options | null> {
  try {
    const eslint = new ESLint()
    const eslintConfig = await eslint.calculateConfigForFile(
      path.resolve(process.cwd(), './.eslintrc.json'),
    )

    if (eslintConfig) {
      return {
        baseConfig: eslintConfig,
        fix: true,
      }
    }
  } catch (error) {
    Logger.warning(
      `Error automatically loading ESLint configuration: ${(error as any)?.message}`,
    )
  }
  return null
}

/**
 * Loads the default ESLint configuration from the `default-configs` directory.
 * @returns A promise that resolves to the ESLint options with `fix` set to true, or null if the configuration could not be loaded.
 */
async function loadEslintConfigDefault(): Promise<ESLint.Options | null> {
  const configPath = path.resolve(__dirname, './default-configs/.eslintrc.json')
  const eslintConfig = await loadConfigFile<ESLint.ConfigData>(
    configPath,
    false,
  )

  if (eslintConfig) {
    Logger.warning('Using default ESLint configuration')

    return {
      baseConfig: eslintConfig,
      fix: true,
    }
  }

  Logger.warning('Default ESLint configuration not found')

  return null
}

/**
 * Asynchronously loads ESLint configurations based on provided options and paths.
 * It prioritizes loading in the following order:
 * 1. From provided `eslintOptions` if available.
 * 2. From provided `eslintConfigPath` if available.
 * 3. Automatically from the current working directory.
 * 4. Default configuration if all else fails.
 *
 * @param params - The parameters for loading ESLint configurations.
 * @param params.eslintOptions - Optional ESLint options to be used directly.
 * @param params.eslintConfigPath - Optional path to the ESLint configuration file.
 * @yields The loaded ESLint configuration options.
 */
export async function* loadEslintConfigs({
  eslintOptions,
  eslintConfigPath,
}: {
  eslintOptions?: ESLint.Options
  eslintConfigPath?: string
}): AsyncGenerator<ESLint.Options, void, unknown> {
  if (eslintOptions) {
    const options = loadEslintConfigFromOptions(eslintOptions)
    if (options) {
      options.fix = true
      yield options
    } else {
      Logger.warning(`Error loading ESLint configuration from ${eslintOptions}`)
    }
  }

  if (eslintConfigPath) {
    const options = await loadEslintConfigFromPath(eslintConfigPath)

    if (options) {
      options.fix = true
      yield options
    } else {
      Logger.warning(
        `Error loading ESLint configuration from ${eslintConfigPath}`,
      )
    }
  }

  try {
    const options = await loadEslintConfigAutomatically()
    if (options) {
      options.fix = true
      yield options
    }
  } catch (error) {
    Logger.warning(
      `Error automatically loading ESLint configuration: ${(error as any)?.message}`,
    )
  }

  const defaultOptions = await loadEslintConfigDefault()
  if (defaultOptions) {
    defaultOptions.fix = true
    yield defaultOptions
  }

  // Logger.warning('Using default ESLint configuration')
  // yield defaultEslintOptions

  Logger.warning('ESlint configuration not found')
}

/**
 * Formats the given code string using ESLint with the specified configuration.
 *
 * @param code - The code to format.
 * @param eslintOptions - The ESLint options.
 */
export async function formatCodeWithEslint(
  code: string,
  eslintOptions: ESLint.Options,
): Promise<string> {
  eslintOptions.fix = true

  const eslint = new ESLint(eslintOptions)

  const results = await eslint.lintText(code)
  await ESLint.outputFixes(results)

  // const formatter = await eslint.loadFormatter('stylish')
  // await formatter.format(results)
  if (results?.length && results[0]?.output) {
    return results[0].output
  }

  return code
}

/**
 * Formats the given files using ESLint with the specified configuration.
 *
 * @param filePaths - The paths of the files to format.
 * @param eslintOptions - The ESLint options.
 * @throws Will throw an error if the ESLint configuration file is not found.
 * @returns A promise that resolves when the formatting is complete.
 */
export async function formatFilesEslint(
  filePaths: string[],
  eslintOptions: ESLint.Options,
): Promise<void> {
  eslintOptions.fix = true

  const eslint = new ESLint(eslintOptions)

  const results = await eslint.lintFiles(filePaths)
  await ESLint.outputFixes(results)
}

/**
 * Type guard to check if an object is ESLint.Options
 *
 * @param obj - The object to check
 * @returns A boolean indicating if the object is ESLint.Options
 */
export function isESLintOptions(obj: any): obj is ESLint.Options {
  return (
    obj &&
    typeof obj === 'object' &&
    ('baseConfig' in obj || 'fix' in obj || 'extensions' in obj)
  )
}

/**
 * Type guard to check if an object is ESLint.ConfigData
 *
 * @param obj - The object to check
 * @returns A boolean indicating if the object is ESLint.ConfigData
 */
export function isESLintConfigData(obj: any): obj is ESLint.ConfigData {
  return (
    obj &&
    typeof obj === 'object' &&
    ('extends' in obj ||
      'parserOptions' in obj ||
      'env' in obj ||
      'rules' in obj)
  )
}
