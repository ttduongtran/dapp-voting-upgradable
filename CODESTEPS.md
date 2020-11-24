## STEP BY STEP

# 1. start project

# 2. start ganache-cli
# 3. Check acounts
# 4. check balance
# 5. open metamask
# 5.1 import account

# 6. back to deploy contract
`truffle migrate -reset`
<!-- => okay, however this doesn't data -->

# 7. Deploy using openzeppelin
I have 4 contracts
In my project, i will use Election.sol contract
- Call a function to initialize the instance after creating it? (Y/n) 
=> choose Y to init 
=> instance: `0x9561C133DD8580860B6b7E504bC5Aa500f0f06a7`

do as same as with other contract

** After deploying, back to check data

# 8 call functions write data to blockchain
# 9 read data

Then, address's account 10 haven't voted, so return False
after voting -> return True (address: 0x1dF62f291b2E969fB0849d99D9Ce41e2F137006e)



## Next, upgrade smart contract
# 10. 
<!-- 0x9561C133DD8580860B6b7E504bC5Aa500f0f06a7 -->
<!-- 0x9561C133DD8580860B6b7E504bC5Aa500f0f06a7 == same as above --> 

# 11 check
after upgrade
check voter by address: 0x1dF62f291b2E969fB0849d99D9Ce41e2F137006e
Store return True.

Finish!