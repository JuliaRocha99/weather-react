import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({
    ready: false,
    temperature: "",
    precipitation: "",
    description: "",
    icon: "",
    humidity: "",
    wind: "",
  });

  const [city] = useState(props.cityDefault);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.weatherData.main.temp,
      precipitation: response.weatherData.main.precipitation,
      description: response.weatherData.weather[0].description,
      icon: response.weatherData.weather[0].icon,
      humidity: response.weatherData.main.humidity,
      wind: response.weatherData.wind.speed,
    });
  }

  function display() {
    const apiKey = "ebf4d4fa295d6317589144d1d9cc58bc";
    const cityDefault = city;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityDefault}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    weatherData.ready = true;
  }

  if (weatherData.ready) {
    return (
      <div id="weather" className="row">
        <div className="col-6" id="actualWeather">
          <WeatherIcon code={weatherData.icon} />
          <div className="float-left">
            <WeatherTemperature celsius={props.weatherData.temp} />
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
                Wind: <span id="wind" /> {Math.round(weatherData.wind)} km/h
              </li>
            </ul>
          </span>
        </div>
      </div>
    );
  } else {
    display();
    return "Loading...";
  }
}
