import type { Signer } from 'ethersv4'
import type {
  BlockTag,
  Listener,
  Provider,
  TransactionRequest,
  TransactionResponse,
} from 'ethersv4/providers'
import type { Interface } from 'ethersv4/utils'

/**
 * Represents an event filter for Ethereum contracts.
 */
export declare type EventFilter = {
  address?: string
  topics?: string[]
  fromBlock?: BlockTag
  toBlock?: BlockTag
}

/**
 * Represents the context of an Ethers contract with methods, events, and event types.
 * @template TMethods The contract methods
 * @template TEventsContext The context for contract events
 * @template TEventType The type of contract events
 */
export type EthersContractContext<TMethods, TEventsContext, TEventType> =
  EthersContractV4<TMethods, TEventsContext, TEventType> & TMethods

/**
 * Represents a basic Ethereum contract interface.
 */
export interface ContractVersionV4 {
  readonly address: string
  readonly interface: Interface
  readonly signer: Signer
  readonly provider: Provider
  // readonly [name: string]: ContractFunction | any;
  readonly addressPromise: Promise<string>
  readonly deployTransaction: TransactionResponse
  fallback(overrides?: TransactionRequest): Promise<TransactionResponse>
  // static isIndexed(value: any): value is Indexed;
  emit(eventName: EventFilter | string, ...args: any[]): boolean
  listenerCount(eventName?: EventFilter | string): number
  listeners(eventName: EventFilter | string): Listener[]
}

/**
 * Represents an Ethers contract with extended functionality.
 * @template TMethods The contract methods
 * @template TEventsContext The context for contract events
 * @template TEventType The type of contract events
 */
export interface EthersContractV4<TMethods, TEventsContext, TEventType>
  extends ContractVersionV4 {
  // readonly estimate: TMethods => Promise<BigNumber>;
  readonly functions: TMethods
  // to do not exposing any string methods now which is nicer
  readonly filters: TEventsContext
  deployed(): Promise<
    EthersContractContext<TMethods, TEventsContext, TEventType>
  >
  _deployed(
    blockTag?: BlockTag,
  ): Promise<EthersContractContext<TMethods, TEventsContext, TEventType>>
  /**
   * Type any here so if you are using a different version of ethers then
   * installed it will still compile
   * @param signerOrProvider should be type of Wallet | Signer | Provider | string
   */
  connect(
    signerOrProvider: any,
  ): EthersContractContext<TMethods, TEventsContext, TEventType>
  attach(
    addressOrName: string,
  ): EthersContractContext<TMethods, TEventsContext, TEventType>
  // need to overwrite the event filters for strongly typed events
  on(
    event: EventFilter | TEventType,
    listener: Listener,
  ): EthersContractContext<TMethods, TEventsContext, TEventType>
  once(
    event: EventFilter | TEventType,
    listener: Listener,
  ): EthersContractContext<TMethods, TEventsContext, TEventType>
  addListener(
    eventName: EventFilter | TEventType,
    listener: Listener,
  ): EthersContractContext<TMethods, TEventsContext, TEventType>
  removeAllListeners(
    eventName: EventFilter | TEventType,
  ): EthersContractContext<TMethods, TEventsContext, TEventType>
  removeListener(
    eventName: TEventType,
    listener: Listener,
  ): EthersContractContext<TMethods, TEventsContext, TEventType>
}
