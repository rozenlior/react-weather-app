import axios from "axios";
import React, {useState} from "react";
import "./Weather.css";
 import Loader from 'react-loader-spinner'
 import FormattedDate from "./FormattedDate";


export default function Weather(props) {
  const[weatherData, setWeatherData]=useState({ready: false});

function handleResponse (response){
  console.log(response.data);
  setWeatherData({
    date: new Date(response.data.dt * 1000),
    ready: true,
    temperature: Math.round(response.data.main.temp),
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].main,
    high: Math.round(response.data.main.temp_max),
    low: Math.round(response.data.main.temp_min)
  });
}

if (weatherData.ready) {
   return(
    <div className="Weather"> 
    <div className="row heading-wrapper">
      <span className="col header">
        <h1> {props.defaultCity}</h1>
      </span>
  <form className="search-form">
          <span className="col-10">
            <input
              type="search"
              placeholder="Enter City..."
              className="form-control search-box"
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
    </div>
    <div className="row">
      <div className="col sub-heading">
        <h2> 
          <FormattedDate date={weatherData.date} />
        </h2>
        <h3> {weatherData.description} </h3>
      </div>
    </div>
  
    <div className="row row-wrapper">
      <div className="col">
        <div className="main-icon">
          <img src="#" alt="" />
        </div>
      </div>

      <div className="col main-temp-col">
        <span className="current-temp">{weatherData.temperature}</span>
        <span className="units">
          <span className="units">
            <a href="/" className="active">
              °C
            </a>{" "}
            | <a href="/">°F</a>
          </span>
        </span>
      </div>

      <div className="col-5">
        <ul className="special-temp-info">
          <li>
            <strong>High/Low:</strong> {weatherData.high}°/{weatherData.low}°
          </li>
          <li>
            <strong>Humidity: </strong> {weatherData.humidity}%
          </li>
          <li><strong>Wind:</strong> {Math.round(weatherData.wind)} km/h
          </li>
          <li>
            <strong>AQI:</strong>
          </li>
        </ul>
      </div>
    </div>
      </div>
  );

} else {
  const apiKey="958b71e38c385a4f0896342006026aa2";
  let unit="metric";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`; 
  axios.get(apiUrl).then(handleResponse);

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