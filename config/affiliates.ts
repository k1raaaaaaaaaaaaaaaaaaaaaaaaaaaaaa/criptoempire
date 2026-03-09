export const AFFILIATE_LINKS = {
  bybit: "https://www.bybit.com/invite?ref=W8Y7K8",
  binance: "https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=ru&ref=GRO_28502_6CBHL",
  mexc: "https://promote.mexc.com/r/0Xqq2VMnaX",
  okx: "https://okx.com/join/80779425",
  kucoin: "https://www.kucoin.com/r/YOURCODE",
  bitget: "https://www.bitgetapps.com/ru/referral/register?clacCode=DQLNT491",
  gateio: "https://www.gate.io/ref/YOURCODE",
  kraken: "https://www.kraken.com/sign-up?ref=YOURCODE",
  coinbase: "https://www.coinbase.com/join/YOURCODE",
  cryptocom: "https://crypto.com/app/YOURCODE",
} as const;

export type ExchangeId = keyof typeof AFFILIATE_LINKS;
