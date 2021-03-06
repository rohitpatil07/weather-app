import React , {useState} from 'react'
import fetchWeather from './api/fetchWeather';
import './App.css';

const App = () => {

  const [city,setCity] = useState('');
  const [weather,setWeather] = useState('');


  const search = async (e) =>{
    if (e.key === 'Enter'){
      const data = await fetchWeather(city);
      setWeather(data);
      setCity('');
    }
  }


  return (
    <div className='main-container'>
      <input type='text' className="search" placeholder="Search" onChange={(e)=>setCity(e.target.value)}  onKeyPress={search} value={city} />
      {weather.main ? (
        <div className='city'>
          <h2 className='city-name'>
            <span className=''>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          
          <div className='city-temp'>
            {Math.round(weather.main.temp-270)}
            <sup>&deg;C</sup>
          </div>

          <div className='info'> 
          <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
          <p>{weather.weather[0].description}</p>
          </div>

        </div>
      )
      : 
      null
      }
    </div>
  )
}

export default App;