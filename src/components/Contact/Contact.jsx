import { useEffect, useRef, useState } from 'react'
import './Contact.css'

function Contact() {
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
    <section className="contact section" id="contact">
      <div className="contact__container">
        <header className="contact__header">
          <img
            className="contact__header-doodle"
            src="/images/contact/contact-doodle.png"
            alt=""
            aria-hidden="true"
            draggable="false"
          />

          <div className="contact__section-label">
            <span className="contact__section-number">
              04
            </span>

            <span className="contact__section-name">
              CONTACTO
            </span>
          </div>

          <h2
            ref={headingRef}
            className={`contact__heading${
              isHeadingDrawn
                ? ' contact__heading--drawn'
                : ''
            }`}
          >
            <span className="contact__heading-main">
              <span className="contact__heading-ink">
                ¿Construimos algo
              </span>

              <span
                className="contact__marker-tip contact__marker-tip--main"
                aria-hidden="true"
              >
                <span className="contact__pencil">
                  <span className="contact__pencil-eraser" />
                  <span className="contact__pencil-metal" />
                  <span className="contact__pencil-body" />
                  <span className="contact__pencil-wood" />
                  <span className="contact__pencil-lead" />
                </span>
              </span>
            </span>

            <span className="contact__heading-script">
              <span className="contact__heading-ink">
                juntos?
              </span>

              <span
                className="contact__marker-tip contact__marker-tip--script"
                aria-hidden="true"
              >
                <span className="contact__pencil">
                  <span className="contact__pencil-eraser" />
                  <span className="contact__pencil-metal" />
                  <span className="contact__pencil-body" />
                  <span className="contact__pencil-wood" />
                  <span className="contact__pencil-lead" />
                </span>
              </span>
            </span>
          </h2>

          <p className="contact__intro">
            Estoy abierto a nuevas oportunidades, colaboraciones y proyectos
            donde pueda aportar diseño, frontend, backend y muchas ganas de
            construir algo que valga la pena.
          </p>
        </header>

        <div className="contact__poster">
          {/* =========================
              MARCO CARTOON
          ========================= */}

          <svg
            className="contact__frame"
            viewBox="0 0 1000 620"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="contact__frame-line contact__frame-line--shadow"
              d="
                M 82 76
                C 173 31, 764 18, 913 76
                C 963 96, 981 151, 973 213
                L 984 254
                L 971 293
                C 980 404, 957 491, 901 532
                C 825 585, 685 592, 542 588
                L 486 598
                L 430 589
                C 286 593, 170 577, 103 538
                C 47 505, 23 430, 34 345
                L 25 305
                L 36 266
                C 28 166, 43 103, 82 76
                Z
              "
            />

            <path
              className="contact__frame-line contact__frame-line--pink"
              d="
                M 74 68
                C 168 25, 768 14, 919 70
                C 969 91, 988 146, 978 210
                L 987 250
                L 975 291
                C 983 408, 959 495, 902 535
                C 820 591, 682 598, 539 593
                L 484 603
                L 430 593
                C 281 597, 164 580, 96 540
                C 39 506, 17 428, 29 342
                L 20 302
                L 31 263
                C 23 161, 38 96, 74 68
                Z
              "
            />

            <path
              className="contact__frame-line contact__frame-line--lilac"
              d="
                M 92 88
                C 189 44, 755 34, 897 88
                C 944 106, 962 158, 953 218
                L 961 255
                L 951 294
                C 959 395, 937 474, 884 513
                C 807 563, 676 573, 542 568
                L 489 578
                L 437 568
                C 298 573, 188 558, 119 520
                C 67 491, 47 418, 56 340
                L 48 303
                L 58 267
                C 50 176, 61 117, 92 88
                Z
              "
            />
          </svg>

          {/* =========================
              CINTA
          ========================= */}

          <span
            className="contact__tape contact__tape--top"
            aria-hidden="true"
          />

          <span
            className="contact__tape contact__tape--bottom"
            aria-hidden="true"
          />

          {/* =========================
              DOODLES
          ========================= */}

          <span
            className="contact__decoration contact__decoration--star-one"
            aria-hidden="true"
          >
            ✦
          </span>

          <span
            className="contact__decoration contact__decoration--star-two"
            aria-hidden="true"
          >
            ★
          </span>

          <span
            className="contact__decoration contact__decoration--star-three"
            aria-hidden="true"
          >
            ✦
          </span>

          <span
            className="contact__decoration contact__decoration--burst"
            aria-hidden="true"
          >
            ✷
          </span>

          <span
            className="contact__decoration contact__decoration--scribble-one"
            aria-hidden="true"
          >
            ~~~~~
          </span>

          <span
            className="contact__decoration contact__decoration--scribble-two"
            aria-hidden="true"
          >
            ~~~
          </span>

          <div
            className="contact__speed-lines contact__speed-lines--left"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>

          <div
            className="contact__speed-lines contact__speed-lines--right"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>

          {/* =========================
              LET'S BUILD
          ========================= */}

          <div
            className="contact__build-sticker"
            aria-hidden="true"
          >
            <span>LET&apos;S</span>

            <strong>
              BUILD
            </strong>

            <span>★</span>
          </div>

          {/* =========================
              DISPONIBILIDAD
          ========================= */}

          <div className="contact__availability">
            <span
              className="contact__availability-dot"
              aria-hidden="true"
            />

            <span>
              Disponible para trabajar
            </span>
          </div>

          {/* =========================
              CONTENIDO
          ========================= */}

          <div className="contact__poster-content">
            <p className="contact__poster-kicker">
              ¿TIENES ALGO EN MENTE?
            </p>

            <h3 className="contact__poster-title">
              Hablemos
              <span>.</span>
            </h3>

            <p className="contact__poster-text">
              Cuéntame qué tienes en mente y veamos cómo convertirlo
              en algo que funcione, se vea bien y valga la pena construir.
            </p>

            {/* =========================
                EMAIL
            ========================= */}

            <div className="contact__email-wrapper">
              <span
                className="contact__email-note"
                aria-hidden="true"
              >
                escríbeme aquí
              </span>

              <span
                className="contact__email-note-arrow"
                aria-hidden="true"
              >
                ↘
              </span>

              <a
                className="contact__email"
                href="mailto:gerardoanrg@gmail.com"
              >
                <span
                  className="contact__email-icon"
                  aria-hidden="true"
                >
                  💌
                </span>

                <span className="contact__email-copy">
                  <small>
                    CORREO
                  </small>

                  <strong>
                    gerardoanrg@gmail.com
                  </strong>
                </span>
              </a>
            </div>

            {/* =========================
                ACCIONES
            ========================= */}

            <div className="contact__actions">
              <a
                className="contact__action contact__action--whatsapp"
                href="https://wa.me/524281146829"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="contact__action-icon contact__action-icon--whatsapp"
                  aria-hidden="true"
                >
                  WA
                </span>

                <span>
                  WhatsApp
                </span>
              </a>

              <a
                className="contact__action contact__action--github"
                href="https://github.com/MqgiaG"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="contact__action-icon"
                  aria-hidden="true"
                >
                  <img
                    src="/icons/skills/github.svg"
                    alt=""
                  />
                </span>

                <span>
                  GitHub
                </span>
              </a>

              <a
                className="contact__action contact__action--mail"
                href="mailto:gerardoanrg@gmail.com"
              >
                <span
                  className="contact__action-icon contact__action-icon--mail"
                  aria-hidden="true"
                >
                  💌
                </span>

                <span>
                  Correo
                </span>
              </a>
            </div>

            <p className="contact__message">
              Si tienes una idea,
              <strong>
                {' '}
                ya tenemos por dónde empezar.
              </strong>
            </p>
          </div>
        </div>

        {/* =========================
            CIERRE
        ========================= */}

        <div className="contact__closing">
          <span
            className="contact__closing-star"
            aria-hidden="true"
          >
            ✦
          </span>

          <p>
            Tú pones la idea.
            <strong>
              {' '}
              Yo pongo el código.
            </strong>
          </p>

          <span
            className="contact__closing-scribble"
            aria-hidden="true"
          >
            ~~~~~
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact