import React from "react";
import { Outlet, redirect } from "react-router-dom";

const Pages = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Pages;
