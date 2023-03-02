import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((response) => response.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celcius = kelvin - 273.15;
        setResult("Temperature at " + city + "\n" + Math.round(celcius) + "°C");
      })
      .catch((error) => console.log(error));
    setCity("");
  };

  return (
    <div className="App">
      <center>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Weather App</h4>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                name="city"
                value={city}
                onChange={changeHandler}
              />
              <br></br>
              <br></br>
              <input type="submit" value="Get Temperature" />
            </form>
            <h1>{result}</h1>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
