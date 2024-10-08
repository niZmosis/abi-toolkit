import type { AbiInput, AbiOutput } from '@ethereum-abi-types-generator/types'
import BigNumber from 'bignumber.js'
import BN from 'bn.js'

/**
 * Represents the context of a Web3 contract with methods interface, method names enum, events interface, and event type.
 * @template TMethodsInterface The interface of contract methods
 * @template TMethodNamesEnum The enum of method names
 * @template TEventsInterface The interface of contract events
 * @template TEventType The type of events
 */
export type Web3ContractContext<
  TMethodsInterface,
  TMethodNamesEnum,
  TEventsInterface,
  TEventType,
> = {
  address: string
  jsonInterface: AbiModel<TMethodNamesEnum, TEventType>

  options: Options

  clone(): Web3ContractContext<
    TMethodsInterface,
    TMethodNamesEnum,
    TEventsInterface,
    TEventType
  >

  deploy(
    options: DeployOptions,
  ): ContractSendMethod<
    TMethodsInterface,
    TMethodNamesEnum,
    TEventsInterface,
    TEventType
  >

  methods: TMethodsInterface

  once(
    event: TEventType,
    callback: (error: Error, event: EventData) => void,
  ): void
  once(
    event: TEventType,
    options: EventOptions,
    callback: (error: Error, event: EventData) => void,
  ): void

  events: TEventsInterface & {
    allEvents(options: EventOptions): EventResponse
    allEvents(
      options: EventOptions,
      callback: (error: Error, event: EventData) => void,
    ): EventResponse
  }

  getPastEvents(event: TEventType): Promise<EventData[]>
  getPastEvents(
    event: TEventType,
    options: EventOptions,
    callback: (error: Error, event: EventData) => void,
  ): Promise<EventData[]>
  getPastEvents(event: TEventType, options: EventOptions): Promise<EventData[]>
  getPastEvents(
    event: TEventType,
    callback: (error: Error, event: EventData) => void,
  ): Promise<EventData[]>
}

/**
 * Represents the ABI model of a Web3 contract.
 * @template TMethodNamesEnum The enum of method names
 * @template TEventEnum The enum of event names
 */
export interface AbiModel<TMethodNamesEnum, TEventEnum> {
  getMethod(name: TMethodNamesEnum): AbiItemModel<TMethodNamesEnum> | false

  getMethods(): AbiItemModel<TMethodNamesEnum>[]

  hasMethod(name: TMethodNamesEnum): boolean

  getEvent(name: TEventEnum): AbiItemModel<TMethodNamesEnum> | false

  getEvents(): AbiItemModel<TMethodNamesEnum>[]

  getEventBySignature(signature: string): AbiItemModel<TMethodNamesEnum>

  hasEvent(name: TEventEnum): boolean
}

/**
 * Represents an ABI item model for a Web3 contract.
 * @template TMethodNamesEnum The enum of method names
 */
export interface AbiItemModel<TMethodNamesEnum> {
  signature: string
  name: TMethodNamesEnum
  payable: boolean
  anonymous: boolean

  getInputLength(): number

  getInputs(): AbiInput[]

  getIndexedInputs(): AbiInput[]

  getOutputs(): AbiOutput[]

  isOfType(): boolean
}

/**
 * Represents options for a Web3 contract.
 */
export interface Options {
  address: string
  data: string
}

/**
 * Represents deploy options for a Web3 contract.
 */
export interface DeployOptions {
  data: string
  arguments?: any[]
}

/**
 * Represents a contract send method for Web3.
 * @template TMethodsInterface The interface of contract methods
 * @template TMethodNamesEnum The enum of method names
 * @template TEventsInterface The interface of contract events
 * @template TEventType The type of events
 */
export interface ContractSendMethod<
  TMethodsInterface,
  TMethodNamesEnum,
  TEventsInterface,
  TEventType,
> {
  send(
    options: SendOptions,
    callback?: (err: Error, transactionHash: string) => void,
  ): PromiEvent<
    Web3ContractContext<
      TMethodsInterface,
      TMethodNamesEnum,
      TEventsInterface,
      TEventType
    >
  >

  estimateGas(
    options: EstimateGasOptions,
    callback?: (err: Error, gas: number) => void,
  ): Promise<number>

  estimateGas(callback: (err: Error, gas: number) => void): Promise<number>

  estimateGas(
    options: EstimateGasOptions,
    callback: (err: Error, gas: number) => void,
  ): Promise<number>

  estimateGas(options: EstimateGasOptions): Promise<number>

  estimateGas(): Promise<number>

  encodeABI(): string
}

/**
 * Represents send options for a Web3 contract method.
 */
export interface SendOptions {
  from: string
  gasPrice?: string
  gas?: number
  value?: number | string | BN | BigNumber
}

/**
 * Represents estimate gas options for a Web3 contract method.
 */
export interface EstimateGasOptions {
  from?: string
  gas?: number
  value?: number | string | BN | BigNumber
}

/**
 * Represents a PromiEvent for Web3 contract interactions.
 * @template T The type of the resolved value
 */
export interface PromiEvent<T> extends Promise<T> {
  once(type: 'transactionHash', handler: (hash: string) => void): PromiEvent<T>

  once(
    type: 'receipt',
    handler: (receipt: TransactionReceipt) => void,
  ): PromiEvent<T>

  once(
    type: 'confirmation',
    handler: (confNumber: number, receipt: TransactionReceipt) => void,
  ): PromiEvent<T>

  once(type: 'error', handler: (error: Error) => void): PromiEvent<T>

  on(type: 'transactionHash', handler: (hash: string) => void): PromiEvent<T>

  on(
    type: 'receipt',
    handler: (receipt: TransactionReceipt) => void,
  ): PromiEvent<T>

  on(
    type: 'confirmation',
    handler: (confNumber: number, receipt: TransactionReceipt) => void,
  ): PromiEvent<T>

  on(type: 'error', handler: (error: Error) => void): PromiEvent<T>
}

/**
 * Represents a transaction receipt for Web3.
 */
export interface TransactionReceipt {
  status: boolean
  transactionHash: string
  transactionIndex: number
  blockHash: string
  blockNumber: number
  from: string
  to: string
  contractAddress?: string
  cumulativeGasUsed: number
  gasUsed: number
  logs: Log[]
  logsBloom: string
  events?: {
    [eventName: string]: EventData
  }
}

/**
 * Represents a log entry for Web3.
 */
export interface Log {
  address: string
  data: string
  topics: (string | string[])[]
  logIndex: number
  transactionIndex: number
  transactionHash: string
  blockHash: string
  blockNumber: number
}

/**
 * Represents event data for Web3.
 */
export interface EventData {
  returnValues: {
    [key: string]: any
  }
  raw: {
    data: string
    topics: string[]
  }
  event: string
  signature: string
  logIndex: number
  transactionIndex: number
  transactionHash: string
  blockHash: string
  blockNumber: number
  address: string
}

/**
 * Represents event options for Web3.
 */
export interface EventOptions {
  filter?: any
  fromBlock?: number
  toBlock?: 'latest' | number
  topics?: any[]
}

/**
 * Represents an event response for Web3.
 */ export interface EventResponse {
  on(type: 'data', handler: (event: EventData) => void): EventResponse
  on(type: 'changed', handler: (event: EventData) => void): EventResponse
  on(type: 'error', handler: (error: Error) => void): EventResponse
}
