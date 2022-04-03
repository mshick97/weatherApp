import './App.css';
import React, { useEffect, useState } from "react";
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

    axios.get(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then((weatherData) => {
        setData(weatherData)
        if (lat > 0 && long > 0) setLoading(false);
        console.log(weatherData);
      });
  }, [lat, long]);

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