import React, {useState} from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
  const [loaded, setLoaded]= useState(false);
const [forecast, setForecast]= useState(null);

function handleForecastRespponse(response){ 
  setForecast(response.data);
  setLoaded(true);
}

if(loaded && props.city === forecast.city.name) {
  return(
    <div className="WeatherForecast">
      <div className="row forecast-wrapper">
        <WeatherForecastPreview data={forecast.list[0]} />
        <WeatherForecastPreview data={forecast.list[1]} />
        <WeatherForecastPreview data={forecast.list[2]} />
        <WeatherForecastPreview data={forecast.list[3]} />
        <WeatherForecastPreview data={forecast.list[4]} />
     </div>
     </div>
     );

} else {
  let apiKey="958b71e38c385a4f0896342006026aa2";
  let units="metric";
  let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleForecastRespponse);
  return null;
}
}