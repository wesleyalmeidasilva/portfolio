import "./style.css"
import Game from "../Game/index.tsx"

function GameContainer () {
  return (
    <div className="gameContainer">
      <div className="gameContainerInterior">
        <Game/>
      </div>
    </div>
  )
}

export default GameContainer
