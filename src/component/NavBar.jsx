import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"; // We'll create this next

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">Capgemini</NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/careers" activeClassName="active-link">
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active-link">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
