import { Metadata } from "next";
import { exchanges } from "@/data/exchanges";
import { formatPercent } from "@/lib/utils";
import ExchangeLogo from "@/components/ui/ExchangeLogo";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";
import StarRating from "@/components/ui/StarRating";

export const metadata: Metadata = {
  title:
    "Mejores Exchanges de Cripto en Mexico 2026 | Comprar Bitcoin con MXN - CriptoEmpire",
  description:
    "Compara los mejores exchanges de criptomonedas en Mexico. Compra Bitcoin, USDT y mas con pesos mexicanos (MXN) via SPEI, tarjeta o P2P. Regulaciones SAT y guia completa para mexicanos.",
  openGraph: {
    title: "Mejores Exchanges de Cripto en Mexico 2026",
    description:
      "Ranking actualizado de exchanges disponibles en Mexico. SPEI, P2P con MXN, tarjeta y mas metodos de pago.",
  },
};

const COUNTRY_CODE = "MX";

const localPaymentMethods = [
  {
    name: "SPEI (Transferencia Interbancaria)",
    icon: "🏦",
    description:
      "Deposita pesos mexicanos al instante desde cualquier banco mexicano usando SPEI. El metodo mas economico y rapido disponible.",
  },
  {
    name: "P2P con MXN",
    icon: "🤝",
    description:
      "Compra y vende cripto directamente con otros usuarios usando pesos mexicanos. Disponible en Binance, Bybit y OKX.",
  },
  {
    name: "Tarjeta de Credito/Debito",
    icon: "💳",
    description:
      "Usa tu tarjeta Visa o Mastercard para compras rapidas de cripto (puede aplicar comision adicional).",
  },
  {
    name: "OXXO Pay",
    icon: "🏪",
    description:
      "Algunos exchanges y plataformas P2P permiten depositos mediante OXXO Pay para quienes prefieren pagar en efectivo.",
  },
];

const countryInfo = {
  currency: "MXN (Peso Mexicano)",
  regulation: "Ley Fintech (2018)",
  taxAuthority: "SAT",
  popularUse: "Trading, inversion y remesas internacionales",
  adoption: "Alta - mercado cripto en fuerte crecimiento",
};

const faqs = [
  {
    question: "¿Es legal comprar criptomonedas en Mexico?",
    answer:
      "Si, comprar y vender criptomonedas es legal en Mexico. La Ley Fintech de 2018 regula a las instituciones de tecnologia financiera, aunque los exchanges internacionales operan bajo marcos legales distintos. Las criptomonedas no son consideradas moneda de curso legal pero su tenencia y comercio es permitida.",
  },
  {
    question: "¿Como declaro mis criptomonedas ante el SAT?",
    answer:
      "El SAT considera las ganancias por criptomonedas como ingresos gravables. Debes declararlas en tu declaracion anual bajo el regimen correspondiente. Las ganancias de capital por compraventa de cripto estan sujetas al ISR. Te recomendamos consultar con un contador especializado en criptoactivos.",
  },
  {
    question: "¿Puedo comprar Bitcoin con SPEI en Mexico?",
    answer:
      "Si, la mayoria de los exchanges que operan en Mexico aceptan depositos via SPEI. Es el metodo mas rapido y economico para comprar cripto con pesos mexicanos. Exchanges como Binance y Bitso permiten depositos SPEI que se acreditan en minutos.",
  },
  {
    question: "¿Cual es el mejor exchange para principiantes en Mexico?",
    answer:
      "Para principiantes en Mexico, Binance es una excelente opcion por su P2P con MXN y soporte en espanol. Si prefieres menores comisiones y no te importa el KYC, MEXC o Bybit son alternativas solidas. Coinbase es el mas facil de usar pero con comisiones mas altas.",
  },
];

export default function MexicoPage() {
  const availableExchanges = exchanges
    .filter((exchange) => {
      if (exchange.latam.countries) {
        return exchange.latam.countries.includes(COUNTRY_CODE);
      }
      return (
        exchange.latam.available &&
        !exchange.latam.countriesBlocked.includes("Mexico")
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
          <span className="mb-4 inline-block text-6xl">🇲🇽</span>
          <Badge variant="blue" className="mb-4">
            Mexico 2026
          </Badge>
          <h1
            className="mb-6 font-display text-3xl font-bold md:text-4xl lg:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Mejores Exchanges de Cripto en Mexico
          </h1>
          <p
            className="mx-auto max-w-3xl text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Mexico se ha consolidado como uno de los mercados cripto mas
            importantes de Latinoamerica, con un marco regulatorio a traves de la
            Ley Fintech y el SAT. La facilidad de depositos con SPEI y la amplia
            adopcion del peso mexicano (MXN) en plataformas P2P hacen que comprar
            Bitcoin y otras criptomonedas sea cada vez mas accesible para los
            mexicanos.
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
            Exchanges Disponibles en Mexico
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
            Metodos de Pago Locales en Mexico
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
            Preguntas Frecuentes sobre Cripto en Mexico
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
            volatiles y puedes perder la totalidad de tu inversion. Los enlaces de
            afiliado nos permiten mantener este sitio; esto no afecta nuestras
            calificaciones ni recomendaciones. Consulta las regulaciones del SAT
            aplicables. CriptoEmpire no se responsabiliza por perdidas derivadas
            del uso de esta informacion.
          </p>
        </section>
      </div>
    </main>
  );
}
