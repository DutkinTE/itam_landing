import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HackathonWins from './HackathonWins.tsx'
import ProjectsPage from './ProjectsPage.tsx'
import MediaPage from './MediaPage.tsx'

const pathname = window.location.pathname

const isHackathonWinsPage =
  pathname === '/wins' ||
  pathname.endsWith('/wins') ||
  pathname.includes('/wins/')

const isProjectsPage =
  pathname === '/projects' ||
  pathname.endsWith('/projects') ||
  pathname.includes('/projects/')

const isMediaPage =
  pathname === '/media' ||
  pathname.endsWith('/media') ||
  pathname.includes('/media/')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isHackathonWinsPage ? (
      <HackathonWins />
    ) : isProjectsPage ? (
      <ProjectsPage />
    ) : isMediaPage ? (
      <MediaPage />
    ) : (
      <App />
    )}
  </StrictMode>,
)
