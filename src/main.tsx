import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HackathonWins from './HackathonWins.tsx'

const isHackathonWinsPage = window.location.pathname.startsWith('/wins')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isHackathonWinsPage ? <HackathonWins /> : <App />}
  </StrictMode>,
)
