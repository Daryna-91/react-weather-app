import React, { useState } from "react";
import "./WeatherData.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function handleFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function handleCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="currentWeather">
        <h2>{Math.round(props.celsius)}</h2>
        <span class="units">
          °C |{" "}
          <a href="/" onClick={handleFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="currentWeather">
        <h2>{Math.round(fahrenheit)}</h2>
        <span class="units">
          <a href="/" onClick={handleCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
