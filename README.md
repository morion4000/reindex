# REFund
### Unmanaged crypto retirement index fund

## Description
ERC20 token that models a retirement fund index with fixed ratio (70/30 stocks/bonds). In the case of crypto, stocks are BTC, ETH, etc, and bonds are stable coins. The token is going to be backed by the underlying coins and can be redeemed at any time.

## Value proposition
- generates income on the collateral (via yield farming & loans on Compound) 
- automatic rebalancing
- doesn't require active management
- low/no fees

## Math
- https://docs.google.com/spreadsheets/d/1jm3khbI_Ms_CZUIN42JXywlw5LTgBV8zSjcSZcc98hM

## Standards 
- ERC20: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol

## Helpful links:
- https://www.tokensets.com/
- https://docs.tokensets.com/set-creation
- https://docs.umaproject.org/users/mint-farm-yusd

## Structure:
- 30% eth
- 40% btc
- 30% usdc

## Domain ideas (refund/*reindex*/refinance)
- refund.io
- refund.capital
- refund.finance
- recrypto.fund
- re.fund

## Rebalancing
Rebalancing can be triggered by calling a public function on the contract. Not sooner than 1 week to avoid gas costs.

Rebalancing means selling coins to keep the 70/30 ratio.

1. Withdraw from COMP
2. Swap on DEX (via an aggregator as 0x)
3. Supply on COMP

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

## Issue / Redeem
One token is going to be worth the underlying coins. When issueing a token with crypto, it will be sold to buy BTC, ETH, and USDC on a DEX. When I redeem it, the underlying coins will be sold back to ETH.

e.g. buy 1 REF70 with 1 ETH, get 0.3 ETH, 0.001 BTC, and 400 USDC

Issuing/Redeeming is an expensive operation in terms of gas costs. It makes sense financially to bulk issue tokens and supply a liquidity pool on an AMM. The fund creator can bootstrap this at first, and afterwards the market dynamics should keep the supply & demand balanced by third-parties arbitraging (issuing/redeeming tokens for a margin).

## Upgradeability / control

???

## TODO
- [x] Set up project skeleton https://github.com/austintgriffith/scaffold-eth
- [x] Use openzepellin mintable erc20 implementation
- [ ] How to generate Compound positions and represent them in the index?
- [ ] Simulate how much a rebalancing costs with different amounts of capital
