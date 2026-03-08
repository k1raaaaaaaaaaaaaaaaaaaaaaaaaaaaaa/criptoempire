import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";
import AffiliateButton from "@/components/ui/AffiliateButton";
import { exchanges } from "@/data/exchanges";

export const metadata: Metadata = {
  title: "¿Qué es el Staking de Criptomonedas? Guía Completa 2026 | CriptoEmpire",
  description:
    "Aprende qué es el staking de criptomonedas, cómo funciona, tipos de staking (PoS, DPoS, Liquid Staking) y las mejores plataformas para hacer staking en 2026.",
  keywords:
    "staking criptomonedas, qué es staking, staking cripto, proof of stake, liquid staking, ganar intereses cripto",
  openGraph: {
    title: "¿Qué es el Staking de Criptomonedas? Guía Completa 2026",
    description:
      "Aprende qué es el staking, cómo funciona y las mejores plataformas para generar rendimientos pasivos.",
    type: "article",
    locale: "es_LA",
  },
};

const bybit = exchanges.find((e) => e.id === "bybit")!;
const binance = exchanges.find((e) => e.id === "binance")!;
const okx = exchanges.find((e) => e.id === "okx")!;
const kraken = exchanges.find((e) => e.id === "kraken")!;

export default function QueEsStakingCriptomonedas() {
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
            <Badge variant="blue">Educación</Badge>
            <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> 7 min de lectura
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" /> Marzo 2026
              </span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display leading-tight mb-4">
            ¿Qué es el Staking de Criptomonedas? Guía Completa
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            El staking es una de las formas más populares de generar ingresos
            pasivos con criptomonedas. En esta guía te explicamos cómo funciona,
            qué tipos existen y cómo empezar a hacer staking de forma segura.
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
            <li><a href="#que-es-staking" className="hover:underline">1. ¿Qué es el staking?</a></li>
            <li><a href="#como-funciona" className="hover:underline">2. ¿Cómo funciona el staking?</a></li>
            <li><a href="#tipos-staking" className="hover:underline">3. Tipos de staking</a></li>
            <li><a href="#mejores-plataformas" className="hover:underline">4. Mejores plataformas para staking</a></li>
            <li><a href="#riesgos" className="hover:underline">5. Riesgos del staking</a></li>
            <li><a href="#como-empezar" className="hover:underline">6. Cómo empezar a hacer staking</a></li>
          </ol>
        </nav>

        {/* Content */}
        <div className="prose-custom space-y-10">
          <section id="que-es-staking">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              1. ¿Qué es el Staking?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              El staking es el proceso de{" "}
              <strong className="text-[var(--text-primary)]">bloquear tus criptomonedas en una red
              blockchain</strong> para ayudar a validar transacciones y mantener
              la seguridad de la red. A cambio, recibes recompensas en forma de
              más criptomonedas — similar a ganar intereses en una cuenta de
              ahorro, pero generalmente con rendimientos mucho más altos.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              A diferencia de la minería de Bitcoin que requiere hardware
              especializado y consume grandes cantidades de energía, el staking
              es accesible para cualquier persona que posea las criptomonedas
              compatibles. Es una forma de participar activamente en la red y
              generar rendimientos pasivos al mismo tiempo.
            </p>
          </section>

          <section id="como-funciona">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              2. ¿Cómo Funciona el Staking?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              El staking funciona dentro de las blockchains que usan el
              mecanismo de consenso llamado{" "}
              <strong className="text-[var(--text-primary)]">Proof of Stake (PoS)</strong>. En este
              sistema, los validadores bloquean (ponen en &quot;stake&quot;) una
              cantidad de criptomonedas como garantía. La red selecciona
              validadores para crear nuevos bloques y verificar transacciones,
              y los recompensa por su trabajo.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Cuanto más criptomonedas pongas en staking, mayor es la
              probabilidad de que seas seleccionado como validador y, por lo
              tanto, mayores serán tus recompensas. Las tasas de rendimiento
              anual (APY) varían según la criptomoneda y la plataforma, pero
              generalmente oscilan entre el{" "}
              <strong className="text-[var(--text-primary)]">3% y el 20% anual</strong>.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Algunas de las criptomonedas más populares para staking incluyen
              Ethereum (ETH), Solana (SOL), Cardano (ADA), Polkadot (DOT),
              Cosmos (ATOM) y Avalanche (AVAX). Cada una tiene sus propias
              reglas de staking, períodos de bloqueo y tasas de rendimiento.
            </p>
          </section>

          <section id="tipos-staking">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              3. Tipos de Staking
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Existen varios tipos de staking, cada uno con sus propias
              características y requisitos:
            </p>

            <div className="space-y-4 mb-4">
              <div
                className="rounded-xl border border-[var(--border)] p-5"
                style={{ background: "var(--gradient-card)" }}
              >
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-display mb-2">
                  Proof of Stake (PoS)
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Es el mecanismo original de staking. Los validadores bloquean
                  sus tokens y son seleccionados aleatoriamente para validar
                  bloques. Ejemplos: Ethereum 2.0, Cardano. En Ethereum, se
                  requiere un mínimo de 32 ETH para ser validador independiente,
                  aunque existen pools que permiten participar con cantidades
                  menores.
                </p>
              </div>

              <div
                className="rounded-xl border border-[var(--border)] p-5"
                style={{ background: "var(--gradient-card)" }}
              >
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-display mb-2">
                  Delegated Proof of Stake (DPoS)
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Los holders votan para elegir a un grupo reducido de
                  validadores (delegados) que se encargan de producir bloques.
                  Los delegadores comparten las recompensas con sus votantes.
                  Ejemplos: Solana, Cosmos, Polkadot. Es más accesible porque
                  puedes delegar cualquier cantidad sin necesidad de operar un
                  nodo propio.
                </p>
              </div>

              <div
                className="rounded-xl border border-[var(--border)] p-5"
                style={{ background: "var(--gradient-card)" }}
              >
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-display mb-2">
                  Liquid Staking
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Es la innovación más reciente en staking. Al hacer staking,
                  recibes un token derivado (como stETH de Lido o rETH de Rocket
                  Pool) que representa tu posición stakeada. Este token se puede
                  usar en protocolos DeFi para generar rendimientos adicionales,
                  lo que elimina el problema de tener tu capital bloqueado e
                  improductivo.
                </p>
              </div>
            </div>
          </section>

          <section id="mejores-plataformas">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              4. Mejores Plataformas para Staking
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              La forma más sencilla de hacer staking es a través de un exchange
              centralizado. Estas plataformas se encargan de todo el proceso
              técnico y tú solo necesitas depositar tus criptomonedas:
            </p>

            <div className="space-y-4">
              {[
                {
                  exchange: bybit,
                  why: "Staking flexible y fijo con rendimientos competitivos",
                  verdict:
                    "Bybit ofrece staking de más de 100 criptomonedas con opciones flexibles (retiro en cualquier momento) y fijas (mayor rendimiento con período de bloqueo). También tiene Launchpool para ganar tokens nuevos haciendo staking.",
                },
                {
                  exchange: binance,
                  why: "Earn: la plataforma de rendimientos más completa",
                  verdict:
                    "Binance Earn ofrece staking bloqueado, flexible, ETH staking y productos DeFi. Es la plataforma con mayor variedad de opciones para generar rendimientos pasivos con criptomonedas.",
                },
                {
                  exchange: okx,
                  why: "Staking on-chain simplificado",
                  verdict:
                    "OKX permite hacer staking on-chain directamente desde su plataforma sin necesidad de gestionar wallets externas. Soporta staking de ETH, SOL, DOT, ATOM y muchos más con rendimientos transparentes.",
                },
                {
                  exchange: kraken,
                  why: "Staking transparente con historial comprobado",
                  verdict:
                    "Kraken ofrece staking para 20+ criptomonedas con rendimientos competitivos y un proceso simple. Es conocido por su seguridad y transparencia en la distribución de recompensas.",
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
                    label={`Hacer staking en ${exchange.name}`}
                    size="sm"
                  />
                </div>
              ))}
            </div>
          </section>

          <section id="riesgos">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              5. Riesgos del Staking
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Aunque el staking es menos arriesgado que el trading activo, no
              está exento de riesgos. Es importante conocerlos antes de
              comprometer tu capital:
            </p>
            <ul className="space-y-3 text-[var(--text-secondary)]">
              {[
                "Volatilidad del precio: Aunque ganas recompensas, el valor de la criptomoneda puede caer significativamente. Si el precio baja un 30% y ganaste un 10% en staking, sigues en pérdida neta.",
                "Período de desbloqueo: Algunas redes requieren un período de espera (unbonding) para retirar tus fondos. En Ethereum puede ser de días, en Polkadot hasta 28 días. Durante este tiempo no puedes vender.",
                "Slashing: Si el validador al que delegaste se comporta de manera maliciosa o tiene fallos técnicos, la red puede penalizar (slash) parte de los fondos en staking.",
                "Riesgo de la plataforma: Si usas un exchange centralizado para staking, dependes de la seguridad y solvencia de esa plataforma. El colapso de FTX demostró que este riesgo es real.",
                "Riesgo de smart contracts: En liquid staking y DeFi, los contratos inteligentes pueden tener vulnerabilidades que resulten en pérdida de fondos.",
              ].map((risk, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">!</span>
                  <span className="text-sm leading-relaxed">{risk}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="como-empezar">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              6. Cómo Empezar a Hacer Staking
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Comenzar con staking es más sencillo de lo que parece. Sigue estos
              pasos para empezar hoy mismo:
            </p>
            <ol className="space-y-3 mb-6">
              {[
                "Elige una criptomoneda para staking. Para principiantes, Ethereum (ETH) y Solana (SOL) son buenas opciones por su estabilidad y ecosistema maduro.",
                "Selecciona una plataforma. Si prefieres simplicidad, un exchange como Bybit o Binance es ideal. Si quieres más control, considera protocolos de liquid staking como Lido.",
                "Compra la criptomoneda si aún no la tienes. Puedes comprarla directamente en el exchange donde harás staking.",
                "Busca la sección de Staking o Earn en el exchange. Selecciona la criptomoneda y el tipo de staking (flexible o fijo).",
                "Confirma el depósito y empieza a ganar recompensas. La mayoría de plataformas distribuyen recompensas diariamente.",
                "Monitorea tus rendimientos periódicamente y ajusta tu estrategia según las condiciones del mercado.",
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
                <strong>Consejo:</strong> Empieza con staking flexible (sin
                período de bloqueo) para familiarizarte con el proceso. Una vez
                que estés cómodo, puedes probar el staking fijo para obtener
                mejores rendimientos.
              </p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl border border-[var(--accent-primary)]/30 p-6 sm:p-8 mt-12 text-center"
          style={{ background: "var(--gradient-card)" }}
        >
          <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-2">
            ¿Listo para hacer staking?
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            Regístrate en Bybit y empieza a generar rendimientos pasivos con tus criptomonedas
          </p>
          <AffiliateButton
            href={bybit.bonus.affiliateUrl}
            label="Empezar Staking en Bybit →"
            size="lg"
          />
          <p className="text-[10px] text-[var(--text-muted)] mt-3">
            Este sitio puede recibir compensación por referidos
          </p>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-[var(--text-muted)] text-center">
          No somos asesores financieros. Las criptomonedas son activos volátiles.
          El staking implica riesgos. Invierte responsablemente.
        </p>
      </div>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "¿Qué es el Staking de Criptomonedas? Guía Completa 2026",
            description:
              "Aprende qué es el staking de criptomonedas, cómo funciona, tipos de staking y las mejores plataformas para hacer staking.",
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
