"use client";

import { useState } from "react";
import { Gift, Tag, Clock } from "lucide-react";
import { exchanges } from "@/data/exchanges";
import AffiliateButton from "@/components/ui/AffiliateButton";
import PromoCodeCard from "@/components/ui/PromoCodeCard";
import Badge from "@/components/ui/Badge";
import ExchangeLogo from "@/components/ui/ExchangeLogo";

type FilterType = "all" | "registro" | "deposito" | "trading";

interface Promo {
  exchangeId: string;
  exchangeName: string;
  logo: string;
  affiliateUrl: string;
  promoCode?: string;
  bonusAmount: string;
  bonusType: string;
  description: string;
  category: FilterType;
  expiry?: string;
}

const promos: Promo[] = [
  {
    exchangeId: "bybit",
    exchangeName: "Bybit",
    logo: "/logos/bybit.svg",
    affiliateUrl: exchanges[0].bonus.affiliateUrl,
    promoCode: "CRIPTOCOMPARA",
    bonusAmount: "Hasta $30,000 USDT",
    bonusType: "Registro + Depósito",
    description:
      "Regístrate en Bybit y obtén hasta $30,000 USDT en bonos. Incluye bono por registro, primer depósito y volumen de trading.",
    category: "registro",
    expiry: "Sin fecha límite",
  },
  {
    exchangeId: "mexc",
    exchangeName: "MEXC",
    logo: "/logos/mexc.svg",
    affiliateUrl: exchanges[1].bonus.affiliateUrl,
    promoCode: "CRIPTOCOMPARA",
    bonusAmount: "Hasta $1,000 USDT",
    bonusType: "Registro + Trading",
    description:
      "Abre tu cuenta en MEXC con nuestro código y desbloquea hasta $1,000 USDT en recompensas por trading. ¡Comisiones 0% maker!",
    category: "trading",
  },
  {
    exchangeId: "okx",
    exchangeName: "OKX",
    logo: "/logos/okx.svg",
    affiliateUrl: exchanges[3].bonus.affiliateUrl,
    promoCode: "CRIPTOCOMPARA",
    bonusAmount: "Hasta $10,000 USDT",
    bonusType: "Registro + Depósito",
    description:
      "Regístrate en OKX con nuestro enlace y recibe hasta $10,000 USDT. Bonos por depósito y volumen de trading durante los primeros 30 días.",
    category: "deposito",
  },
  {
    exchangeId: "binance",
    exchangeName: "Binance",
    logo: "/logos/binance.svg",
    affiliateUrl: exchanges[2].bonus.affiliateUrl,
    promoCode: "CRIPTOCOMPARA",
    bonusAmount: "Hasta $600 USDT",
    bonusType: "Registro + Depósito",
    description:
      "Usa nuestro código al crear tu cuenta de Binance y recibe hasta $600 USDT en cupones de trading y descuentos en comisiones.",
    category: "registro",
  },
  {
    exchangeId: "bitget",
    exchangeName: "Bitget",
    logo: "/logos/bitget.svg",
    affiliateUrl: exchanges[5].bonus.affiliateUrl,
    promoCode: "CRIPTOCOMPARA",
    bonusAmount: "Hasta $6,200 USDT",
    bonusType: "Registro + Depósito",
    description:
      "Crea tu cuenta de Bitget y recibe hasta $6,200 USDT. Incluye bono de bienvenida y recompensas por copy trading.",
    category: "deposito",
  },
  {
    exchangeId: "kucoin",
    exchangeName: "KuCoin",
    logo: "/logos/kucoin.svg",
    affiliateUrl: exchanges[4].bonus.affiliateUrl,
    promoCode: "CRIPTOCOMPARA",
    bonusAmount: "Hasta $500 USDT",
    bonusType: "Registro",
    description:
      "Regístrate en KuCoin con nuestro enlace y obtén hasta $500 USDT en bonos de bienvenida. Sin KYC requerido.",
    category: "registro",
  },
  {
    exchangeId: "gateio",
    exchangeName: "Gate.io",
    logo: "/logos/gateio.svg",
    affiliateUrl: exchanges[6].bonus.affiliateUrl,
    promoCode: "CRIPTOCOMPARA",
    bonusAmount: "Hasta $5,500 USDT",
    bonusType: "Registro + Depósito",
    description:
      "Abre tu cuenta en Gate.io y recibe hasta $5,500 USDT en bonos. Accede a más de 1,700 criptomonedas desde el primer día.",
    category: "deposito",
  },
  {
    exchangeId: "cryptocom",
    exchangeName: "Crypto.com",
    logo: "/logos/cryptocom.svg",
    affiliateUrl: exchanges[9].bonus.affiliateUrl,
    bonusAmount: "Hasta $2,000 USDT",
    bonusType: "Registro + Depósito",
    description:
      "Únete a Crypto.com y obtén hasta $2,000 USDT en bonos. Además, solicita la tarjeta Visa con cashback en cripto.",
    category: "registro",
  },
];

const filterOptions: { value: FilterType; label: string }[] = [
  { value: "all", label: "Todas" },
  { value: "registro", label: "Nuevo usuario" },
  { value: "deposito", label: "Depósito" },
  { value: "trading", label: "Trading" },
];

export default function PromocionesPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered =
    filter === "all" ? promos : promos.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 mb-6">
            <Gift className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-400">
              Ofertas exclusivas
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-[var(--text-primary)] font-display mb-4">
            Promociones y Bonos
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Códigos promocionales exclusivos y bonos de bienvenida de los
            mejores exchanges. Usa nuestros enlaces para obtener los mejores
            beneficios.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                filter === opt.value
                  ? "bg-[var(--accent-primary)] text-white"
                  : "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]/30 hover:text-[var(--text-primary)]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Promo Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((promo) => (
            <div
              key={promo.exchangeId}
              className="rounded-2xl border border-[var(--border)] p-6 hover:border-[var(--accent-primary)]/20 transition-colors"
              style={{ background: "var(--gradient-card)" }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <ExchangeLogo exchangeId={promo.exchangeId} size={36} />
                <div className="flex-1">
                  <h3 className="font-bold text-[var(--text-primary)] font-display text-lg">
                    {promo.exchangeName}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        promo.category === "registro"
                          ? "blue"
                          : promo.category === "deposito"
                          ? "green"
                          : "amber"
                      }
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {promo.bonusType}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Bonus Amount */}
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 mb-4 text-center">
                <div className="text-xs text-emerald-400 mb-0.5">Bono disponible</div>
                <div className="text-2xl font-bold text-emerald-300">
                  {promo.bonusAmount}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {promo.description}
              </p>

              {/* Promo Code */}
              {promo.promoCode && (
                <div className="mb-4">
                  <PromoCodeCard code={promo.promoCode} />
                </div>
              )}

              {/* Expiry */}
              {promo.expiry && (
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-4">
                  <Clock className="h-3.5 w-3.5" />
                  {promo.expiry}
                </div>
              )}

              {/* CTA */}
              <AffiliateButton
                href={promo.affiliateUrl}
                label={`Obtener bono en ${promo.exchangeName}`}
                variant="primary"
                size="md"
                className="w-full"
              />

              <p className="text-[10px] text-[var(--text-muted)] text-center mt-2">
                Este sitio puede recibir compensación por referidos
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-xl border border-[var(--border)] p-4 text-center">
          <p className="text-xs text-[var(--text-muted)]">
            Los bonos y promociones están sujetos a términos y condiciones de cada
            exchange. Los montos máximos pueden requerir depósitos o volumen de trading
            específicos. No somos asesores financieros. Invierte responsablemente.
          </p>
        </div>
      </div>
    </div>
  );
}
