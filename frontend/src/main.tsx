import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import IntroSite from './components/introSite/index.tsx'
import ProjectPart from './components/ProjectPart/index.jsx'
import LateralMenu from './components/LateralMenu/index.jsx'
import GameContainer from './components/GameContainer/index.jsx'
import Footer from './components/Footer/index.jsx'
import CellphoneModal from './components/CellphoneModal/index.jsx'
import { MainProvider } from './Context/MainProvider/index.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainProvider>
      <CellphoneModal/>
      <LateralMenu/>
      <IntroSite/>
      <ProjectPart/>
      <GameContainer/>
      <Footer/>
    </MainProvider>
  </StrictMode>,
)
