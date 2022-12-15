import React from "react";
import CardEffect from "../Shared/CardEffect";
const About = (props) => {
  return (
    <div className="about m-auto">
      <div className="m-auto">
        <div >
          <CardEffect
            title={"About Us"}
            content={
              "The Cloud Cmopany was a start up.Started to work with great ideas"
            }
            isSecondary={props.isSecondary}
          />
        </div>
      </div>
    </div>
  );
};
export default About;
