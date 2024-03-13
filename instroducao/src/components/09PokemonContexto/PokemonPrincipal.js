import { useState } from "react"
import PokemonImagem from "./PokemonImagem"
import { PokemonContexto } from "./PokemonContext"

const PokemonPrincipal = () => {
    const [id, setId] = useState(150)
    return (
        <div>
            <h3>Pokemon!</h3>
            <PokemonContexto.Provider value={{id:id, setId:setId}}>
                <PokemonImagem />
            </PokemonContexto.Provider>
        </div>
    )
}
export default PokemonPrincipal