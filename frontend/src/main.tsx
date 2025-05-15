import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import IntroSite from './components/IntroSite/index.tsx'
import ProjectPart from './components/ProjectPart/index.js'
import LateralMenu from './components/LateralMenu/index.js'
import GameContainer from './components/GameContainer/index.js'
import Footer from './components/Footer/index.jsx'
import CellphoneModal from './components/CellphoneModal/index.js'
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
