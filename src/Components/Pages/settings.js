import React, { useContext } from "react";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
const Settings = (props) => {
  const { Primarycolor, Secondarycolor, Accentcolor } = useContext(Context);
  const [PrimarycolorValue, setPrimarycolorValue] = Primarycolor;
  const [SecondarycolorValue, setSecondarycolorValue] = Secondarycolor;
  const [AccentcolorValue, setAccentcolorValue] = Accentcolor;
  const Colors = [
    { name: "pink-50", value: "#fef6fa" },
    { name: "pink-100", value: "#fad3e7" },
    { name: "pink-200", value: "#f7b0d3" },
    { name: "pink-300", value: "#f38ec0" },
    { name: "pink-400", value: "#f06bac" },
    { name: "pink-500", value: "#ec4899" },
    { name: "pink-600", value: "#c93d82" },
    { name: "pink-700", value: "#a5326b" },
    { name: "pink-800", value: "#822854" },
    { name: "pink-900", value: "#5e1d3d" },
    { name: "indigo-50", value: "#f7f7fe" },
    { name: "indigo-100", value: "#dadafc" },
    { name: "indigo-200", value: "#bcbdf9" },
    { name: "indigo-300", value: "#9ea0f6" },
    { name: "indigo-400", value: "#8183f4" },
    { name: "indigo-500", value: "#6366f1" },
    { name: "indigo-600", value: "#5457cd" },
    { name: "indigo-700", value: "#4547a9" },
    { name: "indigo-800", value: "#363885" },
    { name: "teal-50", value: "#ffffff" },
    { name: "teal-100", value: "#c7eeea" },
    { name: "teal-200", value: "#9ae0d9" },
    { name: "teal-300", value: "#6dd3c8" },
    { name: "teal-400", value: "#41c5b7" },
    { name: "teal-500", value: "#14b8a6" },
    { name: "teal-600", value: "#119c8d" },
    { name: "teal-700", value: "#0e8174" },
    { name: "teal-800", value: "#0b655b" },
    { name: "teal-900", value: "#084a42" },
  ];
  function setColors() {
    if (
      Primarycolor[0].length !== 0 &&
      Secondarycolor[0].length !== 0 &&
      Accentcolor[0].length !== 0
    ) {
      localStorage.setItem("primary", JSON.stringify(Primarycolor[0]));
      localStorage.setItem("secondary", JSON.stringify(Secondarycolor[0]));
      localStorage.setItem("accent", JSON.stringify(Accentcolor[0]));
      const themeset = true;
      localStorage.setItem("settheme", JSON.stringify(themeset));
    } else alert("Choose the color");
  }
  return (
    <div className="Settings m-auto">
      <div >
        <div className="Main ">
          <div
            className="flex m-auto mt-4 justify-around width-600"
            style={
              JSON.parse(localStorage.getItem("settheme")) ? props.isSecondary : null
            }
          >
            <div>
              <p className="sample text-4" style={{ color: Primarycolor[0] }}>
                The.
              </p>
            </div>
            <div>
              <p className="sample text-4" style={{ color: Secondarycolor[0] }}>
                Cloud.
              </p>
            </div>
            <div>
              <p
                className=" sample text-4 underline"
                style={{ color: Accentcolor[0] }}
              >
                Company
              </p>
            </div>
          </div>
          <div className="flex justify-around width-800 m-auto">
            <Dropdown
              value={PrimarycolorValue}
              options={Colors}
              onChange={(e) => setPrimarycolorValue(e.value)}
              optionLabel="name"
              editable
              placeholder="Primary Color"
            />
            <Dropdown
              value={SecondarycolorValue}
              options={Colors}
              onChange={(e) => setSecondarycolorValue(e.value)}
              optionLabel="name"
              editable
              placeholder="Secondary Color"
            />
            <Dropdown
              value={AccentcolorValue}
              options={Colors}
              onChange={(e) => setAccentcolorValue(e.value)}
              optionLabel="name"
              editable
              placeholder="Accent Color"
            />
          </div>
          <div className="mt-3">
            <a
              href="https://www.primefaces.org/primereact/colors/"
              alt="https://www.primefaces.org/primereact/colors/"
              target="_blank"
              style={{ color: "#f4b805" }}
            >
              Refer Colors Here
            </a>
          </div>
          <div className="mt-3">
            <Link to="/">
              <Button
                icon="pi pi-arrow-right"
                className="p-button-lg p-button-square p-button-info p-button-text"
                style={
                  JSON.parse(localStorage.getItem("settheme")) ? props.isAccent : null
                }
                onClick={() => {
                  setColors();
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Settings;
