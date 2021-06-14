# refund

https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol

Build an ERC20 token that models a retirement fund with 70/30 ratio (stocks/bonds) In the case of crypto stocks are BTC, ETH, etc, and bonds are stable coins.

The token is going to be backed by the underlying coins and can be redeemed at any time.

https://www.tokensets.com/
https://docs.tokensets.com/set-creation
https://docs.umaproject.org/users/mint-farm-yusd

Possible structure:
- 30% eth
- 40% btc
- 30% usdc

The usdc can be cusdc (yield baring usdc). possibly the eth and btc can be on compound as well.

One token is going to be worth the underlying coins. If I buy one token with eth, the eth will be sold to buy btc and usdc on uniswap.

When I sell the token (redeem it), the underlying coins will be sold back to eth and I will get back my investment.

Rebalancing can be triggered by calling a public function on the contract. Not sooner than 1 week to avoid gas costs.

Rebalancing means selling coins to keep the 70/30 ratio.

e.g. buy 1 BRL70 with 1 eth, get 0.3 eth, 0.001 wbtc, 400 usdc (or cusdc). when I am selling (after a while) all the coins are going to get sold back to eth and I will get back my investment... I think the token needs to be an NFT rather than a ERC20 because it's non-fungible (each token has a different amount of underlying coins).

If ERC20, how to take into account the time the token was purchased at? different times, different underlying coins, different values... the price mecanism needs to be complex... can it be a synthetic asset on https://umaproject.org/?

Solution for ERC2: Set an initial price in USD. This means that price discovery will happen on the platform.

Name ideas:
- refund.io
- refund.capital
- recrypto.fund
- re70.fund
