import "./App.css";

import CurrentData from "./CurrentData";

import Forecast from "./Forecast";

import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <CurrentData />
        <Forecast />
      </div>
      <div className="footer">
        <a
          className="code-link"
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
