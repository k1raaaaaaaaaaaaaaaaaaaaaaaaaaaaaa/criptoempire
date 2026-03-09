import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AFFILIATE_LINKS_RU } from "@/config/affiliates-ru";
import AffiliateButton from "@/components/ui/AffiliateButton";

export const metadata: Metadata = {
  title: "Криптобиржи без KYC — рейтинг 2026 | CriptoEmpire",
  description:
    "Лучшие криптобиржи без KYC верификации в 2026 году: MEXC, KuCoin, BingX, WEEX, Ourbit, CoinEx. Лимиты вывода, преимущества и риски торговли без верификации.",
};

const exchanges = [
  {
    name: "MEXC",
    slug: "mexc",
    rating: 9.5,
    limit: "до 10 BTC/сутки",
    description:
      "Крупная биржа с нулевыми комиссиями для спот-мейкеров и огромным выбором альткоинов (2 000+ торговых пар). Без KYC доступен полный спотовый функционал и вывод до 10 BTC в сутки.",
  },
  {
    name: "KuCoin",
    slug: "kucoin",
    rating: 9.0,
    limit: "базовый лимит без KYC",
    description:
      "Одна из старейших бирж с отличной репутацией. Без прохождения KYC доступна спотовая торговля и базовый лимит вывода. Широкий выбор торговых пар и удобный интерфейс.",
  },
  {
    name: "BingX",
    slug: "bingx",
    rating: 8.5,
    limit: "ограниченный вывод",
    description:
      "Биржа с фокусом на копи-трейдинг и социальную торговлю. Без KYC доступен ограниченный вывод средств. Поддерживает спотовую и фьючерсную торговлю.",
  },
  {
    name: "WEEX",
    slug: "weex",
    rating: 8.0,
    limit: "без KYC",
    description:
      "Молодая биржа, позволяющая торговать без прохождения верификации. Предлагает спотовую и деривативную торговлю с конкурентоспособными комиссиями.",
  },
  {
    name: "Ourbit",
    slug: "ourbit",
    rating: 7.5,
    limit: "без KYC",
    description:
      "Биржа, ориентированная на пользователей, ценящих приватность. Не требует обязательной верификации для базового функционала. Поддерживает популярные торговые пары.",
  },
  {
    name: "CoinEx",
    slug: "coinex",
    rating: 8.0,
    limit: "до 10 000 USDT/сутки",
    description:
      "Биржа с простым интерфейсом и лояльной политикой к неверифицированным пользователям. Вывод до 10 000 USDT в сутки без прохождения KYC. Поддерживает множество альткоинов.",
  },
];

export default function BirzhiBezKycPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-[var(--text-muted)]">
          <Link href="/ru" className="hover:text-[var(--accent-primary)] transition-colors">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <Link href="/ru/gajdy" className="hover:text-[var(--accent-primary)] transition-colors">
            Гайды
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--text-secondary)]">Биржи без KYC</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display mb-4 leading-tight">
          Криптобиржи без KYC — рейтинг 2026 года
        </h1>
        <p className="text-[var(--text-muted)] text-sm mb-8">
          Обновлено: март 2026 &middot; 10 мин чтения
        </p>

        <div className="prose-custom space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <p>
            Не все трейдеры готовы проходить полную верификацию личности на криптобиржах. Кто-то ценит
            приватность, кто-то хочет быстро начать торговлю без загрузки документов. В этом обзоре мы
            собрали лучшие криптобиржи, которые позволяют торговать и выводить средства без обязательного
            прохождения KYC в 2026 году.
          </p>

          {/* Section 1: What is KYC */}
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Что такое KYC и зачем он нужен
          </h2>
          <p>
            KYC (Know Your Customer, «знай своего клиента») — это процедура верификации личности,
            которую проводят криптобиржи для идентификации пользователей. Обычно для прохождения KYC
            требуется загрузить фото паспорта или другого удостоверения личности, сделать селфи и
            указать персональные данные.
          </p>
          <p>
            Биржи внедряют KYC по нескольким причинам: выполнение требований регуляторов (AML —
            противодействие отмыванию денег), предотвращение мошенничества и финансирования терроризма,
            а также защита пользователей от несанкционированного доступа к аккаунтам. Однако не все
            биржи требуют обязательную верификацию — некоторые позволяют торговать с определёнными
            ограничениями без прохождения KYC.
          </p>

          {/* Section 2: Exchange ranking */}
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Рейтинг бирж без KYC
          </h2>
          <p>
            Ниже представлены биржи, которые позволяют торговать и выводить криптовалюту без
            обязательной верификации личности. Обратите внимание на лимиты вывода — они могут
            отличаться для неверифицированных аккаунтов.
          </p>
        </div>

        {/* Exchange cards */}
        <div className="mt-8 space-y-4">
          {exchanges.map((exchange, index) => (
            <div
              key={exchange.slug}
              className="rounded-2xl border border-[var(--border)] p-5 sm:p-6 transition-all hover:border-[var(--accent-primary)]/40"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-[var(--accent-primary)]">
                      #{index + 1}
                    </span>
                    <Link
                      href={`/ru/birzhi/${exchange.slug}`}
                      className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                    >
                      {exchange.name}
                    </Link>
                    <span className="inline-flex items-center rounded-lg bg-[var(--accent-primary)]/10 px-2.5 py-0.5 text-xs font-semibold text-[var(--accent-primary)]">
                      {exchange.rating}/10
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mb-2">
                    <span className="font-medium text-[var(--text-secondary)]">Лимит вывода без KYC:</span>{" "}
                    {exchange.limit}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {exchange.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:items-end shrink-0">
                  <AffiliateButton
                    href={AFFILIATE_LINKS_RU[exchange.slug as keyof typeof AFFILIATE_LINKS_RU]}
                    label={`Открыть ${exchange.name}`}
                    variant="primary"
                    size="sm"
                  />
                  <Link
                    href={`/ru/birzhi/${exchange.slug}`}
                    className="text-xs text-[var(--accent-primary)] hover:underline text-center"
                  >
                    Подробный обзор
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="prose-custom space-y-6 text-[var(--text-secondary)] leading-relaxed mt-10">
          {/* Section 3: Pros and risks */}
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Преимущества и риски торговли без KYC
          </h2>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Преимущества
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong className="text-[var(--text-primary)]">Приватность</strong> — ваши персональные
              данные (паспорт, адрес, фото) не хранятся на серверах биржи. В случае утечки данных вам
              ничего не угрожает.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Быстрый старт</strong> — регистрация
              занимает пару минут, можно сразу начать торговлю без ожидания проверки документов.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Доступность</strong> — пользователи из
              стран с ограничениями или без подходящих документов могут торговать криптовалютой.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Защита от утечек</strong> — многочисленные
              случаи взлома бирж показали, что KYC-данные пользователей могут попасть в руки
              злоумышленников.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Риски
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong className="text-[var(--text-primary)]">Лимиты вывода</strong> — без KYC биржи
              устанавливают суточные лимиты на вывод средств, которые могут быть недостаточны для
              крупных трейдеров.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Ограниченный функционал</strong> —
              некоторые функции (фьючерсы с высоким плечом, P2P, фиатный ввод) могут быть недоступны
              без верификации.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Риск блокировки</strong> — биржа может
              запросить KYC в любой момент при подозрительной активности и заморозить вывод до
              прохождения верификации.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Изменение политики</strong> — биржи могут
              ужесточить требования к верификации в будущем, что потребует прохождения KYC для
              продолжения работы.
            </li>
          </ul>

          {/* Section 4: How to trade safely */}
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Как безопасно торговать без KYC
          </h2>
          <p>
            Торговля без верификации требует дополнительной осторожности. Вот ключевые рекомендации
            для безопасной работы:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong className="text-[var(--text-primary)]">Включите 2FA</strong> — двухфакторная
              аутентификация (Google Authenticator) обязательна. Без KYC восстановить доступ к
              аккаунту будет крайне сложно.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Используйте уникальный email</strong> —
              заведите отдельный email для регистрации на бирже, чтобы минимизировать риск
              компрометации.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Не храните крупные суммы на бирже</strong> —
              выводите средства на собственный кошелёк (Ledger, Trezor, Trust Wallet) после каждой
              торговой сессии.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Соблюдайте лимиты</strong> — не пытайтесь
              обойти лимиты вывода через множественные аккаунты. Это может привести к блокировке всех
              аккаунтов.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Диверсифицируйте</strong> — распределите
              средства между несколькими биржами, чтобы снизить риск потери при блокировке одной
              площадки.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Проверяйте адреса вывода</strong> —
              всегда перепроверяйте адрес кошелька и сеть (TRC-20, ERC-20, BEP-20) перед отправкой
              средств.
            </li>
          </ul>

          {/* Section 5: FAQ */}
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Часто задаваемые вопросы (FAQ)
          </h2>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Легально ли торговать на бирже без KYC?
          </h3>
          <p>
            Использование криптобирж без KYC само по себе не является нарушением закона в большинстве
            стран. Однако вы обязаны самостоятельно соблюдать налоговое законодательство своей страны
            и декларировать доходы от криптовалютных операций, если это требуется.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Могут ли заблокировать аккаунт без KYC?
          </h3>
          <p>
            Да, биржа может запросить прохождение KYC в любой момент, особенно при крупных
            транзакциях, подозрительной активности или по требованию регулятора. В этом случае вывод
            средств будет заморожен до завершения верификации.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Какая биржа лучшая для торговли без KYC?
          </h3>
          <p>
            <Link href="/ru/birzhi/mexc" className="text-[var(--accent-primary)] hover:underline">MEXC</Link>{" "}
            — лидер нашего рейтинга благодаря высокому лимиту вывода (до 10 BTC/сутки), нулевым
            комиссиям для мейкеров и широкому выбору торговых пар. Это оптимальный выбор для
            большинства трейдеров.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Можно ли торговать фьючерсами без KYC?
          </h3>
          <p>
            На некоторых биржах (MEXC, BingX) доступна фьючерсная торговля без верификации, но с
            ограниченным кредитным плечом и лимитами позиций. Для полного доступа к деривативам
            обычно требуется хотя бы базовая верификация.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Как пополнить аккаунт на бирже без KYC?
          </h3>
          <p>
            Основной способ — перевод криптовалюты с другого кошелька или биржи. Фиатный ввод (через
            банковскую карту или перевод) на большинстве бирж без KYC недоступен. Можно купить крипту
            через P2P на другой площадке и перевести на биржу без KYC.
          </p>
        </div>

        {/* CTA */}
        <div
          className="mt-12 rounded-2xl border border-[var(--border)] p-6 sm:p-8 text-center"
          style={{ background: "var(--gradient-card)" }}
        >
          <h3 className="text-xl font-bold text-[var(--text-primary)] font-display mb-2">
            Лучшая биржа без KYC
          </h3>
          <p className="text-[var(--text-muted)] mb-4 text-sm">
            MEXC — вывод до 10 BTC/сутки без верификации, 0% комиссия для мейкеров, 2 000+ торговых пар.
          </p>
          <AffiliateButton
            href={AFFILIATE_LINKS_RU.mexc}
            label="Открыть MEXC"
            variant="primary"
            size="lg"
          />
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-xl border border-[var(--border)] p-4 sm:p-5">
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            <strong className="text-[var(--text-secondary)]">Дисклеймер:</strong> данная статья носит
            исключительно информационный характер и не является финансовой или юридической
            консультацией. Торговля криптовалютой сопряжена с высоким риском потери средств. Политика
            бирж в отношении KYC может измениться в любой момент. Перед началом торговли убедитесь,
            что вы понимаете риски и соблюдаете законодательство вашей страны. CriptoEmpire не несёт
            ответственности за возможные убытки. Некоторые ссылки являются партнёрскими — мы можем
            получать комиссию за регистрации по ним.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            href="/ru/gajdy"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--accent-primary)] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Все гайды
          </Link>
        </div>
      </article>
    </div>
  );
}
