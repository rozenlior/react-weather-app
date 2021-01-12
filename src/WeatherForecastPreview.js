import React from "react";

export default function WeatherForecastPreview(props){
function hours() {
  let date= new Date(props.data.dt * 1000);
  let hours= date.getHours();
  return `${hours}:00`;
}

  function temperature() {
    let maxTemperature = Math.round(props.data.main.temp_max);
    let minTemperature = Math.round(props.data.main.temp_min);
    if (props.unit === "fahrenheit") {
      maxTemperature = Math.round((maxTemperature *9)/5 +32);
      minTemperature = Math.round((minTemperature * 9)/5 + 32);
    }
    return (
      <div className="temperature">
      <strong> {maxTemperature}°</strong>  {minTemperature}°</div>
    );
  }


  return(
    <div className="WeatherForecastPreview col">
          <h3>    
            <div className="hourly-forecast">
              {hours()}
             </div>
          </h3>
           <div className="forecast-icons">
             <img src={`/img-icons/${props.data.weather[0].icon}.png`} alt={props.data.weather[0].description} />
           </div>
      <div className="highs-lows">
      <span>     
       {temperature()}        
      </span>
     </div>
     </div>
  )
}