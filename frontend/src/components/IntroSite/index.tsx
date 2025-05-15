import "./style.css"
import { useContext } from 'react'
import MainContext from '../../Context/MainProvider';

function IntroSite () {

  const context = useContext(MainContext)
  
    if (!context) {
      return null;
    }
  
    const { setModalStatus } = context;
  
    const toggleModal = () => {
      setModalStatus(true)
    }

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
            <a onClick={toggleModal}>Meus Projetos</a>
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
            <a className="introSiteTextBtn myProjectsBtn" onClick={toggleModal}>
              <span>Meus Projetos</span>
            </a>
          </div>
        </div>
        <div className="introSiteContact">
          <a href='https://www.instagram.com/sr.nkens/' target="_blank" rel="noopener noreferrer" ><img src="/instagram.svg" alt="Instagram Contact Icon" /></a>
          <a href='https://github.com/wesleyalmeidasilva' target="_blank" rel="noopener noreferrer"><img src="/github.svg" alt="Github Perfil Icon" /></a>
          <a href='https://www.linkedin.com/in/wesley-almeida-silva-61219a262/' target="_blank" rel="noopener noreferrer"><img src="/linkedin.svg" alt="Linkedin Perfil Icon" /></a>
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
