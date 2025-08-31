import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faTimesCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';

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
      priority: 'low',
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
      priority: 'high',
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
      priority: 'high',
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
      priority: 'medium',
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
      priority: 'high',
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [projectUpdates, setProjectUpdates] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null); // Declare expandedCard state

  // Function to get unique tech stacks for filter buttons
  const getUniqueTechStacks = () => {
    const allStacks = projects.flatMap((p) => p.techStack);
    return ["All", ...new Set(allStacks)];
  };

  // Filter the projects based on the active filter
  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.techStack.includes(activeFilter)
  );

  // Project Updates Polling
  useEffect(() => {
    const messages = [
      "New project added: Weather All Around!",
      "An update has been pushed to Sayyida-Nisa!",
      "Kalam-e-Ali is now live!",
      "Major performance updates for InnovatersHouse!",
    ];
    let messageIndex = 0;

    const interval = setInterval(() => {
      if (messageIndex < messages.length) {
        setProjectUpdates((prevUpdates) => [
          { id: Date.now(), text: messages[messageIndex] },
          ...prevUpdates,
        ]);
        messageIndex++;
      } else {
        // Reset the updates
        setProjectUpdates([]);
        messageIndex = 0;
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const toggleDetails = (name) => {
    setExpandedCard(expandedCard === name ? null : name);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {getUniqueTechStacks().map((stack, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(stack)}
              className={`filter-button ${activeFilter === stack ? "active" : ""}`}
            >
              {stack}
            </button>
          ))}
        </div>

        {/* Live Updates Ticker */}
        <div className="updates-panel">
          <AnimatePresence>
            {projectUpdates.map((update) => (
              <motion.div
                key={update.id}
                className="update-message"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                {update.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <div
              className={`project-card ${
                expandedCard === project.name ? "expanded" : ""
              }`}
              key={project.name}
              onClick={() => toggleDetails(project.name)}
            >
              <div className="project-image-container">
                <img
                  src={project.imageDesktop}
                  alt={`${project.name} on desktop`}
                  className="desktop-img"
                />
              </div>
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                
                {/* Priority & Featured Badges */}
                <div className="project-badges">
                  {project.featured && (
                    <motion.span 
                      className="featured-badge"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      🌟 Featured
                    </motion.span>
                  )}
                  {project.priority === 'high' && (
                    <motion.span 
                      className="priority-badge high-priority"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FontAwesomeIcon icon={faExclamationCircle} /> High Priority
                    </motion.span>
                  )}
                </div>

                {/* Conditional Rendering for Details */}
                {expandedCard === project.name ? (
                  <div className="expanded-details">
                    <p className="project-description">
                      {project.description}
                    </p>
                    <div className="tech-stack">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-item">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-demo-btn">
                        Live Demo
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-btn">
                        GitHub
                      </a>
                    </div>
                  </div>
                ) : (
                  <p className="project-description-short">
                    {project.description}
                  </p>
                )}
                
                {/* Toggle Button */}
                <button className="details-toggle-btn" onClick={(e) => { e.stopPropagation(); toggleDetails(project.name); }}>
                  <FontAwesomeIcon icon={expandedCard === project.name ? faTimesCircle : faInfoCircle} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
