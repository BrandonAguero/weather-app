import { changeDegreeTemp } from "../utils/changeTemp"
import "./styles/PrintDatesWeather.css"

const PrintDatesWeather = ({ weather, changeTemp, setChangeTemp}) => {

    const handleChangeTemp = () => {
        const convertTemp = changeDegreeTemp(changeTemp);
        setChangeTemp(convertTemp)
    }

    return (
        <>
            <header className="header">
                <h1>Weather App</h1>
                <h2>{weather?.name}, {weather?.sys.country}</h2>
            </header>
            <main className="main">
                <figure>
                    <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
                </figure>
                <article>
                    <h3>"Overcast Clouds"</h3>
                    <ul>
                        <li><span>Wind Speed</span><span>{weather?.wind.speed}m/s</span></li>
                        <li><span>Clouds</span><span>{weather?.main.humidity}%</span></li>
                        <li><span>Pressure</span><span>{weather?.main.pressure}hPa</span></li>
                    </ul>
                </article>
            </main>
            <aside className="aside">
                <h2>{changeTemp?.temp} {changeTemp?.degree === 'F' ? '°F' : '°C'}</h2>
                <button onClick={handleChangeTemp}><span>Change to{changeTemp?.degree === 'F' ? '°C' : '°F'}</span></button>
            </aside>
        </>

    )
}

export default PrintDatesWeather