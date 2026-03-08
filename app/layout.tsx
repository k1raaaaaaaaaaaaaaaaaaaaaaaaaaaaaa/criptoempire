import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mejores Exchanges de Criptomonedas en Latinoamérica 2026 | CriptoEmpire",
  description:
    "Compara los mejores exchanges de criptomonedas disponibles en Argentina, México, Colombia, Perú y Chile. Análisis de comisiones, seguridad y bonos de bienvenida. Actualizado 2026.",
  keywords:
    "mejor exchange cripto, bybit vs binance, exchange sin kyc, comprar bitcoin argentina, comprar bitcoin méxico, exchange criptomonedas latinoamérica",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "CriptoEmpire",
    title: "Mejores Exchanges de Criptomonedas en Latinoamérica 2026",
    description:
      "Compara comisiones, bonos y seguridad de los 10 exchanges más populares en LATAM.",
  },
  verification: {
    google: "Z-OQ2cG0J_yEr3hEI2-G6ya9K42mAZXKL0dMxmz0Clc",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}
      >
        <GoogleAnalytics />
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CriptoEmpire",
              description:
                "Comparativa de exchanges de criptomonedas para Latinoamérica",
              url: "https://criptoempire.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://criptoempire.com/buscar?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
