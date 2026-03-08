import { Metadata } from "next";
import { exchanges } from "@/data/exchanges";
import { formatPercent } from "@/lib/utils";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Mejores Exchanges de Cripto en Colombia 2026 | Comprar Bitcoin con COP - CriptoEmpire",
  description:
    "Compara los mejores exchanges de criptomonedas en Colombia. Compra Bitcoin, USDT y más con pesos colombianos (COP) vía Nequi, Daviplata o transferencia bancaria. Guía completa para colombianos.",
};

const COUNTRY = "Colombia";
const COUNTRY_CODE = "Colombia";

const localPaymentMethods = [
  {
    name: "Nequi",
    description:
      "Compra cripto usando tu cuenta Nequi a través de plataformas P2P. Uno de los métodos más populares entre colombianos por su rapidez.",
  },
  {
    name: "Daviplata",
    description:
      "Usa tu billetera Daviplata para comprar criptomonedas vía P2P. Aceptada por vendedores en las principales plataformas.",
  },
  {
    name: "Transferencia Bancaria (PSE)",
    description:
      "Deposita pesos colombianos desde tu banco usando PSE. Método seguro y disponible en varios exchanges.",
  },
  {
    name: "Tarjeta de Crédito/Débito",
    description:
      "Usa tu tarjeta Visa o Mastercard para compras rápidas de cripto (puede aplicar comisión adicional).",
  },
];

const faqs = [
  {
    question: "¿Es legal comprar criptomonedas en Colombia?",
    answer:
      "Sí, comprar y vender criptomonedas es legal en Colombia. La Superintendencia Financiera ha emitido lineamientos y se están desarrollando marcos regulatorios más específicos. Las criptomonedas no son moneda de curso legal pero su comercio es permitido.",
  },
  {
    question: "¿Puedo comprar Bitcoin con Nequi o Daviplata?",
    answer:
      "Sí, puedes comprar Bitcoin y otras criptomonedas usando Nequi y Daviplata a través de las plataformas P2P de exchanges como Binance, Bybit y OKX. Solo necesitas buscar vendedores que acepten estos métodos de pago y realizar la transacción directamente.",
  },
  {
    question: "¿Debo pagar impuestos por mis criptomonedas en Colombia?",
    answer:
      "Sí, la DIAN considera que las ganancias por criptomonedas están sujetas al impuesto de renta. Debes declararlas como parte de tu patrimonio y reportar las ganancias de capital. Te recomendamos consultar con un contador especializado para cumplir con las obligaciones tributarias.",
  },
  {
    question: "¿Cuál es el mejor exchange para colombianos en 2026?",
    answer:
      "Depende de tus necesidades. Binance es el más popular por su P2P con COP y soporte en español. Si buscas las comisiones más bajas, MEXC es ideal. Bybit ofrece bonos generosos y no requiere KYC para funciones básicas. OKX destaca por su wallet Web3 y buena liquidez.",
  },
];

export default function ColombiaPage() {
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
            Colombia se ha convertido en uno de los mercados cripto más dinámicos de Latinoamérica,
            con una creciente adopción impulsada por billeteras digitales como Nequi y Daviplata.
            La facilidad de comprar Bitcoin y USDT con pesos colombianos (COP) a través de P2P
            hace que cada vez más colombianos accedan al mundo de las criptomonedas.
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
            calificaciones ni recomendaciones. Consulta las regulaciones de la DIAN aplicables.
            CriptoEmpire no se responsabiliza por pérdidas derivadas del uso de esta información.
          </p>
        </section>
      </div>
    </main>
  );
}
