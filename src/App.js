import "./styles.css";

import CurrentWeather from "./CurrentWeather";

import CurrentLocation from "./CurrentLocation";

import Forecast from "./Forecast";

import Search from "./Search";

export default function App() {
  return (
    <div className="App Container">
      <Search />
      <CurrentWeather />
      <CurrentLocation />
      <Forecast />
    </div>
  );
}
