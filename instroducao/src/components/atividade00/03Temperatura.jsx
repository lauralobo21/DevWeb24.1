const Temperatura = () => {
    let c = 28
    let f = 76
    let k = 0
    const celsiusParaFahrenheit = (celsius) => ((c*9) / 5 + 32).toFixed(2);

    const fahrenheitParaCelsius = (fahrenheit) => ((f - 32) * 5 / 9).toFixed(2); 

    function kelvin(k) {
        let c = k - 273
        let f = (k - 273)*9/5 + 32
        return {c, f}

    }

    return (
        <div>
            <h1>{c} Celsius para Fahrenheit: {celsiusParaFahrenheit(c)} °F</h1>
            <h1>{f} Fahrenheit para Celsius: {fahrenheitParaCelsius(f)} °C</h1>
            <h1>{k} Kelvin para Celsius e Fahrenheit: {kelvin(k).c} e {kelvin(k).f} °K</h1>
        </div>
    )

}
export default Temperatura