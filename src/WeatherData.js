import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

import "./WeatherData.css";
function WeatherData() {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setData({
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

    setReady(true);
  }
  if (ready) {
    return (
      <div className="weather">
        <form>
          <Container>
            <Row>
              <Col md={9}>
                <input
                  type="text"
                  placeholder="Enter the city name"
                  autofocus="on"
                />
              </Col>
              <Col md={3}>
                <Button
                  type="button"
                  class="btn btn-secondary"
                  id="currentLocationButton"
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Container>
        </form>

        <div WeatherData className="data">
          <h1>{data.city}</h1>
          <p>Last updated: Tuesday 10:00</p>
          <p className="text-capitalize">{data.description}</p>
          <div className="row">
            <div className="col-6">
              <div className="WeatherDetails">
                <img src={data.icon} alt="Cloudy" class="float-left" />
                <h2>{Math.round(data.temperature)}</h2>
                <span class="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
            <div className="col-6">
              <p>Humidity: {data.humidity}%</p>
              <p>Wind: {Math.round(data.wind)} km/h</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "New York";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec6bcf916e3984240b14311d78ff3d16&units=metric`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
export default WeatherData;
