import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Achievements from './components/Achievements'

function App() {
  return (
    <div className="page" id="highest-point">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
      </main>
    </div>
  )
}

export default App
