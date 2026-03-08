import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | CriptoEmpire",
  description:
    "Política de privacidad de CriptoEmpire. Conoce cómo recopilamos, usamos y protegemos tu información al visitar nuestro comparador de exchanges de criptomonedas.",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-[var(--text-muted)] mb-8">
          Última actualización: Marzo 2026
        </p>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display mb-8">
          Política de Privacidad
        </h1>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          En CriptoEmpire nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política de Privacidad
          describe qué información recopilamos, cómo la utilizamos y qué derechos tienes como usuario. Al utilizar
          nuestro sitio web (en adelante, &quot;el Sitio&quot;), aceptas las prácticas descritas en esta política.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mt-8 mb-4">
          Información que Recopilamos
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          CriptoEmpire recopila únicamente datos analíticos anónimos con el fin de mejorar la experiencia del usuario y
          la calidad de nuestro contenido. La información que podemos recopilar incluye:
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-4">
          <li>Datos de navegación anónimos: páginas visitadas, tiempo de permanencia, fuente de tráfico y tipo de dispositivo.</li>
          <li>Datos técnicos: tipo de navegador, sistema operativo, resolución de pantalla e idioma del navegador.</li>
          <li>Datos de interacción: clics en enlaces, uso de funciones de comparación y búsquedas realizadas dentro del Sitio.</li>
        </ul>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          <strong>No vendemos, alquilamos ni compartimos datos personales con terceros con fines comerciales.</strong>{" "}
          No recopilamos nombres, direcciones de correo electrónico ni información financiera a menos que el usuario nos
          la proporcione voluntariamente a través de nuestro correo de contacto. En caso de que nos contactes por correo
          electrónico, tu dirección será utilizada exclusivamente para responder a tu consulta.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mt-8 mb-4">
          Uso de Cookies
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          El Sitio utiliza cookies y tecnologías similares para mejorar tu experiencia de navegación. Las cookies que
          empleamos se clasifican en las siguientes categorías:
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-4">
          <li>
            <strong>Cookies funcionales:</strong> Son necesarias para el correcto funcionamiento del Sitio, como recordar
            tus preferencias de tema (modo claro u oscuro) y configuraciones de idioma.
          </li>
          <li>
            <strong>Cookies analíticas (Google Analytics):</strong> Nos ayudan a comprender cómo los usuarios interactúan
            con el Sitio, qué páginas son más visitadas y cómo podemos mejorar nuestro contenido. Estos datos se
            recopilan de forma agregada y anónima.
          </li>
        </ul>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Puedes configurar tu navegador para rechazar cookies o recibir una notificación cuando se envíen. Ten en cuenta
          que desactivar las cookies funcionales puede afectar la experiencia de uso del Sitio. Google Analytics utiliza
          sus propias cookies, cuyo uso está sujeto a la{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-primary)] hover:underline"
          >
            política de privacidad de Google
          </a>
          .
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mt-8 mb-4">
          Enlaces a Terceros
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          El Sitio contiene enlaces a sitios web de terceros, principalmente exchanges de criptomonedas. Estos sitios
          externos tienen sus propias políticas de privacidad y términos de uso, sobre los cuales CriptoEmpire no tiene
          control ni responsabilidad. Te recomendamos revisar las políticas de privacidad de cada exchange antes de
          registrarte o proporcionar cualquier tipo de información personal.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Algunos de estos enlaces son enlaces de afiliado, lo cual significa que CriptoEmpire puede recibir una
          comisión si te registras a través de ellos. Esto no afecta tu privacidad ni genera un costo adicional para ti.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mt-8 mb-4">
          Derechos del Usuario
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Como usuario del Sitio, tienes los siguientes derechos en relación con tus datos:
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-4">
          <li>
            <strong>Derecho de acceso:</strong> Puedes solicitar información sobre los datos que hayamos recopilado
            relacionados contigo.
          </li>
          <li>
            <strong>Derecho de rectificación:</strong> Si nos has proporcionado información incorrecta, puedes solicitar
            su corrección.
          </li>
          <li>
            <strong>Derecho de eliminación:</strong> Puedes solicitar que eliminemos cualquier dato personal que tengamos
            sobre ti.
          </li>
          <li>
            <strong>Derecho de oposición:</strong> Puedes oponerte al procesamiento de tus datos para fines analíticos
            desactivando las cookies en tu navegador.
          </li>
        </ul>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Para ejercer cualquiera de estos derechos, puedes contactarnos a través de nuestro correo electrónico.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mt-8 mb-4">
          Seguridad de los Datos
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Implementamos medidas de seguridad técnicas y organizativas razonables para proteger la información que
          recopilamos contra acceso no autorizado, alteración, divulgación o destrucción. El Sitio utiliza conexión
          HTTPS cifrada para garantizar la seguridad de los datos transmitidos entre tu navegador y nuestros servidores.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Sin embargo, ningún método de transmisión por Internet ni de almacenamiento electrónico es completamente
          seguro. Aunque nos esforzamos por utilizar medios aceptables para proteger tu información, no podemos
          garantizar su seguridad absoluta.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mt-8 mb-4">
          Cambios en la Política
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          CriptoEmpire se reserva el derecho de actualizar o modificar esta Política de Privacidad en cualquier momento.
          Cualquier cambio será publicado en esta página con una fecha de actualización revisada. Te recomendamos visitar
          esta página periódicamente para estar al tanto de cualquier modificación. El uso continuado del Sitio después
          de la publicación de cambios constituye la aceptación de la política actualizada.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] font-display mt-8 mb-4">
          Contacto
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Si tienes preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o con el
          tratamiento de tus datos, puedes escribirnos a{" "}
          <a
            href="mailto:contacto@criptoempire.com"
            className="text-[var(--accent-primary)] hover:underline"
          >
            contacto@criptoempire.com
          </a>
          . Nos comprometemos a responder tu consulta en el menor tiempo posible.
        </p>
      </div>
    </main>
  );
}
