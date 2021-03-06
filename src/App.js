import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>
          <span>🌤</span> What is the weather like today? <span>🌧</span>
        </h1>
        <Weather city="Porto" />
      </div>
      <p className="credit">
        <a
          href="https://github.com/JuliaRocha99/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Júlia Rocha
      </p>
    </div>
  );
}
