import { useEffect, useState } from 'react'
import './Hero.css'

const roles = [
  'Full Stack Developer',
  'Web Developer',
  'Full Stack Web Developer',
]

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    // =========================
    // ESPERA DESPUÉS DE ESCRIBIR
    // =========================

    if (isWaiting) {
      const timer = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, 1500)

      return () => clearTimeout(timer)
    }

    // =========================
    // BORRANDO
    // =========================

    if (isDeleting) {
      const timer = setTimeout(() => {
        const nextText = currentRole.slice(
          0,
          displayText.length - 1,
        )

        setDisplayText(nextText)

        if (nextText === '') {
          setIsDeleting(false)

          setRoleIndex(
            (prevIndex) => (prevIndex + 1) % roles.length,
          )
        }
      }, 100)

      return () => clearTimeout(timer)
    }

    // =========================
    // ESCRIBIENDO
    // =========================

    const timer = setTimeout(() => {
      const nextText = currentRole.slice(
        0,
        displayText.length + 1,
      )

      setDisplayText(nextText)

      if (nextText === currentRole) {
        setIsWaiting(true)
      }
    }, 75)

    return () => clearTimeout(timer)
  }, [
    displayText,
    isDeleting,
    isWaiting,
    roleIndex,
  ])

  return (
    <section className="hero" id="home">
      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="hero__background">
        <span className="hero__orb hero__orb--one"></span>
        <span className="hero__orb hero__orb--two"></span>
      </div>

      {/* =========================
          CONTAINER
      ========================= */}

      <div className="hero__container">
        {/* =========================
            CONTENT
        ========================= */}

        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-line hero__title-line--first">
              Gerardo
            </span>

            <span className="hero__title-line hero__title-line--second">
              Rangel
            </span>
          </h1>

          <div className="hero__divider"></div>

          {/* =========================
              ROLE
          ========================= */}

          <h2
            className="hero__role"
            aria-label={roles[roleIndex]}
          >
            <span className="hero__role-text">
              {displayText}
            </span>

            <span
              className="hero__cursor"
              aria-hidden="true"
            >
              |
            </span>
          </h2>

          {/* =========================
              DESCRIPTION
          ========================= */}

          <p className="hero__description">
            Diseño y desarrollo experiencias web modernas,
            funcionales y escalables, combinando frontend,
            backend y una obsesión por los detalles.
          </p>

          {/* =========================
              AVAILABILITY
          ========================= */}

          <div className="hero__availability">
            <span
              className="hero__availability-dot"
              aria-hidden="true"
            ></span>

            <span className="hero__availability-text">
              Disponible para trabajar
            </span>
          </div>

          {/* =========================
              ACTIONS
          ========================= */}

          <div className="hero__actions">
            <a
              href="#projects"
              className="hero__sticker hero__sticker--projects"
            >
              <span className="hero__sticker-text">
                Ver proyectos
              </span>

              <span
                className="hero__sticker-icon"
                aria-hidden="true"
              >
                ★
              </span>
            </a>

            <a
              href="#contact"
              className="hero__sticker hero__sticker--contact"
            >
              <span className="hero__sticker-text">
                Contáctame
              </span>

              <span
                className="hero__sticker-icon"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* =========================
            ANIMATED CODER
        ========================= */}

        <div
          className="hero__visual"
          aria-hidden="true"
        >
          <div className="hero__video-glow"></div>

          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
          >
            <source
              src="/videos/mqgia-code.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* =========================
            SCROLL INDICATOR
        ========================= */}

        <a
          href="#about"
          className="hero__scroll"
          aria-label="Ir a la sección Sobre mí"
        >
          <span className="hero__scroll-text">
            Sigue bajando
          </span>

          <span
            className="hero__scroll-arrow"
            aria-hidden="true"
          >
            ↓
          </span>
        </a>
      </div>
    </section>
  )
}

export default Hero