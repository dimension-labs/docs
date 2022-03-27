# Basic Node Setup

A node is normally run by executing the `dimension-node-launcher`. This app executes the `dimension-node` as a child process and handles upgrades of it.

## Dimension Node Launcher {#dimension-node-launcher}

The `dimension-node-launcher` can be installed via a Debian package, which also creates the `dimension` user, creates directory structures, and sets up a `systemd` unit and logging.

The dimension-node-launcher Debian package can be obtained from <https://repo.dimensionlabs.io>. You only need to run the steps detailed there once.

Then, proceed to install the `dimension-node-launcher` by running these commands:

```bash
sudo apt update
sudo apt install dimension-node-launcher
```

You can also build [from source](https://github.com/dimension-labs/dimension-node-launcher). However, all the setup and pull of dimension-node releases will be manual.

## File Locations {#file-locations}

The `dimension-node-launcher` Debian install creates the directories and files needed for running `dimension-node` versions and performing upgrades. A `dimension` user and `dimension` group is created during install and used to run the software. Two main folders are relevant for our software: `/etc/dimension` and `/var/lib/dimension`.

**The dimension-node install version**

Each version of the `dimension-node` install is located based on the semantic version with underscores. For example, version 1.0.3 is represented by a directory named `1_0_3`. This convention applies to both binary and configuration file locations. Versioning with `[m_n_p]` represents the major, minor, and patch of a semantic version.

:::note

Multiple versioned folders will exist on a system when upgrades are set up.

:::

The following is the state of the filesystem after installing the `dimension-client` and `dimension-node-launcher` Debian packages, and also after running the script `/etc/dimension/pull_dimension_node_version.sh`:

### `/usr/bin/` {#usrbin}

The default location for executables from the Debian package install is `/usr/bin`.

- `dimension-client` - A client for interacting with the Dimension network
- `dimension-node-launcher` - The launcher application which starts the `dimension-node` as a child process

### `/etc/dimension/` {#etcdimension}

This is the default location for configuration files. It can be overwritten with the `DIMENSION_CONFIG_DIR` environment variable. The paths in this document assume the default configuration file location of `/etc/dimension`. The data is organized as follows:

- `delete_local_db.sh` - Removes `*.lmdb*` files from `/var/lib/dimension/dimension-node`
- `pull_dimension_node_version.sh` - Pulls `bin.tar.gz` and `config.tar.gz` from [genesis.dimensionlabs.io](http://genesis.dimensionlabs.io/) for a specified protocol version and extracts them into `/var/lib/bin/<protocol_version>` and `/etc/dimension/<protocol_version>`
- `config_from_example.sh` - Gets external IP to replace and create the `config.toml` from `config-example.toml`
- `node_util.py` - A script that will be replacing other scripts and is the preferred method of performing the actions of `pull_dimension_node_version.sh`, `config_from_example.sh`, and `delete_local_db.sh`.  Other scripts will be deprecated in future releases of `dimension-node-launcher`.
- `dimension-node-launcher-state.toml` - The local state for the `dimension-node-launcher` which is created during the first run
- `validator_keys/` - The default folder for node keys, containing:
    - `README.md` - Instructions on how to create validator keys using the `dimension-client`
    - `secret_key.pem` - Secret key used by the validator node to sign blocks and peer-to-peer messages
    - `public_key.pem` - Public key associated with the secret key above, stored in PEM format
    - `public_key_hex` - Public key associated with the secret key above, stored in hex format
- `1_0_0/` - Folder for genesis configuration files, containing:
    - `accounts.toml` - Contains the genesis validators and delegators
    - `chainspec.toml` - Contains invariant network settings, with the `activation_point` (network start time) as a timestamp
    - `config-example.toml` - Example for creating a `config.toml` file
    - `config.toml` - Contains variable node configuration settings, created by a node operator manually or by running `config_from_example.sh 1_0_0`
- `m_n_p/` - Folder for each installed upgrade package's configuration files, containing:
    - `chainspec.toml` - Contains invariant network settings, with the `activation_point` as an era ID (the era at which this protocol version of the node became or will become active)
    - `config-example.toml` - As per `1_0_0/config-example.toml`, but compatible with the `m.n.p` version of the node
    - `config.toml` - As per `1_0_0/config.toml`, but compatible with the `m.n.p` version of the node

### `/var/lib/dimension/` {#varlibdimension}

This is the location for larger and variable data for the `dimension-node`, organized in the following folders and files:
- `bin/` - The parent folder for storing the versions of `dimension-node` executables. This location can be overwritten with the `DIMENSION_BIN_DIR` environment variable. The paths in this document assume the default of `/var/lib/dimension/bin/`.
    - `1_0_0/` - Folder for genesis binary files, containing:
        - `dimension-node` - The node executable - defaults to the Ubuntu 18.04 compatible binary
        - `README.md` - Information about the repository location and the Git hash used for compilation to allow a rebuild on other platforms
    - `m_n_p/` - Folder for each installed upgrade package, containing:
        - `dimension-node` - As per `1_0_0/dimension-node`, but the `m.n.p` version of the node
        - `README.md` - As per `1_0_0/README.md`, but compatible with the `m.n.p` version of the node

- `dimension-node/<NETWORK NAME>` - Folder containing databases and related files produced by the node binary. For MainNet, the network name is `dimension` and for TestNet it is `dimension-test`.
    - `data.lmdb` - Persistent global state store of the network
    - `data.lmbd-lock` - Lockfile for the `data.lmdb` database
    - `storage.lmdb` - Persistent store of all other network data, primarily Blocks and Deploys
    - `storage.lmdb-lock` - Lockfile for the `storage.lmdb` database
    - `unit_files/` - Folder containing transient caches of consensus information

## Node Version Installation {#node-version-installation}

Included with `dimension-node-launcher` is `node_util.py` for installing `dimension-node` versions. To stage all current `dimension-node` versions we would run:

```bash
sudo -u dimension /etc/dimension/node_util.py stage_protocols <NETWORK_CONFIG>
```

For `<NETWORK_CONFIG>`, We use `dimension.conf` for MainNet and `dimension-test.conf` for TestNet.  This will install all currently released protocols in one step.

This is invoked with the release version in underscore format such as:

```bash
sudo -u dimension /etc/dimension/pull_dimension_node_version.sh 1_0_2
```

This command will do the following:
- Create `/var/lib/dimension/bin/1_0_2/` and expand the `bin.tar.gz` containing at a minimum `dimension-node`
- Create `/etc/dimension/1_0_2/` and expand the `config.tar.gz` containing `chainspec.toml`, `config-example.toml`, and possibly `accounts.csv` and other files
- Remove the archive files and run `/etc/dimension/config_from_example.sh 1_0_2` to create a `config.toml` from the `config-example.toml`

## Client Installation {#client-installation}

The [Prerequisites](/workflow/setup/#the-dimension-command-line-client) page lists installation instructions for the Dimension client.

## Create and Fund Keys {#create-fund-keys}

The Rust client generates keys via the `keygen` command. The process generates 2 _pem_ files and 1 _text_ file. To learn about options for generating keys, include `--help` when running the `keygen` command. The following command will create the keys in the `/etc/dimension/validator_keys` folder. For details on funding your accounts, see [Prerequisites](/workflow/setup/#fund-your-account).

```bash
sudo -u dimension dimension-client keygen /etc/dimension/validator_keys
```

:::note

It is recommended to save your keys in a secure location, preferably offline.

:::

More about keys and key generation can be found in `/etc/dimension/validator_keys/README.md` if `dimension-node-launcher` was installed from the Debian package. You can also find for more information on keys, in the [Accounts and Cryptographic Keys](../dapp-dev-guide/keys.md) section.

## Config File {#config-file}

One `config.toml` file exists for each `dimension-node` version installed. It is located in the `/etc/dimension/[m_n_p]/` directory, where `m_n_p` is the current semantic version. This can be created from `config-example.toml` by using `/etc/dimension/config_from_example.sh [m_n_p]` where `[m_n_p]` is replaced current version with underscores.

Below are some fields in the `config.toml` that you may need to adjust.

### Trusted Hash for Synchronizing {#trusted-hash-for-synchronizing}

The Dimension network is a permissionless, proof of stake network - which implies that validators can come and go from the network. The implication is that, after a point in time, historical data could have less security if it is retrieved from 'any node' on the network. Therefore, joining the network has to be from a trusted source, a bonded validator. The system will start from the hash from a recent block and then work backward from that block to obtain the deploys and finalized blocks from the linear block store. Here is the process to get the trusted hash:

- Find a list of trusted validators
- Query the status endpoint of a trusted validator (`http://<NODE_IP_ADDRESS>:8888/status`)
- Obtain the hash of a block from the status endpoint
- Update the `config.toml` for the node to include the trusted hash. There is a field dedicated to this near the top of the file

### Secret Keys {#secret-keys}

Provide the path to the secret keys for the node. This is set to `etc/dimension/validator_keys/` by default.

### Networking and Gossiping {#networking--gossiping}

The node requires a publicly accessible IP address. The `config_from_example.sh` and `node_util.py` both allow IP for network address translation (NAT) setup. Specify the public IP address of the node. If you use the `config_from_example.sh` external services are called to find your IP and this is inserted into the created `config.toml`.

Default values are specified in the file if you want to change them:

- Specify the port that will be used for status and deploys
- Specify the port used for networking
- Known_addresses - these are the bootstrap nodes (no need to change these)
