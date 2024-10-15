import type { EthersContractContextV5 } from '@ethereum-abi-types-generator/converter-typescript'
import type {
  ContractTransaction,
  BytesLike as Arrayish,
  BigNumberish,
} from 'ethersv5'

import type {
  ContractTransactionOverrides,
  ContractCallOverrides,
} from './common.types'

export type ContractContext = EthersContractContextV5<
  Contract,
  MethodNames,
  EventsContext,
  Events
>
export type Events = undefined
export interface EventsContext {}
export type MethodNames =
  | 'WETH9'
  | 'factory'
  | 'quoteExactInput'
  | 'quoteExactInputSingle'
  | 'quoteExactOutput'
  | 'quoteExactOutputSingle'
  | 'uniswapV3SwapCallback'
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
  WETH9(overrides?: ContractCallOverrides): Promise<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  factory(overrides?: ContractCallOverrides): Promise<string>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param path Type: bytes, Indexed: false
   * @param amountIn Type: uint256, Indexed: false
   */
  quoteExactInput(
    path: Arrayish,
    amountIn: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param tokenIn Type: address, Indexed: false
   * @param tokenOut Type: address, Indexed: false
   * @param fee Type: uint24, Indexed: false
   * @param amountIn Type: uint256, Indexed: false
   * @param sqrtPriceLimitX96 Type: uint160, Indexed: false
   */
  quoteExactInputSingle(
    tokenIn: string,
    tokenOut: string,
    fee: BigNumberish,
    amountIn: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param path Type: bytes, Indexed: false
   * @param amountOut Type: uint256, Indexed: false
   */
  quoteExactOutput(
    path: Arrayish,
    amountOut: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param tokenIn Type: address, Indexed: false
   * @param tokenOut Type: address, Indexed: false
   * @param fee Type: uint24, Indexed: false
   * @param amountOut Type: uint256, Indexed: false
   * @param sqrtPriceLimitX96 Type: uint160, Indexed: false
   */
  quoteExactOutputSingle(
    tokenIn: string,
    tokenOut: string,
    fee: BigNumberish,
    amountOut: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param amount0Delta Type: int256, Indexed: false
   * @param amount1Delta Type: int256, Indexed: false
   * @param path Type: bytes, Indexed: false
   */
  uniswapV3SwapCallback(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    path: Arrayish,
    overrides?: ContractCallOverrides,
  ): Promise<void>
}
