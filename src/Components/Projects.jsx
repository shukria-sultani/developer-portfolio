import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

// images
import weatherDesktop from "../assets/images/Macbook-Air-all-around-weather.png";
import sayyidanisaDesktop from "../assets/images/Macbook-Air-sayyida-nisa.png";
import kalamealiDesktop from "../assets/images/Macbook-Air-kalam-e-ali.png";
import innovatershouseDesktop from "../assets/images/Macbook-Air-innovatershouse.png";
import invoiceDesktop from "../assets/images/Macbook-Air-invoice.png";

export default function Projects() {
  const projects = [
    {
      name: "Weather All Around",
      imageDesktop: weatherDesktop,
      description:
        "A user friendly weather application providing current weather and 5 days forecast.",
      liveLink: "https://all-around-weather.netlify.app/",
      githubLink: "https://github.com/shukria-sultani/SheCodes-Final_Project",
      techStack: ["HTML", "CSS", "JavaScript", "API"],
      featured: false,
    },
    {
      name: "Sayyida-Nisa",
      imageDesktop: sayyidanisaDesktop,
      description:
        "Sayyida Nisa is a website dedicated to discussing the life and impact of Fatima Zahra (SA) in Islam and the lives of Muslims. It covers her life, teachings, hadiths, and provides useful resources to learn more about Lady Fatima (SA).",
      liveLink: "https://sayyida-nisa.netlify.app/",
      githubLink: "https://github.com/shukria-sultani/Sayyida-Nisa",
      techStack: ["React", "JavaScript", "Bootstrap", "CSS", "HTML"],
      featured: true,
    },
    {
      name: "Kalam-e-Ali",
      imageDesktop: kalamealiDesktop,
      description:
        "A user friendly web app for studying the best sayings of Imam Ali (SA) from Nahjul Balagha.",
      liveLink: "https://kalam-e-ali.netlify.app/",
      githubLink: "https://github.com/shukria-sultani/Imam-Ali-Sayings",
      techStack: ["React", "JavaScript", "Bootstrap", "CSS", "HTML"],
      featured: true,
    },
    {
      name: "InnovatersHouse",
      imageDesktop: innovatershouseDesktop,
      description:
        "An intuitive school portal designed to help students manage their profiles, and access resources.",
      liveLink: "https://shukria-sultani.github.io/InnovatersHouse/index.html",
      githubLink: "https://github.com/shukria-sultani/InnovatersHouse",
      techStack: ["HTML", "CSS", "JavaScript"],
      featured: false,
    },
    {
      name: "Client and Invoice Management",
      imageDesktop: invoiceDesktop,
      description:
        "A comprehensive client and invoice management system for businesses and freelancers to track clients, manage invoices, and see the summary in the dashboard.",
      liveLink:
        "https://shukria-sultani.github.io/freelance-invoice-app/index.html",
      githubLink: "https://github.com/shukria-sultani/freelance-invoice-app",
      techStack: ["HTML", "CSS", "JavaScript", "Chart.js"],
      featured: true,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 2;

  // Auto-slideshow functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + projectsPerPage) % projects.length
      );
    }, 5000); // Change projects every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [projects.length]);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + projectsPerPage) % projects.length
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - projectsPerPage + projects.length) % projects.length
    );
  };

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + projectsPerPage
  );

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="project-grid-wrapper">
          <button onClick={handlePrevious} className="slide-button prev-button">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image-container">
                  <img
                    src={project.imageDesktop}
                    alt={`${project.name} on desktop`}
                    className="desktop-img"
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="tech-item">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-demo-btn"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-btn"
                    >
                      GitHub
                    </a>
                    {project.featured ? <FontAwesomeIcon icon={faStar} className="featured-icon"/> : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="slide-button next-button">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
}
