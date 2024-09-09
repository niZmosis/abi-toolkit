import { AbiGenerator } from '@ethereum-abi-types-generator/converter-typescript'
import type {
  GenerateResponse,
  GeneratorContext,
  ProgramContext,
} from '@ethereum-abi-types-generator/types'
import { languageTypes, Logger } from '@ethereum-abi-types-generator/utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'

import generate from '../src/commands/generate'

const programOptions: ProgramContext<Partial<GeneratorContext>> = {
  command: '',
  subcommands: [],
  options: {},
}

class MockAbiGenerator extends AbiGenerator {
  constructor() {
    super(null as any)
  }

  override async generate(): Promise<GenerateResponse> {
    return {
      abiName: 'abiName',
      outputLocation: 'test-output-location',
      abiJsonFileLocation: programOptions.command,
    }
  }
}

describe('Generate', () => {
  const command = generate

  beforeEach(() => {
    vi.mock('../../converter-typescript/src/factories/abi-generator', () => ({
      default: MockAbiGenerator,
    }))
  })

  it('should have the abiFile object exported', () => {
    expect(command).toHaveProperty('abiFile')
  })

  it('should have the indexFile object exported', () => {
    expect(command).toHaveProperty('indexFile')
  })

  it('should call log an error if language is invalid', async () => {
    const logErrorSpy = vi.spyOn(Logger, 'error')

    const language = 'blah'

    await command.abiFile({
      command: 'abi/abi.json',
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
