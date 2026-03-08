import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Users, TrendingUp } from "lucide-react";
import { exchangesRU } from "@/data/exchanges-ru";
import { AFFILIATE_LINKS_RU } from "@/config/affiliates-ru";
import ExchangeLogo from "@/components/ui/ExchangeLogo";
import VpnBadge from "@/components/ru/VpnBadge";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Лучшие криптобиржи для России и СНГ 2026 | CriptoEmpire",
  description:
    "Сравнение криптобирж для России, Казахстана, Беларуси и Украины. Рейтинг, комиссии, P2P с рублями, VPN-статус. Актуально на март 2026.",
  keywords: "лучшие криптобиржи, купить биткоин россия, bybit россия, криптобиржа без vpn, p2p рубли",
  alternates: {
    languages: {
      es: "https://criptoempire.com",
      ru: "https://criptoempire.com/ru",
    },
  },
};

export default function RUHomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="blue" className="mb-6">
            Обновлено — Март 2026
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] font-display mb-6 leading-tight">
            Найди лучшую криптобиржу{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              для России и СНГ
            </span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Сравниваем комиссии, безопасность, способы ввода рублей и VPN-статус.
            Независимый рейтинг для русскоязычных трейдеров.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ru/birzhi"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white transition-all hover:scale-[1.02]"
              style={{ background: "var(--gradient-cta)" }}
            >
              Смотреть рейтинг бирж
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/ru/sravnit"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold border border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 transition-all"
            >
              Сравнить биржи
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 border-y border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-[var(--accent-primary)] font-display">6</p>
              <p className="text-sm text-[var(--text-muted)]">Бирж проверено</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-400 font-display">4</p>
              <p className="text-sm text-[var(--text-muted)]">Страны СНГ</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-400 font-display">15</p>
              <p className="text-sm text-[var(--text-muted)]">Сравнений</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-400 font-display">2026</p>
              <p className="text-sm text-[var(--text-muted)]">Актуально</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16" id="sravnenie">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[var(--text-primary)] font-display mb-3">
              Рейтинг криптобирж для СНГ
            </h2>
            <p className="text-[var(--text-secondary)]">
              Комиссии, P2P с рублями, VPN-статус и общая оценка
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[var(--border)]" style={{ background: "var(--gradient-card)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left px-4 py-3 text-[var(--text-muted)] font-medium">Биржа</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">Оценка</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">Спот</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">Россия</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">P2P ₽</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">KYC</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">Бонус</th>
                  <th className="text-right px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {exchangesRU.map((ex, i) => (
                  <tr
                    key={ex.id}
                    className={`border-b border-[var(--border)]/50 hover:bg-[var(--bg-hover)] transition-colors ${
                      i === 0 ? "bg-[var(--accent-primary)]/5" : ""
                    }`}
                  >
                    <td className="px-4 py-4">
                      <Link href={`/ru/birzhi/${ex.slug}`} className="flex items-center gap-3 group">
                        <ExchangeLogo exchangeId={ex.id} size={32} />
                        <div>
                          <span className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                            {ex.name}
                          </span>
                          {ex.badge === "popular" && (
                            <span className="ml-2 text-[9px] font-bold bg-blue-500 text-white px-1.5 py-0.5 rounded-full">
                              ТОП
                            </span>
                          )}
                        </div>
                      </Link>
                    </td>
                    <td className="text-center px-4 py-4">
                      <span className="font-bold text-[var(--accent-primary)]">{ex.rating}</span>
                    </td>
                    <td className="text-center px-4 py-4 text-[var(--text-secondary)]">
                      {(ex.fees.spotMaker * 100).toFixed(2)}%
                    </td>
                    <td className="text-center px-4 py-4">
                      <VpnBadge status={ex.cis.worksInRussia} />
                    </td>
                    <td className="text-center px-4 py-4">
                      {ex.cis.p2pAvailable ? (
                        <span className="text-emerald-400 font-semibold">Да</span>
                      ) : (
                        <span className="text-[var(--text-muted)]">Нет</span>
                      )}
                    </td>
                    <td className="text-center px-4 py-4 text-[var(--text-secondary)]">
                      {ex.cis.kycRequired}
                    </td>
                    <td className="text-center px-4 py-4 text-emerald-400 font-semibold text-xs">
                      {ex.bonus.amount}
                    </td>
                    <td className="text-right px-4 py-4">
                      <a
                        href={AFFILIATE_LINKS_RU[ex.id as keyof typeof AFFILIATE_LINKS_RU]}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition-all hover:scale-105"
                        style={{ background: "var(--gradient-cta)" }}
                      >
                        Открыть
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[var(--text-primary)] font-display text-center mb-10">
            Почему нам доверяют
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Безопасность", desc: "Проверяем лицензии, аудиты и историю взломов" },
              { icon: Zap, title: "Актуальность", desc: "Обновляем данные о доступе из России ежемесячно" },
              { icon: Users, title: "Для СНГ", desc: "Фокус на P2P с рублями, тенге и гривной" },
              { icon: TrendingUp, title: "Честные обзоры", desc: "Партнёрство не влияет на рейтинги" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--border)] p-6 text-center"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[var(--accent-primary)]/10 mb-4">
                  <item.icon className="h-6 w-6 text-[var(--accent-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[var(--text-primary)] font-display text-center mb-10">
            Популярные гайды
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: "/ru/gajdy/kak-kupit-bitcoin-v-rossii", title: "Как купить Bitcoin в России", tag: "Гайд" },
              { href: "/ru/gajdy/bybit-bez-vpn", title: "Работает ли Bybit без VPN", tag: "FAQ" },
              { href: "/ru/gajdy/kak-vyvesti-kriptu-v-rubli", title: "Вывод крипты в рубли", tag: "Гайд" },
              { href: "/ru/gajdy/p2p-trading-rossiya", title: "P2P трейдинг в России", tag: "Гайд" },
              { href: "/ru/gajdy/nalog-na-kriptu-rossiya", title: "Налоги на криптовалюту", tag: "Закон" },
              { href: "/ru/gajdy/luchshie-birzhi-kazahstan", title: "Лучшие биржи Казахстана", tag: "Рейтинг" },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-4 group hover:border-[var(--accent-primary)]/30 transition-colors"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--accent-primary)] font-semibold">{g.tag}</span>
                  <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mt-0.5">
                    {g.title}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
