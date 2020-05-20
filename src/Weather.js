import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "ad1871ece578f60f45f6df666b9f8f6b";
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
        <h2>{weatherData.city}</h2>
        <FormattedDate date={weatherData.date} />
        <span className="text-capitalize">
          <h3>{weatherData.description}</h3>
        </span>

        <div className="searchBar">
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
          <span className="input-group-append">
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
      </div>
    );
  } else {
    search();
    return null;
  }
}
