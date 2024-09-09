import type {
  ProgramContext,
  ProgramOptions,
  EatConfigContext,
  Library,
  Language,
  Framework,
  CommandType,
} from '@ethereum-abi-types-generator/types'
import type { ESLint } from 'eslint'
import type { Options as PrettierOptions } from 'prettier'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { defaultConfigArgs, defaultConfigFileName } from './defaults'
import { loadConfigFile } from './files'
import { languageTypes } from './language'
import { libraryTypes, frameworkTypes } from './library'
import { Logger } from './logger'
import { removeAllWhiteSpace } from './strings'

/**
 * Array of supported command types.
 */
export const commandTypes: CommandType[] = [
  'generate',
  'generateIndex',
  'help',
  'version',
  'scripts',
  'hardhat',
  'truffle',
] as const

/**
 * Map of command types to themselves for easy lookup.
 */
export const commandMap: { [K in CommandType]: K } = Object.fromEntries(
  commandTypes.map((type) => [type, type]),
) as any

/**
 * Type guard to check if a value is a supported command type.
 * @param commandType - The value to check.
 * @returns True if the value is a supported command type, false otherwise.
 */
export const isCommandType = (
  commandType: CommandType,
): commandType is CommandType => commandTypes.includes(commandType as any)

/**
 * Retrieves and parses all program arguments using yargs.
 * @returns A promise that resolves to a ProgramContext containing the parsed options.
 */
export async function getProgramArguments(): Promise<
  ProgramContext<ProgramOptions>
> {
  const args = await yargs(hideBin(process.argv))
    .version(false) // Overriding the version command
    // .command(commandMap.generate, 'Generate an ABI typings file')
    // .command(
    //   commandMap.generateIndex,
    //   'Generate an index file for all ABI typings',
    // )
    .command(commandMap.scripts, 'Show script helpers')
    .command(commandMap.hardhat, 'Generate an ABI typings files for Hardhat')
    .command(commandMap.truffle, 'Generate an ABI typings files for Truffle')
    .option('scripts', {
      type: 'boolean',
      describe: 'Show script helpers',
    })
    .option('config', {
      type: 'string',
      describe: 'Path to config file',
    })
    .option('version', {
      type: 'boolean',
      describe: 'Show version',
    })
    .option('inputDirOrPath', {
      type: 'string',
      describe: 'Directory of ABI files or a single ABI file path',
      // requiresArg: true,
    })
    .option('outputDir', {
      type: 'string',
      describe: 'Output directory',
    })
    .option('library', {
      type: 'string',
      describe: 'Library to use',
      choices: libraryTypes,
    })
    .option('libraryImportAlias', {
      type: 'string',
      describe:
        'Override the library import from name. Eg. from "ethers" to "ethersv5"',
    })
    .options('framework', {
      type: 'string',
      describe: 'Framework to use',
      choices: frameworkTypes,
    })
    .option('makeOutputDir', {
      type: 'boolean',
      describe: 'Make the output directory if it does not exist',
    })
    .option('makeIndexFile', {
      type: 'boolean',
      describe: 'Generate an index file exporting all the generated typings',
    })
    .option('prefixName', {
      type: 'string',
      describe:
        'Prefix name to the generated typings. Only used for single file input',
    })
    .option('prefixTypes', {
      type: 'boolean',
      describe:
        'Whether to prefix the name of the type, eg. ("MyTokenContract" or "PrefixNameContract") vs "Contract"',
    })
    .option('watch', {
      type: 'boolean',
      describe:
        'Whether to watch the ABI files for changes and regenerate typings',
    })
    .option('includeFiles', {
      type: 'array',
      describe: 'List of file paths to include, ignoring all other files',
    })
    .option('excludeFiles', {
      type: 'array',
      describe: 'List of file paths to ignore, including all other files',
    })
    .option('preventOverwrite', {
      type: 'boolean',
      describe: 'Whether to prevent overwriting existing files',
    })
    .option('verbatimModuleSyntax', {
      type: 'boolean',
      describe: 'Whether to use verbatim module syntax',
    })
    .option('language', {
      type: 'string',
      describe: 'Language to generate',
      choices: languageTypes,
    })
    .option('eslintConfigPath', {
      type: 'string',
      describe: 'ESLint config file path',
    })
    .option('prettierConfigPath', {
      type: 'string',
      describe: 'Prettier config file path',
    })
    .option('eslintOptions', {
      type: 'string',
      describe: 'ESLint options override',
    })
    .option('prettierOptions', {
      type: 'string',
      describe: 'Prettier options override',
    }).argv

  // Get the commands
  const positionalArgs = args._
  const command = positionalArgs[0] as string
  const subcommands = positionalArgs.slice(1) as string[]

  const isCommandFramework = frameworkTypes.includes(command as Framework)

  // Load the config file if it exists
  const configPath = args.config || defaultConfigFileName
  let config: EatConfigContext | null = null

  try {
    config = configPath
      ? await loadConfigFile<EatConfigContext>(configPath)
      : null
  } catch (error) {}

  // Misc options
  const scripts = args.scripts || false
  const version = args.version || false

  // Generator options
  const inputDirOrPath = args.inputDirOrPath || config?.inputDirOrPath || ''
  const outputDir =
    args.outputDir || config?.outputDir || defaultConfigArgs.outputDir
  const library = (args.library ||
    config?.library ||
    defaultConfigArgs.library) as Library
  const libraryImportAlias =
    args.libraryImportAlias ||
    config?.libraryImportAlias ||
    defaultConfigArgs.libraryImportAlias
  const framework = (
    isCommandFramework
      ? command
      : args.framework || config?.framework || defaultConfigArgs.framework
  ) as Framework
  const makeOutputDir =
    args.makeOutputDir ||
    config?.makeOutputDir ||
    defaultConfigArgs.makeOutputDir
  const makeIndexFile =
    args.makeIndexFile ||
    config?.makeIndexFile ||
    defaultConfigArgs.makeIndexFile
  const prefixName = removeAllWhiteSpace(
    args.prefixName || config?.prefixName || defaultConfigArgs.prefixName,
  )
  const prefixTypes =
    args.prefixTypes || config?.prefixTypes || defaultConfigArgs.prefixTypes
  const watch = args.watch || config?.watch || defaultConfigArgs.watch
  const includeFiles =
    (args.includeFiles as string[]) ||
    config?.includeFiles ||
    defaultConfigArgs.includeFiles
  const excludeFiles =
    (args.excludeFiles as string[]) ||
    config?.excludeFiles ||
    defaultConfigArgs.excludeFiles
  const language = (args.language ||
    config?.language ||
    defaultConfigArgs.language) as Language
  const preventOverwrite =
    args.preventOverwrite ||
    config?.preventOverwrite ||
    defaultConfigArgs.preventOverwrite
  const verbatimModuleSyntax =
    args.verbatimModuleSyntax ||
    config?.verbatimModuleSyntax ||
    defaultConfigArgs.verbatimModuleSyntax
  const prettierConfigPath =
    args.prettierConfigPath ||
    config?.prettierConfigPath ||
    defaultConfigArgs.prettierConfigPath
  const eslintConfigPath =
    args.eslintConfigPath ||
    config?.eslintConfigPath ||
    defaultConfigArgs.eslintConfigPath

  // Parsing ESLint and Prettier options
  let eslintOptions: ESLint.Options = defaultConfigArgs.eslintOptions
  if (args.eslintOptions && typeof args.eslintOptions === 'string') {
    try {
      eslintOptions = JSON.parse(
        removeAllWhiteSpace(args.eslintOptions),
      ) as ESLint.Options
    } catch (error) {
      Logger.error(
        'Failed to parse eslintOptions. Ensure it is a valid JSON string.',
      )
      process.exit(1)
    }
  } else if (
    config?.eslintOptions &&
    Object.keys(config.eslintOptions).length > 0
  ) {
    eslintOptions = config.eslintOptions
  }

  let prettierOptions: PrettierOptions = defaultConfigArgs.prettierOptions
  if (args.prettierOptions && typeof args.prettierOptions === 'string') {
    try {
      prettierOptions = JSON.parse(
        removeAllWhiteSpace(args.prettierOptions),
      ) as PrettierOptions
    } catch (error) {
      Logger.error(
        'Failed to parse prettierOptions. Ensure it is a valid JSON string.',
      )
      process.exit(1)
    }
  } else if (
    config?.prettierOptions &&
    Object.keys(config.prettierOptions).length > 0
  ) {
    prettierOptions = config.prettierOptions
  }

  return {
    command,
    options: {
      scripts,
      version,
      inputDirOrPath,
      outputDir,
      library,
      libraryImportAlias,
      framework,
      makeOutputDir,
      makeIndexFile,
      prefixName,
      prefixTypes,
      watch,
      includeFiles,
      excludeFiles,
      language,
      preventOverwrite,
      verbatimModuleSyntax,
      eslintConfigPath,
      prettierConfigPath,
      eslintOptions,
      prettierOptions,
    },
    subcommands,
  }
}
