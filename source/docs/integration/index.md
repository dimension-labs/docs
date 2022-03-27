---
id: dimension_integration
title: dimension-integrations
slug: /integration
---

# [dimension-integrations](https://github.com/dimension-labs/dimension-integrations)

Various technical assets in support of DSCC node integrations.

## What is dimension-integrations ?

-   JSON-RPC, REST & SSE node api documentation & example code;

-   typical integration workflow sample code;

-   links to technical articles and the such like;

-   a set of use case end to end solutions;

## Why dimension-integrations ?

There is a significant requirement to streamline DSCC network integrations by developers, exchanges, wallets, validators ...etc. It's goal is to streamline client side experience of interacting with a dimension node.

## Who uses dimension-integrations ?

Software engineers. Validators. Testers.

## How to run Javascript examples ?

1.  Setup:

```
cd YOUR_WORKING_DIRECTORY/dimension-integrations
npm install
```

2.  Import environment variables:

```
source YOUR_WORKING_DIRECTORY/env.sh
```

NOTE - if you wish to override them then simply make a copy of the env.sh file, and then edit and import the copy instead.

3.  Run node-api example:

```
node YOUR_WORKING_DIRECTORY/dimension-integrations/node-api/<example-name>/request.js
```

4.  Run erc20 example:

```
node YOUR_WORKING_DIRECTORY/dimension-integrations/contracts/erc20/<script-name>.js
```
