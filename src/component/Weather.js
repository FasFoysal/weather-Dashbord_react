import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const [loc, setLocation] = useState();
  const [search, setSearch] = useState('dhaka');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const weatherGet = () => {
      axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=8d983a242f4e482e803121409201911&q=${search}`
        )
        .then((response) => {
          setLocation(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setLocation('')
        });
    };
    weatherGet();
  }, [search]);
if(loading){
  return <h1>Loadin</h1>
}
  return (
    <section className="weather_main">
      <div className="w_container">
        <input
          type="search"
          placeholder="Enter the city"
          onChange={(key) => {
            setSearch(key.target.value);
          }}
        />
        {loc ? (
          <div className="w_details">
            <img src={loc.current.condition.icon} alt="img" />
            <h2>{loc.current.temp_c} °C</h2>
            <h2>City: {loc.location.name}</h2>
            <h2>Country: {loc.location.country}</h2>
            <h2>time: {loc.location.localtime}</h2>
          </div>
        ) : (
          <h2>Location not found</h2>
        )}
      </div>
    </section>
  );
};

export default Weather;
