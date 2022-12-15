import React from "react";
import Logo from "../../Assets/logo.svg";
import { NavLink } from "react-router-dom";
export default function Header(props) {
    const link={
        color:"grey",
        fontSize:"2rem"
    }
  return (
    <div className="Header flex justify-between">
      <div>
        <img src={Logo} alt="logo" width={300} height={100} />
      </div>
      <div className="flex width-400 justify-around " style={{alignItems:"center"}}>
        <div>
          <NavLink
            to="/home"
            className="link text-2"
            style={({ isActive }) =>
              isActive ? link : props.isAccent
            }
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/settings"
            className="link text-2"
            style={({ isActive }) =>
              isActive ? link : props.isAccent
            }
          >
            Settings
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/about"
            className="link text-2"
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
