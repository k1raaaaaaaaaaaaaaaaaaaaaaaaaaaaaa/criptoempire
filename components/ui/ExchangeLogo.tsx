"use client";

import { useState } from "react";
import Image from "next/image";

interface ExchangeLogoProps {
  exchangeId: string;
  size?: number;
  className?: string;
}

const logos: Record<string, { bg: string; text: string; label: string; url: string }> = {
  bybit: { bg: "#F7A600", text: "#fff", label: "BYBIT", url: "https://assets.coingecko.com/markets/images/698/large/bybit_spot.png" },
  binance: { bg: "#F3BA2F", text: "#1E2329", label: "BNC", url: "https://assets.coingecko.com/markets/images/52/large/binance.jpg" },
  mexc: { bg: "#2CAAD9", text: "#fff", label: "MEXC", url: "https://assets.coingecko.com/markets/images/409/large/MEXC_logo_square.jpeg" },
  okx: { bg: "#1A1A1A", text: "#fff", label: "OKX", url: "https://assets.coingecko.com/markets/images/96/large/WeChat_Image_20220117220452.png" },
  kucoin: { bg: "#23AF91", text: "#fff", label: "KCS", url: "https://assets.coingecko.com/markets/images/61/large/kucoin.png" },
  bitget: { bg: "#00C4CC", text: "#fff", label: "BG", url: "https://assets.coingecko.com/markets/images/540/large/2023-candlestick.png" },
  gateio: { bg: "#2354E6", text: "#fff", label: "GT", url: "https://assets.coingecko.com/markets/images/60/large/gate_io_logo1.jpg" },
  kraken: { bg: "#5741D9", text: "#fff", label: "KR", url: "https://assets.coingecko.com/markets/images/29/large/kraken.jpg" },
  coinbase: { bg: "#0052FF", text: "#fff", label: "CB", url: "https://assets.coingecko.com/markets/images/23/large/Group_1.png" },
  cryptocom: { bg: "#002D74", text: "#fff", label: "CDC", url: "https://assets.coingecko.com/markets/images/589/large/crypto_com.jpeg" },
};

export default function ExchangeLogo({
  exchangeId,
  size = 40,
  className = "",
}: ExchangeLogoProps) {
  const config = logos[exchangeId] || { bg: "#333", text: "#fff", label: "?", url: "" };
  const [error, setError] = useState(false);
  const exchangeName = config.label;

  if (error || !config.url) {
    const fontSize = config.label.length > 3 ? size * 0.22 : size * 0.28;
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${className}`}
      >
        <rect width="48" height="48" rx="12" fill={config.bg} />
        <text
          x="24"
          y="25"
          textAnchor="middle"
          dominantBaseline="central"
          fill={config.text}
          fontFamily="system-ui, sans-serif"
          fontWeight="800"
          fontSize={fontSize}
        >
          {config.label}
        </text>
      </svg>
    );
  }

  return (
    <Image
      src={config.url}
      alt={`${exchangeName} logo`}
      width={size}
      height={size}
      unoptimized
      className={`rounded-lg object-cover shrink-0 ${className}`}
      onError={() => setError(true)}
    />
  );
}

export function getExchangeColor(exchangeId: string): string {
  return logos[exchangeId]?.bg || "#333";
}
