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
  | 'WPLS'
  | 'addLiquidity'
  | 'addLiquidityETH'
  | 'factory'
  | 'getAmountIn'
  | 'getAmountOut'
  | 'getAmountsIn'
  | 'getAmountsOut'
  | 'quote'
  | 'removeLiquidity'
  | 'removeLiquidityETH'
  | 'removeLiquidityETHSupportingFeeOnTransferTokens'
  | 'removeLiquidityETHWithPermit'
  | 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens'
  | 'removeLiquidityWithPermit'
  | 'swapETHForExactTokens'
  | 'swapExactETHForTokens'
  | 'swapExactETHForTokensSupportingFeeOnTransferTokens'
  | 'swapExactTokensForETH'
  | 'swapExactTokensForETHSupportingFeeOnTransferTokens'
  | 'swapExactTokensForTokens'
  | 'swapExactTokensForTokensSupportingFeeOnTransferTokens'
  | 'swapTokensForExactETH'
  | 'swapTokensForExactTokens'
export type MethodNameMap = {
  [key in MethodNames]: string
}
export interface Contract {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  WPLS(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param tokenA Type: address, Indexed: false
   * @param tokenB Type: address, Indexed: false
   * @param amountADesired Type: uint256, Indexed: false
   * @param amountBDesired Type: uint256, Indexed: false
   * @param amountAMin Type: uint256, Indexed: false
   * @param amountBMin Type: uint256, Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  addLiquidity(
    tokenA: string,
    tokenB: string,
    amountADesired: string,
    amountBDesired: string,
    amountAMin: string,
    amountBMin: string,
    to: string,
    deadline: string,
  ): MethodReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param amountTokenDesired Type: uint256, Indexed: false
   * @param amountTokenMin Type: uint256, Indexed: false
   * @param amountETHMin Type: uint256, Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  addLiquidityETH(
    token: string,
    amountTokenDesired: string,
    amountTokenMin: string,
    amountETHMin: string,
    to: string,
    deadline: string,
  ): MethodPayableReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  factory(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: pure
   * Type: function
   * @param amountOut Type: uint256, Indexed: false
   * @param reserveIn Type: uint256, Indexed: false
   * @param reserveOut Type: uint256, Indexed: false
   */
  getAmountIn(
    amountOut: string,
    reserveIn: string,
    reserveOut: string,
  ): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: pure
   * Type: function
   * @param amountIn Type: uint256, Indexed: false
   * @param reserveIn Type: uint256, Indexed: false
   * @param reserveOut Type: uint256, Indexed: false
   */
  getAmountOut(
    amountIn: string,
    reserveIn: string,
    reserveOut: string,
  ): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param amountOut Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   */
  getAmountsIn(
    amountOut: string,
    path: string[],
  ): MethodConstantReturnContext<string[]>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param amountIn Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   */
  getAmountsOut(
    amountIn: string,
    path: string[],
  ): MethodConstantReturnContext<string[]>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: pure
   * Type: function
   * @param amountA Type: uint256, Indexed: false
   * @param reserveA Type: uint256, Indexed: false
   * @param reserveB Type: uint256, Indexed: false
   */
  quote(
    amountA: string,
    reserveA: string,
    reserveB: string,
  ): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param tokenA Type: address, Indexed: false
   * @param tokenB Type: address, Indexed: false
   * @param liquidity Type: uint256, Indexed: false
   * @param amountAMin Type: uint256, Indexed: false
   * @param amountBMin Type: uint256, Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  removeLiquidity(
    tokenA: string,
    tokenB: string,
    liquidity: string,
    amountAMin: string,
    amountBMin: string,
    to: string,
    deadline: string,
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param liquidity Type: uint256, Indexed: false
   * @param amountTokenMin Type: uint256, Indexed: false
   * @param amountETHMin Type: uint256, Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  removeLiquidityETH(
    token: string,
    liquidity: string,
    amountTokenMin: string,
    amountETHMin: string,
    to: string,
    deadline: string,
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param liquidity Type: uint256, Indexed: false
   * @param amountTokenMin Type: uint256, Indexed: false
   * @param amountETHMin Type: uint256, Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  removeLiquidityETHSupportingFeeOnTransferTokens(
    token: string,
    liquidity: string,
    amountTokenMin: string,
    amountETHMin: string,
    to: string,
    deadline: string,
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param liquidity Type: uint256, Indexed: false
   * @param amountTokenMin Type: uint256, Indexed: false
   * @param amountETHMin Type: uint256, Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param approveMax Type: bool, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  removeLiquidityETHWithPermit(
    token: string,
    liquidity: string,
    amountTokenMin: string,
    amountETHMin: string,
    to: string,
    deadline: string,
    approveMax: boolean,
    v: string | number,
    r: string | number[],
    s: string | number[],
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param liquidity Type: uint256, Indexed: false
   * @param amountTokenMin Type: uint256, Indexed: false
   * @param amountETHMin Type: uint256, Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param approveMax Type: bool, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
    token: string,
    liquidity: string,
    amountTokenMin: string,
    amountETHMin: string,
    to: string,
    deadline: string,
    approveMax: boolean,
    v: string | number,
    r: string | number[],
    s: string | number[],
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param tokenA Type: address, Indexed: false
   * @param tokenB Type: address, Indexed: false
   * @param liquidity Type: uint256, Indexed: false
   * @param amountAMin Type: uint256, Indexed: false
   * @param amountBMin Type: uint256, Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param approveMax Type: bool, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  removeLiquidityWithPermit(
    tokenA: string,
    tokenB: string,
    liquidity: string,
    amountAMin: string,
    amountBMin: string,
    to: string,
    deadline: string,
    approveMax: boolean,
    v: string | number,
    r: string | number[],
    s: string | number[],
  ): MethodReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param amountOut Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  swapETHForExactTokens(
    amountOut: string,
    path: string[],
    to: string,
    deadline: string,
  ): MethodPayableReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param amountOutMin Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  swapExactETHForTokens(
    amountOutMin: string,
    path: string[],
    to: string,
    deadline: string,
  ): MethodPayableReturnContext
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param amountOutMin Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  swapExactETHForTokensSupportingFeeOnTransferTokens(
    amountOutMin: string,
    path: string[],
    to: string,
    deadline: string,
  ): MethodPayableReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param amountIn Type: uint256, Indexed: false
   * @param amountOutMin Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  swapExactTokensForETH(
    amountIn: string,
    amountOutMin: string,
    path: string[],
    to: string,
    deadline: string,
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param amountIn Type: uint256, Indexed: false
   * @param amountOutMin Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  swapExactTokensForETHSupportingFeeOnTransferTokens(
    amountIn: string,
    amountOutMin: string,
    path: string[],
    to: string,
    deadline: string,
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param amountIn Type: uint256, Indexed: false
   * @param amountOutMin Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  swapExactTokensForTokens(
    amountIn: string,
    amountOutMin: string,
    path: string[],
    to: string,
    deadline: string,
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param amountIn Type: uint256, Indexed: false
   * @param amountOutMin Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  swapExactTokensForTokensSupportingFeeOnTransferTokens(
    amountIn: string,
    amountOutMin: string,
    path: string[],
    to: string,
    deadline: string,
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param amountOut Type: uint256, Indexed: false
   * @param amountInMax Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  swapTokensForExactETH(
    amountOut: string,
    amountInMax: string,
    path: string[],
    to: string,
    deadline: string,
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param amountOut Type: uint256, Indexed: false
   * @param amountInMax Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   * @param to Type: address, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  swapTokensForExactTokens(
    amountOut: string,
    amountInMax: string,
    path: string[],
    to: string,
    deadline: string,
  ): MethodReturnContext
}
