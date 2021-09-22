import "./styles.css";

import CurrentWeather from "./CurrentWeather";

import CurrentLocation from "./CurrentLocation";

import Forecast from "./Forecast";

import Search from "./Search";

export default function App() {
  return (
    <div>
      <div className="App Container">
        <Search />
        <CurrentWeather />
        <CurrentLocation />
        <Forecast />
      </div>
      <div id="footer">
        <a
          href="https://github.com/kristinbaker/weather-react-app"
          alt="Github Link"
        >
          Open-source code{" "}
        </a>{" "}
        by Kristin Baker
      </div>
    </div>
  );
}
