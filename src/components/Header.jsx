function Header() {
  return (
              <section id="inicio" className="hero">
      
                  <div className="container hero-container">
      
                      <div className="hero-content">
      
                          <span className="hero-badge">
                              DESARROLLADORA DE SOFTWARE
                          </span>
      
                          <h1>
                              Cecilia
                              <span>Morales</span>
                          </h1>
      
                          <h2>
                              Desarrolladora Full Stack en formación
                          </h2>
      
                          <p>
                              Construyo aplicaciones web con foco en backend, bases
                              de datos y experiencias útiles para las personas. Me
                              interesa transformar ideas en productos claros,
                              accesibles y mantenibles.
                          </p>
      
                          <div className="hero-buttons">
      
                              <a href="#proyectos" className="btn btn-primary">
                                  <i className="fa-solid fa-code"></i>
                                  Ver proyectos
                              </a>
      
                              <a href={`${import.meta.env.BASE_URL}CV_Cecilia_Morales.pdf`}
                                  className="btn btn-secondary"
                                  target="_blank"
                                  rel="noreferrer">
                                  <i className="fas fa-file-pdf"></i>
                                  Ver CV
                              </a>
      
                          </div>
      
                          <div className="social-links">
      
                              <a href="https://github.com/CecilGM"
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label="GitHub">
                                  <i className="fa-brands fa-github"></i>
                              </a>
      
                              <a href="https://www.linkedin.com/in/cecilia-morales-7a2595b7/"
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label="LinkedIn">
                                  <i className="fa-brands fa-linkedin"></i>
                              </a>
      
                              <a href="mailto:ronana@hotmail.com.ar"
                                  aria-label="Email">
                                  <i className="fa-solid fa-envelope"></i>
                              </a>
      
                          </div>
      
                      </div>
      
      
                      <div className="hero-image">
      
                          <div className="code-card">
      
                              <div className="code-header">
      
                                  <span></span>
                                  <span></span>
                                  <span></span>
      
                              </div>
      
                              <div className="code-content">
      
                                  <p>
                                      <span className="code-purple">const</span>
                                      developer =
                                      <span className="code-green">"Cecilia"</span>;
                                  </p>
      
                                  <p>
                                      <span className="code-purple">const</span>
                                      skills = [
                                  </p>
      
                                  <p className="code-indent">
                                      <span className="code-green">"Java"</span>,
                                  </p>
      
                                  <p className="code-indent">
                                      <span className="code-green">"Python"</span>,
                                  </p>
      
                                  <p className="code-indent">
                                      <span className="code-green">"React"</span>,
                                  </p>
      
                                  <p className="code-indent">
                                      <span className="code-green">"NestJS"</span>,
                                  </p>
      
                                  <p className="code-indent">
                                      <span className="code-green">"Flask"</span>,
                                  </p>
      
                                  <p className="code-indent">
                                      <span className="code-green">"SQL"</span>
                                  </p>
      
                                  <p>];</p>
      
                                  <p>
                                      <span className="code-purple">while</span>
                                      (learning) {'{'}
                                  </p>
      
                                  <p className="code-indent">
                                      build();
                                  </p>
      
                                  <p className="code-indent">
                                      learn();
                                  </p>
      
                                  <p className="code-indent">
                                      improve();
                                  </p>
      
                                  <p>{'}'}</p>
      
                              </div>
      
                          </div>
      
                      </div>
      
                  </div>
      
              </section>
      
      
  )
}

export default Header
