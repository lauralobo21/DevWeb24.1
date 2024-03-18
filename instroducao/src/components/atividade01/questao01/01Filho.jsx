const Filho = ({altura, peso}) => {
    let imc = peso/(altura*altura)

    function mensagem ({imc}) {
        if(imc < 18) {
            <h3>Abaixo do peso</h3>
        }
        else if(imc > 25) {
            <h3>Acima do peso</h3>
        }
        else    
            <h3>Peso ideal</h3>
    }

    return (
        <div>
            <h1>Resultado: {imc}</h1>
        </div>
    )
}

export default Filho