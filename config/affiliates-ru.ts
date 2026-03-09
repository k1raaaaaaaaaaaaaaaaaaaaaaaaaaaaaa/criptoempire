export const AFFILIATE_LINKS_RU = {
  bybit: "https://www.bybit.com/invite?ref=W8Y7K8",
  mexc: "https://promote.mexc.com/r/0Xqq2VMnaX",
  okx: "https://okx.com/join/80779425",
  bitget: "https://www.bitgetapps.com/ru/referral/register?clacCode=DQLNT491",
  gateio: "https://www.gate.io/ref/YOURCODE",
  kucoin: "https://www.kucoin.com/r/YOURCODE",
} as const;

export type ExchangeIdRU = keyof typeof AFFILIATE_LINKS_RU;
