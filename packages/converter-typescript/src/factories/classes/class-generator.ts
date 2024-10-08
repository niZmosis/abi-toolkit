import path from 'path'

import type {
  GenerateResponse,
  GeneratorContext,
  Rustify,
} from '@ethereum-abi-types-generator/types'
import {
  buildExecutingPath,
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
      this._context.outputDir ||
      path.dirname(this.getTypingsFileFullPathLocation())
    )
  }

  private buildOutputLocation(): string {
    const name =
      this._context.outputFileName ||
      getAbiFileLocationRawName(this._context.inputPath)

    const outputDir = this.getOutputPathDirectory()

    if (outputDir.substring(outputDir.length - 1) === '/') {
      return `${outputDir}${name}-factory.ts`
    }

    return buildExecutingPath(`${outputDir}/${name}-factory.ts`)
  }

  private getAbiName(): string {
    if (this._context.outputFileName) {
      return formatAbiName(this._context.outputFileName)
    }

    return formatAbiName(getAbiFileLocationRawName(this._context.inputPath))
  }

  private getTypingsFileFullPathLocation(): string {
    const name =
      this._context.outputFileName ||
      getAbiFileLocationRawName(this._context.inputPath)

    const outputDir = this._context.outputDir

    return buildExecutingPath(`${outputDir}/${name}.ts`)
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
