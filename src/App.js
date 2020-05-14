import React from "react";
import "./App.css";

import Weather from "./Weather";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import Credit from "./Credit";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          <span>🌤</span> What is the weather like today? <span>🌧</span>
        </h1>
        <Weather />
        <hr />
        <CurrentWeather />
        <hr />
        <WeatherForecast />
      </div>
      <Credit />
    </div>
  );
}
