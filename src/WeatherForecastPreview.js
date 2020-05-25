import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}h`;
  }

  function temperature() {
    let temperature = Math.round(props.data.mair.temp);

    return `${temperature}ºC`;
  }

  return (
    <div className="WeahterForecastPreview col">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
