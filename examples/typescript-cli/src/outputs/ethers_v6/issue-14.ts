import type { EthersContractContextV6 } from '@ethereum-abi-types-generator/converter-typescript'
import type { ContractTransaction, BigNumberish } from 'ethersv6'

import type {
  EventFilter,
  ContractTransactionOverrides,
  ContractCallOverrides,
} from './common-types'

export type ContractContext = EthersContractContextV6<
  Contract,
  MethodNames,
  EventsContext,
  Events
>
export type Events = 'NewComet' | 'NewStakingComet' | 'RemoveComet'
export interface EventsContext {
  NewComet(
    cometId: string,
    token: string,
    balance: BigNumberish,
    unit: BigNumberish,
    solarSystemID: BigNumberish,
  ): EventFilter
  NewStakingComet(
    cometId: string,
    token: string,
    balance: BigNumberish,
    capacity: BigNumberish,
    rate: BigNumberish,
    solarSystemID: BigNumberish,
  ): EventFilter
  RemoveComet(
    cometId: string,
    token: string,
    solarSystemID: BigNumberish,
  ): EventFilter
}
export type MethodNames =
  | 'updateSolarSystemStore'
  | 'addComet'
  | 'removeComet'
  | 'cometPosition'
  | 'getComet'
  | 'getStakingComet'
  | 'cometsFrom'
  | 'countCometIn'
export interface NewCometEventEmittedResponse {
  cometId: string
  token: string
  balance: BigNumberish
  unit: BigNumberish
  solarSystemID: BigNumberish
}
export interface NewStakingCometEventEmittedResponse {
  cometId: string
  token: string
  balance: BigNumberish
  capacity: BigNumberish
  rate: BigNumberish
  solarSystemID: BigNumberish
}
export interface RemoveCometEventEmittedResponse {
  cometId: string
  token: string
  solarSystemID: BigNumberish
}
export interface CartesianResponse {
  x: bigint
  0: bigint
  y: bigint
  1: bigint
}
export interface CenterResponse {
  x: bigint
  0: bigint
  y: bigint
  1: bigint
}
export interface LastResponse {
  distance: number
  0: number
  angle: bigint
  1: bigint
}
export interface OrbitResponse {
  center: CenterResponse
  0: OrbitResponse
  last: LastResponse
  1: OrbitResponse
  rotationSpeed: number
  2: OrbitResponse
  lastUpdate: bigint
  3: OrbitResponse
}
export interface CometResponse {
  id: string
  0: string
  orbit: OrbitResponse
  1: OrbitResponse
  token: string
  2: string
  unit: bigint
  3: bigint
  balance: bigint
  4: bigint
  solarSystemID: bigint
  5: bigint
}
export interface StakingcometResponse {
  id: string
  0: string
  orbit: OrbitResponse
  1: OrbitResponse
  token: string
  2: string
  balance: bigint
  3: bigint
  rate: bigint
  4: bigint
  capacity: bigint
  5: bigint
  roverCount: bigint
  6: bigint
  cumulatedRate: bigint
  7: bigint
  collectable: bigint
  8: bigint
  lastUpdate: bigint
  9: bigint
  solarSystemID: bigint
  10: bigint
}
export interface CometsFromResponse {
  result0: CometResponse[]
  0: CometResponse[]
  result1: StakingcometResponse[]
  1: StakingcometResponse[]
  length: 2
}
export interface Contract {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newStore Type: address, Indexed: false
   */
  updateSolarSystemStore(
    newStore: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cometId Type: address, Indexed: false
   * @param x Type: int256, Indexed: false
   * @param y Type: int256, Indexed: false
   * @param distance Type: uint32, Indexed: false
   * @param rotationSpeed Type: uint16, Indexed: false
   * @param solarSystemID Type: uint256, Indexed: false
   */
  addComet(
    cometId: string,
    x: BigNumberish,
    y: BigNumberish,
    distance: BigNumberish,
    rotationSpeed: BigNumberish,
    solarSystemID: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cometId Type: address, Indexed: false
   * @param solarSystemID Type: uint256, Indexed: false
   */
  removeComet(
    cometId: string,
    solarSystemID: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param cometId Type: address, Indexed: false
   * @param time Type: uint256, Indexed: false
   * @param solarSystemID Type: uint256, Indexed: false
   */
  cometPosition(
    cometId: string,
    time: BigNumberish,
    solarSystemID: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<CartesianResponse>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param cometId Type: address, Indexed: false
   * @param solarSystemID Type: uint256, Indexed: false
   */
  getComet(
    cometId: string,
    solarSystemID: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<CometResponse>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param cometId Type: address, Indexed: false
   * @param solarSystemID Type: uint256, Indexed: false
   */
  getStakingComet(
    cometId: string,
    solarSystemID: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<StakingcometResponse>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param solarSystemID Type: uint256, Indexed: false
   */
  cometsFrom(
    solarSystemID: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<CometsFromResponse>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param solarSystemID Type: uint256, Indexed: false
   */
  countCometIn(
    solarSystemID: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<bigint>
}
