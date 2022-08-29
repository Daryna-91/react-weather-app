import React from "react";
import "./WeatherForecastDay.css";
export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.dayData.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <div className="ForecastIcon">
        <img
          src={`http://openweathermap.org/img/wn/${props.dayData.weather[0].icon}@2x.png`}
          alt="Clear"
        />
      </div>
      <span className="ForecastTempMax">
        {" "}
        {Math.round(props.dayData.temp.max)}°
      </span>{" "}
      <span className="ForecastTempMin">
        {Math.round(props.dayData.temp.min)}°
      </span>
    </div>
  );
}
