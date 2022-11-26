import React, { useState, createContext } from "react";

export const Context = createContext();
export const Provider = (props) => {
  const [value, setValue] = useState("");
  const [Primarycolor, setPrimaryColor] = useState(null);
  const [Secondarycolor, setSecondaryColor] = useState(null);
  const [Accentcolor, setAccentColor] = useState(null);
  return (
    <Context.Provider
      value={{
        val: [value, setValue],
        Primarycolor: [Primarycolor, setPrimaryColor],
        Secondarycolor: [Secondarycolor, setSecondaryColor],
        Accentcolor: [Accentcolor, setAccentColor]
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
