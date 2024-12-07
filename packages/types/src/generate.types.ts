import type { ESLint } from 'eslint'
import type { Options as PrettierOptions } from 'prettier'

import type { AbiItem } from './abi.types'
import type { Language } from './language.types'
import type { Framework, Library } from './library.types'
import type { Rustify } from './rustify.types'

/**
 * Represents the response from the typings generate command.
 */
export type GenerateResponse = {
  /** The name of the ABI */
  abiName: string
  /** The location where the output was generated */
  outputLocation: string
  /** The location of the ABI file */
  abiFileLocation: string
  /** The generated content */
  content: string
}

/**
 * Represents the results of the generation process.
 */
export type GeneratedResults = {
  /** The result of generating typings */
  typingsResult: Rustify<GenerateResponse, string>
  /** The result of generating classes (if applicable) */
  classResult?: Rustify<GenerateResponse, string>
}

/**
 * Base configuration options for the generator.
 * Applies to both typings and classes.
 */
export type BaseConfigContext = {
  /**
   * Directory of ABI files or a single ABI file path. Required.
   * If command is `generate` then this is the directory of the ABI JSON/JSONFragment files.
   * If command is `generateClasses` then this is the directory of the generated typings files.
   */
  inputDirOrPath: string
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
 * Configuration options for generating typings.
 */
export type TypingsConfigContext = {
  /** Output directory. Defaults to './ethereum-abi-types' */
  typingsOutputDir: string
  /** The file name to use for the generated typings. Only used for single file input. Defaults to name of the ABI file */
  typingsOutputFileName: string
  /** The suffix to append to the file name of the generated typings. eg. (my-abi.types.ts vs my-abi.ts). Defaults to "types" */
  typingsOutputFileSuffix: string
  /** Whether to prefix the name of the type with the `typingsOutputFileName`, eg. ('MyTokenContract' or 'PrefixNameContract') vs 'Contract'. Defaults to false */
  typingsPrefixTypes: boolean
}

/**
 * Configuration options for generating classes.
 */
export type ClassConfigContext = {
  /** Whether to generate classes for the generated typings */
  generateClasses: boolean
  /** The output directory for the class. If not set it will use the `typingsOutputDir`. */
  classOutputDir: string
  /** The file name to use for the generated class. Only used for single file input. Defaults to name of the ABI file */
  classOutputFileName: string
  /** The suffix to append to the file name of the generated classes. eg. (my-abi.contract.ts vs my-abi.ts). Defaults to "contract" */
  classOutputFileSuffix: string
  /** Whether to integrate multicall-toolkit into the class */
  classMulticall: boolean
}

/**
 * Combined configuration options for the generator.
 */
export type EatConfigContext = BaseConfigContext &
  TypingsConfigContext &
  ClassConfigContext

/**
 * Context for the generator.
 */
export type GeneratorContext = Omit<
  EatConfigContext,
  'makeIndexFile' | 'inputDirOrPath' | 'includeFiles' | 'excludeFiles'
> & {
  /** The input path for the ABI file */
  inputPath: string
  /** The ABI items parsed from the input file */
  abiItems: AbiItem[]
}

/**
 * Program Context
 */
export type ProgramContext<TOptions = EatConfigContext> = {
  /** The main command being executed */
  command: string
  /** Any subcommands */
  subcommands: string[]
  /** The options passed to the program */
  options: TOptions
}
