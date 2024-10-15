import path from 'path'

import type { AbiFilePathContext } from '@ethereum-abi-types-generator/types'
import {
  defaultOutputDir,
  getAbiFiles,
  formatAndLintFiles,
  Logger,
  getProgramArguments,
  getHelpMessageByCommandType,
  isDirectory,
  buildExecutingPath,
  getDirectoryPathForFramework,
  commandMap,
  defaultClassOutputDir,
} from '@ethereum-abi-types-generator/utils'
import { yellow, green } from 'colors'

import commands from '../commands'

const stats = {
  createdIndexFile: false,
  totalFiles: 0,
  generatedFiles: 0,
  excludedFiles: 0,
  incompatible: 0,
  failedFiles: 0,
}

/**
 * Tracks all the generated files to build the index file
 */
const generatedFilePaths: {
  typings: string[]
  classes: string[]
} = {
  typings: [],
  classes: [],
}

export async function execute(packageVersion: string): Promise<void> {
  // Used to track how long it takes to generate the typings
  const startTime = new Date()

  // Get the cli arguments, and or the config file arguments
  const context = await getProgramArguments(packageVersion)
  const { command, options } = context ?? {}
  const {
    inputDirOrPath,
    typingsOutputDir,
    framework,
    includeFiles,
    excludeFiles,
    typingsOutputFileName,
    makeIndexFile,
    generateClasses,
    eslintConfigPath,
    prettierConfigPath,
    eslintOptions,
    prettierOptions,
    classOutputDir,
  } = options ?? {}

  if (command === 'scripts' || command === 's') {
    return Logger.log(getHelpMessageByCommandType(commandMap.scripts))
  }

  let dirOrPath = inputDirOrPath

  const hasFramework =
    framework === 'hardhat' ||
    command === 'hardhat' ||
    framework === 'truffle' ||
    command === 'truffle'

  if (!dirOrPath && !hasFramework) {
    Logger.error('inputDirOrPath is required.')
    process.exit(1)
  }

  if (!dirOrPath && hasFramework) {
    const frameworkDirectory = getDirectoryPathForFramework(framework)
    const contracts = buildExecutingPath(frameworkDirectory)

    if (!isDirectory(contracts)) {
      throw new Error(
        `Cannot find the ${frameworkDirectory} directory please make sure you run this command on the root of the project and have compiled your smart contracts.`,
      )
    }

    dirOrPath = contracts
  }

  const filePathContexts: AbiFilePathContext[] = await getAbiFiles({
    dirOrPath,
  })

  if (!filePathContexts.length) {
    if (!framework || framework === 'none') {
      Logger.error(`No ABI files found in ${dirOrPath}.`)
      process.exit(1)
    } else {
      Logger.error(
        `No ABI files found in ${getDirectoryPathForFramework(framework)}. Please make sure you have compiled your smart contracts.`,
      )
      process.exit(1)
    }
  }

  const numberOfFiles = filePathContexts.length

  Logger.info(
    `Found ${numberOfFiles} ABI ${numberOfFiles === 1 ? 'file' : 'files'} to process. Starting...`,
  )

  // Generate all the type files
  await Promise.allSettled(
    filePathContexts.map(async (filePathContext) => {
      stats.totalFiles += generateClasses ? 2 : 1

      const { filePath, frameworkContractName, abiItems } = filePathContext

      if (
        !!includeFiles.length &&
        !includeFiles.includes(path.basename(filePath))
      ) {
        Logger.warning(`Excluding file: ${path.basename(filePath)}`)
        stats.excludedFiles++
        return
      }

      if (
        !!excludeFiles.length &&
        excludeFiles.includes(path.basename(filePath))
      ) {
        Logger.warning(`Excluding file: ${path.basename(filePath)}`)
        stats.excludedFiles++
        return
      }

      const results = await commands.generate.abiFiles({
        ...context,
        options: {
          ...context.options,
          inputPath: filePath,
          abiItems,
        },
      })

      if (!results) {
        // Logger.error is already called
        return
      }

      const fileName =
        // `typingsOutputFileName` is only used if the input was a single file
        filePathContexts.length === 1
          ? typingsOutputFileName || frameworkContractName || ''
          : frameworkContractName ||
            path.basename(filePath, path.extname(filePath))

      if (results?.typingsResult) {
        generatedFilePaths.typings.push(
          path.join(typingsOutputDir || defaultOutputDir, `${fileName}.ts`),
        )

        stats.generatedFiles++
      }

      if (results?.classResult) {
        generatedFilePaths.classes.push(
          path.join(classOutputDir || defaultClassOutputDir, `${fileName}.ts`),
        )

        stats.generatedFiles++
      }

      switch (results.typingsResult.type) {
        case 'ok':
          break
        case 'err':
          Logger.error(`Error generating file: ${results.typingsResult.error}`)
          stats.failedFiles++
          break
        case 'mute':
          Logger.warning(`Skipping file: ${results.typingsResult.error}`)
          stats.incompatible++
          break
      }

      if (results.classResult) {
        switch (results.classResult.type) {
          case 'ok':
            break
          case 'err':
            Logger.error(`Error generating file: ${results.classResult.error}`)
            stats.failedFiles++
            break
          case 'mute':
            Logger.warning(`Skipping file: ${results.classResult.error}`)
            stats.incompatible++
            break
        }
      }
    }),
  )

  // Generate the index file
  if (makeIndexFile) {
    try {
      Logger.info('Generating index file...')
      await commands.generate.indexFiles(context, generatedFilePaths)
      stats.createdIndexFile = true
    } catch (error: any) {
      Logger.error(`Error generating index file: ${error?.message}`)
    }
  }

  Logger.info('Formatting and linting files...')

  // Format all files in typingsOutputDir
  await formatAndLintFiles(
    typingsOutputDir,
    eslintOptions,
    eslintConfigPath,
    prettierOptions,
    prettierConfigPath,
  )

  const endTime = new Date()
  const timeTaken = (endTime.getTime() - startTime.getTime()) / 1000

  Logger.log(`🎉 ${green('Completed ABI typings!')}
  ⏱️  Time taken: ${yellow(`${timeTaken} seconds`)}
  📁 Total processed: ${yellow(String(stats.totalFiles))}
  ✅ Generated: ${yellow(String(stats.generatedFiles))}
  ⏭️  Excluded: ${yellow(String(stats.excludedFiles))}
  🚫 Incompatible: ${yellow(String(stats.incompatible))}
  ❌ Failed: ${yellow(String(stats.failedFiles))}
  📃 Created Index: ${stats.createdIndexFile ? '👍' : '👎'}`)
}
