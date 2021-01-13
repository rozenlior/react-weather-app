import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherAQI from "./WeatherAQI";

export default function WeatherInfo(props) {
  function highLow(){
    let highTemperature = Math.round(props.data.high);
    let lowTemperature = Math.round(props.data.low);
    if (props.unit === "fahrenheit") {
    highTemperature = Math.round((highTemperature * 9)/5 + 32);
    lowTemperature = Math.round((lowTemperature * 9)/5 + 32);
  }
  return (
    <span className="highLow">
    {highTemperature}°/{lowTemperature}°
    </span>
  );
}

  return(
    <div className="WeatherInfo">
     <div className="row">
      <div className="col sub-heading">
        <h2> 
          <FormattedDate date={props.data.date} />
        </h2>
        <h3> {props.data.description} </h3>
      </div>
    </div>
  
    <div className="row row-wrapper">
      <div className="col-3">
        <div className="main-icon">
          <img src={props.data.icon} alt={props.data.description} />
        </div>
      </div>

      <div className="col-4 main-temp-col">
        <WeatherTemperature unit={props.unit} setUnit={props.setUnit} celsius={props.data.temperature} />
      </div>

      <div className="col-6">
        <ul className="special-temp-info">
          <li>
            <strong> High/Low:</strong> <span>{highLow()}</span>
          </li>        
          <li>
            <strong> Humidity: </strong> {props.data.humidity}%
          </li>
          <li>
            <strong> Wind:</strong> {Math.round(props.data.wind)}km/h
          </li>
          <li>
           <WeatherAQI city={props.city} />
          </li>
        </ul>
       </div>
      </div>
   </div>
  );
}