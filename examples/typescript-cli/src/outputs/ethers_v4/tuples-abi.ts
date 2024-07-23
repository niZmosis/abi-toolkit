import type { EthersContractContext } from '@ethereum-abi-types-generator/converter-typescript'
import type { ContractTransaction } from 'ethersv4'
import type { Arrayish, BigNumberish } from 'ethersv4/utils'

import type { ContractTransactionOverrides } from './common-types'

export type ContractContext = EthersContractContext<
  Contract,
  EventsContext,
  Events
>
export type Events = undefined
export interface EventsContext {}
export type MethodNames = 'postWithSig'
export interface PostParamsRequest {
  profileId: BigNumberish
  contentURI: string
  actionModules: string[]
  actionModulesInitDatas: Arrayish[]
  referenceModule: string
  referenceModuleInitData: Arrayish
}
export interface SignatureRequest {
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
    postParams: PostParamsRequest,
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
}
