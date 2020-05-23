import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({
    ready: false,
  });

  const [city] = useState(props.cityDefault);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
    });
  }

  function display() {
    const apiKey = "ebf4d4fa295d6317589144d1d9cc58bc";
    const cityDefault = city;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityDefault}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    weatherData.ready = true;
  }
  console.log(props.weatherData);
  if (props.weatherData.ready) {
    return (
      <div id="weather" className="row">
        <div className="col-6" id="actualWeather">
          <div className="float-left">
            <WeatherTemperature celsius={props.weatherData.temperature} />
          </div>
          <div className="icon">
            <WeatherIcon code={props.weatherData.icon} />
          </div>
          <div id="description" />
          <p>{props.weatherData.description}</p>
        </div>
        <div className="col-6" id="weatherStats">
          <span className="weatherElements">
            <ul>
              {/* <li> */}
              {/* Precipitation: <span id="precipitation" />{" "} */}
              {/* {props.weatherData.precipitation} % */}
              {/* </li> */}
              <li>
                Humidity: <span id="humidity" /> {props.weatherData.humidity} %
              </li>
              <li>
                Wind: <span id="wind" /> {Math.round(props.weatherData.wind)}{" "}
                km/h
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
