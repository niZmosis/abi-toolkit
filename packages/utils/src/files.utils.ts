import 'reflect-metadata'
import path from 'path'

import type {
  Framework,
  Rustify,
  AbiFilePathContext,
  AbiItem,
  AbiItemType,
  AbiInput,
  AbiOutput,
  StateMutabilityType,
} from '@abi-toolkit/types'
import type { JsonFragment } from '@ethersproject/abi'
import fs from 'fs-extra'

import { isJsonFragmentArray } from './abi.utils'
import { Logger } from './logger.utils'
import { capitalize } from './strings.utils'

/**
 * Construct a file name with the given suffix and extension
 *
 * @param params - parameters to build the file name
 * @param params.fileName The file name
 * @param params.suffix The suffix
 * @param params.extension The extension
 *
 * @returns The file name with the suffix and extension
 */
export function buildFileName({
  fileName,
  suffix,
  extension,
}: {
  fileName: string
  suffix?: string
  extension?: string
}): string {
  return `${fileName}${suffix ? `.${suffix}` : ''}${extension ? `.${extension}` : ''}`
}

/**
 * Strips comments from a given JSON content.
 *
 * @param content - The JSON content as a string.
 *
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
 *
 * @param filePath - The path to the JSON file.
 *
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

/**
 * Loads a JSON file and parses its content.
 *
 * @template T - The expected type of the parsed JSON content.
 *
 * @param configPath - The path to the JSON file.
 * @param useResolvedPath - Whether to use the resolved path or the original path.
 *
 * @returns The parsed JSON content, or null if the file does not exist or fails to parse.
 */
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
 *
 * @param params - The parameters
 * @param params.abiFilePath - The ABI file path
 * @param params.content - The content of the ABI file
 *
 * @returns The ABI items
 */
export async function transformJsonFragmentToAbiItems({
  abiFilePath,
  content,
}: {
  abiFilePath: string
  content: string
}): Promise<Rustify<AbiItem[], string>> {
  try {
    // Check if the file starts with "export default", indicating it's a JS/TS file
    if (!content.startsWith('export default')) {
      return {
        type: 'mute',
        error: `${abiFilePath} does not contain a valid JsonFragment array.`,
      }
    }

    // Clean up the "export default" part
    content = content.replace('export default ', '')

    // Remove trailing commas and format the content
    content = content.replace(/,(\s*[\]}])/g, '$1')

    // Replace single quotes with double quotes
    content = content.replace(/'/g, '"')

    // Fix unquoted keys
    content = content.replace(/(\w+):/g, '"$1":')

    // Remove comments from the file
    content = stripComments(content)

    let jsonFragments: JsonFragment[]

    try {
      jsonFragments = eval(content)
    } catch (error) {
      return {
        type: 'err',
        error: `${abiFilePath} failed to parse content for ABI file.`,
      }
    }

    if (!Array.isArray(jsonFragments)) {
      return {
        type: 'mute',
        error: `${abiFilePath} does not contain a valid JsonFragment array.`,
      }
    }

    // Convert JsonFragment[] to AbiItem[]
    const abiItems = convertJsonFragmentToAbiItems(jsonFragments)

    return {
      type: 'ok',
      value: abiItems,
    }
  } catch (error) {
    return {
      type: 'err',
      error: `${abiFilePath} is not a valid file or an error occurred: ${error}`,
    }
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
 * Gets the abi json
 */
export function convertAbiFileToAbiItems(file: string): AbiItem[] {
  try {
    const result = JSON.parse(file)

    if (result.abi) {
      return result.abi
    }

    return result as AbiItem[]
  } catch (error) {
    throw new Error(`Provided ABI content is not a valid JSON object.`)
  }
}

/**
 * Load and parse ABI content
 * @param abiFilePath The ABI file path
 * @returns The ABI content, or an empty string if the file is incompatible (e.g. not a JSON file or JsonFragment file)
 */
export async function loadAbiContent(abiFilePath: string): Promise<
  Rustify<
    | AbiItem[]
    | {
        contractName: string
        abiItems: AbiItem[]
      },
    string
  >
> {
  try {
    const content = fs.readFileSync(abiFilePath, 'utf8')

    if (abiFilePath.endsWith('.json')) {
      try {
        return {
          type: 'ok',
          value: JSON.parse(stripComments(content)),
        }
      } catch (error) {
        return {
          type: 'err',
          error: `${abiFilePath} invalid ABI JSON.`,
        }
      }
    } else if (abiFilePath.endsWith('.js') || abiFilePath.endsWith('.ts')) {
      const value = await transformJsonFragmentToAbiItems({
        abiFilePath,
        content,
      })

      return value
    }
  } catch (error) {
    return {
      type: 'err',
      error: `${abiFilePath} file not found.`,
    }
  }

  return {
    type: 'mute',
    error: `${abiFilePath} has incompatible extension.`,
  }
}

/**
 * Converts a JsonFragment file to an array of AbiItems
 * @param fragments The JsonFragment array
 * @returns The array of AbiItems
 */
export function convertJsonFragmentToAbiItems(
  fragments: JsonFragment[],
): AbiItem[] {
  try {
    return fragments
      .map((fragment) => {
        // `ABIItem` requires name and type, ignore fragment if they're not present
        if (!fragment.name || !fragment.type) {
          return undefined
        }

        const item: AbiItem = {
          name: fragment.name,
          type: fragment.type as AbiItemType,
          inputs: fragment.inputs as AbiInput[],
          outputs: fragment.outputs as AbiOutput[],
          stateMutability: fragment.stateMutability as StateMutabilityType,
          payable: fragment.payable,
          anonymous: fragment.anonymous,
        }

        return item
      })
      .filter(Boolean) as AbiItem[]
  } catch (error) {
    throw new Error(`Provided ABI content is not a valid JSON object.`)
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
 * Formats the abi name to camelCase
 * @param name The abi name
 */
export function formatAbiName(name: string): string {
  return name
    .split('-')
    .map((value) => capitalize(value))
    .join('')
    .split('.')
    .map((value) => (value === 'abi' ? '' : capitalize(value)))
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
 *
 * @param params The arguments
 * @param params.dirOrPath The directory or file path
 * @param params.framework The framework
 * @param params.fileList The file list, used for recursion
 */
export async function getAbiFiles({
  dirOrPath,
  framework = 'none',
  fileList = [],
}: {
  dirOrPath: string
  framework?: Framework
  fileList?: AbiFilePathContext[]
}): Promise<AbiFilePathContext[]> {
  const filePaths = isDirectory(dirOrPath)
    ? await fs.promises.readdir(dirOrPath)
    : [dirOrPath]

  await Promise.allSettled(
    filePaths.map(async (filePath) => {
      const itemPath = path.join(dirOrPath, filePath)

      if (isDirectory(itemPath)) {
        getAbiFiles({ framework, dirOrPath: itemPath, fileList })
        return
      }

      const result = await loadAbiContent(itemPath)

      if (result.type === 'ok') {
        if (result.value && Array.isArray(result.value)) {
          fileList.push({
            filePath: itemPath,
            frameworkContractName: undefined,
            abiItems: result.value,
          })
        } else if (result.value && 'contractName' in result.value) {
          fileList.push({
            filePath: itemPath,
            frameworkContractName: result.value.contractName,
            abiItems: result.value.abiItems,
          })
        } else {
          throw new Error(`Invalid ABI file`)
        }
      } else {
        throw new Error(`Error loading ABI file`)
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
