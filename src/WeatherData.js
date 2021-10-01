import React from "react";

import FormattedDate from "./FormattedDate";

import TemperatureUnit from "./TemperatureUnit";

export default function WeatherData(props) {
  return (
    <div className="Current-data">
      <div className="Current-weather">
        <img
          className="Weather-icon"
          alt="Sunny"
          src={props.data.iconURL}
          id=""
        />
        <TemperatureUnit fahrenheit={props.data.temperature}/>
        <div className="Current-precipitation-humidity-wind">
          <div>
            Precipitation: <span> % </span>
          </div>
          <div>
            Humidity: <span> {props.data.humidity}% </span>
          </div>
          <div>
            Wind:<span> {props.data.wind} mph </span>
          </div>
        </div>
      </div>
      <div className="Current-location">
        <span>
          <div className="City">{props.data.city}</div>
          <div className="Date">
            {" "}
            <FormattedDate date={props.data.date} />{" "}
          </div>
          <div className="Weather-description">
            <span className="text-capitalize">{props.data.description}</span>
          </div>
        </span>
      </div>
    </div>
  );
}
