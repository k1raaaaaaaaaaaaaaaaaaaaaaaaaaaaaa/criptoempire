import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getExchangeRUBySlug, ExchangeRU } from "@/data/exchanges-ru";
import { AFFILIATE_LINKS_RU } from "@/config/affiliates-ru";
import ExchangeLogo from "@/components/ui/ExchangeLogo";
import VpnBadge from "@/components/ru/VpnBadge";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";

const slugs = ["bitget", "bybit", "gateio", "kucoin", "mexc", "okx"];

const exchangeNames: Record<string, string> = {
  bybit: "Bybit",
  mexc: "MEXC",
  okx: "OKX",
  bitget: "Bitget",
  gateio: "Gate.io",
  kucoin: "KuCoin",
};

function getAllPairs(): string[] {
  const pairs: string[] = [];
  for (let i = 0; i < slugs.length; i++) {
    for (let j = i + 1; j < slugs.length; j++) {
      pairs.push(`${slugs[i]}-vs-${slugs[j]}`);
    }
  }
  return pairs;
}

function parsePair(pair: string): { slug1: string; slug2: string } | null {
  const match = pair.match(/^(\w+)-vs-(\w+)$/);
  if (!match) return null;
  return { slug1: match[1], slug2: match[2] };
}

function getTotalScore(ex: ExchangeRU): number {
  const s = ex.scores;
  return s.security + s.fees + s.liquidity + s.ux + s.cisSupport;
}

function feePercent(value: number): string {
  return value === 0 ? "0%" : `${(value * 100).toFixed(2)}%`;
}

function securityList(ex: ExchangeRU): string {
  const items: string[] = [];
  if (ex.security.twoFactor) items.push("2FA");
  if (ex.security.coldStorage) items.push("Cold Storage");
  if (ex.security.insuranceFund) items.push("Страховой фонд");
  if (ex.security.auditedReserves) items.push("Аудит резервов");
  return items.join(", ") || "—";
}

function generateComparisonText(a: ExchangeRU, b: ExchangeRU): string {
  const totalA = getTotalScore(a);
  const totalB = getTotalScore(b);
  const winner = totalA >= totalB ? a : b;
  const loser = totalA >= totalB ? b : a;

  return `
## ${a.name} и ${b.name}: Подробное сравнение

### Комиссии

При выборе криптобиржи комиссии играют ключевую роль, особенно для активных трейдеров. ${a.name} предлагает спот-комиссии на уровне ${feePercent(a.fees.spotMaker)} (мейкер) / ${feePercent(a.fees.spotTaker)} (тейкер), тогда как ${b.name} берёт ${feePercent(b.fees.spotMaker)} (мейкер) / ${feePercent(b.fees.spotTaker)} (тейкер). На фьючерсах разница тоже заметна: ${a.name} — ${feePercent(a.fees.futuresMaker)}/${feePercent(a.fees.futuresTaker)}, а ${b.name} — ${feePercent(b.fees.futuresMaker)}/${feePercent(b.fees.futuresTaker)}. ${a.scores.fees > b.scores.fees ? `По нашей оценке, ${a.name} выгоднее по комиссиям.` : a.scores.fees < b.scores.fees ? `По нашей оценке, ${b.name} выгоднее по комиссиям.` : "По нашей оценке, обе биржи примерно равны по комиссиям."} Для долгосрочных инвесторов разница может быть незначительной, но для скальперов и дейтрейдеров каждая сотая процента имеет значение.

### Доступ из России

Один из главных вопросов для российских трейдеров — можно ли пользоваться биржей без VPN. ${a.name} ${a.cis.vpnRequired ? "требует VPN для доступа из России, что создаёт дополнительные неудобства" : "работает из России без VPN, что является большим преимуществом"}. ${b.name} ${b.cis.vpnRequired ? "требует VPN для доступа из России" : "доступна из России без VPN"}. ${a.cis.worksInRussia === "yes" && b.cis.worksInRussia !== "yes" ? `В этом плане ${a.name} однозначно удобнее для российских пользователей.` : b.cis.worksInRussia === "yes" && a.cis.worksInRussia !== "yes" ? `Здесь ${b.name} имеет явное преимущество для российских пользователей.` : "Обе биржи имеют схожий статус доступа из России."} KYC-требования тоже различаются: ${a.name} требует «${a.cis.kycRequired}», а ${b.name} — «${b.cis.kycRequired}». Для тех, кто ценит анонимность, это важный фактор при выборе.

### P2P и рублёвые методы

Возможность покупать криптовалюту за рубли — критически важная функция. ${a.name} ${a.cis.p2pAvailable ? `поддерживает P2P-торговлю с рублями. Доступные методы: ${a.cis.rubMethods.join(", ")}` : "не имеет встроенного P2P-маркетплейса, что ограничивает возможности ввода рублей"}. ${b.name} ${b.cis.p2pAvailable ? `предлагает P2P с поддержкой: ${b.cis.rubMethods.join(", ")}` : "не поддерживает P2P-торговлю"}. ${a.cis.p2pAvailable && !b.cis.p2pAvailable ? `${a.name} здесь выигрывает за счёт встроенного P2P.` : !a.cis.p2pAvailable && b.cis.p2pAvailable ? `${b.name} имеет преимущество благодаря P2P-маркетплейсу.` : a.cis.p2pAvailable && b.cis.p2pAvailable ? "Обе платформы предоставляют P2P, но ассортимент методов оплаты может различаться." : "К сожалению, ни одна из бирж не имеет встроенного P2P."} Наличие СБП и банковских карт значительно упрощает процесс покупки криптовалюты для российских пользователей.

### Безопасность

Безопасность средств — приоритет номер один. ${a.name} предлагает: ${securityList(a)}. ${b.name} обеспечивает: ${securityList(b)}. ${a.scores.security > b.scores.security ? `По нашей оценке безопасности, ${a.name} набирает ${a.scores.security}/10 против ${b.scores.security}/10 у ${b.name}.` : a.scores.security < b.scores.security ? `${b.name} получает более высокую оценку безопасности: ${b.scores.security}/10 против ${a.scores.security}/10 у ${a.name}.` : `Обе биржи получили одинаковую оценку безопасности: ${a.scores.security}/10.`} ${a.security.auditedReserves && b.security.auditedReserves ? "Обе биржи проводят аудит резервов (Proof of Reserves), что повышает прозрачность." : a.security.auditedReserves ? `${a.name} проводит аудит резервов, тогда как ${b.name} пока не внедрила эту практику.` : b.security.auditedReserves ? `${b.name} проводит аудит резервов, тогда как ${a.name} не предоставляет такой информации.` : "Ни одна из бирж пока не проводит публичный аудит резервов."} Рекомендуем всегда включать двухфакторную аутентификацию и не хранить крупные суммы на бирже.

### Вердикт

По совокупности факторов, ${winner.name} набирает ${getTotalScore(winner)} баллов из 50, тогда как ${loser.name} — ${getTotalScore(loser)} баллов. ${winner.name} лучше подходит для ${winner.scores.cisSupport >= 8 ? "русскоязычных трейдеров благодаря хорошей поддержке СНГ-региона" : "опытных трейдеров, ценящих функциональность"}. ${loser.name} может быть лучшим выбором ${loser.scores.fees >= 9 ? "для тех, кто хочет минимизировать комиссии" : loser.scores.ux >= 9 ? "для начинающих благодаря удобному интерфейсу" : "в определённых сценариях использования"}. В конечном счёте, выбор зависит от ваших приоритетов: комиссии, безопасность, доступ из России или удобство интерфейса. Обе биржи являются надёжными платформами и активно работают на рынке криптовалют уже не первый год.`;
}

export function generateStaticParams() {
  return getAllPairs().map((pair) => ({ pair }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pair: string }>;
}): Promise<Metadata> {
  const { pair } = await params;
  const parsed = parsePair(pair);
  if (!parsed) return {};

  const name1 = exchangeNames[parsed.slug1] || parsed.slug1;
  const name2 = exchangeNames[parsed.slug2] || parsed.slug2;

  return {
    title: `${name1} vs ${name2} — Какая биржа лучше в 2026? | КриптоЭмпайр`,
    description: `Сравнение ${name1} и ${name2}: комиссии, безопасность, P2P с рублями, доступ из России. Узнай, какая биржа лучше для СНГ в 2026 году.`,
  };
}

export default async function PairComparisonPage({
  params,
}: {
  params: Promise<{ pair: string }>;
}) {
  const { pair } = await params;
  const parsed = parsePair(pair);
  if (!parsed) notFound();

  const ex1 = getExchangeRUBySlug(parsed.slug1);
  const ex2 = getExchangeRUBySlug(parsed.slug2);
  if (!ex1 || !ex2) notFound();

  const total1 = getTotalScore(ex1);
  const total2 = getTotalScore(ex2);
  const winner = total1 >= total2 ? ex1 : ex2;
  const comparisonText = generateComparisonText(ex1, ex2);

  const rows: { label: string; val1: React.ReactNode; val2: React.ReactNode }[] = [
    {
      label: "Рейтинг",
      val1: <span className="font-bold text-[var(--accent-primary)]">{ex1.rating}/5</span>,
      val2: <span className="font-bold text-[var(--accent-primary)]">{ex2.rating}/5</span>,
    },
    {
      label: "Год основания",
      val1: ex1.founded,
      val2: ex2.founded,
    },
    {
      label: "Штаб-квартира",
      val1: ex1.headquarters,
      val2: ex2.headquarters,
    },
    {
      label: "Спот (мейкер/тейкер)",
      val1: `${feePercent(ex1.fees.spotMaker)} / ${feePercent(ex1.fees.spotTaker)}`,
      val2: `${feePercent(ex2.fees.spotMaker)} / ${feePercent(ex2.fees.spotTaker)}`,
    },
    {
      label: "Фьючерсы (мейкер/тейкер)",
      val1: `${feePercent(ex1.fees.futuresMaker)} / ${feePercent(ex1.fees.futuresTaker)}`,
      val2: `${feePercent(ex2.fees.futuresMaker)} / ${feePercent(ex2.fees.futuresTaker)}`,
    },
    {
      label: "Доступ из России",
      val1: <VpnBadge status={ex1.cis.worksInRussia} />,
      val2: <VpnBadge status={ex2.cis.worksInRussia} />,
    },
    {
      label: "P2P с рублями",
      val1: ex1.cis.p2pAvailable ? (
        <span className="text-emerald-400 font-semibold">Да</span>
      ) : (
        <span className="text-red-400">Нет</span>
      ),
      val2: ex2.cis.p2pAvailable ? (
        <span className="text-emerald-400 font-semibold">Да</span>
      ) : (
        <span className="text-red-400">Нет</span>
      ),
    },
    {
      label: "KYC",
      val1: ex1.cis.kycRequired,
      val2: ex2.cis.kycRequired,
    },
    {
      label: "Бонус",
      val1: <span className="text-emerald-400 font-semibold">{ex1.bonus.amount}</span>,
      val2: <span className="text-emerald-400 font-semibold">{ex2.bonus.amount}</span>,
    },
    {
      label: "Безопасность",
      val1: securityList(ex1),
      val2: securityList(ex2),
    },
  ];

  const scoreRows: { label: string; key: keyof ExchangeRU["scores"] }[] = [
    { label: "Безопасность", key: "security" },
    { label: "Комиссии", key: "fees" },
    { label: "Ликвидность", key: "liquidity" },
    { label: "Удобство", key: "ux" },
    { label: "Поддержка СНГ", key: "cisSupport" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/ru/sravnit"
            className="inline-flex items-center gap-1 text-sm text-[var(--accent-primary)] hover:underline mb-6"
          >
            &larr; Все сравнения
          </Link>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <ExchangeLogo exchangeId={ex1.id} size={48} />
              <span className="text-2xl font-extrabold text-[var(--text-primary)] font-display">
                {ex1.name}
              </span>
            </div>
            <Badge variant="purple" className="text-base px-4 py-1.5">
              VS
            </Badge>
            <div className="flex items-center gap-3">
              <ExchangeLogo exchangeId={ex2.id} size={48} />
              <span className="text-2xl font-extrabold text-[var(--text-primary)] font-display">
                {ex2.name}
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] font-display text-center mb-4">
            {ex1.name} vs {ex2.name}: Сравнение для России и СНГ
          </h1>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
            Детальное сравнение бирж {ex1.name} и {ex2.name} по комиссиям,
            безопасности, доступу из России и другим параметрам. Актуально на
            2026 год.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border border-[var(--border)] overflow-hidden"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="grid grid-cols-3 border-b border-[var(--border)] px-4 py-3">
              <div className="text-sm font-medium text-[var(--text-muted)]">
                Параметр
              </div>
              <div className="text-center text-sm font-bold text-[var(--text-primary)]">
                {ex1.name}
              </div>
              <div className="text-center text-sm font-bold text-[var(--text-primary)]">
                {ex2.name}
              </div>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 px-4 py-3 ${
                  i < rows.length - 1 ? "border-b border-[var(--border)]/50" : ""
                } ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
              >
                <div className="text-sm text-[var(--text-muted)] flex items-center">
                  {row.label}
                </div>
                <div className="text-center text-sm text-[var(--text-secondary)] flex items-center justify-center">
                  {row.val1}
                </div>
                <div className="text-center text-sm text-[var(--text-secondary)] flex items-center justify-center">
                  {row.val2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scores */}
      <section className="pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-[var(--text-primary)] font-display mb-6 text-center">
            Оценки по категориям
          </h2>
          <div
            className="rounded-2xl border border-[var(--border)] overflow-hidden"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="grid grid-cols-3 border-b border-[var(--border)] px-4 py-3">
              <div className="text-sm font-medium text-[var(--text-muted)]">
                Категория
              </div>
              <div className="text-center text-sm font-bold text-[var(--text-primary)]">
                {ex1.name}
              </div>
              <div className="text-center text-sm font-bold text-[var(--text-primary)]">
                {ex2.name}
              </div>
            </div>

            {scoreRows.map((sr, i) => {
              const v1 = ex1.scores[sr.key];
              const v2 = ex2.scores[sr.key];
              return (
                <div
                  key={sr.key}
                  className={`grid grid-cols-3 px-4 py-3 ${
                    i < scoreRows.length - 1
                      ? "border-b border-[var(--border)]/50"
                      : ""
                  } ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                >
                  <div className="text-sm text-[var(--text-muted)]">
                    {sr.label}
                  </div>
                  <div className="text-center text-sm">
                    <span
                      className={`font-bold ${
                        v1 > v2
                          ? "text-emerald-400"
                          : v1 < v2
                          ? "text-[var(--text-secondary)]"
                          : "text-[var(--accent-primary)]"
                      }`}
                    >
                      {v1}/10
                    </span>
                  </div>
                  <div className="text-center text-sm">
                    <span
                      className={`font-bold ${
                        v2 > v1
                          ? "text-emerald-400"
                          : v2 < v1
                          ? "text-[var(--text-secondary)]"
                          : "text-[var(--accent-primary)]"
                      }`}
                    >
                      {v2}/10
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Total */}
            <div className="grid grid-cols-3 px-4 py-4 border-t border-[var(--border)] bg-[var(--accent-primary)]/5">
              <div className="text-sm font-bold text-[var(--text-primary)]">
                Итого
              </div>
              <div className="text-center">
                <span
                  className={`text-lg font-extrabold ${
                    total1 >= total2
                      ? "text-emerald-400"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {total1}/50
                </span>
              </div>
              <div className="text-center">
                <span
                  className={`text-lg font-extrabold ${
                    total2 >= total1
                      ? "text-emerald-400"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {total2}/50
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winner */}
      <section className="pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border border-emerald-500/30 p-8 text-center"
            style={{ background: "var(--gradient-card)" }}
          >
            <h2 className="text-xl font-extrabold text-[var(--text-primary)] font-display mb-4">
              Кто побеждает?
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <ExchangeLogo exchangeId={winner.id} size={40} />
              <span className="text-2xl font-extrabold text-emerald-400 font-display">
                {winner.name}
              </span>
              <Badge variant="green">
                {getTotalScore(winner)}/50
              </Badge>
            </div>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto">
              {total1 === total2
                ? `${ex1.name} и ${ex2.name} набрали одинаковое количество баллов. Выбор зависит от ваших приоритетов: комиссии, удобство или доступ из России.`
                : `${winner.name} набирает ${getTotalScore(winner)} баллов против ${
                    winner.id === ex1.id ? total2 : total1
                  } у ${winner.id === ex1.id ? ex2.name : ex1.name}. ${
                    winner.scores.cisSupport >= 8
                      ? "Особенно рекомендуем для пользователей из России и СНГ."
                      : "Обе биржи достойны внимания, но по совокупности параметров лидирует " +
                        winner.name +
                        "."
                  }`}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AffiliateButton
              href={AFFILIATE_LINKS_RU[ex1.id as keyof typeof AFFILIATE_LINKS_RU]}
              label={`Открыть ${ex1.name}`}
              variant="primary"
              size="lg"
            />
            <AffiliateButton
              href={AFFILIATE_LINKS_RU[ex2.id as keyof typeof AFFILIATE_LINKS_RU]}
              label={`Открыть ${ex2.name}`}
              variant="green"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* Detailed Comparison Text */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border border-[var(--border)] p-6 sm:p-10"
            style={{ background: "var(--gradient-card)" }}
          >
            {comparisonText.split("\n").map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-extrabold text-[var(--text-primary)] font-display mt-8 mb-4 first:mt-0"
                  >
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }

              if (trimmed.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="text-lg font-bold text-[var(--text-primary)] mt-6 mb-3"
                  >
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }

              return (
                <p
                  key={i}
                  className="text-[var(--text-secondary)] leading-relaxed mb-4"
                >
                  {trimmed}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-[var(--text-primary)] font-display text-center mb-6">
            Подробные обзоры
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[ex1, ex2].map((ex) => (
              <Link
                key={ex.id}
                href={`/ru/birzhi/${ex.slug}`}
                className="flex items-center gap-4 rounded-2xl border border-[var(--border)] p-5 group hover:border-[var(--accent-primary)]/30 transition-colors"
                style={{ background: "var(--gradient-card)" }}
              >
                <ExchangeLogo exchangeId={ex.id} size={40} />
                <div className="flex-1">
                  <p className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    Обзор {ex.name}
                  </p>
                  <p className="text-sm text-[var(--text-muted)] mt-0.5">
                    Рейтинг {ex.rating}/5 &middot; {ex.bonus.amount}
                  </p>
                </div>
                <span className="text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ru/sravnit"
              className="text-sm text-[var(--accent-primary)] hover:underline"
            >
              &larr; Все сравнения бирж
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
