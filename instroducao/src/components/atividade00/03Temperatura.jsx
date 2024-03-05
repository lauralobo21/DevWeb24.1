const Temperatura = ({celsius, fahrenheit, kelvin}) => {
    function celsiusParaFahrenheit(c) {
        return ((c*9) / 5 + 32).toFixed(2);
    }

    function fahrenheitParaCelsius(f) {
        return ((f - 32) * 5 / 9).toFixed(2);
    }   

    function kelvin(k) {

    }

    return (
        <div>
            <h1>Celsius para Fahrenheit: {celsiusParaFahrenheit(celsius)} °F</h1>
            <h1>Fahrenheit para Celsius: {fahrenheitParaCelsius(fahrenheit)} °C</h1>
        </div>
    )

}
export default Temperatura