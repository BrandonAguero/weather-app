import { useEffect, useState } from 'react'
import { getApiKey } from './utils/getApiKey'
import axios from 'axios'
import PrintDatesWeather from './components/PrintDatesWeather'
import InputSearchCountry from './components/InputSearchCountry'
import Loading from './components/Loading'
import './App.css'

function App() {

  const [coordsDefect, setCoordsDefect] = useState();
  const [weather, setWeather] = useState();
  const [changeTemp, setChangeTemp] = useState();
  const [inputValues, setInputValues] = useState();
  const [background, setBackground] = useState();

  useEffect(() => {
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      }
      setCoordsDefect(obj)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  useEffect(() => {
    if (coordsDefect) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordsDefect.lat}&lon=${coordsDefect.lon}&appid=${getApiKey()}`
      axios.get(url)
        .then((res) => {
          setWeather(res.data)
          setBackground(res.data.weather[0].icon)
          const tempCurrent = Number(res.data.main.temp.toFixed(1));
          const typeTemp = 'K';
          const dateTempObj = {
            temp: tempCurrent,
            degree: typeTemp,
          }
          setChangeTemp(dateTempObj)
        })
        .catch(err => console.error(err))
    }
  }, [coordsDefect])

  useEffect(() => {
    if (coordsDefect && inputValues) {
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${inputValues.cityName},${inputValues.countryName}&limit=5&appid=${getApiKey()}`
      axios.get(url)
        .then((res) => {
          const obj = {
            lat: res.data[0].lat,
            lon: res.data[0].lon,
          }
          setCoordsDefect(obj)
        })
        .catch(err => console.error(err))
    } 
  }, [inputValues])

  return (
    <div className={`div div${background}`}>
      <div className='container'>
        {
          weather 
            ? 
              <>
                <PrintDatesWeather 
                  weather={weather} 
                  changeTemp={changeTemp} 
                  setChangeTemp={setChangeTemp}
                />
                <InputSearchCountry setInputValues={setInputValues} />
              </>
            : <Loading />
        }
      </div>
    </div>
  )
}

export default App
