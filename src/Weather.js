import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";


export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [precipitation, setPrecipitation] = useState(0)

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "f1b97e6818bf3a43bc9a1319c9ff238a";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleResponse(response) {
    setweatherData({
      ready: true,
      date: new Date(),
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <form className="Form-container" onSubmit={handleSubmit}>
          <div className="Form">
            <input
              type="text"
              className="Search-city"
              placeholder="Search city"
              onChange={updateCity}
            />
            <button type="submit" className="Submit-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="Search-icon"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </form>
        <WeatherData data={weatherData} precipitation={precipitation} />
        <Forecast coordinates={weatherData.coordinates} setPrecipitation={setPrecipitation}/>
      </div>
    );
  } else {
    search();
    return `Loading...`;
  }
}
