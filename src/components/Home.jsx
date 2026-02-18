import React from 'react';
import { resumeData } from '../data/resume';

function Home() {
  return (
    <div className="hero" id="home">
      <div className="hero-center">
        <div className="hero-image-large">
          <img src="/profile.jpg" alt="Suhaila Aliyar" />
        </div>
        
        <h1 className="hero-name">{resumeData.hero.name}</h1>
        <p className="hero-title">{resumeData.hero.title}</p>
        
        <div className="hero-actions">
          <a href="#about" className="btn btn-primary">Learn More ↓</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
