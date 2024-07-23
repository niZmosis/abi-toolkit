import type { ESLint } from 'eslint'
import type { Options as PrettierOptions } from 'prettier'

import type { Language } from './language.types'
import type { Framework, Library } from './library.types'

/**
 * Represents the response from the generate command.
 */
export type GenerateResponse = {
  abiName: string
  outputLocation: string
  abiJsonFileLocation: string
}

/**
 * Configuration options for the Ethereum ABI Types generator.
 */
export type EatConfigContext = {
  /** Directory of ABI files or a single ABI file path. Required */
  inputDirOrPath: string
  /** Output directory. Defaults to './ethereum-abi-types' */
  outputDir: string
  /** Library to use. Defaults to 'web3' */
  library: Library
  /** Override the library import from name. Eg. 'from "ethers"' to 'from "ethersv5"' */
  libraryImportAlias: string
  /** Framework to use. Defaults to 'none' */
  framework: Framework
  /** Make the output directory if it doesn't exist. Defaults to false */
  makeOutputDir: boolean
  /** Generate an index file exporting all the generated typings. Defaults to true */
  makeIndexFile: boolean
  /** Prefix name to the generated typings. Only used for single file input. Defaults to name of the ABI file */
  prefixName: string
  /** Whether to prefix the name of the type, eg. ('MyTokenContract' or 'PrefixNameContract') vs 'Contract'. Defaults to false */
  prefixTypes: boolean
  /** Whether to watch the ABI files for changes and regenerate typings. Defaults to false */
  watch: boolean
  /** List of file paths to include, ignoring all other files. Defaults to [] */
  includeFiles: string[]
  /** List of file paths to ignore, including all other files. Defaults to [] */
  excludeFiles: string[]
  /** Whether to prevent overwriting existing files. Defaults to false */
  preventOverwrite: boolean
  /** Whether to use verbatim module syntax. Defaults to true */
  verbatimModuleSyntax: boolean
  /** Language to generate. Defaults to 'ts' */
  language: Language
  /** ESLint config file path. */
  eslintConfigPath: string
  /** Prettier config file path. */
  prettierConfigPath: string
  /** ESLint options override. */
  eslintOptions: ESLint.Options
  /** Prettier options override. */
  prettierOptions: PrettierOptions
}

/**
 * Context for the generator.
 */
export type GeneratorContext = Omit<
  EatConfigContext,
  'makeIndexFile' | 'inputDirOrPath' | 'includeFiles' | 'excludeFiles'
> & {
  inputPath: string
  inputFile: string
}

/**
 * Program Context
 */
export type ProgramContext<TOptions = ProgramOptions> = {
  command: string
  subcommands: string[]
  options: TOptions
}

/**
 * Program Options
 */
export type ProgramOptions = EatConfigContext & {
  /** Show script helpers */
  scripts: boolean
  /** Show version */
  version: boolean
}
