import type { EatConfigContext } from '@abi-toolkit/types'
import type { ESLint } from 'eslint'
import type { Options as PrettierOptions } from 'prettier'

export const defaultOutputDir = './ethereum-abi-types'
export const defaultClassOutputDir = './ethereum-abi-classes'

export const defaultConfigFileName = 'eat.config.json'

export const defaultConfigArgs: EatConfigContext = {
  inputDirOrPath: '',
  library: 'web3',
  libraryImportAlias: '',
  framework: 'none',
  makeOutputDir: true,
  makeIndexFile: true,
  watch: false,
  includeFiles: [],
  excludeFiles: [],
  language: 'ts',
  preventOverwrite: false,
  verbatimModuleSyntax: true,
  eslintConfigPath: '',
  prettierConfigPath: '',
  eslintOptions: {},
  prettierOptions: {},

  // Typings
  typingsOutputDir: defaultOutputDir,
  typingsOutputFileName: '',
  typingsOutputFileSuffix: 'types',
  typingsPrefixTypes: false,

  // Classes
  generateClasses: false,
  classOutputDir: defaultClassOutputDir,
  classOutputFileName: '',
  classOutputFileSuffix: 'contract',
  classMulticall: false,
}

export const defaultPrettierConfig: PrettierOptions = {
  parser: 'typescript',
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  bracketSpacing: true,
}

export const defaultEslintOptions: ESLint.Options = {
  fix: true,
  baseConfig: {
    root: true,
    extends: ['plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    // parserOptions: {
    //   // workingDirectories: [path.resolve(__dirname)],
    //   // ecmaVersion: 'latest',
    //   // sourceType: 'module',
    //   // tsconfigRootDir: path.resolve(
    //   //   __dirname,
    //   //   '../common/formatters/default-configs',
    //   // ),
    //   // project: path.resolve(
    //   //   __dirname,
    //   //   '../common/formatters/default-configs/tsconfig.json',
    //   // ),
    //   tsconfigRootDir: path.resolve(__dirname, './formatters/default-configs'),
    // },
    plugins: ['@typescript-eslint', 'import', 'unused-imports'],
    rules: {
      'object-shorthand': ['error', 'always'],
      'import/prefer-default-export': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['sibling', 'parent'],
            'index',
            'object',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-*',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-unresolved': 'error',
      'import/newline-after-import': 'error',
      'unused-imports/no-unused-imports': 'error',
    },
  },
}
