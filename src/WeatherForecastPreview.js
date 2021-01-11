import React from "react";

export default function WeatherForecastPreview(props){

function hours() {
  let date= new Date(props.data.dt * 1000);
  let hours= date.getHours();
  return `${hours}:00`;
}

function temperatureMax() {
  let temperatureMax= Math.round(props.data.main.temp_max);
  return `${temperatureMax}`;
}

function temperatureMin() {
  let temperatureMin= Math.round(props.data.main.temp_min);
  return `${temperatureMin}`;
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
     <strong> <span>             
       {temperatureMax()}
      </span>° {" "}
     </strong> 
     <span>
       {temperatureMin()}
       </span>°
     </div>
     </div>
  )
}