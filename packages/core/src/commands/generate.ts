import path from 'path'

import type {
  EatConfigContext,
  GeneratorContext,
  ProgramContext,
  GeneratedResults,
} from '@abi-toolkit/types'
import {
  buildFileName,
  defaultOutputDir,
  formatAbiName,
  getAbiFileLocationRawName,
  languageTypes,
  Logger,
} from '@abi-toolkit/utils'
import fs from 'fs-extra'

/**
 * Generates the file for the given language
 * @param module The module to import
 * @param options The options
 */
async function generateForLanguage(
  module: string,
  options: GeneratorContext,
): Promise<GeneratedResults> {
  const { typingsOutputDir, typingsOutputFileName, preventOverwrite } =
    options ?? {}

  const outputFilePath = path.join(
    typingsOutputDir ?? defaultOutputDir,
    `${typingsOutputFileName}.ts`,
  )

  if (preventOverwrite && fs.existsSync(outputFilePath)) {
    return {
      typingsResult: {
        type: 'mute',
        error: `${outputFilePath} already exists and preventOverwrite is true. Skipping file generation.`,
      },
      classResult: undefined,
    }
  }

  try {
    const { Generator } = (await import(module)) ?? {}

    if (!Generator) {
      throw new Error(
        `Could not find the ${module} package. Please make sure you have installed the correct version of the package. eg. pnpm add ${module}@latest`,
      )
    }

    const generator = new Generator(options)

    return generator.generate() as GeneratedResults
  } catch (error: any) {
    return {
      typingsResult: {
        type: 'err',
        error,
      },
      classResult: undefined,
    }
  }
}

export default {
  /**
   * Generate an ABI typings file
   * @param cmd The command
   */
  async abiFiles(
    cmd: ProgramContext<GeneratorContext>,
  ): Promise<GeneratedResults | undefined> {
    const { options } = cmd ?? {}
    const { language } = options ?? {}

    switch (language) {
      case 'ts':
        return generateForLanguage('@abi-toolkit/converter-typescript', options)
      // case 'rs':
      //   await generateForLanguage(
      //     '@abi-toolkit/converter-rust',
      //     options,
      //   )
      //   break
      default:
        Logger.error(
          `"${language}" is not supported. Supported languages are - ${languageTypes.join(', ')}`,
        )
        return
    }
  },

  /**
   * Generate the index file
   * @param cmd The command
   * @param filePaths The file paths for the typings and classes
   */
  async indexFiles(
    cmd: ProgramContext<EatConfigContext>,
    filePaths: {
      typings: string[]
      classes: string[]
    },
  ): Promise<void> {
    const {
      typingsOutputDir,
      language,
      generateClasses,
      classOutputDir,
      typingsOutputFileSuffix,
      classOutputFileSuffix,
      // verbatimModuleSyntax,
      // eslintConfigPath,
      // prettierConfigPath,
      // eslintOptions,
      // prettierOptions,
    } = cmd.options ?? {}

    switch (language) {
      case 'ts':
        // Creates barrel exports for the index file
        const barrel = (
          paths: string[],
          typingsOutputDirectory: string,
          isClass?: boolean,
        ): string => {
          let content = ''

          for (const filePath of paths) {
            if (path.basename(filePath) !== 'index.ts') {
              let relativePath = `./${path.relative(typingsOutputDirectory, filePath).replace(/\\/g, '/').replace('.ts', '')}`
              relativePath =
                (!isClass && typingsOutputFileSuffix) ||
                (isClass && classOutputFileSuffix)
                  ? relativePath.replace('.abi', '')
                  : relativePath

              content += `export * as ${formatAbiName(getAbiFileLocationRawName(path.relative(typingsOutputDirectory, filePath)))}Types from '${buildFileName({ fileName: relativePath, suffix: typingsOutputFileSuffix })}';\n`
            }
          }

          return content
        }

        // Typings Index
        const indexPath = path.join(typingsOutputDir, 'index.ts')

        const content =
          `export * from './common.types';\n` +
          barrel(filePaths.typings, typingsOutputDir)

        fs.writeFileSync(indexPath, content, {
          mode: 0o755,
        })

        // Classes Index
        if (generateClasses) {
          const classIndexPath = path.join(classOutputDir, 'index.ts')

          const content = barrel(filePaths.classes, classOutputDir, true)

          fs.writeFileSync(classIndexPath, content, {
            mode: 0o755,
          })
        }

        // const formattedIndexContent = await formatAndLintCode(
        //   indexContent,
        //   eslintOptions,
        //   eslintConfigPath,
        //   prettierOptions,
        //   prettierConfigPath,
        // )

        // Logger.success(`Successfully created index file saved in ${typingsOutputDir}`)
        break
      default:
        Logger.error(
          `"${language}" is not supported. Supported languages are - ${languageTypes.join(', ')}`,
        )
        return
    }
  },
}
