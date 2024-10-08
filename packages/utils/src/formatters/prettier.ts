import fs from 'fs-extra'
import prettier, { type Options as PrettierOptions } from 'prettier'

import 'reflect-metadata'
import { loadConfigFile } from '../files'
import { Logger } from '../logger'

/**
 * Loads Prettier configuration from the provided options.
 * @param prettierOptions - The Prettier options to load.
 * @returns The Prettier options with the `parser` set to 'typescript', or null if no options are provided.
 */
function loadPrettierConfigFromOptions(
  prettierOptions?: PrettierOptions,
): PrettierOptions | null {
  if (prettierOptions) {
    prettierOptions.parser = 'typescript'
    return prettierOptions
  }
  return null
}

/**
 * Loads Prettier configuration from the provided file path.
 * @param prettierConfigPath - The path to the Prettier configuration file.
 * @returns A promise that resolves to the Prettier options with the `parser` set to 'typescript', or null if the configuration could not be loaded.
 */
async function loadPrettierConfigFromPath(
  prettierConfigPath?: string,
): Promise<PrettierOptions | null> {
  if (prettierConfigPath) {
    const prettierConfig =
      await loadConfigFile<PrettierOptions>(prettierConfigPath)
    if (prettierConfig) {
      prettierConfig.parser = 'typescript'
      return prettierConfig
    } else {
      Logger.warning(
        `Error loading Prettier configuration from ${prettierConfigPath}`,
      )
    }
  }
  return null
}

/**
 * Automatically loads Prettier configuration from the default configuration file.
 * @returns A promise that resolves to the Prettier options with the `parser` set to 'typescript', or null if the configuration could not be loaded.
 */
async function loadPrettierConfigAutomatically(): Promise<PrettierOptions | null> {
  try {
    const prettierConfig = await prettier.resolveConfig(process.cwd())
    if (prettierConfig) {
      prettierConfig.parser = 'typescript'
      return prettierConfig
    }
  } catch (error) {
    Logger.warning(
      `Error automatically loading Prettier configuration: ${(error as any)?.message}`,
    )
  }
  return null
}

/**
 * Loads the default Prettier configuration from the `default-configs` directory.
 * @returns A promise that resolves to the Prettier options, or null if the configuration could not be loaded.
 */
async function loadPrettierConfigDefault(): Promise<PrettierOptions | null> {
  const prettierConfig = await loadConfigFile<PrettierOptions>(
    './default-configs/.prettierrc.json',
  )

  if (prettierConfig) {
    Logger.warning('Using default Prettier configuration')

    return prettierConfig
  }

  Logger.warning('Default Prettier configuration not found')

  return null
}

/**
 * Loads the Prettier configuration based on the provided options and configuration path.
 * It prioritizes in the following order:
 * 1. If `prettierOptions` is provided, it will be used directly.
 * 2. If `prettierConfigPath` is provided, it will attempt to load the configuration from the specified path.
 * 3. If neither `prettierOptions` nor `prettierConfigPath` is provided, it will try to automatically find the Prettier configuration.
 * 4. If all methods fail, it will return a default Prettier configuration.
 *
 * @param params - The arguments.
 * @param params.prettierOptions - Optional Prettier options to be used directly.
 * @param params.prettierConfigPath - Optional path to the Prettier configuration file.
 * @returns A promise that resolves to the Prettier options.
 */
export async function loadPrettierConfig({
  prettierOptions,
  prettierConfigPath,
}: {
  prettierOptions?: PrettierOptions
  prettierConfigPath?: string
}): Promise<PrettierOptions | null> {
  let config = loadPrettierConfigFromOptions(prettierOptions)
  if (config) return config

  config = await loadPrettierConfigFromPath(prettierConfigPath)
  if (config) return config

  config = await loadPrettierConfigAutomatically()
  if (config) return config

  return loadPrettierConfigDefault()
}

/**
 * Asynchronously loads Prettier configurations based on provided options and paths.
 * It prioritizes loading in the following order:
 * 1. From provided `prettierOptions` if available.
 * 2. From provided `prettierConfigPath` if available.
 * 3. Automatically from the current working directory.
 * 4. Default configuration if all else fails.
 *
 * @param params - The parameters for loading Prettier configurations.
 * @param params.prettierOptions - Optional Prettier options to be used directly.
 * @param params.prettierConfigPath - Optional path to the Prettier configuration file.
 * @yields The loaded Prettier configuration options.
 */
export async function* loadPrettierConfigs({
  prettierOptions,
  prettierConfigPath,
}: {
  prettierOptions?: PrettierOptions
  prettierConfigPath?: string
}): AsyncGenerator<PrettierOptions, void, unknown> {
  if (prettierOptions) {
    const options = loadPrettierConfigFromOptions(prettierOptions)

    if (options) {
      options.parser = 'typescript'
      yield options
    } else {
      Logger.warning(
        `Error loading Prettier configuration from ${prettierOptions}`,
      )
    }
  }

  if (prettierConfigPath) {
    const options = await loadPrettierConfigFromPath(prettierConfigPath)

    if (options) {
      options.parser = 'typescript'
      yield options
    } else {
      Logger.warning(
        `Error loading Prettier configuration from ${prettierConfigPath}`,
      )
    }
  }

  try {
    const options = await loadPrettierConfigAutomatically()

    if (options) {
      options.parser = 'typescript'
      yield options
    }
  } catch (error) {
    Logger.warning(
      `Error automatically loading Prettier configuration: ${(error as any)?.message}`,
    )
  }

  const defaultOptions = await loadPrettierConfigDefault()
  if (defaultOptions) {
    Logger.warning('Using default Prettier configuration')
    defaultOptions.parser = 'typescript'
    yield defaultOptions
  }

  Logger.warning('No Prettier configuration found')
}

export async function formatCodeWithPrettier(
  code: string,
  prettierConfig: PrettierOptions,
): Promise<string> {
  try {
    return await prettier.format(code, prettierConfig)
  } catch (error) {
    Logger.warning(`Prettier formatting failed: ${(error as any)?.message}`)
    return code
  }
}

/**
 * Formats the given files using Prettier with the specified configuration.
 *
 * @param filePaths - The paths of the files to format.
 * @param prettierOptions - The path to the Prettier configuration file.
 * @throws Will throw an error if the Prettier configuration file is not found.
 * @returns A promise that resolves when the formatting is complete.
 */
export async function formatFilesPrettier(
  filePaths: string[],
  prettierOptions: PrettierOptions,
): Promise<void> {
  const prettierPromises = filePaths.map(async (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8')
    try {
      const formatted = await prettier.format(content, prettierOptions)
      fs.writeFileSync(filePath, formatted, 'utf8')
    } catch (error) {
      Logger.warning(
        `Prettier formatting failed for file ${filePath}: ${(error as any)?.message}`,
      )
    }
  })

  await Promise.all(prettierPromises)
}
