---
title: Overview
slug: /staking
---

# Staking

A feature of Proof-of-Stake protocols is that token holders can actively participate in the protocol through a mechanism known as **staking**.

Persons that hold their private keys can choose to stake their tokens with any validator in the Dimension network. Alternatively, it is possible to stake tokens via an exchange or custody provider as well.

This guide will outline the steps required to stake the DSCC token on the Dimension network.

## What you need to know before staking {#what-you-need-to-know-before-staking}

Please read the following sections carefully before staking tokens on the Dimension network.

## Slashing {#slashing}

Presently Dimension does not slash for equivocations. If a node equivocates, its' messages are ignored by the rest of the validators for the balance of the era and made inactive. A node running the software provided by the Dimension Association will terminate once it detects that it has equivocated. Future work includes locking an equivocating validator's stake for an extended duration of time, effectively penalizing the validator.

Dimension does not treat validator stake differently than delegator stake for security reasons.

## Delegation Rate {#delegation-rate}

Node operators (Validators) define a commission that they take in exchange for providing staking services. This commission is represented as a percentage of the rewards that the node operator retains for their services.

## Rewards {#rewards}

Validators receive rewards for participating in consensus by voting on blocks sending finality signatures (finalizing blocks). There is no precise _per-block_ reward. Rewards are split proportionally among stakes within an era. If a validator is offline or cannot vote on many blocks, the rewards earned are also reduced. Delegators can only receive a proportional amount of the validator's rewards minus the validator's commission (Delegation Rate).

Rewards are distributed at the end of each era.

## Selecting a node for Staking {#selecting-a-node-for-staking}

As a prospective delegator, it is important to select a validating node that you can trust. Please do your due diligence before you stake your tokens with a validator.

## Check in on your Stake {#check-in-on-your-stake}

It's recommended that you check in on how your stake is performing from time to time. If the validator you staked with decides to unbond, your stake will also be unbonded. Make sure that the validator you have selected is performing as per your expectations.

Validators have to win a staking auction by competing with prospective and current validators for a slot. This process is permissionless, meaning validators can join and leave the auction without restrictions, except the unbonding wait period.

## Unbonding Period {#unbonding-period}

For security purposes, whenever a token is un-staked or un-delegated, the protocol will continue to keep the token locked for 14 hours.
