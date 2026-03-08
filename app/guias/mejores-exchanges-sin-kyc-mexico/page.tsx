import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";
import AffiliateButton from "@/components/ui/AffiliateButton";
import { exchanges } from "@/data/exchanges";
import { formatPercent } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Los 5 Mejores Exchanges sin KYC en México (2025) | CriptoCompara",
  description:
    "Descubre los mejores exchanges de criptomonedas que puedes usar en México sin verificación de identidad (KYC) en 2025. MEXC, Bybit, KuCoin y más.",
  keywords:
    "exchange sin kyc méxico, comprar bitcoin sin verificación, exchange sin identidad, cripto sin kyc 2025",
  openGraph: {
    title: "Mejores Exchanges sin KYC en México 2025",
    description: "Los exchanges donde puedes operar sin enviar documentos.",
    type: "article",
    locale: "es_MX",
  },
};

export default function ExchangesSinKYCMexico() {
  return (
    <article className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/guias"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Todas las guías
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="green">Rankings</Badge>
            <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 6 min</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Marzo 2025</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display leading-tight mb-4">
            Los 5 Mejores Exchanges sin KYC en México
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            ¿Quieres operar criptomonedas en México sin enviar tu identificación?
            Estos exchanges te permiten hacer trading sin verificación de
            identidad completa.
          </p>
        </header>

        <div className="space-y-10">
          {/* Intro */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              ¿Qué es el KYC y por qué importa?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              KYC significa &quot;Know Your Customer&quot; (Conoce a tu Cliente). Es el proceso
              donde un exchange te pide verificar tu identidad enviando documentos
              como INE, pasaporte o comprobante de domicilio.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Algunos usuarios prefieren exchanges sin KYC por razones de:
            </p>
            <ul className="space-y-2 text-[var(--text-secondary)] mb-4">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span className="text-sm"><strong className="text-[var(--text-primary)]">Privacidad</strong> — no quieren compartir datos personales con empresas offshore.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span className="text-sm"><strong className="text-[var(--text-primary)]">Velocidad</strong> — quieren empezar a operar inmediatamente sin esperar verificación.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span className="text-sm"><strong className="text-[var(--text-primary)]">Accesibilidad</strong> — no tienen los documentos requeridos al alcance.</span>
              </li>
            </ul>
            <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4">
              <p className="text-sm text-amber-300">
                <strong>Nota importante:</strong> Los exchanges sin KYC generalmente
                tienen límites de retiro diario. Si necesitas mover grandes cantidades,
                eventualmente necesitarás verificar tu identidad.
              </p>
            </div>
          </section>

          {/* Rankings */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-6">
              Top 5 Exchanges sin KYC para México
            </h2>

            {[
              {
                rank: 1,
                exchange: exchanges.find((e) => e.id === "mexc")!,
                highlight: "Comisiones más bajas del mercado",
                detail:
                  "MEXC es nuestra primera opción por sus comisiones imbatibles: 0% maker en spot y futuros. No requiere KYC para operar, y tiene más de 1,500 criptomonedas disponibles. El límite de retiro sin KYC es de 10 BTC diarios — más que suficiente para la mayoría de traders.",
                withdrawLimit: "10 BTC/día",
              },
              {
                rank: 2,
                exchange: exchanges.find((e) => e.id === "bybit")!,
                highlight: "Mejor plataforma de futuros + bono $30,000",
                detail:
                  "Bybit permite trading completo (spot y futuros) sin KYC con un límite de retiro de 20,000 USDT diarios. La plataforma de futuros es una de las mejores del mercado y los bonos de bienvenida son los más generosos. Disponible completamente desde México.",
                withdrawLimit: "20,000 USDT/día",
              },
              {
                rank: 3,
                exchange: exchanges.find((e) => e.id === "kucoin")!,
                highlight: "Gran variedad de altcoins + bots de trading",
                detail:
                  "KuCoin es ideal para quienes buscan altcoins nuevos y herramientas de trading avanzadas. Sin KYC puedes hacer trading y retirar hasta 5 BTC diarios. Tiene bots de trading integrados y una interfaz amigable.",
                withdrawLimit: "5 BTC/día",
              },
              {
                rank: 4,
                exchange: exchanges.find((e) => e.id === "okx")!,
                highlight: "Wallet Web3 + KYC básico opcional",
                detail:
                  "OKX ofrece un KYC 'básico' que solo requiere datos personales (sin documentos). Con esto puedes acceder a la mayoría de funciones. Su wallet Web3 integrada es una de las mejores del mercado para DeFi.",
                withdrawLimit: "Variable con KYC básico",
              },
              {
                rank: 5,
                exchange: exchanges.find((e) => e.id === "gateio")!,
                highlight: "Más de 1,700 criptomonedas",
                detail:
                  "Gate.io ofrece la mayor variedad de criptomonedas de esta lista. Con KYC básico (solo datos personales) puedes acceder al trading y retiros limitados. Ideal para quienes buscan tokens recién listados.",
                withdrawLimit: "100,000 USDT/día con KYC básico",
              },
            ].map(({ rank, exchange, highlight, detail, withdrawLimit }) => (
              <div
                key={exchange.id}
                className={`rounded-2xl border p-6 mb-6 ${
                  rank === 1
                    ? "border-emerald-500/30 glow-green"
                    : "border-[var(--border)]"
                }`}
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-bold text-lg shrink-0">
                    #{rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] font-display">
                        {exchange.name}
                      </h3>
                      <span className="text-sm text-amber-400 font-semibold">
                        {exchange.rating.toFixed(1)} ★
                      </span>
                      {rank === 1 && <Badge variant="green">Mejor opción</Badge>}
                    </div>
                    <p className="text-sm text-[var(--accent-primary)] font-medium mt-1">
                      {highlight}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {detail}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                  <div className="rounded-lg bg-[var(--bg-primary)]/50 p-2">
                    <div className="text-xs text-[var(--text-muted)]">Spot</div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      {formatPercent(exchange.fees.spotTaker)}
                    </div>
                  </div>
                  <div className="rounded-lg bg-[var(--bg-primary)]/50 p-2">
                    <div className="text-xs text-[var(--text-muted)]">KYC</div>
                    <div className="text-sm font-semibold text-emerald-400">
                      {exchange.latam.kycRequired}
                    </div>
                  </div>
                  <div className="rounded-lg bg-[var(--bg-primary)]/50 p-2">
                    <div className="text-xs text-[var(--text-muted)]">Retiro s/KYC</div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      {withdrawLimit}
                    </div>
                  </div>
                </div>

                <AffiliateButton
                  href={exchange.bonus.affiliateUrl}
                  label={`Abrir Cuenta en ${exchange.name}`}
                  variant={rank === 1 ? "green" : "primary"}
                  size="sm"
                  className="w-full"
                />
              </div>
            ))}
          </section>

          {/* Tips */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-4">
              Consejos para Usar Exchanges sin KYC
            </h2>
            <ul className="space-y-3">
              {[
                "Usa siempre 2FA (Google Authenticator) aunque no hagas KYC — tu seguridad depende de ti.",
                "Ten en cuenta los límites de retiro. Si planeas mover grandes cantidades, el KYC puede ser necesario.",
                "Deposita por cripto (envía USDT desde otra wallet) para máxima privacidad. Comprar con tarjeta requiere datos personales.",
                "Los exchanges sin KYC son legales en México — no existe obligación de hacer KYC para el usuario.",
                "Guarda siempre un registro de tus operaciones por si necesitas declararlas ante el SAT.",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Conclusion */}
          <section>
            <div className="rounded-2xl border border-[var(--accent-primary)]/30 p-6 text-center" style={{ background: "var(--gradient-card)" }}>
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-2">
                Nuestra Recomendación
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Para usuarios en México que quieren operar sin KYC, MEXC ofrece
                las mejores comisiones y Bybit los mejores bonos. Ambos son
                excelentes opciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <AffiliateButton
                  href={exchanges.find((e) => e.id === "mexc")!.bonus.affiliateUrl}
                  label="Abrir MEXC →"
                  variant="green"
                />
                <AffiliateButton
                  href={exchanges.find((e) => e.id === "bybit")!.bonus.affiliateUrl}
                  label="Abrir Bybit →"
                />
              </div>
              <p className="text-[10px] text-[var(--text-muted)] mt-3">
                Este sitio puede recibir compensación por referidos
              </p>
            </div>
          </section>
        </div>

        <p className="mt-8 text-xs text-[var(--text-muted)] text-center">
          No somos asesores financieros. Invierte responsablemente.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Los 5 Mejores Exchanges sin KYC en México (2025)",
            description: "Descubre los exchanges que puedes usar sin verificación de identidad en México.",
            datePublished: "2025-03-01",
            dateModified: "2025-03-08",
            author: { "@type": "Organization", name: "CriptoCompara" },
            publisher: { "@type": "Organization", name: "CriptoCompara" },
          }),
        }}
      />
    </article>
  );
}
