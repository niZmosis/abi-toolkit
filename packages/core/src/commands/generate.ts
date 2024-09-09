import path from 'path'

import type {
  EatConfigContext,
  GeneratorContext,
  ProgramContext,
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
 * @param prefixName The prefix name
 * @param outputDir The output dir
 * @param preventOverwrite Whether to prevent overwrite
 */
async function generateForLanguage(
  module: string,
  options: GeneratorContext,
  prefixName: string,
  outputDir: string,
  preventOverwrite: boolean,
): Promise<void> {
  const outputFilePath = path.join(
    outputDir ?? defaultOutputDir,
    `${prefixName}.ts`,
  )

  if (preventOverwrite && fs.existsSync(outputFilePath)) {
    Logger.warning(
      `File ${outputFilePath} already exists and preventOverwrite is true. Skipping file generation.`,
    )
    return
  }

  try {
    const { AbiGenerator } = await import(module)

    if (!AbiGenerator) {
      throw new Error(
        `Could not find the ${module} package. Please make sure you have installed the correct version of the package. eg. pnpm add ${module}@latest`,
      )
    }

    const generator = new AbiGenerator(options)
    await generator.generate()
  } catch (error: any) {
    Logger.error(error)
  }
}

export default {
  /**
   * Generate an ABI typings file
   * @param cmd The command
   */
  async abiFile(cmd: ProgramContext<GeneratorContext>): Promise<void> {
    const { options } = cmd ?? {}
    const { outputDir, prefixName, language, preventOverwrite } = options ?? {}

    switch (language) {
      case 'ts':
        await generateForLanguage(
          '@ethereum-abi-types-generator/converter-typescript',
          options,
          prefixName,
          outputDir,
          preventOverwrite,
        )
        break
      // case 'rs':
      //   await generateForLanguage(
      //     '@ethereum-abi-types-generator/converter-rust',
      //     options,
      //     prefixName,
      //     outputDir,
      //     preventOverwrite,
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
   * @param filePaths The file paths
   */
  async indexFile(
    cmd: ProgramContext<EatConfigContext>,
    filePaths: string[],
  ): Promise<void> {
    const {
      outputDir,
      language,
      // verbatimModuleSyntax,
      // eslintConfigPath,
      // prettierConfigPath,
      // eslintOptions,
      // prettierOptions,
    } = cmd.options ?? {}

    switch (language) {
      case 'ts':
        const indexPath = path.join(outputDir, 'index.ts')

        let indexContent = ''

        // Add the common types file
        indexContent += `export * from './common-types';\n`

        for (const filePath of filePaths) {
          if (path.basename(filePath) !== 'index.ts') {
            const relativePath = `./${path.relative(outputDir, filePath).replace(/\\/g, '/').replace('.ts', '')}`

            indexContent += `export * as ${formatAbiName(getAbiFileLocationRawName(path.relative(outputDir, filePath)))} from '${relativePath}';\n`
          }
        }

        // const formattedIndexContent = await formatAndLintCode(
        //   indexContent,
        //   eslintOptions,
        //   eslintConfigPath,
        //   prettierOptions,
        //   prettierConfigPath,
        // )

        fs.writeFileSync(indexPath, indexContent, {
          mode: 0o755,
        })

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
