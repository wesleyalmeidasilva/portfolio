import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import IntroSite from './components/introSite/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntroSite />
  </StrictMode>,
)
