const kelvinToFahrenheit = (kelvin) => {
    const convertion = (kelvin - 273.15) * (9 / 5) + 32;
    return convertion;
}
export { kelvinToFahrenheit };