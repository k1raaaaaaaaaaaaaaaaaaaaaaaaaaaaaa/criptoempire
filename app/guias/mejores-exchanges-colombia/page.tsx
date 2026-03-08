import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";
import AffiliateButton from "@/components/ui/AffiliateButton";
import { exchanges } from "@/data/exchanges";

export const metadata: Metadata = {
  title: "Los 5 Mejores Exchanges para Colombia 2026 | CriptoEmpire",
  description:
    "Comparamos los mejores exchanges de criptomonedas disponibles en Colombia. P2P con pesos colombianos (COP), comisiones, regulación y cómo depositar.",
  keywords:
    "exchanges colombia, comprar bitcoin colombia, criptomonedas colombia, exchanges pesos colombianos, cripto COP",
  openGraph: {
    title: "Los 5 Mejores Exchanges para Colombia 2026",
    description:
      "Comparamos los mejores exchanges de criptomonedas disponibles en Colombia con P2P en COP.",
    type: "article",
    locale: "es_CO",
  },
};

const bybit = exchanges.find((e) => e.id === "bybit")!;
const binance = exchanges.find((e) => e.id === "binance")!;
const mexc = exchanges.find((e) => e.id === "mexc")!;
const okx = exchanges.find((e) => e.id === "okx")!;
const bitget = exchanges.find((e) => e.id === "bitget")!;

export default function MejoresExchangesColombia() {
  return (
    <article className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/guias"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Todas las guías
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="blue">Colombia</Badge>
            <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> 9 min de lectura
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" /> Marzo 2026
              </span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display leading-tight mb-4">
            Los 5 Mejores Exchanges de Criptomonedas para Colombia
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Colombia es uno de los países con mayor adopción cripto en
            Latinoamérica. En esta guía analizamos los mejores exchanges
            internacionales disponibles para colombianos, con opciones de
            depósito en pesos colombianos (COP) y métodos P2P locales.
          </p>
        </header>

        {/* Table of Contents */}
        <nav
          className="rounded-xl border border-[var(--border)] p-5 mb-10"
          style={{ background: "var(--gradient-card)" }}
        >
          <h2 className="text-sm font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wider">
            Contenido
          </h2>
          <ol className="space-y-2 text-sm text-[var(--accent-primary)]">
            <li><a href="#cripto-colombia" className="hover:underline">1. Las criptomonedas en Colombia</a></li>
            <li><a href="#top-5-exchanges" className="hover:underline">2. Top 5 exchanges para colombianos</a></li>
            <li><a href="#p2p-cop" className="hover:underline">3. Opciones P2P con pesos colombianos (COP)</a></li>
            <li><a href="#como-depositar" className="hover:underline">4. Cómo depositar pesos colombianos</a></li>
            <li><a href="#regulacion" className="hover:underline">5. Regulación cripto en Colombia</a></li>
          </ol>
        </nav>

        {/* Content */}
        <div className="prose-custom space-y-10">
          <section id="cripto-colombia">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              1. Las Criptomonedas en Colombia
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Colombia se ha posicionado como uno de los mercados cripto más
              dinámicos de América Latina. Según datos recientes, el país ocupa
              el{" "}
              <strong className="text-[var(--text-primary)]">tercer lugar en adopción cripto en la región</strong>,
              después de Brasil y Argentina. Millones de colombianos utilizan
              criptomonedas para inversión, remesas internacionales y como
              protección frente a la devaluación del peso.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              El ecosistema cripto colombiano se beneficia de una población joven
              y conectada digitalmente, una creciente infraestructura fintech y
              la necesidad de alternativas para enviar y recibir dinero desde el
              exterior. Las stablecoins como USDT y USDC son especialmente
              populares entre quienes reciben pagos freelance o remesas de
              familiares en otros países.
            </p>
          </section>

          <section id="top-5-exchanges">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              2. Top 5 Exchanges para Colombianos
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Evaluamos estos exchanges según sus comisiones, disponibilidad de
              pesos colombianos, variedad de criptomonedas y facilidad de uso
              para usuarios en Colombia:
            </p>

            <div className="space-y-4">
              {[
                {
                  exchange: bybit,
                  position: "1",
                  why: "P2P con COP + bonos de bienvenida + sin KYC obligatorio",
                  verdict:
                    "Bybit es nuestra recomendación principal para colombianos. Ofrece P2P con pesos colombianos a través de Nequi, Bancolombia y Daviplata. No requiere verificación de identidad para empezar y ofrece bonos generosos para nuevos usuarios. Su plataforma es intuitiva tanto en web como en la app móvil.",
                },
                {
                  exchange: binance,
                  position: "2",
                  why: "Mayor liquidez P2P en COP + múltiples métodos de pago",
                  verdict:
                    "Binance tiene el mercado P2P más activo de Colombia con cientos de ofertas disponibles en COP. Acepta pagos por Nequi, Bancolombia, Davivienda y transferencia bancaria. Requiere KYC pero la verificación con cédula colombiana es rápida.",
                },
                {
                  exchange: mexc,
                  position: "3",
                  why: "Comisiones 0% maker + más de 2,000 criptomonedas",
                  verdict:
                    "MEXC es ideal para quienes buscan altcoins y tokens nuevos. Con comisiones maker del 0% en spot, es una de las opciones más económicas. Tiene P2P disponible con COP y no requiere verificación de identidad para montos bajos.",
                },
                {
                  exchange: okx,
                  position: "4",
                  why: "P2P con COP + wallet Web3 integrada",
                  verdict:
                    "OKX ofrece una experiencia completa con P2P en pesos colombianos, trading spot y futuros, y una excelente wallet Web3 para interactuar con DeFi. Su plataforma es más avanzada, ideal para usuarios intermedios.",
                },
                {
                  exchange: bitget,
                  position: "5",
                  why: "Copy trading líder + P2P disponible",
                  verdict:
                    "Bitget destaca por su función de copy trading, que permite copiar automáticamente las operaciones de traders exitosos. Ofrece P2P con COP y comisiones competitivas en spot y futuros.",
                },
              ].map(({ exchange, position, why, verdict }) => (
                <div
                  key={exchange.id}
                  className="rounded-xl border border-[var(--border)] p-5"
                  style={{ background: "var(--gradient-card)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-display">
                      #{position} {exchange.name}
                    </h3>
                    <span className="text-sm text-amber-400 font-semibold">
                      {exchange.rating.toFixed(1)} ★
                    </span>
                  </div>
                  <p className="text-xs text-[var(--accent-primary)] font-medium mb-2">{why}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{verdict}</p>
                  <AffiliateButton
                    href={exchange.bonus.affiliateUrl}
                    label={`Abrir cuenta en ${exchange.name}`}
                    size="sm"
                  />
                </div>
              ))}
            </div>
          </section>

          <section id="p2p-cop">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              3. Opciones P2P con Pesos Colombianos (COP)
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              El trading P2P (persona a persona) es el método más utilizado por
              los colombianos para comprar y vender criptomonedas con pesos. En
              el P2P, compras directamente a otro usuario y el exchange actúa
              como intermediario (escrow) para proteger ambas partes.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Los métodos de pago más populares en el P2P colombiano son:
            </p>
            <ul className="space-y-2 text-[var(--text-secondary)] mb-4">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-[var(--text-primary)]">Nequi:</strong> La billetera digital más popular de Colombia. Transferencias instantáneas y sin costo entre usuarios Nequi.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-[var(--text-primary)]">Bancolombia:</strong> Transferencias bancarias al principal banco del país. Disponible en la mayoría de plataformas P2P.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-[var(--text-primary)]">Daviplata:</strong> Billetera digital de Davivienda, muy usada en zonas rurales y ciudades intermedias.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-[var(--text-primary)]">Transferencia bancaria:</strong> Funciona con cualquier banco colombiano (Davivienda, BBVA, Banco de Bogotá, etc.).</span>
              </li>
            </ul>
            <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 mb-4">
              <p className="text-sm text-amber-300">
                <strong>Tip:</strong> Siempre verifica la reputación del vendedor
                antes de operar. Busca vendedores con más del 95% de operaciones
                completadas y un historial extenso de transacciones.
              </p>
            </div>
          </section>

          <section id="como-depositar">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              4. Cómo Depositar Pesos Colombianos
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              El proceso para depositar COP y comprar criptomonedas varía según
              el exchange, pero generalmente sigue estos pasos:
            </p>
            <ol className="space-y-3 mb-6">
              {[
                "Crea una cuenta en el exchange de tu elección (recomendamos Bybit o Binance para Colombia).",
                "Completa la verificación de identidad si es necesario. Generalmente se acepta la cédula de ciudadanía colombiana.",
                "Ve a la sección P2P del exchange y selecciona 'Comprar'. Elige USDT como criptomoneda y COP como moneda de pago.",
                "Selecciona un vendedor con buena reputación y el método de pago que prefieras (Nequi, Bancolombia, etc.).",
                "Ingresa el monto en COP que deseas gastar. El sistema calculará cuántos USDT recibirás.",
                "Confirma la orden y realiza el pago al vendedor por el método indicado.",
                "Una vez que el vendedor confirme la recepción del pago, los USDT se acreditarán en tu cuenta automáticamente.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3 text-[var(--text-secondary)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-bold text-xs shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Una vez que tengas USDT, puedes usarlos para comprar Bitcoin,
              Ethereum o cualquier otra criptomoneda disponible en el exchange.
              También puedes enviarlos a otras plataformas o wallets sin
              restricciones.
            </p>
          </section>

          <section id="regulacion">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              5. Regulación Cripto en Colombia
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              En Colombia, las criptomonedas <strong className="text-[var(--text-primary)]">no son
              ilegales</strong>, pero tampoco tienen el estatus de moneda de curso
              legal. La Superintendencia Financiera de Colombia ha adoptado una
              postura cautelosa, permitiendo que las instituciones financieras
              participen en pilotos controlados con activos digitales.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              En 2024, Colombia avanzó en la regulación con el sandbox
              regulatorio de la Superfinanciera, que permite a ciertas empresas
              operar bajo supervisión. Aunque no existe una ley específica para
              criptomonedas, las transacciones con activos digitales pueden
              generar obligaciones tributarias.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Es importante tener en cuenta que las ganancias obtenidas por
              trading de criptomonedas están sujetas al{" "}
              <strong className="text-[var(--text-primary)]">impuesto de renta</strong> en Colombia. La
              DIAN ha señalado que los ingresos por criptomonedas deben
              declararse como parte del patrimonio y las ganancias ocasionales.
              Te recomendamos consultar con un contador para cumplir con tus
              obligaciones tributarias.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              En cuanto a los exchanges internacionales, no necesitan licencia
              local para operar en Colombia. Sin embargo, plataformas como
              Binance y Bitget han buscado registrarse voluntariamente para
              generar confianza con los usuarios colombianos.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl border border-[var(--accent-primary)]/30 p-6 sm:p-8 mt-12 text-center"
          style={{ background: "var(--gradient-card)" }}
        >
          <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-2">
            ¿Listo para comprar cripto en Colombia?
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            Regístrate en Bybit con nuestro enlace y obtén hasta $30,000 USDT en bonos
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <AffiliateButton
              href={bybit.bonus.affiliateUrl}
              label="Abrir Cuenta en Bybit →"
              size="lg"
            />
            <AffiliateButton
              href={mexc.bonus.affiliateUrl}
              label="Abrir Cuenta en MEXC →"
              size="lg"
            />
          </div>
          <p className="text-[10px] text-[var(--text-muted)] mt-3">
            Este sitio puede recibir compensación por referidos
          </p>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-[var(--text-muted)] text-center">
          No somos asesores financieros. Las criptomonedas son activos volátiles.
          Invierte responsablemente.
        </p>
      </div>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Los 5 Mejores Exchanges de Criptomonedas para Colombia 2026",
            description:
              "Comparamos los mejores exchanges disponibles en Colombia con P2P en pesos colombianos.",
            datePublished: "2026-03-01",
            dateModified: "2026-03-08",
            author: { "@type": "Organization", name: "CriptoEmpire" },
            publisher: { "@type": "Organization", name: "CriptoEmpire" },
          }),
        }}
      />
    </article>
  );
}
