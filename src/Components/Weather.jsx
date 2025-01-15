import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "f34322c9d57842f0ac9160251251501";
  const city = "Delhi";
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>Error: {error}</p>;

  const weatherCondition = weatherData.current.condition.text;
  const temperature = weatherData.current.temp_c;
  const feelsLike = weatherData.current.feelslike_c;
  const humidity = weatherData.current.humidity;

  return (
    <div>
      <h2>Weather Information for {weatherData.location.name}</h2>
      <p>Condition: {weatherCondition}</p>
      <p>Temperature: {temperature}°C</p>
      <p>Feels like: {feelsLike}°C</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
};

export default Weather;
