import React from "react";
import './App.css';
import Weather from "./Weather";
import "./01d.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="transparent-box">
          <div className="background">
            <div className="content">
            <Weather defaultCity="Los Angeles" />
            </div>
              </div>
        </div>
            <small>
              <a
               href="https://github.com/rozenlior/react-weather-app"
        target="_blank"
        rel="noreferrer">
        Open-source code </a> {" "} by Lior Rozen          
             </small>
        
      </div>
    </div>
  );
}