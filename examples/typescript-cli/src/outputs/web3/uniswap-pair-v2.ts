import type {
  EventResponse,
  EventData,
  Web3ContractContext,
} from '@ethereum-abi-types-generator/converter-typescript'

import type {
  MethodConstantReturnContext,
  MethodReturnContext,
} from './common-types'

export type ContractContext = Web3ContractContext<
  Contract,
  MethodNames,
  EventsContext,
  Events
>
export type Events = 'PairCreated'
export interface EventsContext {
  PairCreated(
    parameters: {
      filter?: { token0?: string | string[]; token1?: string | string[] }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void,
  ): EventResponse
}
export type MethodNames =
  | 'new'
  | 'allPairs'
  | 'allPairsLength'
  | 'createPair'
  | 'feeTo'
  | 'feeToSetter'
  | 'getPair'
  | 'setFeeTo'
  | 'setFeeToSetter'
export type MethodNameMap = {
  [key in MethodNames]: string
}
export interface PairCreatedEventEmittedResponse {
  token0: string
  token1: string
  pair: string
  param3: string
}
export interface Contract {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param _feeToSetter Type: address, Indexed: false
   */
  'new'(_feeToSetter: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  allPairs(parameter0: string): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  allPairsLength(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param tokenA Type: address, Indexed: false
   * @param tokenB Type: address, Indexed: false
   */
  createPair(tokenA: string, tokenB: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  feeTo(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  feeToSetter(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: address, Indexed: false
   */
  getPair(
    parameter0: string,
    parameter1: string,
  ): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _feeTo Type: address, Indexed: false
   */
  setFeeTo(_feeTo: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _feeToSetter Type: address, Indexed: false
   */
  setFeeToSetter(_feeToSetter: string): MethodReturnContext
}
