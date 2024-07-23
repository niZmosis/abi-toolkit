import type {
  BytesLike,
  ContractInterface,
  Signer,
  TransactionRequest,
  TransactionResponse,
  EventFilter,
  Provider,
  Listener,
  BlockTag,
  TransactionDescription,
  LogDescription,
  Result,
} from 'ethersv6'

export type EthersContractContextV6<
  TMethods,
  TMethodNames,
  TEventsContext,
  TEventType,
> = EthersContractV6<TMethods, TMethodNames, TEventsContext, TEventType> &
  TMethods

type ContractFunction<T = any> = (...args: any[]) => Promise<T>

declare class InternalInterface<TMethodNames> {
  readonly fragments: any[]
  readonly errors: Record<string, any>
  readonly events: Record<string, any>
  readonly functions: Record<string, any>
  readonly structs: Record<string, any>
  readonly deploy: any
  format(format?: string): string | string[]
  static getAbiCoder(): any
  static getAddress(address: string): string
  static getSighash(functionFragment: any): string
  static getEventTopic(eventFragment: any): string
  getFunction(nameOrSignatureOrSighash: string): any
  getEvent(nameOrSignatureOrTopic: string): any
  getSighash(functionFragment: any | string): string
  getEventTopic(eventFragment: any | string): string
  _decodeParams(params: any[], data: BytesLike): Result
  _encodeParams(params: any[], values: any[]): string
  encodeDeploy(values?: any[]): string
  decodeFunctionData(functionFragment: TMethodNames, data: BytesLike): Result
  encodeFunctionData(
    functionFragment: any | TMethodNames,
    values?: any[],
  ): string
  decodeFunctionResult(
    functionFragment: any | TMethodNames,
    data: BytesLike,
  ): Result
  encodeFunctionResult(
    functionFragment: any | TMethodNames,
    values?: any[],
  ): string
  encodeFilterTopics(
    eventFragment: any,
    values: any[],
  ): Array<string | Array<string>>
  encodeEventLog(
    eventFragment: any,
    values: any[],
  ): { data: string; topics: string[] }
  decodeEventLog(
    eventFragment: any | string,
    data: BytesLike,
    topics?: string[],
  ): Result
  parseTransaction(tx: { data: string; value?: bigint }): TransactionDescription
  parseLog(log: { topics: string[]; data: string }): LogDescription
  static isInterface(value: any): value is ContractInterface
}

interface ContractVersionV6<TMethodNames> {
  readonly address: string
  readonly interface: InternalInterface<TMethodNames>
  readonly signer: Signer
  readonly provider: Provider
  readonly callStatic: {
    [name: string]: ContractFunction
  }
  readonly estimateGas: {
    [name: string]: ContractFunction<bigint>
  }
  readonly populateTransaction: {
    [name: string]: ContractFunction<TransactionRequest>
  }
  readonly addressPromise: Promise<string>
  readonly deployTransaction: TransactionResponse
  fallback(overrides?: TransactionRequest): Promise<TransactionResponse>
  emit(eventName: EventFilter | string, ...args: any[]): boolean
  listenerCount(eventName?: EventFilter | string): number
  listeners(eventName: EventFilter | string): Listener[]
}

interface EthersContractV6<TMethods, TMethodNames, TEventsContext, TEventType>
  extends ContractVersionV6<TMethodNames> {
  readonly functions: TMethods
  readonly filters: TEventsContext
  deployed(): Promise<
    EthersContractContextV6<TMethods, TMethodNames, TEventsContext, TEventType>
  >
  _deployed(
    blockTag?: BlockTag,
  ): Promise<
    EthersContractContextV6<TMethods, TMethodNames, TEventsContext, TEventType>
  >

  /**
   * Type any here so if you are using a different version of ethers then
   * installed it will still compile
   * @param signerOrProvider should be type of Wallet | Signer | Provider | string
   */
  connect(
    signerOrProvider: any,
  ): EthersContractContextV6<TMethods, TMethodNames, TEventsContext, TEventType>
  attach(
    addressOrName: string,
  ): EthersContractContextV6<TMethods, TMethodNames, TEventsContext, TEventType>
  // need to overwrite the event filters for strongly typed events
  on(
    event: EventFilter | TEventType,
    listener: Listener,
  ): EthersContractContextV6<TMethods, TMethodNames, TEventsContext, TEventType>
  once(
    event: EventFilter | TEventType,
    listener: Listener,
  ): EthersContractContextV6<TMethods, TMethodNames, TEventsContext, TEventType>
  addListener(
    eventName: EventFilter | TEventType,
    listener: Listener,
  ): EthersContractContextV6<TMethods, TMethodNames, TEventsContext, TEventType>
  removeAllListeners(
    eventName: EventFilter | TEventType,
  ): EthersContractContextV6<TMethods, TMethodNames, TEventsContext, TEventType>
  removeListener(
    eventName: TEventType,
    listener: Listener,
  ): EthersContractContextV6<TMethods, TMethodNames, TEventsContext, TEventType>
  queryFilter(
    event: EventFilter | string,
    fromBlockOrBlockhash?: BlockTag | string,
    toBlock?: BlockTag,
  ): Promise<TEventType[]>
}
