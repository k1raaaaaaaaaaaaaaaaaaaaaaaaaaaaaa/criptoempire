"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Ticker from "@/components/ui/Ticker";
import { exchanges } from "@/data/exchanges";
import { formatPercent } from "@/lib/utils";
import { getExchangeColor } from "@/components/ui/ExchangeLogo";

export default function HeroSection() {
  const topExchanges = exchanges.slice(0, 4);

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Background effects */}
      <div className="absolute inset-0 hero-grid" />

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating crypto symbols */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="float-1 absolute top-20 left-[10%] text-5xl opacity-10 select-none">₿</div>
        <div className="float-2 absolute top-40 right-[15%] text-4xl opacity-10 select-none">Ξ</div>
        <div className="float-3 absolute bottom-32 left-[20%] text-3xl opacity-10 select-none">◈</div>
        <div className="float-4 absolute top-28 right-[30%] text-6xl opacity-10 select-none">₮</div>
        <div className="float-5 absolute bottom-20 right-[10%] text-4xl opacity-10 select-none">◎</div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="flex items-center gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
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
                Actualizado Marzo 2026
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-hero font-extrabold text-[var(--text-primary)] font-display leading-tight mb-6">
              Encuentra el Mejor{" "}
              <span className="gradient-text">Exchange de Cripto</span>{" "}
              para ti
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Comparamos comisiones, bonos y seguridad de los 10 exchanges más
              populares en Latinoamérica
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
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
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 text-sm text-[var(--text-secondary)]">
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

          {/* Right — Floating Dashboard Card (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block w-80 shrink-0"
          >
            <div className="float-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  Top Exchanges
                </span>
                <span className="text-xs text-[var(--text-muted)] ml-auto">en vivo</span>
              </div>

              <div className="space-y-3">
                {topExchanges.map((ex) => (
                  <div
                    key={ex.id}
                    className="flex items-center gap-3 rounded-lg bg-white/5 p-2.5"
                  >
                    <div
                      className="h-8 w-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: getExchangeColor(ex.id) }}
                    >
                      <span className="text-white text-[10px] font-extrabold">
                        {ex.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-[var(--text-primary)]">
                        {ex.name}
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        Spot: {formatPercent(ex.fees.spotTaker)}
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-emerald-400">
                      {ex.rating.toFixed(1)} ★
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#comparativa"
                className="flex items-center justify-center gap-1.5 mt-4 rounded-xl py-2.5 text-sm font-semibold text-white w-full"
                style={{ background: "var(--gradient-cta)" }}
              >
                Ver Comparativa
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ticker */}
      <Ticker />
    </section>
  );
}
