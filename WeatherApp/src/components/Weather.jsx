import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"39a54f19c110e25122df43fd4cf1909b"}`,
      );
      setWeather(response);
    } catch (error) {
      console.log("Error Fetching a weather data", error);
    }
  };
  const handleClick = () => {
    fetchWeather();
  };
  return (
    <div className="weather-container">
      <input className="inp"
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={handleCityChange}
      ></input>
      <button className= 'btn' onClick={handleClick}> Get Weather</button>
      {weather && (
        <>
          <div className="weather-info" />
          <h3>{weather.data.name}</h3>
          <p>Temp is {weather.data.main.temp}</p>
          <p>{weather.data.weather[0].description}</p>
        </>
      )}
    </div>
  );
}
