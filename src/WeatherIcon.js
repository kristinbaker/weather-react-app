import React from "react";

export default function WeatherIcon(props){
  let iconURL= `http://openweathermap.org/img/wn/${props.icon}@2x.png`; 


  return (

        <img
          className="Weather-icon"
          alt="Sunny"
          src={iconURL}
          id=""
        />
       
    )
}