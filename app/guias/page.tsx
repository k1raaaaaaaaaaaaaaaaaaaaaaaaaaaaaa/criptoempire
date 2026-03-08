import { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Guías de Criptomonedas para Latinoamérica 2025 | CriptoCompara",
  description:
    "Aprende a comprar, vender y operar criptomonedas de forma segura en Argentina, México, Colombia y más. Guías paso a paso actualizadas.",
};

const guides = [
  {
    slug: "como-comprar-usdt-argentina",
    category: "Tutorial",
    categoryVariant: "blue" as const,
    title: "Cómo comprar USDT en Argentina paso a paso",
    excerpt:
      "Guía completa para comprar USDT desde Argentina usando P2P, transferencia bancaria o tarjeta de crédito en 2025.",
    readTime: "8 min",
    live: true,
  },
  {
    slug: "bybit-vs-binance",
    category: "Comparativa",
    categoryVariant: "amber" as const,
    title: "Bybit vs Binance: ¿Cuál es mejor en 2025?",
    excerpt:
      "Comparamos comisiones, seguridad, liquidez y funciones para LATAM de los dos exchanges más populares.",
    readTime: "12 min",
    live: true,
  },
  {
    slug: "mejores-exchanges-sin-kyc-mexico",
    category: "Rankings",
    categoryVariant: "green" as const,
    title: "Los mejores exchanges sin KYC en México",
    excerpt:
      "Descubre qué exchanges te permiten operar sin verificación de identidad desde México en 2025.",
    readTime: "6 min",
    live: true,
  },
  {
    slug: "como-hacer-trading-futuros",
    category: "Tutorial",
    categoryVariant: "blue" as const,
    title: "Guía de trading de futuros para principiantes",
    excerpt:
      "Todo lo que necesitas saber sobre futuros de criptomonedas: apalancamiento, márgenes, liquidaciones y más.",
    readTime: "15 min",
    live: false,
  },
  {
    slug: "mejores-exchanges-colombia",
    category: "Rankings",
    categoryVariant: "green" as const,
    title: "Los 5 mejores exchanges para Colombia en 2025",
    excerpt:
      "Análisis de los exchanges que mejor funcionan en Colombia: P2P en pesos colombianos, comisiones y seguridad.",
    readTime: "10 min",
    live: false,
  },
  {
    slug: "que-es-staking-cripto",
    category: "Educación",
    categoryVariant: "purple" as const,
    title: "¿Qué es el staking de criptomonedas y cómo funciona?",
    excerpt:
      "Aprende a generar ingresos pasivos con tus criptomonedas a través del staking. Mejores plataformas y rendimientos.",
    readTime: "7 min",
    live: false,
  },
];

export default function GuiasPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[var(--text-primary)] font-display mb-4">
            Guías y Tutoriales
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Aprende a operar criptomonedas de forma segura en Latinoamérica.
            Guías paso a paso para principiantes y expertos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide) => {
            const content = (
              <>
                <div className="h-1 bg-[var(--accent-primary)]" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant={guide.categoryVariant}>{guide.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                      <Clock className="h-3 w-3" />
                      {guide.readTime}
                    </div>
                  </div>

                  <h2 className="text-lg font-bold text-[var(--text-primary)] font-display mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                    {guide.title}
                  </h2>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {guide.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-primary)]">
                    {guide.live ? "Leer más" : "Próximamente"}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </>
            );

            if (guide.live) {
              return (
                <Link
                  key={guide.slug}
                  href={`/guias/${guide.slug}`}
                  className="card-hover rounded-2xl border border-[var(--border)] overflow-hidden group block"
                  style={{ background: "var(--gradient-card)" }}
                >
                  {content}
                </Link>
              );
            }

            return (
              <article
                key={guide.slug}
                className="rounded-2xl border border-[var(--border)] overflow-hidden opacity-70"
                style={{ background: "var(--gradient-card)" }}
              >
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
