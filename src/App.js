import './App.css';
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Weather from './Components/weather.js';
import { Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';

function App() {

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    getWeather(lat, long)
      .then((weather) => {
        setData(weather);
        setLoading(false);
      })

  }, [lat, long])

  function getWeather(latResults, longResults) {
    const weatherDataReturned = axios.get(`${process.env.REACT_APP_API_URL}/weather/?lat=${latResults}&lon=${longResults}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    const jsonStringifiedData = JSON.stringify(weatherDataReturned);
    return jsonStringifiedData;
  }

  return (
    <div className="App">
      {(!loading) ? (
        <Weather weatherData={data} />
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading...</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
}

export default App;