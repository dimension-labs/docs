# Upgrading the Node

The `chainspec.toml` contains a section to indicate from which era the given `dimension-node` version should start running.

```
[protocol]
# This protocol version becomes active at the start of this era.
activation_point = 100
```

At every block finalization, the `dimension-node` looks for newly configured versions. When a new version is configured, the running node will look at future era_id in the `chainspec.toml` file. This will be the era before where the current dimension-node will cleanly shut down.

The `dimension-node-launcher` will detect a clean exit 0 condition and start the next version of the `dimension-node`.
