import "./style.css"
import Cellphone from "../Cellphone/index.jsx"
import MainContext from '../../Context/MainProvider/index.js';
import { useContext } from 'react';

function ProjectPart () {

  const context = useContext(MainContext)

  if (!context) {
    return null;
  }

  const { setModalStatus } = context;

  const toggleModal = () => {
    setModalStatus(true)
  }

  return (
    <div className="projectPartContainer">
      <div className="projectPartInterior">
        <div className="topPart">
          Meus Projetos
        </div>
        <div className="projectsBlocks">
          <div className="gridProjects">

            <div className="projectBlock">
              <div className="unavailableProject">Em Breve!</div>
              <img src="/projectImages/1.svg" alt="" />
              <div className='cardTextContent'>
                <h2>Card Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>  

            <div className="projectBlock">
              <div className="unavailableProject">Em Breve!</div>
              <img src="/projectImages/2.svg" alt="" />
              <div className='cardTextContent'>
                <h2>Card Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>  

            <div className="projectBlock">
              <div className="unavailableProject">Em Breve!</div>
              <img src="/projectImages/3.svg" alt="" />
              <div className='cardTextContent'>
                <h2>Card Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>   

          </div>
        </div>
        <button className="seeMoreBtn" onClick={toggleModal}>
          <span>Veja Mais no</span> <Cellphone size='1'/>
        </button>
      </div>
    </div>
  )
}

export default ProjectPart
