"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Qué exchange tiene las menores comisiones?",
    answer:
      "MEXC ofrece las comisiones más bajas del mercado con 0% de comisión maker tanto en spot como en futuros. Para taker, cobra solo 0.05% en spot y 0.01% en futuros, lo que lo convierte en la opción más económica para traders activos.",
  },
  {
    question: "¿Son seguros los exchanges para latinoamericanos?",
    answer:
      "Sí, los exchanges que recomendamos son plataformas globales con millones de usuarios. Bybit, Binance, OKX y otros cuentan con medidas de seguridad como autenticación 2FA, almacenamiento en frío, fondos de seguro y auditorías de reservas. Sin embargo, siempre recomendamos usar 2FA y no dejar grandes cantidades en exchanges.",
  },
  {
    question: "¿Cuál es el mejor exchange sin KYC?",
    answer:
      "MEXC y Bybit son las mejores opciones sin KYC para usuarios de LATAM. Ambos permiten trading básico sin verificación de identidad. KuCoin también ofrece funcionalidades sin KYC hasta ciertos límites de retiro.",
  },
  {
    question: "¿Puedo usar Bybit desde Argentina, México o Colombia?",
    answer:
      "Sí, Bybit está disponible en Argentina, México, Colombia, Perú, Chile y la mayoría de países latinoamericanos. Puedes registrarte sin KYC para trading básico y depositar a través de P2P o tarjeta de crédito.",
  },
  {
    question: "¿Cómo puedo depositar pesos en un exchange?",
    answer:
      "La forma más común es usar el mercado P2P (persona a persona) disponible en Binance, Bybit y OKX. También puedes comprar cripto con tarjeta de crédito/débito, aunque las comisiones suelen ser más altas. Binance ofrece P2P con pesos argentinos (ARS), pesos mexicanos (MXN) y pesos colombianos (COP).",
  },
  {
    question: "¿Qué es el RevShare y cómo funciona?",
    answer:
      "RevShare (Revenue Share) es un modelo de afiliados donde el exchange comparte un porcentaje de las comisiones de trading generadas por los usuarios referidos. Si te registras a través de nuestros enlaces, el exchange nos paga una comisión — sin ningún costo extra para ti. Es así como financiamos este sitio.",
  },
  {
    question: "¿Cuál es el mejor exchange para principiantes en LATAM?",
    answer:
      "Para principiantes, recomendamos Bybit por su interfaz intuitiva, generosos bonos de bienvenida y la posibilidad de empezar sin KYC. Si prefieres máxima simplicidad, Coinbase es la opción más fácil pero con comisiones más altas y menor soporte LATAM.",
  },
  {
    question: "¿Qué diferencia hay entre trading spot y futuros?",
    answer:
      "En trading spot compras y vendes criptomonedas al precio actual del mercado — es lo más básico. En futuros, puedes operar con apalancamiento (multiplicar tu posición) y apostar tanto al alza como a la baja. Los futuros son más riesgosos y recomendados solo para traders con experiencia.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-section font-bold text-[var(--text-primary)] font-display mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-[var(--text-secondary)]">
            Todo lo que necesitas saber sobre exchanges de cripto en LATAM
          </p>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-[var(--border)] overflow-hidden"
              style={{ background: "var(--gradient-card)" }}
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm sm:text-base font-semibold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors group data-[state=open]:text-[var(--accent-primary)]">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 text-[var(--text-muted)] shrink-0 ml-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
