import React from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="profile" smooth={true} duration={500}>Profile</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
