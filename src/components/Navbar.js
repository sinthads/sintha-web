import { Link } from "react-router-dom";
import icon from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={icon} alt="" />
      </Link>
      <div className="nav-menu">
        <Link to="/" className="nav-link">
          <p>Home</p>
        </Link>
        <Link to="/projects" className="nav-link">
          <p>Projects</p>
        </Link>
        <Link to="/about" className="nav-link">
          <p>About</p>
        </Link>
        <Link to="/contact" className="nav-link">
          <p>Contact</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
