// You can namespace the imports in different ways
import type * as EthersV4 from './outputs/ethers_v4'
import type * as EthersV5 from './outputs/ethers_v5'
import type * as EthersV6 from './outputs/ethers_v6'
import type * as Web3 from './outputs/web3'

// Ethers v4
const ethersRouter: EthersV4.PulseXRouterTypes.Contract = {} as any
console.log(ethersRouter.addLiquidity('1', '2', 3, 4, 5, 6, '7', 8))
const router: Web3.PulseXRouterTypes.Contract = {} as any
console.log(router)

// Ethers v5
const ethersV5Router: EthersV5.PulseXRouterTypes.Contract = {} as any
console.log(ethersV5Router.addLiquidity('1', '2', 3, 4, 5, 6, '7', 8))

// Ethers v6
const ethersV6Router: EthersV6.PulseXRouterTypes.Contract = {} as any
console.log(ethersV6Router.addLiquidity('1', '2', 3, 4, 5, 6, '7', 8))

// Web3
const fakeContract: Web3.FakeTypes.Contract = {} as any
console.log(fakeContract)
const fakeEvents: Web3.FakeTypes.Events = {} as any
console.log(fakeEvents)
