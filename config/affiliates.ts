export const AFFILIATE_LINKS = {
  bybit: "https://www.bybit.com/invite?ref=YOURCODE",
  binance: "https://www.binance.com/en/register?ref=YOURCODE",
  mexc: "https://www.mexc.com/register?inviteCode=YOURCODE",
  okx: "https://www.okx.com/join/YOURCODE",
  kucoin: "https://www.kucoin.com/r/YOURCODE",
  bitget: "https://www.bitget.com/register?code=YOURCODE",
  gateio: "https://www.gate.io/ref/YOURCODE",
  kraken: "https://www.kraken.com/sign-up?ref=YOURCODE",
  coinbase: "https://www.coinbase.com/join/YOURCODE",
  cryptocom: "https://crypto.com/app/YOURCODE",
} as const;

export type ExchangeId = keyof typeof AFFILIATE_LINKS;
