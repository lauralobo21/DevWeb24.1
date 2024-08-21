import React from "react";

// funcao arrow
const Questao01A = () => {
    const lista = [
        {a: 10, b: 3, c: 7},
        {a: 5, b: -3, c: 9},
        {a: 1, b: 9, c: 40}
    ];

  return (
    <div>
      <h1>Questão 01A</h1>
      <Questao01B lista={lista} />
    </div>
  );
};

// funcao classica
function Questao01B({lista}) {

  // funcao para retornar o maior numero em um objeto
    const encontrarMaior = (objeto) => {
        return Math.max(objeto.a, objeto.b, objeto.c);
    };

    return (
        <div>
            <h2>Maiores valores: </h2>
            
            //recebe a prop lista do componente Questao01A e utilizo um map pra iterar sob a lista e mostrar o maior valor
            <ul>
                {lista.map((item, index) => (<li key={index}>Maior valor do objeto {index + 1}: {encontrarMaior(item)} </li>))}
            </ul>
        </div>
  );
}

export default Questao01A;


