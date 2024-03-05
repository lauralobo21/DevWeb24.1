import MeusDados from "./components/atividade00/02MeusDados";
import Temperatura from "./components/atividade00/03Temperatura";
function App() {
  return  (
    <div>
      <MeusDados nome = "Laura Soléria Lobo Vitorino Maciel"
                 curso = "CC"
                 universidade = "UFC"/>
      <hr />
      <Temperatura celsius={34} fahrenheit={87} kelvin={64} />

    </div>
    
  )
}
export default App