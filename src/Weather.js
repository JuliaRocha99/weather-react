import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h2>Porto</h2>
      <h2>FRI, 18:00 </h2>
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
}
