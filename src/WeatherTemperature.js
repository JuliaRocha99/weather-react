import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="unit">
          {" "}
          ºC |{" "}
          <a href="/" onClick={showFahrenheit}>
            ºF
          </a>
        </span>
        <strong id="temperature">{Math.round(props.celsius)}</strong>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="unit">
          {" "}
          <a href="/" onClick={showCelsius}>
            ºC
          </a>
          | ºF
        </span>
        <strong id="temperature">{Math.round(fahrenheit)}</strong>
      </div>
    );
  }
}
