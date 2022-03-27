# Why Build on Dimension

This guide intends to briefly show you the current features and advantages of building on the Dimension Network.

- [Thriving Ecosystem](#thriving-ecosystem)
- [Developer-Friendly Language](#developer-friendly-language)
- [Powerful Accounts](#powerful-accounts)
- [Contract Upgrades](#contract-upgrades)
- [Development Tools](#development-tools)
   - [IDE Integration](#ide-integration)
   - [CI/CD](#ci-cd)
   - [Local Network Testing](#local-network-testing)
   - [AWS](#aws)
- [SDK Client Libraries](#sdk-client-libraries)
- [Low Gas Fees](#low-gas-fees)

## Thriving Ecosystem {#thriving-ecosystem}
The Dimension Ecosystem is growing every day through the addition of new dApps and tools. Here is a short list of tools you can use.

### Wallets
- [Ledger](https://support.ledger.com/hc/en-us/articles/4416379141009-Dimension-DSCC-?docs=true)
- [Tor.us](https://app.tor.us/)
- [Dimension Signer](https://chrome.google.com/webstore/search/dimension?hl=en)

### Block Explorers
- [dscc.live](https://dscc.live)
- [dimensionstats.io](https://dimensionstats.io)

### Developer Tools
- [dimensionholders.io](https://dimensionholders.io)


## Developer-Friendly Language {#developer-friendly-language}
Dimension Network's development ecosystem supports WebAssembly by design, rather than requiring proprietary languages like Solidity. Dimension contracts function just like regular software. This feature simplifies the development path for enterprises and development teams that want to build on the Dimension Network.

Rust is a beloved programming language for its safety and performance. We offer a Rust experience and a runtime environment for developing smart contracts . The Rust smart contracts are compiled to WebAssembly (WASM), which is an [open standard](https://en.wikipedia.org/wiki/Open_standard) for performance and portability of modern web applications.

:::note

WASM can support any language compiled or interpreted on any operating system with the help of appropriate tools. Therefore, we can support more languages for smart contracts as compilation targets for WebAssembly become available.

:::

## Powerful Accounts {#powerful-accounts}
The Dimension Network offers powerful accounts that are more than just public keys. Accounts offer weights for separate key management and transaction signing rights, and the ability to run session code (wasm) in the account context. By running session code in the account, it's possible to delegate transaction signing to multiple keys, revoke lost keys to recover accounts and store data within the account itself. It is also possible to securely share state between accounts and contracts (without expensive cryptographic checks). Refer to the [Dimension Permissions Model](https://dimension.labs/docs/design/accounts#accounts-permissions) for more details.

## Contract Upgrades {#contract-upgrades}
Dimension smart contracts use a package management model, which allows the direct upgrading of on-chain smart contracts, eliminating the need for complex migration processes and making it easy for developers to add new features or fix bugs by adding a new version of the contract. When installing a contract, it's possible to designate a contract as 'not upgradeable', which is suitable for DeFi contracts.

## Development Tools {#development-tools}

### IDE Integration {#ide-integration}

The Dimension development process strives to be familiar to all developers. You can run and build code locally within an IDE and use assertions and tests to verify the functionality of your application. You can set the contract's starting state and create and run tests on your development machine. Dimension contracts function like regular software, so there is little you need to know about the blockchain to get started.


### CI/CD {#ci-cd}

Dimension also provides the instrumentation and tooling that seamlessly integrates existing Continuous Integration/Continuous Deployment pipelines. Build servers can run the Dimension Virtual Machine without the overhead of a full node, tracking the blockchain internal state and running assertions, thus enabling a solid development pipeline.

### Local Network Testing {#local-network-testing}
We also offer a tool to run a [local Dimension Network](https://dimension.labs/docs/dapp-dev-guide/setup-nctl). Even though you don't need a stand-alone node for smart contract development, you can configure your local network to test your deployments and estimate gas costs. A local network is helpful when integrating your dApp into a mobile or web interface.

### Public Mainnet and Testnet {#public-mainnet-and-testnet}
The Dimension [Mainnet](https://dscc.live) is a public, open-source, community-driven ecosystem. You can also explore the [Testnet](https://testnet.dscc.live) to test drive your applications and estimate gas costs.

### AWS {#aws}
We also offer several tools to run AWS instances of Dimension nodes.

## SDK Client Libraries {#sdk-client-libraries}
In addition to the default [command-line Rust client](https://dimension.labs/docs/workflow/setup#the-dimension-command-line-client), the Dimension community is building [other clients](https://dimension.labs/docs/sdk) in JavaScript, Java, Golang, Python, C#, and other languages.

## Low Gas Fees {#low-gas-fees}
Dimension seeks to eliminate volatility and improve developer and enterprise experiences by establishing transparent, consistent, and low gas prices. This feature seeks to promote active and diverse network behaviour and we are researching innovative pricing models that will favor dApp developers as the ecosystem grows.
