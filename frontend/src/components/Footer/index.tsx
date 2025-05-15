import "./style.css"

function Footer () {
  return (
    <div className="footerContainer">
      <div className="footerContact">

        <span className="footerContactTitle">Contato</span>

        <div className="footerContactImages">
          <img src="/instagram.svg" alt="Botão para ir para o meu perfil do instagram" />
          <img src="/linkedin.svg" alt="Botão para ir para o meu perfil do linkedin" />
          <img src="/github.svg" alt="Botão para ir para o meu perfil do github" />
        </div>

        <span className="footerContactName">Feito Por: Wesley Almeida Silva</span>

      </div>
    </div>
  )
}

export default Footer
