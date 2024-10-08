# ethereum-abi-types-generator

[![npm version](https://badge.fury.io/js/ethereum-abi-types-generator.svg)](https://badge.fury.io/js/ethereum-abi-types-generator)
![downloads](https://img.shields.io/npm/dw/ethereum-abi-types-generator)

Generate TypeScript typings for all your Ethereum ABI contract methods and events with 1-liner integrations for `web3` and `ethers`. Never have runtime errors again - bring them into compile-time errors in 2 minutes! 🎉

![GIF Demo](./images/gif-demo.gif)

A CLI tool that allows you to convert an ABI JSON file into fully loaded interface types.

## Table of Contents

- [Features](#features)
- [Supported Libraries / Frameworks](#supported-libraries--frameworks)
- [Installation](#installation)
- [Tsconfig Compile Time Issues](#tsconfig-compile-time-issues)
- [Usage](#usage)
  - [Common Options](#common-options)
    - [Configuration](#configuration)
    - [Input/Output](#inputoutput)
    - [Library Options](#library-options)
    - [Framework Options](#framework-options)
    - [Generation Options](#generation-options)
    - [Watching Options](#watching-options)
    - [File Inclusion/Exclusion](#file-inclusionexclusion)
    - [Formatting Options](#formatting-options)
- [Generator CLI](#generator-cli)
  - [Available Commands](#available-commands)
  - [CLI Examples](#cli-examples)
- [Generator Configuration File](#generator-configuration-file)
- [Using with Hardhat/Truffle](#using-with-hardhattruffle)
- [Test Example](#test-example)
- [Using Web3](#using-web3)
  - [Uniswap Full Example](#uniswap-full-example-web3)
  - [Example](#example-web3)
  - [Full Example](#full-example-web3)
- [Using Ethers](#using-ethers)
  - [Uniswap Full Example](#uniswap-full-example-ethers)
  - [Example](#example-ethers)
  - [Full Example](#full-example-ethers)
- [Motivation](#motivation)
- [⚔️ ethereum-abi-types-generator vs TypeChain](#️-ethereum-abi-types-generator-vs-typechain)
- [Issues](#issues)
- [Thanks And Support](#thanks-and-support)
- [License](#license)

## Features

- 🚀 **Generate TypeScript Typings from ABI Files**: Convert your Ethereum smart contract ABIs into fully typed TypeScript interfaces, including support for complex types like nested tuples and multi-dimensional arrays. Supporting both JSON and JSONFragment[] files.

- 🔎 **Automatic Regeneration with Watch Mode**: Enable watch mode to automatically regenerate typings whenever your ABI files change, ensuring your types are always up-to-date.

- ⚙️ **Highly Configurable via CLI and Config Files**: Customize the tool using command-line arguments or a configuration file, allowing for flexible integration into any project setup.

- 🔌 **Supports Multiple Ethereum Libraries and Frameworks**:
  - **Libraries**:
    - Web3.js (1.x and 2.x)
    - Ethers.js (v4, v5, and v6)
  - **Frameworks**:
    - Truffle
    - Hardhat

- 🧩 **Comprehensive Type Support**: Handles all Solidity types, including advanced types like nested tuples and multi-dimensional arrays, to ensure accurate type definitions.

- 📚 **Automatic Documentation Generation**: Generates detailed documentation for each contract method and event directly from the ABI, including parameter types, state mutability, and more.

- 🛠 **Index File Generation**: Optionally generate an index file that exports all generated typings for easier imports and better project organization.

- ✨ **Code Formatting with Prettier and ESLint**: Automatically formats and lints generated code using Prettier and ESLint, with support for custom configuration paths and options.

- 📦 **Zero Runtime Dependencies**: Produces pure TypeScript interfaces without adding any runtime dependencies to your project.

- 🔄 **ESM Export Alias Support**: Supports ECMAScript Module (ESM) export aliases for all generated typing files, allowing for flexible import strategies.

- 🗂 **Selective File Inclusion/Exclusion**: Specify which ABI files to include or exclude, giving you granular control over the generation process.

- 🔐 **Overwrite Protection**: Optionally prevent overwriting existing files to safeguard manual changes.

- 🌐 **Multi-Language Support**: Designed to support multiple target languages, starting with TypeScript, with plans for future expansion.

- ⚡ **Performance Optimized**: Efficiently handles large projects with many contracts, ensuring fast generation times.

- 🛡 **Event Typing and Filtering**: Generates accurate typings for contract events, including event filters and listener methods.

- 🤝 **Easy Integration with Build Tools**: Seamlessly integrate into your build process or scripts, enhancing your development workflow.

- 💎 **Open Source and Community-Driven**: Join the community on GitHub to contribute, report issues, or request features.

## Supported Libraries / Frameworks

- Web3 1.x and 2.x
- Ethers 4.x, 5.x, and 6.x
- Truffle
- Hardhat

## Installation

```bash
npm i ethereum-abi-types-generator -D
# or
yarn add ethereum-abi-types-generator -D
# or
pnpm add ethereum-abi-types-generator -D
# or
bun add ethereum-abi-types-generator -d
```

## Tsconfig compile time issues

If you get compile time errors due to it waiting `web3` dependencies when using ethers please set `skipLibCheck`: true in the tsconfig.json compiler options and this should fix that issue.

## Usage

There are two ways to use this package: via the CLI or via a configuration file.

*NOTE: If using a configuration file, you can also use the CLI flags to override the configs options.*

## **Common Options**

### **Configuration**

- **`--config`**: Path to config file.

### **Input/Output**

- **`--inputDirOrPath`**: Directory of ABI files or a single ABI file path.
- **`--outputDir`**: Output directory. Defaults to `./ethereum-abi-types`.

### **Library Options**

- **`--library`**: Library to use. Choices are:
  - `web3`
  - `ethers_v4`
  - `ethers_v5`
  - `ethers_v6`

  *NOTE: If not supplied it will fallback to `web3`*

- **`--libraryImportAlias`**: Override the library import from name (e.g., from `"import { Contract } from 'ethers';"` to `"import { Contract } from 'ethersv5';"`).

### **Framework Options**

- **`--framework`**: Framework to use. Choices are:
  - `hardhat`
  - `truffle`
  - `none`

### **Generation Options**

- **`--makeOutputDir`**: Make the output directory if it does not exist.
- **`--makeIndexFile`**: Generate an index (barrel) file exporting all the generated typings.
- **`--outputFileName`**: The file name to use for the generated typings. Only used for single file input. Defaults to name of the ABI file.
- **`--prefixTypes`**: Whether to prefix the name of the type with the `outputFileName` (e.g., `"MyTokenContract"` or `"PrefixNameContract"` vs `"Contract"`).
- **`--preventOverwrite`**: Prevent overwriting existing files.
- **`--verbatimModuleSyntax`**: Use verbatim module syntax (eg: 'import type { Contract } from "ethers"').
- **`--language`**: Language to generate. Choices are:
  - `typescript`

### **Watching Options**

- **`--watch`**: Watch the ABI files for changes and regenerate typings automatically.

### **File Inclusion/Exclusion**

- **`--includeFiles`**: List of file paths to include, ignoring all other files (e.g., `--includeFiles=["./path/to/contract1.json"]`).
- **`--excludeFiles`**: List of file paths to exclude, including all other files (e.g., `--excludeFiles=["./path/to/contract2.json"]`).

  *NOTE: Include will supersede exclude.*

### **Formatting Options**

- **`--eslintConfigPath`**: ESLint config file path.
- **`--prettierConfigPath`**: Prettier config file path.
- **`--eslintOptions`**: ESLint options override (provide as a JSON string).
- **`--prettierOptions`**: Prettier options override (provide as a JSON string).

We use `prettier` to format all files, to make sure it matches your coding style just make sure you have a `.prettierrc` defined in the root of your project and it will use that. If it can not find a prettier config it will use the default prettier config:

```ts
{
  parser: 'typescript',
  semi: false,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true
}
```

---

## **Generator CLI**

### **Available Commands**

- **`scripts`**: Show script helpers.
- **`generate`**: Generate ABI typings.
- **`hardhat`**: Generate ABI typings for Hardhat projects.
- **`truffle`**: Generate ABI typings for Truffle projects.

---

### **CLI Examples**

#### **Checking Version**

```bash
abi-types-generator --version
abi-types-generator -v
```

#### **Showing Help**

```bash
abi-types-generator --help
abi-types-generator -h
```

#### **Showing Script Helpers**

```bash
abi-types-generator scripts
```

#### **Custom Configuration File**

```bash
abi-types-generator generate --inputDirOrPath=DIR_OR_FILE_PATH --config=./customConfigs/ethersv5.config.json
```

#### **Specify Output Directory**

```bash
abi-types-generator generate --inputDirOrPath=./abis --outputDir=./types
```

#### **Use a Specific Library**

- web3: Use Web3.js library.
- ethers_v4: Use Ethers.js version 4.
- ethers_v5: Use Ethers.js version 5.
- ethers_v6: Use Ethers.js version 6.

```bash
abi-types-generator generate --inputDirOrPath=./abis --library=ethers_v5
```

#### **Watch for Changes**

```bash
abi-types-generator generate --inputDirOrPath=./abis --watch
```

#### **Generate Typings for Truffle or Hardhat**

```bash
abi-types-generator hardhat
abi-types-generator truffle
```

#### **Generate Typings with Custom Prefix**

*NOTE: This will only work for single file input.*

```bash
abi-types-generator generate --inputDirOrPath=./myAbi.json --outputFileName=MyPrefixName
```

#### **Prevent Overwriting**

```bash
abi-types-generator generate --inputDirOrPath=./abis --preventOverwrite
```

#### **Specify Language**

*NOTE: Only supports `ts` for now.*

```bash
abi-types-generator generate --inputDirOrPath=./abis --language=ts
```

#### **ESLint and Prettier Configurations**

```bash
abi-types-generator generate --inputDirOrPath=./abis --eslintConfigPath=./.eslintrc.json --prettierConfigPath=./.prettierrc.json
```

#### **File Inclusions and Exclusions**

*NOTE: Include will supersede exclude.*

```bash
abi-types-generator generate --inputDirOrPath=./abis --includeFiles=["./abis/Contract1.json","./abis/Contract2.json"]
abi-types-generator generate --inputDirOrPath=./abis --excludeFiles=["./abis/Contract3.json"]
```

---

## Generator Configuration File

You can use a configuration file to set default options. Create a file named `eat.config.json` in your project root:

Minimal:

```json
{
  "$schema": "./node_modules/@ethereum-abi-types-generator/core/schemas/ethereum-abi-types-generator-1.0.0.json",
  "inputDirOrPath": "./abis",
  "outputDir": "./types",
  "library": "web3"
}
```

Full:

```json
{
  "$schema": "./node_modules/@ethereum-abi-types-generator/core/schemas/ethereum-abi-types-generator-1.0.0.json",
  "inputDirOrPath": "./abis",
  "outputDir": "./types",
  "library": "ethers_v5",
  "libraryImportAlias": "",
  "framework": "none",
  "makeOutputDir": true,
  "makeIndexFile": true,
  "outputFileName": "",
  "prefixTypes": false,
  "watch": false,
  "includeFiles": [],
  "excludeFiles": [],
  "language": "ts",
  "preventOverwrite": false,
  "verbatimModuleSyntax": true,
  "eslintConfigPath": "",
  "prettierConfigPath": "",
  "eslintOptions": {},
  "prettierOptions": {},
}
```

Once you have a configuration file, you can use it with the CLI:

```bash
abi-types-generator generate
```

Or use the `--config` option to specify a path to a configuration file:

```bash
abi-types-generator generate --config ./custom-config.json
```

You can override any option in the configuration file with the CLI:

```bash
abi-types-generator generate --inputDirOrPath=./otherAbis --outputDir=./types --library=web3 --watch
```

---

### Using with Hardhat/Truffle

#### CLI

First you create a script in your `package.json` that runs the `abi-types-generator` script after it compiles every time.

You may add options in the script or in the configuration file.

Shorthand:

```json
{
  "scripts": {
    "compile": "npx hardhat compile && abi-types-generator hardhat"
  }
}
```

Normal:

```json
{
  "scripts": {
    "compile": "npx hardhat compile && abi-types-generator generate --framework=hardhat"
  }
}
```

Or use the eat.config.json file, or the `--config` option to specify a path to a configuration file:

```json
// package.json
{
  "scripts": {
    "compile": "npx hardhat compile && abi-types-generator generate"
  }
}
// or
{
  "scripts": {
    "compile": "npx hardhat compile && abi-types-generator generate --config=./custom.config.json"
  }
}
```

```ts
// eat.config.json or custom config file
{
  "framework": "hardhat",
  // other options
}
```

If your contracts are ready to compile, you can run:

```bash
npm run compile
# or
yarn compile
# or
pnpm compile
# or
bun run compile
```

Your types are now created within the root of your hardhat project, in a folder called `ethereum-abi-types` and you can use them throughout your tests/scripts or anything Typescript related.

---

## Test example

```ts
import { expect } from 'chai';
import { ethers } from 'hardhat';
import {
  ContractContext as MyVeryFirstContract,
  GetFooResponse,
  GetFooRequest,
} from '../ethereum-abi-types/MyVeryFirstContract';

describe('Example test', function () {
  let contract: MyVeryFirstContract;
  beforeEach(async () => {
    const contractFactory = await ethers.getContractFactory(
      'MyVeryFirstContract'
    );

    // thats it you now have full typings on your contract
    contract =
      (await contractFactory.deploy()) as unknown as MyVeryFirstContract;
  });

  it('I love to write unit tests', async () => {
    const foo: GetFooRequest = { fooBoo: true };
    const result: GetFooResponse = await contract.getFoo(foo);

    expect(result).to.equal(
      { fooResponse: 'boo' }
  });
});
```

---

## Using Web3

[Web3 NPM Package](https://www.npmjs.com/package/web3)

*NOTE: If the ABI changes and I run the CLI command again or have a --watch on the file, when you try to compile it will flag any errors with your typings for you.*

### Uniswap full example (Web3)

[Uniswap Contract Strongly Typed Example](https://github.com/joshstevens19/ethereum-abi-types-generator/blob/master/examples/web3/uniswap-example/uniswap-contract-strongly-typed-example.ts)

Below is just a fake contract example just so you can understand how the typings improve your development.

The cli tool will generate all your typings for you and expose them in the generated file. Its super easy to start using strongly typed interfaces for all your ABI calls.

Lets say i run the cli command:

```ts
abi-types-generator --inputDirOrPath=./abi-examples/fake-contract-abi.json  --output=./generated-typings --outputFileName=fake-contract
```

This will generate an `ts` file of `./generated-typings/fake-contract.ts` which has all your strongly typed methods and events.

All you meed to do is cast your `new web3.eth.Contract` code to an `ContractContext` which is exposed in where you defined the `--output` path to. In this example it is `./generated-typings/fake-contract.ts`

#### Example (Web3)

```ts
import Web3 from 'web3';
import { AbiExamples } from '../../abi-examples';
import { ContractContext } from './generated-typings/fake-contract';

const web3 = new Web3(
  'https://mainnet.infura.io/v3/280bb5b627394709938a7cc0b71a4a58'
);

// Has to cast to unknown as we have made some typings changes to the
// contract interfaces which conflicts with `web3` typings.
// This all work great but the compiler gets confused.
// Casting to unknown first then the `ContractContext` solves this.
const contract = new web3.eth.Contract(
  AbiExamples.YOUR_ABI,
  AbiExamples.YOUR_CONTRACT_ADDRESS
) as unknown as ContractContext;
```

Easy as that 🔥🔥

#### Full example (Web3)

```ts
import Web3 from 'web3';
import { AbiExamples } from '../../abi-examples';
import {
  ContractContext,
  TupleInputOnlyRequest,
  TupleNoInputNamesResponse,
} from './generated-typings/fake-contract';

const example = async () => {
  const mockEthereumAddress = '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b';

  const web3 = new Web3(
    'https://mainnet.infura.io/v3/280bb5b627394709938a7cc0b71a4a58'
  );

  // Has to cast to unknown as we have made some typings changes to the
  // contract interfaces which conflicts with `web3` typings.
  // This all work great but the compiler gets confused.
  // Casting to unknown first then the `ContractContext` solves this.
  const contract = new web3.eth.Contract(
    AbiExamples.YOUR_ABI,
    AbiExamples.YOUR_CONTRACT_ADDRESS
  ) as unknown as ContractContext;

  // you now have full typings on `contract.methods` which has generated docs
  const simpleCall = await contract.methods
    .easyExample(true, mockEthereumAddress, new Date().getTime())
    .call();

  console.log(simpleCall);

  // build up a proper typed request object with the interface importable
  // from the typings file generated
  const tupleExampleRequest: TupleInputOnlyRequest = {
    address: mockEthereumAddress,
    timestamps: [
      new Date().getTime(),
      new Date().getTime(),
      new Date().getTime(),
    ],
  };

  // encode abi method all exposed
  const data = contract.methods.tupleInputOnly(tupleExampleRequest).encodeABI();
  console.log(data);

  // any none constant methods will have the correct interface on them as well
  // aka you cant call `.call()` here and the compile will show you this.
  // will also expose the event emitters for your typings to still work with web3
  contract.methods
    .tupleInputOnly(tupleExampleRequest)
    .send({ from: mockEthereumAddress })
    .on('transactionHash', (hash) => {
      console.log(hash);
    });

  const result: TupleNoInputNamesResponse = await contract.methods
    .tupleNoInputNames(mockEthereumAddress, mockEthereumAddress)
    .call();

  console.log(result);

  // full typings on your events with even the filter indexs which will
  // not compile if supply it incorrectly and only expose the correct ones for you
  contract.events
    .Event1({ filter: { token: '0x00' } })
    .on('changed', (event) => {
      console.log(event);
    });

  // can any past events only allowing you to query events which actually exist
  const event = await contract.getPastEvents('Event1', {
    filter: { token: '0x00' },
  });

  console.log(event);
};

example();
```

---

## Using Ethers

[Ethers.js NPM Package](https://www.npmjs.com/package/ethers)

### Uniswap full example (Ethers)

[Uniswap Contract Strongly Typed Example](https://github.com/joshstevens19/ethereum-abi-types-generator/blob/master/examples/ethers/uniswap-example/uniswap-contract-strongly-typed-example.ts)

Below is just a fake contract example just so you can understand how the typings improve your development.

The cli tool will generate all your typings for you and expose them in the generated file. Its super easy to start using strongly typed interfaces for all your ABI calls.

Lets say i run the cli command:

Ethers v4

```ts
abi-types-generator ./abi-examples/fake-contract-abi.json  --output=./generated-typings --name=fake-contract --provider=ethers
```

Ethers v5

```ts
abi-types-generator ./abi-examples/fake-contract-abi.json  --output=./generated-typings --name=fake-contract --provider=ethers_v5
```

This will generate an `ts` file of `./generated-typings/fake-contract.ts` which has all your strongly typed methods and events.

All you meed to do is cast your `new ethers.Contract` code to an `ContractContext` which is exposed in where you defined the `--output` path to. In this example it is `./generated-typings/fake-contract.ts`

#### Example (Ethers)

```ts
import { ethers } from 'ethers';
import { AbiExamples } from '../../abi-examples';
import { ContractContext } from './generated-typings/fake-contract';

// Connect to the network
const customHttpProvider = new ethers.providers.JsonRpcProvider(
  'https://mainnet.infura.io/v3/280bb5b627394709938a7cc0b71a4a58'
);

// Has to cast to unknown as we have made some typings changes to the
// contract interfaces which conflicts with `ethers` typings.
// This all work great but the compiler gets confused.
// Casting to unknown first then the `ContractContext` solves this.
const contract = new ethers.Contract(
  AbiExamples.YOUR_CONTRACT_ADDRESS,
  AbiExamples.YOUR_ABI,
  customHttpProvider
) as unknown as ContractContext;
```

Easy as that 🔥🔥

#### Full example (Ethers)

```ts
import { ethers, utils } from 'ethers';
import { AbiExamples } from '../../abi-examples';
import {
  ContractContext,
  TupleInputOnlyRequest,
  TupleNoInputNamesResponse,
} from './generated-typings/fake-contract';

const example = async () => {
  const mockEthereumAddress = '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b';

  // Connect to the network
  const customHttpProvider = new ethers.providers.JsonRpcProvider(
    'https://mainnet.infura.io/v3/280bb5b627394709938a7cc0b71a4a58'
  );

  // Has to cast to unknown as we have made some typings changes to the
  // contract interfaces which conflicts with `ethers` typings.
  // This all work great but the compiler gets confused.
  // Casting to unknown first then the `ContractContext` solves this.
  const contract = new ethers.Contract(
    AbiExamples.YOUR_CONTRACT_ADDRESS,
    AbiExamples.YOUR_ABI,
    customHttpProvider
  ) as unknown as ContractContext;

  // you now have full typings on `contract.x` which has generated docs
  const simpleCall = await contract.easyExample(
    true,
    mockEthereumAddress,
    new Date().getTime()
  );

  console.log(simpleCall);

  // you can use the same etherjs flows to send and sign transactions
  // `contract.connect` will return a `ContractContext` so will still have
  // all the typings exposed for you
  const privateKey =
    '0x0123456789012345678901234567890123456789012345678901234567890123';
  const wallet = new ethers.Wallet(privateKey, customHttpProvider);

  // Create a new instance of the Contract with a Signer, which allows
  // update methods
  const contractWithSigner = contract.connect(wallet);

  // build up a proper typed request object with the interface importable
  // from the typings file generated
  const tupleExampleRequest: TupleInputOnlyRequest = {
    address: mockEthereumAddress,
    timestamps: [
      new Date().getTime(),
      new Date().getTime(),
      new Date().getTime(),
    ],
  };

  // strongly typed optional overrides as well for both `calls` and `transactions`
  const tx = await contractWithSigner.tupleInputOnly(tupleExampleRequest, {
    // The maximum units of gas for the transaction to use
    gasLimit: 23000,

    // The price (in wei) per unit of gas
    gasPrice: utils.parseUnits('9.0', 'gwei'),

    // The nonce to use in the transaction
    nonce: 123,

    // The amount to send with the transaction (i.e. msg.value)
    value: utils.parseEther('1.0'),

    // The chain ID (or network ID) to use
    chainId: 1,
  });
  console.log(tx.hash);
  // "0xaf0068dcf728afa5accd02172867627da4e6f946dfb8174a7be31f01b11d5364"

  // The operation is NOT complete yet; we must wait until it is mined
  await tx.wait();

  const result: TupleNoInputNamesResponse = await contract.tupleNoInputNames(
    mockEthereumAddress,
    mockEthereumAddress
  );

  console.log(result);

  // full typings on your events
  contract.on(
    'Event1',
    (author: string, oldValue: string, newValue: string, event: any) => {
      // Called when anyone changes the value

      console.log(author);
      // "0x14791697260E4c9A71f18484C9f997B308e59325"

      console.log(oldValue);
      // "Hello World"

      console.log(newValue);
      // "I like turtles."

      console.log(event.blockNumber);
      // 4115004
    }
  );

  // filter that matches my signer as the author
  const filter = contract.filters.Event1(wallet.address);

  // full typings on filter interfaces as well
  contract.filters.Event1(
    filter,
    (author: string, oldValue: string, newValue: string, event: any) => {
      // Called ONLY when your account changes the value

      console.log(author);
      // "0x14791697260E4c9A71f18484C9f997B308e59325"

      console.log(oldValue);
      // "Hello World"

      console.log(newValue);
      // "I like turtles."

      console.log(event.blockNumber);
      // 4115004
    }
  );
};

example();
```

## Motivation

Blockchain development in JavaScript is already super hard. You have all these tools like `truffle`, `ethers`, `web3` (the list goes on) which you have to get used to, and the learning curve is already quite high. On top of this, you have loads of other tools to get things to work as you need. TypeScript allows you to bring runtime errors into the compiler, but on contract calls, most developers have to either build their own types (meaning maintaining them and easily getting out of sync) or have no compile-time errors using the dreaded `any`, hoping and praying they don't break anything.

The idea was to not have to make the developer wrap any kind of `web3` or `ethers` instance or use a new tool to get this working. With a simple 1-line change, you can use all the same library interfaces that the developer is used to, but with `types` `auto-generated` for you to bring back compile-time errors on any contract calls with super ease.

The ABI file is the source of truth for all contract calls, so by building types from this file, we can be assured our types are correct.

## ⚔️ ethereum-abi-types-generator vs TypeChain

The main differences between ethereum-abi-types-generator and TypeChain are:

1. **No bundle size added**: This package uses only interfaces, adding nothing to your final bundle size.
2. **Proper typed interfaces**: Generates and exports interfaces for both requests and responses, allowing you to use them throughout your app.
3. **Use your familiar provider interface**: Just use web3 or ethers interface for every contract call, no need to learn a new process.

## Issues

Please raise any issues in the [GitHub repository](https://github.com/joshstevens19/ethereum-abi-types-generator/issues).

## Thanks And Support

This package is brought to you by [Josh Stevens](https://github.com/joshstevens19). If you want to support the development of this and other packages, or if this package has saved you a lot of development time, donations are welcome. By donating, you are supporting the maintenance and development of tools that make the Ethereum ecosystem better.

### Direct donations

Direct donations (any token accepted) - Eth address: `0x699c2daD091ffcF18f3cd9E8495929CA3a64dFe1`

### Github sponsors

[Sponsor me](https://github.com/sponsors/joshstevens19) via GitHub using fiat money.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
