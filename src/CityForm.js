import React from "react";
import Button from "react-bootstrap/Button";
import "./CityForm.css";
function CityForm() {
  return (
    <div CityForm>
      <div className="weather">
        <form>
          <div className="SearchCityContainer">
            <input
              type="text"
              placeholder="Enter the city name"
              autofocus="on"
            />

            <Button
              type="button"
              class="btn btn-secondary"
              id="currentLocationButton"
            >
              Search
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CityForm;
