import type { EthersContractContextV5 } from '@ethereum-abi-types-generator/converter-typescript'
import type {
  ContractTransaction,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethersv5'

import type {
  EventFilter,
  ContractTransactionOverrides,
  ContractCallOverrides,
} from './common.types'

export type ContractContext = EthersContractContextV5<
  Contract,
  MethodNames,
  EventsContext,
  Events
>
export type Events = 'Event1' | 'Event2'
export interface EventsContext {
  Event1(
    token: string,
    exchange: string,
    user: string,
    _value: BigNumberish,
  ): EventFilter
  Event2(_owner: string, _spender: string, _value: BigNumberish): EventFilter
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
  _value: BigNumberish
}
export interface Event2EventEmittedResponse {
  _owner: string
  _spender: string
  _value: BigNumberish
}
export interface TupleInputOnlyORequest {
  address: string
  timestamps: [BigNumberish, BigNumberish, BigNumberish]
}
export interface TupleInputAndOutput {
  affiliate: string
  0: string
  offerID: string
  1: string
  creationTime: BigNumber
  2: BigNumber
  timestamp: number
  3: number
  timestamps: [number, number, number, number, number, number]
  4: [number, number, number, number, number, number]
  length: 5
}
export interface TupleNoInputNames {
  affiliate: string
  0: string
  offerID: string
  1: string
  creationTime: BigNumber
  2: BigNumber
  timestamp: number
  3: number
  timestamps: [number, number, number, number, number, number]
  4: [number, number, number, number, number, number]
  length: 5
}
export interface TupleWithParametersNames {
  affiliate: string
  0: string
  offerID: string
  1: string
  creationTime: BigNumber
  2: BigNumber
  timestamp: number
  3: number
  timestamps: [number, number, number, number, number, number]
  4: [number, number, number, number, number, number]
  length: 5
}
export interface Contract {
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param o Type: tuple, Indexed: false
   */
  tupleInputOnly(
    o: TupleInputOnlyORequest,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
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
    overrides?: ContractCallOverrides,
  ): Promise<TupleInputAndOutput>
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
    overrides?: ContractCallOverrides,
  ): Promise<TupleNoInputNames>
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
    overrides?: ContractCallOverrides,
  ): Promise<TupleWithParametersNames>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param inputData Type: bytes32[2], Indexed: false
   */
  byteArrayInputExample(
    inputData: [Arrayish, Arrayish, Arrayish],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  int8ReturnExample(overrides?: ContractCallOverrides): Promise<number>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: undefined
   * Type: function
   */
  int256ReturnExample(overrides?: ContractCallOverrides): Promise<BigNumber>
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
    timestamp: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
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
    _name: Arrayish,
    _symbol: Arrayish,
    _decimals: BigNumberish,
    _supply: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
}
