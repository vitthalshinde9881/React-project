import React, {useState} from 'react'
import axios from 'axios'

export default function Weather() {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();
    const handleCityChange = (event) => {
        setCity(event.target.value)

    }
    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ea00150a96fa571049442cc3e781673`);
            console.log(response.data);
            setWeather(response);
        } catch (error) {
            console.error('Error fetching weather:', error);

        }
    };
    console.log(weather, 'weather')
    const handleClick = () =>{
        fetchWeather();

    };
  return (
    <div className='weather-container'>
        <input type='text' placeholder='Enter City Name' value={city} onChange=
        {handleCityChange}/> <br/>
        <button onClick={handleClick}>Get Weather</button>
        {weather && <>
            <div className='weather-info'>
                <h3>{weather.data.name}</h3>
                <p>Temp is {weather.data.main.temp}</p>
                <p>{weather.data.weather[0].description}</p>
            </div>
        
        
        </> }
    </div>
  )
}
