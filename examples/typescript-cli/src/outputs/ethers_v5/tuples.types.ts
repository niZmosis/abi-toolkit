import type { EthersContractContextV5 } from '@ethereum-abi-types-generator/converter-typescript'
import type {
  ContractTransaction,
  BytesLike as Arrayish,
  BigNumberish,
} from 'ethersv5'

import type { ContractTransactionOverrides } from './common.types'

export type ContractContext = EthersContractContextV5<
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
  nestedTuple2Single0: Arrayish
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
  actionModulesInitDatas: Arrayish[]
  referenceModule: string
  referenceModuleInitData: Arrayish
  nestedTuple0: PostWithSigNestedTuple0Request
}
export interface PostWithSigSignatureRequest {
  signer: string
  v: BigNumberish
  r: Arrayish
  s: Arrayish
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
