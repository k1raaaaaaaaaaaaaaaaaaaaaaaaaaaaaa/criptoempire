import { Metadata } from "next";
import Link from "next/link";
import { exchangesRU } from "@/data/exchanges-ru";
import ExchangeLogo from "@/components/ui/ExchangeLogo";
import VpnBadge from "@/components/ru/VpnBadge";
import { AFFILIATE_LINKS_RU, ExchangeIdRU } from "@/config/affiliates-ru";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Лучшие криптобиржи для России и СНГ 2026 | КриптоЭмпайр",
  description:
    "Полный рейтинг криптобирж для России и СНГ. Сравнение комиссий, P2P с рублями, VPN-статус, бонусы. Актуально на 2026 год.",
  keywords:
    "криптобиржи россия, лучшие биржи снг, купить биткоин, p2p рубли, bybit россия, mexc россия",
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

export default function BirzhiPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[var(--text-primary)] font-display mb-4">
            Лучшие криптобиржи для России и СНГ
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Подробный рейтинг 6 проверенных бирж для русскоязычных трейдеров.
            Комиссии, способы ввода рублей, VPN-статус и бонусы — всё в одном месте.
          </p>
        </div>

        {/* Exchange Cards Grid */}
        <div className="grid gap-4">
          {exchangesRU.map((exchange, index) => {
            const badge = exchange.badge
              ? badgeConfigRU[exchange.badge]
              : null;
            const affiliateUrl =
              AFFILIATE_LINKS_RU[exchange.id as ExchangeIdRU];

            return (
              <div
                key={exchange.id}
                className={`rounded-2xl border p-5 sm:p-6 hover:border-[var(--accent-primary)]/20 transition-colors ${
                  index === 0
                    ? "border-[var(--accent-primary)]/30"
                    : "border-[var(--border)]"
                }`}
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* Logo + Name + Badge + VPN */}
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <ExchangeLogo exchangeId={exchange.id} size={32} />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link
                          href={`/ru/birzhi/${exchange.slug}`}
                          className="font-bold text-[var(--text-primary)] font-display hover:text-[var(--accent-primary)] transition-colors"
                        >
                          {exchange.name}
                        </Link>
                        {badge && (
                          <Badge variant={badge.variant}>{badge.label}</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              className={`h-3.5 w-3.5 ${
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
                          <span className="text-xs text-[var(--text-muted)] ml-1">
                            {exchange.rating}
                          </span>
                        </div>
                        <VpnBadge status={exchange.cis.worksInRussia} />
                      </div>
                    </div>
                  </div>

                  {/* Stats + CTA */}
                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div>
                      <div className="text-[var(--text-muted)] text-xs">
                        Комиссия
                      </div>
                      <div className="font-semibold text-[var(--text-primary)]">
                        {(exchange.fees.spotTaker * 100).toFixed(2)}%
                      </div>
                    </div>
                    <div>
                      <div className="text-[var(--text-muted)] text-xs">
                        P2P ₽
                      </div>
                      <div className="font-semibold text-[var(--text-primary)]">
                        {exchange.cis.p2pAvailable ? (
                          <span className="text-emerald-400">Да</span>
                        ) : (
                          <span className="text-[var(--text-muted)]">Нет</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-[var(--text-muted)] text-xs">
                        Бонус
                      </div>
                      <div className="font-semibold text-emerald-400 text-xs">
                        {exchange.bonus.amount}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/ru/birzhi/${exchange.slug}`}
                        className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/30 transition-colors"
                      >
                        Обзор
                      </Link>
                      <a
                        href={affiliateUrl}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold text-white transition-all hover:scale-[1.02]"
                        style={{ background: "var(--gradient-cta)" }}
                      >
                        Открыть счёт
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom info text */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--text-muted)] max-w-2xl mx-auto">
            Рейтинг основан на независимом анализе комиссий, безопасности,
            ликвидности и доступности для пользователей из России и стран СНГ.
            Данные актуальны на март 2026 года. Мы можем получать партнёрское
            вознаграждение от бирж, однако это не влияет на позиции в рейтинге.
          </p>
        </div>
      </div>
    </div>
  );
}
