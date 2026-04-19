import { NavLink } from "react-router-dom";

const DesktopNavigation = ({ children }) => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/overview">Overview</NavLink>
        </li>
        <li>{children}</li>
      </ul>
    </header>
  );
};

export default DesktopNavigation;
