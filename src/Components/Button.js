import React from "react";

const Button = () => {
  return (
    <div className="container">
      <div className="center">
        <button className="btn">
          <svg width="120px" height="40px" viewBox="0 0 180 60" className="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
          </svg>
          <span>About</span>
        </button>
      </div>
    </div>
  );
};
export default Button;
