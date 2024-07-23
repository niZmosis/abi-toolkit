import { AbiGenerator } from '@ethereum-abi-types-generator/converter-typescript'
import type {
  GenerateResponse,
  GeneratorContext,
  ProgramContext,
} from '@ethereum-abi-types-generator/types'
import {
  commandMap,
  getHelpMessageByCommandType,
  Logger,
} from '@ethereum-abi-types-generator/utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'

import generate from '../src/commands/generate'

const programOptions: ProgramContext<Partial<GeneratorContext>> = {
  command: 'abi/abi.json',
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

  it('should log a message if no command are passed in', async () => {
    const logSpy = vi.spyOn(Logger, 'log')

    await command.abiFile({ command: undefined } as any)

    expect(logSpy).toHaveBeenCalledTimes(1)
    expect(logSpy).toHaveBeenCalledWith(
      getHelpMessageByCommandType(commandMap.scripts),
    )
  })

  it('should log a message if command is an empty string', async () => {
    const logSpy = vi.spyOn(Logger, 'log')

    await command.abiFile({ command: '' } as any)

    expect(logSpy).toHaveBeenCalledTimes(1)
    expect(logSpy).toHaveBeenCalledWith(
      getHelpMessageByCommandType(commandMap.scripts),
    )
  })

  it('should call log an error if language is invalid', async () => {
    const logErrorSpy = vi.spyOn(Logger, 'error')

    await command.abiFile({
      command: 'abi/abi.json',
      subcommands: [],
      options: { language: 'blah' } as any,
    })

    expect(logErrorSpy).toHaveBeenCalledTimes(1)
    expect(logErrorSpy).toHaveBeenCalledWith(
      '"blah" is not supported. Support languages are - \'ts\'',
    )
  })

  it('should on success log success message and nothing else', async () => {
    const logErrorSpy = vi.spyOn(Logger, 'error')
    const logSpy = vi.spyOn(Logger, 'log')

    await command.abiFile(programOptions as ProgramContext<GeneratorContext>)

    expect(logErrorSpy).toHaveBeenCalledTimes(0)
    expect(logSpy).toHaveBeenCalledTimes(1)
    expect(logSpy).toHaveBeenCalledWith(
      'Successfully created typings for abi file abi/abi.json saved in test-output-location',
    )
  })
})
