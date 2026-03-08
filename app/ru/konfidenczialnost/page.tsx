import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | CriptoEmpire",
  description: "Политика конфиденциальности сайта CriptoEmpire — как мы обрабатываем ваши данные.",
};

export default function KonfidenczialnostPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)] font-display mb-8">
          Политика конфиденциальности
        </h1>
        <div className="prose-custom space-y-6 text-sm text-[var(--text-secondary)] leading-relaxed">
          <p><em>Последнее обновление: март 2026</em></p>

          <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8">1. Какие данные мы собираем</h2>
          <p>
            CriptoEmpire собирает минимум данных. Мы не требуем регистрации и не собираем персональные данные.
            Автоматически собираются: IP-адрес, тип браузера, страна посещения, просмотренные страницы —
            через Google Analytics для улучшения сайта.
          </p>

          <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8">2. Cookies</h2>
          <p>
            Мы используем файлы cookie для аналитики (Google Analytics) и для сохранения ваших предпочтений
            (например, закрытие предупреждающего баннера). Вы можете отключить cookies в настройках браузера.
          </p>

          <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8">3. Партнёрские ссылки и отслеживание</h2>
          <p>
            При переходе по партнёрским ссылкам на криптобиржи, эти биржи могут устанавливать собственные cookie
            для отслеживания реферала. Мы не контролируем политику конфиденциальности сторонних сайтов.
          </p>

          <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8">4. Как мы используем данные</h2>
          <p>
            Собранные данные используются исключительно для: анализа посещаемости сайта, улучшения контента
            и пользовательского опыта, выявления технических проблем. Мы не продаём и не передаём
            данные третьим лицам, кроме сервисов аналитики.
          </p>

          <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8">5. Хранение данных</h2>
          <p>
            Данные аналитики хранятся на серверах Google Analytics в соответствии с их политикой
            конфиденциальности. Мы не храним персональные данные на собственных серверах.
          </p>

          <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8">6. Ваши права</h2>
          <p>
            Вы имеете право запросить удаление данных, связанных с вашим посещением. Для этого
            свяжитесь с нами по электронной почте. Вы также можете использовать режим инкогнито
            или блокировщики трекеров для анонимного просмотра.
          </p>

          <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8">7. Изменения политики</h2>
          <p>
            Мы можем обновлять эту политику время от времени. Рекомендуем периодически проверять
            данную страницу на предмет изменений.
          </p>
        </div>
      </div>
    </div>
  );
}
