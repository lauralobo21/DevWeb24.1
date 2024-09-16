import React, { useEffect, useState } from "react";

const Questao04 = () => {
  // os dois estados q armazenam as capitais com a menor e maior população
  const [capitalMenorPop, setCapitalMenorPop] = useState("");
  const [capitalMaiorPop, setCapitalMaiorPop] = useState("");

  useEffect(() => {
    // funcao async é usada pra buscar os dados das populacoes e das capitais
    const fetchData = async () => {
      // simulando uma promessa de requisicao
      const dataPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { capital: ["Dublin"], population: 49944724 },
            { capital: ["Nícosia"], population: 1207359 },
            { capital: ["Madrid"], population: 47351567 },
          ]);
        }, 3); //tempo de espera
      });

      //tenta processar os dados da promessa 
      try {
        //esperando a resolucao da promessa
        const data = await dataPromise;
        let capitalMaior = null;
        let capitalMenor = null;

        // iterando o array dos dados
        data.forEach((country) => {

          if(!capitalMaior || country.population > capitalMaior.population) {
            capitalMaior = country;
          }
          if(!capitalMenor || country.population < capitalMenor.population) {
            capitalMenor = country;
          }
        });

        //atualizando os dados das capitais
        setCapitalMaiorPop(capitalMaior.capital[0]);
        setCapitalMenorPop(capitalMenor.capital[0]);
      } catch (error) {
        console.log(error);
      }
    };

    // chama a funcao pra iniciar a busca dos dados
    fetchData();
  }, []); //retorna apenas na montagem do componente

  return (
    <div>
      <p>Capital com maior população: {capitalMaiorPopulacao}</p>
      <p>Capital com menor população: {capitalMenorPopulacao}</p>
    </div>
  );
};

export default Questao04;
