import React from "react";
import CityForm from "./CityForm";
import WeatherData from "./WeatherData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CityForm />
      <WeatherData />
    </div>
  );
}
