"use client";

import { useState, useEffect } from "react";

interface CoinPrice {
  symbol: string;
  price: string;
  change: string;
  positive: boolean;
}

const fallbackPrices: CoinPrice[] = [
  { symbol: "BTC", price: "$97,432", change: "2.3%", positive: true },
  { symbol: "ETH", price: "$3,891", change: "1.1%", positive: true },
  { symbol: "BNB", price: "$612", change: "0.4%", positive: false },
  { symbol: "SOL", price: "$198", change: "4.2%", positive: true },
  { symbol: "XRP", price: "$2.41", change: "0.8%", positive: true },
  { symbol: "DOGE", price: "$0.34", change: "3.1%", positive: true },
  { symbol: "USDT", price: "$1.00", change: "0.0%", positive: true },
];

const coinIds: Record<string, string> = {
  bitcoin: "BTC",
  ethereum: "ETH",
  binancecoin: "BNB",
  solana: "SOL",
  ripple: "XRP",
  dogecoin: "DOGE",
  tether: "USDT",
};

function formatPrice(price: number): string {
  if (price >= 1000) return `$${price.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  if (price >= 1) return `$${price.toFixed(2)}`;
  return `$${price.toFixed(4)}`;
}

export default function Ticker() {
  const [prices, setPrices] = useState<CoinPrice[]>(fallbackPrices);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana,ripple,dogecoin,tether&vs_currencies=usd&include_24hr_change=true"
        );
        if (!res.ok) return;
        const data = await res.json();

        const mapped: CoinPrice[] = Object.entries(coinIds).map(([id, symbol]) => {
          const coin = data[id];
          if (!coin) return { symbol, price: "—", change: "0%", positive: true };
          const change = coin.usd_24h_change ?? 0;
          return {
            symbol,
            price: formatPrice(coin.usd),
            change: `${Math.abs(change).toFixed(1)}%`,
            positive: change >= 0,
          };
        });
        setPrices(mapped);
      } catch {
        // keep fallback
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-t border-b border-[var(--border)] bg-[var(--bg-secondary)]/50 backdrop-blur-sm overflow-hidden">
      <div className="ticker-animate flex items-center whitespace-nowrap py-3">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-8 px-4">
            {prices.map((coin) => (
              <div key={`${i}-${coin.symbol}`} className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-[var(--text-primary)]">{coin.symbol}</span>
                <span className="text-[var(--text-secondary)]">{coin.price}</span>
                <span className={coin.positive ? "text-emerald-400" : "text-red-400"}>
                  {coin.positive ? "↑" : "↓"}{coin.change}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
