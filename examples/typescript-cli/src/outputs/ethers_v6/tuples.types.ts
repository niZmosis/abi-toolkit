import type { EthersContractContextV6 } from '@abi-toolkit/converter-typescript'
import type { ContractTransaction, BytesLike, BigNumberish } from 'ethersv6'

import type { ContractTransactionOverrides } from './common.types'

export type ContractContext = EthersContractContextV6<
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
  nestedTuple2Single0: BytesLike
  nestedTuple2Single1: BigNumberish
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
  profileId: BigNumberish
  contentURI: string
  actionModules: string[]
  actionModulesInitDatas: BytesLike[]
  referenceModule: string
  referenceModuleInitData: BytesLike
  nestedTuple0: PostWithSigNestedTuple0Request
}
export interface PostWithSigSignatureRequest {
  signer: string
  v: BigNumberish
  r: BytesLike
  s: BytesLike
  deadline: BigNumberish
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
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
}
