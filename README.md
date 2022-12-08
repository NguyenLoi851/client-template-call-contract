Note when using with upgrade pattern

With EIP-1967 Transparent Proxy, we have 3 contracts: Proxy Admin Contract, Proxy Contract and Implementation Contract

In FE, we need to use address of Proxy Contract and ABI of Implementation Contract

When contract will be updated:

- If this does not make ABI change like change logic in function, FE does not need to update anything

- If contract changes interface of functions, add or remove variables so make change to ABI, FE need to update ABI

- If contract change param of event, error, contract need to deploy new Proxy Contract and Implementation Contract, FE need to update address of Proxy Contract and ABI of Implementation Contract
