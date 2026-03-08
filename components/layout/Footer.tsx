import Link from "next/link";
import { Bitcoin } from "lucide-react";

const footerLinks = {
  exchanges: [
    { href: "/exchanges/bybit", label: "Bybit" },
    { href: "/exchanges/binance", label: "Binance" },
    { href: "/exchanges/mexc", label: "MEXC" },
    { href: "/exchanges/okx", label: "OKX" },
    { href: "/exchanges/kucoin", label: "KuCoin" },
  ],
  recursos: [
    { href: "/comparar", label: "Comparar Exchanges" },
    { href: "/promociones", label: "Promociones" },
    { href: "/guias", label: "Guías" },
    { href: "/#quiz", label: "Quiz: ¿Cuál me conviene?" },
  ],
  paises: [
    { href: "/argentina", label: "🇦🇷 Argentina" },
    { href: "/mexico", label: "🇲🇽 México" },
    { href: "/colombia", label: "🇨🇴 Colombia" },
  ],
  legal: [
    { href: "#", label: "Términos de uso" },
    { href: "#", label: "Política de privacidad" },
    { href: "#", label: "Divulgación de afiliados" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "var(--gradient-cta)" }}>
                <Bitcoin className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-[var(--text-primary)] font-display">
                Cripto<span className="text-[var(--accent-primary)]">Empire</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Comparamos los mejores exchanges de criptomonedas disponibles en
              Latinoamérica para que tomes la mejor decisión.
            </p>
          </div>

          {/* Exchanges */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">Exchanges</h3>
            <ul className="space-y-2">
              {footerLinks.exchanges.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Países */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">Por País</h3>
            <ul className="space-y-2">
              {footerLinks.paises.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Country flags bar */}
        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--text-muted)]">
          <span>Disponible en:</span>
          <Link href="/argentina" className="hover:text-[var(--text-secondary)] transition-colors">🇦🇷 Argentina</Link>
          <span className="text-[var(--border)]">|</span>
          <Link href="/mexico" className="hover:text-[var(--text-secondary)] transition-colors">🇲🇽 México</Link>
          <span className="text-[var(--border)]">|</span>
          <Link href="/colombia" className="hover:text-[var(--text-secondary)] transition-colors">🇨🇴 Colombia</Link>
          <span className="text-[var(--border)]">|</span>
          <span>🇵🇪 Perú</span>
          <span className="text-[var(--border)]">|</span>
          <span>🇨🇱 Chile</span>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[var(--text-muted)]">© {new Date().getFullYear()} CriptoEmpire. Todos los derechos reservados.</p>
            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-xs text-[var(--text-muted)] text-center md:text-right max-w-lg">
                <strong>Descargo de responsabilidad:</strong> No somos asesores financieros. Invierte responsablemente. Las criptomonedas son activos volátiles y puedes perder tu inversión.
              </p>
              <p className="text-xs text-[var(--text-muted)]">Este sitio puede recibir compensación por referidos a exchanges.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
