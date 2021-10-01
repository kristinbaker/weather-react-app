import "./App.css";

import Weather from "./Weather";

import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Austin" />
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
