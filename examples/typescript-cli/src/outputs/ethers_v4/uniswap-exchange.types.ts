import type { EthersContractContextV4 } from '@ethereum-abi-types-generator/converter-typescript'
import type { ContractTransaction } from 'ethersv4'
import type { BigNumber, BigNumberish } from 'ethersv4/utils'

import type {
  EventFilter,
  ContractTransactionOverrides,
  ContractCallOverrides,
} from './common.types'

export type ContractContext = EthersContractContextV4<
  Contract,
  EventsContext,
  Events
>
export type Events =
  | 'TokenPurchase'
  | 'EthPurchase'
  | 'AddLiquidity'
  | 'RemoveLiquidity'
  | 'Transfer'
  | 'Approval'
export interface EventsContext {
  TokenPurchase(
    buyer: string,
    eth_sold: BigNumberish,
    tokens_bought: BigNumberish,
  ): EventFilter
  EthPurchase(
    buyer: string,
    tokens_sold: BigNumberish,
    eth_bought: BigNumberish,
  ): EventFilter
  AddLiquidity(
    provider: string,
    eth_amount: BigNumberish,
    token_amount: BigNumberish,
  ): EventFilter
  RemoveLiquidity(
    provider: string,
    eth_amount: BigNumberish,
    token_amount: BigNumberish,
  ): EventFilter
  Transfer(_from: string, _to: string, _value: BigNumberish): EventFilter
  Approval(_owner: string, _spender: string, _value: BigNumberish): EventFilter
}
export type MethodNames =
  | 'setup'
  | 'addLiquidity'
  | 'removeLiquidity'
  | '__default__'
  | 'ethToTokenSwapInput'
  | 'ethToTokenTransferInput'
  | 'ethToTokenSwapOutput'
  | 'ethToTokenTransferOutput'
  | 'tokenToEthSwapInput'
  | 'tokenToEthTransferInput'
  | 'tokenToEthSwapOutput'
  | 'tokenToEthTransferOutput'
  | 'tokenToTokenSwapInput'
  | 'tokenToTokenTransferInput'
  | 'tokenToTokenSwapOutput'
  | 'tokenToTokenTransferOutput'
  | 'tokenToExchangeSwapInput'
  | 'tokenToExchangeTransferInput'
  | 'tokenToExchangeSwapOutput'
  | 'tokenToExchangeTransferOutput'
  | 'getEthToTokenInputPrice'
  | 'getEthToTokenOutputPrice'
  | 'getTokenToEthInputPrice'
  | 'getTokenToEthOutputPrice'
  | 'tokenAddress'
  | 'factoryAddress'
  | 'balanceOf'
  | 'transfer'
  | 'transferFrom'
  | 'approve'
  | 'allowance'
  | 'name'
  | 'symbol'
  | 'decimals'
  | 'totalSupply'
export type MethodNameMap = {
  [key in MethodNames]: string
}
export interface TokenPurchaseEventEmittedResponse {
  buyer: string
  eth_sold: BigNumberish
  tokens_bought: BigNumberish
}
export interface EthPurchaseEventEmittedResponse {
  buyer: string
  tokens_sold: BigNumberish
  eth_bought: BigNumberish
}
export interface AddLiquidityEventEmittedResponse {
  provider: string
  eth_amount: BigNumberish
  token_amount: BigNumberish
}
export interface RemoveLiquidityEventEmittedResponse {
  provider: string
  eth_amount: BigNumberish
  token_amount: BigNumberish
}
export interface TransferEventEmittedResponse {
  _from: string
  _to: string
  _value: BigNumberish
}
export interface ApprovalEventEmittedResponse {
  _owner: string
  _spender: string
  _value: BigNumberish
}
export interface Contract {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param token_addr Type: address, Indexed: false
   */
  setup(
    token_addr: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param min_liquidity Type: uint256, Indexed: false
   * @param max_tokens Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  addLiquidity(
    min_liquidity: BigNumberish,
    max_tokens: BigNumberish,
    deadline: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param amount Type: uint256, Indexed: false
   * @param min_eth Type: uint256, Indexed: false
   * @param min_tokens Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  removeLiquidity(
    amount: BigNumberish,
    min_eth: BigNumberish,
    min_tokens: BigNumberish,
    deadline: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: undefined
   * Type: function
   */
  __default__(
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param min_tokens Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  ethToTokenSwapInput(
    min_tokens: BigNumberish,
    deadline: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param min_tokens Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   */
  ethToTokenTransferInput(
    min_tokens: BigNumberish,
    deadline: BigNumberish,
    recipient: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param tokens_bought Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  ethToTokenSwapOutput(
    tokens_bought: BigNumberish,
    deadline: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param tokens_bought Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   */
  ethToTokenTransferOutput(
    tokens_bought: BigNumberish,
    deadline: BigNumberish,
    recipient: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param tokens_sold Type: uint256, Indexed: false
   * @param min_eth Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  tokenToEthSwapInput(
    tokens_sold: BigNumberish,
    min_eth: BigNumberish,
    deadline: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param tokens_sold Type: uint256, Indexed: false
   * @param min_eth Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   */
  tokenToEthTransferInput(
    tokens_sold: BigNumberish,
    min_eth: BigNumberish,
    deadline: BigNumberish,
    recipient: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param eth_bought Type: uint256, Indexed: false
   * @param max_tokens Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   */
  tokenToEthSwapOutput(
    eth_bought: BigNumberish,
    max_tokens: BigNumberish,
    deadline: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param eth_bought Type: uint256, Indexed: false
   * @param max_tokens Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   */
  tokenToEthTransferOutput(
    eth_bought: BigNumberish,
    max_tokens: BigNumberish,
    deadline: BigNumberish,
    recipient: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param tokens_sold Type: uint256, Indexed: false
   * @param min_tokens_bought Type: uint256, Indexed: false
   * @param min_eth_bought Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param token_addr Type: address, Indexed: false
   */
  tokenToTokenSwapInput(
    tokens_sold: BigNumberish,
    min_tokens_bought: BigNumberish,
    min_eth_bought: BigNumberish,
    deadline: BigNumberish,
    token_addr: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param tokens_sold Type: uint256, Indexed: false
   * @param min_tokens_bought Type: uint256, Indexed: false
   * @param min_eth_bought Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   * @param token_addr Type: address, Indexed: false
   */
  tokenToTokenTransferInput(
    tokens_sold: BigNumberish,
    min_tokens_bought: BigNumberish,
    min_eth_bought: BigNumberish,
    deadline: BigNumberish,
    recipient: string,
    token_addr: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param tokens_bought Type: uint256, Indexed: false
   * @param max_tokens_sold Type: uint256, Indexed: false
   * @param max_eth_sold Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param token_addr Type: address, Indexed: false
   */
  tokenToTokenSwapOutput(
    tokens_bought: BigNumberish,
    max_tokens_sold: BigNumberish,
    max_eth_sold: BigNumberish,
    deadline: BigNumberish,
    token_addr: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param tokens_bought Type: uint256, Indexed: false
   * @param max_tokens_sold Type: uint256, Indexed: false
   * @param max_eth_sold Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   * @param token_addr Type: address, Indexed: false
   */
  tokenToTokenTransferOutput(
    tokens_bought: BigNumberish,
    max_tokens_sold: BigNumberish,
    max_eth_sold: BigNumberish,
    deadline: BigNumberish,
    recipient: string,
    token_addr: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param tokens_sold Type: uint256, Indexed: false
   * @param min_tokens_bought Type: uint256, Indexed: false
   * @param min_eth_bought Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param exchange_addr Type: address, Indexed: false
   */
  tokenToExchangeSwapInput(
    tokens_sold: BigNumberish,
    min_tokens_bought: BigNumberish,
    min_eth_bought: BigNumberish,
    deadline: BigNumberish,
    exchange_addr: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param tokens_sold Type: uint256, Indexed: false
   * @param min_tokens_bought Type: uint256, Indexed: false
   * @param min_eth_bought Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   * @param exchange_addr Type: address, Indexed: false
   */
  tokenToExchangeTransferInput(
    tokens_sold: BigNumberish,
    min_tokens_bought: BigNumberish,
    min_eth_bought: BigNumberish,
    deadline: BigNumberish,
    recipient: string,
    exchange_addr: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param tokens_bought Type: uint256, Indexed: false
   * @param max_tokens_sold Type: uint256, Indexed: false
   * @param max_eth_sold Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param exchange_addr Type: address, Indexed: false
   */
  tokenToExchangeSwapOutput(
    tokens_bought: BigNumberish,
    max_tokens_sold: BigNumberish,
    max_eth_sold: BigNumberish,
    deadline: BigNumberish,
    exchange_addr: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param tokens_bought Type: uint256, Indexed: false
   * @param max_tokens_sold Type: uint256, Indexed: false
   * @param max_eth_sold Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   * @param exchange_addr Type: address, Indexed: false
   */
  tokenToExchangeTransferOutput(
    tokens_bought: BigNumberish,
    max_tokens_sold: BigNumberish,
    max_eth_sold: BigNumberish,
    deadline: BigNumberish,
    recipient: string,
    exchange_addr: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   * @param eth_sold Type: uint256, Indexed: false
   */
  getEthToTokenInputPrice(
    eth_sold: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   * @param tokens_bought Type: uint256, Indexed: false
   */
  getEthToTokenOutputPrice(
    tokens_bought: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   * @param tokens_sold Type: uint256, Indexed: false
   */
  getTokenToEthInputPrice(
    tokens_sold: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   * @param eth_bought Type: uint256, Indexed: false
   */
  getTokenToEthOutputPrice(
    eth_bought: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  tokenAddress(overrides?: ContractCallOverrides): Promise<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  factoryAddress(overrides?: ContractCallOverrides): Promise<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   * @param _owner Type: address, Indexed: false
   */
  balanceOf(
    _owner: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param _to Type: address, Indexed: false
   * @param _value Type: uint256, Indexed: false
   */
  transfer(
    _to: string,
    _value: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param _from Type: address, Indexed: false
   * @param _to Type: address, Indexed: false
   * @param _value Type: uint256, Indexed: false
   */
  transferFrom(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: undefined
   * Type: function
   * @param _spender Type: address, Indexed: false
   * @param _value Type: uint256, Indexed: false
   */
  approve(
    _spender: string,
    _value: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
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
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  name(overrides?: ContractCallOverrides): Promise<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  symbol(overrides?: ContractCallOverrides): Promise<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  decimals(overrides?: ContractCallOverrides): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  totalSupply(overrides?: ContractCallOverrides): Promise<BigNumber>
}
