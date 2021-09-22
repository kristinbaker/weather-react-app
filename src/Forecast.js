import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="Forecast-daily-containers">
        <div className="Day"> Wed </div>
        <div className="Weather-icon">
          <img
            alt="Mostly sunny"
            src="//ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
          />
        </div>
        <div className="Forecast-temperature">
          <span className="Forecast-high">99°</span>
          <span className="Forecast-low">71°</span>
        </div>
      </div>
      <div className=" Forecast-daily-containers">
        <div className="Day">Thu </div>
        <div className="Weather-icon">
          <img
            alt="Sunny"
            src="//ssl.gstatic.com/onebox/weather/48/sunny.png"
          />
        </div>
        <div className="Forecast-temperature">
          <span className="Forecast-high">97°</span>
          <span className="Forecast-low">67°</span>
        </div>
      </div>
      <div className="Forecast-daily-containers">
        <div className="Day"> Fri </div>
        <div className="Weather-icon">
          <img
            alt="Sunny"
            src="//ssl.gstatic.com/onebox/weather/48/sunny.png"
          />
        </div>
        <div className="Forecast-temperature">
          <span className="Forecast-high">95°</span>
          <span className="Forecast-low">66°</span>
        </div>
      </div>
      <div className="Forecast-daily-containers">
        <div className="Day">Sat</div>
        <div className="Weather-icon">
          <img
            alt="Sunny"
            src="//ssl.gstatic.com/onebox/weather/48/sunny.png"
          />
        </div>
        <div className="Forecast-temperature">
          <span className="Forecast-high">96°</span>
          <span className="Forecast-low">66°</span>
        </div>
      </div>
      <div className="Forecast-daily-containers">
        <div className="Day">Sun</div>
        <div className="Weather-icon">
          <img
            alt="Partly cloudy"
            src="//ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
          />
        </div>
        <div className="Forecast-temperature">
          <span className="Forecast-high">93°</span>
          <span className="Forecast-low">72°</span>
        </div>
      </div>
      <div className="Forecast-daily-containers">
        <div className="Day">Mon</div>
        <div className="Weather-icon">
          <img
            alt="Isolated thunderstorms"
            src="//ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
          />
        </div>
        <div className="Forecast-temperature">
          <span className="Forecast-high">89°</span>
          <span className="Forecast-low">72°</span>
        </div>
      </div>
      <div className="Forecast-daily-containers">
        <div className="Day">Tue</div>
        <div className="Weather-icon">
          <img
            alt="Partly cloudy"
            src="//ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
          />
        </div>
        <div className="Forecast-temperature">
          <span className="Forecast-high">92°</span>
          <span className="Forecast-low">73°</span>
        </div>
      </div>
      <div className="Forecast-daily-containers">
        <div className="Day">Wed</div>
        <div className="Weather-icon">
          <img
            alt="Isolated thunderstorms"
            src="//ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
          />
        </div>
        <div className="Forecast-temperature">
          <span className="Forecast-high">93°</span>
          <span className="Forecast-low">73°</span>
        </div>
      </div>
    </div>
  );
}
