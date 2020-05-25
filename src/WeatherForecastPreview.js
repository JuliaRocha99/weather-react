import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDefaultPreview(props) {
  return (
    <div className="WeahterForecastPreview col">
      {new Date(props.data.dt * 1000).getHours()} h
      <WeatherIcon code={props.data.weather[0].icon} />
      {Math.round(props.data.main.temp)}ºC
    </div>
  );
}
