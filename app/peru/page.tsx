import { Metadata } from "next";
import { exchanges } from "@/data/exchanges";
import { formatPercent } from "@/lib/utils";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";
import ExchangeLogo from "@/components/ui/ExchangeLogo";

export const metadata: Metadata = {
  title:
    "Mejores Exchanges de Cripto en Perú 2026 | Comprar Bitcoin con PEN - CriptoEmpire",
  description:
    "Compara los mejores exchanges de criptomonedas en Perú. Compra Bitcoin, USDT y más con soles peruanos (PEN), Yape, Plin y transferencia bancaria. Guía completa para invertir en cripto desde Perú.",
};

const COUNTRY = "Perú";
const COUNTRY_CODE = "Perú";

const localPaymentMethods = [
  {
    name: "Yape",
    description:
      "Compra cripto usando Yape, la billetera digital más popular del Perú, a través de P2P en exchanges compatibles.",
  },
  {
    name: "Plin",
    description:
      "Usa Plin para transferencias instantáneas y compra criptomonedas vía P2P de forma rápida y segura.",
  },
  {
    name: "Transferencia Bancaria (BCP, Interbank, BBVA)",
    description:
      "Transfiere soles peruanos desde los principales bancos del Perú para comprar criptomonedas.",
  },
  {
    name: "P2P con Soles (PEN)",
    description:
      "Compra y vende cripto directamente con otros usuarios usando soles peruanos en plataformas P2P.",
  },
  {
    name: "Tarjeta de Crédito/Débito",
    description:
      "Usa tu tarjeta Visa o Mastercard para compras rápidas de criptomonedas (comisión extra puede aplicar).",
  },
];

const faqs = [
  {
    question: "¿Es legal comprar criptomonedas en Perú?",
    answer:
      "Sí, comprar y vender criptomonedas es legal en Perú. No existe una prohibición sobre el uso de criptoactivos, aunque no están regulados como moneda de curso legal. La Superintendencia de Banca, Seguros y AFP (SBS) ha emitido alertas informativas pero no ha prohibido su uso. Cada vez más peruanos utilizan cripto como alternativa de inversión y ahorro.",
  },
  {
    question: "¿Debo pagar impuestos por mis criptomonedas ante la SUNAT?",
    answer:
      "Sí, las ganancias obtenidas por la compraventa de criptomonedas están sujetas al Impuesto a la Renta en Perú. La SUNAT considera estas ganancias como rentas de fuente peruana si las operaciones se realizan desde el país. Se recomienda llevar un registro de todas las transacciones y consultar con un contador para cumplir con las obligaciones tributarias.",
  },
  {
    question: "¿Cómo puedo comprar Bitcoin con soles peruanos (PEN)?",
    answer:
      "La forma más popular de comprar Bitcoin con soles es a través del mercado P2P de exchanges como Binance, Bybit u OKX. En el P2P, puedes usar Yape, Plin o transferencia bancaria para pagar directamente a un vendedor. También puedes usar tarjeta de crédito o débito en algunos exchanges, aunque las comisiones suelen ser más altas.",
  },
  {
    question: "¿Cuál es el mejor exchange de criptomonedas para principiantes en Perú?",
    answer:
      "Para principiantes en Perú, Binance y Bybit son las opciones más recomendadas. Binance ofrece una interfaz en español, P2P con soles peruanos y soporte 24/7. Bybit destaca por no requerir KYC para funciones básicas y ofrece generosos bonos de bienvenida. Ambos permiten comprar cripto usando Yape, Plin y transferencia bancaria vía P2P.",
  },
];

export default function PeruPage() {
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
            Perú es uno de los mercados cripto de mayor crecimiento en Latinoamérica,
            con millones de usuarios utilizando Yape y Plin para transacciones digitales.
            Comprar Bitcoin y USDT con soles peruanos (PEN) es cada vez más accesible
            gracias a los mercados P2P. Acá te mostramos los mejores exchanges disponibles
            para peruanos en 2026.
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
                        <ExchangeLogo exchangeId={exchange.id} size={28} />
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
            calificaciones ni recomendaciones. Siempre investiga por tu cuenta antes de invertir.
            CriptoEmpire no se responsabiliza por pérdidas derivadas del uso de esta información.
          </p>
        </section>
      </div>
    </main>
  );
}
