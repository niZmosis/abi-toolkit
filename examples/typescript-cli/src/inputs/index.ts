export class AbiExamples {
  /**
   * Mainnet fun token contract address
   */
  public static funContractAddress =
    '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b'

  /**
   * Fun token decimal places
   */
  public static funDecimalPlaces = 8

  /**
   * The token abi (when it compiled it lives in the dist so map it back to root)
   */
  public static tokenAbi = require('../inputs/token-abi.json')

  /**
   * The uniswap factory contract address (mainnet only)
   */
  public static uniswapFactoryAddress =
    '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95'

  /**
   * The uniswap factory abi (when it compiled it lives in the dist so map it back to root)
   */
  public static uniswapFactoryAbi = require('../../inputs/uniswap-factory-abi.json')

  /**
   * The uniswap exchange abi (when it compiled it lives in the dist so map it back to root)
   */
  public static uniswapExchangeAbi = require('../../inputs/uniswap-exchange-abi.json')

  // used for giffs and fake contract example
  public static YOUR_ABI: any = require('../../inputs/YOUR_ABI_JSON_FILE.json')

  // used for giffs and fake contract example
  public static YOUR_CONTRACT_ADDRESS = AbiExamples.funContractAddress
}

export * as Erc20ABI from './erc20.abi'
export * as PulseXRouterABI from './pulseX-router.abi'
export * as UniswapPairV2ABI from './uniswap-pair-v2.abi'
export * as UniswapQuoterV3ABI from './uniswap-quoter-v3.abi'
export * as UniswapRouterV2ABI from './uniswap-router-v2.abi'
export * as UniswapRouterV3ABI from './uniswap-router-v3.abi'
export * as WrappedABI from './wrapped.abi'
