import { useEffect, useState } from 'react'
import { getApiKey } from './utils/getApiKey'
import axios from 'axios'
import PrintDatesWeather from './components/PrintDatesWeather'
import './App.css'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

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
        .then((res) => setWeather(res.data))
        .catch(err => console.error(err))
    }
  }, [coords])

  console.log(weather)

  return (
    <div>
      <PrintDatesWeather weather={weather} />
    </div>
  )
}

export default App
