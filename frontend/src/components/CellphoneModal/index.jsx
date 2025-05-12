import { useState, useEffect, useRef, useContext } from 'react';
import Cellphone from '../Cellphone';
import toggleCellphoneModal from '../../utils/toggleCellphoneModal'
import MainContext from '../../Context/MainProvider/index'
import "./style.css"



function CellphoneModal () {

  const context = useContext(MainContext)

  if (!context) {
    return null;
  }

  const { modalStatus, setModalStatus } = context;

  const [time, setTime] = useState('');

  const overlayRef = useRef(null);

  const handleOverlayClick = () => {
    setModalStatus(false)
  };

  const updateModalStatus = () => {
    if (modalStatus === true) {
      return { display: 'flex' }
    }

    if (modalStatus === false) {
      return { display: 'none' }
    }
  }

  const updateDate = () => {
    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit'
    });
    setTime(dataFormatada);
  };

  useEffect(() => {
    updateDate();
    const intervalId = setInterval(updateDate, 60000);

    return () => clearInterval(intervalId);
  }, []);

  
  useEffect(() => {
    updateModalStatus()
  }, [modalStatus])

  if (!modalStatus) return null;

  return (
    <div style={updateModalStatus()} ref={overlayRef} className="overlay" onClick={handleOverlayClick}>
      <div className="phoneModal">
        <div className="topIcons">
          <div className="cellphoneSignal">
            <img src="/phoneIcons/1.svg" className="signal" />
            <img src="/phoneIcons/2.svg" className="tanuki" />
          </div>
          <div className="dateNow">
            {time}
          </div>
          <img src="/phoneIcons/4.svg" className="locationIcon" />
        </div>
        <h2>Menu</h2>
        <div className="gridCellphoneProjects">

          <div className="cellphoneProject">
            <div className="imgContainer">
              <img src="/projectImages/1.svg" alt="" />
            </div>
            <div className="unavailableProject">Em Breve!</div>
          </div>

          <div className="cellphoneProject">
          <div className="imgContainer">
              <img src="/projectImages/2.svg" alt="" />
            </div>
            <div className="unavailableProject">Em Breve!</div>
          </div>

          <div className="cellphoneProject">
          <div className="imgContainer">
              <img src="/projectImages/3.svg" alt="" />
            </div>
            <div className="unavailableProject">Em Breve!</div>
          </div>

          <div className="cellphoneProject">
          <div className="imgContainer">
              <img src="/projectImages/3.svg" alt="" />
            </div>
            <div className="unavailableProject">Em Breve!</div>
          </div>

          <div className="cellphoneProject">
          <div className="imgContainer">
              <img src="/projectImages/2.svg" alt="" />
            </div>
            <div className="unavailableProject">Em Breve!</div>
          </div>

          <div className="cellphoneProject">
          <div className="imgContainer">
              <img src="/projectImages/1.svg" alt="" />
            </div>
            <div className="unavailableProject">Em Breve!</div>
          </div>


          <div className="cellphoneProject"></div>


          <div className="cellphoneProject">
          <div className="imgContainer">
            <img className="cellPhoneContactImg" src="/projectImages/5.svg" alt="" />
            </div>
            <div className="unavailableProject">Em Breve!</div>
            <span className='imgContainerSpan'>Contato</span>
          </div>


          <div className="cellphoneProject">
          <div className="imgContainer">
            <img className="cellPhoneAboutMeImg" src="/projectImages/4.svg" alt="" />
            </div>
            <div className="unavailableProject">Em Breve!</div>
            <span className='imgContainerSpan'>Sobre Mim</span>
          </div>


        </div>
        <div className="cellPhoneProjectsBtn"></div>
      </div>
    </div>
  )
}

export default CellphoneModal;
