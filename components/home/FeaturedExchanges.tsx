"use client";

import { motion } from "framer-motion";
import { getFeaturedExchanges } from "@/data/exchanges";
import StarRating from "@/components/ui/StarRating";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";
import ExchangeLogo, { getExchangeColor } from "@/components/ui/ExchangeLogo";
import { formatPercent } from "@/lib/utils";

const badgeConfig: Record<string, { label: string; icon: string; variant: "blue" | "green" | "amber" | "purple" }> = {
  popular: { label: "El más popular", icon: "⚡", variant: "blue" },
  "lowest-fees": { label: "Mejores comisiones", icon: "💰", variant: "green" },
  "best-liquidity": { label: "Mayor liquidez", icon: "🔥", variant: "amber" },
  "best-beginners": { label: "Mejor para principiantes", icon: "🎓", variant: "purple" },
  "no-kyc": { label: "Sin KYC", icon: "🔓", variant: "green" },
};

const volume24h: Record<string, string> = {
  bybit: "$12.4B",
  mexc: "$3.2B",
  okx: "$8.7B",
};

function ScoreRing({ score, size = 56 }: { score: number; size?: number }) {
  const maxScore = 10;
  const percentage = (score / maxScore) * 100;
  const radius = (size - 6) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--border)"
          strokeWidth={3}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--accent-primary)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-[var(--text-primary)]">
          {score.toFixed(1)}
        </span>
      </div>
    </div>
  );
}

export default function FeaturedExchanges() {
  const featured = getFeaturedExchanges();

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section font-bold text-[var(--text-primary)] font-display mb-4">
            Más Populares
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Los exchanges más recomendados por nuestra comunidad en Latinoamérica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((exchange, i) => {
            const badge = exchange.badge ? badgeConfig[exchange.badge] : null;
            const overallScore =
              (exchange.scores.security +
                exchange.scores.fees +
                exchange.scores.liquidity +
                exchange.scores.ux +
                exchange.scores.latamSupport) /
              5;
            const brandColor = getExchangeColor(exchange.id);

            return (
              <motion.div
                key={exchange.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative rounded-2xl border border-[var(--border)] overflow-hidden"
                style={{
                  background: "var(--gradient-card)",
                  perspective: "1000px",
                }}
              >
                {/* Brand color top border */}
                <div className="h-1" style={{ backgroundColor: brandColor }} />

                <div className="p-6 sm:p-8 transition-transform duration-300 group-hover:-translate-y-1">
                  {/* Badge */}
                  {badge && (
                    <div className="mb-4">
                      <Badge variant={badge.variant}>
                        {badge.icon} {badge.label}
                      </Badge>
                    </div>
                  )}

                  {/* Logo, Name, Score Ring */}
                  <div className="flex items-center gap-4 mb-4">
                    <ExchangeLogo exchangeId={exchange.id} size={48} />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] font-display">
                        {exchange.name}
                      </h3>
                      <StarRating rating={exchange.rating} size={14} />
                    </div>
                    <ScoreRing score={overallScore} />
                  </div>

                  {/* Country flags */}
                  <div className="flex items-center gap-1.5 mb-4 text-sm">
                    <span title="Argentina">🇦🇷</span>
                    <span title="México">🇲🇽</span>
                    <span title="Colombia">🇨🇴</span>
                    <span title="Perú">🇵🇪</span>
                    <span title="Chile">🇨🇱</span>
                    <span className="text-xs text-[var(--text-muted)] ml-1">Disponible</span>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 rounded-xl bg-[var(--bg-primary)]/50 p-3 mb-4 text-center">
                    <div>
                      <div className="text-[10px] text-[var(--text-muted)]">Spot</div>
                      <div className="text-sm font-semibold text-[var(--text-primary)]">
                        {formatPercent(exchange.fees.spotTaker)}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[var(--text-muted)]">Futuros</div>
                      <div className="text-sm font-semibold text-[var(--text-primary)]">
                        {formatPercent(exchange.fees.futuresTaker)}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[var(--text-muted)]">Vol. 24h</div>
                      <div className="text-sm font-semibold text-[var(--text-primary)]">
                        {volume24h[exchange.id] || "N/A"}
                      </div>
                    </div>
                  </div>

                  {/* Bonus — prominent pill */}
                  <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 mb-6 text-center shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <div className="text-xs text-emerald-400 mb-0.5">Bono de bienvenida</div>
                    <div className="text-lg font-bold text-emerald-300">
                      {exchange.bonus.amount}
                    </div>
                  </div>

                  {/* CTA */}
                  <AffiliateButton
                    href={exchange.bonus.affiliateUrl}
                    label="ABRIR CUENTA →"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  />

                  <p className="text-[10px] text-[var(--text-muted)] text-center mt-3">
                    Este sitio puede recibir compensación por referidos
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
