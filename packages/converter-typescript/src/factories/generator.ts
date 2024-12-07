import type { GeneratedResults, GeneratorContext } from '@abi-toolkit/types'

import { ClassGenerator } from './classes/class-generator'
import { TypingsGenerator } from './typings/typings-generator'

/**
 * Generator class for creating Ethereum ABI types and optional classes.
 */
export class Generator {
  /**
   * The typings generator instance.
   */
  private _typingsGenerator: TypingsGenerator

  /**
   * The optional class generator instance.
   */
  private _classGenerator?: ClassGenerator

  /**
   * Creates a new Generator instance.
   *
   * @param _context - The generator context containing configuration options.
   */
  constructor(private _context: GeneratorContext) {
    this._typingsGenerator = new TypingsGenerator(_context)

    if (this._context.generateClasses) {
      this._classGenerator = new ClassGenerator(_context)
    }
  }

  /**
   * Generates the Ethereum ABI types and optional classes.
   *
   * @returns A promise that resolves to the generated results, including typings and optional class results.
   */
  public async generate(): Promise<GeneratedResults> {
    const typingsResult = await this._typingsGenerator.generate()

    if (this._classGenerator) {
      const classResult = await this._classGenerator.generate()

      return {
        typingsResult,
        classResult,
      }
    }

    return {
      typingsResult,
    }
  }
}
