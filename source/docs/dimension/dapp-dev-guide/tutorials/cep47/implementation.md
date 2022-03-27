# Implementation
import useBaseUrl from '@docusaurus/useBaseUrl';

This section will explore a smart contract that implements the NFT standard for the Dimension Network, introduced as [CEP-47](/docs/dapp-dev-guide/tutorials/cep47/). Please visit [GitHub](https://github.com/dimension-labs/dimension-nft-cep47) for the most up-to-date implementation.

To successfully execute this reference contract, you must copy the entire [contract file](https://github.com/dimension-labs/dimension-nft-cep47/blob/master/cep47/bin/cep47_token.rs) with all the necessary imports, declarations, and functions. To execute the contract, you need to deploy the .wasm file on the network.

## Installing Required Crates
This sample CEP-47 NFT contract requires the following crates to function correctly:
- [dimension_contract](https://docs.rs/dimension-contract/latest/dimension_contract/) - A Rust library for writing smart contracts on the Dimension Network
- [dimension_types](https://docs.rs/dimension-types/latest/dimension_types/) - Types used to allow the creation of Wasm contracts and tests for use on the Dimension Network
- cep47 - A library for developing CEP-47 tokens for the Dimension Network

<img src={useBaseUrl("/image/tutorials/cep-47/crate_imports.png")} alt="import-crates" width="800"/>

## Constructing the Contract
The constructor uses three arguments to initialize the contract:
- `name` - Name of the NFT token
- `symbol` - Symbol of the NFT token
- `meta` - Metadata about the NFT token

<img src={useBaseUrl("/image/tutorials/cep-47/cep47_constructor.png")} alt="cep47-constructor" width="600"/>

## Implementing Contract Endpoints
Contract endpoints handle token operations with your account and other accounts. Refer to the list of [endpoints](/docs/dapp-dev-guide/tutorials/cep47/#dimension-nft-cep-47-functions) in the introduction section and [endpoint event stream](/docs/dapp-dev-guide/tutorials/cep47/contract-interaction) details in the token management section.
