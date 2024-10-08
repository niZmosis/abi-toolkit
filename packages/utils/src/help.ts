import type {
  CommandType,
  HelpMessage,
} from '@ethereum-abi-types-generator/types'
import { cyan } from 'colors'

import { languageTypes } from './language'
import { libraryTypes } from './library'

const command = 'ethereum-abi-types-generator <command>'
const customConfig = '--config=./customConfigs/ethersv5.config.json'
const inputDirOrPath = '--inputDirOrPath=DIR_OR_FILE_PATH'
const outputDir = '--outputDir=PATH_DIRECTORY'
const library = `--library=${libraryTypes.join('|')}`
const libraryImportAlias = '--libraryImportAlias=ethersv5'
const makeOutputDir = '--makeOutputDir'
const makeIndexFile = '--makeIndexFile'
const outputFileName = '--outputFileName=MyPrefixName'
const prefixTypes = '--prefixTypes'
const watch = '--watch'
const includeFiles = '--includeFiles=["./inputs/fake-contract-abi.json"]'
const excludeFiles = '--excludeFiles=["./inputs/fake-contract-abi.json"]'
const preventOverwrite = '--preventOverwrite'
const verbatimModuleSyntax = '--verbatimModuleSyntax'
const language = `--language=${languageTypes.join('|')}`
const eslintConfigPath = '--eslintConfigPath=./.eslintrc.json'
const prettierConfigPath = '--prettierConfigPath=./.prettierrc.json'
const eslintOptions = `--eslintOptions={YOUR_ESLINT_OPTIONS}`
const prettierOptions = `--prettierOptions={{ "semi": false, "trailingComma": 'all' }}`

/**
 * The help messages for the generate command.
 */
export const generateHelpMessages: HelpMessage = {
  commands: ['empty (default)', 'hardhat (optional)', 'truffle (optional)'],
  examples: [
    cyan('Basic Usage'),
    `${command} ${inputDirOrPath}`,
    `${command} ${inputDirOrPath} ${outputFileName}`,
    `${command} ${inputDirOrPath} ${outputFileName} ${prettierOptions}`,
    `${command} ${inputDirOrPath} ${watch}`,
    `${command} ${inputDirOrPath} ${outputFileName} ${watch}`,

    cyan('Output Directory'),
    `${command} ${inputDirOrPath} ${outputDir}`,
    `${command} ${inputDirOrPath} ${outputDir} ${watch}`,
    `${command} ${inputDirOrPath} ${outputDir} ${outputFileName}`,
    `${command} ${inputDirOrPath} ${outputDir} ${outputFileName} ${prefixTypes}`,
    `${command} ${inputDirOrPath} ${outputDir} ${outputFileName} ${watch}`,

    cyan('Formatting Options'),
    `${command} ${inputDirOrPath} ${prettierOptions}`,
    `${command} ${inputDirOrPath} ${prettierOptions} ${watch}`,
    `${command} ${inputDirOrPath} ${outputDir} ${prettierOptions}`,
    `${command} ${inputDirOrPath} ${outputDir} ${prettierOptions} ${watch}`,
    `${command} ${inputDirOrPath} ${outputDir} ${outputFileName} ${prettierOptions}`,
    `${command} ${inputDirOrPath} ${outputDir} ${outputFileName} ${prettierOptions} ${watch}`,

    cyan('Library Options'),
    `${command} ${inputDirOrPath} ${library}`,
    `${command} ${inputDirOrPath} ${library} ${watch}`,
    `${command} ${inputDirOrPath} ${library} ${libraryImportAlias}`,
    `${command} ${inputDirOrPath} ${library} ${prettierOptions}`,
    `${command} ${inputDirOrPath} ${library} ${prettierOptions} ${watch}`,

    cyan('Custom Library Options'),
    `${command} ${inputDirOrPath} ${outputFileName} ${library}`,
    `${command} ${inputDirOrPath} ${outputFileName} ${library} ${watch}`,
    `${command} ${inputDirOrPath} ${outputFileName} ${library} ${prettierOptions}`,
    `${command} ${inputDirOrPath} ${outputFileName} ${library} ${prettierOptions} ${watch}`,

    cyan('ESLint and Prettier Configurations'),
    `${command} ${inputDirOrPath} ${outputDir} ${eslintConfigPath}`,
    `${command} ${inputDirOrPath} ${outputDir} ${prettierConfigPath}`,
    `${command} ${inputDirOrPath} ${outputDir} ${eslintOptions}`,
    `${command} ${inputDirOrPath} ${outputDir} ${prettierOptions}`,

    cyan('Miscellaneous Options'),
    `${command} ${inputDirOrPath} ${makeOutputDir}`,
    `${command} ${inputDirOrPath} ${makeIndexFile}`,
    `${command} ${inputDirOrPath} ${preventOverwrite}`,
    `${command} ${inputDirOrPath} ${verbatimModuleSyntax}`,
    `${command} ${inputDirOrPath} ${language}`,

    cyan('File Inclusions and Exclusions'),
    `${command} ${inputDirOrPath} ${includeFiles}`,
    `${command} ${inputDirOrPath} ${excludeFiles}`,

    cyan('Custom Configuration'),
    `${command} ${inputDirOrPath} ${customConfig}`,
  ],
  usage: `${command} ${inputDirOrPath}`,
}

/**
 * Builds the help message up
 * @param helpMessage The help message object
 */
export function buildUpHelpMessage(helpMessage: HelpMessage): string {
  let message = `Usage: ${helpMessage.usage}`

  if (helpMessage.commands.length > 0) {
    message += '\n\nCommands:\n'
    for (let i = 0; i < helpMessage.commands.length; i++) {
      message += `    ${helpMessage.commands[i]}\n`
    }
  } else {
    message += '\n'
  }

  message += '\nExamples:\n'

  for (let i = 0; i < helpMessage.examples.length; i++) {
    message += `    $ ${helpMessage.examples[i]}\n`
  }

  return message
}

/**
 * Gets the help message by the command type
 * @param commandType The command type
 */
export function getHelpMessageByCommandType(commandType: CommandType): string {
  switch (commandType) {
    case 'generate':
    case 'scripts':
      return buildUpHelpMessage(generateHelpMessages)
    default:
      throw new Error('No help message for this command')
  }
}
