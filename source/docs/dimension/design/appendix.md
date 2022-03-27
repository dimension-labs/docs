# Appendix {#appendix-head}

## A - Dimension Rust Library {#appendix-a}

Dimension provides low-level bindings for host-side ("external") functions for developers creating smart contracts in other programming languages. Developers can import these functions into a wasm module used as a contract on the Dimension Network. Thus, the contract will have access to features specific to the Dimension platform which are not supported by general wasm instructions (e.g., accessing the global state, creating new `URef`s). These are defined and automatically imported if the [Dimension Rust library](https://crates.io/crates/dimension-contract) is used to develop the contract. For an up-to-date description of exported functions, please visit the [dimension-contract](https://docs.rs/dimension-contract/latest/dimension_contract/ext_ffi/index.html) crate documentation.

## B - Serialization Format {#appendix-b}

The Dimension serialization format is used to transfer data between wasm and the Dimension host runtime. It is also used to persist global-state data in the Merkle trie. The definition of this format is described in the [global state](./global-state.md#global-state-head) section.

A Rust reference implementation for those implementing this specification in another programming language can be found here:

-   [bytesrepr](https://docs.rs/dimension-types/latest/dimension_types/bytesrepr/index.html)
-   [cl_value.rs](https://docs.rs/dimension-types/latest/src/dimension_types/cl_value.rs.html)
-   [account](https://docs.rs/dimension-types/latest/dimension_types/account/index.html)
-   [contract](https://docs.rs/dimension-types/latest/dimension_types/contracts/struct.Contract.html)
-   [uint.rs](https://docs.rs/dimension-types/latest/src/dimension_types/uint.rs.html)

Additionally, examples of all data types and their serializations are found in the [GitHub code base](https://github.com/dimension-labs/dimension-node/blob/553b9f11eb3b1e8043acfe3fa04005d951047c4a/types/src/bytesrepr.rs#L26). These examples include a set of useful [serialization tests](https://github.com/dimension-labs/dimension-node/blob/553b9f11eb3b1e8043acfe3fa04005d951047c4a/types/src/bytesrepr.rs#L1189).