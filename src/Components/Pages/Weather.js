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
    after: JSON.parse(localStorage.getItem("accent")),
  };
  const isNotAccent = {
    backgroundColor: "none",
    color: "black",
  };
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState(" ");
  const [humidity, setHumidity] = useState(" ");
  const [cityName, setCityName] = useState("");
  const [visibility, setVisibility] = useState("");
  const [time, setTime] = useState("");
  const { city } = useContext(Context);
  const [value, setValue] = city;
  try {
    const city = mockData[value];
    const url =
      "http://api.weatherstack.com/current?access_key=1c93cccd601fb09566234fbfa85dae91&query=" +
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
        setTime(data.current.observation_time);
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
                        ? props.isAccent
                        : props.isNotAccent
                }>Back Home</button></div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header about={true} settings={true} isAccent={isAccent} isNotAccent={isNotAccent}
      />
      <div className="flex mt-4">
        <div>
          <CardEffect
            title={temp + "°C, " + cityName}
            content={
              ".... " +
              description +
              " .... with the Humidity range - [" +
              humidity +
              "] %" +
              " and the visbility level [" +
              visibility +
              "].Lastly Updated on (" +
              time +
              ")"
            }
            isSecondary={isSecondary}
            isNotSecondary={isNotSecondary}
          />
        </div>
        <div>
          <img src={WeatherImg} alt="Loading ..." className="img " />
        </div>
      </div>
    </div>
  );
};
export default Weather;
