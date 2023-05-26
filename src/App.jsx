import { useEffect, useState } from 'react'
import { getApiKey } from './utils/getApiKey'
import axios from 'axios'
import PrintDatesWeather from './components/PrintDatesWeather'
import './App.css'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [changeTemp, setChangeTemp] = useState()

  useEffect(() => {
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  useEffect(() => {
    if (coords) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${getApiKey()}`
      axios.get(url)
        .then((res) => {
          setWeather(res.data)
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
  }, [coords])

  return (
    <div>
      <PrintDatesWeather 
        weather={weather} 
        changeTemp={changeTemp} 
        setChangeTemp={setChangeTemp}
      />
      
    </div>
  )
}

export default App
