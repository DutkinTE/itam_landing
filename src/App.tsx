import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Achievements from './components/Achievements'
import Partners from './components/Partners'

function App() {
  return (
    <div className="page" id="highest-point">
      <Header />
      <Hero />
      <main>

        <About />
        <Projects />
        <Achievements />
        <Partners />
      </main>
    </div>
  )
}

export default App
