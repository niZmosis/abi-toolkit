import type {
  PromiEvent,
  TransactionReceipt,
} from '@ethereum-abi-types-generator/converter-typescript'
import type { BigNumber } from 'bignumber.js'
import type BN from 'bn.js'

export type CallOptions = {
  from?: string
  gasPrice?: string
  gas?: number
}

export type SendOptions = {
  from: string
  value?: number | string | BN | BigNumber
  gasPrice?: string
  gas?: number
}

export type EstimateGasOptions = {
  from?: string
  value?: number | string | BN | BigNumber
  gas?: number
}

export type MethodPayableReturnContext = {
  send(options: SendOptions): PromiEvent<TransactionReceipt>
  send(
    options: SendOptions,
    callback: (error: Error, result: any) => void,
  ): PromiEvent<TransactionReceipt>
  estimateGas(options: EstimateGasOptions): Promise<number>
  estimateGas(
    options: EstimateGasOptions,
    callback: (error: Error, result: any) => void,
  ): Promise<number>
  encodeABI(): string
}

export type MethodConstantReturnContext<TCallReturn> = {
  call(): Promise<TCallReturn>
  call(options: CallOptions): Promise<TCallReturn>
  call(
    options: CallOptions,
    callback: (error: Error, result: TCallReturn) => void,
  ): Promise<TCallReturn>
  encodeABI(): string
}

export type MethodReturnContext = MethodPayableReturnContext
