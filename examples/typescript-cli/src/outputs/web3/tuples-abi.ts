import type { Web3ContractContext } from '@ethereum-abi-types-generator/converter-typescript'

import type { MethodReturnContext } from './common-types'

export type ContractContext = Web3ContractContext<
  Contract,
  MethodNames,
  EventsContext,
  Events
>
export type Events = undefined
export interface EventsContext {}
export type MethodNames = 'postWithSig'
export interface PostParamsRequest {
  profileId: string
  contentURI: string
  actionModules: string[]
  actionModulesInitDatas: string | number[][]
  referenceModule: string
  referenceModuleInitData: string | number[]
}
export interface SignatureRequest {
  signer: string
  v: string | number
  r: string | number[]
  s: string | number[]
  deadline: string
}
export interface Contract {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param postParams Type: tuple, Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  postWithSig(
    postParams: PostParamsRequest,
    signature: SignatureRequest,
  ): MethodReturnContext
}
