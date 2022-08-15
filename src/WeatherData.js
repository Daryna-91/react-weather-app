import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

import "./WeatherData.css";
function WeatherData() {
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
        <h1>New York</h1>
        <p>Last updated: Tuesday 10:00</p>
        <p>Sunny</p>
        <div className="row">
          <div className="col-6">
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
          <div className="col-6">
            <p>Humidity: 80%</p>
            <p>Wind: 10km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WeatherData;
