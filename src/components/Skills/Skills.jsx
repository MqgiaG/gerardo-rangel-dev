import './Skills.css'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Vite',
  'Node.js',
  'Git',
  'GitHub',
]

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section__container">
        <p className="section__eyebrow">02 — Tecnologías</p>

        <h2 className="section__title">Mi stack.</h2>

        <div className="skills__grid">
          {skills.map((skill) => (
            <div className="skills__item" key={skill}>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
