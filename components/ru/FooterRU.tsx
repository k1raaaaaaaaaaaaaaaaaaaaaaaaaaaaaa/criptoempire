import Link from "next/link";
import { Bitcoin } from "lucide-react";

const exchangeLinks = [
  { href: "/ru/birzhi/bybit", label: "Bybit" },
  { href: "/ru/birzhi/mexc", label: "MEXC" },
  { href: "/ru/birzhi/okx", label: "OKX" },
  { href: "/ru/birzhi/bitget", label: "Bitget" },
  { href: "/ru/birzhi/gateio", label: "Gate.io" },
  { href: "/ru/birzhi/kucoin", label: "KuCoin" },
];

const countryLinks = [
  { href: "/ru/strany/rossiya", label: "Россия" },
  { href: "/ru/strany/kazakhstan", label: "Казахстан" },
  { href: "/ru/strany/belarus", label: "Беларусь" },
];

const guideLinks = [
  { href: "/ru/gajdy/kak-kupit-bitcoin-v-rossii", label: "Как купить Bitcoin" },
  { href: "/ru/gajdy/bybit-bez-vpn", label: "Bybit без VPN" },
  { href: "/ru/gajdy/kak-vyvesti-kriptu-v-rubli", label: "Вывод в рубли" },
  { href: "/ru/gajdy/p2p-trading-rossiya", label: "P2P трейдинг" },
  { href: "/ru/gajdy/nalog-na-kriptu-rossiya", label: "Налоги на крипту" },
  { href: "/ru/gajdy/luchshie-birzhi-kazahstan", label: "Биржи Казахстана" },
];

const legalLinks = [
  { href: "/ru/usloviya", label: "Условия использования" },
  { href: "/ru/konfidenczialnost", label: "Конфиденциальность" },
  { href: "/ru/o-nas", label: "О нас" },
];

export default function FooterRU() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/ru" className="flex items-center gap-2 mb-4">
              <div
                className="flex items-center justify-center h-8 w-8 rounded-lg"
                style={{ background: "var(--gradient-cta)" }}
              >
                <Bitcoin className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-[var(--text-primary)] font-display">
                Cripto<span className="text-[var(--accent-primary)]">Empire</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Сравнение криптобирж для России и СНГ. Актуальные обзоры, рейтинги и гайды.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Биржи</h3>
            <ul className="space-y-2.5">
              {exchangeLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">По странам</h3>
            <ul className="space-y-2.5">
              {countryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Гайды</h3>
            <ul className="space-y-2.5">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Правовая информация</h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-3xl">
            <strong>Предупреждение:</strong> CriptoEmpire содержит партнёрские ссылки. Мы можем получать комиссию за регистрацию по нашим ссылкам — это не влияет на наши обзоры и рейтинги. Торговля криптовалютами связана с высоким риском потери капитала. Инвестируйте только те средства, которые готовы потерять.
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-4">
            © 2026 CriptoEmpire. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
