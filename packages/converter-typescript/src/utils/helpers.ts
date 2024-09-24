import type {
  Library,
  AbiInput,
  AbiOutput,
} from '@ethereum-abi-types-generator/types'
import type { SolidityNumberType } from '@ethereum-abi-types-generator/types'
import {
  capitalize,
  solidityTypeMap,
} from '@ethereum-abi-types-generator/utils'

export default class TypeScriptHelpers {
  public static getSolidityInputTsTypeByTypeName(
    type: string,
    library: Library,
  ): string {
    return this.getSolidityInputTsType({
      abiInput: { type } as any,
      library,
      suffix: 'Request',
    })
  }

  /**
   * Get the solidity input type mapped to typescript type
   * @param type The solidity type
   */
  public static getSolidityInputTsType({
    methodName,
    abiInput,
    library,
    suffix,
  }: {
    methodName?: string
    abiInput: AbiInput
    library: Library
    suffix: 'Request' | 'EventEmittedResponse'
  }): string {
    switch (library) {
      case 'web3':
        {
          if (abiInput.type.includes(solidityTypeMap.bytes)) {
            if (abiInput.type.includes('[')) {
              return this.buildUpMultidimensionalArrayTypes(
                abiInput.type,
                'string | number[]',
              )
            }

            return 'string | number[]'
          }

          if (
            abiInput.type.includes(solidityTypeMap.uint) ||
            abiInput.type.includes(solidityTypeMap.int)
          ) {
            if (abiInput.type.includes(solidityTypeMap.uint)) {
              const numberType = this.buildWeb3NumberType(
                abiInput.type,
                solidityTypeMap.uint,
              )

              if (abiInput.type.includes('[')) {
                return this.buildUpMultidimensionalArrayTypes(
                  abiInput.type,
                  numberType,
                )
              }

              return numberType
            }

            if (abiInput.type.includes(solidityTypeMap.int)) {
              const numberType = this.buildWeb3NumberType(
                abiInput.type,
                solidityTypeMap.int,
              )

              if (abiInput.type.includes('[')) {
                return this.buildUpMultidimensionalArrayTypes(
                  abiInput.type,
                  numberType,
                )
              }

              return numberType
            }
          }
        }
        break
      case 'ethers_v4':
      case 'ethers_v5':
      case 'ethers_v6':
        {
          if (abiInput.type.includes(solidityTypeMap.bytes)) {
            if (abiInput.type.includes('[')) {
              return this.buildUpMultidimensionalArrayTypes(
                abiInput.type,
                'Arrayish',
              )
            }

            return 'Arrayish'
          }

          if (
            abiInput.type.includes(solidityTypeMap.uint) ||
            abiInput.type.includes(solidityTypeMap.int)
          ) {
            if (abiInput.type.includes('[')) {
              return this.buildUpMultidimensionalArrayTypes(
                abiInput.type,
                'BigNumberish',
              )
            }

            return 'BigNumberish'
          }
        }
        break
    }

    if (abiInput.type.includes(solidityTypeMap.bool)) {
      if (abiInput.type.includes('[')) {
        return this.buildUpMultidimensionalArrayTypes(abiInput.type, 'boolean')
      }
      return 'boolean'
    }

    // always fall back to hex string if something goes nuts in the ABI
    // should not happen but good having some fallback
    if (
      abiInput.type.includes(solidityTypeMap.address) ||
      abiInput.type.includes(solidityTypeMap.uint) ||
      abiInput.type.includes(solidityTypeMap.bytes) ||
      abiInput.type.includes(solidityTypeMap.string) ||
      abiInput.type.includes(solidityTypeMap.int)
    ) {
      if (abiInput.type.includes('[')) {
        return this.buildUpMultidimensionalArrayTypes(abiInput.type, 'string')
      }

      return 'string'
    }

    if (abiInput.type.includes(solidityTypeMap.tuple)) {
      const interfaceName = this.buildInterfaceName({
        inputOrOutput: abiInput,
        suffix,
        methodName,
      })
      if (abiInput.type.includes('[')) {
        return `${interfaceName}[]`
      }

      return interfaceName
    }

    throw new Error(`${abiInput.type} is not valid solidty type`)
  }

  /**
   * Get the solidity type mapped to typescript type
   * @param abiOutput The abi output type
   * @param library The library
   */
  public static getSolidityOutputTsType({
    abiOutput,
    library,
  }: {
    abiOutput: AbiOutput
    library: Library
  }): string {
    // any bespoke library output type logic
    switch (library) {
      case 'ethers_v4':
      case 'ethers_v5':
      case 'ethers_v6': {
        if (
          abiOutput.type.includes(solidityTypeMap.uint) ||
          abiOutput.type.includes(solidityTypeMap.int)
        ) {
          if (abiOutput.type.includes(solidityTypeMap.uint)) {
            const numberType = this.buildEthersNumberType(
              abiOutput.type,
              solidityTypeMap.uint,
              library,
            )

            if (abiOutput.type.includes('[')) {
              return this.buildUpMultidimensionalArrayTypes(
                abiOutput.type,
                numberType,
              )
            }

            return numberType
          }

          if (abiOutput.type.includes(solidityTypeMap.int)) {
            const numberType = this.buildEthersNumberType(
              abiOutput.type,
              solidityTypeMap.int,
              library,
            )

            if (abiOutput.type.includes('[')) {
              return this.buildUpMultidimensionalArrayTypes(
                abiOutput.type,
                numberType,
              )
            }

            return numberType
          }
        }
      }
    }

    if (abiOutput.type.includes(solidityTypeMap.tuple)) {
      const interfaceName = this.buildInterfaceName({
        inputOrOutput: abiOutput,
        suffix: 'Response',
      })
      if (abiOutput.type.includes('[')) {
        return `${interfaceName}[]`
      }

      return interfaceName
    }

    if (abiOutput.type.includes(solidityTypeMap.bool)) {
      if (abiOutput.type.includes('[')) {
        return this.buildUpMultidimensionalArrayTypes(abiOutput.type, 'boolean')
      }
      return 'boolean'
    }

    if (
      abiOutput.type.includes(solidityTypeMap.address) ||
      abiOutput.type.includes(solidityTypeMap.string) ||
      abiOutput.type.includes(solidityTypeMap.bytes) ||
      abiOutput.type.includes(solidityTypeMap.uint) ||
      abiOutput.type.includes(solidityTypeMap.int)
    ) {
      if (abiOutput.type.includes('[')) {
        return this.buildUpMultidimensionalArrayTypes(abiOutput.type, 'string')
      }

      return 'string'
    }

    throw new Error(`${abiOutput.type} is not valid solidty type 1`)
  }

  /**
   * Build response interface name
   * @param inputOrOutput The input or output
   * @param nameOverride The name override
   * @param suffix The suffix
   * @param methodName The method name
   */
  public static buildInterfaceName({
    inputOrOutput,
    nameOverride,
    suffix,
    methodName = '',
  }: {
    inputOrOutput: AbiOutput | AbiInput
    nameOverride?: string
    suffix?: 'Request' | 'Response' | 'EventEmittedResponse'
    methodName?: string
  }): string {
    const name = nameOverride || inputOrOutput.name

    if (name.length > 0) {
      return `${methodName ? capitalize(methodName) : ''}${capitalize(name)}${suffix || ''}`
    }

    if (!inputOrOutput.internalType) {
      throw new Error(
        `All tuple types need a name or a internal type else the tool can not generate static naming for the responses please check all your tuple and tuple[] have got a name or a internal type. - ${JSON.stringify(
          inputOrOutput,
        )}`,
      )
    }

    const internalType = structuredClone(inputOrOutput.internalType)

    return `${capitalize(
      internalType
        .substring(internalType.indexOf('.'))
        .replace('struct', '')
        .replace('.', '')
        .replace('[', '')
        .replace(']', '')
        .replace(/\s/g, ''),
    )}Response`
  }

  /**
   * Build ethers number type
   * @param type The ABI type
   * @param solidityType The solidity type
   */
  private static buildEthersNumberType(
    type: string,
    solidityType: SolidityNumberType,
    library: Library,
  ): 'number' | 'BigNumber' | 'bigint' {
    const clonedType = structuredClone(type)

    const bits = clonedType.replace(solidityType, '').split('[')[0]
    const totalBits = Number(bits)
    if (bits.length > 0 && !isNaN(totalBits)) {
      if (library === 'ethers_v6') {
        return totalBits <= 48 ? 'number' : 'bigint'
      }
      return totalBits <= 48 ? 'number' : 'BigNumber'
    }

    return library === 'ethers_v6' ? 'bigint' : 'BigNumber'
  }

  /**
   * Build web3 number type
   * @param type The ABI type
   * @param solidityType The solidity type
   */
  private static buildWeb3NumberType(
    type: string,
    solidityType: SolidityNumberType,
  ): 'string | number' | 'string' {
    const clonedType = structuredClone(type)

    const bits = clonedType.replace(solidityType, '').split('[')[0]
    const totalBits = Number(bits)
    if (bits.length > 0 && !isNaN(totalBits)) {
      return totalBits <= 48 ? 'string | number' : 'string'
    }

    return 'string'
  }

  /**
   * Build up multidimensional array types
   * Typescript does not support syntax `[string, string][string, string]`
   * so we can only strongly type the fixed length of the first array
   * for example `bytes32[4][][2][][9][]` > `[string,string,string,string,string][][][][][]`
   * is you have any other fixed size arrays passed dimension it will have to generate a unbounded
   * array size aka `bytes32[][4] > `string[][]`
   * @param abiType The ABI type in the json
   * @param tsType The typescript type
   */
  public static buildUpMultidimensionalArrayTypes(
    abiType: string,
    tsType: string,
  ): string {
    const split = abiType.split('[')
    split.shift()
    let buildType = ''
    for (let i = 0; i < split.length; i++) {
      // we can only put fixed sizes on the first fixed length
      // array rest has to be `[]` due to TS limited support
      if (i === 0 && split[i].length > 1) {
        const arrayLength = Number(split[i].split(']')[0])
        let index = 0
        buildType = '['
        while (index <= arrayLength) {
          if (index === arrayLength) {
            buildType += `${tsType}`
            index++
          } else {
            buildType += `${tsType},`
            index++
          }
        }

        buildType += ']'
      } else {
        if (i === 0) {
          buildType += `${tsType}[]`
        } else {
          buildType += '[]'
        }
      }
    }

    return buildType
  }

  /**
   * Generates an interface
   * @param interfaceName The interface name
   * @param interfaceContext The interface context
   */
  public static buildInterface(
    interfaceName: string,
    interfaceContext: string,
  ): string {
    return `export interface${interfaceName ? ` ${interfaceName}` : ' Contract'} { ${interfaceContext} }`
  }

  /**
   * Build type
   * @param typeName The type name
   * @param types The types
   */
  public static buildType(typeName: string, types: string[]): string {
    let result = ''

    types.map((type) => {
      if (result.length > 0) {
        result += ' | '
      }
      result += `"${type}"`
    })

    if (result.length === 0) {
      result += 'undefined'
    }

    return `export type ${typeName} = ${result};`
  }
}
