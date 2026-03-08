"use client";

import { BarChart3, RefreshCw, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: BarChart3,
    title: "Datos Verificados",
    description:
      "Cada exchange es analizado con datos reales de comisiones, seguridad y funcionalidades. No inventamos ratings — los basamos en hechos.",
  },
  {
    icon: RefreshCw,
    title: "Actualizado Mensualmente",
    description:
      "Revisamos los datos cada mes para que siempre tengas información actualizada sobre comisiones, bonos y disponibilidad en tu país.",
  },
  {
    icon: DollarSign,
    title: "Gratis Para Ti",
    description:
      "Este sitio se financia a través de enlaces de afiliados. Cuando abres una cuenta, podemos recibir una comisión — sin costo extra para ti.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section font-bold text-[var(--text-primary)] font-display mb-4">
            ¿Por qué confiar en nosotros?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8 text-center"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent-primary)]/10">
                <item.icon className="h-7 w-7 text-[var(--accent-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-display mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
