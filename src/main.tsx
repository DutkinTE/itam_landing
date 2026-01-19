import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HackathonWins from './HackathonWins.tsx'
import ProjectsPage from './ProjectsPage.tsx'
import MediaPage from './MediaPage.tsx'
import TeamPage from './TeamPage.tsx'
import HackathonClubPage from './HackathonClubPage.tsx'
import DesignClubPage from './DesignClubPage.tsx'
import AikcClubPage from './AikcClubPage.tsx'
import GamedevClubPage from './GamedevClubPage.tsx'
import RoboClubPage from './RoboClubPage.tsx'
import AcmClubPage from './AcmClubPage.tsx'
import CtfClubPage from './CtfClubPage.tsx'

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

const isTeamPage =
  pathname === '/team' ||
  pathname.endsWith('/team') ||
  pathname.includes('/team/')

const isHackathonClubPage =
  pathname === '/club/hackathon' ||
  pathname.endsWith('/club/hackathon') ||
  pathname.includes('/club/hackathon/')

const isDesignClubPage =
  pathname === '/club/design' ||
  pathname.endsWith('/club/design') ||
  pathname.includes('/club/design/')

const isAikcClubPage =
  pathname === '/club/aikc' ||
  pathname.endsWith('/club/aikc') ||
  pathname.includes('/club/aikc/')

const isGamedevClubPage =
  pathname === '/club/gamedev' ||
  pathname.endsWith('/club/gamedev') ||
  pathname.includes('/club/gamedev/')

const isRoboClubPage =
  pathname === '/club/robo' ||
  pathname.endsWith('/club/robo') ||
  pathname.includes('/club/robo/')

const isAcmClubPage =
  pathname === '/club/acm' ||
  pathname.endsWith('/club/acm') ||
  pathname.includes('/club/acm/')

const isCtfClubPage =
  pathname === '/club/ctf' ||
  pathname.endsWith('/club/ctf') ||
  pathname.includes('/club/ctf/')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isHackathonWinsPage ? (
      <HackathonWins />
    ) : isProjectsPage ? (
      <ProjectsPage />
    ) : isMediaPage ? (
      <MediaPage />
    ) : isTeamPage ? (
      <TeamPage />
    ) : isHackathonClubPage ? (
      <HackathonClubPage />
    ) : isDesignClubPage ? (
      <DesignClubPage />
    ) : isAikcClubPage ? (
      <AikcClubPage />
    ) : isGamedevClubPage ? (
      <GamedevClubPage />
    ) : isRoboClubPage ? (
      <RoboClubPage />
    ) : isAcmClubPage ? (
      <AcmClubPage />
    ) : isCtfClubPage ? (
      <CtfClubPage />
    ) : (
      <App />
    )}
  </StrictMode>,
)
