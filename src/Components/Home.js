import React from "react";
// import { Link } from "react-router-dom";
import Button from "./Button";
import Typewriter from "typewriter-effect";
import Searchbarimg from '../Assets/search.png'
import Logo from "../Assets/logo.svg";
import SearchBar from "./Searchbar";
const Home = () => {
  const Card = () => {
    return (
      <div>
        <div className="card">
          <div className="mt-2">
            <div className="mt-3" >
              <i className="pi pi-cloud mt-2" style={{ fontSize: "3rem",color:'#f4b805' }}></i>
              <p className="text-2 m-0" style={{ fontWeight: "14px",color:'#545454' }}>
                Access to Global Weather Data, Developer-friendly
              </p>
              <p className="text-1 width-400 m-auto justify mt-1" style={{color:'#545454'}}>
                This Application will get you the weather deatils for given
                location.Get instant access to accurate weather data for any
                geo-point in the world and enjoy a rich set of capabilities:
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="Home">
      <div className="Header flex justify-between">
        <div>
          <img src={Logo} alt="logo" width={300} height={100} />
        </div>
        <div className=" width-400 flex justify-around">
          <div class="box-1 m-auto">
            <div class="bt btn-nav">
              <span>ABOUT</span>
            </div>
          </div>
          <div class="box-1 m-auto">
            <div class="bt btn-nav">
              <span>SETTINGS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main mt-4">
        <div className="text-3" style={{ color: "#f4b805" }}>
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
          <Card />
          <div><img src={Searchbarimg} alt="loading" width={150} height={200} className='mt-3'/>
          <div className='m-0'><SearchBar/></div>
          </div>
        </div>
      </div>
    </div>
  );
  // const isSecondary={
  //   color:JSON.parse(localStorage.getItem('secondary'))
  // }
  // const isNotSecondary={
  //   color:"white"
  // }
  // const isAccent={
  //   backgroundColor:JSON.parse(localStorage.getItem('accent')),
  //   color:'black'
  // }
  // const isNotAccent={
  //   backgroundColor:'none',
  //   color:'black'
  // }
};
export default Home;
