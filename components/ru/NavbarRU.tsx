"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Bitcoin, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/ru", label: "Главная" },
  { href: "/ru/birzhi", label: "Биржи" },
  { href: "/ru/sravnit", label: "Сравнить" },
  { href: "/ru/gajdy", label: "Гайды" },
];

const countryLinks = [
  { href: "/ru/strany/rossiya", label: "Россия" },
  { href: "/ru/strany/kazakhstan", label: "Казахстан" },
  { href: "/ru/strany/belarus", label: "Беларусь" },
];

export default function NavbarRU() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/ru") return pathname === "/ru";
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
          <Link href="/ru" className="flex items-center gap-2 group">
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

            <div className="relative">
              <button
                onClick={() => setCountryOpen(!countryOpen)}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  pathname.startsWith("/ru/strany")
                    ? "text-[var(--accent-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                По странам
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${countryOpen ? "rotate-180" : ""}`} />
              </button>
              {countryOpen && (
                <div className="absolute top-full mt-2 right-0 w-44 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] shadow-xl py-1">
                  {countryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
                      onClick={() => setCountryOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs">
              <Link href="/" className="px-2 py-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                🇪🇸 ES
              </Link>
              <span className="text-[var(--border)]">|</span>
              <span className="px-2 py-1 rounded text-[var(--accent-primary)] font-semibold">
                🇷🇺 RU
              </span>
            </div>
            <Link
              href="/ru/birzhi"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
              style={{ background: "var(--gradient-cta)" }}
            >
              Лучшие Биржи
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Меню"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

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
            <div className="border-b border-[var(--border)]/30 pb-2 mb-2">
              <p className="px-3 py-1 text-xs text-[var(--text-muted)] uppercase tracking-wider">По странам</p>
              {countryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2 px-3 py-2">
              <Link href="/" className="text-sm text-[var(--text-muted)]" onClick={() => setIsOpen(false)}>🇪🇸 Español</Link>
              <span className="text-[var(--border)]">|</span>
              <span className="text-sm text-[var(--accent-primary)] font-semibold">🇷🇺 Русский</span>
            </div>
            <Link
              href="/ru/birzhi"
              className="block text-center rounded-xl px-5 py-3 text-sm font-semibold text-white mt-4"
              style={{ background: "var(--gradient-cta)" }}
              onClick={() => setIsOpen(false)}
            >
              Лучшие Биржи
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
