const FuncoesInternas = () => {
    let numero1 = 10;
    let numero2 = 5;
  
    function somar(x, y) {
      return x + y;
    }
  
    const subtrair = (x, y) => {
      return x - y;
    };
  
    const multiplicar = (x, y) => {
      return x * y;
    };
  
    const dividir = (x, y) => {
      return x / y;
    };
  
    return (
      <div>
        {/* usamos {} para que interprete com js */}
        <h1>Desenvolvimento de Software para a WEB!</h1>
        <h1>Calculadora</h1>
        <h3>O resultado da soma é: {somar(numero1, numero2)}</h3>
        <h3>O resultado da subtração é: {subtrair(numero1, numero2)}</h3>
        <h3>O resultado da divisão é: {multiplicar(numero1, numero2)}</h3>
        <h3>
          O resultado da multiplicação é: {dividir(numero1, numero2).toFixed(2)}
        </h3>
      </div>
    );
  };
  
  export default FuncoesInternas;
  