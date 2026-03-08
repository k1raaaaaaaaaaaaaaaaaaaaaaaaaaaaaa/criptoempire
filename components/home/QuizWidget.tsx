"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import { exchanges, Exchange } from "@/data/exchanges";
import AffiliateButton from "@/components/ui/AffiliateButton";
import StarRating from "@/components/ui/StarRating";
import ExchangeLogo from "@/components/ui/ExchangeLogo";

interface QuizAnswer {
  experience?: "nuevo" | "intermedio" | "experto";
  goal?: "hold" | "spot" | "futures";
  kyc?: "no-importa" | "sin-kyc" | "max-seguridad";
}

const questions = [
  {
    id: "experience" as const,
    question: "¿Cuánto llevas en cripto?",
    options: [
      { value: "nuevo" as const, label: "🌱 Soy nuevo", desc: "Primeras semanas o meses" },
      { value: "intermedio" as const, label: "📈 Tengo experiencia", desc: "Más de 6 meses operando" },
      { value: "experto" as const, label: "🧠 Soy experto", desc: "Años de trading activo" },
    ],
  },
  {
    id: "goal" as const,
    question: "¿Qué quieres hacer?",
    options: [
      { value: "hold" as const, label: "💎 Comprar y guardar", desc: "Inversión a largo plazo" },
      { value: "spot" as const, label: "📊 Trading spot", desc: "Comprar/vender activamente" },
      { value: "futures" as const, label: "⚡ Futuros y apalancamiento", desc: "Trading avanzado" },
    ],
  },
  {
    id: "kyc" as const,
    question: "¿El KYC te importa?",
    options: [
      { value: "no-importa" as const, label: "😌 No me importa", desc: "Verifico sin problema" },
      { value: "sin-kyc" as const, label: "🔒 Prefiero sin KYC", desc: "Privacidad es importante" },
      { value: "max-seguridad" as const, label: "🛡️ Máxima seguridad", desc: "Prefiero exchanges regulados" },
    ],
  },
];

function getRecommendations(answers: QuizAnswer): Exchange[] {
  const scored = exchanges.map((ex) => {
    let score = 0;

    // Experience scoring
    if (answers.experience === "nuevo") {
      score += ex.scores.ux * 2;
      if (ex.id === "coinbase") score += 10;
      if (ex.id === "binance") score += 5;
    } else if (answers.experience === "intermedio") {
      score += ex.scores.ux + ex.scores.fees;
    } else {
      score += ex.scores.fees * 2 + ex.scores.liquidity;
    }

    // Goal scoring
    if (answers.goal === "hold") {
      score += ex.scores.security * 2;
      if (ex.features.staking) score += 5;
    } else if (answers.goal === "spot") {
      score += ex.scores.fees * 2 + ex.scores.liquidity;
    } else {
      score += ex.scores.liquidity * 2;
      if (ex.features.futures) score += 10;
      else score -= 20;
    }

    // KYC scoring
    if (answers.kyc === "sin-kyc") {
      if (ex.latam.kycRequired === "No") score += 15;
      else if (ex.latam.kycRequired === "Completo") score -= 10;
    } else if (answers.kyc === "max-seguridad") {
      score += ex.scores.security * 2;
      if (ex.latam.kycRequired === "Completo") score += 5;
    }

    // LATAM bonus
    score += ex.scores.latamSupport;

    return { exchange: ex, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.exchange);
}

export default function QuizWidget() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer>({});
  const [results, setResults] = useState<Exchange[] | null>(null);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setResults(getRecommendations(newAnswers));
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResults(null);
  };

  return (
    <section id="quiz" className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[var(--accent-primary)]/30 p-6 sm:p-10 overflow-hidden"
          style={{ background: "var(--gradient-card)" }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-display mb-2">
              ¿Qué exchange es para ti?
            </h2>
            <p className="text-[var(--text-secondary)]">
              Encuentra tu exchange ideal en 3 preguntas
            </p>
          </div>

          {/* Progress */}
          {!results && (
            <div className="flex gap-2 mb-8">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i <= step ? "bg-[var(--accent-primary)]" : "bg-[var(--border)]"
                  }`}
                />
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {!results ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 text-center">
                  {questions[step].question}
                </h3>
                <div className="grid gap-3">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswer(questions[step].id, opt.value)}
                      className="flex items-center gap-4 rounded-xl border border-[var(--border)] p-4 text-left transition-all hover:border-[var(--accent-primary)]/50 hover:bg-[var(--bg-hover)] group"
                    >
                      <span className="text-2xl">{opt.label.split(" ")[0]}</span>
                      <div>
                        <div className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                          {opt.label.split(" ").slice(1).join(" ")}
                        </div>
                        <div className="text-sm text-[var(--text-muted)]">
                          {opt.desc}
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-[var(--text-muted)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 text-center">
                  🎯 Tus exchanges recomendados
                </h3>
                <div className="grid gap-4">
                  {results.map((exchange, i) => (
                    <div
                      key={exchange.id}
                      className={`flex items-center gap-4 rounded-xl border p-4 ${
                        i === 0
                          ? "border-[var(--accent-primary)]/50 bg-[var(--accent-primary)]/5"
                          : "border-[var(--border)]"
                      }`}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-bold text-sm shrink-0">
                        #{i + 1}
                      </div>
                      <ExchangeLogo exchangeId={exchange.id} size={28} />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[var(--text-primary)]">
                          {exchange.name}
                        </div>
                        <StarRating rating={exchange.rating} size={12} />
                      </div>
                      <AffiliateButton
                        href={exchange.bonus.affiliateUrl}
                        label="Ver Exchange"
                        variant={i === 0 ? "primary" : "secondary"}
                        size="sm"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 mx-auto mt-6 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                >
                  <RotateCcw className="h-4 w-4" />
                  Repetir quiz
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
