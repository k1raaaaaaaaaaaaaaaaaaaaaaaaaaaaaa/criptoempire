"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Bitcoin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#comparativa", label: "Comparar" },
  { href: "/exchanges", label: "Exchanges" },
  { href: "/guias", label: "Guías" },
  { href: "/promociones", label: "Promociones" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg-primary)]/80 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "h-14" : "h-16"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className={`flex items-center justify-center rounded-lg transition-all duration-300 ${
                scrolled ? "h-7 w-7" : "h-8 w-8"
              }`}
              style={{ background: "var(--gradient-cta)" }}
            >
              <Bitcoin className={`text-white transition-all ${scrolled ? "h-4 w-4" : "h-5 w-5"}`} />
            </div>
            <span className={`font-bold text-[var(--text-primary)] font-display transition-all ${scrolled ? "text-lg" : "text-xl"}`}>
              Cripto<span className="text-[var(--accent-primary)]">Empire</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-[var(--accent-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/#comparativa"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
              style={{ background: "var(--gradient-cta)" }}
            >
              Ver Mejores Exchanges
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-primary)]/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2.5 text-base font-medium rounded-lg transition-colors border-b border-[var(--border)]/30 last:border-0 ${
                  isActive(link.href)
                    ? "text-[var(--accent-primary)] bg-[var(--accent-primary)]/5"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#comparativa"
              className="block text-center rounded-xl px-5 py-3 text-sm font-semibold text-white mt-4"
              style={{ background: "var(--gradient-cta)" }}
              onClick={() => setIsOpen(false)}
            >
              Ver Mejores Exchanges
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
