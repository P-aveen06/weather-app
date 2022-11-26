import React, { useContext } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import mockData from "../Assets/data.json";
import { Link } from "react-router-dom";
import { Context } from "../Context";
const SearchBar = () => {
  const {val} = useContext(Context);
  const [value,setValue]=val;
  return (
    <div>
      <div className="mt-3 ">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={val[0]}
            // onFocus={
            //   ()=>{document.}
            // }
            onChange={(e) => {
              setValue(e.target.value);
              document.querySelector(".cityList").style.display = "block";
            }}
            placeholder="Search"
          />
        </span>
      </div>
      <div className="cityList border mt-3 width-400 m-auto hidden">
        {
        mockData
          .filter((data) => {
            if (value === "") 
            return data;
            else if (data.name.toLowerCase().includes(value.toLowerCase()))
              return data;
          })
          .map((data) => (
            <div className="items">
              <Link to="/weather" id="link">
                <Button
                  className=" btn p-button-raised p-button-primary p-button-text"
                  onClick={() => {setValue(data.id)}}
                >
                  <li className="list m-0" id="cityName">
                    {data.name}
                  </li>
                  <li className="list m-0 hidden" id="cityId">
                    {data.id}
                  </li>
                </Button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
export default SearchBar;
