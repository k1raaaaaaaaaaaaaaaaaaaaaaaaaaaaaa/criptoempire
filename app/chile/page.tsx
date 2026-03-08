import { Metadata } from "next";
import { exchanges } from "@/data/exchanges";
import { formatPercent } from "@/lib/utils";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";
import ExchangeLogo from "@/components/ui/ExchangeLogo";

export const metadata: Metadata = {
  title:
    "Mejores Exchanges de Cripto en Chile 2026 | Comprar Bitcoin con CLP - CriptoEmpire",
  description:
    "Compara los mejores exchanges de criptomonedas en Chile. Compra Bitcoin, USDT y más con pesos chilenos (CLP), transferencia bancaria y MACH. Guía completa para invertir en cripto desde Chile.",
};

const COUNTRY = "Chile";
const COUNTRY_CODE = "Chile";

const localPaymentMethods = [
  {
    name: "Transferencia Bancaria (Banco de Chile, BancoEstado, Santander)",
    description:
      "Transfiere pesos chilenos desde los principales bancos del país para comprar criptomonedas de forma segura.",
  },
  {
    name: "MACH/Tenpo",
    description:
      "Usa las billeteras digitales más populares de Chile para comprar cripto vía P2P o tarjeta virtual de forma rápida.",
  },
  {
    name: "P2P con Pesos Chilenos (CLP)",
    description:
      "Compra y vende cripto directamente con otros usuarios usando pesos chilenos en plataformas P2P.",
  },
  {
    name: "Tarjeta de Crédito/Débito",
    description:
      "Usa tu tarjeta Visa o Mastercard para compras rápidas de criptomonedas (comisión extra puede aplicar).",
  },
];

const faqs = [
  {
    question: "¿Es legal comprar criptomonedas en Chile?",
    answer:
      "Sí, comprar y vender criptomonedas es legal en Chile. Con la aprobación de la Ley Fintech (Ley N° 21.521) en 2023, Chile estableció un marco regulatorio para las plataformas de activos digitales. La Comisión para el Mercado Financiero (CMF) supervisa a los proveedores de servicios de activos virtuales. Esto brinda mayor seguridad jurídica a los usuarios chilenos.",
  },
  {
    question: "¿Debo pagar impuestos por mis criptomonedas ante el SII?",
    answer:
      "Sí, el Servicio de Impuestos Internos (SII) de Chile considera que las ganancias por compraventa de criptomonedas están afectas al impuesto a la renta. Deben declararse como ganancias de capital en la Declaración de Renta anual. Se recomienda mantener un registro detallado de todas las transacciones y consultar con un asesor tributario para cumplir correctamente con las obligaciones fiscales.",
  },
  {
    question: "¿Qué es la Ley Fintech y cómo afecta a las criptomonedas en Chile?",
    answer:
      "La Ley Fintech (Ley N° 21.521) regula a los proveedores de servicios financieros tecnológicos en Chile, incluyendo plataformas de criptomonedas. Esta ley establece requisitos de registro, capital mínimo, protección al consumidor y prevención de lavado de activos. Para los usuarios, significa mayor protección y transparencia al operar con exchanges regulados en el país.",
  },
  {
    question: "¿Cuál es el mejor exchange de criptomonedas en Chile?",
    answer:
      "Los mejores exchanges para chilenos en 2026 son Binance, Bybit y OKX. Binance ofrece P2P con pesos chilenos y el ecosistema más completo. Bybit no requiere KYC para funciones básicas y tiene excelentes bonos de bienvenida. OKX combina buena liquidez con una wallet Web3 integrada. Todos permiten operar con CLP a través de transferencia bancaria o P2P.",
  },
];

export default function ChilePage() {
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
            Chile es un referente en regulación cripto en Latinoamérica gracias a su
            Ley Fintech, que brinda un marco legal claro para los activos digitales.
            Con una economía estable y alta bancarización, comprar Bitcoin y USDT con
            pesos chilenos (CLP) es cada vez más sencillo. Acá te mostramos los mejores
            exchanges disponibles para chilenos en 2026.
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
