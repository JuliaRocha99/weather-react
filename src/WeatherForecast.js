import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        <div className="forecastTitle">
          <h4>FORECAST</h4>
        </div>
        <WeatherForecastPreview data={forecast.list[0]} />
      </div>
    );
  } else {
    let apiKey = "ebf4d4fa295d6317589144d1d9cc58bc";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
