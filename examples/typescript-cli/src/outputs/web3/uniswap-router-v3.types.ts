import type { Web3ContractContext } from '@ethereum-abi-types-generator/converter-typescript'

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
export type Events = undefined
export interface EventsContext {}
export type MethodNames =
  | 'WETH9'
  | 'exactInput'
  | 'exactInputSingle'
  | 'exactOutput'
  | 'exactOutputSingle'
  | 'factory'
  | 'multicall'
  | 'refundETH'
  | 'selfPermit'
  | 'selfPermitAllowed'
  | 'selfPermitAllowedIfNecessary'
  | 'selfPermitIfNecessary'
  | 'sweepToken'
  | 'sweepTokenWithFee'
  | 'uniswapV3SwapCallback'
  | 'unwrapWETH9'
  | 'unwrapWETH9WithFee'
export type MethodNameMap = {
  [key in MethodNames]: string
}
export interface ExactInputParamsRequest {
  path: string | number[]
  recipient: string
  deadline: string
  amountIn: string
  amountOutMinimum: string
}
export interface ExactInputSingleParamsRequest {
  tokenIn: string
  tokenOut: string
  fee: string | number
  recipient: string
  deadline: string
  amountIn: string
  amountOutMinimum: string
  sqrtPriceLimitX96: string
}
export interface ExactOutputParamsRequest {
  path: string | number[]
  recipient: string
  deadline: string
  amountOut: string
  amountInMaximum: string
}
export interface ExactOutputSingleParamsRequest {
  tokenIn: string
  tokenOut: string
  fee: string | number
  recipient: string
  deadline: string
  amountOut: string
  amountInMaximum: string
  sqrtPriceLimitX96: string
}
export interface Contract {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  WETH9(): MethodConstantReturnContext<string>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param params Type: tuple, Indexed: false
   */
  exactInput(params: ExactInputParamsRequest): MethodPayableReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param params Type: tuple, Indexed: false
   */
  exactInputSingle(
    params: ExactInputSingleParamsRequest,
  ): MethodPayableReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param params Type: tuple, Indexed: false
   */
  exactOutput(params: ExactOutputParamsRequest): MethodPayableReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param params Type: tuple, Indexed: false
   */
  exactOutputSingle(
    params: ExactOutputSingleParamsRequest,
  ): MethodPayableReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  factory(): MethodConstantReturnContext<string>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param data Type: bytes[], Indexed: false
   */
  multicall(data: string | number[][]): MethodPayableReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   */
  refundETH(): MethodPayableReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  selfPermit(
    token: string,
    value: string,
    deadline: string,
    v: string | number,
    r: string | number[],
    s: string | number[],
  ): MethodPayableReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param nonce Type: uint256, Indexed: false
   * @param expiry Type: uint256, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  selfPermitAllowed(
    token: string,
    nonce: string,
    expiry: string,
    v: string | number,
    r: string | number[],
    s: string | number[],
  ): MethodPayableReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param nonce Type: uint256, Indexed: false
   * @param expiry Type: uint256, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  selfPermitAllowedIfNecessary(
    token: string,
    nonce: string,
    expiry: string,
    v: string | number,
    r: string | number[],
    s: string | number[],
  ): MethodPayableReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  selfPermitIfNecessary(
    token: string,
    value: string,
    deadline: string,
    v: string | number,
    r: string | number[],
    s: string | number[],
  ): MethodPayableReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param amountMinimum Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   */
  sweepToken(
    token: string,
    amountMinimum: string,
    recipient: string,
  ): MethodPayableReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param amountMinimum Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   * @param feeBips Type: uint256, Indexed: false
   * @param feeRecipient Type: address, Indexed: false
   */
  sweepTokenWithFee(
    token: string,
    amountMinimum: string,
    recipient: string,
    feeBips: string,
    feeRecipient: string,
  ): MethodPayableReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param amount0Delta Type: int256, Indexed: false
   * @param amount1Delta Type: int256, Indexed: false
   * @param _data Type: bytes, Indexed: false
   */
  uniswapV3SwapCallback(
    amount0Delta: string,
    amount1Delta: string,
    _data: string | number[],
  ): MethodReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param amountMinimum Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   */
  unwrapWETH9(
    amountMinimum: string,
    recipient: string,
  ): MethodPayableReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param amountMinimum Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   * @param feeBips Type: uint256, Indexed: false
   * @param feeRecipient Type: address, Indexed: false
   */
  unwrapWETH9WithFee(
    amountMinimum: string,
    recipient: string,
    feeBips: string,
    feeRecipient: string,
  ): MethodPayableReturnContext
}
