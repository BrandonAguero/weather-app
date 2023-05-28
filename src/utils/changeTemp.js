const changeDegreeTemp = (tempCurrent) => {
    const isTypeTemp = tempCurrent.degree === 'F' ? true : false
    if (isTypeTemp) {
        const fahrenheitToCelcius  = Number(((tempCurrent.temp - 32) * (5 / 9)).toFixed(1));
        const degreeCurrent = 'C';
        const resultTempCurrent = {
            temp: fahrenheitToCelcius,
            degree: degreeCurrent,
        }
        return resultTempCurrent;
    } else {
        const celciusToFahrenheit = Number(((tempCurrent.temp) * (9 / 5) + 32).toFixed(1));
        const degreeCurrent = 'F';
        const resultTempCurrent = {
            temp: celciusToFahrenheit,
            degree: degreeCurrent,
        }
        return resultTempCurrent;
    }
}

export { changeDegreeTemp };

