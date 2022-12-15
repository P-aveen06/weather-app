import React from "react";
import CardEffect from "../Shared/CardEffect";
import { Link } from "react-router-dom";
const About = (props) => {
  return (
    <div className="about m-auto">
      <div>
        <CardEffect
          title={"About Us"}
          content={
            "The Cloud Cmopany was a start up.Started to work with great ideas"
          }
          isSecondary={props.isSecondary}
        />
      </div>
      <Link to="/app/home" ><div className="button_slide slide_left mt-1"  style={
                JSON.parse(localStorage.getItem("settheme"))
                  ? props.isAccent
                  : props.isNotAccent
              }>Back Home</div></Link>

      </div>
  );
};
export default About;
