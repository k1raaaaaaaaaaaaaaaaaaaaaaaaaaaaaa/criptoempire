import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как купить Bitcoin в России в 2026 — пошаговая инструкция | КриптоЭмпайр",
  description:
    "5 способов купить Bitcoin в России: P2P, обменники, биржи, банковская карта, крипто-банкоматы. Пошаговая инструкция через Bybit P2P с Тинькофф и Сбер.",
};

export default function KakKupitBitcoinPage() {
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
          <span className="text-[var(--text-secondary)]">Как купить Bitcoin</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display mb-4 leading-tight">
          Как купить Bitcoin в России в 2026 году
        </h1>
        <p className="text-[var(--text-muted)] text-sm mb-8">
          Обновлено: март 2026 &middot; 10 мин чтения
        </p>

        <div className="prose-custom space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <p>
            Покупка биткоина в России в 2026 году остаётся доступной несмотря на регуляторные изменения.
            В этом гайде мы рассмотрим все актуальные способы приобретения BTC, сравним их по удобству,
            комиссиям и безопасности. Независимо от того, новичок вы или опытный трейдер — здесь вы
            найдёте оптимальный путь к покупке первого (или очередного) биткоина.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            5 способов купить Bitcoin в России
          </h2>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            1. P2P-торговля на криптобиржах
          </h3>
          <p>
            P2P (peer-to-peer) — самый популярный способ покупки биткоина в России. Вы покупаете
            криптовалюту напрямую у другого человека, а биржа выступает гарантом сделки через систему
            эскроу. Основные площадки для P2P-торговли:{" "}
            <Link href="/ru/birzhi/bybit" className="text-[var(--accent-primary)] hover:underline">Bybit</Link>,{" "}
            <Link href="/ru/birzhi/bitget" className="text-[var(--accent-primary)] hover:underline">Bitget</Link> и{" "}
            <Link href="/ru/birzhi/kucoin" className="text-[var(--accent-primary)] hover:underline">KuCoin</Link>.
          </p>
          <p>
            Преимущества P2P: минимальные комиссии (обычно 0%), оплата через российские банки (Тинькофф,
            Сбер, СБП), возможность выбрать продавца с лучшим курсом. Недостатки: необходимо внимательно
            проверять контрагента и соблюдать правила площадки.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            2. Онлайн-обменники
          </h3>
          <p>
            Обменники криптовалют (такие как BestChange, Exchanger) позволяют быстро обменять рубли на
            биткоин без регистрации на бирже. Вы переводите рубли по реквизитам обменника и получаете BTC
            на указанный кошелёк. Курс обычно менее выгодный, чем на P2P (спред 1-3%), но процесс
            максимально простой. Рекомендуем использовать только проверенные обменники с высоким рейтингом
            и большим количеством отзывов.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            3. Прямая покупка на криптобирже
          </h3>
          <p>
            Некоторые биржи, такие как{" "}
            <Link href="/ru/birzhi/bybit" className="text-[var(--accent-primary)] hover:underline">Bybit</Link> и{" "}
            <Link href="/ru/birzhi/mexc" className="text-[var(--accent-primary)] hover:underline">MEXC</Link>,
            позволяют купить биткоин через сторонних провайдеров платежей. Вы можете использовать
            банковскую карту Visa или MasterCard (если она выпущена не российским банком под санкциями).
            Комиссия такой покупки составляет 2-5%, что делает этот способ менее выгодным, но удобным
            для тех, у кого есть карта иностранного банка.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            4. Покупка через банковскую карту (сторонние сервисы)
          </h3>
          <p>
            Сервисы вроде MoonPay, Simplex и Mercuryo принимают банковские карты и позволяют купить BTC
            за несколько минут. Однако для российских карт под санкциями большинство таких сервисов
            недоступны. Если у вас есть карта банка Казахстана, Грузии или другой страны — этот способ
            вполне работает. Комиссии — от 3% до 6%.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            5. Крипто-банкоматы
          </h3>
          <p>
            В крупных городах России (Москва, Санкт-Петербург, Казань) установлены Bitcoin-банкоматы,
            позволяющие купить BTC за наличные рубли. Комиссия составляет 5-8%, что делает этот способ
            самым дорогим, но зато полностью анонимным при покупках до определённого лимита. Количество
            таких банкоматов ограничено, а их расположение часто меняется.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Пошаговая инструкция: покупка BTC через Bybit P2P
          </h2>
          <p>
            <Link href="/ru/birzhi/bybit" className="text-[var(--accent-primary)] hover:underline">Bybit</Link>{" "}
            — одна из самых популярных бирж среди российских пользователей. P2P-раздел Bybit позволяет
            купить биткоин за рубли с оплатой через Тинькофф, Сбер и СБП. Вот пошаговая инструкция:
          </p>
          <ol className="list-decimal list-inside space-y-2 pl-2">
            <li><strong className="text-[var(--text-primary)]">Зарегистрируйтесь на Bybit</strong> — создайте аккаунт и пройдите верификацию (KYC). Потребуется паспорт РФ.</li>
            <li><strong className="text-[var(--text-primary)]">Перейдите в раздел P2P</strong> — в меню выберите «Купить крипто» → «P2P торговля».</li>
            <li><strong className="text-[var(--text-primary)]">Выберите BTC и валюту RUB</strong> — укажите сумму покупки и выберите способ оплаты (Тинькофф, Сбер, СБП).</li>
            <li><strong className="text-[var(--text-primary)]">Выберите продавца</strong> — обращайте внимание на количество сделок, процент завершения (выше 95%) и онлайн-статус.</li>
            <li><strong className="text-[var(--text-primary)]">Оплатите и подтвердите</strong> — переведите рубли по указанным реквизитам, затем нажмите «Я оплатил». Биткоин будет зачислен на ваш аккаунт после подтверждения продавцом.</li>
          </ol>

          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Через какие банки можно купить Bitcoin
          </h2>
          <p>
            Для P2P-покупки биткоина в России чаще всего используются следующие банки и платёжные системы:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong className="text-[var(--text-primary)]">Тинькофф (T-Bank)</strong> — самый популярный банк для P2P. Моментальные переводы, удобное приложение. Большинство продавцов на Bybit и Bitget принимают переводы через Тинькофф.</li>
            <li><strong className="text-[var(--text-primary)]">Сбер (Sberbank)</strong> — крупнейший банк России. Переводы по номеру карты или через СберОнлайн. Некоторые P2P-продавцы предпочитают именно Сбер.</li>
            <li><strong className="text-[var(--text-primary)]">СБП (Система быстрых платежей)</strong> — переводы между банками по номеру телефона. Комиссия 0% при суммах до 100 000 ₽ в месяц. Поддерживается на большинстве P2P-площадок.</li>
          </ul>
          <p>
            Также можно использовать Альфа-Банк, Райффайзен и другие банки, но выбор продавцов с этими
            способами оплаты может быть ограничен.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Комиссии и курсы
          </h2>
          <p>
            Комиссии при покупке Bitcoin зависят от выбранного способа. P2P-торговля на биржах — самый
            выгодный вариант: большинство бирж не берут комиссию с P2P-сделок, а курс определяется
            рыночным спросом и предложением. Типичный спред на P2P составляет 0.5-1.5% от рыночного курса.
          </p>
          <p>
            Обменники берут 1-3% спреда. Покупка картой через провайдеров — 3-6%. Крипто-банкоматы — 5-8%.
            При крупных суммах (от 100 000 ₽) разница в комиссиях становится очень существенной, поэтому
            для таких покупок однозначно рекомендуется P2P.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Безопасность при покупке Bitcoin
          </h2>
          <p>
            Покупка биткоина — ответственный шаг, и важно соблюдать базовые правила безопасности:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Используйте только проверенные биржи с хорошей репутацией и системой эскроу.</li>
            <li>Включите двухфакторную аутентификацию (2FA) на аккаунте биржи.</li>
            <li>При P2P-торговле проверяйте рейтинг продавца: количество сделок, процент завершения, время на платформе.</li>
            <li>Никогда не переводите деньги вне платформы (вне эскроу) — это главный признак мошенничества.</li>
            <li>Не переходите по ссылкам из чата P2P — мошенники могут отправлять фишинговые ссылки.</li>
            <li>После покупки переведите BTC на собственный кошелёк (аппаратный Ledger, Trezor или программный — Trust Wallet, Exodus), если не планируете торговать.</li>
          </ul>
          <p>
            Помните: биржа — это не кошелёк. Хранение крупных сумм на бирже несёт дополнительные риски.
            Правило «not your keys, not your coins» актуально как никогда.
          </p>
        </div>

        {/* CTA */}
        <div
          className="mt-12 rounded-2xl border border-[var(--border)] p-6 sm:p-8 text-center"
          style={{ background: "var(--gradient-card)" }}
        >
          <h3 className="text-xl font-bold text-[var(--text-primary)] font-display mb-2">
            Готовы купить Bitcoin?
          </h3>
          <p className="text-[var(--text-muted)] mb-4 text-sm">
            Bybit — лучшая P2P-площадка для покупки BTC за рубли с минимальными комиссиями.
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
