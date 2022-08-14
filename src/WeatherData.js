import React from "react";
import "./WeatherData.css";
function WeatherData() {
  return (
    <div WeatherData className="data">
      <h1>New York</h1>
      <p>Last updated: Tuesday 10:00</p>
      <p>Sunny</p>
      <div class="row">
        <div class="col-6">
          <div className="WeatherDetails">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Cloudy"
              class="float-left"
            />
            <h2>19</h2>
            <span class="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
        <div class="col-6">
          <p>Humidity: 80%</p>
          <p>Wind: 10km/h</p>
        </div>
      </div>
    </div>
  );
}
export default WeatherData;
