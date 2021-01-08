import React from "react";
 import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
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
      <div className="col-2">
        <div className="main-icon">
          <img src="#" alt="" />
        </div>
      </div>

      <div className="col-5 main-temp-col">
        <span className="current-temp">{props.data.temperature}</span>
        <span className="units">
          <span className="units">
            <a href="/" className="active">
              °C
            </a>{" "}
            | <a href="/">°F</a>
          </span>
        </span>
      </div>

      <div className="col-7">
        <ul className="special-temp-info">
          <li>
            <strong>High/Low:</strong> {props.data.high}°/{props.data.low}°
          </li>
          <li>
            <strong>Humidity: </strong> {props.data.humidity}%
          </li>
          <li><strong>Wind:</strong> {Math.round(props.data.wind)}km/h
          </li>
          <li>
            <strong>AQI:</strong>
          </li>
        </ul>
      </div>
    </div>
      </div>
  );
}