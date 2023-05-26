const PrintDatesWeather = ({ weather }) => {
    return (
        <>
            <header>
                <h1>Weather App</h1>
                <h2>{weather?.name}, {weather?.sys.country}</h2>
            </header>
            <main>
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
            <aside>
                <h2>{weather?.main.temp}</h2>
            </aside>
            <footer>
                <button>Change to °F</button>
            </footer>
        </>

    )
}

export default PrintDatesWeather