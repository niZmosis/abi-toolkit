/**
 * Represents the supported versions of the ethers.js library.
 */
export type EthersLibrary = 'ethers_v4' | 'ethers_v5' | 'ethers_v6'

/**
 * Represents the supported versions of the web3.js library.
 */
export type Web3Library = 'web3'

/**
 * Represents the supported blockchain libraries, including ethers.js and web3.js.
 */
export type Library = EthersLibrary | Web3Library

/**
 * Represents the supported frameworks for blockchain development.
 */
export type Framework = 'none' | 'hardhat' | 'truffle'
