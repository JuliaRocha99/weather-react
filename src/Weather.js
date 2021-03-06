import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "ebf4d4fa295d6317589144d1d9cc58bc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="CurrentSearch" row>
          <span className="CityPlace">
            <h2>
              {weatherData.city}
              <p>
                <FormattedDate date={weatherData.date} />
              </p>
            </h2>
          </span>
          <span className="input-group-append">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city..."
                id="searchCity"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </form>
            <button
              className="btn btn-outline-secondary border art"
              type="submit"
              value="search"
              id="eyes"
              onClick={() =>
                search(document.getElementById("searchCity").value)
              }
            >
              <span role="img" aria-label="search">
                🔍
              </span>
            </button>
          </span>
        </div>

        <CurrentWeather cityDefault={props.city} weatherData={weatherData} />
        <div>
          {" "}
          <div className="forecastTitle">
            <h4>FORECAST</h4>
          </div>
          <WeatherForecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
