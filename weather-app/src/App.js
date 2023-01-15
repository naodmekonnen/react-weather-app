import { useState } from 'react' 
import './App.css';

const api = {
  key:'d36356e7f90ecc33130ed934f0a00ec5',
  base:'https://api.openweathermap.org/data/2.5/'
}


function App() {

const [search, setSearch] = useState('');
const [weather, setWeather] = useState({});

const searchEntered = () => {
  fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
      // console.log(result)
    })
  
  // console.log('Search Entered!')
  // console.log(search)
}

  return (
<div className="App">
      <header>
      <h1>Weather App</h1>

      {/* search box */}
      <div>
        <input
        type='text'
        placeholder='Enter city name'
        onChange={(e) => setSearch(e.target.value)}
        />

        <button
        onClick={searchEntered}
        >

        </button>
      </div>
      {/* If weather is not undefined display results from API */}
      {typeof weather.main !== "undefined" ? (
    <div>
    {/* Location */}
      <p>{weather.name}</p>

      {/* Temperature F/C */}
      <p>{weather.main.temp}</p>

      {/* Condition {sunny } */}
      <p>{weather.weather[0].main}</p>
      <p>{weather.weather[0].description}</p>
      </div>
    ) : (''
    )}
      </header>
    </div>
  );
}

export default App;
