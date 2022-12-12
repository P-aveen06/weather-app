import React, { useContext, useState } from "react";
import { Context } from "../../Context";
import mockData from "../../Assets/data.json";
import { Link } from "react-router-dom";
import CardEffect from "../Shared/CardEffect";
import WeatherImg from "../../Assets/weather.png";
import Header from "../Shared/Header";
const Weather = (props) => {
  const isSecondary = {
    color: JSON.parse(localStorage.getItem("secondary")),
  };
  const isNotSecondary = {
    color: "#f4b805",
  };
  const isAccent = {
    backgroundColor: JSON.parse(localStorage.getItem("accent")),
    color: "black",
  };
  const isNotAccent = {
    backgroundColor: "none",
    color: "black",
  };
  const [temp, setTemp] = useState("Degree");
  const [description, setDescription] = useState("Description");
  const [humidity, setHumidity] = useState("Range");
  const [cityName, setCityName] = useState("city");
  const [visibility, setVisibility] = useState("");
  // const [time, setTime] = useState("Time");
  const { city } = useContext(Context);
  const [value] = city;
  try {
    const city = mockData[value];
    const url =
      "http://api.weatherstack.com/current?access_key=06154531d86df308b2515d3827b6d16d&query=" +
      city.lat +
      "," +
      city.lon;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTemp(data.current.temperature);
        setDescription(data.current.weather_descriptions[0]);
        setCityName(data.location.name);
        setHumidity(data.current.humidity);
        setVisibility(data.current.visibility);
        // setTime(data.current.observation_time);
      });
  } catch (err) {
    return (
      <div className="m-auto width-600">
        <div>
          <CardEffect
            title={"ERROR !!"}
            content={"Get Back to Home.."}
            isSecondary={isSecondary}
          isNotSecondary={isNotSecondary}
          />
          <Link to="/">
          <div className="mt-1"><button class="button-52" role="button"style={
                    JSON.parse(localStorage.getItem("settheme"))
                        ? isAccent
                        : isNotAccent
                }>Back Home</button></div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* <Header about={true} settings={true} isAccent={isAccent} isNotAccent={isNotAccent} */}
      {/* /> */}
      <div className="flex mt-4">
        <div>
        <div className="card">
        <div className="mt-2">
          <div className="mt-3">
            <i
              className="pi pi-cloud mt-2"
              style={{ fontSize: "3rem", color: "#f4b805" }}
            ></i>
            <p className="text-3 mt-1 mb-1">{temp} °C, {cityName}</p>
            <div><p className="text-2 mb-1">{description} </p></div>
            <div className="flex justify-around "><p className="text-1">Humidity: {humidity}%</p>
            <p className="text-1">visibility Range: {visibility}</p></div>
          </div>
        </div>
      </div>
        </div>
        <div>
          <img src={WeatherImg} alt="Loading ..." className="img " />
        </div>
      </div>
    </div>
  );
};
export default Weather;
