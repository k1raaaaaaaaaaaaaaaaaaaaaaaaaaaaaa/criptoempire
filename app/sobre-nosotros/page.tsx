import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | CriptoEmpire",
  description:
    "Conoce al equipo detrás de CriptoEmpire: investigadores independientes de criptomonedas enfocados en el mercado latinoamericano. Descubre nuestra metodología y valores.",
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display mb-8">
          Sobre Nosotros
        </h1>

        <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mt-8 mb-4">
          Quiénes Somos
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          CriptoEmpire es un proyecto independiente creado por un equipo de investigadores y entusiastas de las
          criptomonedas con un enfoque especial en América Latina. Nuestro objetivo es claro: ayudar a los usuarios
          hispanohablantes a encontrar el exchange de criptomonedas que mejor se adapte a sus necesidades.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Sabemos que el ecosistema cripto puede resultar abrumador, especialmente para quienes están comenzando. Las
          opciones son muchas, la información está dispersa y, en muchos casos, no está disponible en español o no tiene
          en cuenta las particularidades del mercado latinoamericano: métodos de pago locales, disponibilidad de pares
          en monedas regionales, soporte en español y regulaciones específicas de cada país.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Por eso nació CriptoEmpire: para ser la referencia confiable que los usuarios de LATAM necesitan al momento
          de elegir dónde comprar, vender e intercambiar criptomonedas.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mt-8 mb-4">
          Nuestra Metodología
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Cada exchange que aparece en CriptoEmpire ha sido evaluado de forma rigurosa utilizando nuestra metodología
          propia. Analizamos cinco criterios fundamentales, cada uno calificado en una escala del 1 al 10:
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-4">
          <li>
            <strong>Seguridad (1-10):</strong> Evaluamos las medidas de protección del exchange, incluyendo
            autenticación de dos factores, almacenamiento en frío de fondos, historial de incidentes de seguridad,
            seguros contra hackeos y cumplimiento regulatorio.
          </li>
          <li>
            <strong>Comisiones (1-10):</strong> Analizamos la estructura de tarifas completa: comisiones de trading
            (maker/taker), costos de depósito y retiro, spreads ocultos y descuentos disponibles por volumen o uso de
            tokens nativos.
          </li>
          <li>
            <strong>Liquidez (1-10):</strong> Medimos el volumen de trading, la profundidad del libro de órdenes y la
            disponibilidad de pares de trading relevantes para el mercado latinoamericano.
          </li>
          <li>
            <strong>Experiencia de Usuario (1-10):</strong> Valoramos la facilidad de uso de la plataforma, la calidad
            de la aplicación móvil, la disponibilidad de interfaz en español, los recursos educativos y la rapidez del
            proceso de registro y verificación.
          </li>
          <li>
            <strong>Soporte para LATAM (1-10):</strong> Este criterio es exclusivo de CriptoEmpire. Evaluamos la
            disponibilidad de métodos de pago locales (transferencias bancarias, pagos en efectivo, billeteras
            digitales), soporte al cliente en español, pares de trading con monedas latinoamericanas y presencia
            operativa en la región.
          </li>
        </ul>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          La calificación final de cada exchange es el promedio ponderado de estos cinco criterios. Revisamos y
          actualizamos nuestras evaluaciones de forma periódica para reflejar los cambios en las plataformas.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mt-8 mb-4">
          Cómo Ganamos Dinero
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          La transparencia es fundamental para nosotros, por eso queremos ser completamente honestos sobre cómo
          financiamos este proyecto. CriptoEmpire genera ingresos a través de un modelo de afiliados: cuando un usuario
          se registra en un exchange a través de uno de nuestros enlaces, podemos recibir una comisión por parte del
          exchange.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Sin embargo, es fundamental que entiendas lo siguiente:
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-4">
          <li>Las comisiones de afiliados <strong>no influyen</strong> en nuestras calificaciones ni en el orden de nuestras recomendaciones.</li>
          <li>Evaluamos exchanges con los que tenemos acuerdos de afiliado y también exchanges con los que no los tenemos.</li>
          <li>El uso de nuestros enlaces de afiliado <strong>no genera ningún costo adicional</strong> para ti como usuario.</li>
          <li>Nuestras reseñas incluyen tanto los puntos fuertes como las debilidades de cada plataforma.</li>
        </ul>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Este modelo nos permite mantener el Sitio gratuito y libre de publicidad invasiva, mientras seguimos
          ofreciendo contenido de calidad e investigaciones independientes.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mt-8 mb-4">
          Nuestro Equipo
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Detrás de CriptoEmpire hay un grupo de investigadores independientes apasionados por las criptomonedas y la
          tecnología blockchain. Nuestro equipo está compuesto por personas con experiencia en trading, análisis
          financiero, seguridad informática y desarrollo web, todos unidos por un objetivo común: hacer que el mundo
          cripto sea más accesible para la comunidad hispanohablante.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Operamos de forma anónima por razones de privacidad y seguridad, algo común en el espacio cripto. Sin embargo,
          nuestra identidad no define nuestro trabajo: lo que nos define es la calidad, rigurosidad y transparencia de
          nuestras investigaciones. Cada reseña, cada análisis y cada recomendación es el resultado de horas de
          investigación y pruebas directas con las plataformas.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mt-8 mb-4">
          Contacto
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Valoramos la opinión de nuestros lectores. Si tienes preguntas, sugerencias, correcciones o simplemente
          quieres ponerte en contacto con nosotros, escríbenos a{" "}
          <a
            href="mailto:contacto@criptoempire.com"
            className="text-[var(--accent-primary)] hover:underline"
          >
            contacto@criptoempire.com
          </a>
          . Nos encanta escuchar a nuestra comunidad y estamos siempre abiertos a mejorar.
        </p>
      </div>
    </main>
  );
}
