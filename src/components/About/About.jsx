import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about__decor" aria-hidden="true">
        <span className="about__decor-star about__decor-star--one">
          ✦
        </span>

        <span className="about__decor-star about__decor-star--two">
          ✦
        </span>

        <span className="about__decor-line"></span>
      </div>

      <div className="about__container">
        <div className="about__heading">
          <div className="about__eyebrow">
            <span className="about__eyebrow-number">
              01
            </span>

            <span className="about__eyebrow-text">
              Sobre mí
            </span>
          </div>

          <h2 className="about__title">
            Del diseño a la lógica.
            <span>Construyo todo el camino.</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__content">
            <p className="about__text">
              Soy desarrollador{' '}
              <strong>Full Stack</strong> y también tengo
              formación en{' '}
              <span className="about__industrial">
                Ingeniería Industrial
              </span>
              , una combinación que me ha enseñado a pensar
              tanto en cómo funciona una solución como en la
              forma de construirla.
            </p>

            <p className="about__text">
              Disfruto trabajar en todo el proceso de una
              aplicación web: desde diseñar y desarrollar la
              interfaz hasta conectar APIs, manejar la lógica
              del backend y hacer que cada parte funcione como
              debe.
            </p>

            <p className="about__text">
              Mi enfoque está en crear proyectos que se sientan
              bien hechos, sean fáciles de usar y tengan una
              base sólida detrás, combinando{' '}
              <strong>
                diseño, funcionalidad y código limpio.
              </strong>
            </p>

            <div
              className="about__tags"
              aria-label="Áreas de desarrollo"
            >
              <span className="about__tag">
                <span
                  className="about__tag-icon"
                  aria-hidden="true"
                >
                  &lt;/&gt;
                </span>

                <span className="about__tag-text">
                  Frontend
                </span>
              </span>

              <span className="about__tag">
                <span
                  className="about__tag-icon"
                  aria-hidden="true"
                >
                  {'{ }'}
                </span>

                <span className="about__tag-text">
                  Backend
                </span>
              </span>

              <span className="about__tag">
                <span
                  className="about__tag-icon"
                  aria-hidden="true"
                >
                  ↔
                </span>

                <span className="about__tag-text">
                  APIs
                </span>
              </span>

              <span className="about__tag">
                <span
                  className="about__tag-icon"
                  aria-hidden="true"
                >
                  ✦
                </span>

                <span className="about__tag-text">
                  UI / UX
                </span>
              </span>
            </div>

            <div className="about__quote">
              <span
                className="about__quote-arrow"
                aria-hidden="true"
              >
                ↳
              </span>

              <p>
                De una idea en mi cabeza a una aplicación
                funcionando en pantalla.
              </p>
            </div>
          </div>

          <div className="about__visual">
            <div className="about__card">
              <div className="about__card-header">
                <div className="about__card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="about__card-name">
                  gerardo.exe
                </span>
              </div>

              <div className="about__card-main">
                <div
                  className="about__code-icon"
                  aria-hidden="true"
                >
                  <span>&lt;</span>
                  <span>/</span>
                  <span>&gt;</span>
                </div>

                <div className="about__card-title">
                  Full Stack
                  <span>Developer</span>
                </div>
              </div>

              <div className="about__card-info">
                <div className="about__card-row">
                  <span className="about__card-label">
                    Rol
                  </span>

                  <span className="about__card-value">
                    Web Developer
                  </span>
                </div>

                <div className="about__card-row">
                  <span className="about__card-label">
                    Stack
                  </span>

                  <span className="about__card-value">
                    React + Node.js
                  </span>
                </div>

                <div className="about__card-row">
                  <span className="about__card-label">
                    Mindset
                  </span>

                  <span className="about__card-value">
                    Build · Learn · Repeat
                  </span>
                </div>
              </div>

              <div className="about__status">
                <span
                  className="about__status-dot"
                  aria-hidden="true"
                ></span>

                Disponible para nuevos proyectos
              </div>

              <span
                className="about__card-star about__card-star--one"
                aria-hidden="true"
              >
                ★
              </span>

              <span
                className="about__card-star about__card-star--two"
                aria-hidden="true"
              >
                ✦
              </span>
            </div>

            <div
              className="about__sticker about__sticker--build"
              aria-hidden="true"
            >
              build cool stuff!
            </div>

            <div
              className="about__sticker about__sticker--coffee"
              aria-hidden="true"
            >
              code ☕
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About