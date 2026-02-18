import React from 'react';
import { resumeData } from '../data/resume';

function About() {
  return (
    <section id="about">
      <div className="section-label">About Me</div>
      <h2>Summary</h2>
      
      <div className="about-content">
        <p className="about-description">{resumeData.hero.description}</p>
        
        <div className="stat-grid-inline">
          {resumeData.hero.stats.map((stat, i) => (
            <div key={i} className="stat-card reveal">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="hero-badges">
          {resumeData.hero.badges.map((badge, i) => (
            <span key={i} className="badge">{badge}</span>
          ))}
        </div>

        <div className="status-cards">
          <div className="status-card reveal">
            <div className="status-dot"></div>
            <div className="status-text">
              <strong>Available immediately</strong> · EU Blue Card · {resumeData.contact.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
