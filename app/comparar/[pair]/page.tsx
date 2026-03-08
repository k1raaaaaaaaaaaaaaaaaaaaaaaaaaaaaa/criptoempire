import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, X as XIcon, Trophy } from "lucide-react";
import { getExchangeBySlug, Exchange } from "@/data/exchanges";
import ExchangeLogo from "@/components/ui/ExchangeLogo";
import AffiliateButton from "@/components/ui/AffiliateButton";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";
import { formatPercent } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Static generation for all 15 pairs of the top 6 exchanges         */
/* ------------------------------------------------------------------ */

const TOP_SLUGS = ["bybit", "mexc", "binance", "okx", "kucoin", "bitget"];

export function generateStaticParams(): { pair: string }[] {
  const pairs: { pair: string }[] = [];
  for (let i = 0; i < TOP_SLUGS.length; i++) {
    for (let j = i + 1; j < TOP_SLUGS.length; j++) {
      pairs.push({ pair: `${TOP_SLUGS[i]}-vs-${TOP_SLUGS[j]}` });
    }
  }
  return pairs;
  // Returns 15 pairs:
  // bybit-vs-mexc, bybit-vs-binance, bybit-vs-okx, bybit-vs-kucoin, bybit-vs-bitget,
  // mexc-vs-binance, mexc-vs-okx, mexc-vs-kucoin, mexc-vs-bitget,
  // binance-vs-okx, binance-vs-kucoin, binance-vs-bitget,
  // okx-vs-kucoin, okx-vs-bitget,
  // kucoin-vs-bitget
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function parsePair(pair: string): [string, string] | null {
  const parts = pair.split("-vs-");
  if (parts.length !== 2) return null;
  return [parts[0], parts[1]];
}

function overallScore(ex: Exchange): number {
  return (
    (ex.scores.security +
      ex.scores.fees +
      ex.scores.liquidity +
      ex.scores.ux +
      ex.scores.latamSupport) /
    5
  );
}

function winner(a: number, b: number, lowerIsBetter = false): "a" | "b" | "tie" {
  if (a === b) return "tie";
  if (lowerIsBetter) return a < b ? "a" : "b";
  return a > b ? "a" : "b";
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

type PageProps = { params: Promise<{ pair: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { pair } = await params;
  const parsed = parsePair(pair);
  if (!parsed) return {};

  const exA = getExchangeBySlug(parsed[0]);
  const exB = getExchangeBySlug(parsed[1]);
  if (!exA || !exB) return {};

  return {
    title: `${exA.name} vs ${exB.name}: ¿Cuál es Mejor en 2026? | CriptoEmpire`,
    description: `Comparación completa entre ${exA.name} y ${exB.name}: comisiones, seguridad, funciones y disponibilidad en Latinoamérica.`,
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function PairComparisonPage({ params }: PageProps) {
  const { pair } = await params;
  const parsed = parsePair(pair);
  if (!parsed) notFound();

  const exA = getExchangeBySlug(parsed[0]);
  const exB = getExchangeBySlug(parsed[1]);
  if (!exA || !exB) notFound();

  const scoreA = overallScore(exA);
  const scoreB = overallScore(exB);
  const overallWinner =
    scoreA > scoreB ? exA : scoreB > scoreA ? exB : null;

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* ---- 1. H1 ---- */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-display text-center mb-6">
          {exA.name} vs {exB.name}: Comparación Completa 2026
        </h1>

        {/* ---- 2. Intro ---- */}
        <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
          ¿Estás eligiendo entre <strong>{exA.name}</strong> y{" "}
          <strong>{exB.name}</strong> para operar criptomonedas en Latinoamérica?
          En esta comparación detallada analizamos sus comisiones, seguridad,
          funciones de trading, bonos de bienvenida y soporte para la región.
          {exA.name} fue fundado en {exA.founded} con sede en{" "}
          {exA.headquartersCountry}, mientras que {exB.name} se fundó en{" "}
          {exB.founded} y opera desde {exB.headquartersCountry}. Ambos exchanges
          son opciones populares entre traders latinoamericanos, pero cada uno
          tiene fortalezas distintas que exploraremos a continuación.
        </p>

        {/* ---- 3. Tabla Comparativa ---- */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-6">
            Tabla Comparativa
          </h2>

          <div
            className="rounded-2xl border border-[var(--border)] overflow-hidden"
            style={{ background: "var(--gradient-card)" }}
          >
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-[var(--border)] bg-[var(--bg-primary)]/50">
              <div className="p-4 text-sm font-semibold text-[var(--text-muted)]">
                Característica
              </div>
              <div className="p-4 text-sm font-semibold text-[var(--text-primary)] text-center flex items-center justify-center gap-2">
                <ExchangeLogo exchangeId={exA.id} size={20} />
                {exA.name}
              </div>
              <div className="p-4 text-sm font-semibold text-[var(--text-primary)] text-center flex items-center justify-center gap-2">
                <ExchangeLogo exchangeId={exB.id} size={20} />
                {exB.name}
              </div>
            </div>

            {/* Rating */}
            <CompRow
              label="Rating"
              a={<span className="inline-flex items-center gap-1"><StarRating rating={exA.rating} size={13} /> {exA.rating.toFixed(1)}</span>}
              b={<span className="inline-flex items-center gap-1"><StarRating rating={exB.rating} size={13} /> {exB.rating.toFixed(1)}</span>}
              winner={winner(exA.rating, exB.rating)}
            />
            <CompRow
              label="Comisión Spot Maker"
              a={formatPercent(exA.fees.spotMaker)}
              b={formatPercent(exB.fees.spotMaker)}
              winner={winner(exA.fees.spotMaker, exB.fees.spotMaker, true)}
            />
            <CompRow
              label="Comisión Spot Taker"
              a={formatPercent(exA.fees.spotTaker)}
              b={formatPercent(exB.fees.spotTaker)}
              winner={winner(exA.fees.spotTaker, exB.fees.spotTaker, true)}
            />
            {exA.features.futures && exB.features.futures && (
              <>
                <CompRow
                  label="Comisión Futuros Maker"
                  a={formatPercent(exA.fees.futuresMaker)}
                  b={formatPercent(exB.fees.futuresMaker)}
                  winner={winner(exA.fees.futuresMaker, exB.fees.futuresMaker, true)}
                />
                <CompRow
                  label="Comisión Futuros Taker"
                  a={formatPercent(exA.fees.futuresTaker)}
                  b={formatPercent(exB.fees.futuresTaker)}
                  winner={winner(exA.fees.futuresTaker, exB.fees.futuresTaker, true)}
                />
              </>
            )}
            <CompRow label="KYC Requerido" a={exA.latam.kycRequired} b={exB.latam.kycRequired} winner="tie" />
            <CompRow label="Bono de Bienvenida" a={exA.bonus.amount} b={exB.bonus.amount} winner="tie" />

            <CompRowBool label="Trading Spot" a={exA.features.spot} b={exB.features.spot} />
            <CompRowBool label="Futuros" a={exA.features.futures} b={exB.features.futures} />
            <CompRowBool label="Margen" a={exA.features.margin} b={exB.features.margin} />
            <CompRowBool label="Staking" a={exA.features.staking} b={exB.features.staking} />
            <CompRowBool label="P2P" a={exA.features.p2p} b={exB.features.p2p} />
            <CompRowBool label="NFTs" a={exA.features.nfts} b={exB.features.nfts} />

            <CompRow
              label="Seguridad"
              a={`${exA.scores.security}/10`}
              b={`${exB.scores.security}/10`}
              winner={winner(exA.scores.security, exB.scores.security)}
            />
            <CompRow
              label="Liquidez"
              a={`${exA.scores.liquidity}/10`}
              b={`${exB.scores.liquidity}/10`}
              winner={winner(exA.scores.liquidity, exB.scores.liquidity)}
            />
            <CompRow
              label="Experiencia de Usuario"
              a={`${exA.scores.ux}/10`}
              b={`${exB.scores.ux}/10`}
              winner={winner(exA.scores.ux, exB.scores.ux)}
            />
            <CompRow
              label="Soporte LATAM"
              a={`${exA.scores.latamSupport}/10`}
              b={`${exB.scores.latamSupport}/10`}
              winner={winner(exA.scores.latamSupport, exB.scores.latamSupport)}
            />
          </div>
        </section>

        {/* ---- 4. Puntuación General ---- */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-6 text-center">
            Puntuación General
          </h2>

          <div
            className="rounded-2xl border border-[var(--accent-primary)]/30 p-6 sm:p-8 text-center"
            style={{ background: "var(--gradient-card)" }}
          >
            <Trophy className="h-10 w-10 text-amber-400 mx-auto mb-4" />

            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <ExchangeLogo exchangeId={exA.id} size={40} className="mx-auto mb-2" />
                <p className="font-bold text-[var(--text-primary)] font-display text-lg">{exA.name}</p>
                <p className="text-3xl font-extrabold text-[var(--accent-primary)]">
                  {scoreA.toFixed(1)}<span className="text-base text-[var(--text-muted)]">/10</span>
                </p>
              </div>
              <div>
                <ExchangeLogo exchangeId={exB.id} size={40} className="mx-auto mb-2" />
                <p className="font-bold text-[var(--text-primary)] font-display text-lg">{exB.name}</p>
                <p className="text-3xl font-extrabold text-[var(--accent-primary)]">
                  {scoreB.toFixed(1)}<span className="text-base text-[var(--text-muted)]">/10</span>
                </p>
              </div>
            </div>

            {overallWinner ? (
              <p className="text-lg text-[var(--text-secondary)]">
                En la comparación general,{" "}
                <span className="font-bold text-emerald-400">{overallWinner.name}</span>{" "}
                obtiene una puntuación superior con{" "}
                {overallWinner.id === exA.id ? scoreA.toFixed(1) : scoreB.toFixed(1)}/10 frente a{" "}
                {overallWinner.id === exA.id ? scoreB.toFixed(1) : scoreA.toFixed(1)}/10.
              </p>
            ) : (
              <p className="text-lg text-[var(--text-secondary)]">
                Ambos exchanges obtienen la misma puntuación general de {scoreA.toFixed(1)}/10.
                La mejor elección depende de tus necesidades particulares.
              </p>
            )}
          </div>
        </section>

        {/* ---- 5. Ventajas de Exchange A ---- */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
            Ventajas de {exA.name}
          </h2>
          <div
            className="rounded-2xl border border-[var(--border)] p-6"
            style={{ background: "var(--gradient-card)" }}
          >
            <ul className="space-y-3">
              {exA.pros.slice(0, 4).map((pro, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              {exA.description}
            </p>
          </div>
        </section>

        {/* ---- 6. Ventajas de Exchange B ---- */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
            Ventajas de {exB.name}
          </h2>
          <div
            className="rounded-2xl border border-[var(--border)] p-6"
            style={{ background: "var(--gradient-card)" }}
          >
            <ul className="space-y-3">
              {exB.pros.slice(0, 4).map((pro, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              {exB.description}
            </p>
          </div>
        </section>

        {/* ---- 7. ¿Cuál Elegir? ---- */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
            ¿Cuál Elegir?
          </h2>
          <div
            className="rounded-2xl border border-[var(--border)] p-6"
            style={{ background: "var(--gradient-card)" }}
          >
            {overallWinner ? (
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Basándonos en nuestra evaluación de seguridad, comisiones, liquidez,
                experiencia de usuario y soporte para Latinoamérica,{" "}
                <strong className="text-[var(--text-primary)]">{overallWinner.name}</strong>{" "}
                es la opción más recomendada en general con una puntuación de{" "}
                {overallWinner.id === exA.id ? scoreA.toFixed(1) : scoreB.toFixed(1)}/10.
                Sin embargo, si priorizas{" "}
                {overallWinner.id === exA.id
                  ? `las fortalezas específicas de ${exB.name} como ${exB.pros[0]?.toLowerCase()}`
                  : `las fortalezas específicas de ${exA.name} como ${exA.pros[0]?.toLowerCase()}`}
                , entonces la otra opción puede ser más adecuada para ti.
                Te recomendamos abrir una cuenta en ambos exchanges para aprovechar
                los bonos de bienvenida y decidir cuál se adapta mejor a tu
                estilo de trading. Recuerda que ambas plataformas están disponibles
                en Latinoamérica y ofrecen soporte en español.
              </p>
            ) : (
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Ambos exchanges obtienen la misma puntuación general, por lo que
                la decisión depende de tus prioridades. Si buscas{" "}
                {exA.pros[0]?.toLowerCase()}, <strong className="text-[var(--text-primary)]">{exA.name}</strong>{" "}
                es tu mejor opción. Si prefieres {exB.pros[0]?.toLowerCase()},{" "}
                <strong className="text-[var(--text-primary)]">{exB.name}</strong>{" "}
                será más conveniente. Te recomendamos registrarte en ambos para
                aprovechar los bonos de bienvenida y probar cada plataforma antes
                de comprometerte con una sola. Ambas opciones son confiables y
                accesibles desde Latinoamérica.
              </p>
            )}
          </div>
        </section>

        {/* ---- 8. CTA con AffiliateButton ---- */}
        <section className="mb-12">
          <div
            className="rounded-2xl border border-[var(--accent-primary)]/30 p-6 sm:p-8"
            style={{ background: "var(--gradient-card)" }}
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display text-center mb-6">
              Abre tu Cuenta Hoy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center">
                <ExchangeLogo exchangeId={exA.id} size={48} className="mx-auto mb-3" />
                <p className="text-sm text-[var(--text-muted)] mb-1">Bono de bienvenida</p>
                <p className="font-bold text-emerald-400 mb-4">{exA.bonus.amount}</p>
                {exA.badge && <Badge variant="blue" className="mb-3">{exA.badge}</Badge>}
                <AffiliateButton
                  href={exA.bonus.affiliateUrl}
                  label={`Abrir ${exA.name}`}
                  variant={overallWinner?.id === exA.id ? "primary" : "secondary"}
                  className="w-full"
                />
              </div>
              <div className="text-center">
                <ExchangeLogo exchangeId={exB.id} size={48} className="mx-auto mb-3" />
                <p className="text-sm text-[var(--text-muted)] mb-1">Bono de bienvenida</p>
                <p className="font-bold text-emerald-400 mb-4">{exB.bonus.amount}</p>
                {exB.badge && <Badge variant="blue" className="mb-3">{exB.badge}</Badge>}
                <AffiliateButton
                  href={exB.bonus.affiliateUrl}
                  label={`Abrir ${exB.name}`}
                  variant={overallWinner?.id === exB.id ? "primary" : "secondary"}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---- 9. Internal Links ---- */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-4">
            Más Información
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/exchange/${exA.slug}`}
              className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]/30 transition-colors"
            >
              Reseña completa de {exA.name}
            </Link>
            <Link
              href={`/exchange/${exB.slug}`}
              className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]/30 transition-colors"
            >
              Reseña completa de {exB.name}
            </Link>
            <Link
              href="/comparar"
              className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]/30 transition-colors"
            >
              Comparar otros exchanges
            </Link>
          </div>
        </section>

        {/* ---- 10. Disclaimer ---- */}
        <p className="text-xs text-[var(--text-muted)] text-center leading-relaxed">
          <strong>Aviso legal:</strong> Este contenido es informativo y no constituye asesoramiento financiero.
          Las comisiones, bonos y funciones pueden cambiar sin previo aviso.
          Verifica siempre la información actualizada en los sitios oficiales de{" "}
          {exA.name} y {exB.name}. Este sitio puede recibir compensación por
          enlaces de referidos. Invierte de manera responsable y solo con
          capital que puedas permitirte perder.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components (server-compatible)                                 */
/* ------------------------------------------------------------------ */

function CompRow({
  label,
  a,
  b,
  winner: w,
}: {
  label: string;
  a: React.ReactNode;
  b: React.ReactNode;
  winner: "a" | "b" | "tie";
}) {
  return (
    <div className="grid grid-cols-3 border-b border-[var(--border)]/50">
      <div className="p-3 sm:p-4 text-sm text-[var(--text-secondary)]">{label}</div>
      <div
        className={`p-3 sm:p-4 text-sm text-center font-medium ${
          w === "a" ? "text-emerald-400" : "text-[var(--text-primary)]"
        }`}
      >
        {a}
      </div>
      <div
        className={`p-3 sm:p-4 text-sm text-center font-medium ${
          w === "b" ? "text-emerald-400" : "text-[var(--text-primary)]"
        }`}
      >
        {b}
      </div>
    </div>
  );
}

function CompRowBool({
  label,
  a,
  b,
}: {
  label: string;
  a: boolean;
  b: boolean;
}) {
  return (
    <div className="grid grid-cols-3 border-b border-[var(--border)]/50">
      <div className="p-3 sm:p-4 text-sm text-[var(--text-secondary)]">{label}</div>
      <div className="p-3 sm:p-4 flex justify-center">
        {a ? (
          <Check className="h-5 w-5 text-emerald-400" />
        ) : (
          <XIcon className="h-5 w-5 text-red-400" />
        )}
      </div>
      <div className="p-3 sm:p-4 flex justify-center">
        {b ? (
          <Check className="h-5 w-5 text-emerald-400" />
        ) : (
          <XIcon className="h-5 w-5 text-red-400" />
        )}
      </div>
    </div>
  );
}
