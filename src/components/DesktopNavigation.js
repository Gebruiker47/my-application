import React from "react";

import { NavLink } from "react-router-dom";
import Home from "./Home";
import Overview from "./Overview";

const DesktopNavigation = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/overview">Overview</NavLink>
    </header>
  );
};

export default DesktopNavigation;
