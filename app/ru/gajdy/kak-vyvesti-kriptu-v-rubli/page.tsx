import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как вывести криптовалюту в рубли в 2026 — все способы | КриптоЭмпайр",
  description:
    "Как вывести крипту в рубли на карту Тинькофф и Сбер: P2P на биржах, обменники, прямой вывод. Комиссии и налоговые последствия.",
};

export default function KakVyvestiKriptuPage() {
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
          <span className="text-[var(--text-secondary)]">Вывод крипты в рубли</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display mb-4 leading-tight">
          Как вывести криптовалюту в рубли в 2026 году
        </h1>
        <p className="text-[var(--text-muted)] text-sm mb-8">
          Обновлено: март 2026 &middot; 8 мин чтения
        </p>

        <div className="prose-custom space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <p>
            Вывод криптовалюты в рубли — вопрос, с которым сталкивается каждый трейдер и инвестор в России.
            В 2026 году существует несколько проверенных способов обналичить крипту на рублёвую карту.
            В этом гайде мы подробно разберём каждый из них, сравним комиссии и расскажем о налоговых
            последствиях.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            P2P-продажа на биржах
          </h2>
          <p>
            P2P-торговля — самый популярный и выгодный способ вывода криптовалюты в рубли. Вы продаёте
            крипту другому пользователю на бирже, а он переводит вам рубли на банковскую карту или
            электронный кошелёк. Биржа выступает гарантом сделки через систему эскроу.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Bybit P2P
          </h3>
          <p>
            <Link href="/ru/birzhi/bybit" className="text-[var(--accent-primary)] hover:underline">Bybit</Link>{" "}
            — лидер P2P-торговли для российских пользователей. Комиссия для продавца — 0%.
            Поддерживаемые способы получения рублей: Тинькофф, Сбер, СБП, Альфа-Банк, QIWI.
            Минимальная сумма сделки — от 500 ₽. Среднее время проведения сделки — 5-15 минут.
          </p>
          <p>
            Пошагово: переведите крипту на финансовый аккаунт Bybit → перейдите в раздел P2P →
            выберите «Продать» → укажите криптовалюту (BTC, USDT, ETH) и валюту RUB → выберите
            покупателя → дождитесь перевода рублей → подтвердите получение → крипта отправится покупателю.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Bitget P2P
          </h3>
          <p>
            <Link href="/ru/birzhi/bitget" className="text-[var(--accent-primary)] hover:underline">Bitget</Link>{" "}
            предлагает P2P-раздел с поддержкой рублей. Интерфейс схож с Bybit. Комиссия также 0% для
            мейкеров. Bitget активно развивает русскоязычный P2P-рынок, предлагая конкурентоспособные
            курсы. Поддерживаются переводы на Тинькофф, Сбер и через СБП.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Вывод через обменники
          </h2>
          <p>
            Онлайн-обменники — быстрый способ конвертировать крипту в рубли без необходимости искать
            покупателя. Вы отправляете криптовалюту на адрес обменника, а он переводит рубли на вашу
            карту. Процесс занимает 10-30 минут.
          </p>
          <p>
            Для поиска лучших курсов используйте агрегаторы обменников (BestChange и аналоги). Обращайте
            внимание на: курс обмена (спред обычно 1-3%), резерв обменника (должен быть достаточным для
            вашей суммы), отзывы и рейтинг, минимальную и максимальную сумму обмена.
          </p>
          <p>
            Преимущества обменников: не нужна регистрация на бирже, быстрый процесс, анонимность при
            небольших суммах. Недостатки: менее выгодный курс, чем на P2P, риск нарваться на
            недобросовестный обменник.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Вывод на банковскую карту
          </h2>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Тинькофф (T-Bank)
          </h3>
          <p>
            Тинькофф — самый удобный банк для вывода крипты в рубли. Быстрые переводы, удобное
            мобильное приложение, отсутствие комиссий за входящие переводы. Большинство P2P-покупателей
            на Bybit и Bitget используют именно Тинькофф. При использовании P2P деньги поступают
            мгновенно. Лимит на входящие переводы по СБП — 100 000 ₽ без комиссии.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Сбер (Sberbank)
          </h3>
          <p>
            Сбер — второй по популярности банк для вывода крипты. Переводы по номеру карты или через
            СберОнлайн. Некоторые P2P-покупатели предпочитают Сбер из-за его распространённости. Деньги
            поступают на карту в течение нескольких минут. Учтите, что Сбер под санкциями, поэтому прямые
            международные переводы на него невозможны — только P2P внутри России.
          </p>

          <p>
            Также поддерживаются переводы через СБП (Система быстрых платежей) — это универсальный
            способ, который работает между любыми банками-участниками. Переводы до 100 000 ₽ в месяц —
            без комиссии.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Комиссии при выводе
          </h2>
          <p>
            Сравнение комиссий при разных способах вывода криптовалюты в рубли:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong className="text-[var(--text-primary)]">P2P на бирже</strong> — 0% комиссии биржи + спред 0.5-1.5% от рыночного курса. Самый выгодный вариант.</li>
            <li><strong className="text-[var(--text-primary)]">Обменник</strong> — спред 1-3% от рыночного курса. Может быть дополнительная фиксированная комиссия.</li>
            <li><strong className="text-[var(--text-primary)]">Банковский перевод через СБП</strong> — 0% до 100 000 ₽/мес., далее 0.5% (не более 1 500 ₽).</li>
            <li><strong className="text-[var(--text-primary)]">Перевод по номеру карты</strong> — зависит от банка, обычно 0-1.5%.</li>
          </ul>
          <p>
            При выводе крупных сумм (от 500 000 ₽) рекомендуем разбивать сделки на несколько частей и
            использовать P2P на{" "}
            <Link href="/ru/birzhi/bybit" className="text-[var(--accent-primary)] hover:underline">Bybit</Link>{" "}
            для минимизации потерь на курсе.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Налоговые последствия
          </h2>
          <p>
            Согласно российскому законодательству, доход от продажи криптовалюты облагается налогом на
            доходы физических лиц (НДФЛ). Если вы продали криптовалюту дороже, чем купили — возникает
            налогооблагаемый доход.
          </p>
          <p>
            Ставка НДФЛ: 13% при годовом доходе до 5 000 000 ₽, 15% — свыше этой суммы. Налог
            рассчитывается как разница между ценой продажи и ценой покупки. Декларацию 3-НДФЛ необходимо
            подать до 30 апреля следующего года, а уплатить налог — до 15 июля. Подробнее читайте в нашем{" "}
            <Link href="/ru/gajdy/nalog-na-kriptu-rossiya" className="text-[var(--accent-primary)] hover:underline">
              гайде по налогам на криптовалюту
            </Link>.
          </p>
          <p>
            Банки могут запрашивать информацию о происхождении средств при крупных поступлениях.
            Рекомендуем сохранять историю транзакций на бирже и скриншоты сделок как подтверждение
            легальности доходов.
          </p>
        </div>

        {/* CTA */}
        <div
          className="mt-12 rounded-2xl border border-[var(--border)] p-6 sm:p-8 text-center"
          style={{ background: "var(--gradient-card)" }}
        >
          <h3 className="text-xl font-bold text-[var(--text-primary)] font-display mb-2">
            Лучший способ вывести крипту в рубли
          </h3>
          <p className="text-[var(--text-muted)] mb-4 text-sm">
            Bybit P2P — 0% комиссии, быстрые переводы на Тинькофф и Сбер.
          </p>
          <Link
            href="/ru/birzhi/bybit"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
            style={{ background: "var(--gradient-cta)" }}
          >
            Открыть Bybit
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            href="/ru/gajdy"
            className="text-sm text-[var(--accent-primary)] hover:underline"
          >
            &larr; Все гайды
          </Link>
        </div>
      </article>
    </div>
  );
}
