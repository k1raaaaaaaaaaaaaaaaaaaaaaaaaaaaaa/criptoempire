import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";
import AffiliateButton from "@/components/ui/AffiliateButton";
import { exchanges } from "@/data/exchanges";

export const metadata: Metadata = {
  title: "Guía de Trading de Futuros Cripto para Principiantes 2026 | CriptoEmpire",
  description:
    "Aprende trading de futuros de criptomonedas desde cero. Apalancamiento, posiciones long y short, liquidación y gestión de riesgo. Guía completa 2026.",
  keywords:
    "trading futuros cripto, futuros criptomonedas, apalancamiento cripto, trading principiantes, bybit futuros",
  openGraph: {
    title: "Guía de Trading de Futuros Cripto para Principiantes 2026",
    description:
      "Aprende trading de futuros de criptomonedas desde cero. Apalancamiento, liquidación y gestión de riesgo.",
    type: "article",
    locale: "es_LA",
  },
};

const bybit = exchanges.find((e) => e.id === "bybit")!;
const binance = exchanges.find((e) => e.id === "binance")!;
const okx = exchanges.find((e) => e.id === "okx")!;

export default function TradingFuturosPrincipiantes() {
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
            <Badge variant="blue">Trading</Badge>
            <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> 10 min de lectura
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" /> Marzo 2026
              </span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display leading-tight mb-4">
            Guía de Trading de Futuros Cripto para Principiantes
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            El trading de futuros es una de las formas más populares de operar
            criptomonedas. En esta guía te explicamos todo lo que necesitas
            saber para empezar: desde qué son los futuros hasta cómo gestionar
            el riesgo como un profesional.
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
            <li><a href="#que-son-futuros" className="hover:underline">1. ¿Qué son los futuros de criptomonedas?</a></li>
            <li><a href="#apalancamiento" className="hover:underline">2. ¿Cómo funciona el apalancamiento?</a></li>
            <li><a href="#long-vs-short" className="hover:underline">3. Posiciones Long vs Short</a></li>
            <li><a href="#liquidacion" className="hover:underline">4. ¿Qué es la liquidación?</a></li>
            <li><a href="#mejores-exchanges" className="hover:underline">5. Mejores exchanges para futuros</a></li>
            <li><a href="#gestion-riesgo" className="hover:underline">6. Gestión de riesgo: consejos para principiantes</a></li>
          </ol>
        </nav>

        {/* Content */}
        <div className="prose-custom space-y-10">
          <section id="que-son-futuros">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              1. ¿Qué son los futuros de criptomonedas?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Un contrato de futuros es un acuerdo para comprar o vender una
              criptomoneda a un precio determinado en una fecha futura. A
              diferencia del trading spot, donde compras y posees la criptomoneda
              directamente, en futuros operas con <strong className="text-[var(--text-primary)]">contratos derivados</strong> que
              siguen el precio del activo subyacente.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              En el mercado cripto, los futuros más populares son los{" "}
              <strong className="text-[var(--text-primary)]">futuros perpetuos</strong> (perpetual swaps).
              Estos contratos no tienen fecha de vencimiento, lo que significa
              que puedes mantener tu posición abierta indefinidamente mientras
              tengas suficiente margen.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              La principal ventaja de los futuros es que permiten{" "}
              <strong className="text-[var(--text-primary)]">ganar tanto en mercados alcistas como
              bajistas</strong>, y operar con apalancamiento para amplificar tus
              posiciones. Sin embargo, esto también implica mayores riesgos, por
              lo que es fundamental entender cada concepto antes de empezar.
            </p>
          </section>

          <section id="apalancamiento">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              2. ¿Cómo funciona el apalancamiento?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              El apalancamiento te permite abrir posiciones más grandes que tu
              capital disponible. Si usas un apalancamiento de{" "}
              <strong className="text-[var(--text-primary)]">10x</strong>, con $100 puedes controlar una
              posición de $1,000. Esto amplifica tanto las ganancias como las
              pérdidas proporcionalmente.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Veamos un ejemplo práctico: tienes $100 y abres una posición long
              en Bitcoin con apalancamiento 10x. Tu posición total es de $1,000.
              Si Bitcoin sube un 5%, tu ganancia es de $50 (50% sobre tu capital
              de $100). Pero si Bitcoin baja un 5%, pierdes $50, y si baja un
              10%, pierdes todo tu capital ($100).
            </p>
            <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 mb-4">
              <p className="text-sm text-amber-300">
                <strong>Importante:</strong> Los principiantes deben usar
                apalancamientos bajos (2x-5x máximo). Un apalancamiento de 50x o
                100x puede liquidar tu posición con movimientos mínimos del mercado.
              </p>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              La mayoría de exchanges ofrecen dos tipos de margen:{" "}
              <strong className="text-[var(--text-primary)]">margen cruzado</strong> (cross), donde todo
              tu balance disponible respalda la posición, y{" "}
              <strong className="text-[var(--text-primary)]">margen aislado</strong> (isolated), donde solo
              arriesgas el margen asignado a esa operación. Para principiantes,
              el margen aislado es más seguro porque limita las pérdidas.
            </p>
          </section>

          <section id="long-vs-short">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              3. Posiciones Long vs Short
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              En el trading de futuros puedes abrir dos tipos de posiciones:
            </p>
            <ul className="space-y-3 text-[var(--text-secondary)] mb-4">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>
                  <strong className="text-[var(--text-primary)]">Long (compra):</strong> Abres una posición long cuando
                  crees que el precio va a subir. Ganas dinero si el precio sube y pierdes si baja.
                  Es equivalente a &quot;comprar barato para vender caro&quot;.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  <strong className="text-[var(--text-primary)]">Short (venta):</strong> Abres una posición short cuando
                  crees que el precio va a bajar. Ganas dinero si el precio baja y pierdes si sube.
                  Es como &quot;vender caro para recomprar barato&quot;.
                </span>
              </li>
            </ul>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Esta flexibilidad es la gran ventaja de los futuros frente al spot:
              puedes generar ganancias sin importar la dirección del mercado. En
              un bear market, los traders experimentados usan posiciones short
              para beneficiarse de las caídas de precio. En un bull market, las
              posiciones long permiten maximizar las ganancias con apalancamiento.
            </p>
          </section>

          <section id="liquidacion">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              4. ¿Qué es la liquidación?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              La <strong className="text-[var(--text-primary)]">liquidación</strong> ocurre cuando el mercado
              se mueve en contra de tu posición y tus pérdidas alcanzan el
              margen que depositaste. En ese momento, el exchange cierra tu
              posición automáticamente y pierdes todo el margen asignado.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Con un apalancamiento de 10x, una caída del 10% en el precio
              liquidaría tu posición long. Con 20x, solo se necesita un
              movimiento del 5%. Con 100x, un movimiento del 1% es suficiente
              para liquidarte. Por eso es crucial entender la relación entre
              apalancamiento y precio de liquidación antes de abrir cualquier
              operación.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Para evitar liquidaciones puedes usar varias estrategias: configurar
              un <strong className="text-[var(--text-primary)]">stop-loss</strong> para cerrar la posición
              antes de llegar al precio de liquidación, usar apalancamiento bajo,
              o añadir más margen a la posición si el mercado se mueve en tu
              contra. Todos los exchanges muestran el precio de liquidación
              estimado al abrir una posición.
            </p>
          </section>

          <section id="mejores-exchanges">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              5. Mejores Exchanges para Trading de Futuros
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              No todos los exchanges son iguales para trading de futuros. Estos
              son los que recomendamos por su liquidez, herramientas de trading
              y comisiones competitivas:
            </p>

            <div className="space-y-4">
              {[
                {
                  exchange: bybit,
                  why: "Mejor plataforma de futuros para principiantes",
                  verdict:
                    "Bybit es conocido por su interfaz intuitiva y su motor de trading rápido. Ofrece hasta 100x de apalancamiento en los principales pares, copy trading de futuros y una cuenta demo para practicar sin riesgo. Las comisiones de futuros son de 0.02% maker y 0.055% taker.",
                },
                {
                  exchange: binance,
                  why: "Mayor volumen y liquidez del mercado",
                  verdict:
                    "Binance Futures es el mercado de derivados más grande del mundo por volumen. Ofrece más de 300 pares de futuros, herramientas avanzadas de charting y comisiones desde 0.02% maker. Ideal para traders que necesitan la máxima liquidez.",
                },
                {
                  exchange: okx,
                  why: "Herramientas avanzadas y trading bot integrado",
                  verdict:
                    "OKX destaca por sus bots de trading automatizado para futuros, grid trading y DCA. Su plataforma es muy completa con hasta 125x de apalancamiento y spreads ajustados en los principales pares.",
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
                    label={`Operar futuros en ${exchange.name}`}
                    size="sm"
                  />
                </div>
              ))}
            </div>
          </section>

          <section id="gestion-riesgo">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              6. Gestión de Riesgo: Consejos para Principiantes
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              La gestión de riesgo es lo que separa a los traders exitosos de los
              que pierden todo su capital. Estos son los principios fundamentales
              que debes seguir desde el primer día:
            </p>
            <ul className="space-y-3 text-[var(--text-secondary)]">
              {[
                "Nunca arriesgues más del 1-2% de tu capital total en una sola operación. Esto te permite sobrevivir rachas perdedoras sin destruir tu cuenta.",
                "Siempre usa stop-loss. Antes de abrir una posición, define el punto exacto donde aceptarás la pérdida y configúralo automáticamente.",
                "Empieza con apalancamiento bajo (2x-5x). A medida que ganes experiencia y consistencia, puedes aumentarlo gradualmente.",
                "Practica primero en una cuenta demo. Bybit ofrece testnet con fondos virtuales para que aprendas sin arriesgar dinero real.",
                "No operes por venganza. Después de una pérdida, es tentador abrir una operación grande para recuperar. Esto casi siempre termina en más pérdidas.",
                "Lleva un diario de trading. Registra cada operación con el motivo de entrada, resultado y lecciones aprendidas. Revísalo semanalmente.",
                "Entiende la tasa de financiamiento (funding rate). En futuros perpetuos, pagas o recibes una comisión periódica por mantener tu posición abierta.",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span className="text-sm leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl border border-[var(--accent-primary)]/30 p-6 sm:p-8 mt-12 text-center"
          style={{ background: "var(--gradient-card)" }}
        >
          <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-2">
            ¿Listo para empezar con futuros?
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            Practica en la cuenta demo de Bybit y obtén hasta $30,000 USDT en bonos al registrarte
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
          No somos asesores financieros. El trading de futuros con apalancamiento
          implica un alto riesgo de pérdida. Invierte responsablemente.
        </p>
      </div>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Guía de Trading de Futuros Cripto para Principiantes 2026",
            description:
              "Aprende trading de futuros de criptomonedas desde cero. Apalancamiento, posiciones long y short, liquidación y gestión de riesgo.",
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
