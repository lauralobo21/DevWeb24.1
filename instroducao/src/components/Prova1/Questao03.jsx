import React, { useState, useEffect } from "react";

const Questao03 = () => {
  // os dois estados q armazenam as capitais com a menor e maior população
  const [capitalMenorPop, setCapitalMenorPop] = useState("");
  const [capitalMaiorPop, setCapitalMaiorPop] = useState("");

  useEffect(() => {
    // funcao async é usada pra buscar os dados das populacoes e das capitais
    const fetchData = async () => {
      try {
        //filtra apenas a região europe e obtem a capital e a populacao de cada país
        const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
        const data = await response.json();

        // inicializando as variaveis
        let maiorPop = -Infinity;
        let capitalMaior = "";
        let menorPop = Infinity;
        let capitalMenor = "";

        // itera sobre os paises
        data.map((country) => {
          if (country.population < menorPop) {
            menorPop = country.population;
            //pega o nome da capital correspondente
            capitalMenor = country.capital[0]; 
          } 

          if (country.population > maiorPop) {
            maiorPop = country.population;
            capitalMaior = country.capital[0]; 
          }
          return null; 
        });

        //atualiza os valores dos estados das capitais
        setCapitalMaiorPop(capitalMaior);
        setCapitalMenorPop(capitalMenor);
      } catch (error) {
            console.log(error);
      }
    };

    // chama a funcao pra iniciar a busca dos dados
    fetchData();
  }, []); //retorna apenas na montagem do componente

  // renderizando o jsx exibindo as capitais de maior e menor pop
  return (
    <div>
      <p>Capital com maior população: {capitalMaiorPop}</p>
      <p>Capital com menor população: {capitalMenorPop}</p>
    </div>
  );
};

export default Questao03;
