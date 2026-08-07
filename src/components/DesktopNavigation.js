import { NavLink } from "react-router-dom";

const DesktopNavigation = ({ children }) => {
  return (
    <nav id="desktop-menu">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/overview">Overview</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      {children}
    </nav>
  );
};

export default DesktopNavigation;
