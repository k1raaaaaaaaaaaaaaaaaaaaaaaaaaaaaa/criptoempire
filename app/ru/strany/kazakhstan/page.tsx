import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, Shield, CreditCard, Scale, Building2 } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { exchangesRU } from "@/data/exchanges-ru";
import ExchangeLogo from "@/components/ui/ExchangeLogo";

import { AFFILIATE_LINKS_RU } from "@/config/affiliates-ru";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Криптобиржи для Казахстана 2026 | CriptoEmpire",
  description:
    "Лучшие криптобиржи для Казахстана в 2026 году. AIFC регулирование, покупка крипты за тенге через Kaspi Bank, налоги и легальный статус.",
  keywords:
    "криптобиржа казахстан, купить биткоин казахстан, kaspi bank крипто, aifc регулирование, биржа тенге",
};

export default function KazakhstanPage() {
  const kzExchanges = exchangesRU.filter((ex) =>
    ex.cis.countries.includes("KZ")
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="green" className="mb-6">
            Крипто легально в Казахстане
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] font-display mb-6 leading-tight">
            Криптобиржи для{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Казахстана 2026
            </span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Казахстан &mdash; один из лидеров крипторегулирования в СНГ.
            Сравниваем лучшие биржи для казахстанских пользователей: оплата
            тенге, поддержка Kaspi Bank и требования к KYC.
          </p>
        </div>
      </section>

      {/* Legal Status & AIFC */}
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
                  Правовой статус крипто в Казахстане
                </h2>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Казахстан является одной из наиболее прогрессивных стран СНГ в
                  вопросах регулирования криптовалют. Международный финансовый
                  центр &laquo;Астана&raquo; (AIFC) создал специальный
                  нормативный режим для цифровых активов, позволяющий
                  лицензированным платформам легально работать на территории
                  страны. Binance и другие крупные биржи получили лицензии AFSA
                  (Astana Financial Services Authority).
                </p>
                <p>
                  В 2023 году был принят закон &laquo;О цифровых активах&raquo;,
                  который разделил цифровые активы на обеспеченные и
                  необеспеченные. Криптовалюты (биткоин, эфириум) относятся к
                  необеспеченным цифровым активам. Закон установил чёткие правила
                  для криптобирж, обменников и кастодиальных сервисов. Майнинг
                  также регулируется отдельным законодательством: операторы
                  майнинга обязаны получать лицензии и платить повышенный тариф
                  за электроэнергию.
                </p>
                <p>
                  Главное преимущество для казахстанских пользователей &mdash;
                  все основные международные биржи работают в стране без
                  ограничений. В отличие от России, здесь нет санкционных
                  блокировок, и пользователи имеют полный доступ ко всем
                  функциям бирж, включая фиатные ввод и вывод.
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl border border-[var(--border)] p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-emerald-500/10">
                  <Building2 className="h-5 w-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                  AIFC и регулирование
                </h2>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Международный финансовый центр &laquo;Астана&raquo; (AIFC)
                  &mdash; это специальная юрисдикция на территории Казахстана,
                  работающая по нормам английского права. AIFC выдаёт лицензии
                  криптобиржам и устанавливает стандарты защиты инвесторов.
                  Регулятор AFSA проверяет соблюдение требований AML/KYC и
                  финансовую устойчивость платформ.
                </p>
                <p>
                  Для пользователей это означает дополнительный уровень защиты:
                  лицензированные биржи обязаны хранить средства клиентов
                  отдельно от собственных, проходить регулярные аудиты и
                  соблюдать правила по предотвращению отмывания денег.
                  Казахстанские пользователи могут обращаться в AFSA в случае
                  споров с лицензированными платформами.
                </p>
                <p>
                  Помимо AIFC, Национальный банк Казахстана также участвует в
                  регулировании цифрового тенге (CBDC), пилотный проект которого
                  запущен в 2024 году. Цифровой тенге не является криптовалютой,
                  но его инфраструктура может упростить взаимодействие между
                  фиатной и криптовалютной экосистемами в будущем.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border border-[var(--border)] p-8"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-amber-500/10">
                <CreditCard className="h-5 w-5 text-amber-400" />
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                Способы оплаты тенге (KZT)
              </h2>
            </div>
            <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Казахстанские пользователи имеют больше вариантов для покупки
                криптовалюты, чем жители большинства стран СНГ. Международные
                банковские карты Visa и Mastercard, выпущенные казахстанскими
                банками, работают на большинстве бирж для прямой покупки
                криптовалюты.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Kaspi Bank</strong>{" "}
                &mdash; крупнейший цифровой банк Казахстана и самый популярный
                метод оплаты для P2P-трейдинга. Приложение Kaspi позволяет
                мгновенно переводить тенге по номеру телефона. На P2P-площадках
                Bybit и OKX Kaspi является самым распространённым методом
                оплаты для казахстанских трейдеров. Переводы проходят мгновенно
                и без комиссии.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Банковские карты</strong>{" "}
                &mdash; карты Halyk Bank, Jusan Bank и других казахстанских
                банков поддерживаются на Bybit, OKX и Bitget для прямой покупки
                крипты. Комиссия обычно составляет 1-3% в зависимости от биржи
                и метода. P2P-трейдинг через банковский перевод остаётся
                наиболее выгодным по курсу.
              </p>
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
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-purple-500/10">
                <Shield className="h-5 w-5 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                Налоги на криптовалюту в Казахстане
              </h2>
            </div>
            <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Налогообложение криптовалюты в Казахстане зависит от статуса
                налогоплательщика. Физические лица обязаны платить индивидуальный
                подоходный налог (ИПН) в размере 10% от дохода, полученного при
                продаже цифровых активов. Доход рассчитывается как разница между
                ценой продажи и документально подтверждёнными расходами на
                приобретение.
              </p>
              <p>
                Для операций, проведённых через лицензированные платформы AIFC,
                может применяться специальный налоговый режим. Юридические лица
                и ИП, занимающиеся торговлей криптовалютой на профессиональной
                основе, облагаются корпоративным подоходным налогом (КПН) по
                ставке 20%. Майнинг криптовалюты облагается отдельным налогом
                на майнинг, установленным в 2022 году.
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
              Лучшие биржи для Казахстана
            </h2>
            <p className="text-[var(--text-secondary)]">
              Все биржи работают в Казахстане без ограничений и поддерживают тенге
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
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">P2P KZT</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">KYC</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">Бонус</th>
                  <th className="text-right px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {kzExchanges.map((ex, i) => (
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
                Легально ли покупать криптовалюту в Казахстане?
                <ChevronDown className="h-4 w-4 text-[var(--text-muted)] transition-transform duration-200" />
              </Accordion.Trigger>
              <Accordion.Content className="px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                Да, криптовалюта в Казахстане полностью легальна. Закон
                &laquo;О цифровых активах&raquo; устанавливает чёткие правила
                для торговли и хранения цифровых активов. AIFC выдаёт лицензии
                криптобиржам, что обеспечивает дополнительный уровень защиты
                для пользователей. Казахстан является одной из наиболее
                дружественных к крипте стран в регионе.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value="q2"
              className="rounded-xl border border-[var(--border)] overflow-hidden"
              style={{ background: "var(--gradient-card)" }}
            >
              <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[var(--text-primary)] [&[data-state=open]>svg]:rotate-180">
                Можно ли купить крипту через Kaspi Bank?
                <ChevronDown className="h-4 w-4 text-[var(--text-muted)] transition-transform duration-200" />
              </Accordion.Trigger>
              <Accordion.Content className="px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                Напрямую через Kaspi Bank купить криптовалюту нельзя, однако
                Kaspi является самым популярным методом оплаты на P2P-площадках.
                На Bybit, OKX и других биржах вы можете найти продавцов,
                принимающих оплату через Kaspi переводы. Переводы проходят
                мгновенно и без комиссии, что делает Kaspi идеальным для
                P2P-трейдинга в тенге.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value="q3"
              className="rounded-xl border border-[var(--border)] overflow-hidden"
              style={{ background: "var(--gradient-card)" }}
            >
              <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[var(--text-primary)] [&[data-state=open]>svg]:rotate-180">
                Какую биржу выбрать в Казахстане?
                <ChevronDown className="h-4 w-4 text-[var(--text-muted)] transition-transform duration-200" />
              </Accordion.Trigger>
              <Accordion.Content className="px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                Для казахстанских пользователей лучший выбор зависит от
                приоритетов. Bybit &mdash; лучший для P2P-трейдинга с тенге и
                общего функционала. MEXC подойдёт тем, кто хочет минимальные
                комиссии (0% maker). OKX отлично работает в Казахстане без
                ограничений и предлагает Web3-кошелёк. Все три биржи имеют
                русскоязычный интерфейс и поддержку.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value="q4"
              className="rounded-xl border border-[var(--border)] overflow-hidden"
              style={{ background: "var(--gradient-card)" }}
            >
              <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[var(--text-primary)] [&[data-state=open]>svg]:rotate-180">
                Нужно ли платить налоги с крипты в Казахстане?
                <ChevronDown className="h-4 w-4 text-[var(--text-muted)] transition-transform duration-200" />
              </Accordion.Trigger>
              <Accordion.Content className="px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                Да, доход от продажи криптовалюты облагается индивидуальным
                подоходным налогом (ИПН) в размере 10%. Налог рассчитывается
                с прибыли &mdash; разницы между ценой продажи и ценой покупки.
                Для операций через лицензированные платформы AIFC могут
                применяться специальные условия. Рекомендуется вести учёт всех
                операций и консультироваться с налоговым специалистом.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </section>
    </div>
  );
}
