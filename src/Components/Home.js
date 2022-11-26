import React from "react";
import { Button } from "primereact/button";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <div className="Header flex justify-between">
        <div>
          <p className="text-2" id="secondary">LOGO</p>
        </div>
        <div className="Menu width-200 flex justify-around mt-2 mb-2">
          <div>
            <Button
              label="About"
              className="p-button-raised p-button-primary p-button-text"
            />
          </div>
          <div>
            <Link to='/settings'><Button
              label="Settings"
              className="p-button-raised p-button-primary p-button-text"
            /></Link>
          </div>
        </div>
      </div>

      <div className="Main ">
        <div className="flex m-auto mt-4 justify-around width-600">
          <div>
            <p className="text-4" id="secondary">The.</p>
          </div>
          <div>
            <p className="text-4" id="secondary">Cloud.</p>
          </div>
          <div>
            <p className="text-4 underline" id="secondary">Company</p>
          </div>
        </div>
        <div>
          <p className="text-1" id="secondary">
            This is the weather app which will give you the weather details for
            the give location
          </p>
        </div>
        <Searchbar />
      </div>
    </div>
  );
};
export default Home;
