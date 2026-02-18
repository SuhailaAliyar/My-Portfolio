import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { resumeData } from './data/resume';
import './App.css';

function App() {
  useEffect(() => {
    // Scroll reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer>
        <div className="footer-text">© 2026 Suhaila Kondappilly Aliyar</div>
        <div className="footer-text">{resumeData.contact.location} </div>
      </footer>
    </div>
  );
}

export default App;
