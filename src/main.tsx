import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HackathonWins from './HackathonWins.tsx'

const pathname = window.location.pathname
const isHackathonWinsPage =
  pathname === '/wins' ||
  pathname.endsWith('/wins') ||
  pathname.includes('/wins/')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isHackathonWinsPage ? <HackathonWins /> : <App />}
  </StrictMode>,
)
