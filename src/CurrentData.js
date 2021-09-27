import React, { useState } from "react";
import axios from "axios";
import "./CurrentData.css";

export default function CurrentData() {
  const [weatherData, setweatherData] = useState({});
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Current-data">
        <div className="Current-weather">
          <img
            className="Weather-icon"
            alt="Sunny"
            src="//ssl.gstatic.com/onebox/weather/64/sunny.png"
            id=""
          />
          <div className="Current-temperature">
            <span id="Temperature">
              {" "}
              {Math.round(weatherData.temperature)}{" "}
            </span>
            <div className="Units">
              <span id="°Fahrenheit">°F</span>
              <span className="Celsius"> | </span>
              <span className="Celsius" id="Celsius-link">
                °C
              </span>
            </div>
          </div>
          <div className="Current-precipitation-humidity-wind">
            <div>
              Precipitation: <span> % </span>
            </div>
            <div>
              Humidity: <span> {weatherData.humidity}% </span>
            </div>
            <div>
              Wind:<span> {weatherData.wind} mph </span>
            </div>
          </div>
        </div>
        <div className="Current-location">
          <span>
            <div className="City">{weatherData.city}</div>
            <div className="Date">Wednesday 11:00 AM</div>
            <div className="Weather-description">
              <span className="text-capitalize">{weatherData.description}</span>
            </div>
          </span>
        </div>
      </div>
    );
  } else {
    const apiKey = "f1b97e6818bf3a43bc9a1319c9ff238a";
    let city = "Austin";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);

    return `Loading...`;
  }
}
