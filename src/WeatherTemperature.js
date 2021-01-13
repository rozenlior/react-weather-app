 import React from "react";

 export default function WeatherTemperature(props){
  function showFahrenheit(event){
     event.preventDefault();
     props.setUnit("fahrenheit");
    }

   function showCelsius(event) {
     event.preventDefault();
     props.setUnit("celsius");
    }

   function fahrenheit() {
     return (props.celsius * 9)/5 + 32;
     }

   if (props.unit === "celsius") {
     return ( 
      <div className="WeatherTemperature">
      <span className="current-temp">
        {props.celsius} 
      </span>
      <span className="units"> °C | {" "}
      <a href="/" onClick={showFahrenheit}> °F
      </a>
      </span>
      </div>
     );
  } else {
    return (
      <div className="WeatherTemperature">
      <span className="current-temp">
        {Math.round(fahrenheit())}
      </span>
      <span className="units">
      <a href="/" onClick={showCelsius}> °C
        </a> {" "} | °F
      </span>
      </div>
  );
 }
}
 
 