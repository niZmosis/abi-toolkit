import type {
  EventResponse,
  EventData,
  Web3ContractContext,
} from '@ethereum-abi-types-generator/converter-typescript'

import type {
  MethodConstantReturnContext,
  MethodReturnContext,
} from './common-types'

export type ContractContext = Web3ContractContext<
  Contract,
  MethodNames,
  EventsContext,
  Events
>
export type Events = 'NewComet' | 'NewStakingComet' | 'RemoveComet'
export interface EventsContext {
  NewComet(
    parameters: {
      filter?: { cometId?: string | string[]; token?: string | string[] }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void,
  ): EventResponse
  NewStakingComet(
    parameters: {
      filter?: { cometId?: string | string[]; token?: string | string[] }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void,
  ): EventResponse
  RemoveComet(
    parameters: {
      filter?: { cometId?: string | string[]; token?: string | string[] }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void,
  ): EventResponse
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
export type MethodNameMap = {
  [key in MethodNames]: string
}
export interface NewCometEventEmittedResponse {
  cometId: string
  token: string
  balance: string
  unit: string
  solarSystemID: string
}
export interface NewStakingCometEventEmittedResponse {
  cometId: string
  token: string
  balance: string
  capacity: string
  rate: string
  solarSystemID: string
}
export interface RemoveCometEventEmittedResponse {
  cometId: string
  token: string
  solarSystemID: string
}
export interface CartesianResponse {
  x: string
  y: string
}
export interface CenterResponse {
  x: string
  y: string
}
export interface LastResponse {
  distance: string
  angle: string
}
export interface OrbitResponse {
  center: CenterResponse
  last: LastResponse
  rotationSpeed: string
  lastUpdate: string
}
export interface CometResponse {
  id: string
  orbit: OrbitResponse
  token: string
  unit: string
  balance: string
  solarSystemID: string
}
export interface StakingCometResponse {
  id: string
  orbit: OrbitResponse
  token: string
  balance: string
  rate: string
  capacity: string
  roverCount: string
  cumulatedRate: string
  collectable: string
  lastUpdate: string
  solarSystemID: string
}
export interface CometsFrom {
  result0: CometResponse[]
  result1: StakingCometResponse[]
}
export interface Contract {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newStore Type: address, Indexed: false
   */
  updateSolarSystemStore(newStore: string): MethodReturnContext
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
    x: string,
    y: string,
    distance: string | number,
    rotationSpeed: string | number,
    solarSystemID: string,
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cometId Type: address, Indexed: false
   * @param solarSystemID Type: uint256, Indexed: false
   */
  removeComet(cometId: string, solarSystemID: string): MethodReturnContext
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
    time: string,
    solarSystemID: string,
  ): MethodConstantReturnContext<CartesianResponse>
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
    solarSystemID: string,
  ): MethodConstantReturnContext<CometResponse>
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
    solarSystemID: string,
  ): MethodConstantReturnContext<StakingCometResponse>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param solarSystemID Type: uint256, Indexed: false
   */
  cometsFrom(solarSystemID: string): MethodConstantReturnContext<CometsFrom>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param solarSystemID Type: uint256, Indexed: false
   */
  countCometIn(solarSystemID: string): MethodConstantReturnContext<string>
}
