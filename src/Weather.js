import axios from "axios";
import React, {useState} from "react";
import "./Weather.css";
 import Loader from 'react-loader-spinner'
 import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const[weatherData, setWeatherData]=useState({ready: false});
  const [city, setCity]=useState(props.defaultCity);
  const[unit, setUnit]= useState("celsius");

function handleResponse (response){
  setWeatherData({
    date: new Date(response.data.dt * 1000),
    ready: true,
    temperature: Math.round(response.data.main.temp),
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].main,
    high: Math.round(response.data.main.temp_max),
    low: Math.round(response.data.main.temp_min),
    city: response.data.name,
    icon: `/img-icons/${response.data.weather[0].icon}.png`,
    background: `url(/img-background/${response.data.weather[0].icon}.jpg)`
  });
}

function handleSubmit(event) {
  event.preventDefault();
  search(city);
}

function handleCityChange(event) {
  setCity(event.target.value);
}

function search() {
 const apiKey="958b71e38c385a4f0896342006026aa2";
  let unit="metric";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`; 
  axios.get(apiUrl).then(handleResponse);
}

if (weatherData.ready) {
   return(
    <div className="Weather">
         <div className="transparent-box" style={{backgroundImage:weatherData.background}}>
    <div className="row heading-wrapper">
      <span className="col header">
        <h1> {weatherData.city} </h1>
      </span>
  <form className="search-form" onSubmit={handleSubmit}>
          <span className="col-10">
            <input
              type="search"
              placeholder="Enter City..."
              className="form-control search-box"
              onChange={handleCityChange}
            />
          </span>
          <span className="col">
            <input
              type="submit"
              value="Go"
              className="form-control btn btn-light"
            />
          </span>
        </form>
   <WeatherInfo data={weatherData} city={weatherData.city} unit={unit} setUnit={setUnit} />
   <WeatherForecast city={weatherData.city} unit={unit} />
    </div>
    </div>
    </div>
   );

} else {
 
search();
 return (
 <Loader
         type="ThreeDots"
         color="#00BFFF"
         height={100}
         width={100}
      />
 );
}
}