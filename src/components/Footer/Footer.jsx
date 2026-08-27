import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span
          className="footer__star footer__star--one"
          aria-hidden="true"
        >
          ✦
        </span>

        <span
          className="footer__star footer__star--two"
          aria-hidden="true"
        >
          ★
        </span>

        <span
          className="footer__scribble"
          aria-hidden="true"
        >
          ~~~~~
        </span>

        {/* =========================
            FIRMA
        ========================= */}

        <div className="footer__brand">
          <a
            className="footer__signature"
            href="#home"
            aria-label="Volver al inicio"
          >
            Mqgia
            <span>.</span>
          </a>

          <p className="footer__tagline">
            Diseñado, codeado y
            <strong> debuggeado con café.</strong>
          </p>

          <p className="footer__copyright">
            © 2026 Gerardo Rangel
          </p>
        </div>

        {/* =========================
            CARTOON NOTE
        ========================= */}

        <div className="footer__note">
          <span
            className="footer__note-tape"
            aria-hidden="true"
          />

          <span
            className="footer__note-star"
            aria-hidden="true"
          >
            ✦
          </span>

          <p className="footer__note-title">
            KEEP
            <strong> BUILDING.</strong>
          </p>

          <p className="footer__note-text">
            crear · romper · arreglar · repetir
          </p>

          <span
            className="footer__note-line"
            aria-hidden="true"
          />
        </div>

        {/* =========================
            FINAL
        ========================= */}

        <div className="footer__end">
          <span className="footer__end-label">
            END OF FILE
          </span>

          <a
            className="footer__restart"
            href="#home"
            aria-label="Volver al inicio del portfolio"
          >
            <span
              className="footer__restart-star"
              aria-hidden="true"
            >
              ✦
            </span>

            <span>
              OTRA VUELTA
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer