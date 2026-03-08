"use client";

import { useState } from "react";
import Link from "next/link";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg-primary)]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--gradient-cta)]" style={{ background: "var(--gradient-cta)" }}>
              <Bitcoin className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[var(--text-primary)] font-display">
              Cripto<span className="text-[var(--accent-primary)]">Compara</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
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
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] rounded-lg transition-colors"
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
