import './Header.css'

function Header() {
  return (
    <header className="sidebar">
      <div className="sidebar__top">
        <a
          href="#home"
          className="sidebar__logo"
          aria-label="Inicio"
        >
          Mqgia
        </a>
      </div>

      <nav
        className="sidebar__nav"
        aria-label="Navegación principal"
      >
        <a
          href="#home"
          className="sidebar__link sidebar__link--active"
        >
          <span
            className="sidebar__icon"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 11.5 12 5l8 6.5" />
              <path d="M7 10.5V19h10v-8.5" />
            </svg>
          </span>

          <span className="sidebar__label">
            Inicio
          </span>
        </a>

        <a
          href="#about"
          className="sidebar__link"
        >
          <span
            className="sidebar__icon"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="3.5" />

              <path d="M5.5 19c1.8-3 4.1-4.5 6.5-4.5s4.7 1.5 6.5 4.5" />
            </svg>
          </span>

          <span className="sidebar__label">
            Sobre mí
          </span>
        </a>

        <a
          href="#skills"
          className="sidebar__link"
        >
          <span
            className="sidebar__icon"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8.5 8 4.5 12l4 4" />
              <path d="M15.5 8l4 4-4 4" />
              <path d="M13.5 5 10.5 19" />
            </svg>
          </span>

          <span className="sidebar__label">
            Tecnologías
          </span>
        </a>

        <a
          href="#projects"
          className="sidebar__link"
        >
          <span
            className="sidebar__icon"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="4.5"
                y="5"
                width="15"
                height="14"
                rx="2.5"
              />

              <path d="M8 9h8" />
              <path d="M8 13h5" />
            </svg>
          </span>

          <span className="sidebar__label">
            Proyectos
          </span>
        </a>

        <a
          href="#contact"
          className="sidebar__link"
        >
          <span
            className="sidebar__icon"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7.5 12 13l8-5.5" />

              <rect
                x="4"
                y="6"
                width="16"
                height="12"
                rx="2.5"
              />
            </svg>
          </span>

          <span className="sidebar__label">
            Contacto
          </span>
        </a>
      </nav>

      <div className="sidebar__socials">
        {/* GitHub */}
        <a
          href="https://github.com/MqgiaG"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="sidebar__social-link"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.31 6.84 9.66.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.05 1.53 1.05.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.87c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.59 5.05.36.32.68.93.68 1.87 0 1.35-.01 2.44-.01 2.77 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="sidebar__social-link"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.94 8.5a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM5.5 9.88h2.88V19H5.5V9.88Zm4.68 0h2.76v1.24h.04c.38-.73 1.32-1.5 2.72-1.5 2.91 0 3.45 1.96 3.45 4.5V19h-2.88v-4.28c0-1.02-.02-2.33-1.39-2.33-1.4 0-1.61 1.12-1.61 2.26V19h-2.88V9.88Z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/524281146829"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="sidebar__social-link sidebar__social-link--whatsapp"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.12 0C5.58 0 .24 5.34.24 11.88c0 2.1.54 4.14 1.56 5.94L0 24l6.36-1.68a11.83 11.83 0 0 0 5.76 1.44h.01c6.54 0 11.88-5.34 11.88-11.88 0-3.17-1.23-6.14-3.49-8.4ZM12.12 21.72a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.78 1 1.01-3.68-.24-.38a9.82 9.82 0 0 1-1.5-5.19c0-5.43 4.42-9.84 9.86-9.84 2.63 0 5.11 1.02 6.97 2.89a9.79 9.79 0 0 1 2.89 6.96c0 5.43-4.42 9.83-9.82 9.83Zm5.39-7.37c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.33-1.42-.86-.77-1.44-1.72-1.61-2.01-.17-.3-.02-.45.12-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.01-1.04 2.45 0 1.45 1.06 2.85 1.21 3.05.15.2 2.08 3.23 5.04 4.52.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.09 1.74-.71 1.99-1.4.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.56-.35Z" />
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Header