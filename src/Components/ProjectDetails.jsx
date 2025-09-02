import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from "./data/projects";
import TechStack from './TechStack';
import FeedbackCard from './FeebackCard';
function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="project-details-page">
      <div className="project-details-container">
        <h2 className="project-name">{project.name}</h2>
        <img
          src={project.imageDesktop}
          alt={`${project.name} preview`}
          className="project-details-image"
        />
        <div className="project-details-content">
          <p>{project.description}</p>
        </div>
        
        <TechStack techList={project.techStack} />

        <div className="project-details-links">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-demo-btn">
            Live Site
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-btn">
            GitHub Repo
          </a>
        </div>
        
        
     
        <FeedbackCard projectId={project.id} />
                <Link to="/projects" className="back-to-home">Back to Projects</Link>

      </div>
    </div>
  );
}

export default ProjectDetails;