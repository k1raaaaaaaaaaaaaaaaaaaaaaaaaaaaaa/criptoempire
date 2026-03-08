"use client";

import { BarChart3, Percent, Gift, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: BarChart3,
    value: "10",
    label: "Exchanges Analizados",
  },
  {
    icon: Percent,
    value: "0.01%",
    label: "Comisiones desde",
  },
  {
    icon: Gift,
    value: "$30,000",
    label: "Bonos hasta (USDT)",
  },
  {
    icon: CalendarCheck,
    value: "Mar 2025",
    label: "Última actualización",
  },
];

export default function StatsBar() {
  return (
    <section className="py-12 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl border border-[var(--border)] p-6 text-center transition-all hover:border-[var(--accent-primary)]/30"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity glow-blue" />
              <div className="relative">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-primary)]/10">
                  <stat.icon className="h-6 w-6 text-[var(--accent-primary)]" />
                </div>
                <div className="text-2xl font-bold text-[var(--text-primary)] font-display">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-[var(--text-muted)]">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
