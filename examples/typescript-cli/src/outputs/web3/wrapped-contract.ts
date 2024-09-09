import type {
  EventResponse,
  EventData,
  Web3ContractContext,
} from '@ethereum-abi-types-generator/converter-typescript'

import type {
  MethodPayableReturnContext,
  MethodConstantReturnContext,
  MethodReturnContext,
} from './common-types'

export type ContractContext = Web3ContractContext<
  Contract,
  MethodNames,
  EventsContext,
  Events
>
export type Events = 'Approval' | 'Transfer' | 'Deposit' | 'Withdrawal'
export interface EventsContext {
  Approval(
    parameters: {
      filter?: { src?: string | string[]; guy?: string | string[] }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void,
  ): EventResponse
  Transfer(
    parameters: {
      filter?: { src?: string | string[]; dst?: string | string[] }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void,
  ): EventResponse
  Deposit(
    parameters: {
      filter?: { dst?: string | string[] }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void,
  ): EventResponse
  Withdrawal(
    parameters: {
      filter?: { src?: string | string[] }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void,
  ): EventResponse
}
export type MethodNames =
  | 'name'
  | 'approve'
  | 'totalSupply'
  | 'transferFrom'
  | 'withdraw'
  | 'decimals'
  | 'balanceOf'
  | 'symbol'
  | 'transfer'
  | 'deposit'
  | 'allowance'
export type MethodNameMap = {
  [key in MethodNames]: string
}
export interface ApprovalEventEmittedResponse {
  src: string
  guy: string
  wad: string
}
export interface TransferEventEmittedResponse {
  src: string
  dst: string
  wad: string
}
export interface DepositEventEmittedResponse {
  dst: string
  wad: string
}
export interface WithdrawalEventEmittedResponse {
  src: string
  wad: string
}
export interface Contract {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  name(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param guy Type: address, Indexed: false
   * @param wad Type: uint256, Indexed: false
   */
  approve(guy: string, wad: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  totalSupply(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param src Type: address, Indexed: false
   * @param dst Type: address, Indexed: false
   * @param wad Type: uint256, Indexed: false
   */
  transferFrom(src: string, dst: string, wad: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param wad Type: uint256, Indexed: false
   */
  withdraw(wad: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  decimals(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  balanceOf(parameter0: string): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  symbol(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param dst Type: address, Indexed: false
   * @param wad Type: uint256, Indexed: false
   */
  transfer(dst: string, wad: string): MethodReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   */
  deposit(): MethodPayableReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: address, Indexed: false
   */
  allowance(
    parameter0: string,
    parameter1: string,
  ): MethodConstantReturnContext<string>
}
