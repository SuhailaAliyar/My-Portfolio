import React from 'react';
import { resumeData } from '../data/resume';

function Projects() {
  return (
    <section id="projects">
      <div className="section-label">Personal Projects</div>
      <h2>What I've<br />Built</h2>

      {resumeData.projects.map((project, i) => (
        <div key={i} className="project-card reveal">
          <div>
            <div className="project-name">{project.name}</div>
            <div className="project-period">{project.period}</div>
            <p className="project-desc">{project.description}</p>
            
            <div className="exp-tags" style={{ marginTop: '1rem' }}>
              {project.tags.map((tag, j) => (
                <span key={j} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          
          <a 
            href={project.githubUrl} 
            className="project-arrow" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            ↗
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
