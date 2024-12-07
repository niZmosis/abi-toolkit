import path from 'path'

import type {
  AbiInput,
  AbiItem,
  AbiOutput,
  GenerateResponse,
  GeneratorContext,
  Rustify,
} from '@abi-toolkit/types'
import {
  abiItemsMap,
  buildExecutingPath,
  capitalize,
  formatAbiName,
  getAbiFileLocationRawName,
  isAcceptsEther,
  isDirectory,
  isEthersLibrary,
  isNeverModifyBlockchainState,
  libraryMap,
  libraryTypes,
  Logger,
  solidityTypeMap,
  buildFileName,
  isQuoteExactMethod,
} from '@abi-toolkit/utils'
import fs from 'fs-extra'

import { EthersFactory } from './ethers-typings.factory'
import { Web3Factory } from './web3-typings.factory'
import TypeScriptHelpers from '../../utils/helpers'

/**
 * Generator class for creating Ethereum ABI typings.
 */
export class TypingsGenerator {
  private _web3Factory = new Web3Factory()
  private _ethersFactory = new EthersFactory()

  // The contexts
  private _parametersAndReturnTypeInterfaces: string[] = []
  private _events: string[] = []
  private _methodNames: string[] = []

  /**
   * Creates a new TypingsGenerator instance.
   *
   * @param _context - The generator context containing configuration options.
   */
  constructor(private _context: GeneratorContext) {}

  /**
   * Generates all the typings.
   *
   * @returns A promise that resolves to the generated response or an error message.
   */
  public async generate(): Promise<Rustify<GenerateResponse, string>> {
    this.clearAllQuotesFromContextInfo()

    if (!isDirectory(this.getOutputPathDirectory())) {
      if (this._context.makeOutputDir) {
        fs.ensureDirSync(this.getOutputPathDirectory())
      } else {
        throw new Error(`Output path must be a directory`)
      }
    }

    const outputLocation = this.buildOutputLocation()

    if (this._context.preventOverwrite && fs.existsSync(outputLocation)) {
      return {
        type: 'mute',
        error: `File ${outputLocation} already exists and preventOverwrite is true. Skipping file generation.`,
      }
    }

    await this.generateCommonTypesFile()

    const fullTypings = this.buildFullTypings({
      abiTypedInterface: this.buildAbiInterface(),
    })

    // const formattedContent = await formatAndLintCode(
    //   fullTypings,
    //   this._context.eslintOptions,
    //   this._context.eslintConfigPath,
    //   this._context.prettierOptions,
    //   this._context.prettierConfigPath,
    // )

    fs.writeFileSync(outputLocation, fullTypings, {
      mode: 0o755,
    })

    this.clearState()

    if (this._context.watch) {
      this.watchForChanges()
    }

    return {
      type: 'ok',
      value: {
        abiName: this.getAbiName(true),
        outputLocation,
        abiFileLocation: this.getAbiFileFullPathLocation(),
        content: fullTypings,
      },
    }
  }

  /**
   * Clear all quote strings from the context file info
   */
  private clearAllQuotesFromContextInfo(): void {
    this._context.inputPath = this._context.inputPath.replace(/\'/g, '')
    if (this._context.typingsOutputDir) {
      this._context.typingsOutputDir = this._context.typingsOutputDir.replace(
        /\'/g,
        '',
      )
    }
  }

  /**
   * Clear the state down
   */
  private clearState(): void {
    this._parametersAndReturnTypeInterfaces = []
    this._events = []
    this._methodNames = []
  }

  /**
   * Watch for ABI file changes
   */
  private watchForChanges(): void {
    // Don't let anymore watches happen once the first one is registered
    this._context.watch = false
    let fsWait = false
    fs.watch(this.getAbiFileFullPathLocation(), (_event, filename) => {
      if (filename) {
        if (fsWait) return
        setTimeout(() => {
          fsWait = false
        }, 100)

        const outputLocation = this.generate()
        Logger.log(
          `Successfully updated typings for abi file ${this.getAbiFileFullPathLocation()} saved in ${outputLocation}`,
        )
      }
    })
  }

  /**
   * Get the output path directory
   * @returns The output path directory.
   */
  private getOutputPathDirectory(): string {
    if (this._context.typingsOutputDir) {
      return this._context.typingsOutputDir
    }

    return path.dirname(this.getAbiFileFullPathLocation())
  }

  /**
   * Build output location
   * @returns The output location.
   */
  private buildOutputLocation(): string {
    const name =
      this._context.typingsOutputFileName ||
      getAbiFileLocationRawName(this._context.inputPath)

    // Remove the `.abi` extension if it exists to prevent something like 'my-contract.abi.types.ts'
    const fileName = this._context.typingsOutputFileSuffix
      ? name.replace('.abi', '')
      : name

    const typingsOutputDir = this.getOutputPathDirectory()

    if (typingsOutputDir.substring(typingsOutputDir.length - 1) === '/') {
      return `${typingsOutputDir}${buildFileName({
        fileName,
        suffix: this._context.typingsOutputFileSuffix,
        extension: 'ts',
      })}`
    }

    return buildExecutingPath(
      `${typingsOutputDir}/${buildFileName({
        fileName,
        suffix: this._context.typingsOutputFileSuffix,
        extension: 'ts',
      })}`,
    )
  }

  /**
   * Build the full typings
   * @param abiTypedInterface The abi typed interface
   * @returns The full typings.
   */
  private buildFullTypings({
    abiTypedInterface,
  }: {
    abiTypedInterface: string
  }): string {
    const { library, libraryImportAlias, verbatimModuleSyntax } =
      this._context ?? {}

    let typings = ''

    switch (library) {
      case 'web3':
        typings += this._web3Factory.buildInterfaces({
          abiName: this.getAbiName(),
          library,
          libraryImportAlias,
          verbatimModuleSyntax,
        })
        break
      case 'ethers_v4':
      case 'ethers_v5':
      case 'ethers_v6':
        typings += this._ethersFactory.buildInterfaces({
          abiName: this.getAbiName(),
          library,
          libraryImportAlias,
          verbatimModuleSyntax,
        })
        break
      default:
        throw new Error(`${library} is not a known supported library`)
    }

    return (
      typings +
      this.buildEventsType() +
      this.buildEventsInterface() +
      this.buildMethodNamesType() +
      this.buildParametersAndReturnTypeInterfaces() +
      abiTypedInterface
    )
  }

  /**
   * Generate the common.types.ts file
   */
  private async generateCommonTypesFile(): Promise<void> {
    const {
      library,
      verbatimModuleSyntax,
      libraryImportAlias,
      typingsOutputFileSuffix,
    } = this._context

    let importType = ''

    switch (library) {
      case 'web3':
        importType = `import${verbatimModuleSyntax ? ' type' : ''} { BigNumber } from 'bignumber.js'
        import${verbatimModuleSyntax ? ' type' : ''} BN from 'bn.js'
        import${verbatimModuleSyntax ? ' type' : ''} { PromiEvent, TransactionReceipt } from "@abi-toolkit/converter-typescript";`
        break
      case 'ethers_v4':
        importType = `import${verbatimModuleSyntax ? ' type' : ''} { BigNumber } from '${libraryImportAlias || 'ethers'}/utils'`
        break
      case 'ethers_v5':
        importType = `import${verbatimModuleSyntax ? ' type' : ''} { BigNumber } from '${libraryImportAlias || 'ethers'}'`
        break
      case 'ethers_v6':
        // V6 uses bigint
        break
    }

    let content = ''

    switch (library) {
      case 'web3':
        content = `export type CallOptions = {
  from?: string
  gasPrice?: string
  gas?: number
}

export type SendOptions = {
  from: string
  value?: number | string | BN | BigNumber
  gasPrice?: string
  gas?: number
}

export type EstimateGasOptions = {
  from?: string
  value?: number | string | BN | BigNumber
  gas?: number
}

export type MethodPayableReturnContext = {
  send(options: SendOptions): PromiEvent<TransactionReceipt>
  send(
    options: SendOptions,
    callback: (error: Error, result: any) => void,
  ): PromiEvent<TransactionReceipt>
  estimateGas(options: EstimateGasOptions): Promise<number>
  estimateGas(
    options: EstimateGasOptions,
    callback: (error: Error, result: any) => void,
  ): Promise<number>
  encodeABI(): string
}

export type MethodConstantReturnContext<TCallReturn> = {
  call(): Promise<TCallReturn>
  call(options: CallOptions): Promise<TCallReturn>
  call(
    options: CallOptions,
    callback: (error: Error, result: TCallReturn) => void,
  ): Promise<TCallReturn>
  encodeABI(): string
}

export type MethodReturnContext = MethodPayableReturnContext`
        break
      case 'ethers_v4':
      case 'ethers_v5':
      case 'ethers_v6':
        content = `export declare type EventFilter = {
      address?: string;
      topics?: string[];
      fromBlock?: string | number;
      toBlock?: string | number;
    };

    export type ContractTransactionOverrides = {
      /**
       * The maximum units of gas for the transaction to use
       */
      gasLimit?: number;
      /**
       * The price (in wei) per unit of gas
       */
      gasPrice?: ${library === libraryMap.ethers_v6 ? 'bigint' : 'BigNumber'} | string | number | Promise<any>;
      /**
       * The nonce to use in the transaction
       */
      nonce?: number;
      /**
       * The amount to send with the transaction (i.e. msg.value)
       */
      value?: ${library === libraryMap.ethers_v6 ? 'bigint' : 'BigNumber'} | string | number | Promise<any>;
      /**
       * The chain ID (or network ID) to use
       */
      chainId?: number;
    }

    export type ContractCallOverrides = {
      /**
       * The address to execute the call as
       */
      from?: string;
      /**
       * The maximum units of gas for the transaction to use
       */
      gasLimit?: number;
    }`
        break
    }

    const commonTypesContent = `${importType}
    
    ${content}`

    const typingsOutputDir = this.getOutputPathDirectory()
    const commonTypesPath = path.join(
      typingsOutputDir,
      buildFileName({
        fileName: 'common',
        suffix: typingsOutputFileSuffix,
        extension: 'ts',
      }),
    )
    // const formattedContent = await formatAndLintCode(
    //   commonTypesContent,
    //   this._context.eslintOptions,
    //   this._context.eslintConfigPath,
    //   this._context.prettierOptions,
    //   this._context.prettierConfigPath,
    // )

    fs.writeFileSync(commonTypesPath, commonTypesContent, {
      mode: 0o755,
    })
  }

  /**
   * Get the abi file full path location with executing path
   */
  private getAbiFileFullPathLocation(): string {
    return buildExecutingPath(this._context.inputPath)
  }

  /**
   * Build abi interface
   * @param abi The abi json
   * @returns The abi interface.
   */
  private buildAbiInterface(): string {
    const abiItems = this._context.abiItems
    let properties = ''

    for (let i = 0; i < abiItems.length; i++) {
      const abiItem = abiItems[i]

      if (!abiItem) {
        continue
      }

      switch (abiItem.type) {
        case abiItemsMap.constructor:
          properties += this.buildInterfacePropertyDocs(abiItem)
          this._methodNames.push('new')
          properties += `'new'${this.buildParametersAndReturnTypes(abiItem)};`
          break

        case abiItemsMap.function:
          properties += this.buildInterfacePropertyDocs(abiItem)
          this._methodNames.push(abiItem.name)
          properties += `${abiItem.name}${this.buildParametersAndReturnTypes(abiItem)};`
          break

        case abiItemsMap.event:
          const eventInputs = abiItem.inputs

          if (eventInputs && eventInputs.length > 0) {
            const eventInterfaceName = `${capitalize(abiItem.name)}EventEmittedResponse`

            let eventTypeProperties = ''

            for (let e = 0; e < eventInputs.length; e++) {
              const abiInput = eventInputs[e]

              if (!abiInput) {
                continue
              }

              const eventTsType = TypeScriptHelpers.getSolidityInputTsType({
                abiInput,
                library: this._context.library,
                suffix: 'EventEmittedResponse',
              })

              eventTypeProperties += `${abiInput.name || `param${e}`}: ${eventTsType};`

              if (abiInput.type === solidityTypeMap.tuple) {
                this.buildTupleParametersInterface({
                  nameOverride: `event_${abiItem.name}`,
                  abiInput,
                  suffix: 'EventEmittedResponse',
                })
              }
            }

            this.addReturnTypeInterface({
              interfaceName: eventInterfaceName,
              interfaceContext: eventTypeProperties,
            })
          }

          this._events.push(abiItem.name)

          break
      }
    }

    return TypeScriptHelpers.buildInterface(this.getAbiName(), properties)
  }

  /**
   * Get abi name
   * @param force - Whether to force the name to be generated.
   * @returns The abi name.
   */
  private getAbiName(force: boolean = false): string {
    if (
      !force &&
      (!this._context.typingsPrefixTypes || this._context.typingsPrefixTypes)
    ) {
      return ''
    }

    if (this._context.typingsOutputFileName) {
      return formatAbiName(this._context.typingsOutputFileName)
    }

    return formatAbiName(getAbiFileLocationRawName(this._context.inputPath))
  }

  /**
   * Build method names types
   * @returns The method names type.
   */
  private buildMethodNamesType(): string {
    // Makes a type with all the method names as strings
    const methodNamesType = TypeScriptHelpers.buildType(
      `${this.getAbiName()}MethodNames`,
      Array.from(new Set(this._methodNames)),
    )

    // Makes a mapping type for the method names
    const methodNameMap = `export type ${this.getAbiName()}MethodNameMap = {
      [key in ${this.getAbiName()}MethodNames]: string;
    };`

    return `${methodNamesType}\n${methodNameMap}`
  }

  /**
   * Build the parameters and return type interface if they accept an object of some form
   * @returns The parameters and return type interface.
   */
  private buildParametersAndReturnTypeInterfaces(): string {
    let parametersAndReturnTypes = ''

    this._parametersAndReturnTypeInterfaces.map((typeInterface) => {
      parametersAndReturnTypes += typeInterface
    })

    return parametersAndReturnTypes
  }

  /**
   * Build events type
   * @returns The events type.
   */
  private buildEventsType(): string {
    return TypeScriptHelpers.buildType(
      `${this.getAbiName()}Events`,
      this._events,
    )
  }

  /**
   * Build the event context interface
   * @returns The event context interface.
   */
  private buildEventsInterface(): string {
    const abiItems = this._context.abiItems
    const eventsInterfaceName = `${this.getAbiName()}EventsContext`

    switch (this._context.library) {
      case 'web3':
        return TypeScriptHelpers.buildInterface(
          eventsInterfaceName,
          this._web3Factory.buildEventInterfaceProperties({
            abiItems,
          }),
        )
      case 'ethers_v4':
      case 'ethers_v5':
      case 'ethers_v6':
        return TypeScriptHelpers.buildInterface(
          eventsInterfaceName,
          this._ethersFactory.buildEventInterfaceProperties({
            library: this._context.library,
            abiItems,
          }),
        )
      default:
        throw new Error(
          `${this._context.library} is not a known supported library. Supported libraries are ${libraryTypes.join(
            ', ',
          )}`,
        )
    }
  }

  /**
   * Build the abi property summaries
   * @param abiItem The abi json
   * @returns The abi property summaries.
   */
  private buildInterfacePropertyDocs(abiItem: AbiItem): string {
    let paramsDocs = ''

    if (abiItem.inputs) {
      for (let i = 0; i < abiItem.inputs.length; i++) {
        const abiInput = abiItem.inputs[i]

        if (!abiInput) {
          continue
        }

        let inputName = abiInput.name
        // handle mapping inputs
        if (inputName.length === 0) {
          inputName = `parameter${i}`
        }

        paramsDocs += `\r\n* @param ${inputName} Type: ${
          abiInput.type
        }, Indexed: ${abiInput.indexed || 'false'}`
      }
    }

    return `
         /**
            * Payable: ${isAcceptsEther(abiItem)}
            * Constant: ${isNeverModifyBlockchainState(abiItem)}
            * StateMutability: ${abiItem.stateMutability}
            * Type: ${abiItem.type} ${paramsDocs}
          */
        `
  }

  /**
   * Builds the input and output property type
   * @param abiItem The abi json
   */
  private buildParametersAndReturnTypes(abiItem: AbiItem): string {
    const parameters = this.buildParameters(abiItem)
    return `${parameters}${this.buildPropertyReturnTypeInterface(abiItem)}`
  }

  /**
   * Build parameters for abi interface
   * @param abiItem The abi item
   * @returns The parameters for the abi interface.
   */
  private buildParameters(abiItem: AbiItem): string {
    let input = '('
    if (abiItem.inputs) {
      for (let i = 0; i < abiItem.inputs.length; i++) {
        const abiInput = abiItem.inputs[i]

        if (!abiInput) {
          continue
        }

        if (input.length > 1) {
          input += ', '
        }

        let inputName = abiInput.name
        // handle mapping inputs
        if (inputName.length === 0) {
          inputName = `parameter${i}`
        }

        if (abiInput.type.includes(solidityTypeMap.tuple)) {
          input += `${inputName}: ${this.buildTupleParametersInterface({
            nameOverride: inputName,
            abiInput,
            suffix: 'Request',
            methodName: abiItem.name,
          })}`
        } else {
          input += `${inputName}: ${TypeScriptHelpers.getSolidityInputTsType({
            abiInput,
            library: this._context.library,
            suffix: 'Request',
          })}`
        }
      }
    }

    // Ethers allows you to pass in overrides in methods so add that in here
    if (isEthersLibrary(this._context.library)) {
      input = this._ethersFactory.addOverridesToParameters({
        parameters: input,
        abiItem,
      })
    }

    return (input += ')')
  }

  /**
   * Build the tuple parameters interface
   * @param nameOverride The abi item name
   * @param abiInput The abi input
   * @param suffix The suffix
   * @param methodName The method name
   * @returns The object request parameter interface.
   */
  private buildTupleParametersInterface({
    abiInput,
    nameOverride,
    suffix = 'Request',
    methodName,
  }: {
    abiInput: AbiInput
    nameOverride: string
    suffix?: 'Request' | 'EventEmittedResponse'
    methodName?: string
  }): string {
    const interfaceName = TypeScriptHelpers.buildInterfaceName({
      inputOrOutput: abiInput,
      nameOverride,
      suffix,
      methodName,
    })

    let properties = ''

    if (!abiInput.components) {
      throw new Error(
        `No components found for tuple ${abiInput.type} in ${methodName}`,
      )
    }

    // Iterate over all components in the tuple
    for (let i = 0; i < abiInput.components.length; i++) {
      const component = abiInput.components[i]

      if (!component) {
        continue
      }

      const isNestedTuple = !!component?.components

      if (isNestedTuple) {
        const componentName = component.name || `result${i}`

        // Make a new interface for the nested tuple
        const nestedInterfaceName = this.buildTupleParametersInterface({
          nameOverride: componentName,
          abiInput: component,
          suffix,
          methodName,
        })

        // Add the nested tuple as a property to the current interface
        properties += `${componentName}: ${nestedInterfaceName};\n`
      } else {
        const inputTsType = TypeScriptHelpers.getSolidityInputTsType({
          abiInput: component,
          library: this._context.library,
          suffix,
          methodName,
        })

        // Add the property to the current interface
        properties += `${component.name}: ${inputTsType};\n`
      }
    }

    // Add the interface to the return types
    this.addReturnTypeInterface({
      interfaceName,
      interfaceContext: properties,
    })

    if (abiInput.type.includes('[')) {
      return `${interfaceName}[]`
    }

    return interfaceName
  }

  /**
   * Build the object response parameter interface
   * @param abiOutput The abi output
   * @param methodName The method name
   * @returns The object response parameter interface.
   */
  private buildTupleResponseInterface({
    abiOutput,
    methodName,
  }: {
    abiOutput: AbiOutput
    methodName?: string
  }): string {
    const interfaceName = TypeScriptHelpers.buildInterfaceName({
      inputOrOutput: abiOutput,
      suffix: 'Response',
      methodName,
    })

    let properties = ''

    // Iterate over all components in the tuple
    for (let i = 0; i < abiOutput.components!.length; i++) {
      const component = abiOutput.components?.[i]

      if (!component) {
        continue
      }

      const isNestedTuple = !!component.components

      if (isNestedTuple) {
        const componentName = component.name || `result${i}`

        // Make a new interface for the nested tuple
        const nestedInterfaceName = this.buildTupleResponseInterface({
          abiOutput: component,
          methodName,
        })

        // Add the nested tuple as a property to the current interface
        properties += `${componentName}: ${nestedInterfaceName};\n`

        // Add numeric index for ethers
        if (isEthersLibrary(this._context.library)) {
          properties += `${i}: ${nestedInterfaceName};\n`
        }
      } else {
        const outputTsType = TypeScriptHelpers.getSolidityOutputTsType({
          abiOutput: component,
          library: this._context.library,
        })

        // Add named property
        properties += `${component.name}: ${outputTsType};\n`

        // Add numeric index for ethers
        if (isEthersLibrary(this._context.library)) {
          properties += `${i}: ${outputTsType};\n`
        }
      }
    }

    // Add the interface to the return types
    this.addReturnTypeInterface({
      interfaceName,
      interfaceContext: properties,
    })

    if (abiOutput.type.includes('[')) {
      return `${interfaceName}[]`
    }

    return interfaceName
  }

  /**
   * Build property return type interface and return the return type context
   * @param abiItem The abi json
   * @returns The property return type interface.
   */
  private buildPropertyReturnTypeInterface(abiItem: AbiItem): string {
    let output = ''

    if (abiItem.outputs && abiItem.outputs.length > 0) {
      // Case 1: Single Output
      if (abiItem.outputs.length === 1) {
        const abiOutput = abiItem.outputs[0]

        if (!abiOutput) {
          return ''
        }

        output += this.buildMethodReturnContext({
          abiName: this.getAbiName(),
          type: TypeScriptHelpers.getSolidityOutputTsType({
            abiOutput,
            library: this._context.library,
          }),
          abiItem,
        })

        if (abiOutput.type.includes(solidityTypeMap.tuple)) {
          this.buildTupleResponseInterface({
            abiOutput,
            methodName: abiItem.name,
          })
        }
      }
      // Case 2: Multiple Outputs
      else {
        if (
          isNeverModifyBlockchainState(abiItem) ||
          isQuoteExactMethod(abiItem)
        ) {
          const interfaceName = `${abiItem.name.charAt(0).toUpperCase()}${abiItem.name.slice(1)}Response`

          let outputProperties = ''

          for (let i = 0; i < abiItem.outputs.length; i++) {
            const abiOutput = abiItem.outputs[i]

            if (!abiOutput) {
              continue
            }

            const outputTsType = TypeScriptHelpers.getSolidityOutputTsType({
              abiOutput,
              library: this._context.library,
            })

            let propertyName = abiOutput.name
            if (propertyName.length === 0) {
              propertyName = `result${i}`
            }

            outputProperties += `${propertyName}: ${outputTsType};\n`

            // Add numeric index for ethers
            if (isEthersLibrary(this._context.library)) {
              outputProperties += `${i}: ${outputTsType};\n`
            }

            if (abiOutput.type.includes(solidityTypeMap.tuple)) {
              this.buildTupleResponseInterface({
                abiOutput,
                methodName: abiItem.name,
              })
            }
          }

          // Add length property for ethers with multiple outputs
          if (isEthersLibrary(this._context.library)) {
            outputProperties += `length: ${abiItem.outputs.length};\n`
          }

          // Create the interface for multiple outputs
          this.addReturnTypeInterface({
            interfaceName,
            interfaceContext: outputProperties,
          })

          // Build return context
          output += this.buildMethodReturnContext({
            abiName: this.getAbiName(),
            type: interfaceName,
            abiItem,
          })
        } else {
          // Non-constant functions with multiple outputs just get the basic return context
          output += this.buildMethodReturnContext({
            abiName: this.getAbiName(),
            type: '',
            abiItem,
          })
        }
      }
    }
    // Case 3: No Outputs
    else {
      output += this.buildMethodReturnContext({
        abiName: this.getAbiName(),
        type: 'void',
        abiItem,
      })
    }

    return output
  }

  /**
   * add return type interfaces
   * @param interfaceName The interface name
   * @param interfaceContext The interface context
   */
  private addReturnTypeInterface({
    interfaceName,
    interfaceContext,
  }: {
    interfaceName: string
    interfaceContext: string
  }): void {
    // filter out any repeated interfaces
    if (
      !this._parametersAndReturnTypeInterfaces.find((c) =>
        c.includes(`export interface ${interfaceName}`),
      )
    ) {
      this._parametersAndReturnTypeInterfaces.push(
        TypeScriptHelpers.buildInterface(interfaceName, interfaceContext),
      )
    }
  }

  /**
   * Build the method return context
   * @param options - The options for building the method return context
   * @param options.abiName - The ABI name
   * @param options.type - The type it returns
   * @param options.abiItem - The ABI item
   * @returns The method return context as a string
   */
  private buildMethodReturnContext({
    abiName,
    type,
    abiItem,
  }: {
    abiName: string
    type: string
    abiItem: AbiItem
  }): string {
    switch (this._context.library) {
      case 'web3':
        return this._web3Factory.buildMethodReturnContext({
          abiName,
          type,
          abiItem,
        })
      case 'ethers_v4':
      case 'ethers_v5':
      case 'ethers_v6':
        return this._ethersFactory.buildMethodReturnContext({
          abiName,
          type,
          abiItem,
        })
      default:
        throw new Error(
          `${this._context.library} is not a known supported library`,
        )
    }
  }
}
