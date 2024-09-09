import 'reflect-metadata'
import path from 'path'

import type {
  Framework,
  Rustify,
  AbiFilePathContext,
} from '@ethereum-abi-types-generator/types'
import fs from 'fs-extra'

import { isJsonFragmentArray } from './abi'
import { Logger } from './logger'
import { capitalize } from './strings'

/**
 * Strips comments from a given JSON content.
 *
 * @param content - The JSON content as a string.
 * @returns The JSON content without comments.
 */
export function stripComments(content: string): string {
  // Remove single-line comments
  content = content.replace(/\/\/.*$/gm, '')
  // Remove multi-line comments
  content = content.replace(/\/\*[\s\S]*?\*\//g, '')

  return content
}

/**
 * Loads a JSON file and parses its content.
 *
 * @template T - The expected type of the parsed JSON content.
 * @param filePath - The path to the JSON file.
 * @returns The parsed JSON content, or null if the file does not exist or fails to parse.
 */
export async function loadJsonFile(filePath: string): Promise<string | null> {
  if (fs.existsSync(filePath)) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      return JSON.parse(stripComments(content))
    } catch (error) {
      Logger.warning(
        `Error loading JSON file ${filePath}: ${(error as any)?.message}`,
      )
      return null
    }
  }
  return null
}

export async function loadConfigFile<T>(
  configPath: string,
  useResolvedPath = true,
): Promise<T | null> {
  const resolvedPath = useResolvedPath
    ? path.resolve(process.cwd(), configPath)
    : configPath

  if (fs.existsSync(resolvedPath)) {
    try {
      const content = fs.readFileSync(resolvedPath, 'utf8')
      return JSON.parse(stripComments(content)) as T
    } catch (error) {
      Logger.warning(
        `Error loading config file ${resolvedPath}: ${(error as any)?.message}`,
      )
      return null
    }
  }

  Logger.warning(`Config file ${resolvedPath} not found`)
  return null
}

/**
 * Check is a path is a directory
 * @param pathValue The path value
 */
export function isDirectory(pathValue: string): boolean {
  return fs.existsSync(pathValue) && fs.lstatSync(pathValue).isDirectory()
}

/**
 * Build the executing path
 */
export function buildExecutingPath(joinPath: string): string {
  return path.resolve(process.cwd(), joinPath)
}

/**
 * Get the directory path for the framework
 * @param framework The framework
 */
export function getDirectoryPathForFramework(framework: Framework): string {
  switch (framework) {
    case 'hardhat':
      return buildExecutingPath('./artifacts/contracts')
    case 'truffle':
      return buildExecutingPath('./build/contracts')
    default:
      throw new Error(`Framework ${framework} is not supported`)
  }
}

/**
 * Transform a JsonFragment file to a valid JSON file
 * @param abiFilePath The ABI file path
 */
export async function transformJsonFragmentToJson(
  abiFilePath: string,
): Promise<Rustify<string, string>> {
  try {
    let content = await fs.promises.readFile(abiFilePath, 'utf8')

    if (!content.startsWith('export default')) {
      return {
        type: 'mute',
        error: `${abiFilePath} as it does not contain a valid JsonFragment array.`,
      }
    }

    content = content.replace('export default ', '')

    // Remove trailing commas
    content = content.replace(/,(\s*[\]}])/g, '$1')

    // Replace single quotes with double quotes
    content = content.replace(/'/g, '"')

    // Fix unquoted keys
    content = content.replace(/(\w+):/g, '"$1":')

    // Remove comments
    content = stripComments(content)

    try {
      content = JSON.parse(content)
    } catch (error) {
      return {
        type: 'err',
        error: ` ${abiFilePath} failed to parse content for ABI file.`,
      }
    }

    if (isJsonFragmentArray(content)) {
      try {
        content = JSON.stringify(content, null, 2)
      } catch (error) {
        return {
          type: 'err',
          error: ` ${abiFilePath} failed to stringify content for ABI file.`,
        }
      }

      return {
        type: 'ok',
        value: content,
      }
    }

    return {
      type: 'mute',
      error: `${abiFilePath} as it does not contain a valid JsonFragment array.`,
    }
  } catch (error) {
    return {
      type: 'err',
      error: `${abiFilePath} is not a valid JSON object.`,
    }
  }
}

/**
 * Load and parse ABI content
 * @param abiFilePath The ABI file path
 * @returns The ABI content, or an empty string if the file is incompatible (e.g. not a JSON file or JsonFragment file)
 * @throws Error if the JSON or JsonFragment file is invalid
 */
export async function loadAbiContent(
  abiFilePath: string,
): Promise<Rustify<string, string>> {
  if (abiFilePath.endsWith('.json')) {
    try {
      const content = fs.readFileSync(abiFilePath, 'utf8')
      return {
        type: 'ok',
        value: stripComments(content),
      }
    } catch (error) {
      return {
        type: 'err',
        error: `${abiFilePath} invalid ABI JSON.`,
      }
    }
  } else if (abiFilePath.endsWith('.js') || abiFilePath.endsWith('.ts')) {
    return transformJsonFragmentToJson(abiFilePath)
  }

  return {
    type: 'mute',
    error: `${abiFilePath} has incompatible extension.`,
  }
}

/**
 * Recursively collects all file paths from the given directory and its subdirectories.
 *
 * @param dir - The directory to search for files.
 * @returns An array of file paths.
 */
export function getAllFilePathsFromDirectory(dir: string): string[] {
  let results: string[] = []
  const list = fs.readdirSync(dir)

  list.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFilePathsFromDirectory(filePath))
    } else if (file.endsWith('.ts')) {
      results.push(filePath)
    }
  })

  return results
}

/**
 * Formats the abi name
 * @param name The abi name
 */
export function formatAbiName(name: string): string {
  return name
    .split('-')
    .map((value) => capitalize(value))
    .join('')
    .split('.')
    .map((value) => capitalize(value))
    .join('')
}

/**
 * Get abi file location raw name
 */
export function getAbiFileLocationRawName(inputPath: string): string {
  const basename = path.basename(inputPath)
  return basename.slice(0, basename.lastIndexOf('.'))
}

/**
 * Get all the abi files and extract the .abi property if it's a Hardhat or Truffle framework
 * @param framework The framework
 * @param directoryPath The directory
 * @param fileList The file list
 */
export async function getAbiFiles({
  directoryPath,
  framework = 'none',
  fileList = [],
}: {
  directoryPath: string
  framework?: Framework
  fileList?: AbiFilePathContext[]
}): Promise<AbiFilePathContext[]> {
  const filePaths = await fs.promises.readdir(directoryPath)

  await Promise.allSettled(
    filePaths.map(async (filePath) => {
      const itemPath = path.join(directoryPath, filePath)

      if (isDirectory(itemPath)) {
        getAbiFiles({ framework, directoryPath: itemPath, fileList })
        return
      } else if (filePath.endsWith('.js') || filePath.endsWith('.ts')) {
        // The file is assumed to be a JsonFragment array
        fileList.push({
          filePath: itemPath,
          frameworkContractName: undefined,
        })
      } else if (filePath.endsWith('.json')) {
        if (!framework || framework === 'none') {
          // The file is assumed to be an ABI JSON file
          fileList.push({
            filePath: itemPath,
            frameworkContractName: undefined,
          })

          return
        }

        // The file is assumed to be a metadata file
        const result = await loadAbiContent(itemPath)

        if (result.type === 'ok') {
          if (filePath.includes('.json')) {
            try {
              const metadata = JSON.parse(result.value)

              if (metadata.abi && Array.isArray(metadata.abi)) {
                fileList.push({
                  filePath: itemPath,
                  frameworkContractName: metadata.contractName,
                })
              }
            } catch (error) {
              // mute it
            }
          }
        }
      }
    }),
  )

  // results.forEach((result) => {
  //   if (result.status === 'rejected') {
  //     console.error('Error processing file:', result.reason)
  //   }
  // })

  return fileList
}
