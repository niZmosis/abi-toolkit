import path from 'path'

import type { GeneratorContext, Library } from '@abi-toolkit/types'
import { capitalize, libraryMap } from '@abi-toolkit/utils'

export class EthersClassFactory {
  public buildClass({
    abiName,
    context,
  }: {
    abiName: string
    context: GeneratorContext
  }): string {
    const {
      library,
      libraryImportAlias,
      verbatimModuleSyntax,
      classMulticall,
    } = context

    const className = `${capitalize(abiName)}Factory`

    const importStatements = this.buildImportStatements({
      abiName,
      library,
      libraryImportAlias,
      verbatimModuleSyntax,
      classMulticall,
      context,
    })

    const classDeclaration = this.buildClassDeclaration({
      className,
      abiName,
      context,
    })

    return `${importStatements}\n\n${classDeclaration}`
  }

  private buildImportStatements({
    abiName,
    // library,
    libraryImportAlias,
    verbatimModuleSyntax,
    classMulticall,
    context,
  }: {
    abiName: string
    library: string
    libraryImportAlias: string
    verbatimModuleSyntax: boolean
    classMulticall: boolean
    context: GeneratorContext
  }): string {
    const imports = []

    // Import the typings
    const typingsImportPath = this.getTypingsImportPath({
      abiName,
      context,
    })
    imports.push(
      `import${
        verbatimModuleSyntax ? ' type' : ''
      } { ${abiName} } from '${typingsImportPath}';`,
    )

    // Import ethers and related types
    imports.push(
      `import${
        verbatimModuleSyntax ? ' type' : ''
      } { Contract, ethers } from '${libraryImportAlias || 'ethers'}';`,
    )

    if (classMulticall) {
      imports.push(
        `import${
          verbatimModuleSyntax ? ' type' : ''
        } { MulticallProviderBase } from '@multicall-toolkit/provider';`,
      )
      imports.push(
        `import${verbatimModuleSyntax ? ' type' : ''} {
  MethodCall,
  ContractDetail,
  MulticallProviderContext,
  Erc20Contract,
  ContractTransactionOverrides,
  ContractDetailToken,
  ContractContextOptions,
  InferredReferencedMethodCalls,
  ContractResults,
} from '@multicall-toolkit/types';`,
      )
    }

    return imports.join('\n')
  }

  private getTypingsImportPath({
    abiName,
    context,
  }: {
    abiName: string
    context: GeneratorContext
  }): string {
    // Determine the relative path from the class output directory to the typings directory
    const classOutputDir = context.classOutputDir || context.typingsOutputDir
    const typingsOutputDir = context.typingsOutputDir

    const relativePath = path.relative(classOutputDir, typingsOutputDir)

    return `${relativePath}/${abiName}`
  }

  private buildClassDeclaration({
    className,
    abiName,
    context,
  }: {
    className: string
    abiName: string
    context: GeneratorContext
  }): string {
    const { classMulticall } = context

    const properties = this.buildClassProperties({ classMulticall })
    const constructor = this.buildConstructor({ abiName, classMulticall })
    const methods = this.buildMethods({ abiName, context })

    return `export class ${className} ${classMulticall ? `extends MulticallProviderBase ` : ''}implements ${capitalize(abiName)}.Contract {
  ${properties}

  ${constructor}

  ${methods}
}`
  }

  private buildClassProperties({
    classMulticall,
  }: {
    classMulticall: boolean
  }): string {
    const properties = []

    properties.push(`protected _contract: ${capitalize('Contract')};`)

    if (classMulticall) {
      properties.push(
        `protected _multicallProvider: MulticallProvider;`,
        `protected _multicallContract: MulticallContract;`,
      )
    }

    return properties.join('\n  ')
  }

  private buildConstructor({
    abiName,
    classMulticall,
  }: {
    abiName: string
    classMulticall: boolean
  }): string {
    const parameters = [
      `private _provider: ethers.providers.Provider`,
      `private _contractAddress: string`,
    ]

    const bodyLines = []

    bodyLines.push(
      `this._contract = new Contract(this._contractAddress, ${abiName}.abi, this._provider);`,
    )

    if (classMulticall) {
      bodyLines.push(
        `this._multicallProvider = new MulticallProvider(this._provider);`,
        `this._multicallContract = new MulticallContract(this._contractAddress, ${abiName}.abi);`,
      )
    }

    return `constructor(
    ${parameters.join(',\n    ')}
  ) {
    ${bodyLines.join('\n    ')}
  }`
  }

  private buildMethods({
    abiName,
    context,
  }: {
    abiName: string
    context: GeneratorContext
  }): string {
    const { abiItems } = context

    const methods = []

    for (const item of abiItems) {
      if (item.type === 'function') {
        const method = this.buildMethod({
          abiItem: item,
          abiName,
          context,
        })
        methods.push(method)
      }
    }

    return methods.join('\n\n  ')
  }

  private buildMethod({
    abiItem,
    // abiName,
    context,
  }: {
    abiItem: any
    abiName: string
    context: GeneratorContext
  }): string {
    const methodName = abiItem.name
    const methodParams = abiItem.inputs || []
    const outputs = abiItem.outputs || []

    const isConstant =
      abiItem.stateMutability === 'view' || abiItem.stateMutability === 'pure'
    // const isPayable = abiItem.stateMutability === 'payable'

    const params = methodParams.map((input: any, index: number) => {
      const inputName = input.name || `param${index}`
      const inputType = this.getInputType(context.library, input)
      return `${inputName}: ${inputType}`
    })

    if (!isConstant) {
      params.push(`overrides?: ethers.CallOverrides`)
    }

    const returnType = this.getReturnType(outputs)

    const methodSignature = `public async ${methodName}(${params.join(
      ', ',
    )}): Promise<${returnType}>`

    const methodBody = `{
    return this._contract.${methodName}(${methodParams
      .map((input: any, index: number) => input.name || `param${index}`)
      .join(', ')}${!isConstant ? ', overrides' : ''});
  }`

    return `${methodSignature} ${methodBody}`
  }

  private getInputType(library: Library, input: any): string {
    // Map Solidity types to TypeScript types
    switch (input.type) {
      case 'uint256':
      case 'uint8':
      case 'int256':
        return 'ethers.BigNumberish'
      case 'address':
        return 'string'
      case 'bool':
        return 'boolean'
      case 'bytes':
      case 'bytes32':
        return library === libraryMap.ethers_v4 ? 'Arrayish' : 'BytesLike'
      case 'string':
        return 'string'
      default:
        return 'any'
    }
  }

  private getReturnType(outputs: any[]): string {
    if (outputs.length === 0) {
      return 'void'
    } else if (outputs.length === 1) {
      return this.getOutputType(outputs[0])
    } else {
      // Return a tuple type
      const types = outputs.map((output: any) => this.getOutputType(output))
      return `[${types.join(', ')}]`
    }
  }

  private getOutputType(output: any): string {
    // Map Solidity types to TypeScript types
    switch (output.type) {
      case 'uint256':
      case 'uint8':
      case 'int256':
        return 'BigNumber'
      case 'address':
        return 'string'
      case 'bool':
        return 'boolean'
      case 'bytes':
      case 'bytes32':
        return 'string'
      case 'string':
        return 'string'
      default:
        return 'any'
    }
  }
}
