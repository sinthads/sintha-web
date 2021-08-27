import { NavLink } from "react-router-dom";
import icon from "../assets/logo.svg";

const Navbar = ({ navOpen, setNavOpen }) => {
  return (
    <nav className={`navbar ${navOpen ? "open" : ""}`}>
      <NavLink to='/' className='logo'>
        <img src={icon} alt='' />
      </NavLink>
      <div className='nav-menu'>
        <NavLink
          to='/'
          className='nav-link'
          activeClassName='nav-active'
          exact={true}
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to='/projects'
          className='nav-link'
          activeClassName='nav-active'
        >
          <p>Projects</p>
        </NavLink>
        <NavLink to='/blogs' className='nav-link' activeClassName='nav-active'>
          <p>Blogs</p>
        </NavLink>
        <NavLink
          to='/contact'
          className='nav-link'
          activeClassName='nav-active'
        >
          <p>Contact</p>
        </NavLink>
      </div>
      <div
        className={`nav-hamburger ${navOpen ? "open" : ""}`}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span className='line1'></span>
        <span className='line2'></span>
        <span className='line3'></span>
      </div>
    </nav>
  );
};

export default Navbar;
