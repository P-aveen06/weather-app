import React from "react";
import { Link } from "react-router-dom";
// import Button from "./Button";
import Typewriter from "typewriter-effect";
import Searchbarimg from "../Assets/search.png";
import Logo from "../Assets/logo.svg";
import SearchBar from "./Searchbar";
import CardEffect from "./CardEffect";
const Home = () => {
  const isSecondary = {
    color: JSON.parse(localStorage.getItem("secondary")),
  };
  const isNotSecondary = {
    color: "#f4b805"
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
    <div className="Home">
      <div className="Header flex justify-between">
        <div>
          <img src={Logo} alt="logo" width={300} height={100} />
        </div>
        <div className=" width-400 flex justify-around">
          <div
            className="box-1 m-auto"
            style={
              JSON.parse(localStorage.getItem("settheme"))
                ? isAccent
                : isNotAccent
            }
          >
            <div className="bt btn-nav">
              <span>ABOUT</span>
            </div>
          </div>
          <Link to="/settings" className="mt-2">
            <div
              className="box-1 m-auto"
              style={
                JSON.parse(localStorage.getItem("settheme"))
                  ? isAccent
                  : isNotAccent
              }
            >
              <div className="bt btn-nav">
                <span>SETTINGS</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="main mt-4">
        <div className="text-3" 
        style={
              JSON.parse(localStorage.getItem("settheme"))
                ? isSecondary
                : isNotSecondary
            }
        // style={{color:"#f4b805"}}
            >
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString("Weather Application")

                .pauseFor(1000)
                .deleteAll()
                .typeString("Get Your weather details")
                .start();
            }}
          />
        </div>
        <div className="flex justify-around">
          <CardEffect
            content={
              "This Application will get you the weather deatils for given location.Get instant access to accurate weather data for any geo-point in the world and enjoy a rich set of capabilities:"
            }
            title={"Access to Global Weather Data, Developer-friendly"}
          />
          <div>
            <img
              src={Searchbarimg}
              alt="loading"
              width={150}
              height={200}
              className="mt-3"
            />
            <div className="m-0">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
