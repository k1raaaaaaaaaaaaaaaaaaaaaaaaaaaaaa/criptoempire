export const AFFILIATE_LINKS_RU = {
  bybit: "https://www.bybit.com/invite?ref=YOURCODE_RU",
  mexc: "https://www.mexc.com/ru-RU/register?inviteCode=YOURCODE_RU",
  okx: "https://www.okx.com/ru/join/YOURCODE_RU",
  bitget: "https://www.bitget.com/ru/referral/register?clacCode=YOURCODE_RU",
  gateio: "https://www.gate.io/ru/signup/YOURCODE_RU",
  kucoin: "https://www.kucoin.com/ru/ucenter/signup?rcode=YOURCODE_RU",
} as const;

export type ExchangeIdRU = keyof typeof AFFILIATE_LINKS_RU;
