import { TypingsGenerator } from '@ethereum-abi-types-generator/converter-typescript'
import type {
  GenerateResponse,
  GeneratorContext,
  ProgramContext,
  Rustify,
} from '@ethereum-abi-types-generator/types'
import { languageTypes, Logger } from '@ethereum-abi-types-generator/utils'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

import generate from '../src/commands/generate'

const programOptions: ProgramContext<Partial<GeneratorContext>> = {
  command: '',
  subcommands: [],
  options: {},
}

class MockTypingsGenerator extends TypingsGenerator {
  constructor() {
    super(null as any)
  }

  override async generate(): Promise<Rustify<GenerateResponse, string>> {
    return {
      type: 'ok',
      value: {
        abiName: 'abiName',
        outputLocation: 'test-output-location',
        abiFileLocation: programOptions.command,
        content: '',
      },
    }
  }
}

describe('Generate', () => {
  const command = generate

  beforeEach(() => {
    vi.mock('../../converter-typescript/src/factories/abi-generator', () => ({
      default: MockTypingsGenerator,
    }))
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should have the abiFile object exported', () => {
    expect(command).toHaveProperty('abiFiles')
  })

  it('should have the indexFile object exported', () => {
    expect(command).toHaveProperty('indexFiles')
  })

  it('should call log an error if language is invalid', async () => {
    const logErrorSpy = vi.spyOn(Logger, 'error').mockImplementation(() => {})

    const language = 'blah'

    await command.abiFiles({
      command: '',
      subcommands: [],
      options: {
        language,
      } as any,
    })

    expect(logErrorSpy).toHaveBeenCalledTimes(1)
    expect(logErrorSpy).toHaveBeenCalledWith(
      `"${language}" is not supported. Supported languages are - ${languageTypes.join(', ')}`,
    )
  })
})
