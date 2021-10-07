import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded]= useState(false);
  let [forecast, setForecast]= useState(null);

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
    props.setPrecipitation(Math.round(response.data.daily[0].pop * 100))
  }
  
  if (loaded){
      return (
        <div className="Forecast">
          <div className="Forecast-daily-containers"  className="row">
          {forecast.map(function (dailyForecast, index) {
            return (
            <div key={index} className="col"> 
            <ForecastDay data={dailyForecast} />
              </div>
            )
          }
          )
          }
          </div>
        </div>
      )
     }
  else {
  const apiKey = "f1b97e6818bf3a43bc9a1319c9ff238a";
  let latitude= props.coordinates.lat;
  let longitude= props.coordinates.lon;
  let apiURL= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiURL).then(handleResponse);
  return "Loading...";
  
} 
}
