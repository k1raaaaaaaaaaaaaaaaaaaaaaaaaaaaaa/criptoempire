"use client";

import { useState } from "react";
import { ArrowUpDown, Check, X as XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { exchanges, Exchange } from "@/data/exchanges";
import AffiliateButton from "@/components/ui/AffiliateButton";
import ExchangeLogo, { getExchangeColor } from "@/components/ui/ExchangeLogo";
import { formatPercent } from "@/lib/utils";

type SortKey = "rating" | "spotTaker" | "futuresTaker" | "name";
type SortDir = "asc" | "desc";

export default function ComparisonTable() {
  const [sortKey, setSortKey] = useState<SortKey>("rating");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const sorted = [...exchanges].sort((a, b) => {
    let aVal: number, bVal: number;
    switch (sortKey) {
      case "rating":
        aVal = a.rating; bVal = b.rating; break;
      case "spotTaker":
        aVal = a.fees.spotTaker; bVal = b.fees.spotTaker; break;
      case "futuresTaker":
        aVal = a.fees.futuresTaker; bVal = b.fees.futuresTaker; break;
      case "name":
        return sortDir === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      default: return 0;
    }
    return sortDir === "asc" ? aVal - bVal : bVal - aVal;
  });

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir(key === "spotTaker" || key === "futuresTaker" ? "asc" : "desc");
    }
  };

  const feeColor = (fee: number) => {
    if (fee === 0) return "text-emerald-400 font-bold";
    if (fee < 0.0005) return "text-emerald-400";
    if (fee <= 0.001) return "text-amber-400";
    return "text-red-400";
  };

  return (
    <section id="comparativa" className="py-16 sm:py-20 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-section font-bold text-[var(--text-primary)] font-display mb-4">
            Comparativa Completa
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Todos los exchanges lado a lado. Haz clic en las columnas para
            ordenar por comisiones o rating.
          </p>
        </motion.div>

        <div className="rounded-2xl border border-[var(--border)] overflow-hidden" style={{ background: "var(--gradient-card)" }}>
          <div className="overflow-x-auto">
            <table className="comparison-table w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--bg-primary)]/50">
                  <th className="sticky left-0 z-10 bg-[var(--bg-primary)] px-4 py-4 text-left font-semibold text-[var(--text-secondary)]">
                    <SortButton label="Exchange" sortKey="name" current={sortKey} dir={sortDir} onClick={toggleSort} />
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-[var(--text-secondary)]">
                    <SortButton label="Rating" sortKey="rating" current={sortKey} dir={sortDir} onClick={toggleSort} />
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-[var(--text-secondary)]">
                    <SortButton label="Comisión Spot" sortKey="spotTaker" current={sortKey} dir={sortDir} onClick={toggleSort} />
                  </th>
                  <th className="hidden sm:table-cell px-4 py-4 text-center font-semibold text-[var(--text-secondary)]">
                    <SortButton label="Comisión Futuros" sortKey="futuresTaker" current={sortKey} dir={sortDir} onClick={toggleSort} />
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-[var(--text-secondary)] min-w-[140px]">
                    Bono
                  </th>
                  <th className="hidden sm:table-cell px-4 py-4 text-center font-semibold text-[var(--text-secondary)]">
                    KYC
                  </th>
                  <th className="hidden md:table-cell px-4 py-4 text-center font-semibold text-[var(--text-secondary)]">
                    LATAM
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-[var(--text-secondary)] min-w-[130px]">
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((exchange) => (
                  <ExchangeRow key={exchange.id} exchange={exchange} feeColor={feeColor} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 text-xs text-[var(--text-muted)] text-center">
          Las comisiones pueden variar. Verifica siempre en el sitio oficial del exchange. Comisiones mostradas: maker / taker.
        </p>
      </div>
    </section>
  );
}

function ExchangeRow({ exchange, feeColor }: { exchange: Exchange; feeColor: (fee: number) => string }) {
  const isRecommended = exchange.badge === "popular";
  const brandColor = getExchangeColor(exchange.id);

  return (
    <tr
      className={`border-b border-[var(--border)]/50 hover:bg-[var(--bg-hover)]/50 transition-colors`}
      style={isRecommended ? { borderLeft: `3px solid ${brandColor}` } : { borderLeft: `3px solid transparent` }}
    >
      <td className="sticky left-0 z-10 bg-[var(--bg-card)] px-4 py-4" style={{ borderLeftColor: brandColor, borderLeftWidth: 3, borderLeftStyle: "solid" }}>
        <div className="flex items-center gap-3">
          <ExchangeLogo exchangeId={exchange.id} size={32} />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[var(--text-primary)] whitespace-nowrap">{exchange.name}</span>
              {isRecommended && (
                <span className="animate-pulse inline-flex items-center rounded-full bg-blue-500/15 border border-blue-500/30 px-2 py-0.5 text-[10px] font-semibold text-blue-400">
                  RECOMENDADO
                </span>
              )}
            </div>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-center">
        <span className="font-semibold text-amber-400">{exchange.rating.toFixed(1)}</span>
        <span className="text-amber-400 ml-0.5">★</span>
      </td>
      <td className="px-4 py-4 text-center">
        <span className={feeColor(exchange.fees.spotTaker)}>
          {formatPercent(exchange.fees.spotTaker)}
        </span>
      </td>
      <td className="hidden sm:table-cell px-4 py-4 text-center">
        {exchange.fees.futuresTaker > 0 ? (
          <span className={feeColor(exchange.fees.futuresTaker)}>
            {formatPercent(exchange.fees.futuresTaker)}
          </span>
        ) : (
          <span className="text-[var(--text-muted)]">N/A</span>
        )}
      </td>
      <td className="px-4 py-4 text-center">
        <span className="text-emerald-400 font-medium text-xs">{exchange.bonus.amount}</span>
      </td>
      <td className="hidden sm:table-cell px-4 py-4 text-center">
        <div className="group/kyc relative">
          {exchange.latam.kycRequired === "No" ? (
            <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-medium cursor-help">
              <Check className="h-3.5 w-3.5" /> No
            </span>
          ) : exchange.latam.kycRequired === "Básico" ? (
            <span className="text-amber-400 text-xs font-medium cursor-help">Básico</span>
          ) : (
            <span className="inline-flex items-center gap-1 text-red-400 text-xs font-medium cursor-help">
              <XIcon className="h-3.5 w-3.5" /> Obligatorio
            </span>
          )}
          <div className="absolute hidden group-hover/kyc:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] p-2 text-xs text-[var(--text-secondary)] shadow-xl z-20">
            {exchange.latam.kycRequired === "No"
              ? "No necesitas enviar documentos para operar"
              : exchange.latam.kycRequired === "Básico"
              ? "Solo datos personales, sin documentos"
              : "Verificación de identidad completa obligatoria"}
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell px-4 py-4 text-center">
        {exchange.latam.available ? (
          <Check className="h-5 w-5 text-emerald-400 mx-auto" />
        ) : (
          <XIcon className="h-5 w-5 text-red-400 mx-auto" />
        )}
      </td>
      <td className="px-4 py-4 text-center">
        <AffiliateButton
          href={exchange.bonus.affiliateUrl}
          label="Abrir"
          variant={isRecommended ? "primary" : "secondary"}
          size="sm"
        />
      </td>
    </tr>
  );
}

function SortButton({ label, sortKey, current, dir, onClick }: {
  label: string; sortKey: SortKey; current: SortKey; dir: SortDir; onClick: (key: SortKey) => void;
}) {
  return (
    <button
      onClick={() => onClick(sortKey)}
      className="inline-flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors whitespace-nowrap"
    >
      {label}
      <ArrowUpDown className={`h-3.5 w-3.5 ${current === sortKey ? "text-[var(--accent-primary)]" : ""}`} />
      {current === sortKey && (
        <span className="text-[10px] text-[var(--accent-primary)]">{dir === "asc" ? "↑" : "↓"}</span>
      )}
    </button>
  );
}
