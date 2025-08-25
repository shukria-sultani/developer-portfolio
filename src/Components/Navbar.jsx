import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
// Navbar icons
import homeIcon from "../assets/images/home.png"; 
import aboutIcon from "../assets/images/about.png";
import projectsIcon from "../assets/images/project.png";
import contactIcon from "../assets/images/contact.png";
import menuIcon from "../assets/images/menu.png"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); 
  };

  return (
    <nav>
      <div className="navbar responsive-navbar">
        <img 
          src={menuIcon} 
          className="menu-icon" 
          alt="Menu Icon" 
          onClick={toggleMenu} 
        />
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <a 
              href="#" 
              className={activeLink === "home" ? "active" : ""} 
              onClick={() => handleLinkClick("home")}
            >
              <img src={homeIcon} alt="Home Icon" width="30px" height="30px" /> Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeLink === "about" ? "active" : ""} 
              onClick={() => handleLinkClick("about")}
            >
              <img src={aboutIcon} alt="About Icon" width="30px" height="30px" /> About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeLink === "projects" ? "active" : ""} 
              onClick={() => handleLinkClick("projects")}
            >
              <img src={projectsIcon} alt="Project Icon" width="30px" height="30px" /> Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeLink === "contact" ? "active" : ""} 
              onClick={() => handleLinkClick("contact")}
            >
              <img src={contactIcon} alt="Contact Icon" width="30px" height="30px" /> Contact
            </a>
          </li>
                <ThemeToggle />
          
        </ul>
      </div>
    </nav>
  );
}
