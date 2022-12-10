import React, { useContext, useEffect, useState } from "react";
import Logo from "../Assets/logo.svg";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Context } from "../Context";
import mockData from "../Assets/data.json";
import { Link } from "react-router-dom";
import CardEffect from "./CardEffect";
import WeatherImg from "../Assets/weather.png"
const Weather = (props) => {
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState(" ");
  const [humidity, setHumidity] = useState(" ");
  const [cityName,setCityName]=useState("")
  const [visibility,setVisibility] = useState("");
  const [time,setTime] = useState("");
  const { val } = useContext(Context);
  const [value, setValue] = val;
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
        setCityName(data.location.name)
        setHumidity(data.current.humidity)
        setVisibility(data.current.visibility)
        setTime(data.current.observation_time)
      });
  } catch (err) {
    return (
      <div className="m-auto width-600">
        <div>
          <CardEffect title={"ERROR !!"} content={"Get Back to Home.."} />
          <Link to="/">
            <div className="box-1 mt-4 width-600 ">
              <div className="bt btn-nav">
                <span>GO BACK</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="Header flex justify-between">
        <div>
          <img src={Logo} alt="logo" width={300} height={100} />
        </div>
        <div className=" width-400 flex justify-around">
          <div className="box-1 m-auto">
            <div className="bt btn-nav">
              <span>ABOUT</span>
            </div>
          </div>
          <div className="box-1 m-auto">
            <div className="bt btn-nav">
              <span>SETTINGS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <div>
        <CardEffect title={temp+"°C, "+cityName}
      content={".... "+description+" .... with the Humidity range - ["+humidity+"] %"+" and the visbility level ["+visibility+"].Lastly Updated on ("+time+")"}/></div>
      <div ><img src={WeatherImg} alt="Loading ..." className="img "/></div></div>
    </div>
  );
};
export default Weather;
