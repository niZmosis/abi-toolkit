import {
  getProgramArguments,
  Logger,
  commandMap,
} from '@ethereum-abi-types-generator/utils'
import * as utilsModule from '@ethereum-abi-types-generator/utils'
import { describe, it, expect, vi, type Mock } from 'vitest'

import { execute } from '../src/bin/execute'

vi.mock('@ethereum-abi-types-generator/utils', async () => {
  const actual = await vi.importActual<
    typeof import('@ethereum-abi-types-generator/utils')
  >('@ethereum-abi-types-generator/utils')
  return {
    ...actual,
    getProgramArguments: vi.fn(),
    Logger: {
      log: vi.fn(),
      error: vi.fn(),
      info: vi.fn(),
      warning: vi.fn(),
    },
  }
})

describe('Generator CLI', () => {
  const version = '1.0.0'

  describe('execute', () => {
    it('should log the scripts if --scripts is supplied', async () => {
      ;(getProgramArguments as Mock).mockResolvedValue({
        command: 'scripts',
      })

      const getHelpMessageSpy = vi.spyOn(
        utilsModule,
        'getHelpMessageByCommandType',
      )
      const logSpy = vi.spyOn(Logger, 'log')

      await execute(version)

      expect(logSpy).toHaveBeenCalledTimes(1)
      expect(getHelpMessageSpy).toHaveBeenCalledTimes(1)
      expect(getHelpMessageSpy).toHaveBeenCalledWith(commandMap.scripts)
    })

    it('should log the scripts if -s is supplied', async () => {
      ;(getProgramArguments as Mock).mockResolvedValue({
        command: 's',
      })

      const getHelpMessageSpy = vi.spyOn(
        utilsModule,
        'getHelpMessageByCommandType',
      )
      const logSpy = vi.spyOn(Logger, 'log')

      await execute(version)

      expect(logSpy).toHaveBeenCalledTimes(1)
      expect(getHelpMessageSpy).toHaveBeenCalledTimes(1)
      expect(getHelpMessageSpy).toHaveBeenCalledWith(commandMap.scripts)
    })
  })
})
