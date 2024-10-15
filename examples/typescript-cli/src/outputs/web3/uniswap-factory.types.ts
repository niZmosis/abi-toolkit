import type {
  EventResponse,
  EventData,
  Web3ContractContext,
} from '@ethereum-abi-types-generator/converter-typescript'

import type {
  MethodConstantReturnContext,
  MethodReturnContext,
} from './common.types'

export type ContractContext = Web3ContractContext<
  Contract,
  MethodNames,
  EventsContext,
  Events
>
export type Events = 'NewExchange'
export interface EventsContext {
  NewExchange(
    parameters: {
      filter?: { token?: string | string[]; exchange?: string | string[] }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void,
  ): EventResponse
}
export type MethodNames =
  | 'initializeFactory'
  | 'createExchange'
  | 'getExchange'
  | 'getToken'
  | 'getTokenWithId'
  | 'exchangeTemplate'
  | 'tokenCount'
export type MethodNameMap = {
  [key in MethodNames]: string
}
export interface NewExchangeEventEmittedResponse {
  token: string
  exchange: string
}
export interface Contract {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param template Type: address, Indexed: false
   */
  initializeFactory(template: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param token Type: address, Indexed: false
   */
  createExchange(token: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   * @param token Type: address, Indexed: false
   */
  getExchange(token: string): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   * @param exchange Type: address, Indexed: false
   */
  getToken(exchange: string): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   * @param token_id Type: uint256, Indexed: false
   */
  getTokenWithId(token_id: string): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  exchangeTemplate(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  tokenCount(): MethodConstantReturnContext<string>
}
