import React, { useState } from "react";

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
          <span id="°Fahrenheit">°F</span>
          <span className="Celsius"> | </span>
          <span className="Celsius" id="Celsius-link">
           <a href="/" onClick={showCelsius}> °C </a>
          </span>
        </div>
      </div>
    );
    } else {
        return (
         <div className="Current-temperature">
            <span id="Temperature"> {Math.round(celsius())} </span>
            <div className="Units">
                <span id="°Fahrenheit"><a href="/" onClick={showFahrenheit}>°F</a></span>
                <span className="Celsius"> | </span>
                 <span className="Celsius" id="Celsius-link">
                        °C 
                 </span>
             </div>
            </div>
        );
    }
}