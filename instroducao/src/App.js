// import SistemaSolar from "./components/04Children/SistemaSolar"
// import Planeta from "./components/04Children/Planeta"
//import Galaxia from "./components/04Children/Galaxia"
//import ComPai from "./components/05ComPaiFilho/ComPai"
//import Estado from "./components/06Estados/Estado"
//import Pokemon from "./components/06Estados/Pokemon";
//import { CompA } from "./components/07PropDrilling/PropDrilling";
//import PokemonPrincipal from "./components/09PokemonContexto/PokemonPrincipal";
//import Pai from "./components/atividade01/questao01/01Pai";
//import Filho from "./components/atividade01/questao01/01Filho";
//import MeuPC from "./components/atividade01/questao01/02MeuPC";
import * as Arena from "./components/atividade01/questao01/03Batalha"

function App() {
    return (
        <div>
            <h1>Desenvolvimento de Software para Web!</h1>
            <Arena.World>
                <Arena.Arena arena = "Arena 1" />
                <Arena.Arena arena = "Arena 2" />
                <Arena.Arena arena = "Arena 3" />
            </Arena.World>
        </div>
    );
}

export default App;