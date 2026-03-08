import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, CreditCard, Scale, Landmark } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { exchangesRU } from "@/data/exchanges-ru";
import ExchangeLogo from "@/components/ui/ExchangeLogo";

import { AFFILIATE_LINKS_RU } from "@/config/affiliates-ru";
import AffiliateButton from "@/components/ui/AffiliateButton";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Криптобиржи для Беларуси 2026 | CriptoEmpire",
  description:
    "Лучшие криптобиржи для Беларуси в 2026 году. ПВТ, декрет о криптовалютах, покупка за BYN, налоговые льготы. Актуальный рейтинг бирж.",
  keywords:
    "криптобиржа беларусь, купить биткоин беларусь, пвт крипто, декрет криптовалюты беларусь, купить крипту BYN",
};

export default function BelarusPage() {
  const byExchanges = exchangesRU.filter((ex) =>
    ex.cis.countries.includes("BY")
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="green" className="mb-6">
            Крипто легально с 2017 года
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] font-display mb-6 leading-tight">
            Криптобиржи для{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Беларуси 2026
            </span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Беларусь стала одной из первых стран в мире, легализовавших
            криптовалюту на государственном уровне. Разбираемся, какие биржи
            лучше всего подходят для белорусских пользователей и как покупать
            крипту за белорусские рубли.
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
                  Правовой статус крипто в Беларуси
                </h2>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Беларусь стала пионером крипторегулирования благодаря Декрету
                  Президента №8 &laquo;О развитии цифровой экономики&raquo;,
                  подписанному в декабре 2017 года и вступившему в силу в марте
                  2018 года. Этот декрет полностью легализовал криптовалюты,
                  токены, смарт-контракты и майнинг на территории Беларуси.
                  Декрет предоставил резидентам Парка высоких технологий (ПВТ)
                  право осуществлять деятельность с криптовалютами.
                </p>
                <p>
                  Парк высоких технологий (ПВТ) &mdash; это специальная
                  экономическая зона в Минске, резиденты которой получают
                  налоговые льготы и право работать с цифровыми активами.
                  Криптобиржа currency.com стала первым резидентом ПВТ,
                  получившим лицензию на торговлю токенизированными активами.
                  ПВТ обеспечивает правовую базу для деятельности с
                  криптовалютами, которая недоступна в большинстве стран СНГ.
                </p>
                <p>
                  Одной из ключевых особенностей белорусского законодательства
                  является освобождение физических лиц от подоходного налога на
                  доходы от операций с криптовалютами. Эта льгота была
                  первоначально установлена до 2023 года, а затем продлена.
                  Также освобождены от налогов операции по майнингу и созданию
                  токенов для физических лиц.
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl border border-[var(--border)] p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-emerald-500/10">
                  <Landmark className="h-5 w-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                  ПВТ и криптолицензирование
                </h2>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Парк высоких технологий (ПВТ) играет центральную роль в
                  криптоэкосистеме Беларуси. Резиденты ПВТ &mdash; это компании,
                  получившие специальный статус, позволяющий им работать с
                  цифровыми активами в рамках белорусского законодательства.
                  ПВТ контролирует деятельность криптоплатформ и защищает
                  интересы пользователей.
                </p>
                <p>
                  Для пользователей важно понимать: хотя международные биржи
                  (Bybit, MEXC, OKX) формально не являются резидентами ПВТ,
                  белорусские граждане могут свободно использовать эти платформы.
                  Декрет №8 не запрещает физическим лицам торговать на
                  иностранных биржах. Однако для максимальной правовой защиты
                  рекомендуется использовать платформы с белорусской лицензией
                  для крупных операций.
                </p>
                <p>
                  В 2025 году ПВТ обновил требования к криптоплатформам, усилив
                  правила KYC/AML и введя обязательное хранение данных о
                  транзакциях в течение 5 лет. Это соответствует глобальным
                  тенденциям ужесточения регулирования и направлено на борьбу
                  с отмыванием денег через криптовалюту.
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
                Способы оплаты в белорусских рублях (BYN)
              </h2>
            </div>
            <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Покупка криптовалюты за белорусские рубли (BYN) возможна
                несколькими способами. Наиболее популярным остаётся P2P-трейдинг,
                где пользователи обмениваются криптовалютой напрямую, используя
                банковские переводы в BYN. Биржи Bybit и OKX предлагают
                P2P-площадки с поддержкой белорусских рублей.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Банковские карты</strong>{" "}
                &mdash; карты Visa и Mastercard белорусских банков (Беларусбанк,
                Приорбанк, БелВЭБ, МТБанк) могут использоваться на некоторых
                биржах для прямой покупки криптовалюты. Однако из-за ограничений
                со стороны международных платёжных систем, связанных с
                санкциями, не все карты работают на всех платформах. Рекомендуется
                проверять доступность перед попыткой оплаты.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">ЕРИП (Единое расчётное информационное пространство)</strong>{" "}
                &mdash; некоторые местные обменники, имеющие статус резидента
                ПВТ, принимают оплату через ЕРИП. Это удобно для пользователей,
                привыкших к оплате коммунальных услуг и других платежей через
                эту систему. Однако курс обмена в таких сервисах обычно менее
                выгодный, чем на P2P-площадках международных бирж.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">P2P через мессенджеры</strong>{" "}
                &mdash; в Беларуси также распространены сделки через Telegram-боты
                и чаты. Однако такие сделки не защищены эскроу-системой и несут
                высокий риск мошенничества. Настоятельно рекомендуем использовать
                только P2P-площадки крупных бирж с системой арбитража.
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
              Лучшие биржи для Беларуси
            </h2>
            <p className="text-[var(--text-secondary)]">
              Сравнение криптобирж, доступных для белорусских пользователей
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
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">P2P BYN</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">KYC</th>
                  <th className="text-center px-4 py-3 text-[var(--text-muted)] font-medium">Бонус</th>
                  <th className="text-right px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {byExchanges.map((ex, i) => (
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
                Нужно ли платить налоги с криптовалюты в Беларуси?
                <ChevronDown className="h-4 w-4 text-[var(--text-muted)] transition-transform duration-200" />
              </Accordion.Trigger>
              <Accordion.Content className="px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                Физические лица в Беларуси освобождены от подоходного налога
                на доходы от операций с криптовалютами согласно Декрету №8.
                Эта льгота была продлена и действует на данный момент. Однако
                юридические лица и ИП, занимающиеся криптодеятельностью на
                профессиональной основе, должны быть резидентами ПВТ и
                соблюдать соответствующее налоговое законодательство.
                Рекомендуем следить за обновлениями, так как налоговый режим
                может измениться.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value="q2"
              className="rounded-xl border border-[var(--border)] overflow-hidden"
              style={{ background: "var(--gradient-card)" }}
            >
              <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[var(--text-primary)] [&[data-state=open]>svg]:rotate-180">
                Какие биржи работают в Беларуси без ограничений?
                <ChevronDown className="h-4 w-4 text-[var(--text-muted)] transition-transform duration-200" />
              </Accordion.Trigger>
              <Accordion.Content className="px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                Большинство международных бирж работают в Беларуси без
                серьёзных ограничений. Bybit, MEXC, Bitget, Gate.io и KuCoin
                доступны белорусским пользователям. OKX также работает в
                Беларуси, в отличие от России, где требуется VPN. Однако
                из-за санкционного давления некоторые функции (например,
                фиатный ввод через банковские карты) могут быть ограничены
                на отдельных платформах.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value="q3"
              className="rounded-xl border border-[var(--border)] overflow-hidden"
              style={{ background: "var(--gradient-card)" }}
            >
              <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[var(--text-primary)] [&[data-state=open]>svg]:rotate-180">
                Как купить биткоин за белорусские рубли?
                <ChevronDown className="h-4 w-4 text-[var(--text-muted)] transition-transform duration-200" />
              </Accordion.Trigger>
              <Accordion.Content className="px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                Самый удобный способ &mdash; P2P-трейдинг на Bybit или OKX.
                Зарегистрируйтесь на бирже, перейдите в раздел P2P, выберите
                валюту BYN, найдите продавца с хорошей репутацией и создайте
                ордер. Оплатите через банковский перевод (Беларусбанк, Приорбанк,
                МТБанк) и получите USDT. Затем обменяйте USDT на BTC на
                спотовом рынке. Альтернативно, можно воспользоваться
                лицензированными обменниками &mdash; резидентами ПВТ.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value="q4"
              className="rounded-xl border border-[var(--border)] overflow-hidden"
              style={{ background: "var(--gradient-card)" }}
            >
              <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[var(--text-primary)] [&[data-state=open]>svg]:rotate-180">
                Что такое ПВТ и зачем он нужен для крипто?
                <ChevronDown className="h-4 w-4 text-[var(--text-muted)] transition-transform duration-200" />
              </Accordion.Trigger>
              <Accordion.Content className="px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                Парк высоких технологий (ПВТ) &mdash; это специальная
                экономическая зона в Минске, созданная для IT-компаний.
                Благодаря Декрету №8, резиденты ПВТ могут легально
                осуществлять деятельность с криптовалютами: создавать
                криптобиржи, обменники, кошельки и другие сервисы. ПВТ
                обеспечивает правовую защиту как для компаний, так и для
                их пользователей. Для обычных пользователей статус резидента
                ПВТ не требуется &mdash; вы можете свободно торговать
                криптовалютой как физическое лицо.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </section>
    </div>
  );
}
