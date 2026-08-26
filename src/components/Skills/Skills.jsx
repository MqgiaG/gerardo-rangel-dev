import './Skills.css'

const skillGroups = [
  {
    layout: 'frontend',
    title: 'Frontend',
    description: 'Interfaces, estilos y experiencias.',
    skills: [
      {
        name: 'HTML5',
        icon: '/icons/skills/html5.svg',
      },
      {
        name: 'CSS3',
        icon: '/icons/skills/CSS3.svg',
      },
      {
        name: 'JavaScript',
        icon: '/icons/skills/JavaScript.svg',
      },
      {
        name: 'React',
        icon: '/icons/skills/React.svg',
      },
      {
        name: 'Tailwind CSS',
        icon: '/icons/skills/TailwindCSS.svg',
      },
      {
        name: 'Bootstrap',
        icon: '/icons/skills/Bootstrap.svg',
      },
    ],
  },
  {
    layout: 'backend',
    title: 'Backend & Datos',
    description: 'Lógica, APIs y persistencia.',
    skills: [
      {
        name: 'Node.js',
        icon: '/icons/skills/Node.svg',
      },
      {
        name: 'Express',
        icon: '/icons/skills/express.svg',
        lightIcon: true,
      },
      {
        name: 'MongoDB',
        icon: '/icons/skills/mongodb.svg',
      },
      {
        name: 'SQL',
        icon: '/icons/skills/SQL.svg',
      },
    ],
  },
  {
    layout: 'tools',
    title: 'Herramientas',
    description: 'Mi entorno para construir y trabajar.',
    skills: [
      {
        name: 'Git',
        icon: '/icons/skills/git.svg',
      },
      {
        name: 'GitHub',
        icon: '/icons/skills/github.svg',
        lightIcon: true,
      },
      {
        name: 'npm',
        icon: '/icons/skills/npm.svg',
      },
      {
        name: 'VS Code',
        icon: '/icons/skills/vscode.svg',
      },
    ],
  },
  {
    layout: 'design',
    title: 'Diseño',
    description: 'Diseño y prototipado de interfaces.',
    skills: [
      {
        name: 'Figma',
        icon: '/icons/skills/figma.svg',
      },
    ],
  },
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <div
        className="skills__background"
        aria-hidden="true"
      >
        <span className="skills__background-star skills__background-star--one">
          ✦
        </span>

        <span className="skills__background-star skills__background-star--two">
          ★
        </span>

        <span className="skills__background-code">
          {'{ }'}
        </span>
      </div>

      <div className="skills__container">
        <div className="skills__heading">
          <div className="skills__eyebrow">
            <span className="skills__eyebrow-number">
              02
            </span>

            <span className="skills__eyebrow-text">
              Tecnologías
            </span>
          </div>

          <h2 className="skills__title">
            Mi stack.
            <span>Lo que uso para construir.</span>
          </h2>

          <p className="skills__description">
            Tecnologías y herramientas que forman parte de mi
            flujo de desarrollo, desde la interfaz hasta la
            lógica del backend.
          </p>
        </div>

        <div className="skills__groups">
          {skillGroups.map((group) => (
            <section
              className={`skills__group skills__group--${group.layout}`}
              key={group.title}
            >
              <div className="skills__group-heading">
                <div className="skills__group-info">
                  <span
                    className="skills__group-marker"
                    aria-hidden="true"
                  >
                    ➟
                  </span>

                  <div className="skills__group-copy">
                    <h3 className="skills__group-title">
                      {group.title}
                    </h3>

                    <p className="skills__group-description">
                      {group.description}
                    </p>
                  </div>
                </div>

                <span
                  className="skills__group-line"
                  aria-hidden="true"
                ></span>
              </div>

              <div className="skills__grid">
                {group.skills.map((skill, index) => (
                  <article
                    className="skills__sticker"
                    key={skill.name}
                    style={{
                      '--skill-index': index,
                    }}
                  >
                    <span
                      className="skills__sticker-pin"
                      aria-hidden="true"
                    ></span>

                    <div className="skills__icon">
                      <img
                        className={
                          skill.lightIcon
                            ? 'skills__icon-image skills__icon-image--light'
                            : 'skills__icon-image'
                        }
                        src={skill.icon}
                        alt=""
                        aria-hidden="true"
                      />
                    </div>

                    <h4 className="skills__name">
                      {skill.name}
                    </h4>

                    <span
                      className="skills__spark"
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="skills__footer">
          <span
            className="skills__footer-doodle"
            aria-hidden="true"
          >
            ✦
          </span>

          <span className="skills__footer-text">
            Aprender también es parte del código.
          </span>

          <span
            className="skills__footer-star"
            aria-hidden="true"
          >
            ★
          </span>
        </div>
      </div>
    </section>
  )
}

export default Skills