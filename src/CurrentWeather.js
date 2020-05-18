import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      precipitation: response.data.main.precipitation,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div id="weather" className="row">
        <div className="col-6" id="actualWeather">
          <img
            src={weatherData.iconUrl}
            id="icon"
            class="float-left"
            alt={weatherData.description}
          />
          <div className="float-left">
            <strong id="temperature">
              {Math.round(weatherData.temperature)}
            </strong>
            <span className="units">ºC | ºF</span>
            <div id="description" />
          </div>
        </div>
        <div className="col-6" id="weatherStats">
          <span className="weatherElements">
            <ul>
              <li>
                Precipitation: <span id="precipitation" />{" "}
                {weatherData.precipitation} %
              </li>
              <li>
                Humidity: <span id="humidity" /> {weatherData.humidity} %
              </li>
              <li>
                Wind: <span id="wind" /> {weatherData.wind} km/h
              </li>
            </ul>
          </span>
        </div>
      </div>
    );
  } else {
    const apiKey = "bf0050d8d22310df394fff19194582c3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
