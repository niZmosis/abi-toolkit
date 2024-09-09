import {
  getProgramArguments,
  Logger,
  getHelpMessageByCommandType,
  commandMap,
} from '@ethereum-abi-types-generator/utils'
import { describe, it, expect, vi } from 'vitest'

import { execute } from '../src/bin/execute'

vi.mock('@ethereum-abi-types-generator/utils', () => ({
  default: {
    getProgramArguments: vi.fn(),
    Logger: {
      log: vi.fn(),
      error: vi.fn(),
    },
    getHelpMessageByCommandType: vi.fn(),
  },
}))

describe('Generator CLI', () => {
  const version = '1.0.0'

  describe('execute', () => {
    it('should log the version if --version is supplied', async () => {
      ;(getProgramArguments as any).mockReturnValue({
        options: {
          version: true,
        },
      })

      const logSpy = vi.spyOn(Logger, 'log')

      await execute(version)

      expect(logSpy).toHaveBeenCalledTimes(1)
      expect(logSpy).toHaveBeenCalledWith(version)
    })

    it('should log the version if -v is supplied', async () => {
      ;(getProgramArguments as any).mockReturnValue({
        options: {
          v: true,
        },
      })

      const logSpy = vi.spyOn(Logger, 'log')

      await execute(version)

      expect(logSpy).toHaveBeenCalledTimes(1)
      expect(logSpy).toHaveBeenCalledWith(version)
    })

    it('should log the help if --help is supplied', async () => {
      ;(getProgramArguments as any).mockReturnValue({
        options: {
          help: true,
        },
      })

      const getHelpMessageSpy = vi.spyOn(
        { getHelpMessageByCommandType },
        'getHelpMessageByCommandType',
      )
      const logSpy = vi.spyOn(Logger, 'log')

      await execute(version)

      expect(logSpy).toHaveBeenCalledTimes(1)
      expect(getHelpMessageSpy).toHaveBeenCalledTimes(1)
      expect(getHelpMessageSpy).toHaveBeenCalledWith(commandMap.scripts)
    })

    it('should log the help if help is the command', async () => {
      ;(getProgramArguments as any).mockReturnValue(
        Promise.resolve({
          command: 'help',
          subcommands: [],
          options: {},
        }),
      )

      const getHelpMessageSpy = vi.spyOn(
        { getHelpMessageByCommandType },
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
