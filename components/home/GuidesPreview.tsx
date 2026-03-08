"use client";

import { Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

const guides = [
  {
    slug: "como-comprar-usdt-argentina",
    category: "Tutorial",
    categoryVariant: "blue" as const,
    title: "Cómo comprar USDT en Argentina paso a paso",
    excerpt:
      "Guía completa para comprar USDT desde Argentina usando P2P, transferencia bancaria o tarjeta de crédito.",
    readTime: "8 min",
  },
  {
    slug: "bybit-vs-binance",
    category: "Comparativa",
    categoryVariant: "amber" as const,
    title: "Bybit vs Binance: ¿Cuál es mejor en 2025?",
    excerpt:
      "Comparamos comisiones, seguridad, liquidez y funciones para LATAM de los dos exchanges más populares.",
    readTime: "12 min",
  },
  {
    slug: "mejores-exchanges-sin-kyc-mexico",
    category: "Rankings",
    categoryVariant: "green" as const,
    title: "Los mejores exchanges sin KYC en México",
    excerpt:
      "Descubre qué exchanges te permiten operar sin verificación de identidad desde México en 2025.",
    readTime: "6 min",
  },
];

export default function GuidesPreview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-section font-bold text-[var(--text-primary)] font-display mb-2">
              Últimas Guías
            </h2>
            <p className="text-[var(--text-secondary)]">
              Aprende a operar cripto de forma segura en Latinoamérica
            </p>
          </div>
          <Link
            href="/guias"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-[var(--accent-primary)] hover:underline"
          >
            Ver todas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((guide, i) => (
            <motion.article
              key={guide.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-hover rounded-2xl border border-[var(--border)] overflow-hidden group"
              style={{ background: "var(--gradient-card)" }}
            >
              {/* Colored top strip */}
              <div className="h-1 bg-[var(--accent-primary)]" />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant={guide.categoryVariant}>{guide.category}</Badge>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <Clock className="h-3 w-3" />
                    {guide.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] font-display mb-3 group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2">
                  {guide.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-3">
                  {guide.excerpt}
                </p>

                <Link
                  href={`/guias/${guide.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-primary)] hover:underline"
                >
                  Leer más <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="sm:hidden text-center mt-8">
          <Link
            href="/guias"
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-primary)] hover:underline"
          >
            Ver todas las guías <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
