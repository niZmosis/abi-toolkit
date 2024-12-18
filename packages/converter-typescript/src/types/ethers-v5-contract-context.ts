import type {
  TransactionRequest,
  TransactionResponse,
  BlockTag,
  Listener,
  Provider,
} from '@ethersproject/providers'
import type { BigNumber, BigNumberish, EventFilter, Signer } from 'ethersv5'
import type {
  AbiCoder,
  BytesLike,
  EventFragment,
  Fragment,
  FunctionFragment,
  Interface,
  LogDescription,
  ParamType,
  Result,
  TransactionDescription,
} from 'ethersv5/lib/utils'

/**
 * Represents the context of an Ethers v5 contract with methods, method names, events context, and event types.
 * @template TMethods The contract methods
 * @template TMethodNames The names of the contract methods
 * @template TEventsContext The context for contract events
 * @template TEventType The type of contract events
 */
export type EthersContractContextV5<
  TMethods,
  TMethodNames,
  TEventsContext,
  TEventType,
> = EthersContractV5<TMethods, TMethodNames, TEventsContext, TEventType> &
  TMethods

/**
 * Represents a contract function that returns a promise.
 * @template T The type of the promise result
 */
export type ContractFunctionV5<T = any> = (...args: any[]) => Promise<T>

/**
 * Represents the internal interface of an Ethers v5 contract.
 * @template TMethodNames The names of the contract methods
 */
export declare class InternalInterfaceV5<TMethodNames> {
  readonly fragments: Fragment[]
  readonly errors: {
    [name: string]: any
  }
  readonly events: {
    [name: string]: EventFragment
  }
  readonly functions: {
    [name: string]: FunctionFragment
  }
  readonly structs: {
    [name: string]: any
  }
  readonly deploy: any
  format(format?: string): string | string[]
  static getAbiCoder(): AbiCoder
  static getAddress(address: string): string
  static getSighash(functionFragment: FunctionFragment): string
  static getEventTopic(eventFragment: EventFragment): string
  getFunction(nameOrSignatureOrSighash: string): FunctionFragment
  getEvent(nameOrSignatureOrTopic: string): EventFragment
  getSighash(functionFragment: FunctionFragment | string): string
  getEventTopic(eventFragment: EventFragment | string): string
  _decodeParams(params: ParamType[], data: BytesLike): Result
  _encodeParams(params: ParamType[], values: any[]): string
  encodeDeploy(values?: any[]): string
  decodeFunctionData(functionFragment: TMethodNames, data: BytesLike): Result
  encodeFunctionData(
    functionFragment: FunctionFragment | TMethodNames,
    values?: any[],
  ): string
  decodeFunctionResult(
    functionFragment: FunctionFragment | TMethodNames,
    data: BytesLike,
  ): Result
  encodeFunctionResult(
    functionFragment: FunctionFragment | TMethodNames,
    values?: any[],
  ): string
  encodeFilterTopics(
    eventFragment: EventFragment,
    values: any[],
  ): Array<string | Array<string>>
  encodeEventLog(
    eventFragment: EventFragment,
    values: any[],
  ): {
    data: string
    topics: string[]
  }
  decodeEventLog(
    eventFragment: EventFragment | string,
    data: BytesLike,
    topics?: string[],
  ): Result
  parseTransaction(tx: {
    data: string
    value?: BigNumberish
  }): TransactionDescription
  parseLog(log: { topics: string[]; data: string }): LogDescription
  static isInterface(value: any): value is Interface
}

/**
 * Represents the base structure of an Ethers v5 contract.
 * @template TMethodNames The names of the contract methods
 */
export interface ContractVersionV5<TMethodNames> {
  readonly address: string
  readonly interface: InternalInterfaceV5<TMethodNames>
  readonly signer: Signer
  readonly provider: Provider
  readonly callStatic: {
    [name: string]: ContractFunctionV5
  }
  readonly estimateGas: {
    [name: string]: ContractFunctionV5<BigNumber>
  }
  readonly populateTransaction: {
    [name: string]: ContractFunctionV5<{
      to?: string
      from?: string
      nonce?: number
      gasLimit?: BigNumber
      gasPrice?: BigNumber
      data?: string
      value?: BigNumber
      chainId?: number
    }>
  }
  readonly addressPromise: Promise<string>
  readonly deployTransaction: TransactionResponse
  fallback(overrides?: TransactionRequest): Promise<TransactionResponse>
  // static isIndexed(value: any): value is Indexed;
  emit(eventName: EventFilter | string, ...args: any[]): boolean
  listenerCount(eventName?: EventFilter | string): number
  listeners(eventName: EventFilter | string): Listener[]
}

/**
 * Represents an Ethers v5 contract with extended functionality.
 * @template TMethods The contract methods
 * @template TMethodNames The names of the contract methods
 * @template TEventsContext The context for contract events
 * @template TEventType The type of contract events
 */
export interface EthersContractV5<
  TMethods,
  TMethodNames,
  TEventsContext,
  TEventType,
> extends ContractVersionV5<TMethodNames> {
  // readonly estimate: TMethods => Promise<BigNumber>;
  readonly functions: TMethods
  readonly filters: TEventsContext
  deployed(): Promise<
    EthersContractContextV5<TMethods, TMethodNames, TEventsContext, TEventType>
  >
  _deployed(
    blockTag?: BlockTag,
  ): Promise<
    EthersContractContextV5<TMethods, TMethodNames, TEventsContext, TEventType>
  >

  /**
   * Type any here so if you are using a different version of ethers then
   * installed it will still compile
   * @param signerOrProvider should be type of Wallet | Signer | Provider | string
   */
  connect(
    signerOrProvider: any,
  ): EthersContractContextV5<TMethods, TMethodNames, TEventsContext, TEventType>
  attach(
    addressOrName: string,
  ): EthersContractContextV5<TMethods, TMethodNames, TEventsContext, TEventType>
  // need to overwrite the event filters for strongly typed events
  on(
    event: EventFilter | TEventType,
    listener: Listener,
  ): EthersContractContextV5<TMethods, TMethodNames, TEventsContext, TEventType>
  once(
    event: EventFilter | TEventType,
    listener: Listener,
  ): EthersContractContextV5<TMethods, TMethodNames, TEventsContext, TEventType>
  addListener(
    eventName: EventFilter | TEventType,
    listener: Listener,
  ): EthersContractContextV5<TMethods, TMethodNames, TEventsContext, TEventType>
  removeAllListeners(
    eventName: EventFilter | TEventType,
  ): EthersContractContextV5<TMethods, TMethodNames, TEventsContext, TEventType>
  removeListener(
    eventName: TEventType,
    listener: Listener,
  ): EthersContractContextV5<TMethods, TMethodNames, TEventsContext, TEventType>
  queryFilter(
    event: EventFilter | string,
    fromBlockOrBlockhash?: BlockTag | string,
    toBlock?: BlockTag,
  ): Promise<TEventType[]>
}
