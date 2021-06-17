# REIndex
### Trustless crypto retirement index fund

## Description
ERC20 token that models a retirement fund index with fixed ratio (70/30 stocks/bonds). In the case of crypto, stocks are BTC, ETH, etc, and bonds are stable coins. The token is going to be backed by the underlying coins and can be redeemed at any time.

## Value proposition
- trustless
- automatic rebalancing
- generates income on the collateral (via yield farming & loans on Compound) 
- doesn't require active management
- low fees

## Math
- https://docs.google.com/spreadsheets/d/1jm3khbI_Ms_CZUIN42JXywlw5LTgBV8zSjcSZcc98hM

## Standards 
- ERC20: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol

## Links
- https://docs.tokensets.com/set-creation
- https://docs.umaproject.org/users/mint-farm-yusd

## Structure
- 30% ETH
- 40% BTC
- 30% USDC

## Domain ideas (refund|reindex|refinance)
- **reindex.fund**
- reindex.finance
- refund.io
- refund.capital
- refund.finance
- recrypto.fund
- re.fund

## Rebalancing
Sell coins to keep the genesis ratios. Rebalancing can be triggered by calling a public function on the contract. Not sooner than 1 week to avoid gas costs.

#### How to offset the cost of gas to the fund?
We know the transaction gas price (https://stackoverflow.com/questions/48245051/how-to-get-transaction-cost-in-smart-contract-solidity-ethereum), and we should be able hardcode how much gas the rebalance function uses. Based on these two, we can infer the transaction cost in ETH and refund the cost of the transaction + a nominal fee to the caller. 

#### How to use DEX APIs without fear of being deprecated?
Protocols like Uniswap, Aave always upgrade to newer versions. For example, Uniswap has recently upgraded to v3, which includes inceptives for users to upgrade from v2. The old version is still deployed and running, however liquidity providers are slowing going to move away from it. How to be able to upgrade the DEX APIs without having too much control? Would using an aggregator like 0x be an option?

#### Operations and cost
1. Withdraw ETH from COMP (138.300 gas, ~$6)
2. Withdraw BTC from COMP (138.300 gas, ~$6)
3. Withdraw USDC from COMP (138.300 gas, ~$6)
4. Swap on DEX (?)
5. Deposit ETH to COMP (160.537 gas, ~$7)
6. Deposit BTC to COMP (160.537 gas, ~$7
7. Deposit USDC to COMP (160.537 gas, ~$7)

Cost: >$39

## Genesis
1. Initial price in USD for token
2. First rebalance (to establish weights)
3. Open COMP loan
4. Supply coins on COMP

## Price discovery
If ERC20, how to take into account the time the token was purchased at? different times, different underlying coins, different values... the price mecanism needs to be complex... can it be a synthetic asset on https://umaproject.org/?

Solution for ERC20: Set an initial price in USD. This means that price discovery will happen on the platform.

## Yield
The USDC can be CUSDC (yield baring USDC). Possibly the ETH and BTC can be on Compound as well.

## Issue / redeem
One token is going to be worth the underlying coins. When issuing a token with crypto, it will be sold to buy BTC, ETH, and USDC on a DEX. When I redeem it, the underlying coins will be sold back to ETH.

e.g. buy 1 REI70 with 1 ETH, get 0.3 ETH, 0.001 BTC, and 400 USDC

Issuing/Redeeming is an expensive operation in terms of gas costs. It makes sense financially to bulk issue tokens and supply a liquidity pool on an AMM. The fund creator can bootstrap this at first, and afterwards the market dynamics should keep the supply & demand balanced by third-parties arbitraging (issuing/redeeming tokens for a margin).

Entry/exit fees?

## Upgradeability and trust

How to make it future-proof without requiring trust?

## TODO
- [x] Set up project skeleton https://github.com/austintgriffith/scaffold-eth
- [x] Use openzepellin mintable erc20 implementation
- [ ] How to generate Compound positions and represent them in the index?
- [ ] Simulate how much a rebalancing costs with different amounts of capital
