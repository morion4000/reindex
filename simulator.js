class REI70 {
  constructor() {
    this.token_initial_price = 100;
    this.btc_weight = 0.4;
    this.eth_weight = 0.3;
    this.usdc_weight = 0.3;

    this.rebalance_buffer = 1;

    this.exchange_fee = 0.3;
    this.exchange_slippage = 0.5;

    this.supply = 0;

    this.btc_amount = 0;
    this.eth_amount = 0;
    this.usdc_amount = 0;

    this.btc_price = 33000;
    this.eth_price = 1800;
    this.usdc_price = 0.99;
  }

  exchange(amount) {
    const fee = (this.exchange_fee * amount) / 100;
    const slippage = (this.exchange_slippage * amount) / 100;

    return amount - fee - slippage;
  }

  rebalance() {
    const btc_amount = (this.btc_weight * this.price) / this.btc_price;
    const eth_amount = (this.eth_weight * this.price) / this.eth_price;
    const usdc_amount = (this.usdc_weight * this.price) / this.usdc_price;

    const btc_delta = this.btc_amount - btc_amount;
    const eth_delta = this.eth_amount - eth_amount;
    const usdc_delta = this.usdc_amount - usdc_amount;

    console.log(btc_delta, eth_delta, usdc_delta);

    if (btc_delta > 0) {
      this.btc_amount -= this.exchange(Math.abs(btc_delta));
    } else {
      this.btc_amount += this.exchange(Math.abs(btc_delta));
    }

    if (eth_delta > 0) {
      this.eth_amount -= this.exchange(Math.abs(eth_delta));
    } else {
      this.eth_amount += this.exchange(Math.abs(eth_delta));
    }

    if (usdc_delta > 0) {
      this.usdc_amount -= this.exchange(Math.abs(usdc_delta));
    } else {
      this.usdc_amount += this.exchange(Math.abs(usdc_delta));
    }

    console.log(
      `Rebalance. BTC: ${this.btc_amount}, ETH: ${this.eth_amount}, USDC: ${this.usdc_amount}`
    );
  }

  get aum() {
    return this.supply * this.price;
  }

  get price() {
    if (
      this.btc_amount === 0 ||
      this.eth_amount === 0 ||
      this.usdc_amount === 0
    ) {
      return this.token_initial_price;
    }

    return (
      this.btc_amount * this.btc_price +
      this.eth_amount * this.eth_price +
      this.usdc_amount * this.usdc_price
    );
  }

  issue(amount_usd) {
    const tokens = amount_usd / this.price;

    this.supply += tokens;

    console.log(`Issue ${tokens}. Supply: ${this.supply}. AUM: ${this.aum}`);
  }

  increase_prices() {
    this.btc_price += Math.floor(Math.random() * 1000);
    this.eth_price += Math.floor(Math.random() * 100);
    this.usdc_price += Math.floor(Math.random() / 10);

    console.log(
      `New prices: BTC: $${this.btc_price}, ETH: $${this.eth_price}, USDC: $${this.usdc_price}`
    );
  }
}

const rei70 = new REI70();

rei70.issue(100);

console.log(`First price: ${rei70.price}`);

rei70.increase_prices();

console.log(`Second price: ${rei70.price}`);

rei70.issue(300000);

rei70.rebalance();

console.log(`Third price: ${rei70.price}`);
