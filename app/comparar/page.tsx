"use client";

import { useState } from "react";
import { Check, X as XIcon, ChevronDown, Trophy } from "lucide-react";
import { exchanges, Exchange } from "@/data/exchanges";
import StarRating from "@/components/ui/StarRating";
import ScoreBar from "@/components/ui/ScoreBar";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";
import ExchangeLogo from "@/components/ui/ExchangeLogo";
import { formatPercent } from "@/lib/utils";

export default function CompararPage() {
  const [exchangeA, setExchangeA] = useState<Exchange>(exchanges[0]);
  const [exchangeB, setExchangeB] = useState<Exchange>(exchanges[1]);

  const winner = (a: number, b: number, lowerIsBetter = false) => {
    if (a === b) return "tie";
    if (lowerIsBetter) return a < b ? "a" : "b";
    return a > b ? "a" : "b";
  };

  const overallScoreA =
    (exchangeA.scores.security +
      exchangeA.scores.fees +
      exchangeA.scores.liquidity +
      exchangeA.scores.ux +
      exchangeA.scores.latamSupport) /
    5;
  const overallScoreB =
    (exchangeB.scores.security +
      exchangeB.scores.fees +
      exchangeB.scores.liquidity +
      exchangeB.scores.ux +
      exchangeB.scores.latamSupport) /
    5;

  const overallWinner = overallScoreA > overallScoreB ? exchangeA : overallScoreB > overallScoreA ? exchangeB : null;

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[var(--text-primary)] font-display mb-4">
            Comparar Exchanges
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Selecciona dos exchanges para compararlos lado a lado en comisiones,
            seguridad, funciones y soporte para LATAM
          </p>
        </div>

        {/* Selectors */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-12">
          <ExchangeSelector
            selected={exchangeA}
            onChange={setExchangeA}
            exclude={exchangeB.id}
            label="Exchange A"
          />
          <ExchangeSelector
            selected={exchangeB}
            onChange={setExchangeB}
            exclude={exchangeA.id}
            label="Exchange B"
          />
        </div>

        {/* Side-by-side Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-12">
          <ExchangeSummaryCard exchange={exchangeA} isWinner={overallWinner?.id === exchangeA.id} />
          <ExchangeSummaryCard exchange={exchangeB} isWinner={overallWinner?.id === exchangeB.id} />
        </div>

        {/* Feature Comparison Table */}
        <div
          className="rounded-2xl border border-[var(--border)] overflow-hidden mb-12"
          style={{ background: "var(--gradient-card)" }}
        >
          <div className="grid grid-cols-3 border-b border-[var(--border)] bg-[var(--bg-primary)]/50">
            <div className="p-4 text-sm font-semibold text-[var(--text-muted)]">Característica</div>
            <div className="p-4 text-sm font-semibold text-[var(--text-primary)] text-center">{exchangeA.name}</div>
            <div className="p-4 text-sm font-semibold text-[var(--text-primary)] text-center">{exchangeB.name}</div>
          </div>

          <CompRow
            label="Rating"
            a={`${exchangeA.rating.toFixed(1)} ★`}
            b={`${exchangeB.rating.toFixed(1)} ★`}
            winner={winner(exchangeA.rating, exchangeB.rating)}
          />
          <CompRow
            label="Comisión Spot (taker)"
            a={formatPercent(exchangeA.fees.spotTaker)}
            b={formatPercent(exchangeB.fees.spotTaker)}
            winner={winner(exchangeA.fees.spotTaker, exchangeB.fees.spotTaker, true)}
          />
          <CompRow
            label="Comisión Futuros (taker)"
            a={exchangeA.features.futures ? formatPercent(exchangeA.fees.futuresTaker) : "N/A"}
            b={exchangeB.features.futures ? formatPercent(exchangeB.fees.futuresTaker) : "N/A"}
            winner={
              exchangeA.features.futures && exchangeB.features.futures
                ? winner(exchangeA.fees.futuresTaker, exchangeB.fees.futuresTaker, true)
                : "tie"
            }
          />
          <CompRow
            label="Bono Bienvenida"
            a={exchangeA.bonus.amount}
            b={exchangeB.bonus.amount}
            winner="tie"
          />
          <CompRow
            label="KYC Requerido"
            a={exchangeA.latam.kycRequired}
            b={exchangeB.latam.kycRequired}
            winner="tie"
          />
          <CompRowBool label="Trading Spot" a={exchangeA.features.spot} b={exchangeB.features.spot} />
          <CompRowBool label="Futuros" a={exchangeA.features.futures} b={exchangeB.features.futures} />
          <CompRowBool label="Margen" a={exchangeA.features.margin} b={exchangeB.features.margin} />
          <CompRowBool label="Staking" a={exchangeA.features.staking} b={exchangeB.features.staking} />
          <CompRowBool label="P2P" a={exchangeA.features.p2p} b={exchangeB.features.p2p} />
          <CompRowBool label="NFTs" a={exchangeA.features.nfts} b={exchangeB.features.nfts} />
          <CompRowBool label="2FA" a={exchangeA.security.twoFactor} b={exchangeB.security.twoFactor} />
          <CompRowBool label="Almacenamiento frío" a={exchangeA.security.coldStorage} b={exchangeB.security.coldStorage} />
          <CompRowBool label="Fondo de seguro" a={exchangeA.security.insuranceFund} b={exchangeB.security.insuranceFund} />
          <CompRowBool label="Reservas auditadas" a={exchangeA.security.auditedReserves} b={exchangeB.security.auditedReserves} />

          {/* Scores */}
          <CompRow
            label="Seguridad"
            a={`${exchangeA.scores.security}/10`}
            b={`${exchangeB.scores.security}/10`}
            winner={winner(exchangeA.scores.security, exchangeB.scores.security)}
          />
          <CompRow
            label="Comisiones"
            a={`${exchangeA.scores.fees}/10`}
            b={`${exchangeB.scores.fees}/10`}
            winner={winner(exchangeA.scores.fees, exchangeB.scores.fees)}
          />
          <CompRow
            label="Liquidez"
            a={`${exchangeA.scores.liquidity}/10`}
            b={`${exchangeB.scores.liquidity}/10`}
            winner={winner(exchangeA.scores.liquidity, exchangeB.scores.liquidity)}
          />
          <CompRow
            label="Experiencia de usuario"
            a={`${exchangeA.scores.ux}/10`}
            b={`${exchangeB.scores.ux}/10`}
            winner={winner(exchangeA.scores.ux, exchangeB.scores.ux)}
          />
          <CompRow
            label="Soporte LATAM"
            a={`${exchangeA.scores.latamSupport}/10`}
            b={`${exchangeB.scores.latamSupport}/10`}
            winner={winner(exchangeA.scores.latamSupport, exchangeB.scores.latamSupport)}
          />
        </div>

        {/* Verdict */}
        <div
          className="rounded-2xl border border-[var(--accent-primary)]/30 p-6 sm:p-8 text-center"
          style={{ background: "var(--gradient-card)" }}
        >
          <Trophy className="h-10 w-10 text-amber-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-3">
            Veredicto
          </h2>
          {overallWinner ? (
            <>
              <p className="text-lg text-[var(--text-secondary)] mb-2">
                En nuestra comparación general,{" "}
                <span className="font-bold text-[var(--accent-primary)]">
                  {overallWinner.name}
                </span>{" "}
                obtiene una puntuación mayor ({overallWinner.id === exchangeA.id ? overallScoreA.toFixed(1) : overallScoreB.toFixed(1)}/10
                vs {overallWinner.id === exchangeA.id ? overallScoreB.toFixed(1) : overallScoreA.toFixed(1)}/10).
              </p>
              <p className="text-sm text-[var(--text-muted)] mb-6">
                Sin embargo, la mejor opción depende de tus necesidades específicas.
                Revisa las categorías individuales para tomar una decisión informada.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <AffiliateButton
                  href={exchangeA.bonus.affiliateUrl}
                  label={`Abrir ${exchangeA.name}`}
                  variant={overallWinner.id === exchangeA.id ? "primary" : "secondary"}
                />
                <AffiliateButton
                  href={exchangeB.bonus.affiliateUrl}
                  label={`Abrir ${exchangeB.name}`}
                  variant={overallWinner.id === exchangeB.id ? "primary" : "secondary"}
                />
              </div>
            </>
          ) : (
            <p className="text-lg text-[var(--text-secondary)]">
              Ambos exchanges obtienen la misma puntuación general.
              La mejor opción depende de tus necesidades específicas.
            </p>
          )}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-[var(--text-muted)] text-center">
          No somos asesores financieros. Las comisiones pueden variar. Verifica
          siempre en el sitio oficial. Este sitio puede recibir compensación por referidos.
        </p>
      </div>
    </div>
  );
}

/* ---- Subcomponents ---- */

function ExchangeSelector({
  selected,
  onChange,
  exclude,
  label,
}: {
  selected: Exchange;
  onChange: (e: Exchange) => void;
  exclude: string;
  label: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <label className="block text-xs text-[var(--text-muted)] mb-2 font-medium">{label}</label>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 rounded-xl border border-[var(--border)] p-3 hover:border-[var(--accent-primary)]/30 transition-colors text-left"
        style={{ background: "var(--gradient-card)" }}
      >
        <ExchangeLogo exchangeId={selected.id} size={24} />
        <span className="font-semibold text-[var(--text-primary)] flex-1 text-sm sm:text-base">
          {selected.name}
        </span>
        <ChevronDown className={`h-4 w-4 text-[var(--text-muted)] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className="absolute z-20 mt-2 w-full rounded-xl border border-[var(--border)] shadow-2xl overflow-hidden"
          style={{ background: "var(--bg-card)" }}
        >
          {exchanges
            .filter((e) => e.id !== exclude)
            .map((ex) => (
              <button
                key={ex.id}
                onClick={() => {
                  onChange(ex);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[var(--bg-hover)] transition-colors text-sm ${
                  ex.id === selected.id ? "bg-[var(--accent-primary)]/10" : ""
                }`}
              >
                <ExchangeLogo exchangeId={ex.id} size={18} />
                <span className="text-[var(--text-primary)]">{ex.name}</span>
                <span className="text-xs text-[var(--text-muted)] ml-auto">{ex.rating.toFixed(1)}★</span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}

function ExchangeSummaryCard({
  exchange,
  isWinner,
}: {
  exchange: Exchange;
  isWinner: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 ${
        isWinner ? "border-[var(--accent-primary)]/50 glow-blue" : "border-[var(--border)]"
      }`}
      style={{ background: "var(--gradient-card)" }}
    >
      {isWinner && (
        <Badge variant="blue" className="mb-3">🏆 Ganador General</Badge>
      )}
      <div className="flex items-center gap-3 mb-4">
        <ExchangeLogo exchangeId={exchange.id} size={32} />
        <div>
          <h3 className="font-bold text-[var(--text-primary)] font-display">{exchange.name}</h3>
          <StarRating rating={exchange.rating} size={13} />
        </div>
      </div>

      <div className="space-y-3 mb-5">
        <ScoreBar label="Seguridad" score={exchange.scores.security} />
        <ScoreBar label="Comisiones" score={exchange.scores.fees} />
        <ScoreBar label="Liquidez" score={exchange.scores.liquidity} />
        <ScoreBar label="UX" score={exchange.scores.ux} />
        <ScoreBar label="LATAM" score={exchange.scores.latamSupport} />
      </div>

      <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3 mb-4 text-center">
        <div className="text-xs text-emerald-400">Bono</div>
        <div className="text-sm font-bold text-emerald-300">{exchange.bonus.amount}</div>
      </div>

      <AffiliateButton
        href={exchange.bonus.affiliateUrl}
        label={`Abrir ${exchange.name}`}
        size="sm"
        className="w-full"
      />
    </div>
  );
}

function CompRow({
  label,
  a,
  b,
  winner,
}: {
  label: string;
  a: string;
  b: string;
  winner: "a" | "b" | "tie";
}) {
  return (
    <div className="grid grid-cols-3 border-b border-[var(--border)]/50">
      <div className="p-3 sm:p-4 text-sm text-[var(--text-secondary)]">{label}</div>
      <div
        className={`p-3 sm:p-4 text-sm text-center font-medium ${
          winner === "a" ? "text-emerald-400" : "text-[var(--text-primary)]"
        }`}
      >
        {a} {winner === "a" && "✓"}
      </div>
      <div
        className={`p-3 sm:p-4 text-sm text-center font-medium ${
          winner === "b" ? "text-emerald-400" : "text-[var(--text-primary)]"
        }`}
      >
        {b} {winner === "b" && "✓"}
      </div>
    </div>
  );
}

function CompRowBool({ label, a, b }: { label: string; a: boolean; b: boolean }) {
  return (
    <div className="grid grid-cols-3 border-b border-[var(--border)]/50">
      <div className="p-3 sm:p-4 text-sm text-[var(--text-secondary)]">{label}</div>
      <div className="p-3 sm:p-4 flex justify-center">
        {a ? <Check className="h-5 w-5 text-emerald-400" /> : <XIcon className="h-5 w-5 text-red-400" />}
      </div>
      <div className="p-3 sm:p-4 flex justify-center">
        {b ? <Check className="h-5 w-5 text-emerald-400" /> : <XIcon className="h-5 w-5 text-red-400" />}
      </div>
    </div>
  );
}
