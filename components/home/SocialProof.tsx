"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Gracias a CriptoEmpire encontré Bybit y ahorré mucho en comisiones vs lo que pagaba antes.",
    name: "Carlos M.",
    country: "Argentina",
    flag: "🇦🇷",
  },
  {
    text: "El quiz me ayudó a elegir el exchange perfecto para empezar sin tener que hacer KYC.",
    name: "Sofía R.",
    country: "México",
    flag: "🇲🇽",
  },
  {
    text: "Comparé 5 exchanges en 2 minutos. La tabla es muy clara y completa.",
    name: "Diego P.",
    country: "Colombia",
    flag: "🇨🇴",
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section font-bold text-[var(--text-primary)] font-display mb-4">
            Lo que dicen nuestros usuarios
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-[var(--border)] p-6"
              style={{ background: "var(--gradient-card)" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-primary)]/10 text-lg">
                  {t.flag}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    {t.country}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
