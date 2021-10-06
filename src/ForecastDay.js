import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props){
    function maxTemperature(){
        let temperature= Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature(){
        let temperature= Math.round(props.data.temp.min);
        return `${temperature}°`;

    }

    function day(){
        let date= new Date(props.data.dt * 1000);
        let day= date.getDay()
        let days= ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
        return days[day];
    }
    return (
        <div>
        <div className="Day"> {day()} </div>
        <div className="Weather-icon">
          {/* <WeatherIcon icon={props.data.weather[0].icon}/> */}
          <WeatherIcon icon="04d"/>
        </div>
        <div className="Forecast-temperature">
          <span className="Forecast-high">{maxTemperature()}</span>
          <span className="Forecast-low">{minTemperature()}</span>
        </div>

        </div>
    )
}