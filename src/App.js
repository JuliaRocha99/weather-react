import React from "react";
import "./App.css";

import Weather from "./Weather";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          <span>🌤</span> What is the weather like today? <span>🌧</span>
        </h1>
        <Weather />
        <CurrentWeather defaultCity="Porto" />
        <WeatherForecast />
      </div>
      <p className="credit">
        <a
          href="https://github.com/JuliaRocha99/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Júlia Rocha
      </p>
    </div>
  );
}
