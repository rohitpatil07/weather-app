const fetchWeather = async (cityname) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${process.env.REACT_APP_API_KEY}`);
    const data = await response.json();
    return data;
}

export default fetchWeather;