import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, Shield, CreditCard, Scale, Globe } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { exchangesRU } from "@/data/exchanges-ru";
import ExchangeLogo from "@/components/ui/ExchangeLogo";
import VpnBadge from "@/components/ru/VpnBadge";
import { AFFILIATE_LINKS_RU } from "@/config/affiliates-ru";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Криптобиржи для России 2026 — Рейтинг и обзоры | КриптоЭмпайр",
  description:
    "Лучшие криптобиржи для России в 2026 году. Сравнение бирж с P2P рублями, VPN-статус, налоги, способы оплаты через СБП, Тинькофф, Сбербанк. Актуальный рейтинг.",
  keywords:
    "криптобиржа россия, купить биткоин в россии, p2p рубли, биржа без vpn россия, налог на криптовалюту россия",
};

export default function RossiyaPage() {
  const russianExchanges = exchangesRU.filter((ex) =>
    ex.cis.countries.includes("RU")
  );

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
            Лучшие криптобиржи{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              для России 2026
            </span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Полный гайд по криптовалютным биржам, которые работают в России.
            Сравниваем доступность, способы оплаты рублями, P2P-трейдинг
            и требования к верификации.
          </p>
        </div>
      </section>

      {/* Legal Status */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl border border-[var(--border)] p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[var(--accent-primary)]/10">
                  <Scale className="h-5 w-5 text-[var(--accent-primary)]" />
                </div>
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                  Правовой статус крипто в России
                </h2>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Криптовалюты в России регулируются Федеральным законом
                  &laquo;О цифровых финансовых активах&raquo; (ЦФА), принятым
                  в 2020 году и дополненным в 2024-м. Согласно этому закону,
                  криптовалюта признаётся имуществом, но запрещена в качестве
                  средства платежа за товары и услуги на территории РФ. Это
                  означает, что вы не можете оплатить покупку в магазине
                  биткоином, однако владение, покупка и продажа криптовалюты
                  через биржи полностью легальны.
                </p>
                <p>
                  В ноябре 2024 года вступил в силу закон о майнинге, который
                  легализовал добычу криптовалют на территории России. Теперь
                  майнеры обязаны регистрироваться в реестре, а операторы
                  майнинг-площадок должны отчитываться перед Росфинмониторингом.
                  При этом правительство оставило за собой право запрещать
                  майнинг в отдельных регионах в периоды энергодефицита.
                </p>
                <p>
                  Центральный банк России продолжает выступать за ограничение
                  оборота криптовалют, однако Минфин и правительство занимают
                  более либеральную позицию, особенно в контексте
                  трансграничных расчётов. В 2025 году был одобрен
                  экспериментальный режим, позволяющий использовать криптовалюту
                  для международных платежей под контролем ЦБ.
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl border border-[var(--border)] p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-emerald-500/10">
                  <CreditCard className="h-5 w-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                  Способы оплаты рублями
                </h2>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  После ухода Visa и Mastercard из России в 2022 году,
                  основными способами покупки криптовалюты стали P2P-платформы
                  и Систему быстрых платежей (СБП). P2P-трейдинг позволяет
                  покупать крипту напрямую у других пользователей, используя
                  банковские переводы через СБП, Тинькофф, Сбербанк и другие
                  российские банки.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">СБП (Система быстрых платежей)</strong>{" "}
                  &mdash; самый популярный метод на 2026 год. Переводы по номеру
                  телефона проходят мгновенно и без комиссии до 100 000 рублей в
                  месяц. Большинство P2P-продавцов на Bybit и Bitget принимают
                  оплату через СБП.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">Tinkoff P2P</strong>{" "}
                  &mdash; Тинькофф банк остаётся одним из самых удобных для
                  крипто-транзакций. Быстрые переводы, удобное приложение и
                  лояльная политика к P2P-операциям делают его фаворитом среди
                  трейдеров.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">Сбербанк</strong>{" "}
                  &mdash; крупнейший банк России также поддерживается на
                  P2P-площадках. Однако некоторые трейдеры отмечают повышенное
                  внимание службы безопасности Сбербанка к частым переводам.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">QIWI</strong>{" "}
                  &mdash; после отзыва лицензии у QIWI банка в 2024 году,
                  использование QIWI-кошелька для крипто-операций стало крайне
                  ограниченным. Рекомендуем использовать альтернативные методы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Taxes */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border border-[var(--border)] p-8"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-amber-500/10">
                <Shield className="h-5 w-5 text-amber-400" />
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                Налоги на криптовалюту в России
              </h2>
            </div>
            <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Доход от продажи криптовалюты в России облагается НДФЛ. Физические
                лица должны самостоятельно подавать декларацию 3-НДФЛ до 30 апреля
                следующего года и уплачивать налог до 15 июля. Ставка составляет 13%
                для доходов до 5 миллионов рублей в год и 15% для суммы превышения.
                Налогооблагаемая база рассчитывается как разница между ценой продажи
                и документально подтверждёнными расходами на приобретение.
              </p>
              <p>
                Для правильного декларирования рекомендуется вести учёт всех операций:
                сохранять скриншоты сделок, историю транзакций на бирже и выписки P2P.
                Биржи вроде Bybit позволяют экспортировать историю торгов в формате CSV,
                что существенно упрощает расчёт налоговой базы. При отсутствии
                подтверждающих документов налоговая может начислить НДФЛ на полную
                сумму продажи без вычета расходов.
              </p>
              <p>
                Важно: обмен одной криптовалюты на другую (например, BTC на ETH) на
                данный момент формально тоже является налогооблагаемым событием,
                хотя на практике отследить такие операции сложно. ИП и самозанятые
                не могут применять специальные налоговые режимы к доходам от
                криптовалюты &mdash; используется только общий режим НДФЛ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Table */}
      <section className="py-16 border-t border-[var(--border)]" id="sravnenie">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[var(--text-primary)] font-display mb-3">
              Сравнение криптобирж для России
            </h2>
            <p className="text-[var(--text-secondary)]">
              Биржи которые работают без VPN, с P2P рублями и минимальным KYC
            </p>
          </div>

          <div
            className="overflow-x-auto rounded-2xl border border-[var(--border)]"
            style={{ background: "var(--gradient-card)" }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left px-4 py-3 text-[var(--text-muted)] font-medium">Биржа</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">Оценка</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">Комиссия спот</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">Доступ из РФ</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">P2P ₽</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">Методы ₽</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">KYC</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">Бонус</th>
                  <th className="text-right px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {russianExchanges.map((ex, i) => (
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
                      {(ex.fees.spotMaker * 100).toFixed(2)}% / {(ex.fees.spotTaker * 100).toFixed(2)}%
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
                    <td className="text-center px-4 py-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {ex.cis.rubMethods.map((method) => (
                          <Badge key={method} variant="blue" className="text-[10px]">
                            {method}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="text-center px-4 py-4 text-[var(--text-secondary)]">
                      {ex.cis.kycRequired}
                    </td>
                    <td className="text-center px-4 py-4 text-emerald-400 font-semibold text-xs">
                      {ex.bonus.amount}
                    </td>
                    <td className="text-right px-4 py-4">
                      <AffiliateButton
                        href={AFFILIATE_LINKS_RU[ex.id as keyof typeof AFFILIATE_LINKS_RU]}
                        label="Открыть"
                        size="sm"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* P2P Trading */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border border-[var(--border)] p-8"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-purple-500/10">
                <Globe className="h-5 w-5 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                P2P трейдинг с рублями в 2026 году
              </h2>
            </div>
            <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                P2P-трейдинг (peer-to-peer) стал основным способом покупки
                криптовалюты за рубли после ухода международных платёжных систем.
                На P2P-площадках вы торгуете напрямую с другими пользователями:
                биржа выступает гарантом сделки через систему эскроу, удерживая
                криптовалюту продавца до подтверждения получения оплаты.
              </p>
              <p>
                Лидером P2P-рынка для русскоязычных пользователей остаётся Bybit:
                высокая ликвидность, множество продавцов с хорошей репутацией и
                поддержка всех основных банков России. Bitget и Gate.io также
                предлагают P2P с рублями, но с меньшим количеством предложений.
                MEXC, несмотря на отсутствие встроенного P2P, позволяет покупать
                крипту через сторонние сервисы.
              </p>
              <p>
                При P2P-трейдинге важно соблюдать правила безопасности: торгуйте
                только через эскроу биржи, проверяйте репутацию контрагента,
                не переводите деньги до создания ордера на бирже и сохраняйте
                чеки всех переводов. Это поможет защититься от мошенников и
                упростит разрешение спорных ситуаций.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VPN Section */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[var(--text-primary)] font-display text-center mb-10">
            Какие биржи работают в России без VPN
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {russianExchanges.map((ex) => (
              <div
                key={ex.id}
                className="flex items-center gap-4 rounded-xl border border-[var(--border)] p-4"
                style={{ background: "var(--gradient-card)" }}
              >
                <ExchangeLogo exchangeId={ex.id} size={40} />
                <div className="flex-1">
                  <p className="font-semibold text-[var(--text-primary)]">{ex.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {ex.cis.vpnRequired
                      ? "Требуется VPN для доступа из России"
                      : "Доступна из России без VPN"}
                  </p>
                </div>
                <VpnBadge status={ex.cis.worksInRussia} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[var(--text-primary)] font-display text-center mb-10">
            Часто задаваемые вопросы
          </h2>

          <Accordion.Root type="single" collapsible className="space-y-3">
            <Accordion.Item
              value="q1"
              className="rounded-xl border border-[var(--border)] overflow-hidden"
              style={{ background: "var(--gradient-card)" }}
            >
              <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[var(--text-primary)] [&[data-state=open]>svg]:rotate-180">
                Легально ли покупать криптовалюту в России в 2026 году?
                <ChevronDown className="h-4 w-4 text-[var(--text-muted)] transition-transform duration-200" />
              </Accordion.Trigger>
              <Accordion.Content className="px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                Да, покупка и продажа криптовалюты в России полностью легальна.
                Закон о цифровых финансовых активах признаёт криптовалюту
                имуществом. Запрещено только использование крипты для оплаты
                товаров и услуг. Вы можете свободно покупать, продавать и
                хранить биткоин и другие криптовалюты через любые доступные
                биржи.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value="q2"
              className="rounded-xl border border-[var(--border)] overflow-hidden"
              style={{ background: "var(--gradient-card)" }}
            >
              <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[var(--text-primary)] [&[data-state=open]>svg]:rotate-180">
                Нужно ли платить налоги с криптовалюты в России?
                <ChevronDown className="h-4 w-4 text-[var(--text-muted)] transition-transform duration-200" />
              </Accordion.Trigger>
              <Accordion.Content className="px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                Да, доход от продажи криптовалюты облагается НДФЛ по ставке 13%
                (15% для доходов свыше 5 млн руб.). Необходимо самостоятельно
                подать декларацию 3-НДФЛ до 30 апреля и уплатить налог до 15
                июля следующего года. Налог рассчитывается с прибыли: разница
                между ценой продажи и ценой покупки. Сохраняйте все
                подтверждающие документы.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value="q3"
              className="rounded-xl border border-[var(--border)] overflow-hidden"
              style={{ background: "var(--gradient-card)" }}
            >
              <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[var(--text-primary)] [&[data-state=open]>svg]:rotate-180">
                Какая биржа лучше всего работает в России без VPN?
                <ChevronDown className="h-4 w-4 text-[var(--text-muted)] transition-transform duration-200" />
              </Accordion.Trigger>
              <Accordion.Content className="px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                На март 2026 года лучшими биржами для России без VPN являются
                MEXC (полный доступ), Bybit (частичный доступ, основные
                функции работают), Bitget и Gate.io. Все они поддерживают
                P2P-трейдинг с рублями и имеют русскоязычный интерфейс.
                OKX требует VPN для доступа из России.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value="q4"
              className="rounded-xl border border-[var(--border)] overflow-hidden"
              style={{ background: "var(--gradient-card)" }}
            >
              <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[var(--text-primary)] [&[data-state=open]>svg]:rotate-180">
                Как купить биткоин за рубли в 2026 году?
                <ChevronDown className="h-4 w-4 text-[var(--text-muted)] transition-transform duration-200" />
              </Accordion.Trigger>
              <Accordion.Content className="px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                Самый популярный способ &mdash; P2P-трейдинг на Bybit или Bitget.
                Зарегистрируйтесь на бирже, перейдите в раздел P2P, выберите
                продавца с хорошей репутацией, создайте ордер на покупку USDT,
                оплатите через СБП или Тинькофф, подтвердите оплату и получите
                крипту. Затем можно обменять USDT на BTC на спотовом рынке.
                Весь процесс занимает 10-15 минут.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value="q5"
              className="rounded-xl border border-[var(--border)] overflow-hidden"
              style={{ background: "var(--gradient-card)" }}
            >
              <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[var(--text-primary)] [&[data-state=open]>svg]:rotate-180">
                Безопасно ли хранить крипту на бирже в России?
                <ChevronDown className="h-4 w-4 text-[var(--text-muted)] transition-transform duration-200" />
              </Accordion.Trigger>
              <Accordion.Content className="px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                Крупные биржи (Bybit, OKX, Bitget) используют холодные
                кошельки, двухфакторную аутентификацию и страховые фонды.
                Однако для долгосрочного хранения больших сумм рекомендуется
                использовать аппаратный кошелёк (Ledger, Trezor). Также
                учитывайте риск блокировки аккаунтов из-за санкций &mdash;
                выбирайте биржи, которые явно поддерживают российских
                пользователей.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </section>
    </div>
  );
}
