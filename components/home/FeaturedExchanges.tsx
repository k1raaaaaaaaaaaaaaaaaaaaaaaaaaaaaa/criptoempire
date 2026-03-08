"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedExchanges } from "@/data/exchanges";
import StarRating from "@/components/ui/StarRating";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";
import { formatPercent } from "@/lib/utils";

const badgeConfig: Record<string, { label: string; icon: string; variant: "blue" | "green" | "amber" | "purple" }> = {
  popular: { label: "El más popular", icon: "⚡", variant: "blue" },
  "lowest-fees": { label: "Mejores comisiones", icon: "💰", variant: "green" },
  "best-liquidity": { label: "Mayor liquidez", icon: "🔥", variant: "amber" },
  "best-beginners": { label: "Mejor para principiantes", icon: "🎓", variant: "purple" },
  "no-kyc": { label: "Sin KYC", icon: "🔓", variant: "green" },
};

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

            return (
              <motion.div
                key={exchange.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card-hover relative rounded-2xl border border-[var(--border)] p-6 sm:p-8 overflow-hidden"
                style={{ background: "var(--gradient-card)" }}
              >
                {/* Recommended highlight */}
                {exchange.badge === "popular" && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--accent-primary)]" />
                )}

                {/* Badge */}
                {badge && (
                  <div className="mb-4">
                    <Badge variant={badge.variant}>
                      {badge.icon} {badge.label}
                    </Badge>
                  </div>
                )}

                {/* Logo & Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden p-2">
                    <Image
                      src={exchange.logo}
                      alt={exchange.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] font-display">
                      {exchange.name}
                    </h3>
                    <StarRating rating={exchange.rating} size={14} />
                  </div>
                </div>

                {/* Key selling point */}
                <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                  {exchange.description}
                </p>

                {/* Fee highlight */}
                <div className="flex items-center justify-between rounded-xl bg-[var(--bg-primary)]/50 p-3 mb-4">
                  <div>
                    <div className="text-xs text-[var(--text-muted)]">Comisión Spot</div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      {formatPercent(exchange.fees.spotMaker)} / {formatPercent(exchange.fees.spotTaker)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[var(--text-muted)]">Comisión Futuros</div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      {formatPercent(exchange.fees.futuresMaker)} / {formatPercent(exchange.fees.futuresTaker)}
                    </div>
                  </div>
                </div>

                {/* Bonus */}
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3 mb-6 text-center">
                  <div className="text-xs text-emerald-400 mb-0.5">Bono de bienvenida</div>
                  <div className="text-base font-bold text-emerald-300">
                    {exchange.bonus.amount}
                  </div>
                </div>

                {/* CTA */}
                <AffiliateButton
                  href={exchange.bonus.affiliateUrl}
                  label={`ABRIR CUENTA →`}
                  variant="primary"
                  size="lg"
                  className="w-full"
                />

                <p className="text-[10px] text-[var(--text-muted)] text-center mt-3">
                  Este sitio puede recibir compensación por referidos
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
