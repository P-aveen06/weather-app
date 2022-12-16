import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Shared/Header";
const WeatherApp = () => {
  const isAccent = {
    color: JSON.parse(localStorage.getItem("accent")),
  };
  const isSecondary = {
    color: JSON.parse(localStorage.getItem("secondary")),
  };
  document.body.style.backgroundColor = JSON.parse(
    localStorage.getItem("primary")
  );
  return (
    <div>
      <Header isAccent={isAccent} isSecondary={isSecondary} />
      <Outlet />
    </div>
  );
};
export default WeatherApp;
