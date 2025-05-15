import "./style.css"

function Cellphone ({ size = 1 }) {

  const newWidth = `${size * 1.8}vw`
  const newHeight = `${size * 2.6}vw`

  return (
    <div className="cellphoneContainer" style={{ width: newWidth, height: newHeight }}>
      <div className="cellphoneScreen"></div>
      <div className="cellphoneBtn"></div>
    </div>
  )
}

export default Cellphone
