import { describe, it, expect } from 'vitest'

import { commandMap } from '../src/command.utils'
import {
  buildUpHelpMessage,
  generateHelpMessages,
  getHelpMessageByCommandType,
} from '../src/help.utils'
import { capitalize, removeAllWhiteSpace } from '../src/strings.utils'

describe('Helpers', () => {
  describe('capitalize', () => {
    it('should return null if null is sent to the value', () => {
      expect(capitalize(null as any)).toEqual(null)
    })

    it('should convert `hey` > `Hey`', () => {
      expect(capitalize('hey')).toEqual('Hey')
    })
  })

  describe('getHelpMessageByCommandType', () => {
    it('should throw a error if command is not a type', () => {
      expect(() => {
        getHelpMessageByCommandType('incorrect' as any)
      }).toThrow(Error)
    })

    it('should build a help message by calling `buildUpHelpMessage` returning a string', () => {
      const message = getHelpMessageByCommandType(commandMap.generate)

      expect(message.length).toBeGreaterThan(0)
    })
  })

  describe('buildUpHelpMessage', () => {
    it('should render the correct output message', () => {
      const helperMessageObject = structuredClone(generateHelpMessages)
      helperMessageObject.commands.push('test')
      const result = buildUpHelpMessage(helperMessageObject)

      expect(result.includes('Usage')).toEqual(true)
      expect(result.includes('Commands')).toEqual(true)
      expect(result.includes('Examples')).toEqual(true)
    })

    it('should render the correct output message with no commands', () => {
      const helperMessageObject = generateHelpMessages
      helperMessageObject.commands = []
      const result = buildUpHelpMessage(helperMessageObject)

      expect(result.includes('Usage')).toEqual(true)
      expect(result.includes('Commands')).toEqual(false)
      expect(result.includes('Examples')).toEqual(true)
    })
  })

  describe('removeAllWhiteSpace', () => {
    it('should remove all white spaces from the string', () => {
      expect(removeAllWhiteSpace('  test      test   me')).toEqual('testtestme')
    })
  })

  describe('structuredClone', () => {
    it('should deep clone a object', () => {
      const foo = { bar: true }
      const clone = structuredClone(foo)
      clone.bar = false
      expect(foo).not.toEqual(clone)
    })
  })
})
