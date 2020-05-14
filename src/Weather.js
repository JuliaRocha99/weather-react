import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h2>Porto</h2>
      <ul>
        <li>Friday 13h00</li>
        <li>Sunny</li>
      </ul>
      <div>
        <form id="search-form">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city..."
            id="searchCity"
          />
        </form>
        <div className="input-group-append">
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
        </div>
      </div>
    </div>
  );
}
