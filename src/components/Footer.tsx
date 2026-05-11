import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-message">
          Quer conversar sobre projetos, estágios ou oportunidades? Entre em contato.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/DiogoPalharini"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/diogo-palharini-10b803275/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/diogopalharini/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Instagram"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a
            href="mailto:diogo.palharini@gmail.com"
            className="footer-link"
            aria-label="Email"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} <strong>Diogo Palharini</strong>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
