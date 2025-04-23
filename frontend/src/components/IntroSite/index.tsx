import "./style.css"
import React from 'react'

function IntroSite () {
  return (
    <div className='containerIntroSite'>

      <div className="introLeftSide">
        <div className="topLeftSide">
          <a href="#">Início</a>
        </div>
        <div className="imgProfile">
          <div className="imgProfileInterior"></div>
        </div>
        <div className='introSiteIcons'>
          <img className="figmaIcon" src="/figma.svg" alt="figma icon" />
          <img className="nodeIcon" src="/node.svg" alt="node icon" />
          <img className="mysqlIcon" src="/mysql.svg" alt="mysql icon" />
          <img className="reactIcon" src="/react.svg" alt="react icon" />
        </div>
      </div>

      <div className="introRightSide">
        <div className="topRightSide">
          <ul>
            <a href="#">Meus Projetos</a>
            <a href="#">Sobre mim</a>
            <a href="#">Logar</a>
          </ul>
        </div>
        <div className="introSiteText">
          <h1>
            <span className="firstSpan">Olá, meu nome é Wesley e eu sou</span>
            <span className="secondSpan">WEB DEVELOPER</span>
            <span className="thirdSpan">FULL STACK<img src="/reactSpin.svg" alt="React Logo Spinning" /></span>
            <span className="forthSpan">Vou fazer sua ideia se tornar realidade</span>
          </h1>
          <div className="introSiteTextBtnContainer">
            <a className="introSiteTextBtn" href='#'>
              <span>Quero meu</span>
              <span>Website!</span>
            </a>
            <a className="introSiteTextBtn" href='#'>
              <span>Meus Projetos</span>
            </a>
          </div>
        </div>
        <div className="introSiteContact">
          <a href='#'><img src="/instagram.svg" alt="Instagram Contact Icon" /></a>
          <a href='#'><img src="/github.svg" alt="Github Perfil Icon" /></a>
          <a href='#'><img src="/linkedin.svg" alt="Linkedin Perfil Icon" /></a>
        </div>
      </div>
    </div>
  )
}

<div className="topIntroSite">
        <div className="topLeftSide">
          <a className='introBtn' href="#">Início</a>
        </div>
        <div className="topRightSide">
          <ul>
            <a href="#">Meus Projetos</a>
            <a href="#">Sobre mim</a>
            <a href="#">Logar</a>
          </ul>
        </div>
      </div>

export default IntroSite

console.log('oi')
