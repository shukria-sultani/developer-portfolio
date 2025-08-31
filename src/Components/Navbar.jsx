import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

// Navbar icons
import homeIcon from "../assets/images/home.png";
import aboutIcon from "../assets/images/about.png";
import projectsIcon from "../assets/images/project.png";
import contactIcon from "../assets/images/contact.png";
import menuIcon from "../assets/images/menu.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="navbar responsive-navbar">
        <button
          type="button"
          className="menu-icon"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <img src={menuIcon} alt="Menu" width="30" height="30" />
        </button>

        <ul className={isMenuOpen ? "menu-list active" : "menu-list"}>
          <li>
            <NavLink
              to="/"
              className={activeLink === "home" ? "active" : ""}
              onClick={() => handleLinkClick("home")}
            >
              <img src={homeIcon} alt="Home Icon" width="30" height="30" /> Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={activeLink === "about" ? "active" : ""}
              onClick={() => handleLinkClick("about")}
            >
              <img src={aboutIcon} alt="About Icon" width="30" height="30" /> About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={activeLink === "projects" ? "active" : ""}
              onClick={() => handleLinkClick("projects")}
            >
              <img src={projectsIcon} alt="Projects Icon" width="30" height="30" /> Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={activeLink === "contact" ? "active" : ""}
              onClick={() => handleLinkClick("contact")}
            >
              <img src={contactIcon} alt="Contact Icon" width="30" height="30" /> Contact
            </NavLink>
          </li>

          {/* If you want ThemeToggle inside the menu, uncomment the line below.
              Otherwise, place it outside the <ul> to appear separately. */}
          {/* <li className="theme-toggle-item"><ThemeToggle /></li> */}
        </ul>

        {/* If you want ThemeToggle always visible on the header, place it here: */}
        <div className="theme-toggle-wrapper" aria-label="Toggle theme">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}