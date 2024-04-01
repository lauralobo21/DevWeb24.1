import { useEffect } from "react"

//objeto assincrono, só retorna depois de algum tempo
const MinhaPromessa = new Promise(
    (resolve, reject) => {
        //computação de x segundos...
        setTimeout(
            () => {
                //console.log("")
                const meuNumero = Math.floor(Math.random() * 10) + 1
                if(meuNumero % 2 === 0) resolve("Deu tudo certo! Seu número é " + meuNumero)
                else reject("Deu tudo errado, seu número é:" + meuNumero)
            }
            ,
            5000
        ) //setTimeOut
    }//Promise
) 

const ComponentePromessa = () => {

    function apiGetPromessa() {
        //se comunica com alguem remoto...
        return MinhaPromessa
    }

    //melhor lugar para fazer conexão com apis, bancos de dados...
    useEffect(
        () => {
            MinhaPromessa
            .then(
                (valor) => {
                    setResultado(valor)
                }
            )
            .catch(
                (error) => console.log(error)
            )
        }
        ,
        []
    )

    return (
        <>

        </>
    )
}

export default MinhaPromessa