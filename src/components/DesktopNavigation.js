import { NavLink } from "react-router-dom";

const DesktopNavigation = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/overview">Overview</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default DesktopNavigation;
