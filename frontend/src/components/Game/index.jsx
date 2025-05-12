import "./style.css"

function Game () {
  return (
    <div className="game">
      <div className="gameTitle">
        <span className="gameTitleFirstSpan">The</span>
        <span className="gameTitleSecondSpan">Farm</span>
        <img src="/leaf.svg" alt="" />
      </div>
      <div className="gameTextContent">
        <h2>Bem vindo a Fazenda!</h2>
        <p>
          Aqui você pode cuidar das suas primeiras plantas para ganhar moedas 
          e plantar coisas Novas!
        </p>
        <p>
          <span>Desafie</span> os seus amigos para ver quem tem a fazenda
          mais bonita!
        </p>
        <p>
          <span>Compre</span> novas sementes!
        </p>
      </div>

      <div className="gameBottom">
        <button>Sign In</button>
        <p>
          Esse é um projeto para exibir as minhas habilidades
          em desenvolvimento WEB
        </p>
      </div>
    </div>
  )
}

export default Game
