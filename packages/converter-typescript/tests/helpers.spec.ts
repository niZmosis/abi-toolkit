import type { AbiOutput } from '@ethereum-abi-types-generator/types'
import { libraryMap } from '@ethereum-abi-types-generator/utils'
import { describe, it, expect } from 'vitest'

import TypeScriptHelpers from '../src/utils/helpers'

describe('TypeScriptHelpers', () => {
  describe('getSolidityInputTsType', () => {
    describe('ethers', () => {
      describe('address', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'address',
              libraryMap.ethers_v4,
            ),
          ).toEqual('string')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'address[4]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'address[4][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'address[][][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('string[][][]')
        })
      })

      describe('uint', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint',
              libraryMap.ethers_v4,
            ),
          ).toEqual('BigNumberish')
        })

        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint32',
              libraryMap.ethers_v4,
            ),
          ).toEqual('BigNumberish')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint[4]',
              libraryMap.ethers_v4,
            ),
          ).toEqual(
            '[BigNumberish,BigNumberish,BigNumberish,BigNumberish,BigNumberish]',
          )
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint32[4]',
              libraryMap.ethers_v4,
            ),
          ).toEqual(
            '[BigNumberish,BigNumberish,BigNumberish,BigNumberish,BigNumberish]',
          )
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint[4][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual(
            '[BigNumberish,BigNumberish,BigNumberish,BigNumberish,BigNumberish][]',
          )
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint32[4][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual(
            '[BigNumberish,BigNumberish,BigNumberish,BigNumberish,BigNumberish][]',
          )
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint[][][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('BigNumberish[][][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint32[][][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('BigNumberish[][][]')
        })
      })

      describe('bytes', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes',
              libraryMap.ethers_v4,
            ),
          ).toEqual('Arrayish')
        })

        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes32',
              libraryMap.ethers_v4,
            ),
          ).toEqual('Arrayish')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes[4]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('[Arrayish,Arrayish,Arrayish,Arrayish,Arrayish]')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes32[4]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('[Arrayish,Arrayish,Arrayish,Arrayish,Arrayish]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes[4][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('[Arrayish,Arrayish,Arrayish,Arrayish,Arrayish][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes32[4][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('[Arrayish,Arrayish,Arrayish,Arrayish,Arrayish][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes[][][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('Arrayish[][][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes32[][][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('Arrayish[][][]')
        })
      })

      describe('string', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'string',
              libraryMap.ethers_v4,
            ),
          ).toEqual('string')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'string[4]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'string[4][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'string[][][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('string[][][]')
        })
      })

      describe('int', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int',
              libraryMap.ethers_v4,
            ),
          ).toEqual('BigNumberish')
        })

        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int32',
              libraryMap.ethers_v4,
            ),
          ).toEqual('BigNumberish')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int[4]',
              libraryMap.ethers_v4,
            ),
          ).toEqual(
            '[BigNumberish,BigNumberish,BigNumberish,BigNumberish,BigNumberish]',
          )
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int32[4]',
              libraryMap.ethers_v4,
            ),
          ).toEqual(
            '[BigNumberish,BigNumberish,BigNumberish,BigNumberish,BigNumberish]',
          )
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int[4][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual(
            '[BigNumberish,BigNumberish,BigNumberish,BigNumberish,BigNumberish][]',
          )
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int32[4][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual(
            '[BigNumberish,BigNumberish,BigNumberish,BigNumberish,BigNumberish][]',
          )
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int[][][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('BigNumberish[][][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int32[][][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('BigNumberish[][][]')
        })
      })

      describe('bool', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bool',
              libraryMap.ethers_v4,
            ),
          ).toEqual('boolean')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bool[4]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('[boolean,boolean,boolean,boolean,boolean]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bool[4][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('[boolean,boolean,boolean,boolean,boolean][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bool[][][]',
              libraryMap.ethers_v4,
            ),
          ).toEqual('boolean[][][]')
        })
      })

      it('should throw an error if solidity type can not be found', () => {
        expect(() => {
          TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
            'blah' as any,
            libraryMap.ethers_v4,
          )
        }).toThrowError('blah is not valid solidty type')
      })
    })

    describe('web3', () => {
      describe('address', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'address',
              libraryMap.web3,
            ),
          ).toEqual('string')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'address[4]',
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'address[4][]',
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'address[][][]',
              libraryMap.web3,
            ),
          ).toEqual('string[][][]')
        })
      })

      describe('uint', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint',
              libraryMap.web3,
            ),
          ).toEqual('string')
        })

        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint32',
              libraryMap.web3,
            ),
          ).toEqual('string | number')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint[4]',
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint32[4]',
              libraryMap.web3,
            ),
          ).toEqual(
            '[string | number,string | number,string | number,string | number,string | number]',
          )
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint[4][]',
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint32[4][]',
              libraryMap.web3,
            ),
          ).toEqual(
            '[string | number,string | number,string | number,string | number,string | number][]',
          )
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint[][][]',
              libraryMap.web3,
            ),
          ).toEqual('string[][][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'uint32[][][]',
              libraryMap.web3,
            ),
          ).toEqual('string | number[][][]')
        })
      })

      describe('bytes', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes',
              libraryMap.web3,
            ),
          ).toEqual('string | number[]')
        })

        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes32',
              libraryMap.web3,
            ),
          ).toEqual('string | number[]')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes[4]',
              libraryMap.web3,
            ),
          ).toEqual(
            '[string | number[],string | number[],string | number[],string | number[],string | number[]]',
          )
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes32[4]',
              libraryMap.web3,
            ),
          ).toEqual(
            '[string | number[],string | number[],string | number[],string | number[],string | number[]]',
          )
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes[4][]',
              libraryMap.web3,
            ),
          ).toEqual(
            '[string | number[],string | number[],string | number[],string | number[],string | number[]][]',
          )
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes32[4][]',
              libraryMap.web3,
            ),
          ).toEqual(
            '[string | number[],string | number[],string | number[],string | number[],string | number[]][]',
          )
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes[][][]',
              libraryMap.web3,
            ),
          ).toEqual('string | number[][][][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bytes32[][][]',
              libraryMap.web3,
            ),
          ).toEqual('string | number[][][][]')
        })
      })

      describe('string', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'string',
              libraryMap.web3,
            ),
          ).toEqual('string')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'string[4]',
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'string[4][]',
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'string[][][]',
              libraryMap.web3,
            ),
          ).toEqual('string[][][]')
        })
      })

      describe('int', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int',
              libraryMap.web3,
            ),
          ).toEqual('string')
        })

        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int32',
              libraryMap.web3,
            ),
          ).toEqual('string | number')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int[4]',
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int32[4]',
              libraryMap.web3,
            ),
          ).toEqual(
            '[string | number,string | number,string | number,string | number,string | number]',
          )
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int[4][]',
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int32[4][]',
              libraryMap.web3,
            ),
          ).toEqual(
            '[string | number,string | number,string | number,string | number,string | number][]',
          )
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int[][][]',
              libraryMap.web3,
            ),
          ).toEqual('string[][][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'int32[][][]',
              libraryMap.web3,
            ),
          ).toEqual('string | number[][][]')
        })
      })

      describe('bool', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bool',
              libraryMap.web3,
            ),
          ).toEqual('boolean')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bool[4]',
              libraryMap.web3,
            ),
          ).toEqual('[boolean,boolean,boolean,boolean,boolean]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bool[4][]',
              libraryMap.web3,
            ),
          ).toEqual('[boolean,boolean,boolean,boolean,boolean][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
              'bool[][][]',
              libraryMap.web3,
            ),
          ).toEqual('boolean[][][]')
        })
      })

      it('should throw an error if solidity type can not be found', () => {
        expect(() => {
          TypeScriptHelpers.getSolidityInputTsTypeByTypeName(
            'blah' as any,
            libraryMap.web3,
          )
        }).toThrowError('blah is not valid solidty type')
      })
    })
  })

  describe('getSolidityOutputTsType', () => {
    describe('ethers', () => {
      describe('address', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'address' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('string')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'address[4]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'address[4][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'address[][][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('string[][][]')
        })
      })

      describe('uint', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('BigNumber')
        })

        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint32' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('number')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint[4]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[BigNumber,BigNumber,BigNumber,BigNumber,BigNumber]')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint32[4]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[number,number,number,number,number]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint[4][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[BigNumber,BigNumber,BigNumber,BigNumber,BigNumber][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint32[4][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[number,number,number,number,number][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint[][][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('BigNumber[][][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint32[][][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('number[][][]')
        })
      })

      describe('bytes', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('string')
        })

        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes32' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('string')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes[4]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes32[4]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes[4][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes32[4][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes[][][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('string[][][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes32[][][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('string[][][]')
        })
      })

      describe('string', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'string' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('string')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'string[4]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'string[4][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'string[][][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('string[][][]')
        })
      })

      describe('int', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('BigNumber')
        })

        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int32' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('number')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int[4]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[BigNumber,BigNumber,BigNumber,BigNumber,BigNumber]')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int32[4]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[number,number,number,number,number]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int[4][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[BigNumber,BigNumber,BigNumber,BigNumber,BigNumber][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int32[4][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[number,number,number,number,number][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int[][][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('BigNumber[][][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int32[][][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('number[][][]')
        })
      })

      describe('bool', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bool' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('boolean')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bool[4]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[boolean,boolean,boolean,boolean,boolean]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bool[4][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('[boolean,boolean,boolean,boolean,boolean][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bool[][][]' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('boolean[][][]')
        })
      })

      describe('tuple', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'tuple', name: 'hey' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('HeyResponse')
        })

        it('should return correct result with array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'tuple[]', name: 'hey' } as AbiOutput,
              libraryMap.ethers_v4,
            ),
          ).toEqual('HeyResponse[]')
        })
      })

      it('should throw an error if solidity type can not be found', () => {
        expect(() => {
          TypeScriptHelpers.getSolidityOutputTsType(
            { type: 'blah' } as AbiOutput,
            libraryMap.ethers_v4,
          )
        }).toThrowError('blah is not valid solidty type')
      })
    })

    describe('web3', () => {
      describe('address', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'address' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'address[4]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'address[4][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'address[][][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string[][][]')
        })
      })

      describe('uint', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string')
        })

        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint32' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint[4]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint32[4]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint[4][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint32[4][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint[][][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string[][][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'uint32[][][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string[][][]')
        })
      })

      describe('bytes', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string')
        })

        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes32' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes[4]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes32[4]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes[4][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes32[4][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes[][][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string[][][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bytes32[][][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string[][][]')
        })
      })

      describe('string', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'string' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'string[4]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'string[4][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'string[][][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string[][][]')
        })
      })

      describe('int', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string')
        })

        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int32' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int[4]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int32[4]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int[4][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int32[4][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[string,string,string,string,string][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int[][][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string[][][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'int32[][][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('string[][][]')
        })
      })

      describe('bool', () => {
        it('should return correct result with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bool' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('boolean')
        })

        it('should return correct result with fixed array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bool[4]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[boolean,boolean,boolean,boolean,boolean]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bool[4][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('[boolean,boolean,boolean,boolean,boolean][]')
        })

        it('should return correct result with fixed multidimensional arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'bool[][][]' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('boolean[][][]')
        })
      })

      describe('tuple', () => {
        it('should return correct response with no arrays', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'tuple', name: 'hey' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('HeyResponse')
        })

        it('should return response as an array', () => {
          expect(
            TypeScriptHelpers.getSolidityOutputTsType(
              { type: 'tuple[]', name: 'hey' } as AbiOutput,
              libraryMap.web3,
            ),
          ).toEqual('HeyResponse[]')
        })
      })

      it('should throw an error if solidity type can not be found', () => {
        expect(() => {
          TypeScriptHelpers.getSolidityOutputTsType(
            { type: 'blah' } as AbiOutput,
            libraryMap.web3,
          )
        }).toThrowError('blah is not valid solidty type')
      })
    })
  })

  describe('buildUpMultidimensionalArrayTypes', () => {
    it('should take a fixed size multidimensional array and convert it to an type', () => {
      expect(
        TypeScriptHelpers.buildUpMultidimensionalArrayTypes(
          'bytes32[4][][2][][9][]',
          'string',
        ),
      ).toEqual('[string,string,string,string,string][][][][][]')
    })

    it('should take a unbounded size multidimensional array and convert it to an type', () => {
      expect(
        TypeScriptHelpers.buildUpMultidimensionalArrayTypes(
          'bytes32[][]',
          'string',
        ),
      ).toEqual('string[][]')
    })
  })

  describe('buildInterface', () => {
    it('should build interface', () => {
      expect(
        TypeScriptHelpers.buildInterface(
          'TestInterface',
          'testProperty: string;',
        ),
      ).toEqual('export interface TestInterface { testProperty: string; }')
    })
  })

  describe('buildType', () => {
    it('should build type', () => {
      expect(
        TypeScriptHelpers.buildType('TestEvents', ['test', 'test2']),
      ).toEqual('export type TestEvents = "test" | "test2";')
    })

    it('should return correct build tuple if no events exist', () => {
      expect(TypeScriptHelpers.buildType('TestEvents', [])).toEqual(
        'export type TestEvents = undefined;',
      )
    })
  })
})
