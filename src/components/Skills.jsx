import React from 'react';
import { resumeData } from '../data/resume';

function Skills() {
  return (
    <section id="skills" className="skills-section-wrapper">
      <div className="skills-inner">
        <div className="section-label">Technical Proficiency</div>
        <h2>Skills &<br />Technologies</h2>
        
        <div className="skills-grid">
          {resumeData.skills.map((group, i) => (
            <div 
              key={i} 
              className="skill-group reveal" 
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="skill-group-title">{group.category}</div>
              <div className="skill-items">
                {group.items.map((skill, j) => (
                  <span key={j} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
