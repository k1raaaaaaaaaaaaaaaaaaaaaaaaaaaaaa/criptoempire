import { Metadata } from "next";
import { exchanges } from "@/data/exchanges";
import { formatPercent } from "@/lib/utils";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Mejores Exchanges de Cripto en México 2026 | Comprar Bitcoin con MXN - CriptoEmpire",
  description:
    "Compara los mejores exchanges de criptomonedas en México. Compra Bitcoin, USDT y más con pesos mexicanos (MXN) vía SPEI, tarjeta o P2P. Regulaciones SAT y guía completa para mexicanos.",
};

const COUNTRY = "México";
const COUNTRY_CODE = "México";

const localPaymentMethods = [
  {
    name: "SPEI (Transferencia Interbancaria)",
    description:
      "Deposita pesos mexicanos al instante desde cualquier banco mexicano usando SPEI. El método más económico y rápido.",
  },
  {
    name: "P2P con MXN",
    description:
      "Compra y vende cripto directamente con otros usuarios usando pesos mexicanos. Disponible en Binance, Bybit y OKX.",
  },
  {
    name: "Tarjeta de Crédito/Débito",
    description:
      "Usa tu tarjeta Visa o Mastercard para compras rápidas de cripto (puede aplicar comisión adicional).",
  },
  {
    name: "OXXO Pay",
    description:
      "Algunos exchanges y plataformas P2P permiten depósitos mediante OXXO Pay para quienes prefieren pagar en efectivo.",
  },
];

const faqs = [
  {
    question: "¿Es legal comprar criptomonedas en México?",
    answer:
      "Sí, comprar y vender criptomonedas es legal en México. La Ley Fintech de 2018 regula a las instituciones de tecnología financiera, aunque los exchanges internacionales operan bajo marcos legales distintos. Las criptomonedas no son consideradas moneda de curso legal pero su tenencia y comercio es permitida.",
  },
  {
    question: "¿Cómo declaro mis criptomonedas ante el SAT?",
    answer:
      "El SAT considera las ganancias por criptomonedas como ingresos gravables. Debes declararlas en tu declaración anual bajo el régimen correspondiente. Las ganancias de capital por compraventa de cripto están sujetas al ISR. Te recomendamos consultar con un contador especializado en criptoactivos.",
  },
  {
    question: "¿Puedo comprar Bitcoin con SPEI en México?",
    answer:
      "Sí, la mayoría de los exchanges que operan en México aceptan depósitos vía SPEI. Es el método más rápido y económico para comprar cripto con pesos mexicanos. Exchanges como Binance y Bitso permiten depósitos SPEI que se acreditan en minutos.",
  },
  {
    question: "¿Cuál es el mejor exchange para principiantes en México?",
    answer:
      "Para principiantes en México, Binance es una excelente opción por su P2P con MXN y soporte en español. Si prefieres menores comisiones y no te importa el KYC, MEXC o Bybit son alternativas sólidas. Coinbase es el más fácil de usar pero con comisiones más altas.",
  },
];

export default function MexicoPage() {
  const availableExchanges = exchanges.filter(
    (exchange) =>
      exchange.latam.available &&
      !exchange.latam.countriesBlocked.includes(COUNTRY_CODE)
  );

  return (
    <main className="min-h-screen px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <section className="mb-12 text-center">
          <Badge variant="blue" className="mb-4">
            {COUNTRY} 2026
          </Badge>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl" style={{ color: "var(--text-primary)" }}>
            Mejores Exchanges de Cripto en {COUNTRY} 2026
          </h1>
          <p className="mx-auto max-w-3xl text-lg" style={{ color: "var(--text-secondary)" }}>
            México se ha consolidado como uno de los mercados cripto más importantes de
            Latinoamérica, con un marco regulatorio a través de la Ley Fintech y el SAT. La
            facilidad de depósitos con SPEI y la amplia adopción del peso mexicano (MXN) en
            plataformas P2P hacen que comprar Bitcoin y otras criptomonedas sea cada vez más
            accesible para los mexicanos.
          </p>
        </section>

        {/* Exchange Table */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Exchanges Disponibles en {COUNTRY}
          </h2>
          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--border)", background: "var(--gradient-card)" }}>
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ borderColor: "var(--border)" }} className="border-b">
                  <th className="px-6 py-4 font-semibold" style={{ color: "var(--text-secondary)" }}>Exchange</th>
                  <th className="px-6 py-4 font-semibold" style={{ color: "var(--text-secondary)" }}>Comisión Spot</th>
                  <th className="px-6 py-4 font-semibold" style={{ color: "var(--text-secondary)" }}>Bono</th>
                  <th className="px-6 py-4 font-semibold" style={{ color: "var(--text-secondary)" }}>KYC</th>
                  <th className="px-6 py-4 font-semibold" style={{ color: "var(--text-secondary)" }}>Acción</th>
                </tr>
              </thead>
              <tbody>
                {availableExchanges.map((exchange) => (
                  <tr
                    key={exchange.id}
                    className="border-b transition-colors hover:bg-[#1F2D45]"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={exchange.logo}
                          alt={exchange.name}
                          className="h-8 w-8 rounded-lg"
                        />
                        <div>
                          <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
                            {exchange.name}
                          </span>
                          {exchange.badge && (
                            <Badge variant="green" className="ml-2 text-[10px]">
                              {exchange.badge === "popular" && "Popular"}
                              {exchange.badge === "lowest-fees" && "Menores Comisiones"}
                              {exchange.badge === "best-beginners" && "Principiantes"}
                              {exchange.badge === "best-liquidity" && "Mayor Liquidez"}
                              {exchange.badge === "no-kyc" && "Sin KYC"}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono" style={{ color: "var(--text-primary)" }}>
                      {formatPercent(exchange.fees.spotTaker)}
                    </td>
                    <td className="px-6 py-4" style={{ color: "var(--accent-secondary)" }}>
                      {exchange.bonus.amount}
                    </td>
                    <td className="px-6 py-4">
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
                    </td>
                    <td className="px-6 py-4">
                      <AffiliateButton
                        href={exchange.bonus.affiliateUrl}
                        label="Abrir Cuenta"
                        size="sm"
                        variant="primary"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Local Payment Methods */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Métodos de Pago Locales en {COUNTRY}
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
                <h3 className="mb-2 text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                  {method.name}
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>{method.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Preguntas Frecuentes sobre Cripto en {COUNTRY}
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
                <p className="px-6 pb-4" style={{ color: "var(--text-secondary)" }}>
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
            background: "var(--bg-card)",
          }}
        >
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
            <strong>Aviso Legal:</strong> La información presentada en CriptoEmpire tiene fines
            informativos y no constituye asesoramiento financiero, fiscal o de inversión. Las
            criptomonedas son activos volátiles y puedes perder la totalidad de tu inversión.
            Los enlaces de afiliado nos permiten mantener este sitio; esto no afecta nuestras
            calificaciones ni recomendaciones. Consulta las regulaciones del SAT aplicables.
            CriptoEmpire no se responsabiliza por pérdidas derivadas del uso de esta información.
          </p>
        </section>
      </div>
    </main>
  );
}
