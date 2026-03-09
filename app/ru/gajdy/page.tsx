import { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Гайды по криптовалютам для России и СНГ | CriptoEmpire",
  description:
    "Пошаговые гайды по покупке, продаже и выводу криптовалюты в России и СНГ. P2P, обменники, налоги, VPN — всё что нужно знать.",
};

const guides = [
  {
    slug: "kak-kupit-bitcoin-v-rossii",
    category: "Гайд" as const,
    variant: "blue" as const,
    title: "Как купить Bitcoin в России в 2026",
    excerpt:
      "5 способов купить BTC: P2P, обменники, биржи, банковская карта и крипто-банкоматы. Пошаговая инструкция через Bybit P2P.",
    readTime: "10 мин",
  },
  {
    slug: "bybit-bez-vpn",
    category: "FAQ" as const,
    variant: "amber" as const,
    title: "Работает ли Bybit без VPN в России",
    excerpt:
      "Актуальный статус Bybit для российских пользователей. Какие функции доступны напрямую, а какие требуют VPN.",
    readTime: "5 мин",
  },
  {
    slug: "kak-vyvesti-kriptu-v-rubli",
    category: "Гайд" as const,
    variant: "blue" as const,
    title: "Как вывести криптовалюту в рубли",
    excerpt:
      "Все способы вывода крипты на рублёвую карту: P2P на биржах, обменники, прямой вывод. Комиссии и налоговые последствия.",
    readTime: "8 мин",
  },
  {
    slug: "luchshie-birzhi-kazahstan",
    category: "Рейтинг" as const,
    variant: "green" as const,
    title: "Лучшие биржи для Казахстана 2026",
    excerpt:
      "Топ-5 криптобирж для Казахстана с поддержкой KZT. Регулирование AIFC, ввод через Kaspi Bank, P2P в тенге.",
    readTime: "7 мин",
  },
  {
    slug: "p2p-trading-rossiya",
    category: "Гайд" as const,
    variant: "blue" as const,
    title: "P2P трейдинг в России — полный гайд",
    excerpt:
      "Как безопасно торговать на P2P площадках Bybit, Bitget и KuCoin. Защита от мошенников, эскроу и арбитраж.",
    readTime: "12 мин",
  },
  {
    slug: "nalog-na-kriptu-rossiya",
    category: "Закон" as const,
    variant: "purple" as const,
    title: "Налог на криптовалюту в России 2026",
    excerpt:
      "Как платить налоги с криптовалюты в России. Ставки 13% и 15%, подача 3-НДФЛ, расчёт дохода и штрафы за неуплату.",
    readTime: "8 мин",
  },
  {
    slug: "bingx-kopitreyding",
    category: "Гайд" as const,
    variant: "blue" as const,
    title: "Копитрейдинг на BingX — полный гайд",
    excerpt:
      "Как копировать сделки лучших трейдеров на BingX. Настройка, выбор трейдеров, управление рисками и реальные результаты.",
    readTime: "10 мин",
  },
  {
    slug: "birzhi-bez-kyc",
    category: "Рейтинг" as const,
    variant: "green" as const,
    title: "Биржи без KYC — рейтинг 2026",
    excerpt:
      "Топ криптобирж без обязательной верификации. Лимиты на вывод, безопасность и доступ из России.",
    readTime: "7 мин",
  },
  {
    slug: "nulevye-komissii-kriptobirzhi",
    category: "Гайд" as const,
    variant: "blue" as const,
    title: "Нулевые комиссии на криптобиржах",
    excerpt:
      "Какие биржи предлагают 0% комиссии и как это работает. MEXC, BingX, Bybit — подробное сравнение условий.",
    readTime: "8 мин",
  },
];

export default function GajdyPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="blue" className="mb-4">
              9 гайдов
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] font-display mb-4">
              Гайды по криптовалютам{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                для России и СНГ
              </span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Пошаговые инструкции по покупке, продаже и выводу криптовалюты.
              Актуальная информация для русскоязычных трейдеров.
            </p>
          </div>

          {/* Guide Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/ru/gajdy/${guide.slug}`}
                className="group flex flex-col rounded-2xl border border-[var(--border)] p-5 transition-all hover:border-[var(--accent-primary)]/40 hover:scale-[1.01]"
                style={{ background: "var(--gradient-card)" }}
              >
                <Badge variant={guide.variant} className="self-start mb-3">
                  {guide.category}
                </Badge>
                <h2 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mb-2 leading-snug">
                  {guide.title}
                </h2>
                <p className="text-sm text-[var(--text-muted)] mb-4 flex-1 leading-relaxed">
                  {guide.excerpt}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                  <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                    <Clock className="h-3.5 w-3.5" />
                    {guide.readTime}
                  </span>
                  <ArrowRight className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
                </div>
              </Link>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-12 text-center">
            <Link
              href="/ru"
              className="text-sm text-[var(--accent-primary)] hover:underline"
            >
              &larr; Вернуться на главную
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
