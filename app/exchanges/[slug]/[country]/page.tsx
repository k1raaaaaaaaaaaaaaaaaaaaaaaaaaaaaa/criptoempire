import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getExchangeBySlug } from "@/data/exchanges";
import ExchangeLogo from "@/components/ui/ExchangeLogo";
import AffiliateButton from "@/components/ui/AffiliateButton";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";
import { formatPercent } from "@/lib/utils";

// ── Country data ──────────────────────────────────────────────────────────────

interface CountryInfo {
  name: string;
  currencyCode: string;
  currencyName: string;
  flag: string;
  paymentMethods: string[];
  regulation: string;
  taxAuthority: string;
}

const COUNTRIES: Record<string, CountryInfo> = {
  argentina: {
    name: "Argentina",
    currencyCode: "ARS",
    currencyName: "Peso argentino",
    flag: "\uD83C\uDDE6\uD83C\uDDF7",
    paymentMethods: ["Mercado Pago", "CBU/CVU", "P2P ARS"],
    regulation:
      "En Argentina no existe una prohibici\u00f3n expl\u00edcita sobre las criptomonedas. La AFIP (Administraci\u00f3n Federal de Ingresos P\u00fablicos) exige que los contribuyentes declaren sus tenencias de cripto como parte de su patrimonio y tributen las ganancias obtenidas por compraventa de activos digitales. Desde 2023 se han intensificado los controles, por lo que es recomendable mantener un registro detallado de todas las operaciones.",
    taxAuthority: "AFIP",
  },
  mexico: {
    name: "M\u00e9xico",
    currencyCode: "MXN",
    currencyName: "Peso mexicano",
    flag: "\uD83C\uDDF2\uD83C\uDDFD",
    paymentMethods: ["SPEI", "OXXO Pay", "P2P MXN"],
    regulation:
      "M\u00e9xico cuenta con la Ley Fintech desde 2018, que regula las Instituciones de Tecnolog\u00eda Financiera. Aunque los exchanges internacionales no est\u00e1n directamente regulados por esta ley, el SAT (Servicio de Administraci\u00f3n Tributaria) requiere que los ciudadanos mexicanos declaren las ganancias derivadas de la compraventa de criptomonedas como ingresos gravables.",
    taxAuthority: "SAT",
  },
  colombia: {
    name: "Colombia",
    currencyCode: "COP",
    currencyName: "Peso colombiano",
    flag: "\uD83C\uDDE8\uD83C\uDDF4",
    paymentMethods: ["PSE", "Nequi", "Daviplata", "P2P COP"],
    regulation:
      "En Colombia las criptomonedas no est\u00e1n prohibidas, aunque tampoco cuentan con un marco regulatorio espec\u00edfico. La DIAN (Direcci\u00f3n de Impuestos y Aduanas Nacionales) considera que las ganancias obtenidas por operaciones con criptoactivos deben ser declaradas como parte de la renta gravable. El Banco de la Rep\u00fablica ha emitido comunicados advirtiendo sobre los riesgos, pero no ha restringido su uso.",
    taxAuthority: "DIAN",
  },
  peru: {
    name: "Per\u00fa",
    currencyCode: "PEN",
    currencyName: "Sol peruano",
    flag: "\uD83C\uDDF5\uD83C\uDDE8",
    paymentMethods: ["Yape", "Plin", "BCP Transfer", "P2P PEN"],
    regulation:
      "Per\u00fa no cuenta con una regulaci\u00f3n espec\u00edfica para criptomonedas. La SUNAT (Superintendencia Nacional de Aduanas y de Administraci\u00f3n Tributaria) no ha emitido directrices claras sobre la tributaci\u00f3n de activos digitales, aunque las ganancias de capital generalmente est\u00e1n sujetas al impuesto a la renta. Se recomienda consultar con un contador para determinar las obligaciones fiscales individuales.",
    taxAuthority: "SUNAT",
  },
  chile: {
    name: "Chile",
    currencyCode: "CLP",
    currencyName: "Peso chileno",
    flag: "\uD83C\uDDE8\uD83C\uDDF1",
    paymentMethods: ["MACH/Tenpo", "Transferencia bancaria", "P2P CLP"],
    regulation:
      "Chile aprob\u00f3 su Ley Fintech en 2023, estableciendo un marco regulatorio para las plataformas de activos digitales. El SII (Servicio de Impuestos Internos) exige a los contribuyentes declarar las ganancias obtenidas por la compraventa de criptomonedas. Chile es uno de los pa\u00edses m\u00e1s avanzados de Latinoam\u00e9rica en cuanto a regulaci\u00f3n cripto.",
    taxAuthority: "SII",
  },
};

const EXCHANGE_SLUGS = ["bybit", "binance", "mexc", "okx", "kucoin", "bitget"];
const COUNTRY_SLUGS = ["argentina", "mexico", "colombia", "peru", "chile"];

// ── Static params (30 combinations) ──────────────────────────────────────────

export function generateStaticParams() {
  const params: { slug: string; country: string }[] = [];
  for (const slug of EXCHANGE_SLUGS) {
    for (const country of COUNTRY_SLUGS) {
      params.push({ slug, country });
    }
  }
  return params;
}

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string; country: string };
}): Promise<Metadata> {
  const exchange = getExchangeBySlug(params.slug);
  const country = COUNTRIES[params.country];

  if (!exchange || !country) {
    return { title: "P\u00e1gina no encontrada" };
  }

  return {
    title: `${exchange.name} en ${country.name} 2026: Comisiones, Bonos y C\u00f3mo Registrarse | CriptoEmpire`,
    description: `Gu\u00eda completa para usar ${exchange.name} en ${country.name}. Descubre c\u00f3mo comprar cripto con ${country.currencyName} (${country.currencyCode}), m\u00e9todos de pago locales como ${country.paymentMethods[0]}, comisiones desde ${formatPercent(exchange.fees.spotMaker)} y un bono de ${exchange.bonus.amount}. Todo lo que necesitas saber en 2026.`,
    openGraph: {
      title: `${exchange.name} en ${country.name}: Gu\u00eda Completa 2026`,
      description: `Aprende a usar ${exchange.name} desde ${country.name} con ${country.currencyName}. Comisiones, regulaci\u00f3n, m\u00e9todos de pago y bonos.`,
      type: "article",
      locale: "es_AR",
    },
  };
}

// ── Page component ───────────────────────────────────────────────────────────

export default function ExchangeCountryPage({
  params,
}: {
  params: { slug: string; country: string };
}) {
  const exchange = getExchangeBySlug(params.slug);
  const country = COUNTRIES[params.country];

  if (!exchange || !country) notFound();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="border-b border-[var(--border)]"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted)] mb-8">
            <Link
              href="/exchanges"
              className="hover:text-[var(--text-secondary)] transition-colors"
            >
              Exchanges
            </Link>
            <span>/</span>
            <Link
              href={`/exchanges/${exchange.slug}`}
              className="hover:text-[var(--text-secondary)] transition-colors"
            >
              {exchange.name}
            </Link>
            <span>/</span>
            <span className="text-[var(--text-secondary)]">
              {country.flag} {country.name}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <ExchangeLogo exchangeId={exchange.id} size={56} />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display">
                  {exchange.name} en {country.name}: Gu&iacute;a Completa 2026
                </h1>
                {exchange.badge && (
                  <Badge
                    variant={
                      exchange.badge === "popular"
                        ? "blue"
                        : exchange.badge === "lowest-fees"
                        ? "green"
                        : "amber"
                    }
                  >
                    {exchange.badge === "popular" && "\u26A1 M\u00e1s popular"}
                    {exchange.badge === "lowest-fees" &&
                      "\uD83D\uDCB0 Mejores comisiones"}
                    {exchange.badge === "best-liquidity" &&
                      "\uD83D\uDD25 Mayor liquidez"}
                    {exchange.badge === "best-beginners" &&
                      "\uD83C\uDF93 Principiantes"}
                  </Badge>
                )}
              </div>
              <StarRating rating={exchange.rating} size={18} />
              <p className="text-[var(--text-secondary)] mt-3 max-w-3xl leading-relaxed">
                {exchange.name} es una de las plataformas de intercambio de
                criptomonedas m&aacute;s utilizadas por los usuarios de{" "}
                {country.name}. Si est&aacute;s buscando comprar Bitcoin,
                Ethereum u otras criptomonedas con {country.currencyName} (
                {country.currencyCode}), esta gu&iacute;a te mostrar&aacute;
                todo lo que necesitas saber: desde c&oacute;mo registrarte y
                verificar tu cuenta, hasta los m&eacute;todos de pago locales
                disponibles, las comisiones que cobra la plataforma y el bono de
                bienvenida que puedes obtener al abrir tu cuenta en 2026. Con
                sede en {exchange.headquartersCountry} y fundada en{" "}
                {exchange.founded}, {exchange.name} ha crecido
                significativamente en la regi&oacute;n latinoamericana gracias a
                su soporte en espa&ntilde;ol, m&eacute;todos de pago accesibles
                y una amplia variedad de criptomonedas disponibles para operar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-10">
            {/* ── M\u00e9todos de Pago Locales ── */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-4">
                M&eacute;todos de Pago Locales en {country.name}
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Una de las mayores ventajas de usar {exchange.name} en{" "}
                {country.name} es la disponibilidad de m&eacute;todos de pago
                locales que te permiten depositar y retirar fondos en{" "}
                {country.currencyName} ({country.currencyCode}) sin necesidad de
                utilizar intermediarios internacionales. Esto reduce los costos
                de conversi&oacute;n y agiliza las operaciones, permiti&eacute;ndote
                comprar criptomonedas directamente desde tu banco o billetera
                digital favorita.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {country.paymentMethods.map((method) => (
                  <div
                    key={method}
                    className="flex items-center gap-3 rounded-xl bg-[var(--accent-primary)]/5 border border-[var(--accent-primary)]/10 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-bold text-lg">
                      {country.flag}
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--text-primary)] text-sm">
                        {method}
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        Disponible en {exchange.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--text-muted)] mt-4 leading-relaxed">
                Estos m&eacute;todos de pago est&aacute;n disponibles
                principalmente a trav&eacute;s del mercado P2P (peer-to-peer) de{" "}
                {exchange.name}, donde puedes negociar directamente con otros
                usuarios de {country.name}. Los tiempos de procesamiento
                var&iacute;an seg&uacute;n el m&eacute;todo elegido, pero
                generalmente las transacciones se completan en menos de 30
                minutos.
              </p>
            </div>

            {/* ── Comisiones ── */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-4">
                Comisiones de {exchange.name} para Usuarios de {country.name}
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Las comisiones son un factor clave al elegir un exchange de
                criptomonedas. {exchange.name} ofrece una estructura de
                comisiones competitiva que beneficia tanto a makers (quienes
                a&ntilde;aden liquidez al libro de &oacute;rdenes) como a takers
                (quienes toman liquidez existente). A continuaci&oacute;n te
                mostramos las comisiones vigentes para usuarios de{" "}
                {country.name}:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="py-3 px-4 text-left text-[var(--text-muted)] font-medium">
                        Tipo
                      </th>
                      <th className="py-3 px-4 text-center text-[var(--text-muted)] font-medium">
                        Maker
                      </th>
                      <th className="py-3 px-4 text-center text-[var(--text-muted)] font-medium">
                        Taker
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 px-4 text-[var(--text-primary)] font-medium">
                        Spot
                      </td>
                      <td className="py-3 px-4 text-center text-emerald-400 font-semibold">
                        {formatPercent(exchange.fees.spotMaker)}
                      </td>
                      <td className="py-3 px-4 text-center text-amber-400 font-semibold">
                        {formatPercent(exchange.fees.spotTaker)}
                      </td>
                    </tr>
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 px-4 text-[var(--text-primary)] font-medium">
                        Futuros
                      </td>
                      <td className="py-3 px-4 text-center text-emerald-400 font-semibold">
                        {exchange.features.futures
                          ? formatPercent(exchange.fees.futuresMaker)
                          : "N/A"}
                      </td>
                      <td className="py-3 px-4 text-center text-amber-400 font-semibold">
                        {exchange.features.futures
                          ? formatPercent(exchange.fees.futuresTaker)
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-[var(--text-primary)] font-medium">
                        Retiro
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 px-4 text-center text-[var(--text-secondary)]"
                      >
                        {exchange.fees.withdrawal}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[var(--text-muted)] mt-4">
                Las comisiones pueden reducirse al aumentar tu volumen de trading
                mensual o al mantener tokens nativos de la plataforma. Las
                operaciones P2P en {country.currencyCode} generalmente no tienen
                comisi&oacute;n adicional para el comprador.
              </p>
            </div>

            {/* ── C\u00f3mo Registrarse ── */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-4">
                &iquest;C&oacute;mo Registrarse en {exchange.name} desde{" "}
                {country.name}?
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Abrir una cuenta en {exchange.name} desde {country.name} es un
                proceso sencillo que puedes completar en pocos minutos. Sigue
                estos cinco pasos para empezar a operar con criptomonedas usando{" "}
                {country.currencyName}:
              </p>
              <ol className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Accede al sitio oficial",
                    desc: `Haz clic en nuestro enlace exclusivo para ${country.name} y accede a ${exchange.name}. Al registrarte a trav\u00e9s de nuestro enlace, el bono de bienvenida de ${exchange.bonus.amount} se aplicar\u00e1 autom\u00e1ticamente a tu nueva cuenta.`,
                  },
                  {
                    step: 2,
                    title: "Crea tu cuenta con tu correo",
                    desc: `Ingresa tu correo electr\u00f3nico y establece una contrase\u00f1a segura. Tambi\u00e9n puedes registrarte con tu cuenta de Google o Apple para mayor comodidad. Aseg\u00farate de usar un correo al que tengas acceso permanente.`,
                  },
                  {
                    step: 3,
                    title:
                      exchange.latam.kycRequired === "Completo"
                        ? `Completa la verificaci\u00f3n KYC con tu documento de ${country.name}`
                        : `Verificaci\u00f3n de identidad (${exchange.latam.kycRequired === "No" ? "opcional" : "b\u00e1sica"})`,
                    desc:
                      exchange.latam.kycRequired === "Completo"
                        ? `${exchange.name} requiere verificaci\u00f3n completa de identidad. Sube tu c\u00e9dula de identidad o pasaporte emitido en ${country.name} y toma una selfie. El proceso de aprobaci\u00f3n generalmente toma entre 5 y 30 minutos.`
                        : exchange.latam.kycRequired === "No"
                          ? `${exchange.name} no requiere KYC obligatorio para funciones b\u00e1sicas. Puedes empezar a operar inmediatamente. Sin embargo, completar la verificaci\u00f3n con tu documento de ${country.name} desbloquea l\u00edmites de retiro m\u00e1s altos y acceso a funciones avanzadas.`
                          : `${exchange.name} solicita una verificaci\u00f3n b\u00e1sica de identidad. Sube tu documento de identidad de ${country.name} para desbloquear todas las funcionalidades. El proceso es r\u00e1pido y generalmente se completa en minutos.`,
                  },
                  {
                    step: 4,
                    title: `Deposita fondos en ${country.currencyCode}`,
                    desc: `Utiliza los m\u00e9todos de pago locales disponibles en ${country.name} como ${country.paymentMethods.join(", ")} para depositar ${country.currencyName} y comprar criptomonedas directamente. Tambi\u00e9n puedes depositar cripto desde otra wallet.`,
                  },
                  {
                    step: 5,
                    title: "\u00a1Empieza a operar con criptomonedas!",
                    desc: `Tu cuenta est\u00e1 lista. Ahora puedes comprar Bitcoin, Ethereum y cientos de criptomonedas m\u00e1s en ${exchange.name}. Explora los mercados spot${exchange.features.futures ? ", futuros" : ""}${exchange.features.staking ? " y staking" : ""} disponibles en la plataforma.`,
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* ── Regulaci\u00f3n ── */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-4">
                Regulaci&oacute;n de Criptomonedas en {country.name}
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                {country.regulation}
              </p>
              <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4">
                <p className="text-sm text-amber-200 leading-relaxed">
                  <strong>Nota fiscal:</strong> Si operas con criptomonedas
                  desde {country.name}, te recomendamos consultar con un
                  contador o asesor fiscal familiarizado con{" "}
                  {country.taxAuthority} para cumplir correctamente con tus
                  obligaciones tributarias. Mant&eacute;n un registro de todas
                  tus operaciones en {exchange.name}, incluyendo fechas, montos
                  en {country.currencyCode} y las criptomonedas involucradas.
                </p>
              </div>
            </div>

            {/* ── Bono de Bienvenida ── */}
            <div
              className="rounded-2xl border border-[var(--accent-primary)]/30 p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-4">
                Bono de Bienvenida de {exchange.name} para {country.name}
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {exchange.name} ofrece un generoso bono de bienvenida para
                nuevos usuarios de {country.name} que se registren a
                trav&eacute;s de nuestro enlace exclusivo. Este bono es una
                excelente oportunidad para empezar a operar con criptomonedas
                con un capital adicional respaldado por la plataforma. Los bonos
                se acreditan al cumplir ciertos requisitos de registro y
                dep&oacute;sito.
              </p>
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-6 mb-6 text-center">
                <div className="text-xs text-emerald-400 mb-1 uppercase tracking-wider">
                  Bono exclusivo para {country.name}
                </div>
                <div className="text-3xl font-bold text-emerald-300 font-display">
                  {exchange.bonus.amount}
                </div>
                <div className="text-sm text-[var(--text-muted)] mt-1">
                  {exchange.bonus.type}
                </div>
                {exchange.bonus.promoCode && (
                  <div className="mt-3 inline-block rounded-lg bg-[var(--bg-primary)] px-4 py-2 text-sm">
                    <span className="text-[var(--text-muted)]">
                      C&oacute;digo:{" "}
                    </span>
                    <span className="font-mono font-bold text-[var(--accent-primary)]">
                      {exchange.bonus.promoCode}
                    </span>
                  </div>
                )}
              </div>
              <AffiliateButton
                href={exchange.bonus.affiliateUrl}
                label={`Obtener Bono en ${exchange.name} \u2192`}
                variant="primary"
                size="lg"
                className="w-full"
              />
              <p className="text-[10px] text-[var(--text-muted)] text-center mt-3">
                Este sitio puede recibir compensaci&oacute;n por referidos.
                T&eacute;rminos y condiciones aplican.
              </p>
            </div>

            {/* ── FAQ ── */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-6">
                Preguntas Frecuentes: {exchange.name} en {country.name}
              </h2>
              <div className="space-y-3">
                <details className="group rounded-xl border border-[var(--border)] overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between p-4 text-[var(--text-primary)] font-semibold text-sm hover:bg-[var(--bg-hover)] transition-colors">
                    &iquest;Es legal usar {exchange.name} en {country.name}?
                    <span className="ml-2 text-[var(--text-muted)] group-open:rotate-180 transition-transform">
                      &#9660;
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                    S&iacute;, es completamente legal utilizar {exchange.name} en{" "}
                    {country.name}. Las criptomonedas no est&aacute;n prohibidas
                    en el pa&iacute;s, aunque es importante cumplir con las
                    obligaciones fiscales establecidas por{" "}
                    {country.taxAuthority}. {exchange.name} opera
                    internacionalmente y acepta usuarios de {country.name} sin
                    restricciones. Recuerda declarar tus ganancias de capital
                    derivadas del trading de criptomonedas seg&uacute;n la
                    normativa local vigente.
                  </div>
                </details>

                <details className="group rounded-xl border border-[var(--border)] overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between p-4 text-[var(--text-primary)] font-semibold text-sm hover:bg-[var(--bg-hover)] transition-colors">
                    &iquest;Puedo depositar {country.currencyCode} en{" "}
                    {exchange.name}?
                    <span className="ml-2 text-[var(--text-muted)] group-open:rotate-180 transition-transform">
                      &#9660;
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                    S&iacute;, puedes depositar {country.currencyName} (
                    {country.currencyCode}) en {exchange.name} a trav&eacute;s
                    de varios m&eacute;todos de pago locales, incluyendo{" "}
                    {country.paymentMethods.join(", ")}. La mayor&iacute;a de
                    estas opciones est&aacute;n disponibles en la secci&oacute;n
                    P2P de la plataforma, donde puedes comprar USDT u otras
                    criptomonedas directamente con {country.currencyCode} a
                    otros usuarios verificados. Los tiempos de
                    acreditaci&oacute;n suelen ser de 5 a 30 minutos dependiendo
                    del m&eacute;todo seleccionado.
                  </div>
                </details>

                <details className="group rounded-xl border border-[var(--border)] overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between p-4 text-[var(--text-primary)] font-semibold text-sm hover:bg-[var(--bg-hover)] transition-colors">
                    &iquest;Cu&aacute;nto cobra {exchange.name} de
                    comisi&oacute;n para usuarios de {country.name}?
                    <span className="ml-2 text-[var(--text-muted)] group-open:rotate-180 transition-transform">
                      &#9660;
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                    Las comisiones de {exchange.name} son las mismas para todos
                    los usuarios independientemente de su pa&iacute;s. En
                    trading spot, la comisi&oacute;n de maker es{" "}
                    {formatPercent(exchange.fees.spotMaker)} y la de taker es{" "}
                    {formatPercent(exchange.fees.spotTaker)}.
                    {exchange.features.futures &&
                      ` En futuros, el maker paga ${formatPercent(exchange.fees.futuresMaker)} y el taker ${formatPercent(exchange.fees.futuresTaker)}.`}{" "}
                    Las operaciones P2P en {country.currencyCode} generalmente
                    no tienen comisi&oacute;n para el comprador. Estos costos
                    pueden reducirse con mayor volumen de trading o programas de
                    fidelidad de la plataforma.
                  </div>
                </details>
              </div>
            </div>

            {/* ── Internal Links ── */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href={`/exchanges/${exchange.slug}`}
                className="flex items-center gap-4 rounded-2xl border border-[var(--border)] p-5 hover:border-[var(--accent-primary)]/30 hover:bg-[var(--bg-hover)] transition-all"
                style={{ background: "var(--gradient-card)" }}
              >
                <ExchangeLogo exchangeId={exchange.id} size={32} />
                <div>
                  <div className="font-semibold text-[var(--text-primary)] text-sm">
                    {exchange.name}: Review Completa
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Comisiones, seguridad y opini&oacute;n detallada
                  </div>
                </div>
              </Link>
              <Link
                href={`/paises/${params.country}`}
                className="flex items-center gap-4 rounded-2xl border border-[var(--border)] p-5 hover:border-[var(--accent-primary)]/30 hover:bg-[var(--bg-hover)] transition-all"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="flex h-8 w-8 items-center justify-center text-2xl">
                  {country.flag}
                </div>
                <div>
                  <div className="font-semibold text-[var(--text-primary)] text-sm">
                    Mejores Exchanges en {country.name}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Comparativa completa para {country.name} 2026
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* CTA Card */}
              <div
                className="rounded-2xl border border-[var(--accent-primary)]/30 p-6"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="text-center mb-4">
                  <div className="mx-auto mb-3">
                    <ExchangeLogo exchangeId={exchange.id} size={40} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-display">
                    Abrir cuenta en {exchange.name}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    Disponible en {country.name} {country.flag}
                  </p>
                  <StarRating rating={exchange.rating} size={14} />
                </div>

                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 mb-4 text-center">
                  <div className="text-xs text-emerald-400 mb-1">
                    Bono de bienvenida
                  </div>
                  <div className="text-xl font-bold text-emerald-300">
                    {exchange.bonus.amount}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">
                    {exchange.bonus.type}
                  </div>
                </div>

                <AffiliateButton
                  href={exchange.bonus.affiliateUrl}
                  label={`Abrir Cuenta en ${exchange.name}`}
                  variant="primary"
                  size="lg"
                  className="w-full"
                />

                <p className="text-[10px] text-[var(--text-muted)] text-center mt-3">
                  Este sitio puede recibir compensaci&oacute;n por referidos
                </p>
              </div>

              {/* Quick Info */}
              <div
                className="rounded-2xl border border-[var(--border)] p-6"
                style={{ background: "var(--gradient-card)" }}
              >
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
                  Info R&aacute;pida
                </h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">Exchange</dt>
                    <dd className="text-[var(--text-primary)] font-medium">
                      {exchange.name}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">Pa&iacute;s</dt>
                    <dd className="text-[var(--text-primary)] font-medium">
                      {country.flag} {country.name}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">Moneda local</dt>
                    <dd className="text-[var(--text-primary)] font-medium">
                      {country.currencyCode}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">KYC</dt>
                    <dd className="text-[var(--text-primary)] font-medium">
                      {exchange.latam.kycRequired}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">Aut. fiscal</dt>
                    <dd className="text-[var(--text-primary)] font-medium">
                      {country.taxAuthority}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">Spot Maker</dt>
                    <dd className="text-emerald-400 font-medium">
                      {formatPercent(exchange.fees.spotMaker)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">Spot Taker</dt>
                    <dd className="text-amber-400 font-medium">
                      {formatPercent(exchange.fees.spotTaker)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[var(--text-muted)] mb-1">
                      Pagos locales
                    </dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {country.paymentMethods.map((p) => (
                        <span
                          key={p}
                          className="rounded-md bg-[var(--bg-primary)] px-2 py-0.5 text-xs text-[var(--text-secondary)]"
                        >
                          {p}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Other Countries */}
              <div
                className="rounded-2xl border border-[var(--border)] p-6"
                style={{ background: "var(--gradient-card)" }}
              >
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
                  {exchange.name} en otros pa&iacute;ses
                </h3>
                <div className="space-y-2">
                  {COUNTRY_SLUGS.filter((c) => c !== params.country).map(
                    (countrySlug) => {
                      const otherCountry = COUNTRIES[countrySlug];
                      return (
                        <Link
                          key={countrySlug}
                          href={`/exchanges/${exchange.slug}/${countrySlug}`}
                          className="flex items-center gap-3 rounded-lg p-2.5 text-sm hover:bg-[var(--bg-hover)] transition-colors"
                        >
                          <span className="text-lg">{otherCountry.flag}</span>
                          <span className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                            {exchange.name} en {otherCountry.name}
                          </span>
                        </Link>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-xl border border-[var(--border)] p-4 text-center">
          <p className="text-xs text-[var(--text-muted)]">
            No somos asesores financieros. La informaci&oacute;n sobre
            regulaci&oacute;n y fiscalidad en {country.name} es orientativa
            &mdash; consulta siempre con un profesional. Las comisiones pueden
            variar, verifica en el sitio oficial de {exchange.name}. Invierte
            responsablemente.
          </p>
        </div>
      </div>
    </div>
  );
}
