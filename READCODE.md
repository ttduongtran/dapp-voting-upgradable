
## Repairing
# 1. Deploy contract
`$ truffle migrate`
`$ truffle migrate -reset` <!-- if had deployed before -->



## I. Install OpenZeppelin and Ganache, Compile và Deploy Smart Contract, Interact với Web3
  # 1. start ganache-cli
  `$ npx ganache-cli –deterministic`

  # 2. check accounts
  `$ npx oz accounts`

  # 3. check balance of account
  `$ npx oz balance`

  # 4. Deploy smart contract with “create” command line
  `$ npx oz create`

  # 5. call the functions which write data to blockchain, in this example, it is store() function
  `$ npx oz send-tx`

  # 6. the functions which read data from blockchain, in this example, it is retrieve() function
  `$ npx oz call` 


## II. Upgradeable Smart Contract
# 7. Deploy contract với lệnh "create"
`$ npx openzeppelin create` or
`$ npx oz create` 

# 8. Check send transaction by 
`$ npx oz send-tx` 

# 9. Check data send
`$ npx oz call`

# NEXT. Upgrade smart contract bằng lệnh
# 10. 
`$ npx openzeppelin upgrade`

# 11. Check result
`$ npx oz call`

