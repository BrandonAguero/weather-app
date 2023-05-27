import { removeAccents } from "../utils/removeAcents";
import "./styles/InputSearchCountry.css"


const InputSearchCountry = ({ setInputValues }) => {
    const objCodeCountries = [
        {
            name: "argentina",
            code: "AR",
        },
        {
            name: "bolivia",
            code: "BO",
        },
        {
            name: "brasil",
            code: "BR",
        },
        {
            name: "chile",
            code: "CL",
        },
        {
            name: "colombia",
            code: "CO",
        },
        {
            name: "ecuador",
            code: "EC",
        },
        {
            name: "guyana",
            code: "GY",
        },
        {
            name: "paraguay",
            code: "PY",
        },
        {
            name: "peru",
            code: "PE",
        },
        {
            name: "suriname",
            code: "SR",
        },
        {
            name: "uruguay",
            code: "UY",
        },
        {
            name: "venezuela",
            code: "VE",
        },
        {
            name: "mexico",
            code: "MX",
        },
        {
            name: "estados unidos",
            code: "US",
        },
        {
            name: "costa rica",
            code: "CR",
        },
        {
            name: "panama",
            code: "PA",
        },
        {
            name: "espana",
            code: "ES",
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
                countryName: whatIsCode.code,
            }
            setInputValues(objDates)
            event.target.valueInputCity.value = "";
            event.target.valueInputCountry.value = "";
        }
    }

    return (
        <footer className="footer">
            <form className="footer__name" onSubmit={handleClickButton}>
                <div>
                    <label htmlFor="nameCity">¿Cuál es tu ciudad?</label>
                    <input id="valueInputCity" type="text" placeholder="Lima" required/>
                </div>
                <div>
                    <label htmlFor="nameCountry">¿Cuál es tu país?</label>
                    <input type="text" id="valueInputCountry" placeholder="Perú" required/>
                </div>
                <input type="submit" value="Search Country"/>
            </form>
        </footer>
    )
}

export default InputSearchCountry