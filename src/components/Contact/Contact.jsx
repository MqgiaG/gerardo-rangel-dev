import './Contact.css'

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section__container contact__container">
        <p className="section__eyebrow">04 — Contacto</p>

        <h2 className="contact__title">¿Tienes un proyecto?</h2>

        <p className="contact__text">
          Estoy abierto a nuevas oportunidades y proyectos. Hablemos.
        </p>

        <a
          className="contact__email"
          href="mailto:gerardo.rangel.dev@gmail.com"
        >
          gerardo.rangel.dev@gmail.com
        </a>
      </div>
    </section>
  )
}

export default Contact
