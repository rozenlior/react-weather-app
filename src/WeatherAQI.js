import React, {useState} from "react";
import axios from "axios";

export default function WeatherAQI(props) {
const[loaded, setLoaded]= useState(false);
const[aqi, setAqi]= useState(null);

function handleAqi(response){
setAqi(response.data.data[0].aqi);
console.log(response.data.data[0].aqi);
setLoaded(true);

}

if(loaded) {
return(
  <div className="WeatherAQI">
   <strong>AQI:</strong> {aqi}
    </div>
);
} else {
let apiKey="a4e05904d8474359854ef52b8478450f";
let apiUrl=`https://api.weatherbit.io/v2.0/current?city=london&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleAqi);
return null;
}
}

