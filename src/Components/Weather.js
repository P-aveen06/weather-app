import React, { useContext, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import weatherSearch from "../Assets/weathersearch.gif";
import { Context } from "../Context";
import mockData from "../Assets/data.json";
import { Link } from "react-router-dom";
const Weather = (props) => {
  const { val } = useContext(Context);
  const [value, setValue] = val;
  const [response, setResponse] = useState("");
  const detail = mockData[value];
  try {
    useEffect(() => {
      let url =
        "http://api.weatherstack.com/current?access_key=b6506d85ab3bb3611f703039724753b2&query=" +
        detail.lat +
        "," +
        detail.lon;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setResponse(data);
          console.log(data);
        });
    }, []);
  } catch (e) {}
  // const fetchData = async () => {
  //     try {
  //         let url="http://api.weatherstack.com/current?access_key=b6506d85ab3bb3611f703039724753b2&query="+detail.lat+","+detail.lon
  //         let response = await fetch(url);
  //         if (response.status === 200) {
  //             const data = await response.json();
  //             setResponse(data);
  //             response=data;
  //             console.log(data)
  //         } else {
  //             throw 'Error fetching users list'
  //         }
  //     } catch (error) {

  //     }
  // }
  //   fetchData();

  const header = (
    <div>
      <p className="text-2 mt-3">Weather Details</p>
      <i className="pi pi-sun" style={{ fontSize: "3rem" }}></i>
    </div>
  );
  return (
    <div>
      <div className="Header flex justify-between">
        <div>
          <p className="text-2">LOGO</p>
        </div>
        <div className="Menu width-200 flex justify-around mt-2 mb-2">
          <div>
            <Link to="/settings"><Button
              label="Settings"
              className="p-button-raised p-button-primary p-button-text"
            /></Link>
          </div>
        </div>
      </div>
      <div className="flex m-auto justify-around width-400">
        <div>
          <p className="text-3 mt-2 mb-2">The.</p>
        </div>
        <div>
          <p className="text-3 mt-2 mb-2">Cloud.</p>
        </div>
        <div>
          <p className="text-3 underline mt-2 mb-2">Company</p>
        </div>
      </div>
      <div className="m-auto width-600 mt-0">
        <div className="flex">
          <img src={weatherSearch} alt="loading" width={200} height={200} />

          <div className="mt-3">
            <Card
              style={{
                width: "25em",
                backgroundColor: "rgb(255,234,152)",
                color: "rgb(50, 50, 62)",
              }}
              header={header}
            >
              <span>
                <span>{console.log(response)}</span>,
                <span>
                  <b>{response.weather_descriptions}</b>
                </span>
                <p className="text-3 mt-1 mb-1"> {props.temperature} degree</p>
                <span>
                  Humidity: <b>{props.humidity} 20% </b>
                  visibility: <b>{props.visibility} 20%</b>
                </span>
              </span>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
