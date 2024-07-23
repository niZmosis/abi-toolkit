import path from 'path'

import type { AbiFilePathContext } from '@ethereum-abi-types-generator/types'
import {
  defaultOutputDir,
  getAbiFiles,
  loadAbiContent,
  formatAndLintFiles,
  Logger,
  getProgramArguments,
  getHelpMessageByCommandType,
  isDirectory,
  buildExecutingPath,
  getDirectoryPathForFramework,
  commandMap,
} from '@ethereum-abi-types-generator/utils'
import { yellow, green } from 'colors'
import yargs from 'yargs'

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
const generatedFilePaths: string[] = []

export async function execute(packageVersion: string): Promise<void> {
  // Used to track how long it takes to generate the typings
  const startTime = new Date()

  // Get the cli arguments, and or the config file arguments
  const context = await getProgramArguments()
  const { command, options } = context ?? {}
  const {
    scripts,
    version,
    inputDirOrPath,
    outputDir,
    framework,
    includeFiles,
    excludeFiles,
    prefixName,
    makeIndexFile,
    eslintConfigPath,
    prettierConfigPath,
    eslintOptions,
    prettierOptions,
  } = options ?? {}

  if (command === 'help') {
    yargs.showHelp()
    return
  }

  if (version || command === 'version') {
    return Logger.log(packageVersion)
  }

  if (scripts || command === 'scripts') {
    return Logger.log(getHelpMessageByCommandType(commandMap.scripts))
  }

  let dirOrPath = inputDirOrPath

  if (framework === 'none' && !dirOrPath) {
    Logger.error('inputDirOrPath is required.')
    process.exit(1)
  }

  if (!dirOrPath && (framework === 'hardhat' || framework === 'truffle')) {
    const frameworkDirectory = getDirectoryPathForFramework(framework)
    const contracts = buildExecutingPath(frameworkDirectory)

    if (!isDirectory(contracts)) {
      throw new Error(
        `Cannot find the ${frameworkDirectory} directory please make sure you run this command on the root of the project and have compiled your smart contracts.`,
      )
    }

    dirOrPath = contracts
  }

  const filePathContexts: AbiFilePathContext[] = isDirectory(dirOrPath)
    ? await getAbiFiles({ directoryPath: dirOrPath })
    : [{ filePath: dirOrPath, contractName: undefined }]

  if (!filePathContexts.length) {
    if (framework === 'none') {
      Logger.error(`No ABI files found in ${dirOrPath}.`)
      process.exit(1)
    } else {
      Logger.error(
        `No ABI files found in ${getDirectoryPathForFramework(framework)}. Please make sure you have compiled your smart contracts.`,
      )
      process.exit(1)
    }
  }

  Logger.info(`Found ${filePathContexts.length} files to process. Starting...`)

  // Generate all the type files
  await Promise.allSettled(
    filePathContexts.map(async (filePathContext) => {
      stats.totalFiles++

      const { filePath, contractName } = filePathContext

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

      const result = await loadAbiContent(filePath)

      switch (result.type) {
        case 'ok':
          // Prefix name is only used if the input was a single file
          const fileName =
            filePathContexts.length === 1
              ? prefixName || contractName || ''
              : contractName || path.basename(filePath, path.extname(filePath))

          await commands.generate.abiFile({
            ...context,
            options: {
              ...context.options,
              inputPath: filePath,
              inputFile: result.value,
            },
          })

          generatedFilePaths.push(
            path.join(outputDir || defaultOutputDir, `${fileName}.ts`),
          )

          stats.generatedFiles++

          return
        case 'err':
          Logger.error(`Error generating file: ${result.error}`)
          stats.failedFiles++
          return
        case 'mute':
          Logger.warning(`Skipping file: ${result.error}`)
          stats.incompatible++
          return
      }
    }),
  )

  // Generate the index file
  if (makeIndexFile) {
    try {
      Logger.info('Generating index file...')
      await commands.generate.indexFile(context, generatedFilePaths)
      stats.createdIndexFile = true
    } catch (error: any) {
      Logger.error(`Error generating index file: ${error?.message}`)
    }
  }

  Logger.info('Formatting and linting files...')

  // Format all files in outputDir
  await formatAndLintFiles(
    outputDir,
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
