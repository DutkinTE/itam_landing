import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <div className="page" id="highest-point">
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  )
}

export default App
