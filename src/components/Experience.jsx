import React from 'react';
import { resumeData } from '../data/resume';

function Experience() {
  return (
    <section id="experience">
      <div className="section-label">Professional Experience</div>
      <h2>Where I've<br />Built Things</h2>

      <div className="experience-list">
        {resumeData.experiences.map((exp, i) => (
          <div key={i} className="exp-item reveal">
            <div className="exp-meta">
              <div className="exp-period">{exp.period}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-location">{exp.location}</div>
            </div>
            
            <div className="exp-content">
              <div className="exp-role">{exp.role}</div>
              {exp.summary && <p className="exp-summary">{exp.summary}</p>}
              
              <ul className="exp-points">
                {exp.highlights.map((highlight, j) => (
                  <li key={j}>{highlight}</li>
                ))}
              </ul>
              
              <div className="exp-tags">
                {exp.tags.map((tag, k) => (
                  <span key={k} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
