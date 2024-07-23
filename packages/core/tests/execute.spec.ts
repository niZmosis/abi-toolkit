import type { ProgramContext } from '@ethereum-abi-types-generator/types'
import {
  commandMap,
  getHelpMessageByCommandType,
  getProgramArguments,
  Logger,
} from '@ethereum-abi-types-generator/utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'

import { execute } from '../src/bin/execute'
import commands from '../src/commands'

describe('Generator CLI', () => {
  const version = '1.0.0'
  let actionSpy: ReturnType<any>

  beforeEach(() => {
    actionSpy = vi
      .spyOn(commands.generate, 'abiFile')
      .mockImplementation(vi.fn())
  })

  describe('execute', () => {
    it('should get the program args', async () => {
      const getProgramArgumentsSpy = vi
        .spyOn({ getProgramArguments }, 'getProgramArguments')
        .mockImplementation(vi.fn())

      await execute(version)

      expect(getProgramArgumentsSpy).toHaveBeenCalledTimes(1)
    })

    it('should log the version if --version is supplied', async () => {
      vi.spyOn({ getProgramArguments }, 'getProgramArguments').mockReturnValue({
        options: {
          version: true,
        },
      } as any)

      const logSpy = vi.spyOn(Logger, 'log')

      await execute(version)

      expect(logSpy).toHaveBeenCalledTimes(1)
      expect(logSpy).toHaveBeenCalledWith(version)
    })

    it('should log the version if -v is supplied', async () => {
      vi.spyOn({ getProgramArguments }, 'getProgramArguments').mockReturnValue({
        options: {
          v: true,
        },
      } as any)

      const logSpy = vi.spyOn(Logger, 'log')

      await execute(version)

      expect(logSpy).toHaveBeenCalledTimes(1)
      expect(logSpy).toHaveBeenCalledWith(version)
    })

    it('should log the help if --help is supplied', async () => {
      vi.spyOn({ getProgramArguments }, 'getProgramArguments').mockReturnValue({
        options: {
          help: true,
        },
      } as any)

      const getHelpMessageSpy = vi
        .spyOn({ getHelpMessageByCommandType }, 'getHelpMessageByCommandType')
        .mockImplementation(vi.fn())
      const logSpy = vi.spyOn(Logger, 'log')

      await execute(version)

      expect(logSpy).toHaveBeenCalledTimes(1)
      expect(getHelpMessageSpy).toHaveBeenCalledTimes(1)
      expect(getHelpMessageSpy).toHaveBeenCalledWith(commandMap.scripts)
    })

    it('should log the help if help is the command', async () => {
      vi.spyOn({ getProgramArguments }, 'getProgramArguments').mockReturnValue(
        Promise.resolve({
          command: 'help',
          subcommands: [],
          options: {},
        }) as unknown as Promise<ProgramContext>,
      )

      const getHelpMessageSpy = vi
        .spyOn({ getHelpMessageByCommandType }, 'getHelpMessageByCommandType')
        .mockImplementation(vi.fn())
      const logSpy = vi.spyOn(Logger, 'log')

      await execute(version)

      expect(logSpy).toHaveBeenCalledTimes(1)
      expect(getHelpMessageSpy).toHaveBeenCalledTimes(1)
      expect(getHelpMessageSpy).toHaveBeenCalledWith(commandMap.scripts)
    })

    it('should call `commands.generate.action`', async () => {
      const logSpy = vi.spyOn(Logger, 'log')

      vi.spyOn({ getProgramArguments }, 'getProgramArguments').mockReturnValue(
        Promise.resolve({
          command: 'location',
          subcommands: [],
          options: {},
        }) as unknown as Promise<ProgramContext>,
      )

      await execute(version)

      expect(actionSpy).toHaveBeenCalledTimes(1)
      expect(actionSpy).toHaveBeenCalledWith({
        command: 'location',
        subcommands: [],
        options: {},
      })
      expect(logSpy).toHaveBeenCalledTimes(0)
    })
  })
})
