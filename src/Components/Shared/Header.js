import React from "react";
import Logo from "../../Assets/logo.svg";
import { NavLink } from "react-router-dom";
export default function Header(props) {
    const link={
        color:"black",
        // fontSize:"1rem",
        border: "2px solid black"
    }
  return (
    <div className="Header flex justify-between">
      <div>
        <img src={Logo} alt="logo" width={300} height={100} />
      </div>
      <div className="flex width-400 justify-around " style={{alignItems:"center"}}>
        <div>
        <NavLink
            to="/app/home"
            className="link button_slide slide_left"
            style={({ isActive }) =>
              isActive ? link : props.isAccent
            }
          >Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/app/settings"
            className="link button_slide slide_left "
            style={({ isActive }) =>
              isActive ? link : props.isAccent
            }
          > Settings
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/app/about"
            className="link button_slide slide_left"
            style={({ isActive }) =>
              isActive ? link : props.isAccent
            }
          >
           About
          </NavLink>
        </div>
      </div>
    </div>
  );
}
