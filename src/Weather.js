import React from "react";
import "./Weather.css";

export default function Weather() {
  return(
    <div className="Weather"> 
    <div className="row heading-wrapper">
      <span className="col header">
        <h1> Los Angeles </h1>
      </span>
 
    </div>
    <div className="row">
      <div className="col sub-heading">
        <h2> Friday</h2>
        <h3> Cloudy </h3>
      </div>
    </div>
  
    <div className="row row-wrapper">
      <div className="col">
        <div className="main-icon">
          <img src="#" alt="" />
        </div>
      </div>

      <div className="col main-temp-col">
        <span className="current-temp"></span>
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
            <strong>High/Low:</strong> °/ °
          </li>
          <li>
            <strong>Humidity: </strong>%
          </li>
          <li><strong>Wind:</strong> km/h
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