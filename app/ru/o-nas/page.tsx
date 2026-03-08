import { Metadata } from "next";
import Link from "next/link";
import { Shield, TrendingUp, Users, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "О нас — CriptoEmpire | Сравнение криптобирж для СНГ",
  description: "Узнайте о CriptoEmpire — независимом ресурсе для сравнения криптовалютных бирж для России и стран СНГ.",
};

export default function ONasPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)] font-display mb-8">
          О CriptoEmpire
        </h1>

        <div className="space-y-8 text-sm text-[var(--text-secondary)] leading-relaxed">
          <p className="text-base">
            CriptoEmpire — независимый ресурс для сравнения криптовалютных бирж, ориентированный на
            русскоязычных пользователей из России, Казахстана, Беларуси и Украины.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Shield, title: "Независимость", desc: "Наши рейтинги основаны на реальном тестировании, а не на размере партнёрских выплат" },
              { icon: TrendingUp, title: "Актуальность", desc: "Мы регулярно проверяем доступность бирж из России и обновляем информацию" },
              { icon: Users, title: "Для СНГ", desc: "Фокус на P2P с рублями, тенге, гривной и способы обхода ограничений" },
              { icon: Eye, title: "Прозрачность", desc: "Честно раскрываем партнёрские отношения и методологию оценки" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[var(--border)] p-5"
                style={{ background: "var(--gradient-card)" }}
              >
                <item.icon className="h-5 w-5 text-[var(--accent-primary)] mb-3" />
                <h3 className="font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                <p className="text-[var(--text-muted)] text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8">Наша методология</h2>
          <p>
            Каждую биржу мы оцениваем по пяти критериям: безопасность, комиссии, ликвидность,
            удобство использования и поддержка СНГ-региона. Оценка основана на реальном использовании
            платформ, анализе открытых данных и отзывов пользователей.
          </p>
          <p>
            Мы регулярно проверяем VPN-статус каждой биржи для России, тестируем P2P-рынки с рублями
            и обновляем информацию о способах ввода и вывода средств.
          </p>

          <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8">Партнёрская программа</h2>
          <p>
            CriptoEmpire участвует в партнёрских программах криптовалютных бирж. Это означает, что мы
            можем получать комиссию за регистрацию пользователей по нашим реферальным ссылкам.
          </p>
          <p>
            <strong className="text-[var(--text-primary)]">Важно:</strong> партнёрские отношения не влияют на наши
            рейтинги и обзоры. Мы оцениваем биржи по единой методологии вне зависимости от коммерческих
            соглашений. Биржа с лучшими партнёрскими условиями не получит более высокий рейтинг.
          </p>

          <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8">Связаться с нами</h2>
          <p>
            Если у вас есть вопросы, предложения или вы заметили неточность в наших материалах —
            пожалуйста, свяжитесь с нами. Мы ценим обратную связь и стремимся предоставлять
            максимально точную информацию.
          </p>

          <div className="flex gap-4 pt-4">
            <Link
              href="/ru/birzhi"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
              style={{ background: "var(--gradient-cta)" }}
            >
              Смотреть рейтинг бирж
            </Link>
            <Link
              href="/ru/gajdy"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold border border-[var(--accent-primary)] text-[var(--accent-primary)]"
            >
              Читать гайды
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
