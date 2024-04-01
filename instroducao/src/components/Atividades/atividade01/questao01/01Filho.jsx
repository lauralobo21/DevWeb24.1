import React from 'react';

const Filho = ({altura, peso}) => {
    const imc = peso/(altura*altura)

    const mensagemIMC = (imc) => {
            if(imc < 18) {
                return (<h3>Abaixo do peso</h3>)
            } else if(imc > 25) {
                return (<h3>Acima do peso</h3>)
            } else {
                return (<h3>Peso ideal</h3>)
            }
    }
    return (
        <div>
            {mensagemIMC(imc)}
        </div>
    )
}

export default Filho