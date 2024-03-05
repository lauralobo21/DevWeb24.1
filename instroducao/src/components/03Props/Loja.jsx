import Produto from "./Produto";

const Loja = () => {
  return (
    <div>
      <h1>Supermercado Quixadá</h1>
      <hr />
      <Produto
        nome="Máquina de Lavar"
        categoria="Eletro Doméstico"
        valor={2300}
      />
      <hr />
      <Produto nome="Senhor dos Anéis" categoria="Livro" valor={23} />
      <hr />
      <Produto nome="Pizza de Calbresa" categoria="Alimentação" valor={40.99} />
    </div>
  );
};

export default Loja;
