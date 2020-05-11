import React from "react";
import "./App.css";

import DateCity from "./DateCity";
import SearchForm from "./SearchForm";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import Credit from "./Credit";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>
          <span>🌤</span> What is the weather like today? <span>🌧</span>
        </h2>
        <DateCity />
        <SearchForm />
        <hr />
        <CurrentWeather />
        <hr />
        <WeatherForecast />
      </div>
      <Credit />
    </div>
  );
}
