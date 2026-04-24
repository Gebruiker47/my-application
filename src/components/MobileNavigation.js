import { NavLink } from "react-router-dom";

const MobileNavigation = ({ children }) => {
  return (
    <nav id="mobile-menu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/overview">OverviewMobile</NavLink>
        </li>
        <li>{children}</li>
      </ul>
    </nav>
  );
};

export default MobileNavigation;
