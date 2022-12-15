import React, { useState, useEffect, useContext } from "react";
import { Dropdown } from "primereact/dropdown";
import mockData from "../Assets/data.json";
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
          style={JSON.parse(localStorage.getItem('settheme')) ? props.isSecondary : props.isNotSecondary}
        />
      </div>
      
    </div>
  );
};
export default SearchBar;
