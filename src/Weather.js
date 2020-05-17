import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: "FRI, 19:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h2>{weatherData.city}</h2>
        <h2 ID="date">{weatherData.date} </h2>
        <span className="text-capitalize">{weatherData.description}</span>
        <div>
          <form id="search-form">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city..."
              id="searchCity"
            />
          </form>
          <span className="input-group-append">
            <button
              className="btn btn-outline-secondary border art"
              type="submit"
              value="search"
              id="eyes"
              onClick="search(document.getElementById('searchCity').value)"
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
    const apiKey = "bf0050d8d22310df394fff19194582c3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
