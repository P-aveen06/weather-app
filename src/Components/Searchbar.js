import React, { useState, useEffect, useContext } from "react";
import { Dropdown } from "primereact/dropdown";
import mockData from "../Assets/data.json";
import { Link } from "react-router-dom";
import { Context } from "../Context";
const SearchBar = (props) => {
  const { city } = useContext(Context);
  const [value, setValue] = city;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const options = mockData.map((item) => ({
      label: item.name,
      value: item.id,
    }));
    setOptions(options);
  }, []);

  function handleSearchChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <div>
        <Dropdown
          options={options}
          filter
          filterBy="label"
          value={value}
          editable
          onChange={handleSearchChange}
        />
      </div>
      <div className="mt-1">
        <Link to="/weather">
          <button
            class="button-52"
            role="button"
            style={
              JSON.parse(localStorage.getItem("settheme"))
                ? props.isAccent
                : props.isNotAccent
            }
          >
            Get
          </button>
        </Link>
      </div>
    </div>
  );
};
export default SearchBar;
