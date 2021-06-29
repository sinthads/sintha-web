import { NavLink } from "react-router-dom";

const Menu = ({ navOpen, setNavOpen }) => {
  return (
    <div className={`hamburger-menu ${navOpen ? "open" : ""}`}>
      <div className="menu-container" onClick={() => setNavOpen(false)}>
        <NavLink
          to="/"
          className="nav-link"
          activeClassName="nav-active"
          exact={true}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className="nav-link"
          activeClassName="nav-active"
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-link"
          activeClassName="nav-active"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
