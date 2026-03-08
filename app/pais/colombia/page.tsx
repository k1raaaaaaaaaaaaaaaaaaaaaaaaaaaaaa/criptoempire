import { Metadata } from "next";
import { exchanges } from "@/data/exchanges";
import { formatPercent } from "@/lib/utils";
import ExchangeLogo from "@/components/ui/ExchangeLogo";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";
import StarRating from "@/components/ui/StarRating";

export const metadata: Metadata = {
  title:
    "Mejores Exchanges de Cripto en Colombia 2026 | Comprar Bitcoin con COP - CriptoEmpire",
  description:
    "Compara los mejores exchanges de criptomonedas en Colombia. Compra Bitcoin, USDT y mas con pesos colombianos (COP) via PSE, Nequi, Daviplata o P2P. Guia completa para colombianos.",
  openGraph: {
    title: "Mejores Exchanges de Cripto en Colombia 2026",
    description:
      "Ranking actualizado de exchanges disponibles en Colombia. PSE, Nequi, Daviplata y mas metodos de pago.",
  },
};

const COUNTRY_CODE = "CO";

const localPaymentMethods = [
  {
    name: "Nequi",
    icon: "📱",
    description:
      "Compra cripto usando tu cuenta Nequi a traves de plataformas P2P. Uno de los metodos mas populares entre colombianos por su rapidez.",
  },
  {
    name: "Daviplata",
    icon: "📲",
    description:
      "Usa tu billetera Daviplata para comprar criptomonedas via P2P. Aceptada por vendedores en las principales plataformas.",
  },
  {
    name: "Transferencia Bancaria (PSE)",
    icon: "🏦",
    description:
      "Deposita pesos colombianos desde tu banco usando PSE. Metodo seguro y disponible en varios exchanges.",
  },
  {
    name: "Tarjeta de Credito/Debito",
    icon: "💳",
    description:
      "Usa tu tarjeta Visa o Mastercard para compras rapidas de cripto (puede aplicar comision adicional).",
  },
];

const countryInfo = {
  currency: "COP (Peso Colombiano)",
  regulation: "En desarrollo - Superintendencia Financiera",
  taxAuthority: "DIAN",
  popularUse: "Inversion, ahorro en dolares y remesas",
  adoption: "En crecimiento - adopcion acelerada en los ultimos anos",
};

const faqs = [
  {
    question: "¿Es legal comprar criptomonedas en Colombia?",
    answer:
      "Si, comprar y vender criptomonedas es legal en Colombia. La Superintendencia Financiera ha emitido lineamientos y se estan desarrollando marcos regulatorios mas especificos. Las criptomonedas no son moneda de curso legal pero su comercio es permitido.",
  },
  {
    question: "¿Puedo comprar Bitcoin con Nequi o Daviplata?",
    answer:
      "Si, puedes comprar Bitcoin y otras criptomonedas usando Nequi y Daviplata a traves de las plataformas P2P de exchanges como Binance, Bybit y OKX. Solo necesitas buscar vendedores que acepten estos metodos de pago y realizar la transaccion directamente.",
  },
  {
    question: "¿Debo pagar impuestos por mis criptomonedas en Colombia?",
    answer:
      "Si, la DIAN considera que las ganancias por criptomonedas estan sujetas al impuesto de renta. Debes declararlas como parte de tu patrimonio y reportar las ganancias de capital. Te recomendamos consultar con un contador especializado para cumplir con las obligaciones tributarias.",
  },
  {
    question: "¿Cual es el mejor exchange para colombianos en 2026?",
    answer:
      "Depende de tus necesidades. Binance es el mas popular por su P2P con COP y soporte en espanol. Si buscas las comisiones mas bajas, MEXC es ideal. Bybit ofrece bonos generosos y no requiere KYC para funciones basicas. OKX destaca por su wallet Web3 y buena liquidez.",
  },
];

export default function ColombiaPage() {
  const availableExchanges = exchanges
    .filter((exchange) => {
      if (exchange.latam.countries) {
        return exchange.latam.countries.includes(COUNTRY_CODE);
      }
      return (
        exchange.latam.available &&
        !exchange.latam.countriesBlocked.includes("Colombia")
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
          <span className="mb-4 inline-block text-6xl">🇨🇴</span>
          <Badge variant="blue" className="mb-4">
            Colombia 2026
          </Badge>
          <h1
            className="mb-6 font-display text-3xl font-bold md:text-4xl lg:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Mejores Exchanges de Cripto en Colombia
          </h1>
          <p
            className="mx-auto max-w-3xl text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Colombia se ha convertido en uno de los mercados cripto mas dinamicos
            de Latinoamerica, con una creciente adopcion impulsada por billeteras
            digitales como Nequi y Daviplata. La facilidad de comprar Bitcoin y
            USDT con pesos colombianos (COP) a traves de PSE y P2P hace que cada
            vez mas colombianos accedan al mundo de las criptomonedas.
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
            Exchanges Disponibles en Colombia
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
            Metodos de Pago Locales en Colombia
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
            Preguntas Frecuentes sobre Cripto en Colombia
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
            calificaciones ni recomendaciones. Consulta las regulaciones de la
            DIAN aplicables. CriptoEmpire no se responsabiliza por perdidas
            derivadas del uso de esta informacion.
          </p>
        </section>
      </div>
    </main>
  );
}
