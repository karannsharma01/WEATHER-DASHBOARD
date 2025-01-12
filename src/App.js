import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "ec1c8c83fd720f358844803ebf1815e2";

  const fetchWeather = async () => {
    try {
      setError("");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (err) {
      setWeather(null);
      setError("City not found. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4"><b>Weather Dashboard</b></h1>
           
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          className="form-control"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary mt-3">
          Get Weather
        </button>
      </form>
      {error && <p className="text-danger">{error}</p>}
      {weather && (
        <div className="card mx-auto" style={{ maxWidth: "400px" }}>
          <div className="card-body">
            <h3 className="card-title">{weather.name}</h3>
            <h4 className="card-text">
              {weather.main.temp}°C, {weather.weather[0].description}
            </h4>
            <p className="card-text">
              Humidity: {weather.main.humidity}%
              <br />
              Wind Speed: {weather.wind.speed} m/s
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
