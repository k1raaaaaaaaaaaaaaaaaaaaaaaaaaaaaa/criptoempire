import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";
import AffiliateButton from "@/components/ui/AffiliateButton";
import { exchanges } from "@/data/exchanges";

export const metadata: Metadata = {
  title: "Cómo Comprar USDT en Argentina Paso a Paso (2026) | CriptoEmpire",
  description:
    "Guía completa para comprar USDT (Tether) desde Argentina en 2026. Métodos P2P, transferencia bancaria, tarjeta de crédito. Comparamos Bybit, Binance y MEXC.",
  keywords:
    "comprar usdt argentina, comprar tether argentina, usdt pesos argentinos, cripto argentina 2026",
  openGraph: {
    title: "Cómo Comprar USDT en Argentina Paso a Paso (2026)",
    description:
      "Guía completa para comprar USDT desde Argentina. P2P, transferencia y tarjeta.",
    type: "article",
    locale: "es_AR",
  },
};

const bybit = exchanges.find((e) => e.id === "bybit")!;
const binance = exchanges.find((e) => e.id === "binance")!;
const mexc = exchanges.find((e) => e.id === "mexc")!;

export default function ComoComprarUSDTArgentina() {
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
            <Badge variant="blue">Tutorial</Badge>
            <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> 8 min de lectura
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" /> Marzo 2026
              </span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display leading-tight mb-4">
            Cómo Comprar USDT en Argentina Paso a Paso
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Guía completa y actualizada para comprar USDT (Tether) desde
            Argentina en 2026. Comparamos los mejores métodos: P2P, transferencia
            bancaria y tarjeta de crédito.
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
            <li><a href="#que-es-usdt" className="hover:underline">1. ¿Qué es USDT y por qué comprarlo?</a></li>
            <li><a href="#mejores-exchanges" className="hover:underline">2. Mejores exchanges para comprar USDT en Argentina</a></li>
            <li><a href="#metodo-p2p" className="hover:underline">3. Método 1: Comprar USDT por P2P</a></li>
            <li><a href="#metodo-tarjeta" className="hover:underline">4. Método 2: Comprar USDT con tarjeta</a></li>
            <li><a href="#consejos" className="hover:underline">5. Consejos de seguridad</a></li>
            <li><a href="#preguntas" className="hover:underline">6. Preguntas frecuentes</a></li>
          </ol>
        </nav>

        {/* Content */}
        <div className="prose-custom space-y-10">
          <section id="que-es-usdt">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              1. ¿Qué es USDT y por qué comprarlo?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              USDT (Tether) es una <strong className="text-[var(--text-primary)]">stablecoin</strong> — una
              criptomoneda cuyo valor está vinculado 1:1 al dólar estadounidense.
              Esto significa que 1 USDT siempre vale aproximadamente 1 USD.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Para los argentinos, el USDT se ha convertido en una herramienta
              fundamental para:
            </p>
            <ul className="space-y-2 text-[var(--text-secondary)] mb-4">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-[var(--text-primary)]">Protegerse de la inflación</strong> — al estar vinculado al dólar, mantiene su valor mejor que el peso argentino.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-[var(--text-primary)]">Acceder al &quot;dólar cripto&quot;</strong> — generalmente cotiza cerca del dólar blue, sin restricciones de compra.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-[var(--text-primary)]">Enviar y recibir dinero</strong> — transferencias internacionales rápidas y de bajo costo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-[var(--text-primary)]">Hacer trading</strong> — la mayoría de pares de trading usan USDT como moneda base.</span>
              </li>
            </ul>
          </section>

          <section id="mejores-exchanges">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              2. Mejores Exchanges para Comprar USDT en Argentina
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Después de analizar comisiones, facilidad de uso y disponibilidad
              de pesos argentinos (ARS), estos son los 3 mejores exchanges:
            </p>

            <div className="space-y-4">
              {[
                {
                  exchange: bybit,
                  why: "Sin KYC + bonos altos + P2P con ARS",
                  verdict: "Mejor opción general para argentinos. P2P disponible con pesos argentinos y no requiere verificación de identidad para empezar.",
                },
                {
                  exchange: binance,
                  why: "Mayor liquidez P2P en ARS + múltiples métodos de pago",
                  verdict: "El P2P más activo en Argentina con cientos de ofertas. Requiere KYC pero la verificación es rápida.",
                },
                {
                  exchange: mexc,
                  why: "Comisiones 0% maker + sin KYC",
                  verdict: "Ideal si ya tienes USDT y quieres hacer trading con las comisiones más bajas del mercado.",
                },
              ].map(({ exchange, why, verdict }) => (
                <div
                  key={exchange.id}
                  className="rounded-xl border border-[var(--border)] p-5"
                  style={{ background: "var(--gradient-card)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-display">
                      {exchange.name}
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

          <section id="metodo-p2p">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              3. Método 1: Comprar USDT por P2P (Recomendado)
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              El P2P (persona a persona) es el método más popular en Argentina
              para comprar USDT con pesos. Funciona así: le compras directamente
              a otro usuario usando transferencia bancaria, Mercado Pago u otros
              métodos locales.
            </p>

            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">
              Paso a paso en Bybit:
            </h3>
            <ol className="space-y-3 mb-6">
              {[
                "Regístrate en Bybit usando nuestro enlace para obtener el bono de bienvenida.",
                "Ve a la sección P2P (Comprar Cripto → P2P Trading).",
                "Selecciona USDT como moneda a comprar y ARS como moneda de pago.",
                "Elige un vendedor con buena reputación (busca +95% de completados y muchas operaciones).",
                "Ingresa la cantidad de ARS que quieres gastar o la cantidad de USDT que quieres comprar.",
                "Haz clic en 'Comprar' y realiza la transferencia al vendedor por el método indicado.",
                "Una vez que el vendedor confirme el pago, los USDT se acreditarán en tu cuenta automáticamente.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3 text-[var(--text-secondary)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-bold text-xs shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>

            <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 mb-4">
              <p className="text-sm text-amber-300">
                <strong>Tip:</strong> Siempre opera dentro de la plataforma P2P
                del exchange. Nunca envíes dinero fuera del sistema — el escrow
                (custodia) del exchange protege tu compra.
              </p>
            </div>
          </section>

          <section id="metodo-tarjeta">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              4. Método 2: Comprar USDT con Tarjeta de Crédito/Débito
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              La forma más rápida pero con comisiones más altas (generalmente 2-4%
              sobre el monto). La mayoría de exchanges aceptan Visa y Mastercard
              emitidas en Argentina.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              <strong className="text-[var(--text-primary)]">Ventaja:</strong> Compra
              instantánea en menos de 5 minutos.
              <br />
              <strong className="text-[var(--text-primary)]">Desventaja:</strong> Comisión
              del procesador de pagos + posible recargo del banco emisor. El costo
              total puede ser 3-5% más caro que P2P.
            </p>
          </section>

          <section id="consejos">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              5. Consejos de Seguridad
            </h2>
            <ul className="space-y-3 text-[var(--text-secondary)]">
              {[
                "Activa siempre la autenticación de dos factores (2FA) con Google Authenticator.",
                "Usa una contraseña única y segura para cada exchange.",
                "En P2P, solo opera con vendedores verificados y con buena reputación.",
                "Nunca compartas tu información de login o códigos 2FA con nadie.",
                "Si vas a guardar grandes cantidades, considera usar una wallet propia (Metamask, Trust Wallet).",
                "Desconfía de ofertas con precios muy por debajo del mercado — pueden ser estafas.",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span className="text-sm leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="preguntas">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              6. Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "¿Es legal comprar USDT en Argentina?",
                  a: "Sí, no existe prohibición para comprar o vender criptomonedas en Argentina. Sin embargo, las ganancias pueden estar sujetas a impuestos.",
                },
                {
                  q: "¿Cuánto USDT puedo comprar sin KYC?",
                  a: "En Bybit y MEXC puedes operar sin KYC con límites de retiro de hasta 20,000 USDT diarios. Para montos mayores, necesitarás verificar tu identidad.",
                },
                {
                  q: "¿A cuánto cotiza el USDT en pesos argentinos?",
                  a: "El USDT generalmente cotiza cerca del dólar blue. El precio varía según la oferta y demanda en el mercado P2P.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="rounded-xl border border-[var(--border)] p-4" style={{ background: "var(--gradient-card)" }}>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2 text-sm">{q}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl border border-[var(--accent-primary)]/30 p-6 sm:p-8 mt-12 text-center"
          style={{ background: "var(--gradient-card)" }}
        >
          <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-2">
            ¿Listo para comprar USDT?
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            Regístrate en Bybit con nuestro enlace y obtén hasta $30,000 USDT en bonos
          </p>
          <AffiliateButton
            href={bybit.bonus.affiliateUrl}
            label="Abrir Cuenta en Bybit →"
            size="lg"
          />
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
            headline: "Cómo Comprar USDT en Argentina Paso a Paso (2026)",
            description: "Guía completa para comprar USDT desde Argentina en 2026.",
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
