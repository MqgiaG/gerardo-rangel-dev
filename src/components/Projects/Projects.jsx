import './Projects.css'

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section__container">
        <p className="section__eyebrow">03 — Proyectos</p>

        <h2 className="section__title">Cosas que he construido.</h2>

        <article className="project">
          <div className="project__number">01</div>

          <div className="project__content">
            <p className="project__type">React · Vite · CSS</p>

            <h3 className="project__title">VivanCoffee</h3>

            <p className="project__description">
              Aplicación web desarrollada con React para una cafetería,
              enfocada en una experiencia moderna, funcional y responsiva.
            </p>

            <div className="project__links">
              <a href="#" aria-label="Ver proyecto VivanCoffee">
                Ver proyecto →
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects
