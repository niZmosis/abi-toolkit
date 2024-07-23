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
export type Events = 'OwnershipTransferred' | 'Traveled'
export interface EventsContext {
  OwnershipTransferred(
    parameters: {
      filter?: {
        previousOwner?: string | string[]
        newOwner?: string | string[]
      }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void,
  ): EventResponse
  Traveled(
    parameters: {
      filter?: {
        minerId?: string | string[]
        fromSystemID?: string | string[]
        toSystemID?: string | string[]
      }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void,
  ): EventResponse
}
export type MethodNames =
  | 'new'
  | 'defaultRotationSpeed'
  | 'feeReceiver'
  | 'gateway'
  | 'isModule'
  | 'modules'
  | 'mustManager'
  | 'owner'
  | 'portalStore'
  | 'portalTravelArea'
  | 'renounceOwnership'
  | 'solarSystemStore'
  | 'transferOwnership'
  | 'updateModule'
  | 'updateModules'
  | 'updateSolarSystemStore'
  | 'updatePortalStore'
  | 'updateDefaultRotationSpeed'
  | 'updatePortalTravelArea'
  | 'updateMustManager'
  | 'updateGateway'
  | 'updateFeeReceiver'
  | 'removePortal'
  | 'getPortal'
  | 'getPortals'
  | 'getMinerLastDestination'
  | 'getMinersLastDestination'
  | 'addPortal'
  | 'updatePortal'
  | 'travel'
export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string
  newOwner: string
}
export interface TraveledEventEmittedResponse {
  minerId: string
  fromSystemID: string
  toSystemID: string
  fees: string
  newDistance: string | number
  newAngle: string
  rotationSpeed: string | number
  updateTime: string
}
export interface CenterResponse {
  x: string
  y: string
}
export interface LastResponse {
  distance: string
  angle: string
}
export interface System1OrbitResponse {
  center: CenterResponse
  last: LastResponse
  rotationSpeed: string
  lastUpdate: string
}
export interface System2OrbitResponse {
  center: CenterResponse
  last: LastResponse
  rotationSpeed: string
  lastUpdate: string
}
export interface PortalResponse {
  id: string
  system1Id: string
  system2Id: string
  fees: string
  system1Orbit: System1OrbitResponse
  system2Orbit: System2OrbitResponse
}
export interface Contract {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param pStore Type: address, Indexed: false
   * @param ssStore Type: address, Indexed: false
   * @param mManager Type: address, Indexed: false
   * @param gtw Type: address, Indexed: false
   */
  'new'(
    pStore: string,
    ssStore: string,
    mManager: string,
    gtw: string,
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  defaultRotationSpeed(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  feeReceiver(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  gateway(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param module Type: address, Indexed: false
   */
  isModule(module: string): MethodConstantReturnContext<boolean>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  modules(): MethodConstantReturnContext<string[]>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  mustManager(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  owner(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  portalStore(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  portalTravelArea(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  renounceOwnership(): MethodReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  solarSystemStore(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newOwner Type: address, Indexed: false
   */
  transferOwnership(newOwner: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newModule Type: address, Indexed: false
   */
  updateModule(newModule: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newModules Type: address[], Indexed: false
   */
  updateModules(newModules: string[]): MethodReturnContext
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
   * @param newStore Type: address, Indexed: false
   */
  updatePortalStore(newStore: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param speed Type: int32, Indexed: false
   */
  updateDefaultRotationSpeed(speed: string | number): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param area Type: uint8, Indexed: false
   */
  updatePortalTravelArea(area: string | number): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newMustManager Type: address, Indexed: false
   */
  updateMustManager(newMustManager: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newGateway Type: address, Indexed: false
   */
  updateGateway(newGateway: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newFeeReceiver Type: address, Indexed: false
   */
  updateFeeReceiver(newFeeReceiver: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param portalId Type: uint256, Indexed: false
   */
  removePortal(portalId: string): MethodReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param portalId Type: uint256, Indexed: false
   */
  getPortal(portalId: string): MethodConstantReturnContext<PortalResponse>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getPortals(): MethodConstantReturnContext<PortalResponse[]>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param minerId Type: uint256, Indexed: false
   */
  getMinerLastDestination(minerId: string): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param minerIds Type: uint256[], Indexed: false
   */
  getMinersLastDestination(
    minerIds: string[],
  ): MethodConstantReturnContext<string[]>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param system1Id Type: uint256, Indexed: false
   * @param system2Id Type: uint256, Indexed: false
   * @param fees Type: uint256, Indexed: false
   * @param system1DistanceToCenter Type: uint32, Indexed: false
   * @param system2DistanceToCenter Type: uint32, Indexed: false
   * @param system1Angle Type: int128, Indexed: false
   * @param system2Angle Type: int128, Indexed: false
   * @param rotationSpeed Type: int32, Indexed: false
   */
  addPortal(
    system1Id: string,
    system2Id: string,
    fees: string,
    system1DistanceToCenter: string | number,
    system2DistanceToCenter: string | number,
    system1Angle: string,
    system2Angle: string,
    rotationSpeed: string | number,
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param portalId Type: uint256, Indexed: false
   * @param system1Id Type: uint256, Indexed: false
   * @param system2Id Type: uint256, Indexed: false
   * @param fees Type: uint256, Indexed: false
   * @param system1DistanceToCenter Type: uint32, Indexed: false
   * @param system2DistanceToCenter Type: uint32, Indexed: false
   * @param system1Angle Type: int128, Indexed: false
   * @param system2Angle Type: int128, Indexed: false
   * @param rotationSpeed Type: int32, Indexed: false
   */
  updatePortal(
    portalId: string,
    system1Id: string,
    system2Id: string,
    fees: string,
    system1DistanceToCenter: string | number,
    system2DistanceToCenter: string | number,
    system1Angle: string,
    system2Angle: string,
    rotationSpeed: string | number,
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param minerId Type: uint256, Indexed: false
   * @param portalId Type: uint256, Indexed: false
   * @param fromSystemId Type: uint256, Indexed: false
   * @param toSystemId Type: uint256, Indexed: false
   * @param time Type: uint256, Indexed: false
   */
  travel(
    minerId: string,
    portalId: string,
    fromSystemId: string,
    toSystemId: string,
    time: string,
  ): MethodReturnContext
}
