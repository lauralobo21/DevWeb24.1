
const ComFilho = ({mensagem, enviarMensagemParaOPai}) => {
    //let {mensagem} = props
    return (
        <div>
            <h2>Mensagem do pai: {mensagem}</h2>
            <button 
                onClick={
                    ()=> {
                         enviarMensagemParaOPai("Oi pai, tudo bem?")
                    }
                }>
                "Enviar mensagem para o pai"
            </button>
        </div>
    )
}

export default ComFilho