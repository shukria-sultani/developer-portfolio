import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faTimesCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from "./data/projects";

import { useNavigate, useParams } from "react-router-dom";
import TechStack from "./TechStack";

export default function Projects() {
  const navigate = useNavigate();
  const handleProjectClick = (id) => {
  navigate(`/projects/${id}`); // Navigate to the project detail page using the ID
};

  
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedCard, setExpandedCard] = useState(null); 
  // Function to get unique tech stacks for filter buttons
  const getUniqueTechStacks = () => {
    const allStacks = projects.flatMap((p) => p.techStack);
    return ["All", ...new Set(allStacks)];
  };

  // Filter the projects based on the active filter
  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.techStack.includes(activeFilter)
  );

 

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

       
        <div className="project-grid" >
          {filteredProjects.map((project) => (
            <div
              className={`project-card ${
                expandedCard === project.name ? "expanded" : ""
              }`}
                key={project.id} 
              onClick={() => handleProjectClick(project.id)} 
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
                
                {/* Status & Featured Badges */}
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
                   <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="status"
                   >
                     { project.status}
                   </motion.span>
                </div>

                {/* Conditional Rendering for Details */}
                {expandedCard === project.name ? (
                  <div className="expanded-details">
                    <p className="project-description">
                      {project.description}
                    </p>
                     <TechStack techList={project.techStack} />
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
