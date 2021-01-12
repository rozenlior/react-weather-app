import React, {useState} from "react";
import axios from "axios";

export default function WeatherAQI(props) {
const[loaded, setLoaded]= useState(false);
const[aqi, setAqi]= useState(null);
const[airDesc, setAirDesc]= useState("");


function handleAqi(response){
setAqi(response.data.data[0].aqi);
console.log(response.data.data[0].aqi);
setAirDesc(response.data.data[0].aqi);
setLoaded(true);
}
  if (aqi >= 301) {
    airDesc= "Hazardous";
  } else if ((aqi >= 201) & (aqi < 301)) {
    airDesc= "Very Unhealthy";
  } else if ((aqi >= 101) & (aqi < 201)) {
    airDesc= "Unhealthy";
  } else if ((aqi >= 51) & (aqi < 101)) {
   airDesc=  "Moderate";
  } else if ((aqi >= 0) & (aqi < 51)) {
    airDesc= "Good";
  }


if(loaded) {
return(
  <div className="WeatherAQI">
   <strong>AQI:</strong> {aqi}({airDesc})
    </div>
);
} else {
let apiKey="a4e05904d8474359854ef52b8478450f";
let apiUrl=`https://api.weatherbit.io/v2.0/current?city=london&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleAqi);
return null;
}
}

