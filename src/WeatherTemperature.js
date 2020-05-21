import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <strong id="temperature">{Math.round(props.celsius)}</strong>
        <span className="unit">
          {" "}
          ºC |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return "fahrenheit";
  }
}
