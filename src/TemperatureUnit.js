import React, { useState } from "react";

import "./Weather.css";

export default function TemperatureUnit(props){
    const [unit, setUnit]= useState("fahrenheit");
    
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function celsius(){
        return ((props.fahrenheit) - 32) * 5 / 9;
    }

    if (unit === "fahrenheit") {
    return (
        <div className="Current-temperature">
        <span id="Temperature"> {Math.round(props.fahrenheit)} </span>
        <div className="Units">
        <span className="Celsius" >
           <a href="/" onClick={showCelsius} className="Inactive-unit"> °C </a>
          </span>
          <span className="Celsius"> | </span>
          <span id="°Fahrenheit">°F</span>
        </div>
      </div>
    );
    } else {
        return (
         <div className="Current-temperature">
            <span id="Temperature"> {Math.round(celsius())} </span>
            <div className="Units">
            <span className="Celsius" >
                        °C 
                 </span> <span className="Celsius"> | </span>
                 <span id="°Fahrenheit"><a href="/" onClick={showFahrenheit} className="Inactive-unit">°F</a></span>

             </div>
            </div>
        );
    }
}