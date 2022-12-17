import React from "react";
import Typewriter from "typewriter-effect";
import Searchbarimg from "../../Assets/search.png";
import SearchBar from "../Searchbar";
import CardEffect from "../Shared/CardEffect";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <div className="Home m-auto">
      <div className="main mt-4">
        <div
          className="text-3"
          style={
            JSON.parse(localStorage.getItem("settheme"))
              ? props.isSecondary
              : null
          }
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
            isSecondary={props.isSecondary}
            isNotSecondary={props.isNotSecondary}
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
              <SearchBar
                isAccent={props.isAccent}
                isSecondary={props.isSecondary}
              />
            </div>
            <div className="mt-1">
              <Link to="/app/weather">
                <button
                  className="button_slide slide_left"
                  role="button"
                  style={
                    JSON.parse(localStorage.getItem("settheme"))
                      ? props.isAccent
                      : null
                  }
                >
                  Get
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
