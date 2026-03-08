"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Animated grid */}
      <div className="absolute inset-0 hero-grid" />

      {/* Floating crypto icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="float-1 absolute top-20 left-[10%] text-5xl opacity-10 select-none">₿</div>
        <div className="float-2 absolute top-40 right-[15%] text-4xl opacity-10 select-none">Ξ</div>
        <div className="float-3 absolute bottom-32 left-[20%] text-3xl opacity-10 select-none">◈</div>
        <div className="float-4 absolute top-28 right-[30%] text-6xl opacity-10 select-none">₮</div>
        <div className="float-5 absolute bottom-20 right-[10%] text-4xl opacity-10 select-none">◎</div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 px-4 py-1.5 mb-8"
          >
            <Sparkles className="h-4 w-4 text-[var(--accent-primary)]" />
            <span className="text-sm font-medium text-[var(--accent-primary)]">
              Actualizado Marzo 2025
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-hero font-extrabold text-[var(--text-primary)] font-display leading-tight mb-6">
            Encuentra el Mejor{" "}
            <span className="gradient-text">Exchange de Cripto</span>{" "}
            para ti
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Comparamos comisiones, bonos y seguridad de los 10 exchanges más
            populares en Latinoamérica
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#comparativa"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto justify-center"
              style={{ background: "var(--gradient-cta)" }}
            >
              Ver Comparativa
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#quiz"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--accent-primary)] px-8 py-4 text-base font-semibold text-[var(--accent-primary)] transition-all hover:bg-[var(--accent-primary)]/10 w-full sm:w-auto justify-center"
            >
              ¿Cuál me conviene?
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-secondary)]">✓</span>
              Datos actualizados
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-secondary)]">✓</span>
              Sin costo para ti
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-secondary)]">✓</span>
              +50,000 usuarios
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ticker bar */}
      <div className="border-t border-b border-[var(--border)] bg-[var(--bg-secondary)]/50 backdrop-blur-sm overflow-hidden">
        <div className="ticker-animate flex items-center whitespace-nowrap py-3">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <TickerItem symbol="BTC" price="$97,432" change="+2.3%" positive />
              <TickerItem symbol="ETH" price="$3,891" change="+1.1%" positive />
              <TickerItem symbol="BNB" price="$612" change="-0.4%" positive={false} />
              <TickerItem symbol="SOL" price="$198" change="+4.2%" positive />
              <TickerItem symbol="XRP" price="$2.41" change="+0.8%" positive />
              <TickerItem symbol="ADA" price="$0.98" change="-1.2%" positive={false} />
              <TickerItem symbol="DOGE" price="$0.34" change="+3.1%" positive />
              <TickerItem symbol="USDT" price="$1.00" change="0.0%" positive />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TickerItem({
  symbol,
  price,
  change,
  positive,
}: {
  symbol: string;
  price: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="font-semibold text-[var(--text-primary)]">{symbol}</span>
      <span className="text-[var(--text-secondary)]">{price}</span>
      <span className={positive ? "text-emerald-400" : "text-red-400"}>
        {positive ? "↑" : "↓"}{change}
      </span>
    </div>
  );
}
