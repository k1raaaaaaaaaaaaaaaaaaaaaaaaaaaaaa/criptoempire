import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, X as XIcon, Shield, Zap, Users, Globe } from "lucide-react";
import { exchanges, getExchangeBySlug } from "@/data/exchanges";
import ExchangeLogo from "@/components/ui/ExchangeLogo";
import StarRating from "@/components/ui/StarRating";
import ScoreBar from "@/components/ui/ScoreBar";
import AffiliateButton from "@/components/ui/AffiliateButton";
import PromoCodeCard from "@/components/ui/PromoCodeCard";
import Badge from "@/components/ui/Badge";
import { formatPercent } from "@/lib/utils";

// Generate static paths for all exchanges
export function generateStaticParams() {
  return exchanges.map((ex) => ({ slug: ex.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const exchange = getExchangeBySlug(params.slug);
  if (!exchange) return { title: "Exchange no encontrado" };

  return {
    title: `${exchange.name} Review 2026 — Comisiones, Bonos y Opiniones | CriptoEmpire`,
    description: `Análisis completo de ${exchange.name}: comisiones desde ${formatPercent(exchange.fees.spotTaker)}, bono de ${exchange.bonus.amount}. ¿Es seguro para Latinoamérica? Lee nuestra opinión.`,
    openGraph: {
      title: `${exchange.name} — Review Completa 2026`,
      description: exchange.description,
      type: "article",
      locale: "es_AR",
    },
  };
}

export default function ExchangeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const exchange = getExchangeBySlug(params.slug);
  if (!exchange) notFound();

  const otherExchanges = exchanges
    .filter((e) => e.id !== exchange.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="border-b border-[var(--border)]"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            href="/exchanges"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Todos los exchanges
          </Link>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <ExchangeLogo exchangeId={exchange.id} size={56} />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display">
                  {exchange.name}
                </h1>
                {exchange.badge && (
                  <Badge
                    variant={
                      exchange.badge === "popular"
                        ? "blue"
                        : exchange.badge === "lowest-fees"
                        ? "green"
                        : "amber"
                    }
                  >
                    {exchange.badge === "popular" && "⚡ Más popular"}
                    {exchange.badge === "lowest-fees" && "💰 Mejores comisiones"}
                    {exchange.badge === "best-liquidity" && "🔥 Mayor liquidez"}
                    {exchange.badge === "best-beginners" && "🎓 Principiantes"}
                  </Badge>
                )}
              </div>
              <StarRating rating={exchange.rating} size={18} />
              <p className="text-[var(--text-secondary)] mt-3 max-w-2xl leading-relaxed">
                {exchange.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-4 text-sm text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <Globe className="h-4 w-4" /> Fundado en {exchange.founded}
                </span>
                <span>•</span>
                <span>{exchange.headquartersCountry}</span>
              </div>
            </div>
            <div className="sm:ml-auto shrink-0">
              <AffiliateButton
                href={exchange.bonus.affiliateUrl}
                label={`Ir a ${exchange.name} →`}
                variant="primary"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Score Breakdown */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-6">
                Puntuación Detallada
              </h2>
              <div className="space-y-4">
                <ScoreBar label="Seguridad" score={exchange.scores.security} />
                <ScoreBar label="Comisiones" score={exchange.scores.fees} />
                <ScoreBar label="Liquidez" score={exchange.scores.liquidity} />
                <ScoreBar label="Experiencia" score={exchange.scores.ux} />
                <ScoreBar label="Soporte LATAM" score={exchange.scores.latamSupport} />
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div
                className="rounded-2xl border border-emerald-500/20 p-6"
                style={{ background: "var(--gradient-card)" }}
              >
                <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-400 mb-4">
                  <Check className="h-5 w-5" /> Ventajas
                </h3>
                <ul className="space-y-3">
                  {exchange.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Check className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-2xl border border-red-500/20 p-6"
                style={{ background: "var(--gradient-card)" }}
              >
                <h3 className="flex items-center gap-2 text-lg font-bold text-red-400 mb-4">
                  <XIcon className="h-5 w-5" /> Desventajas
                </h3>
                <ul className="space-y-3">
                  {exchange.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <XIcon className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fee Table */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-6">
                Tabla de Comisiones
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="py-3 px-4 text-left text-[var(--text-muted)] font-medium">Tipo</th>
                      <th className="py-3 px-4 text-center text-[var(--text-muted)] font-medium">Maker</th>
                      <th className="py-3 px-4 text-center text-[var(--text-muted)] font-medium">Taker</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 px-4 text-[var(--text-primary)] font-medium">Spot</td>
                      <td className="py-3 px-4 text-center text-emerald-400 font-semibold">
                        {formatPercent(exchange.fees.spotMaker)}
                      </td>
                      <td className="py-3 px-4 text-center text-amber-400 font-semibold">
                        {formatPercent(exchange.fees.spotTaker)}
                      </td>
                    </tr>
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 px-4 text-[var(--text-primary)] font-medium">Futuros</td>
                      <td className="py-3 px-4 text-center text-emerald-400 font-semibold">
                        {exchange.features.futures ? formatPercent(exchange.fees.futuresMaker) : "N/A"}
                      </td>
                      <td className="py-3 px-4 text-center text-amber-400 font-semibold">
                        {exchange.features.futures ? formatPercent(exchange.fees.futuresTaker) : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-[var(--text-primary)] font-medium">Retiro</td>
                      <td colSpan={2} className="py-3 px-4 text-center text-[var(--text-secondary)]">
                        {exchange.fees.withdrawal}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* How to Register */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-6">
                Cómo Registrarse en {exchange.name}
              </h2>
              <ol className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Abre la página de registro",
                    desc: `Haz clic en nuestro enlace para ir a ${exchange.name} y obtener el bono de bienvenida automáticamente.`,
                  },
                  {
                    step: 2,
                    title: "Crea tu cuenta",
                    desc: "Ingresa tu correo electrónico y crea una contraseña segura. También puedes registrarte con Google o Apple.",
                  },
                  {
                    step: 3,
                    title: exchange.latam.kycRequired === "Completo"
                      ? "Completa la verificación KYC"
                      : "Verifica tu identidad (opcional)",
                    desc: exchange.latam.kycRequired === "Completo"
                      ? "Sube tu documento de identidad y una selfie. El proceso toma entre 5-30 minutos."
                      : "Puedes empezar a operar sin KYC. La verificación es opcional pero desbloquea límites más altos.",
                  },
                  {
                    step: 4,
                    title: "Deposita fondos",
                    desc: `Deposita cripto desde otra wallet o compra directamente usando ${exchange.latam.localPayments.join(", ")}.`,
                  },
                  {
                    step: 5,
                    title: "¡Empieza a operar!",
                    desc: "Ya puedes comprar, vender o hacer trading en los mercados spot y futuros.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Features Grid */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-6">
                Funcionalidades
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: "Trading Spot", available: exchange.features.spot },
                  { label: "Futuros", available: exchange.features.futures },
                  { label: "Margen", available: exchange.features.margin },
                  { label: "Staking", available: exchange.features.staking },
                  { label: "P2P", available: exchange.features.p2p },
                  { label: "NFTs", available: exchange.features.nfts },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className={`flex items-center gap-2 rounded-lg p-3 text-sm font-medium ${
                      feat.available
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-[var(--bg-primary)]/50 text-[var(--text-muted)]"
                    }`}
                  >
                    {feat.available ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <XIcon className="h-4 w-4" />
                    )}
                    {feat.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Security */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-6">
                Seguridad
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Autenticación 2FA", active: exchange.security.twoFactor, icon: Shield },
                  { label: "Almacenamiento en frío", active: exchange.security.coldStorage, icon: Shield },
                  { label: "Fondo de seguro", active: exchange.security.insuranceFund, icon: Zap },
                  { label: "Reservas auditadas", active: exchange.security.auditedReserves, icon: Users },
                ].map((sec) => (
                  <div
                    key={sec.label}
                    className={`flex items-center gap-3 rounded-lg p-3 text-sm ${
                      sec.active
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {sec.active ? (
                      <Check className="h-4 w-4 shrink-0" />
                    ) : (
                      <XIcon className="h-4 w-4 shrink-0" />
                    )}
                    <span className="font-medium">{sec.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Exchanges */}
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-6">
                Otros Exchanges
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {otherExchanges.map((other) => (
                  <Link
                    key={other.id}
                    href={`/exchanges/${other.slug}`}
                    className="flex items-center gap-4 rounded-xl border border-[var(--border)] p-4 hover:border-[var(--accent-primary)]/30 hover:bg-[var(--bg-hover)] transition-all"
                    style={{ background: "var(--gradient-card)" }}
                  >
                    <ExchangeLogo exchangeId={other.id} size={28} />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-[var(--text-primary)] text-sm">{other.name}</div>
                      <div className="text-xs text-[var(--text-muted)]">
                        Spot: {formatPercent(other.fees.spotTaker)} • Rating: {other.rating.toFixed(1)}★
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* CTA Card */}
              <div
                className="rounded-2xl border border-[var(--accent-primary)]/30 p-6"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="text-center mb-4">
                  <div className="mx-auto mb-3">
                    <ExchangeLogo exchangeId={exchange.id} size={40} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-display">
                    Abrir cuenta en {exchange.name}
                  </h3>
                  <StarRating rating={exchange.rating} size={14} />
                </div>

                {/* Bonus highlight */}
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 mb-4 text-center">
                  <div className="text-xs text-emerald-400 mb-1">Bono de bienvenida</div>
                  <div className="text-xl font-bold text-emerald-300">
                    {exchange.bonus.amount}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">
                    {exchange.bonus.type}
                  </div>
                </div>

                {/* Promo code */}
                {exchange.bonus.promoCode && (
                  <div className="mb-4">
                    <PromoCodeCard
                      code={exchange.bonus.promoCode}
                      description="Usa este código al registrarte:"
                    />
                  </div>
                )}

                <AffiliateButton
                  href={exchange.bonus.affiliateUrl}
                  label={`Abrir Cuenta en ${exchange.name}`}
                  variant="primary"
                  size="lg"
                  className="w-full"
                />

                <p className="text-[10px] text-[var(--text-muted)] text-center mt-3">
                  Este sitio puede recibir compensación por referidos
                </p>
              </div>

              {/* Quick Info */}
              <div
                className="rounded-2xl border border-[var(--border)] p-6"
                style={{ background: "var(--gradient-card)" }}
              >
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
                  Info Rápida
                </h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">Fundado</dt>
                    <dd className="text-[var(--text-primary)] font-medium">{exchange.founded}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">Sede</dt>
                    <dd className="text-[var(--text-primary)] font-medium">{exchange.headquartersCountry}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">KYC</dt>
                    <dd className="text-[var(--text-primary)] font-medium">{exchange.latam.kycRequired}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">Idiomas</dt>
                    <dd className="text-[var(--text-primary)] font-medium">
                      {exchange.latam.languages.join(", ").toUpperCase()}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[var(--text-muted)] mb-1">Pagos locales</dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {exchange.latam.localPayments.map((p) => (
                        <span
                          key={p}
                          className="rounded-md bg-[var(--bg-primary)] px-2 py-0.5 text-xs text-[var(--text-secondary)]"
                        >
                          {p}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-xl border border-[var(--border)] p-4 text-center">
          <p className="text-xs text-[var(--text-muted)]">
            No somos asesores financieros. Invierte responsablemente. Las
            comisiones pueden variar — verifica siempre en el sitio oficial de{" "}
            {exchange.name}.
          </p>
        </div>
      </div>
    </div>
  );
}
