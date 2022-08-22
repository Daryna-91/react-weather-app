import React from "react";

import WeatherData from "./WeatherData";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <WeatherData defaultCity="New York" />
      </div>
      <a
        href="https://github.com/Daryna-91/react-weather-app"
        className="repository-link"
        target="_blank"
        rel="noreferrer"
      >
        Coded by Daryna Lytvynenko
      </a>
    </div>
  );
}
