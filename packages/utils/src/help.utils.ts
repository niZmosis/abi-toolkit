import type { CommandType, HelpMessage } from '@abi-toolkit/types'
import { cyan } from 'colors'

import { languageTypes } from './language.utils'
import { libraryTypes } from './library.utils'

const command = 'abi-toolkit <command>'
const customConfig = '--config=./customConfigs/ethersv5.config.json'
const inputDirOrPath = '--inputDirOrPath=DIR_OR_FILE_PATH'
const typingsOutputDir = '--typingsOutputDir=PATH_DIRECTORY'
const library = `--library=${libraryTypes.join('|')}`
const libraryImportAlias = '--libraryImportAlias=ethersv5'
const makeOutputDir = '--makeOutputDir'
const makeIndexFile = '--makeIndexFile'
const typingsOutputFileName = '--typingsOutputFileName=MyPrefixName'
const typingsPrefixTypes = '--typingsPrefixTypes'
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
    `${command} ${inputDirOrPath} ${typingsOutputFileName}`,
    `${command} ${inputDirOrPath} ${typingsOutputFileName} ${prettierOptions}`,
    `${command} ${inputDirOrPath} ${watch}`,
    `${command} ${inputDirOrPath} ${typingsOutputFileName} ${watch}`,

    cyan('Output Directory'),
    `${command} ${inputDirOrPath} ${typingsOutputDir}`,
    `${command} ${inputDirOrPath} ${typingsOutputDir} ${watch}`,
    `${command} ${inputDirOrPath} ${typingsOutputDir} ${typingsOutputFileName}`,
    `${command} ${inputDirOrPath} ${typingsOutputDir} ${typingsOutputFileName} ${typingsPrefixTypes}`,
    `${command} ${inputDirOrPath} ${typingsOutputDir} ${typingsOutputFileName} ${watch}`,

    cyan('Formatting Options'),
    `${command} ${inputDirOrPath} ${prettierOptions}`,
    `${command} ${inputDirOrPath} ${prettierOptions} ${watch}`,
    `${command} ${inputDirOrPath} ${typingsOutputDir} ${prettierOptions}`,
    `${command} ${inputDirOrPath} ${typingsOutputDir} ${prettierOptions} ${watch}`,
    `${command} ${inputDirOrPath} ${typingsOutputDir} ${typingsOutputFileName} ${prettierOptions}`,
    `${command} ${inputDirOrPath} ${typingsOutputDir} ${typingsOutputFileName} ${prettierOptions} ${watch}`,

    cyan('Library Options'),
    `${command} ${inputDirOrPath} ${library}`,
    `${command} ${inputDirOrPath} ${library} ${watch}`,
    `${command} ${inputDirOrPath} ${library} ${libraryImportAlias}`,
    `${command} ${inputDirOrPath} ${library} ${prettierOptions}`,
    `${command} ${inputDirOrPath} ${library} ${prettierOptions} ${watch}`,

    cyan('Custom Library Options'),
    `${command} ${inputDirOrPath} ${typingsOutputFileName} ${library}`,
    `${command} ${inputDirOrPath} ${typingsOutputFileName} ${library} ${watch}`,
    `${command} ${inputDirOrPath} ${typingsOutputFileName} ${library} ${prettierOptions}`,
    `${command} ${inputDirOrPath} ${typingsOutputFileName} ${library} ${prettierOptions} ${watch}`,

    cyan('ESLint and Prettier Configurations'),
    `${command} ${inputDirOrPath} ${typingsOutputDir} ${eslintConfigPath}`,
    `${command} ${inputDirOrPath} ${typingsOutputDir} ${prettierConfigPath}`,
    `${command} ${inputDirOrPath} ${typingsOutputDir} ${eslintOptions}`,
    `${command} ${inputDirOrPath} ${typingsOutputDir} ${prettierOptions}`,

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
