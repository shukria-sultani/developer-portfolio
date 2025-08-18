import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faGithub, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const socialLinks = [
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/shukria-sultani-b65b4b281/",
      name: "LinkedIn"
    },
    {
      icon: faGithub,
      url: "https://github.com/shukria-sultani",
      name: "GitHub"
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/shukria_07?igsh=N3I3b2RtODYwazFu", 
      name: "Instagram"
    }
  ];

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Link to my ${link.name} profile`}
              className="social-icon-link"
            >
              <FontAwesomeIcon icon={link.icon} className="social-icon" />
            </a>
          ))}
        </div>
        <div className="footer-info">
          <p className="copyright">&copy; {new Date().getFullYear()} Shukria Sultani. All rights reserved.</p>
          <p className="attribution">Designed and Developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
}