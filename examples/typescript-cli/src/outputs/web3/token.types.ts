import type {
  EventResponse,
  EventData,
  Web3ContractContext,
} from '@ethereum-abi-types-generator/converter-typescript'

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
export type Events = 'Transfer' | 'Approval'
export interface EventsContext {
  Transfer(
    parameters: {
      filter?: { _from?: string | string[]; _to?: string | string[] }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void,
  ): EventResponse
  Approval(
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
  | 'new'
  | 'deposit'
  | 'withdraw'
  | 'totalSupply'
  | 'balanceOf'
  | 'transfer'
  | 'transferFrom'
  | 'approve'
  | 'allowance'
  | 'name'
  | 'symbol'
  | 'decimals'
export type MethodNameMap = {
  [key in MethodNames]: string
}
export interface TransferEventEmittedResponse {
  _from: string
  _to: string
  _value: string
}
export interface ApprovalEventEmittedResponse {
  _owner: string
  _spender: string
  _value: string
}
export interface Contract {
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
  /**
   * Payable: true
   * Constant: false
   * StateMutability: undefined
   * Type: function
   */
  deposit(): MethodPayableReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param _value Type: uint256, Indexed: false
   */
  withdraw(_value: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  totalSupply(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   * @param _owner Type: address, Indexed: false
   */
  balanceOf(_owner: string): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param _to Type: address, Indexed: false
   * @param _value Type: uint256, Indexed: false
   */
  transfer(_to: string, _value: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param _from Type: address, Indexed: false
   * @param _to Type: address, Indexed: false
   * @param _value Type: uint256, Indexed: false
   */
  transferFrom(_from: string, _to: string, _value: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param _spender Type: address, Indexed: false
   * @param _value Type: uint256, Indexed: false
   */
  approve(_spender: string, _value: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   * @param _owner Type: address, Indexed: false
   * @param _spender Type: address, Indexed: false
   */
  allowance(
    _owner: string,
    _spender: string,
  ): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  name(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  symbol(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  decimals(): MethodConstantReturnContext<string>
}
