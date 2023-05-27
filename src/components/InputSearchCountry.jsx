import { removeAccents } from "../utils/removeAcents";

const InputSearchCountry = ({ setInputValues }) => {
    const objCodeCountries = [
        {
            name: "argentina",
            code: "AR",
        },
        {
            name: "bolivia",
            id: "BO",
        },
        {
            name: "brasil",
            code: "BR",
        },
        {
            name: "chile",
            id: "CL",
        },
        {
            name: "colombia",
            code: "CO",
        },
        {
            name: "ecuador",
            id: "EC",
        },
        {
            name: "guyana",
            code: "GY",
        },
        {
            name: "paraguay",
            id: "PY",
        },
        {
            name: "peru",
            code: "PE",
        },
        {
            name: "suriname",
            id: "SR",
        },
        {
            name: "uruguay",
            code: "UY",
        },
        {
            name: "venezuela",
            id: "VE",
        },
        {
            name: "mexico",
            code: "MX",
        },
        {
            name: "estados unidos",
            id: "US",
        },
        {
            name: "costa rica",
            id: "CR",
        },
        {
            name: "panama",
            id: "PA",
        },
        {
            name: "espana",
            id: "ES",
        }
    ]
    
    const handleClickButton = (event) => {
        event.preventDefault();
        const valueInputCity = event.target.valueInputCity.value.trim();
        const valueInputCountry =  removeAccents(event.target.valueInputCountry.value.trim().toLowerCase());
        if (valueInputCity && valueInputCountry) {
            const whatIsCode = objCodeCountries.find((country) => {
                if (country.name === valueInputCountry) {
                    return country
                }
            })
            const objDates = {
                cityName: valueInputCity,
                countryName: whatIsCode.id,
            }
            setInputValues(objDates)
            event.target.valueInputCity.value = "";
            event.target.valueInputCountry.value = "";
        }

    }

    return (
        <footer>
            <form onSubmit={handleClickButton}>
                <h4>¿Tienes curiosidad por saber cuál es la temperatura de otro país y de su ciudad? ¡Búscala aquí!</h4>
                <div>
                    <label htmlFor="nameCity">¿Cuál es tu ciudad?</label>
                    <input id="valueInputCity" type="text" placeholder="Lima" required/>
                </div>
                <div>
                    <label htmlFor="nameCountry">¿Cuál es tu país?</label>
                    <input type="text" id="valueInputCountry" placeholder="Perú" required/>
                </div>
                <input type="submit" />
            </form>
        </footer>
    )
}

export default InputSearchCountry