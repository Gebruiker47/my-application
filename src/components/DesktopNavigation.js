import { NavLink } from "react-router-dom";

const DesktopNavigation = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/overview">Overview</NavLink>
    </header>
  );
};

export default DesktopNavigation;
