import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);

  return (
    <div className="App">
      Hello Meredith
    </div>
  );
}

export default App;