import React from "react";

export default function CurrentWeather() {
  return (
    <div id="weather" className="row">
      <div className="col-6" id="actualWeather">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          id="icon"
          class="float-left"
          alt="sun"
        />
        <div className="float-left">
          <strong id="temperature"> 20 </strong>
          <span className="units">ºC | ºF</span>
          <div id="description" />
        </div>
      </div>
      <div className="col-6" id="weatherStats">
        <span className="weatherElements">
          <ul>
            <li>
              Humidity: <span id="humidity" /> 55 %
            </li>
            <li>
              Wind: <span id="wind" /> 10 km/h
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
}
