"use client";

import { useEffect, useRef, useState } from "react";
import { BarChart3, Percent, Gift, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

function useCountUp(target: number, duration = 1500, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!startOnView) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  return { count, ref };
}

const stats = [
  { icon: BarChart3, target: 10, prefix: "", suffix: "", label: "Exchanges Analizados" },
  { icon: Percent, target: 0, prefix: "", suffix: "", label: "Comisiones desde", display: "0.01%" },
  { icon: Gift, target: 30000, prefix: "$", suffix: "", label: "Bonos hasta (USDT)" },
  { icon: CalendarCheck, target: 0, prefix: "", suffix: "", label: "Última actualización", display: "Mar 2026" },
];

export default function StatsBar() {
  return (
    <section className="py-12 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  const hasCountUp = stat.target > 0;
  const { count, ref } = useCountUp(stat.target);

  const displayValue = stat.display
    ? stat.display
    : `${stat.prefix}${hasCountUp ? count.toLocaleString("en-US") : "0"}${stat.suffix}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      ref={ref}
      className="group relative rounded-2xl border border-[var(--border)] p-6 text-center transition-all hover:border-[var(--accent-primary)]/30"
      style={{ background: "var(--gradient-card)" }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity glow-blue" />
      <div className="relative">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-primary)]/10">
          <stat.icon className="h-6 w-6 text-[var(--accent-primary)]" />
        </div>
        <div className="text-2xl font-bold text-[var(--text-primary)] font-display">
          {displayValue}
        </div>
        <div className="mt-1 text-sm text-[var(--text-muted)]">{stat.label}</div>
      </div>
    </motion.div>
  );
}
