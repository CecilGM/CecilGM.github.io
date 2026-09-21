import Navigation from './components/Navigation'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Habilidades from './components/Habilidades'
import Proyectos from './components/Proyectos'
import Formacion from './components/Formacion'
import Aprendizaje from './components/Aprendizaje'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido-principal">Saltar al contenido</a>
      <Navigation />
      <main id="contenido-principal">
        <Header />
        <Sobre />
        <Habilidades />
        <Proyectos />
        <Formacion />
        <Aprendizaje />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
