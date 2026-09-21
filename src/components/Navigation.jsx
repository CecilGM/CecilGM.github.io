import { useState } from 'react'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
          <header className="navbar">
      
              <div className="container nav-container">
      
                  <a href="#inicio" className="logo">
                      <span>CM</span>
                  </a>
      
                  <button
                      className="menu-toggle"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls="primary-navigation"
                      onClick={() => setIsOpen(!isOpen)}
                  >
                      <span className="sr-only">{isOpen ? 'Cerrar' : 'Abrir'} menú</span>
                      <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                  </button>

                  <nav id="primary-navigation" className={`nav-menu ${isOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
      
                      <a href="#inicio" onClick={closeMenu}>Inicio</a>
      
                      <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
      
                      <a href="#habilidades" onClick={closeMenu}>Habilidades</a>
      
                      <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
      
                      <a href="#formacion" onClick={closeMenu}>Formación</a>
      
                      <a href="#contacto" onClick={closeMenu}>Contacto</a>
      
                  </nav>
      
              </div>
      
          </header>
      
  )
}

export default Navigation
