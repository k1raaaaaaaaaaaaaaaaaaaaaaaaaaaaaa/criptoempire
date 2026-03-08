import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, X as XIcon, Globe, Shield } from "lucide-react";
import {
  ExchangeRU,
  getExchangeRUBySlug,
  exchangesRU,
} from "@/data/exchanges-ru";
import { AFFILIATE_LINKS_RU, ExchangeIdRU } from "@/config/affiliates-ru";
import ExchangeLogo from "@/components/ui/ExchangeLogo";
import VpnBadge from "@/components/ru/VpnBadge";
import PaymentMethodsRU from "@/components/ru/PaymentMethodsRU";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";

/* ---------- Static generation ---------- */

export function generateStaticParams() {
  return [
    { slug: "bybit" },
    { slug: "mexc" },
    { slug: "okx" },
    { slug: "bitget" },
    { slug: "gateio" },
    { slug: "kucoin" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const exchange = getExchangeRUBySlug(params.slug);
  if (!exchange)
    return { title: "Биржа не найдена | КриптоЭмпайр" };

  return {
    title: `${exchange.name} — Обзор 2026, комиссии, бонусы и работа в России | КриптоЭмпайр`,
    description: `Подробный обзор ${exchange.name}: комиссии от ${(exchange.fees.spotMaker * 100).toFixed(2)}%, бонус ${exchange.bonus.amount}. ${exchange.cis.vpnRequired ? "Нужен VPN из России." : "Работает в России."} Рейтинг ${exchange.rating}/5.`,
    openGraph: {
      title: `${exchange.name} — Полный обзор 2026`,
      description: exchange.description,
      type: "article",
      locale: "ru_RU",
    },
  };
}

/* ---------- Helpers ---------- */

const vpnStatusText: Record<string, string> = {
  yes: "работает без VPN и без ограничений",
  partial:
    "работает частично — некоторые функции могут быть ограничены, но VPN не требуется",
  vpn: "требует VPN для доступа из России. В Казахстане и других странах СНГ работает свободно",
  blocked: "заблокирована на территории РФ",
};

const badgeConfigRU: Record<
  string,
  { label: string; variant: "blue" | "green" | "amber" | "purple" }
> = {
  popular: { label: "Популярная", variant: "blue" },
  "lowest-fees": { label: "Низкие комиссии", variant: "green" },
  "best-liquidity": { label: "Лучшая ликвидность", variant: "amber" },
  "best-beginners": { label: "Для новичков", variant: "purple" },
  "no-kyc": { label: "Без KYC", variant: "purple" },
};

const scoreLabels: Record<string, string> = {
  security: "Безопасность",
  fees: "Комиссии",
  liquidity: "Ликвидность",
  ux: "Удобство",
  cisSupport: "Поддержка СНГ",
};

function formatPercent(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}

/* ---------- FAQ data per exchange ---------- */

function getFAQ(exchange: ExchangeRU) {
  const name = exchange.name;
  return [
    {
      q: `Работает ли ${name} в России в 2026 году?`,
      a:
        exchange.cis.worksInRussia === "yes"
          ? `Да, ${name} полностью работает в России без VPN. Вы можете зарегистрироваться, верифицировать аккаунт и торговать без каких-либо ограничений. Биржа поддерживает русский язык интерфейса и способы ввода/вывода в рублях.`
          : exchange.cis.worksInRussia === "partial"
          ? `${name} частично работает в России. Регистрация и базовый трейдинг доступны без VPN, однако некоторые функции могут быть ограничены. Для полного доступа рекомендуется использовать VPN-соединение.`
          : exchange.cis.worksInRussia === "vpn"
          ? `Для доступа к ${name} из России в 2026 году необходим VPN. Биржа ограничила прямой доступ для российских IP-адресов, но через VPN всё работает стабильно. В Казахстане, Беларуси и Украине VPN не нужен.`
          : `К сожалению, ${name} заблокирована в России. Рекомендуем рассмотреть альтернативные биржи из нашего рейтинга, которые работают без VPN.`,
    },
    {
      q: `Какие комиссии у ${name}?`,
      a: `Комиссии ${name} на споте: ${formatPercent(exchange.fees.spotMaker)} для мейкеров и ${formatPercent(exchange.fees.spotTaker)} для тейкеров. На фьючерсах: ${formatPercent(exchange.fees.futuresMaker)} мейкер и ${formatPercent(exchange.fees.futuresTaker)} тейкер. Комиссии за вывод зависят от выбранной сети — рекомендуем использовать TRC-20 или сети второго уровня для минимальных затрат.`,
    },
    {
      q: `Как ввести рубли на ${name}?`,
      a:
        exchange.cis.p2pAvailable
          ? `На ${name} можно ввести рубли через P2P-торговлю — это самый популярный способ для российских пользователей. Доступные методы оплаты: ${exchange.cis.rubMethods.join(", ")}. P2P позволяет покупать USDT и другие криптовалюты напрямую у других пользователей с минимальной комиссией.`
          : `${name} не имеет встроенного P2P-маркетплейса. Вы можете ввести рубли через ${exchange.cis.rubMethods.join(", ")}. Альтернативный вариант — купить USDT на другой бирже с P2P и перевести на ${name}.`,
    },
  ];
}

/* ---------- Comparison slugs ---------- */

function getComparisonSlugs(currentSlug: string): string[] {
  const pairs: string[] = [];
  const others = exchangesRU
    .filter((e) => e.slug !== currentSlug)
    .slice(0, 3);
  for (const other of others) {
    const sorted = [currentSlug, other.slug].sort();
    pairs.push(`${sorted[0]}-vs-${sorted[1]}`);
  }
  return pairs;
}

/* ========== PAGE COMPONENT ========== */

export default function ExchangeRUDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const exchange = getExchangeRUBySlug(params.slug);
  if (!exchange) notFound();

  const affiliateUrl = AFFILIATE_LINKS_RU[exchange.id as ExchangeIdRU];
  const badge = exchange.badge ? badgeConfigRU[exchange.badge] : null;
  const faq = getFAQ(exchange);
  const comparisonSlugs = getComparisonSlugs(exchange.slug);
  const otherExchanges = exchangesRU.filter((e) => e.id !== exchange.id);

  return (
    <div className="min-h-screen">
      {/* ===== Hero ===== */}
      <section
        className="border-b border-[var(--border)]"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            href="/ru/birzhi"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Все биржи
          </Link>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <ExchangeLogo exchangeId={exchange.id} size={56} />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display">
                  {exchange.name}
                </h1>
                {badge && (
                  <Badge variant={badge.variant}>{badge.label}</Badge>
                )}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.round(exchange.rating)
                          ? "text-amber-400"
                          : "text-[var(--text-muted)]/30"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-[var(--text-primary)]">
                    {exchange.rating}/5
                  </span>
                </div>
                <VpnBadge status={exchange.cis.worksInRussia} />
              </div>
              <p className="text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                {exchange.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-4 text-sm text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <Globe className="h-4 w-4" /> Основана в {exchange.founded} г.
                </span>
                <span>•</span>
                <span>{exchange.headquarters}</span>
                <span>•</span>
                <span>KYC: {exchange.cis.kycRequired}</span>
              </div>
            </div>
            <div className="sm:ml-auto shrink-0">
              <AffiliateButton
                href={affiliateUrl}
                label={`Открыть ${exchange.name}`}
                variant="primary"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Main content ===== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* --- Left column --- */}
          <div className="lg:col-span-2 space-y-10">
            {/* Работает ли в России? */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-[var(--accent-primary)]" />
                Работает ли {exchange.name} в России?
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <VpnBadge status={exchange.cis.worksInRussia} />
                <span className="text-sm text-[var(--text-secondary)]">
                  {exchange.name}{" "}
                  {vpnStatusText[exchange.cis.worksInRussia]}
                </span>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  По состоянию на март 2026 года, {exchange.name}{" "}
                  {exchange.cis.worksInRussia === "yes"
                    ? "полностью доступна для пользователей из Российской Федерации. Регистрация, верификация, пополнение через рубли и торговля работают без каких-либо ограничений. Биржа активно поддерживает российский рынок и предлагает интерфейс на русском языке."
                    : exchange.cis.worksInRussia === "partial"
                    ? "доступна для российских пользователей с некоторыми ограничениями. Базовые функции — регистрация, торговля на споте и P2P — работают без VPN. Однако отдельные сервисы и продукты могут быть недоступны из-за регуляторных требований. Биржа периодически обновляет политику доступа."
                    : exchange.cis.worksInRussia === "vpn"
                    ? "ограничила доступ для российских IP-адресов. Для использования биржи из России необходим надёжный VPN-сервис. При подключении через VPN все функции работают стабильно, включая торговлю, вывод средств и P2P. В Казахстане, Беларуси и Украине биржа доступна без VPN."
                    : "полностью заблокирована для пользователей из России. Рекомендуем рассмотреть альтернативные площадки из нашего рейтинга."}
                </p>
                <p>
                  Поддерживаемые страны СНГ:{" "}
                  <span className="font-medium text-[var(--text-primary)]">
                    {exchange.cis.countries
                      .map((c) =>
                        c === "RU"
                          ? "Россия"
                          : c === "KZ"
                          ? "Казахстан"
                          : c === "BY"
                          ? "Беларусь"
                          : c === "UA"
                          ? "Украина"
                          : c
                      )
                      .join(", ")}
                  </span>
                  . Требование KYC:{" "}
                  <span className="font-medium text-[var(--text-primary)]">
                    {exchange.cis.kycRequired}
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Scores visualization */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-6">
                Детальная оценка
              </h2>
              <div className="space-y-4">
                {(
                  Object.entries(exchange.scores) as [string, number][]
                ).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-[var(--text-secondary)] font-medium">
                        {scoreLabels[key] ?? key}
                      </span>
                      <span className="text-[var(--text-primary)] font-bold">
                        {value}/10
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-[var(--bg-primary)] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${value * 10}%`,
                          background:
                            value >= 9
                              ? "var(--gradient-green, linear-gradient(to right, #10b981, #34d399))"
                              : value >= 7
                              ? "var(--gradient-cta, linear-gradient(to right, #3b82f6, #6366f1))"
                              : "linear-gradient(to right, #f59e0b, #f97316)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fees table */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-6">
                Таблица комиссий {exchange.name}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="py-3 px-4 text-left text-[var(--text-muted)] font-medium">
                        Тип
                      </th>
                      <th className="py-3 px-4 text-center text-[var(--text-muted)] font-medium">
                        Мейкер
                      </th>
                      <th className="py-3 px-4 text-center text-[var(--text-muted)] font-medium">
                        Тейкер
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 px-4 text-[var(--text-primary)] font-medium">
                        Спот
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
                        Фьючерсы
                      </td>
                      <td className="py-3 px-4 text-center text-emerald-400 font-semibold">
                        {exchange.features.futures
                          ? formatPercent(exchange.fees.futuresMaker)
                          : "Н/Д"}
                      </td>
                      <td className="py-3 px-4 text-center text-amber-400 font-semibold">
                        {exchange.features.futures
                          ? formatPercent(exchange.fees.futuresTaker)
                          : "Н/Д"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-[var(--text-primary)] font-medium">
                        Вывод
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
              <p className="mt-4 text-xs text-[var(--text-muted)] leading-relaxed">
                Комиссии указаны для базового уровня без учёта скидок за объём
                торгов или использование нативного токена биржи. Фактические
                комиссии могут быть ниже при увеличении 30-дневного объёма
                торговли. Рекомендуем проверять актуальные тарифы на
                официальном сайте {exchange.name}.
              </p>
            </div>

            {/* Features */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-6">
                Функциональность
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: "Спот-трейдинг", available: exchange.features.spot },
                  { label: "Фьючерсы", available: exchange.features.futures },
                  { label: "Маржинальная торговля", available: exchange.features.margin },
                  { label: "Стейкинг", available: exchange.features.staking },
                  { label: "P2P торговля", available: exchange.features.p2p },
                  { label: "NFT маркетплейс", available: exchange.features.nfts },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className={`flex items-center gap-2 rounded-lg p-3 text-sm font-medium ${
                      feat.available
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-[var(--bg-primary)]/50 text-[var(--text-muted)]"
                    }`}
                  >
                    {feat.available ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <XIcon className="h-4 w-4" />
                    )}
                    {feat.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods RU */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-4">
                Способы ввода рублей
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                {exchange.name} предлагает следующие способы пополнения счёта
                в рублях. P2P-торговля остаётся самым популярным и выгодным
                способом покупки криптовалюты для российских пользователей,
                так как позволяет избежать высоких комиссий за конвертацию и
                поддерживает прямые переводы через российские банки.
              </p>
              <PaymentMethodsRU methods={exchange.cis.rubMethods} />
            </div>

            {/* Pros & Cons */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div
                className="rounded-2xl border border-emerald-500/20 p-6"
                style={{ background: "var(--gradient-card)" }}
              >
                <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-400 mb-4">
                  <Check className="h-5 w-5" /> Преимущества
                </h3>
                <ul className="space-y-3">
                  {exchange.pros.map((pro) => (
                    <li
                      key={pro}
                      className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <Check className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-2xl border border-red-500/20 p-6"
                style={{ background: "var(--gradient-card)" }}
              >
                <h3 className="flex items-center gap-2 text-lg font-bold text-red-400 mb-4">
                  <XIcon className="h-5 w-5" /> Недостатки
                </h3>
                <ul className="space-y-3">
                  {exchange.cons.map((con) => (
                    <li
                      key={con}
                      className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <XIcon className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bonus section */}
            <div
              className="rounded-2xl border border-emerald-500/20 p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-4">
                Бонус при регистрации на {exchange.name}
              </h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-1">
                  <div className="text-2xl font-extrabold text-emerald-400 mb-2">
                    {exchange.bonus.amount}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-1">
                    Тип бонуса: {exchange.bonus.type}
                  </p>
                  {exchange.bonus.promoCode && (
                    <div className="mt-3">
                      <span className="text-xs text-[var(--text-muted)]">
                        Промокод:
                      </span>
                      <div className="inline-flex items-center gap-2 ml-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5">
                        <code className="text-sm font-bold text-emerald-400 tracking-widest">
                          {exchange.bonus.promoCode}
                        </code>
                      </div>
                    </div>
                  )}
                  <p className="mt-3 text-xs text-[var(--text-muted)] leading-relaxed">
                    Для получения бонуса зарегистрируйтесь по нашей реферальной
                    ссылке и, если указан промокод, введите его при регистрации.
                    Бонусы начисляются после выполнения условий акции — обычно
                    это первый депозит или определённый объём торговли. Условия
                    могут измениться — проверяйте актуальную информацию на сайте
                    биржи.
                  </p>
                </div>
                <div className="shrink-0">
                  <AffiliateButton
                    href={affiliateUrl}
                    label="Получить бонус"
                    variant="green"
                    size="lg"
                  />
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-6">
                Часто задаваемые вопросы о {exchange.name}
              </h2>
              <div className="space-y-6">
                {faq.map((item, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                      {item.q}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal comparison links */}
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-4">
                Сравнить {exchange.name} с другими биржами
              </h2>
              <div className="grid sm:grid-cols-3 gap-3">
                {comparisonSlugs.map((pair) => {
                  const [a, , b] = pair.split("-");
                  const nameA =
                    exchangesRU.find((e) => e.slug === a)?.name ?? a;
                  const nameB =
                    exchangesRU.find((e) => e.slug === b)?.name ?? b;
                  return (
                    <Link
                      key={pair}
                      href={`/ru/sravnit/${pair}`}
                      className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] p-4 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]/30 transition-colors"
                      style={{ background: "var(--gradient-card)" }}
                    >
                      {nameA} vs {nameB}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Other exchanges */}
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mb-4">
                Другие биржи
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {otherExchanges.map((other) => (
                  <Link
                    key={other.id}
                    href={`/ru/birzhi/${other.slug}`}
                    className="flex items-center gap-4 rounded-xl border border-[var(--border)] p-4 hover:border-[var(--accent-primary)]/30 hover:bg-[var(--bg-hover)] transition-all"
                    style={{ background: "var(--gradient-card)" }}
                  >
                    <ExchangeLogo exchangeId={other.id} size={28} />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-[var(--text-primary)] text-sm">
                        {other.name}
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        Спот: {formatPercent(other.fees.spotTaker)} •{" "}
                        {other.rating.toFixed(1)}★
                      </div>
                    </div>
                    <VpnBadge status={other.cis.worksInRussia} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* --- Sidebar --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* CTA card */}
              <div
                className="rounded-2xl border border-[var(--accent-primary)]/30 p-6"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="text-center mb-4">
                  <div className="mx-auto mb-3">
                    <ExchangeLogo exchangeId={exchange.id} size={40} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-display">
                    Открыть счёт в {exchange.name}
                  </h3>
                  <div className="flex items-center justify-center gap-0.5 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.round(exchange.rating)
                            ? "text-amber-400"
                            : "text-[var(--text-muted)]/30"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Bonus highlight */}
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 mb-4 text-center">
                  <div className="text-xs text-emerald-400 mb-1">
                    Бонус при регистрации
                  </div>
                  <div className="text-xl font-bold text-emerald-300">
                    {exchange.bonus.amount}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">
                    {exchange.bonus.type}
                  </div>
                </div>

                {/* Promo code */}
                {exchange.bonus.promoCode && (
                  <div className="mb-4 text-center">
                    <div className="text-xs text-[var(--text-muted)] mb-1">
                      Промокод:
                    </div>
                    <div className="rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-4 py-2">
                      <code className="text-sm font-bold text-emerald-400 tracking-widest">
                        {exchange.bonus.promoCode}
                      </code>
                    </div>
                  </div>
                )}

                <AffiliateButton
                  href={affiliateUrl}
                  label={`Открыть ${exchange.name}`}
                  variant="primary"
                  size="lg"
                  className="w-full"
                />

                <p className="text-[10px] text-[var(--text-muted)] text-center mt-3">
                  Этот сайт может получать партнёрское вознаграждение
                </p>
              </div>

              {/* Quick Info */}
              <div
                className="rounded-2xl border border-[var(--border)] p-6"
                style={{ background: "var(--gradient-card)" }}
              >
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
                  Краткая информация
                </h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">Основана</dt>
                    <dd className="text-[var(--text-primary)] font-medium">
                      {exchange.founded}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">Штаб-квартира</dt>
                    <dd className="text-[var(--text-primary)] font-medium">
                      {exchange.headquarters}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">KYC</dt>
                    <dd className="text-[var(--text-primary)] font-medium">
                      {exchange.cis.kycRequired}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">VPN</dt>
                    <dd>
                      <VpnBadge status={exchange.cis.worksInRussia} />
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--text-muted)]">P2P рубли</dt>
                    <dd className="font-medium">
                      {exchange.cis.p2pAvailable ? (
                        <span className="text-emerald-400">Да</span>
                      ) : (
                        <span className="text-red-400">Нет</span>
                      )}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Security */}
              <div
                className="rounded-2xl border border-[var(--border)] p-6"
                style={{ background: "var(--gradient-card)" }}
              >
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
                  Безопасность
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      label: "Двухфакторная аутентификация",
                      active: exchange.security.twoFactor,
                    },
                    {
                      label: "Холодное хранение",
                      active: exchange.security.coldStorage,
                    },
                    {
                      label: "Страховой фонд",
                      active: exchange.security.insuranceFund,
                    },
                    {
                      label: "Аудит резервов",
                      active: exchange.security.auditedReserves,
                    },
                  ].map((sec) => (
                    <div
                      key={sec.label}
                      className={`flex items-center gap-2 rounded-lg p-2.5 text-sm ${
                        sec.active
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {sec.active ? (
                        <Check className="h-4 w-4 shrink-0" />
                      ) : (
                        <XIcon className="h-4 w-4 shrink-0" />
                      )}
                      <span className="font-medium">{sec.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-xl border border-[var(--border)] p-4 text-center">
          <p className="text-xs text-[var(--text-muted)]">
            Данный обзор носит информационный характер и не является финансовой
            рекомендацией. Инвестируйте ответственно. Комиссии и условия могут
            измениться — всегда проверяйте актуальную информацию на официальном
            сайте {exchange.name}. Торговля криптовалютами сопряжена с высоким
            уровнем риска и может привести к потере вложенных средств.
          </p>
        </div>
      </div>
    </div>
  );
}
