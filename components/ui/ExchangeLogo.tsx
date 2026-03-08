interface ExchangeLogoProps {
  exchangeId: string;
  size?: number;
  className?: string;
}

const logos: Record<string, { bg: string; text: string; label: string }> = {
  bybit: { bg: "#F7A600", text: "#fff", label: "BYBIT" },
  binance: { bg: "#F3BA2F", text: "#1E2329", label: "BNB" },
  mexc: { bg: "#2CAAD9", text: "#fff", label: "MEXC" },
  okx: { bg: "#1A1A1A", text: "#fff", label: "OKX" },
  kucoin: { bg: "#23AF91", text: "#fff", label: "KCS" },
  bitget: { bg: "#00C4CC", text: "#fff", label: "BG" },
  gateio: { bg: "#2354E6", text: "#fff", label: "GT" },
  kraken: { bg: "#5741D9", text: "#fff", label: "KR" },
  coinbase: { bg: "#0052FF", text: "#fff", label: "CB" },
  cryptocom: { bg: "#002D74", text: "#fff", label: "CDC" },
};

export default function ExchangeLogo({
  exchangeId,
  size = 48,
  className = "",
}: ExchangeLogoProps) {
  const config = logos[exchangeId] || { bg: "#333", text: "#fff", label: "?" };
  const fontSize = config.label.length > 3 ? size * 0.22 : size * 0.28;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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

export function getExchangeColor(exchangeId: string): string {
  return logos[exchangeId]?.bg || "#333";
}
