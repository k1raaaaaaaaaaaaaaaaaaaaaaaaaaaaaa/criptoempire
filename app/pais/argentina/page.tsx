import { Metadata } from "next";
import { exchanges } from "@/data/exchanges";
import { formatPercent } from "@/lib/utils";
import ExchangeLogo from "@/components/ui/ExchangeLogo";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";
import StarRating from "@/components/ui/StarRating";

export const metadata: Metadata = {
  title:
    "Mejores Exchanges de Cripto en Argentina 2026 | Comprar Bitcoin con ARS - CriptoEmpire",
  description:
    "Compara los mejores exchanges de criptomonedas en Argentina. Compra Bitcoin, USDT y mas con pesos argentinos (ARS), Mercado Pago y transferencia bancaria. Dolar cripto y proteccion contra la inflacion.",
  openGraph: {
    title: "Mejores Exchanges de Cripto en Argentina 2026",
    description:
      "Ranking actualizado de exchanges disponibles en Argentina. P2P con ARS, Mercado Pago, transferencia bancaria y mas.",
  },
};

const COUNTRY_CODE = "AR";

const localPaymentMethods = [
  {
    name: "Mercado Pago",
    icon: "💳",
    description:
      "Compra cripto directamente usando tu saldo o tarjeta de Mercado Pago a traves de P2P. Uno de los metodos mas usados por argentinos.",
  },
  {
    name: "Transferencia Bancaria (CBU/CVU)",
    icon: "🏦",
    description:
      "Transferi pesos argentinos desde cualquier banco o billetera virtual. Compatible con la mayoria de exchanges.",
  },
  {
    name: "P2P con ARS",
    icon: "🤝",
    description:
      "Compra y vende cripto directamente con otros usuarios usando pesos argentinos. El metodo mas popular por las restricciones cambiarias.",
  },
  {
    name: "Tarjeta de Credito/Debito",
    icon: "💳",
    description:
      "Usa tu tarjeta Visa o Mastercard para compras rapidas (comision extra puede aplicar).",
  },
];

const countryInfo = {
  currency: "ARS (Peso Argentino)",
  regulation: "Sin regulacion especifica, uso legal",
  taxAuthority: "AFIP",
  popularUse: "Dolar cripto (USDT) como refugio contra la inflacion",
  adoption: "Alta - lider en adopcion cripto en LATAM",
};

const faqs = [
  {
    question: "¿Es legal comprar criptomonedas en Argentina?",
    answer:
      "Si, comprar y vender criptomonedas es legal en Argentina. No existe una prohibicion sobre el uso de criptomonedas, aunque la regulacion especifica sigue en desarrollo. Muchos argentinos usan cripto como proteccion contra la inflacion del peso argentino.",
  },
  {
    question: "¿Que es el dolar cripto y como funciona en Argentina?",
    answer:
      "El dolar cripto se refiere a stablecoins como USDT o USDC que mantienen paridad 1:1 con el dolar estadounidense. En Argentina, es una forma popular de ahorrar en dolares sin restricciones del cepo cambiario. Podes comprar USDT via P2P con pesos argentinos en exchanges como Binance o Bybit.",
  },
  {
    question: "¿Puedo usar Mercado Pago para comprar Bitcoin en Argentina?",
    answer:
      "Si, varios exchanges permiten comprar cripto usando Mercado Pago a traves de sus plataformas P2P. Binance y Bybit son los mas populares para este metodo. Solo necesitas buscar vendedores que acepten Mercado Pago como metodo de pago.",
  },
  {
    question: "¿Necesito declarar mis criptomonedas ante AFIP?",
    answer:
      "Si, las criptomonedas deben declararse como bienes en el impuesto a los bienes personales si superas el minimo no imponible. Las ganancias por compraventa estan alcanzadas por el impuesto a las ganancias. Te recomendamos consultar con un contador especializado.",
  },
];

export default function ArgentinaPage() {
  const availableExchanges = exchanges
    .filter((exchange) => {
      if (exchange.latam.countries) {
        return exchange.latam.countries.includes(COUNTRY_CODE);
      }
      return (
        exchange.latam.available &&
        !exchange.latam.countriesBlocked.includes("Argentina")
      );
    })
    .sort((a, b) => b.scores.latamSupport - a.scores.latamSupport);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="px-4 py-16 md:px-8 lg:px-16"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-4 inline-block text-6xl">🇦🇷</span>
          <Badge variant="blue" className="mb-4">
            Argentina 2026
          </Badge>
          <h1
            className="mb-6 font-display text-3xl font-bold md:text-4xl lg:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Mejores Exchanges de Cripto en Argentina
          </h1>
          <p
            className="mx-auto max-w-3xl text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Argentina es lider en adopcion cripto en Latinoamerica, impulsado por
            la alta inflacion del peso argentino (ARS) y las restricciones
            cambiarias. El dolar cripto (USDT) se convirtio en una herramienta
            esencial para proteger el poder adquisitivo. El P2P es el metodo mas
            popular para comprar y vender criptomonedas con pesos argentinos.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 lg:px-16">
        {/* Country Info Bar */}
        <section className="mb-12">
          <div
            className="grid gap-4 rounded-2xl border p-6 sm:grid-cols-2 lg:grid-cols-3"
            style={{
              borderColor: "var(--border)",
              background: "var(--gradient-card)",
            }}
          >
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--text-muted)" }}
              >
                Moneda Local
              </span>
              <p
                className="mt-1 font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {countryInfo.currency}
              </p>
            </div>
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--text-muted)" }}
              >
                Ente Fiscal
              </span>
              <p
                className="mt-1 font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {countryInfo.taxAuthority}
              </p>
            </div>
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--text-muted)" }}
              >
                Nivel de Adopcion
              </span>
              <p
                className="mt-1 font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {countryInfo.adoption}
              </p>
            </div>
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--text-muted)" }}
              >
                Regulacion
              </span>
              <p
                className="mt-1 font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {countryInfo.regulation}
              </p>
            </div>
            <div className="sm:col-span-2">
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--text-muted)" }}
              >
                Uso Principal
              </span>
              <p
                className="mt-1 font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {countryInfo.popularUse}
              </p>
            </div>
          </div>
        </section>

        {/* Exchange Cards Grid */}
        <section className="mb-16">
          <h2
            className="mb-6 font-display text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Exchanges Disponibles en Argentina
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {availableExchanges.map((exchange) => (
              <div
                key={exchange.id}
                className="group rounded-2xl border p-6 transition-colors"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--gradient-card)",
                }}
                onMouseEnter={undefined}
              >
                <div className="mb-4 flex items-center gap-3">
                  <ExchangeLogo exchangeId={exchange.id} size={48} />
                  <div>
                    <h3
                      className="font-display text-lg font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {exchange.name}
                    </h3>
                    <StarRating rating={exchange.rating} size={14} />
                  </div>
                  {exchange.badge && (
                    <Badge variant="green" className="ml-auto text-[10px]">
                      {exchange.badge === "popular" && "Popular"}
                      {exchange.badge === "lowest-fees" && "Menores Comisiones"}
                      {exchange.badge === "best-beginners" && "Principiantes"}
                      {exchange.badge === "best-liquidity" && "Mayor Liquidez"}
                      {exchange.badge === "no-kyc" && "Sin KYC"}
                    </Badge>
                  )}
                </div>

                <div
                  className="mb-4 space-y-2 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <div className="flex justify-between">
                    <span>Comision Maker</span>
                    <span
                      className="font-mono font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {formatPercent(exchange.fees.spotMaker)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Comision Taker</span>
                    <span
                      className="font-mono font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {formatPercent(exchange.fees.spotTaker)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>KYC</span>
                    <Badge
                      variant={
                        exchange.latam.kycRequired === "No"
                          ? "green"
                          : exchange.latam.kycRequired === "Básico"
                            ? "amber"
                            : "red"
                      }
                    >
                      {exchange.latam.kycRequired}
                    </Badge>
                  </div>
                </div>

                {exchange.bonus.amount && (
                  <div
                    className="mb-4 rounded-xl border px-3 py-2 text-center text-sm font-semibold"
                    style={{
                      borderColor: "var(--accent-primary)",
                      color: "var(--accent-primary)",
                      background: "rgba(59, 130, 246, 0.05)",
                    }}
                  >
                    🎁 {exchange.bonus.amount}
                  </div>
                )}

                {exchange.latam.localPayments.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {exchange.latam.localPayments.map((method) => (
                      <span
                        key={method}
                        className="rounded-full px-2 py-0.5 text-[11px]"
                        style={{
                          color: "var(--text-muted)",
                          background: "var(--bg-hover)",
                        }}
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                )}

                <AffiliateButton
                  href={exchange.bonus.affiliateUrl}
                  label="Abrir Cuenta"
                  size="md"
                  variant="primary"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Local Payment Methods */}
        <section className="mb-16">
          <h2
            className="mb-6 font-display text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Metodos de Pago Locales en Argentina
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {localPaymentMethods.map((method) => (
              <div
                key={method.name}
                className="rounded-2xl border p-6"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--gradient-card)",
                }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-2xl">{method.icon}</span>
                  <h3
                    className="font-display text-lg font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {method.name}
                  </h3>
                </div>
                <p style={{ color: "var(--text-secondary)" }}>
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2
            className="mb-6 font-display text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Preguntas Frecuentes sobre Cripto en Argentina
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--gradient-card)",
                }}
              >
                <summary
                  className="cursor-pointer px-6 py-4 font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {faq.question}
                </summary>
                <p
                  className="px-6 pb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section
          className="rounded-2xl border p-6"
          style={{
            borderColor: "var(--border)",
            background: "var(--gradient-card)",
          }}
        >
          <p
            className="text-xs leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            <strong>Aviso Legal:</strong> La informacion presentada en
            CriptoEmpire tiene fines informativos y no constituye asesoramiento
            financiero, fiscal o de inversion. Las criptomonedas son activos
            volatiles y podes perder la totalidad de tu inversion. Los enlaces de
            afiliado nos permiten mantener este sitio; esto no afecta nuestras
            calificaciones ni recomendaciones. Siempre investiga por tu cuenta
            antes de invertir. CriptoEmpire no se responsabiliza por perdidas
            derivadas del uso de esta informacion.
          </p>
        </section>
      </div>
    </main>
  );
}
