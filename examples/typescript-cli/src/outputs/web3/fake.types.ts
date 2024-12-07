import type {
  EventResponse,
  EventData,
  Web3ContractContext,
} from '@abi-toolkit/converter-typescript'

import type {
  MethodPayableReturnContext,
  MethodConstantReturnContext,
  MethodReturnContext,
} from './common.types'

export type ContractContext = Web3ContractContext<
  Contract,
  MethodNames,
  EventsContext,
  Events
>
export type Events = 'Event1' | 'Event2'
export interface EventsContext {
  Event1(
    parameters: {
      filter?: {
        token?: string | string[]
        exchange?: string | string[]
        _value?: string | string[]
      }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void,
  ): EventResponse
  Event2(
    parameters: {
      filter?: { _owner?: string | string[]; _spender?: string | string[] }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void,
  ): EventResponse
}
export type MethodNames =
  | 'tupleInputOnly'
  | 'tupleInputAndOutput'
  | 'tupleNoInputNames'
  | 'tupleWithParametersNames'
  | 'byteArrayInputExample'
  | 'int8ReturnExample'
  | 'int256ReturnExample'
  | 'easyExample'
  | 'new'
export type MethodNameMap = {
  [key in MethodNames]: string
}
export interface Event1EventEmittedResponse {
  token: string
  exchange: string
  user: string
  _value: string
}
export interface Event2EventEmittedResponse {
  _owner: string
  _spender: string
  _value: string
}
export interface TupleInputOnlyORequest {
  address: string
  timestamps: [string | number, string | number, string | number]
}
export interface TupleInputAndOutput {
  affiliate: string
  offerID: string
  creationTime: string
  timestamp: string
  timestamps: [string, string, string, string, string, string]
}
export interface TupleNoInputNames {
  affiliate: string
  offerID: string
  creationTime: string
  timestamp: string
  timestamps: [string, string, string, string, string, string]
}
export interface TupleWithParametersNames {
  affiliate: string
  offerID: string
  creationTime: string
  timestamp: string
  timestamps: [string, string, string, string, string, string]
}
export interface Contract {
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param o Type: tuple, Indexed: false
   */
  tupleInputOnly(o: TupleInputOnlyORequest): MethodPayableReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param exchangeAddress Type: address, Indexed: false
   * @param internalAddress Type: address, Indexed: false
   */
  tupleInputAndOutput(
    exchangeAddress: string,
    internalAddress: string,
  ): MethodConstantReturnContext<TupleInputAndOutput>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: address, Indexed: false
   */
  tupleNoInputNames(
    parameter0: string,
    parameter1: string,
  ): MethodConstantReturnContext<TupleNoInputNames>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param address1 Type: address, Indexed: false
   * @param address2 Type: address, Indexed: false
   */
  tupleWithParametersNames(
    address1: string,
    address2: string,
  ): MethodConstantReturnContext<TupleWithParametersNames>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param inputData Type: bytes32[2], Indexed: false
   */
  byteArrayInputExample(
    inputData: [string | number[], string | number[], string | number[]],
  ): MethodPayableReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  int8ReturnExample(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  int256ReturnExample(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   * @param valid Type: boolean, Indexed: false
   * @param exchangeAddress Type: address, Indexed: false
   * @param timestamp Type: uint8, Indexed: false
   */
  easyExample(
    valid: boolean,
    exchangeAddress: string,
    timestamp: string | number,
  ): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: constructor
   * @param _name Type: bytes32, Indexed: false
   * @param _symbol Type: bytes32, Indexed: false
   * @param _decimals Type: uint256, Indexed: false
   * @param _supply Type: uint256, Indexed: false
   */
  'new'(
    _name: string | number[],
    _symbol: string | number[],
    _decimals: string,
    _supply: string,
  ): MethodReturnContext
}
