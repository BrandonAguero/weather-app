const changeDegreeTemp = (tempCurrent) => {
    const isTypeTemp = tempCurrent.degree === 'K' ? true : false
    if (isTypeTemp) {
        const kelvinToCelcius  = Number((tempCurrent.temp - 273.15).toFixed(1));
        const degreeCurrent = 'C';
        const resultTempCurrent = {
            temp: kelvinToCelcius,
            degree: degreeCurrent,
        }
        return resultTempCurrent;
    } else {
        const celciusToKelvin = Number((tempCurrent.temp + 273.15).toFixed(1));
        const degreeCurrent = 'K';
        const resultTempCurrent = {
            temp: celciusToKelvin,
            degree: degreeCurrent,
        }
        return resultTempCurrent;
    }
}

export { changeDegreeTemp };

