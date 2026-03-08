import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";
import AffiliateButton from "@/components/ui/AffiliateButton";
import ScoreBar from "@/components/ui/ScoreBar";
import { exchanges } from "@/data/exchanges";
import { formatPercent } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Bybit vs Binance 2026: ¿Cuál es Mejor para LATAM? | CriptoEmpire",
  description:
    "Comparativa detallada Bybit vs Binance en 2026. Comisiones, seguridad, KYC, bonos y disponibilidad en Argentina, México y Colombia. ¿Cuál elegir?",
  keywords:
    "bybit vs binance, bybit o binance, mejor exchange 2026, bybit binance comparación",
  openGraph: {
    title: "Bybit vs Binance 2026: ¿Cuál es Mejor?",
    description: "Comparativa completa para usuarios de LATAM.",
    type: "article",
    locale: "es_AR",
  },
};

const bybit = exchanges.find((e) => e.id === "bybit")!;
const binance = exchanges.find((e) => e.id === "binance")!;

export default function BybitVsBinance() {
  return (
    <article className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/guias"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Todas las guías
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="amber">Comparativa</Badge>
            <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 12 min</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Marzo 2026</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display leading-tight mb-4">
            Bybit vs Binance: ¿Cuál es Mejor en 2026?
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Dos de los exchanges más grandes del mundo compiten por los usuarios
            de Latinoamérica. Analizamos comisiones, seguridad, KYC, bonos y más
            para ayudarte a decidir.
          </p>
        </header>

        <div className="space-y-10">
          {/* Head to Head */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-6">
              Comparación Rápida
            </h2>
            <div
              className="rounded-2xl border border-[var(--border)] overflow-hidden"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="grid grid-cols-3 border-b border-[var(--border)] bg-[var(--bg-primary)]/50">
                <div className="p-4 text-sm font-semibold text-[var(--text-muted)]">Categoría</div>
                <div className="p-4 text-sm font-semibold text-[var(--text-primary)] text-center">Bybit</div>
                <div className="p-4 text-sm font-semibold text-[var(--text-primary)] text-center">Binance</div>
              </div>
              {[
                { label: "Comisión Spot", a: formatPercent(bybit.fees.spotTaker), b: formatPercent(binance.fees.spotTaker), winner: "tie" },
                { label: "Comisión Futuros", a: formatPercent(bybit.fees.futuresTaker), b: formatPercent(binance.fees.futuresTaker), winner: "a" },
                { label: "Bono Bienvenida", a: bybit.bonus.amount, b: binance.bonus.amount, winner: "a" },
                { label: "KYC Requerido", a: "No", b: "Sí", winner: "a" },
                { label: "P2P en LATAM", a: "Sí (ARS, MXN)", b: "Sí (ARS, MXN, COP)", winner: "b" },
                { label: "Liquidez Global", a: "Top 3", b: "#1 Mundial", winner: "b" },
                { label: "Criptomonedas", a: "+500", b: "+350", winner: "a" },
                { label: "Rating", a: `${bybit.rating} ★`, b: `${binance.rating} ★`, winner: "a" },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-3 border-b border-[var(--border)]/50 last:border-0">
                  <div className="p-3 text-sm text-[var(--text-secondary)]">{row.label}</div>
                  <div className={`p-3 text-sm text-center font-medium ${row.winner === "a" ? "text-emerald-400" : "text-[var(--text-primary)]"}`}>
                    {row.a} {row.winner === "a" && "✓"}
                  </div>
                  <div className={`p-3 text-sm text-center font-medium ${row.winner === "b" ? "text-emerald-400" : "text-[var(--text-primary)]"}`}>
                    {row.b} {row.winner === "b" && "✓"}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comisiones */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              Comisiones: ¿Quién es más barato?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              En <strong className="text-[var(--text-primary)]">spot</strong>, ambos
              exchanges cobran 0.10% maker/taker por defecto, lo que los pone en
              igualdad de condiciones. Sin embargo, ambos ofrecen descuentos si usas
              su token nativo (BYB para Bybit, BNB para Binance).
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              En <strong className="text-[var(--text-primary)]">futuros</strong>, Bybit
              cobra 0.02% maker / 0.055% taker, mientras que Binance cobra 0.02% /
              0.05%. La diferencia es mínima, pero <strong className="text-emerald-400">Binance
              gana por un margen estrecho</strong> en futuros.
            </p>
            <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4">
              <p className="text-sm text-blue-300">
                <strong>Veredicto comisiones:</strong> Empate en spot.
                Binance tiene una ligera ventaja en futuros (0.005% menos en taker).
                Para la mayoría de traders, la diferencia es insignificante.
              </p>
            </div>
          </section>

          {/* KYC */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              KYC: ¿Cuál pide menos verificación?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Esta es una de las mayores diferencias entre ambos:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="rounded-xl border border-emerald-500/20 p-4" style={{ background: "var(--gradient-card)" }}>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">Bybit</h3>
                <p className="text-sm text-emerald-400 font-medium mb-2">Sin KYC para trading básico</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Puedes registrarte solo con email y empezar a operar inmediatamente.
                  Límite de retiro: hasta 20,000 USDT/día sin verificación.
                </p>
              </div>
              <div className="rounded-xl border border-red-500/20 p-4" style={{ background: "var(--gradient-card)" }}>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">Binance</h3>
                <p className="text-sm text-red-400 font-medium mb-2">KYC obligatorio</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Desde 2021, Binance requiere verificación de identidad completa
                  para todas las funciones, incluyendo depósitos y trading.
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4">
              <p className="text-sm text-blue-300">
                <strong>Veredicto KYC:</strong> <strong className="text-emerald-400">Bybit gana claramente</strong>. Si valoras tu privacidad o quieres empezar a operar rápido sin enviar documentos, Bybit es la opción.
              </p>
            </div>
          </section>

          {/* LATAM Support */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              Soporte para Latinoamérica
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Ambos exchanges están disponibles en Argentina, México, Colombia,
              Perú y Chile. Binance tiene una ventaja en el mercado P2P de LATAM
              con mayor variedad de monedas locales y métodos de pago (incluyendo
              Mercado Pago en Argentina). Bybit está creciendo rápido en la región
              pero su P2P tiene menos vendedores activos.
            </p>
            <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4">
              <p className="text-sm text-blue-300">
                <strong>Veredicto LATAM:</strong> <strong className="text-emerald-400">Binance gana</strong> en soporte
                local y variedad de métodos de pago para la región.
              </p>
            </div>
          </section>

          {/* Score breakdown */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              Puntuación General
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[bybit, binance].map((ex) => (
                <div
                  key={ex.id}
                  className="rounded-xl border border-[var(--border)] p-5"
                  style={{ background: "var(--gradient-card)" }}
                >
                  <h3 className="font-bold text-[var(--text-primary)] font-display mb-4">
                    {ex.name} — {ex.rating} ★
                  </h3>
                  <div className="space-y-3">
                    <ScoreBar label="Seguridad" score={ex.scores.security} />
                    <ScoreBar label="Comisiones" score={ex.scores.fees} />
                    <ScoreBar label="Liquidez" score={ex.scores.liquidity} />
                    <ScoreBar label="UX" score={ex.scores.ux} />
                    <ScoreBar label="LATAM" score={ex.scores.latamSupport} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final Verdict */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              Veredicto Final
            </h2>
            <div className="rounded-2xl border border-[var(--accent-primary)]/30 p-6" style={{ background: "var(--gradient-card)" }}>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                <strong className="text-[var(--text-primary)]">Elige Bybit si:</strong> valoras
                la privacidad (sin KYC), quieres bonos de bienvenida generosos, o
                te enfocas en trading de futuros. Ideal para traders intermedios y
                avanzados en LATAM.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                <strong className="text-[var(--text-primary)]">Elige Binance si:</strong> priorizas
                la liquidez máxima, necesitas P2P con la mayor variedad de métodos de
                pago locales, o quieres un ecosistema todo-en-uno (Earn, NFT,
                Launchpad).
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <AffiliateButton
                  href={bybit.bonus.affiliateUrl}
                  label="Abrir Cuenta en Bybit →"
                  size="md"
                />
                <AffiliateButton
                  href={binance.bonus.affiliateUrl}
                  label="Abrir Cuenta en Binance →"
                  variant="secondary"
                  size="md"
                />
              </div>
              <p className="text-[10px] text-[var(--text-muted)] mt-3">
                Este sitio puede recibir compensación por referidos
              </p>
            </div>
          </section>
        </div>

        <p className="mt-8 text-xs text-[var(--text-muted)] text-center">
          No somos asesores financieros. Invierte responsablemente.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bybit vs Binance 2026: ¿Cuál es Mejor para LATAM?",
            description: "Comparativa detallada de Bybit vs Binance para usuarios de Latinoamérica.",
            datePublished: "2026-03-01",
            dateModified: "2026-03-08",
            author: { "@type": "Organization", name: "CriptoEmpire" },
            publisher: { "@type": "Organization", name: "CriptoEmpire" },
          }),
        }}
      />
    </article>
  );
}
