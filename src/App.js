import React from "react";
import CityForm from "./CityForm";
import WeatherData from "./WeatherData";
import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <CityForm />
        <WeatherData />
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
