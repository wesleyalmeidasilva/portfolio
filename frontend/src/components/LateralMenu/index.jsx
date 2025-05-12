import { useContext } from 'react'
import Cellphone from '../Cellphone'
import MainContext from '../../Context/MainProvider'
import "./style.css"

function LateralMenu () {

  const context = useContext(MainContext)

  if (!context) {
    return null;
  }

  const { modalStatus, setModalStatus } = context;

  const toggleCellphone = () => {
    setModalStatus(true)
  }

  return (
    <button className="lateralMenuBtn" onClick={toggleCellphone}>
      <Cellphone size={1.4}/>
    </button>
  )
}

export default LateralMenu