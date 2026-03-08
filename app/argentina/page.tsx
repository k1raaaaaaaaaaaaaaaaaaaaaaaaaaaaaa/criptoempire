import { Metadata } from "next";
import { exchanges } from "@/data/exchanges";
import { formatPercent } from "@/lib/utils";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Mejores Exchanges de Cripto en Argentina 2026 | Comprar Bitcoin con ARS - CriptoEmpire",
  description:
    "Compará los mejores exchanges de criptomonedas en Argentina. Comprá Bitcoin, USDT y más con pesos argentinos (ARS), Mercado Pago y transferencia bancaria. Dólar cripto y protección contra la inflación.",
};

const COUNTRY = "Argentina";
const COUNTRY_CODE = "Argentina";

const localPaymentMethods = [
  {
    name: "Mercado Pago",
    description:
      "Comprá cripto directamente usando tu saldo o tarjeta de Mercado Pago a través de P2P.",
  },
  {
    name: "Transferencia Bancaria (CBU/CVU)",
    description:
      "Transferí pesos argentinos desde cualquier banco o billetera virtual.",
  },
  {
    name: "P2P con ARS",
    description:
      "Comprá y vendé cripto directamente con otros usuarios usando pesos argentinos.",
  },
  {
    name: "Tarjeta de Crédito/Débito",
    description:
      "Usá tu tarjeta Visa o Mastercard para compras rápidas (comisión extra puede aplicar).",
  },
];

const faqs = [
  {
    question: "¿Es legal comprar criptomonedas en Argentina?",
    answer:
      "Sí, comprar y vender criptomonedas es legal en Argentina. No existe una prohibición sobre el uso de criptomonedas, aunque la regulación específica sigue en desarrollo. Muchos argentinos usan cripto como protección contra la inflación del peso argentino.",
  },
  {
    question: "¿Qué es el dólar cripto y cómo funciona en Argentina?",
    answer:
      "El dólar cripto se refiere a stablecoins como USDT o USDC que mantienen paridad 1:1 con el dólar estadounidense. En Argentina, es una forma popular de ahorrar en dólares sin restricciones del cepo cambiario. Podés comprar USDT vía P2P con pesos argentinos en exchanges como Binance o Bybit.",
  },
  {
    question:
      "¿Puedo usar Mercado Pago para comprar Bitcoin en Argentina?",
    answer:
      "Sí, varios exchanges permiten comprar cripto usando Mercado Pago a través de sus plataformas P2P. Binance y Bybit son los más populares para este método. Solo necesitás buscar vendedores que acepten Mercado Pago como método de pago.",
  },
  {
    question:
      "¿Necesito declarar mis criptomonedas ante AFIP?",
    answer:
      "Sí, las criptomonedas deben declararse como bienes en el impuesto a los bienes personales si superás el mínimo no imponible. Las ganancias por compraventa están alcanzadas por el impuesto a las ganancias. Te recomendamos consultar con un contador especializado.",
  },
];

export default function ArgentinaPage() {
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
            Argentina es uno de los países con mayor adopción cripto en Latinoamérica, impulsado
            por la alta inflación del peso argentino (ARS) y las restricciones cambiarias. El
            dólar cripto (USDT) se convirtió en una herramienta esencial para proteger el poder
            adquisitivo. Acá te mostramos los mejores exchanges disponibles para argentinos en 2026.
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
            criptomonedas son activos volátiles y podés perder la totalidad de tu inversión.
            Los enlaces de afiliado nos permiten mantener este sitio; esto no afecta nuestras
            calificaciones ni recomendaciones. Siempre investigá por tu cuenta antes de invertir.
            CriptoEmpire no se responsabiliza por pérdidas derivadas del uso de esta información.
          </p>
        </section>
      </div>
    </main>
  );
}
