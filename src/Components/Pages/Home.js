import React from "react";
// import Button from "./Button";
import Typewriter from "typewriter-effect";
import Searchbarimg from "../../Assets/search.png";
import SearchBar from "../Searchbar";
import CardEffect from "../Shared/CardEffect";
import Header from "../Shared/Header";
const Home = () => {
  const isSecondary = {
    color: JSON.parse(localStorage.getItem("secondary")),
  };
  const isNotSecondary = {
    color: "#f4b805",
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
    <div className="Home m-auto">
      {/* <Header
        isAccent={isAccent}
        isNotAccent={isNotAccent}
        about={true}
        settings={true}
      /> */}
      <div className="main mt-4">
        <div
          className="text-3"
          style={
            JSON.parse(localStorage.getItem("settheme"))
              ? isSecondary
              : isNotSecondary
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
          isSecondary={isSecondary}
          isNotSecondary={isNotSecondary}
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
              <SearchBar isAccent={isAccent} isNotAccent={isNotAccent} isSecondary={isNotSecondary} />
            </div>
          </div>
        </div>
      </div>
      <div>
      
    </div>
    </div>
  );
};
export default Home;
