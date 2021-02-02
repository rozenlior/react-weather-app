import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App(props) {
  return (
    <div className="App">
      <div className="container">
            <div className="content">
            <Weather defaultCity="Los Angeles" />
          
            
            <small>
              <a
               href="https://github.com/rozenlior/react-weather-app"
        target="_blank"
        rel="noreferrer">
        Open-source code </a> {" "} by Lior Rozen          
             </small>
               </div>
      </div>
    </div>
  );
}