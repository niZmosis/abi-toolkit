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
export type MethodNameMap = {
  [key in MethodNames]: string
}
export interface PostWithSigNestedTuple2Request {
  nestedTuple2Single0: string | number[]
  nestedTuple2Single1: string
}
export interface PostWithSigNestedTuple1Request {
  nestedTuple1Single0: string
  nestedTuple2: PostWithSigNestedTuple2Request
}
export interface PostWithSigNestedTuple0Request {
  nestedTuple0Single0: string
  nestedTuple1: PostWithSigNestedTuple1Request
}
export interface PostWithSigPostParamsRequest {
  profileId: string
  contentURI: string
  actionModules: string[]
  actionModulesInitDatas: string | number[][]
  referenceModule: string
  referenceModuleInitData: string | number[]
  nestedTuple0: PostWithSigNestedTuple0Request
}
export interface PostWithSigSignatureRequest {
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
    postParams: PostWithSigPostParamsRequest,
    signature: PostWithSigSignatureRequest,
  ): MethodReturnContext
}
