import React from "react";

export default function SearchForm() {
  return (
    <div className="col input-group mb-3">
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
          id="eyes"
          onClick="search(document.getElementById('searchCity').value)"
        >
          <span>🔍</span>
        </button>
      </div>
    </div>
  );
}
