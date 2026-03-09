import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AFFILIATE_LINKS_RU } from "@/config/affiliates-ru";
import AffiliateButton from "@/components/ui/AffiliateButton";

export const metadata: Metadata = {
  title:
    "Нулевые комиссии на криптобиржах — как торговать бесплатно в 2026 | CriptoEmpire",
  description:
    "Сравнение комиссий на криптобиржах: MEXC 0% мейкер, скидки на Bybit, OKX, Bitget, Gate.io, KuCoin. Таблица спотовых и фьючерсных комиссий, скрытые сборы и способы экономии.",
};

export default function NulevyeKomissiiPage() {
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
          <span className="text-[var(--text-secondary)]">Нулевые комиссии</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display mb-4 leading-tight">
          Нулевые комиссии на криптобиржах — как торговать бесплатно в 2026 году
        </h1>
        <p className="text-[var(--text-muted)] text-sm mb-8">
          Обновлено: март 2026 &middot; 12 мин чтения
        </p>

        <div className="prose-custom space-y-6 text-[var(--text-secondary)] leading-relaxed">
          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Можно ли торговать крипту без комиссий?
          </h2>
          <p>
            Короткий ответ — да, но с оговорками. Ни одна биржа не работает полностью бесплатно:
            площадки зарабатывают на спредах, комиссиях за вывод и фандинговых ставках.
            Однако несколько крупных бирж предлагают <strong className="text-[var(--text-primary)]">нулевые
            торговые комиссии</strong> для мейкерских ордеров или отдельных торговых пар — и этим
            можно (и нужно) пользоваться.
          </p>
          <p>
            В 2026 году лидером по минимальным комиссиям остаётся{" "}
            <Link href="/ru/birzhi/mexc" className="text-[var(--accent-primary)] hover:underline">MEXC</Link>,
            которая удерживает 0% мейкер-комиссию на споте и фьючерсах. Другие биржи предлагают
            скидки при оплате нативными токенами или повышении VIP-уровня. В этом гайде мы разберём
            все способы сэкономить на торговых сборах.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            MEXC — 0% мейкер на споте и фьючерсах
          </h2>
          <p>
            <Link href="/ru/birzhi/mexc" className="text-[var(--accent-primary)] hover:underline">MEXC</Link>{" "}
            — единственная крупная биржа, которая предлагает <strong className="text-[var(--text-primary)]">0%
            мейкер-комиссию</strong> как на спотовом, так и на фьючерсном рынке для всех пользователей
            без каких-либо условий. Тейкер-комиссия тоже одна из самых низких на рынке.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong className="text-[var(--text-primary)]">Спот:</strong> мейкер 0%, тейкер 0,05%
              (можно снизить до 0% с высоким VIP-уровнем).
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Фьючерсы:</strong> мейкер 0%, тейкер
              0,02% — одна из самых низких ставок среди всех бирж.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Без токена:</strong> в отличие от
              конкурентов, MEXC не требует покупки нативного токена для получения скидок.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Без KYC:</strong> базовые функции
              доступны без верификации, что делает биржу привлекательной для быстрого старта.
            </li>
          </ul>
          <p>
            Если ваша основная цель — минимизировать торговые расходы, MEXC является очевидным
            выбором. Особенно это актуально для активных трейдеров и скальперов, где каждая сотая
            доля процента имеет значение.
          </p>

          <div className="flex justify-center mt-6 mb-6">
            <AffiliateButton
              href={AFFILIATE_LINKS_RU.mexc}
              label="Открыть MEXC — 0% комиссии"
              variant="green"
              size="lg"
            />
          </div>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Как снизить комиссии на других биржах
          </h2>
          <p>
            Если MEXC вам не подходит по другим причинам (ликвидность, ассортимент продуктов,
            P2P-раздел), вот как минимизировать комиссии на других крупных площадках.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Bybit — скидка до 25% через MNT
          </h3>
          <p>
            <Link href="/ru/birzhi/bybit" className="text-[var(--accent-primary)] hover:underline">Bybit</Link>{" "}
            предлагает скидку <strong className="text-[var(--text-primary)]">-25%</strong> на торговые
            комиссии при оплате токеном MNT (Mantle). Базовые комиссии: спот мейкер/тейкер — 0,10%.
            С учётом скидки эффективная ставка снижается до 0,075%. Также доступна VIP-программа
            со сниженными ставками при больших объёмах торгов.
          </p>

          <div className="flex justify-center mt-4 mb-4">
            <AffiliateButton
              href={AFFILIATE_LINKS_RU.bybit}
              label="Открыть Bybit"
              variant="primary"
              size="md"
            />
          </div>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            OKX — скидка до 40% через OKB
          </h3>
          <p>
            <Link href="/ru/birzhi/okx" className="text-[var(--accent-primary)] hover:underline">OKX</Link>{" "}
            предлагает одну из самых щедрых скидок — до{" "}
            <strong className="text-[var(--text-primary)]">-40%</strong> при оплате комиссий
            токеном OKB. Базовые ставки: спот мейкер 0,08%, тейкер 0,10%. С максимальной скидкой
            OKB эффективные ставки становятся одними из самых конкурентных на рынке. OKX также
            предлагает агрессивную VIP-программу для крупных трейдеров.
          </p>

          <div className="flex justify-center mt-4 mb-4">
            <AffiliateButton
              href={AFFILIATE_LINKS_RU.okx}
              label="Открыть OKX"
              variant="primary"
              size="md"
            />
          </div>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Bitget — скидка 20% через BGB
          </h3>
          <p>
            <Link href="/ru/birzhi/bitget" className="text-[var(--accent-primary)] hover:underline">Bitget</Link>{" "}
            предлагает скидку <strong className="text-[var(--text-primary)]">-20%</strong> на
            торговые комиссии при оплате токеном BGB. Базовые ставки: спот мейкер/тейкер — 0,10%.
            С учётом скидки BGB ставка снижается до 0,08%. Кроме того, Bitget активно раздаёт
            купоны на снижение комиссий новым пользователям.
          </p>

          <div className="flex justify-center mt-4 mb-4">
            <AffiliateButton
              href={AFFILIATE_LINKS_RU.bitget}
              label="Открыть Bitget"
              variant="primary"
              size="md"
            />
          </div>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Gate.io — скидка через GT
          </h3>
          <p>
            <Link href="/ru/birzhi/gateio" className="text-[var(--accent-primary)] hover:underline">Gate.io</Link>{" "}
            предлагает скидки при удержании и оплате комиссий токеном GT. Базовые ставки: спот
            мейкер/тейкер — 0,20%, что выше средних по рынку. Однако с GT-скидкой и VIP-статусом
            ставки можно значительно снизить. Gate.io привлекателен огромным выбором альткоинов
            (более 3 700 торговых пар).
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            KuCoin — скидка 20-60% через KCS
          </h3>
          <p>
            <Link href="/ru/birzhi/kucoin" className="text-[var(--accent-primary)] hover:underline">KuCoin</Link>{" "}
            предлагает скидку <strong className="text-[var(--text-primary)]">-20%</strong> при оплате
            токеном KCS, а с VIP-статусом скидки могут достигать{" "}
            <strong className="text-[var(--text-primary)]">-60%</strong>. Базовые ставки: спот
            мейкер/тейкер — 0,10%. KuCoin также известен низкими фьючерсными комиссиями: мейкер
            0,02%, тейкер 0,06%.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            CoinEx — скидка через CET
          </h3>
          <p>
            <Link href="/ru/birzhi/coinex" className="text-[var(--accent-primary)] hover:underline">CoinEx</Link>{" "}
            позволяет оплачивать комиссии токеном CET со скидкой. Базовые ставки: спот мейкер
            0,20%, тейкер 0,20%. При использовании CET ставки снижаются. CoinEx подойдёт тем, кто
            ищет менее конкурентную среду и торгует редкими альткоинами.
          </p>

          {/* Section 4 — Comparison Table */}
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Сравнительная таблица комиссий
          </h2>
          <p>
            Ниже — сводная таблица базовых торговых комиссий на десяти популярных криптобиржах.
            Указаны ставки для обычного (не VIP) пользователя без применения токеновых скидок.
          </p>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse mt-4">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-3 px-3 text-[var(--text-primary)] font-semibold">
                    Биржа
                  </th>
                  <th className="text-center py-3 px-2 text-[var(--text-primary)] font-semibold">
                    Спот мейкер
                  </th>
                  <th className="text-center py-3 px-2 text-[var(--text-primary)] font-semibold">
                    Спот тейкер
                  </th>
                  <th className="text-center py-3 px-2 text-[var(--text-primary)] font-semibold">
                    Фьючерсы мейкер
                  </th>
                  <th className="text-center py-3 px-2 text-[var(--text-primary)] font-semibold">
                    Фьючерсы тейкер
                  </th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-3 font-medium text-[var(--text-primary)]">
                    <Link href="/ru/birzhi/mexc" className="text-[var(--accent-primary)] hover:underline">MEXC</Link>
                  </td>
                  <td className="text-center py-3 px-2 text-emerald-400 font-semibold">0%</td>
                  <td className="text-center py-3 px-2">0,05%</td>
                  <td className="text-center py-3 px-2 text-emerald-400 font-semibold">0%</td>
                  <td className="text-center py-3 px-2">0,02%</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-3 font-medium text-[var(--text-primary)]">
                    <Link href="/ru/birzhi/bybit" className="text-[var(--accent-primary)] hover:underline">Bybit</Link>
                  </td>
                  <td className="text-center py-3 px-2">0,10%</td>
                  <td className="text-center py-3 px-2">0,10%</td>
                  <td className="text-center py-3 px-2">0,02%</td>
                  <td className="text-center py-3 px-2">0,055%</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-3 font-medium text-[var(--text-primary)]">
                    <Link href="/ru/birzhi/okx" className="text-[var(--accent-primary)] hover:underline">OKX</Link>
                  </td>
                  <td className="text-center py-3 px-2">0,08%</td>
                  <td className="text-center py-3 px-2">0,10%</td>
                  <td className="text-center py-3 px-2">0,02%</td>
                  <td className="text-center py-3 px-2">0,05%</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-3 font-medium text-[var(--text-primary)]">
                    <Link href="/ru/birzhi/bitget" className="text-[var(--accent-primary)] hover:underline">Bitget</Link>
                  </td>
                  <td className="text-center py-3 px-2">0,10%</td>
                  <td className="text-center py-3 px-2">0,10%</td>
                  <td className="text-center py-3 px-2">0,02%</td>
                  <td className="text-center py-3 px-2">0,06%</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-3 font-medium text-[var(--text-primary)]">
                    <Link href="/ru/birzhi/gateio" className="text-[var(--accent-primary)] hover:underline">Gate.io</Link>
                  </td>
                  <td className="text-center py-3 px-2">0,20%</td>
                  <td className="text-center py-3 px-2">0,20%</td>
                  <td className="text-center py-3 px-2">0,015%</td>
                  <td className="text-center py-3 px-2">0,05%</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-3 font-medium text-[var(--text-primary)]">
                    <Link href="/ru/birzhi/kucoin" className="text-[var(--accent-primary)] hover:underline">KuCoin</Link>
                  </td>
                  <td className="text-center py-3 px-2">0,10%</td>
                  <td className="text-center py-3 px-2">0,10%</td>
                  <td className="text-center py-3 px-2">0,02%</td>
                  <td className="text-center py-3 px-2">0,06%</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-3 font-medium text-[var(--text-primary)]">
                    <Link href="/ru/birzhi/bingx" className="text-[var(--accent-primary)] hover:underline">BingX</Link>
                  </td>
                  <td className="text-center py-3 px-2">0,10%</td>
                  <td className="text-center py-3 px-2">0,10%</td>
                  <td className="text-center py-3 px-2">0,02%</td>
                  <td className="text-center py-3 px-2">0,05%</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-3 font-medium text-[var(--text-primary)]">
                    <Link href="/ru/birzhi/coinex" className="text-[var(--accent-primary)] hover:underline">CoinEx</Link>
                  </td>
                  <td className="text-center py-3 px-2">0,20%</td>
                  <td className="text-center py-3 px-2">0,20%</td>
                  <td className="text-center py-3 px-2">0,03%</td>
                  <td className="text-center py-3 px-2">0,05%</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-3 font-medium text-[var(--text-primary)]">
                    <Link href="/ru/birzhi/weex" className="text-[var(--accent-primary)] hover:underline">WEEX</Link>
                  </td>
                  <td className="text-center py-3 px-2">0,10%</td>
                  <td className="text-center py-3 px-2">0,10%</td>
                  <td className="text-center py-3 px-2">0,02%</td>
                  <td className="text-center py-3 px-2">0,06%</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium text-[var(--text-primary)]">
                    <Link href="/ru/birzhi/ourbit" className="text-[var(--accent-primary)] hover:underline">OurBit</Link>
                  </td>
                  <td className="text-center py-3 px-2">0,10%</td>
                  <td className="text-center py-3 px-2">0,10%</td>
                  <td className="text-center py-3 px-2">0,02%</td>
                  <td className="text-center py-3 px-2">0,06%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-2">
            * Данные актуальны на март 2026 года. Комиссии указаны для базового уровня без VIP-скидок и токеновых бонусов.
          </p>

          {/* Section 5 — Hidden Fees */}
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            Скрытые комиссии: на что обратить внимание
          </h2>
          <p>
            Торговые комиссии — только часть расходов трейдера. Существуют «скрытые» сборы, которые
            могут значительно увеличить ваши затраты. Вот на что стоит обратить внимание:
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Спред (разница между bid и ask)
          </h3>
          <p>
            Даже при нулевых комиссиях вы платите спред — разницу между ценой покупки и продажи.
            На крупных биржах с высокой ликвидностью (Bybit, OKX, Bitget) спред по основным парам
            (BTC/USDT, ETH/USDT) минимален — 0,01-0,02%. На менее ликвидных площадках и редких
            альткоинах спред может достигать 0,5-2%, полностью нивелируя экономию на комиссиях.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Комиссии за вывод (withdrawal fees)
          </h3>
          <p>
            Комиссии за вывод криптовалюты сильно различаются между биржами и сетями. Например,
            вывод USDT по сети TRC-20 на большинстве бирж стоит 1 USDT, но по сети ERC-20 может
            стоить 5-15 USDT. Всегда проверяйте комиссию за вывод перед переводом и выбирайте
            сеть с наименьшей стоимостью (TRC-20, BSC, Arbitrum, Polygon).
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Ставка финансирования (funding rate)
          </h3>
          <p>
            При торговле бессрочными фьючерсами каждые 8 часов взимается ставка финансирования
            (funding rate). Она может быть как положительной (лонги платят шортам), так и
            отрицательной. В периоды сильного тренда funding rate может достигать 0,1-0,3% за
            8 часов, что при удержании позиции в течение нескольких дней значительно превышает
            любые торговые комиссии. Обязательно учитывайте этот фактор при фьючерсной торговле.
          </p>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
            Конвертация между валютами
          </h3>
          <p>
            Некоторые биржи взимают скрытые сборы при конвертации одной криптовалюты в другую через
            функцию «Convert». Комиссия закладывается в курс и может составлять 0,5-1,5%. Для
            экономии лучше использовать спотовую торговлю через ордербук, а не функцию быстрой
            конвертации.
          </p>

          {/* Section 6 — FAQ */}
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display mt-10 mb-4">
            FAQ — часто задаваемые вопросы
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Действительно ли можно торговать вообще без комиссий?
              </h3>
              <p>
                Да, на{" "}
                <Link href="/ru/birzhi/mexc" className="text-[var(--accent-primary)] hover:underline">MEXC</Link>{" "}
                мейкерские ордера на споте и фьючерсах выполняются с нулевой комиссией. Однако
                тейкерские ордера всё равно имеют небольшую комиссию (0,02-0,05%). Полностью
                бесплатной торговли не существует — остаются спред, вывод и другие сборы.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Что выгоднее: мейкер или тейкер ордер?
              </h3>
              <p>
                Мейкер-ордер (лимитный) всегда дешевле тейкер-ордера (рыночного). Мейкер добавляет
                ликвидность в книгу ордеров, поэтому биржи поощряют его более низкими комиссиями.
                Если вы не торопитесь с исполнением — всегда ставьте лимитные ордера.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Стоит ли покупать нативный токен биржи ради скидки?
              </h3>
              <p>
                Зависит от объёмов торговли. Если вы торгуете на $10 000+ в месяц, экономия на
                комиссиях при покупке OKB, BGB или KCS может быть существенной. Для небольших
                объёмов проще выбрать биржу с изначально низкими ставками (MEXC) и не усложнять
                стратегию.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Какая биржа лучше всего подходит для скальпинга?
              </h3>
              <p>
                Для скальпинга критичны минимальные комиссии и высокая ликвидность.{" "}
                <Link href="/ru/birzhi/mexc" className="text-[var(--accent-primary)] hover:underline">MEXC</Link>{" "}
                с 0% мейкер-комиссией — лучший выбор по стоимости.{" "}
                <Link href="/ru/birzhi/bybit" className="text-[var(--accent-primary)] hover:underline">Bybit</Link>{" "}
                и{" "}
                <Link href="/ru/birzhi/okx" className="text-[var(--accent-primary)] hover:underline">OKX</Link>{" "}
                предлагают лучшую ликвидность по основным парам. Выбор зависит от ваших приоритетов.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Как рассчитать реальную стоимость сделки?
              </h3>
              <p>
                Реальная стоимость = торговая комиссия + спред + проскальзывание (для крупных
                ордеров). Для фьючерсов добавьте ставку финансирования. Для полного цикла (ввод
                → торговля → вывод) учтите комиссии за ввод и вывод. Рекомендуем вести журнал
                сделок для отслеживания реальных затрат.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-12 rounded-2xl border border-[var(--border)] p-6 sm:p-8 text-center"
          style={{ background: "var(--gradient-card)" }}
        >
          <h3 className="text-xl font-bold text-[var(--text-primary)] font-display mb-2">
            Начните торговать с нулевыми комиссиями
          </h3>
          <p className="text-[var(--text-muted)] mb-4 text-sm">
            MEXC — единственная крупная биржа с 0% мейкер-комиссией на споте и фьючерсах.
          </p>
          <AffiliateButton
            href={AFFILIATE_LINKS_RU.mexc}
            label="Открыть MEXC — 0% комиссии"
            variant="green"
            size="lg"
          />
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-xl border border-[var(--border)] p-4 text-xs text-[var(--text-muted)] leading-relaxed">
          <strong className="text-[var(--text-secondary)]">Дисклеймер:</strong> данная статья
          носит исключительно информационный характер и не является финансовой или инвестиционной
          рекомендацией. Торговля криптовалютами сопряжена с высоким риском потери средств.
          Комиссии бирж могут меняться без предварительного уведомления — всегда проверяйте
          актуальные ставки на официальных сайтах. CriptoEmpire может получать партнёрское
          вознаграждение за переходы по ссылкам на данной странице.
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
