import path from 'path'

import type {
  EatConfigContext,
  GeneratorContext,
  ProgramContext,
  GeneratedResults,
} from '@ethereum-abi-types-generator/types'
import {
  defaultOutputDir,
  formatAbiName,
  getAbiFileLocationRawName,
  languageTypes,
  Logger,
} from '@ethereum-abi-types-generator/utils'
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
  const { outputDir, outputFileName, preventOverwrite } = options ?? {}

  const outputFilePath = path.join(
    outputDir ?? defaultOutputDir,
    `${outputFileName}.ts`,
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
        return generateForLanguage(
          '@ethereum-abi-types-generator/converter-typescript',
          options,
        )
      // case 'rs':
      //   await generateForLanguage(
      //     '@ethereum-abi-types-generator/converter-rust',
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
      outputDir,
      language,
      generateClasses,
      classOutputDir,
      // verbatimModuleSyntax,
      // eslintConfigPath,
      // prettierConfigPath,
      // eslintOptions,
      // prettierOptions,
    } = cmd.options ?? {}

    switch (language) {
      case 'ts':
        // Creates barrel exports for the index file
        const barrel = (paths: string[], outputDirectory: string): string => {
          let content = ''

          for (const filePath of paths) {
            if (path.basename(filePath) !== 'index.ts') {
              const relativePath = `./${path.relative(outputDirectory, filePath).replace(/\\/g, '/').replace('.ts', '')}`

              content += `export * as ${formatAbiName(getAbiFileLocationRawName(path.relative(outputDirectory, filePath)))} from '${relativePath}';\n`
            }
          }

          return content
        }

        // Typings Index
        const indexPath = path.join(outputDir, 'index.ts')

        const content =
          `export * from './common-types';\n` +
          barrel(filePaths.typings, outputDir)

        fs.writeFileSync(indexPath, content, {
          mode: 0o755,
        })

        // Classes Index
        if (generateClasses) {
          const classIndexPath = path.join(classOutputDir, 'index.ts')

          const content = barrel(filePaths.classes, classOutputDir)

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

        // Logger.success(`Successfully created index file saved in ${outputDir}`)
        break
      default:
        Logger.error(
          `"${language}" is not supported. Supported languages are - ${languageTypes.join(', ')}`,
        )
        return
    }
  },
}
