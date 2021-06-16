import { NavLink } from "react-router-dom";
import icon from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <img src={icon} alt="" />
      </NavLink>
      <div className="nav-menu">
        <NavLink
          to="/"
          className="nav-link"
          activeClassName="nav-active"
          exact={true}
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/projects"
          className="nav-link"
          activeClassName="nav-active"
        >
          <p>Projects</p>
        </NavLink>
        {/* <NavLink to="/about" className="nav-link" activeClassName="nav-active">
          <p>About</p>
        </NavLink> */}
        <NavLink
          to="/contact"
          className="nav-link"
          activeClassName="nav-active"
        >
          <p>Contact</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
