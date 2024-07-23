import type { AbiItem, Library } from '@ethereum-abi-types-generator/types'

export abstract class AbstractFactory {
  /**
   * Build generic interfaces
   * @param options - The options for building interfaces
   * @param options.abiName - The ABI name
   * @param options.library - The library version
   * @param options.libraryImportAlias - The library import alias
   * @param options.verbatimModuleSyntax - The verbatim module syntax (add `type` to imports)
   * @returns The library interfaces as a string
   */
  abstract buildInterfaces({
    abiName,
    library,
    libraryImportAlias,
    verbatimModuleSyntax,
  }: {
    abiName: string
    library: Library
    libraryImportAlias?: string
    verbatimModuleSyntax?: boolean
  }): string

  /**
   * Build event interface properties
   * @param options - The options for building event interface properties
   * @param options.abiItems - The ABI items
   * @returns The event interface properties as a string
   */
  abstract buildEventInterfaceProperties({
    abiItems,
  }: {
    abiItems: AbiItem[]
  }): string

  /**
   * Build the method return context
   * @param options - The options for building the method return context
   * @param options.abiName - The ABI name
   * @param options.type - The type it returns
   * @param options.abiItem - The ABI item
   * @returns The method return context as a string
   */
  abstract buildMethodReturnContext({
    abiName,
    type,
    abiItem,
  }: {
    abiName: string
    type: string
    abiItem: AbiItem
  }): string
}
