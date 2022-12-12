import React from "react";
import CardEffect from "../Shared/CardEffect";
import Header from "../Shared/Header";
import { Link } from "react-router-dom";
const About = (props) => {
  const isSecondary = {
    color: JSON.parse(localStorage.getItem("secondary")),
  };
  const isNotSecondary = {
    color: "white",
  };
  const isAccent = {
    backgroundColor: JSON.parse(localStorage.getItem("accent")),
    color: "black",
  };
  const isNotAccent = {
    backgroundColor: "none",
    color: "black",
  };
  return (
    <div className="m-auto">
      <div className="m-auto">
        <div><CardEffect
          title={"About Us"}
          content={"The Cloud Cmopany was a start up.Started to work with great ideas"}
          isSecondary={isSecondary}
          isNotSecondary={isNotSecondary}
        /></div>
      </div>
      <div className="mt-1">
        <Link to="/">
          <button
            class="button-52"
            role="button"
            style={
              JSON.parse(localStorage.getItem("settheme"))
                ? isAccent
                : isNotAccent
            }
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};
export default About;
