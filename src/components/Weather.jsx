import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherContainer, Temp, City } from "./WeatherStyles";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=montréal&units=metric&appid=62f60700babd38f5378d6d9f5af42e4c";

const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <WeatherContainer>
      <Temp>{data.main.temp.toFixed(0)}&deg;C</Temp>
      <City>Montreal, QC</City>
    </WeatherContainer>
  );
};

export default Weather;
