import type { EthersContractContextV5 } from '@ethereum-abi-types-generator/converter-typescript'
import type { ContractTransaction, BigNumber, BigNumberish } from 'ethersv5'

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
export type Events = 'OwnershipTransferred' | 'Traveled'
export interface EventsContext {
  OwnershipTransferred(previousOwner: string, newOwner: string): EventFilter
  Traveled(
    minerId: BigNumberish,
    fromSystemID: BigNumberish,
    toSystemID: BigNumberish,
    fees: BigNumberish,
    newDistance: BigNumberish,
    newAngle: BigNumberish,
    rotationSpeed: BigNumberish,
    updateTime: BigNumberish,
  ): EventFilter
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
export type MethodNameMap = {
  [key in MethodNames]: string
}
export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string
  newOwner: string
}
export interface TraveledEventEmittedResponse {
  minerId: BigNumberish
  fromSystemID: BigNumberish
  toSystemID: BigNumberish
  fees: BigNumberish
  newDistance: BigNumberish
  newAngle: BigNumberish
  rotationSpeed: BigNumberish
  updateTime: BigNumberish
}
export interface CenterResponse {
  x: BigNumber
  0: BigNumber
  y: BigNumber
  1: BigNumber
}
export interface LastResponse {
  distance: number
  0: number
  angle: BigNumber
  1: BigNumber
}
export interface System1OrbitResponse {
  center: CenterResponse
  0: CenterResponse
  last: LastResponse
  1: LastResponse
  rotationSpeed: number
  2: number
  lastUpdate: BigNumber
  3: BigNumber
}
export interface System2OrbitResponse {
  center: CenterResponse
  0: CenterResponse
  last: LastResponse
  1: LastResponse
  rotationSpeed: number
  2: number
  lastUpdate: BigNumber
  3: BigNumber
}
export interface PortalResponse {
  id: BigNumber
  0: BigNumber
  system1Id: BigNumber
  1: BigNumber
  system2Id: BigNumber
  2: BigNumber
  fees: BigNumber
  3: BigNumber
  system1Orbit: System1OrbitResponse
  4: System1OrbitResponse
  system2Orbit: System2OrbitResponse
  5: System2OrbitResponse
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
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  defaultRotationSpeed(overrides?: ContractCallOverrides): Promise<number>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  feeReceiver(overrides?: ContractCallOverrides): Promise<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  gateway(overrides?: ContractCallOverrides): Promise<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param module Type: address, Indexed: false
   */
  isModule(module: string, overrides?: ContractCallOverrides): Promise<boolean>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  modules(overrides?: ContractCallOverrides): Promise<string[]>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  mustManager(overrides?: ContractCallOverrides): Promise<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  owner(overrides?: ContractCallOverrides): Promise<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  portalStore(overrides?: ContractCallOverrides): Promise<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  portalTravelArea(overrides?: ContractCallOverrides): Promise<number>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  renounceOwnership(
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  solarSystemStore(overrides?: ContractCallOverrides): Promise<string>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newOwner Type: address, Indexed: false
   */
  transferOwnership(
    newOwner: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newModule Type: address, Indexed: false
   */
  updateModule(
    newModule: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newModules Type: address[], Indexed: false
   */
  updateModules(
    newModules: string[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
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
   * @param newStore Type: address, Indexed: false
   */
  updatePortalStore(
    newStore: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param speed Type: int32, Indexed: false
   */
  updateDefaultRotationSpeed(
    speed: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param area Type: uint8, Indexed: false
   */
  updatePortalTravelArea(
    area: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newMustManager Type: address, Indexed: false
   */
  updateMustManager(
    newMustManager: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newGateway Type: address, Indexed: false
   */
  updateGateway(
    newGateway: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newFeeReceiver Type: address, Indexed: false
   */
  updateFeeReceiver(
    newFeeReceiver: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param portalId Type: uint256, Indexed: false
   */
  removePortal(
    portalId: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param portalId Type: uint256, Indexed: false
   */
  getPortal(
    portalId: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<PortalResponse>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getPortals(overrides?: ContractCallOverrides): Promise<PortalResponse[]>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param minerId Type: uint256, Indexed: false
   */
  getMinerLastDestination(
    minerId: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param minerIds Type: uint256[], Indexed: false
   */
  getMinersLastDestination(
    minerIds: BigNumberish[],
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber[]>
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
    system1Id: BigNumberish,
    system2Id: BigNumberish,
    fees: BigNumberish,
    system1DistanceToCenter: BigNumberish,
    system2DistanceToCenter: BigNumberish,
    system1Angle: BigNumberish,
    system2Angle: BigNumberish,
    rotationSpeed: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
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
    portalId: BigNumberish,
    system1Id: BigNumberish,
    system2Id: BigNumberish,
    fees: BigNumberish,
    system1DistanceToCenter: BigNumberish,
    system2DistanceToCenter: BigNumberish,
    system1Angle: BigNumberish,
    system2Angle: BigNumberish,
    rotationSpeed: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
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
    minerId: BigNumberish,
    portalId: BigNumberish,
    fromSystemId: BigNumberish,
    toSystemId: BigNumberish,
    time: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
}
