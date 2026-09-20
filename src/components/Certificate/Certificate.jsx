import './Certificate.css'

const certificateUrl =
  '/assets/certificado-gerardo-rangel-tripleten.pdf'

function Certificate() {
  return (
    <section
      className="certificate"
      id="certificate"
    >
      <div
        className="certificate__background"
        aria-hidden="true"
      >
        <span className="certificate__star certificate__star--one">
          ✦
        </span>

        <span className="certificate__star certificate__star--two">
          ★
        </span>

        <span className="certificate__code">
          {'< / >'}
        </span>
      </div>

      <div className="certificate__container">
        <header className="certificate__header">
          <div className="certificate__section-label">
            <span className="certificate__section-number">
              03
            </span>

            <span className="certificate__section-name">
              CERTIFICACIÓN
            </span>
          </div>

          <h2 className="certificate__heading">
            <span className="certificate__heading-main">
              Formación que respalda
            </span>

            <span className="certificate__heading-script">
              mi código.
            </span>
          </h2>

          <p className="certificate__intro">
            Preparación Full Stack enfocada en desarrollar
            aplicaciones web completas, desde la interfaz
            hasta la autenticación y las bases de datos.
          </p>
        </header>

        <article className="certificate__card">
          <div className="certificate__preview-wrapper">
            <span className="certificate__tape certificate__tape--left" />
            <span className="certificate__tape certificate__tape--right" />

            <a
              className="certificate__preview"
              href={certificateUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir certificado de Desarrollador web de TripleTen"
            >
              <img
                src="/assets/certificado-tripleten.png"
                alt="Certificado de Desarrollador web de TripleTen otorgado a Gerardo Antonio Rangel Gonzalez"
                loading="lazy"
              />
            </a>

            <span className="certificate__verified">
              <span aria-hidden="true">✓</span>
              Certificación obtenida
            </span>
          </div>

          <div className="certificate__content">
            <span className="certificate__kicker">
              TRIPLETEN · 2026
            </span>

            <h3>Desarrollador web</h3>

            <p className="certificate__description">
              Programa profesional completado con proyectos
              prácticos de frontend y backend, integración de
              APIs, bases de datos y desarrollo de aplicaciones
              modernas con React.
            </p>

            <dl className="certificate__facts">
              <div>
                <dt>Expedido</dt>
                <dd>11 de septiembre de 2026</dd>
              </div>

              <div>
                <dt>ID de credencial</dt>
                <dd>202601WDES0003913</dd>
              </div>
            </dl>

            <ul
              className="certificate__skills"
              aria-label="Habilidades certificadas"
            >
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>REST API</li>
              <li>Express.js</li>
            </ul>

            <div className="certificate__actions">
              <a
                className="certificate__button certificate__button--primary"
                href={certificateUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>Ver certificado</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                className="certificate__button certificate__button--secondary"
                href={certificateUrl}
                download="Certificado-Gerardo-Rangel-TripleTen.pdf"
              >
                <span>Descargar PDF</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <p className="certificate__file-note">
              <span aria-hidden="true">●</span>
              Documento oficial · 2 páginas
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Certificate