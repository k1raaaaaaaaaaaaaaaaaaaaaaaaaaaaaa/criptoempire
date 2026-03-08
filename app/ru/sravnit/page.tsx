import { Metadata } from "next";
import Link from "next/link";
import ExchangeLogo from "@/components/ui/ExchangeLogo";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Сравнение криптобирж 2026 | CriptoEmpire",
  description:
    "Подробное сравнение криптобирж для России и СНГ",
};

const slugs = ["bybit", "mexc", "okx", "bitget", "gateio", "kucoin"] as const;

const exchangeNames: Record<string, string> = {
  bybit: "Bybit",
  mexc: "MEXC",
  okx: "OKX",
  bitget: "Bitget",
  gateio: "Gate.io",
  kucoin: "KuCoin",
};

function generatePairs() {
  const pairs: { slug1: string; slug2: string }[] = [];
  for (let i = 0; i < slugs.length; i++) {
    for (let j = i + 1; j < slugs.length; j++) {
      pairs.push({ slug1: slugs[i], slug2: slugs[j] });
    }
  }
  return pairs;
}

export default function SravnitPage() {
  const pairs = generatePairs();

  return (
    <div className="min-h-screen">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="blue" className="mb-4">
              15 сравнений
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] font-display mb-4">
              Сравнение криптобирж{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                2026
              </span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Подробное сравнение криптобирж для России и СНГ. Выберите две
              биржи и узнайте, какая лучше по комиссиям, безопасности и
              доступности.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pairs.map(({ slug1, slug2 }) => (
              <Link
                key={`${slug1}-vs-${slug2}`}
                href={`/ru/sravnit/${slug1}-vs-${slug2}`}
                className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] p-5 transition-all hover:border-[var(--accent-primary)]/40 hover:scale-[1.02]"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <ExchangeLogo exchangeId={slug1} size={36} />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate">
                      {exchangeNames[slug1]}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold text-[var(--accent-primary)] uppercase shrink-0">
                  vs
                </span>

                <div className="flex items-center gap-3 flex-1 min-w-0 justify-end">
                  <div className="min-w-0 text-right">
                    <p className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate">
                      {exchangeNames[slug2]}
                    </p>
                  </div>
                  <ExchangeLogo exchangeId={slug2} size={36} />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/ru"
              className="text-sm text-[var(--accent-primary)] hover:underline"
            >
              &larr; Вернуться на главную
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
