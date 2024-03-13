//CONTEXTO
import {Variavel, createContext} from "./VariavelContext"
import {useContext} from "react"

const CompA = () => {
    const variavelDeA = "Variável de A"
    return (
        <div>
            <Variavel.Provider value = {variavelDeA}>
                <CompB/>
                <CompC/>
            </Variavel.Provider>
        </div>
    )
}

const CompB = () => {
    const variavel = useContext(Variavel)
    return (
        <div>
            <h3>B: </h3>
        </div>
    )
}

const CompC = () => {
    return (
        <div>
            <CompD/>
        </div>
    )
}

const CompD = () => {
    return (
        <div>
            <CompE/>
        </div>
    )
}

const CompE = () => {
    return (
        <div>
            <h3>E:</h3>
        </div>
    )
}

export {CompA, CompB, CompC, CompD, CompE}

