import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="nav-brand">
          <span className="brand-text">DP</span>
        </div>
        
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('sobre')}>Sobre</button></li>
          <li><button onClick={() => scrollToSection('projetos')}>Projetos</button></li>
          <li><button onClick={() => scrollToSection('competencias')}>Competências</button></li>
        </ul>

        <div className="nav-social">
          <a href="https://github.com/DiogoPalharini" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/diogo-palharini-10b803275/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Header;

