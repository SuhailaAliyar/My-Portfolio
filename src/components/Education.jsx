import React from 'react';
import { resumeData } from '../data/resume';

function Education() {
  return (
    <section id="education">
      <div className="section-label">Academic Background</div>
      <h2>Education</h2>

      <div className="education-grid">
        {resumeData.education.map((edu, i) => (
          <div key={i} className="edu-card reveal">
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-school">{edu.school}</div>
            <div className="edu-meta">{edu.meta}</div>
          </div>
        ))}
      </div>

      <div className="cert-grid">
        {resumeData.certifications.map((cert, i) => (
          <div key={i} className="edu-card cert-mini reveal">
            <div className="cert-label">
              {i === 0 ? 'Certification' : 'Course'}
            </div>
            <div className="cert-name">{cert.name}</div>
            <div className="edu-meta">{cert.status || cert.provider}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
