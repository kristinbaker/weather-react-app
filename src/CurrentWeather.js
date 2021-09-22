import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="Current-weather">
      <img
        className="Weather-icon"
        alt="Sunny"
        src="//ssl.gstatic.com/onebox/weather/64/sunny.png"
        id=""
      />
      <div className="Current-temperature">
        <span id="Temperature"> 90 </span>
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
          Precipitation: <span>0%</span>
        </div>
        <div>
          Humidity: <span>53%</span>
        </div>
        <div>
          Wind:<span>4 mph</span>
        </div>
      </div>
    </div>
  );
}
