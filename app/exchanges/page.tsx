import { Metadata } from "next";
import Link from "next/link";
import { exchanges } from "@/data/exchanges";
import ExchangeLogo from "@/components/ui/ExchangeLogo";
import StarRating from "@/components/ui/StarRating";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";
import { formatPercent } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Todos los Exchanges de Criptomonedas 2026 | CriptoEmpire",
  description:
    "Lista completa de los 10 mejores exchanges de criptomonedas para Latinoamérica. Compara comisiones, seguridad y bonos.",
};

const badgeConfig: Record<string, { label: string; variant: "blue" | "green" | "amber" | "purple" }> = {
  popular: { label: "⚡ Más popular", variant: "blue" },
  "lowest-fees": { label: "💰 Mejores comisiones", variant: "green" },
  "best-liquidity": { label: "🔥 Mayor liquidez", variant: "amber" },
  "best-beginners": { label: "🎓 Principiantes", variant: "purple" },
};

export default function ExchangesPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[var(--text-primary)] font-display mb-4">
            Todos los Exchanges
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Análisis detallado de los 10 exchanges más populares disponibles en
            Latinoamérica
          </p>
        </div>

        <div className="grid gap-4">
          {exchanges.map((exchange) => {
            const badge = exchange.badge ? badgeConfig[exchange.badge] : null;

            return (
              <div
                key={exchange.id}
                className="rounded-2xl border border-[var(--border)] p-5 sm:p-6 hover:border-[var(--accent-primary)]/20 transition-colors"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <ExchangeLogo exchangeId={exchange.id} size={32} />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link
                          href={`/exchanges/${exchange.slug}`}
                          className="font-bold text-[var(--text-primary)] font-display hover:text-[var(--accent-primary)] transition-colors"
                        >
                          {exchange.name}
                        </Link>
                        {badge && (
                          <Badge variant={badge.variant}>{badge.label}</Badge>
                        )}
                      </div>
                      <StarRating rating={exchange.rating} size={13} />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div>
                      <div className="text-[var(--text-muted)] text-xs">Spot</div>
                      <div className="font-semibold text-[var(--text-primary)]">
                        {formatPercent(exchange.fees.spotTaker)}
                      </div>
                    </div>
                    <div>
                      <div className="text-[var(--text-muted)] text-xs">Futuros</div>
                      <div className="font-semibold text-[var(--text-primary)]">
                        {exchange.features.futures
                          ? formatPercent(exchange.fees.futuresTaker)
                          : "N/A"}
                      </div>
                    </div>
                    <div>
                      <div className="text-[var(--text-muted)] text-xs">Bono</div>
                      <div className="font-semibold text-emerald-400 text-xs">
                        {exchange.bonus.amount}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/exchanges/${exchange.slug}`}
                        className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/30 transition-colors"
                      >
                        Ver review
                      </Link>
                      <AffiliateButton
                        href={exchange.bonus.affiliateUrl}
                        label="Abrir Cuenta"
                        size="sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
