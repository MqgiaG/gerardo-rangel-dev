import { useEffect, useRef, useState } from 'react'
import './Projects.css'

const projects = [
  {
    stack: [
      'React',
      'Vite',
      'JavaScript',
      'CSS',
      'Git',
      'GitHub',
      'GitHub Pages',
    ],
    title: 'VIVANCOFFEE',
    description:
      'Experiencia web desarrollada para una cafetería real, con diseño responsivo, menú interactivo, animaciones y una identidad visual enfocada en la marca.',
    previewType: 'live',
    preview: 'https://mqgiag.github.io/RVIVANCOFFEE/',
    liveUrl: 'https://mqgiag.github.io/RVIVANCOFFEE/',
    githubUrl: 'https://github.com/MqgiaG/RVIVANCOFFEE',
  },
  {
    stack: [
      'React',
      'Vite',
      'JavaScript',
      'CSS',
      'Responsive Design',
      'Git',
      'GitHub',
      'GitHub Pages',
    ],
    title: 'DANNO',
    description:
      'Sitio web profesional desarrollado para un fotógrafo, con portafolio interactivo, servicios, animaciones, diseño responsivo y sistema de reservación con contacto directo por WhatsApp.',
    previewType: 'live',
    preview: 'https://mqgiag.github.io/Danno/',
    previewMode: 'desktop',
    liveUrl: 'https://mqgiag.github.io/Danno/',
    githubUrl: 'https://github.com/MqgiaG/Danno',
  },
  {
    stack: [
      'React',
      'Vite',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'REST API',
      'JWT',
      'CORS',
      'Git',
      'GitHub',
    ],
    title: 'Around The U.S.',
    description:
      'Aplicación Full Stack con autenticación, perfiles de usuario, creación de tarjetas y sistema de likes, conectando frontend, API REST y base de datos.',
    previewType: 'image',
    preview: '/images/projects/around-fullstack.png',
    liveUrl: null,
    githubUrl: 'https://github.com/MqgiaG/web_project_around_full',
  },
]

function Projects() {
  const headingRef = useRef(null)
  const [isHeadingDrawn, setIsHeadingDrawn] = useState(false)

  useEffect(() => {
    const heading = headingRef.current

    if (!heading) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadingDrawn(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    observer.observe(heading)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className="projects section" id="projects">
      <div className="section__container">
        <header className="projects__header">
          <div className="projects__section-label">
            <span className="projects__section-number">
              03
            </span>

            <span className="projects__section-name">
              PROYECTOS
            </span>
          </div>

          <h2
            ref={headingRef}
            className={`projects__heading${
              isHeadingDrawn
                ? ' projects__heading--drawn'
                : ''
            }`}
          >
            <span className="projects__heading-main">
              <span className="projects__heading-ink">
                Ideas que llevé a
              </span>

              <span
                className="projects__marker-tip projects__marker-tip--main"
                aria-hidden="true"
              >
                <span className="projects__pencil">
                  <span className="projects__pencil-eraser" />
                  <span className="projects__pencil-metal" />
                  <span className="projects__pencil-body" />
                  <span className="projects__pencil-wood" />
                  <span className="projects__pencil-lead" />
                </span>
              </span>
            </span>

            <span className="projects__heading-script">
              <span className="projects__heading-ink">
                pantalla.
              </span>

              <span
                className="projects__marker-tip projects__marker-tip--script"
                aria-hidden="true"
              >
                <span className="projects__pencil">
                  <span className="projects__pencil-eraser" />
                  <span className="projects__pencil-metal" />
                  <span className="projects__pencil-body" />
                  <span className="projects__pencil-wood" />
                  <span className="projects__pencil-lead" />
                </span>
              </span>
            </span>
          </h2>

          <p className="projects__intro">
            Una selección de proyectos donde mezclo diseño, frontend y
            backend para convertir ideas en experiencias que realmente
            funcionan.
          </p>
        </header>

        <div className="projects__list">
          {projects.map((project) => (
            <article
              className="project"
              key={project.title}
            >
              <div className="project__preview">
                <div className="project__browser">
                  <div className="project__browser-bar">
                    <div
                      className="project__browser-dots"
                      aria-hidden="true"
                    >
                      <span />
                      <span />
                      <span />
                    </div>

                    <span className="project__browser-name">
                      {project.title}
                    </span>

                    <span
                      className="project__browser-star"
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                  </div>

                  <div
                    className={`project__browser-content ${
                      project.previewMode === 'desktop'
                        ? 'project__browser-content--desktop'
                        : ''
                    }`}
                  >
                    {project.previewType === 'live' ? (
                      <iframe
                        src={project.preview}
                        title={`Vista previa de ${project.title}`}
                        loading="lazy"
                      />
                    ) : (
                      <img
                        src={project.preview}
                        alt={`Vista previa del proyecto ${project.title}`}
                      />
                    )}
                  </div>
                </div>

                <span
                  className="project__doodle project__doodle--star"
                  aria-hidden="true"
                >
                  ★
                </span>

                <span
                  className="project__doodle project__doodle--spark"
                  aria-hidden="true"
                >
                  ✦
                </span>
              </div>

              <div className="project__content">
                <div className="project__top">
                  <span
                    className="project__check"
                    aria-hidden="true"
                  >
                    ✔
                  </span>

                  <div
                    className="project__stack"
                    aria-label={`Tecnologías utilizadas en ${project.title}`}
                  >
                    {project.stack.map((technology) => (
                      <span
                        className="project__stack-item"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="project__title">
                  {project.title}
                </h3>

                <p className="project__description">
                  {project.description}
                </p>

                <div className="project__links">
                  {project.liveUrl && (
                    <a
                      className="project__link project__link--primary"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver proyecto
                    </a>
                  )}

                  <a
                    className="project__link project__link--github"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub

                    <span
                      className="project__github-arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>

                    <span
                      className="project__github-badge"
                      aria-hidden="true"
                    >
                      <img
                        src="/icons/skills/github.svg"
                        alt=""
                      />
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__footer">
          <span
            className="projects__footer-tape"
            aria-hidden="true"
          />

          <span
            className="projects__footer-star projects__footer-star--one"
            aria-hidden="true"
          >
            ✦
          </span>

          <span
            className="projects__footer-star projects__footer-star--two"
            aria-hidden="true"
          >
            ★
          </span>

          <div
            className="projects__footer-stamp"
            aria-hidden="true"
          >
            <span>BUILD</span>
            <span>SHIP</span>
          </div>

          <div className="projects__footer-copy">
            <p className="projects__footer-kicker">
              TODO EMPIEZA AQUÍ
            </p>

            <p className="projects__footer-message">
              Cada proyecto empezó con una
              <strong> pantalla vacía.</strong>
            </p>
          </div>

          <span
            className="projects__footer-squiggle"
            aria-hidden="true"
          >
            ~~~~~
          </span>
        </div>
      </div>
    </section>
  )
}

export default Projects