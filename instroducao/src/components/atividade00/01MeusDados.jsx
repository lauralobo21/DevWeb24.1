// FUNCTION
// function MeusDados () {
//     const nome = "Laura Soléria Lobo Vitorino Maciel"
//     const curso = "Ciência da Computação"
//     const universidade = "UFC"
//     return (
//         <div>
//         <h1> Nome: {nome}</h1>
//         <h1> Curso: {curso}</h1>
//         <h1> Universidade: {universidade}</h1>
//         </div>
//     )
// }

// ARROW FUNCTION
let nome = "Laura Soléria Lobo Vitorino Maciel"
let curso = "Ciência da Computação"
let universidade = "UFC"

const MeusDados = () => {
    return (
        <div>
            <h1>Nome: {nome} </h1>
            <h1>Curso: {curso} </h1>
            <h1>Universidade {universidade}</h1>
        </div>
    )
}
export default MeusDados

// ARROW FUNCTION SEM RETORNO
// const MeusDados = () => 
//         <div>
//             <h1>Nome: {nome} </h1>
//             <h1>Curso: {curso} </h1>
//             <h1>Universidade {universidade}</h1>
//         </div>
