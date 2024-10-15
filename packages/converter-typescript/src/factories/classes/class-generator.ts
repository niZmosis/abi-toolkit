import path from 'path'

import type {
  GenerateResponse,
  GeneratorContext,
  Rustify,
} from '@ethereum-abi-types-generator/types'
import {
  buildExecutingPath,
  buildFileName,
  formatAbiName,
  getAbiFileLocationRawName,
  isDirectory,
} from '@ethereum-abi-types-generator/utils'
import fs from 'fs-extra'

import { EthersClassFactory } from './ethers-class.factory'
import { Web3ClassFactory } from './web3-class.factory'

export class ClassGenerator {
  private _ethersClassFactory = new EthersClassFactory()
  private _web3ClassFactory = new Web3ClassFactory()

  constructor(private _context: GeneratorContext) {}

  public async generate(): Promise<Rustify<GenerateResponse, string>> {
    // this.clearAllQuotesFromContextInfo()

    if (!isDirectory(this.getOutputPathDirectory())) {
      if (this._context.makeOutputDir) {
        fs.ensureDirSync(this.getOutputPathDirectory())
      } else {
        throw new Error(`Output path must be a directory`)
      }
    }

    const outputLocation = this.buildOutputLocation()

    if (this._context.preventOverwrite && fs.existsSync(outputLocation)) {
      return {
        type: 'mute',
        error: `File ${outputLocation} already exists and preventOverwrite is true. Skipping file generation.`,
      }
    }

    const classContent = this.buildClassContent()

    fs.writeFileSync(outputLocation, classContent, {
      mode: 0o755,
    })

    return {
      type: 'ok',
      value: {
        abiName: this.getAbiName(),
        outputLocation,
        abiFileLocation: this.getAbiFileFullPathLocation(),
        content: classContent,
      },
    }
  }

  /**
   * Get the abi file full path location with executing path
   */
  private getAbiFileFullPathLocation(): string {
    return buildExecutingPath(this._context.inputPath)
  }

  private getOutputPathDirectory(): string {
    return (
      this._context.classOutputDir ||
      this._context.typingsOutputDir ||
      path.dirname(this.getTypingsFileFullPathLocation())
    )
  }

  private buildOutputLocation(): string {
    const name =
      this._context.typingsOutputFileName ||
      getAbiFileLocationRawName(this._context.inputPath)

    const typingsOutputDir = this.getOutputPathDirectory()

    if (typingsOutputDir.substring(typingsOutputDir.length - 1) === '/') {
      return `${typingsOutputDir}${buildFileName({ fileName: name, suffix: this._context.classOutputFileSuffix, extension: 'ts' })}`
    }

    return buildExecutingPath(
      `${typingsOutputDir}/${buildFileName({ fileName: name, suffix: this._context.classOutputFileSuffix, extension: 'ts' })}`,
    )
  }

  private getAbiName(): string {
    if (this._context.typingsOutputFileName) {
      return formatAbiName(this._context.typingsOutputFileName)
    }

    return formatAbiName(getAbiFileLocationRawName(this._context.inputPath))
  }

  private getTypingsFileFullPathLocation(): string {
    const name =
      this._context.typingsOutputFileName ||
      getAbiFileLocationRawName(this._context.inputPath)

    const typingsOutputDir = this._context.typingsOutputDir

    return buildExecutingPath(`${typingsOutputDir}/${name}.ts`)
  }

  private buildClassContent(): string {
    switch (this._context.library) {
      case 'ethers_v4':
      case 'ethers_v5':
      case 'ethers_v6':
        return this._ethersClassFactory.buildClass({
          abiName: this.getAbiName(),
          context: this._context,
        })
      case 'web3':
        return this._web3ClassFactory.buildClass({
          abiName: this.getAbiName(),
          context: this._context,
        })
      default:
        throw new Error(
          `${this._context.library} is not a supported library for class generation`,
        )
    }
  }
}
