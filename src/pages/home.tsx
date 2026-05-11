import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import MinhaFoto from '../img/DiogoPalharini.png';
import { FaChevronDown } from 'react-icons/fa';
import ProjectTabs from '../components/ProjectTabs';
import { professionalProjects, academicProjects } from '../data/projects';

const Home: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="container">
      {/* Seção 1: Sobre (Hero + Sobre fundidos) */}
      <section id="sobre" className={`section hero-section ${visibleSections.has('sobre') ? 'visible' : ''}`}>
        <div className="section-content">
          <div className="hero-content">
            <div className="profile-image-wrapper">
              <img src={MinhaFoto} alt="Diogo Palharini" className="profile-photo" />
              <div className="photo-glow"></div>
            </div>
            <h1 className="hero-title">
              <span className="gradient-text">Diogo Palharini</span>
            </h1>
            <p className="hero-subtitle">
              Construindo produtos digitais — do código à estratégia
            </p>
            <p className="hero-description">
              Sou <strong>desenvolvedor full-stack</strong>, <strong>Product Owner técnico</strong> e
              <strong> sócio</strong> de uma empresa de tecnologia. Atuo onde produto, código e
              negócio se encontram — escrevendo software, estruturando sistemas e participando
              das decisões que dão direção ao que entregamos.
            </p>
            <p className="hero-description">
              Meu foco atual é a <strong>Integra Rural</strong>, plataforma voltada ao agronegócio.
              Lidero o produto, defino a arquitetura técnica e conecto a visão estratégica ao
              desenvolvimento — circulando livremente entre os papéis conforme o momento pede.
            </p>
            <p className="hero-description">
              Estudo <strong>Desenvolvimento de Software Multiplataforma</strong> na FATEC São José
              dos Campos. Em paralelo, construí experiência prática em projetos com Exército
              Brasileiro, Tecsus, FAPG e outros parceiros — atuando ora como engenheiro, ora como
              Product Owner, sempre na ponte entre tecnologia e negócio.
            </p>
            <div className="hero-cta">
              <button
                className="cta-button"
                onClick={() => {
                  document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Projetos
                <FaChevronDown className="cta-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Projetos */}
      <section id="projetos" className={`section ${visibleSections.has('projetos') ? 'visible' : ''}`}>
        <div className="section-content">
          <h2 className="section-title">
            <span className="title-decoration">Projetos</span>
          </h2>

          <div className="project-group">
            <h3 className="project-group-title">Profissional</h3>
            <p className="project-group-subtitle">Atuação atual na empresa da qual sou sócio.</p>
            <ProjectTabs projects={professionalProjects} ariaLabel="Projetos profissionais" />
          </div>

          <div className="project-group">
            <h3 className="project-group-title">Acadêmicos · APIs FATEC</h3>
            <p className="project-group-subtitle">
              Projetos desenvolvidos em parceria com instituições durante o curso de DSM na FATEC SJC.
            </p>
            <ProjectTabs projects={academicProjects} ariaLabel="Projetos acadêmicos da FATEC" />
          </div>
        </div>
      </section>

      {/* Seção 3: Competências */}
      <section id="competencias" className={`section ${visibleSections.has('competencias') ? 'visible' : ''}`}>
        <div className="section-content">
          <h2 className="section-title">
            <span className="title-decoration">Competências</span>
          </h2>

          <div className="skills-group">
            <h3 className="skills-group-title">Engenharia & Stack</h3>
            <div className="skills-container">
              <div className="skill-card">
                <div className="skill-icon">⚛️</div>
                <h3>React.js</h3>
                <p>Desenvolvimento de interfaces web modernas</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">📱</div>
                <h3>Flutter</h3>
                <p>Desenvolvimento mobile para Android e iOS</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🚀</div>
                <h3>Node.js</h3>
                <p>Desenvolvimento de APIs e backends</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">☕</div>
                <h3>Java Spring Boot</h3>
                <p>Desenvolvimento de sistemas corporativos</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🐍</div>
                <h3>Python</h3>
                <p>Flask, automações e projetos com IA</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🗄️</div>
                <h3>Bancos de Dados</h3>
                <p>MySQL, PostgreSQL e MongoDB</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🔄</div>
                <h3>Git</h3>
                <p>Controle de versão e fluxo colaborativo</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🏗️</div>
                <h3>Arquitetura</h3>
                <p>Estruturação de sistemas e escolha de stack</p>
              </div>
            </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-group-title">Produto, Negócio & Liderança</h3>
            <div className="skills-container">
              <div className="skill-card">
                <div className="skill-icon">🎯</div>
                <h3>Product Owner</h3>
                <p>Atuação como PO em projetos com parceiros reais e em produto próprio</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🗂️</div>
                <h3>Gestão de Produto</h3>
                <p>Visão de produto, roadmap, priorização e refinamento de backlog</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">📊</div>
                <h3>Estratégia de Negócio</h3>
                <p>Participação em decisões estratégicas e direcionamento de produto</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🧭</div>
                <h3>Liderança Técnica</h3>
                <p>Condução de equipes, decisões de arquitetura e mediação técnica</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🗣️</div>
                <h3>Comunicação com Cliente</h3>
                <p>Levantamento de requisitos, validação e alinhamento contínuo</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🔁</div>
                <h3>Scrum</h3>
                <p>Condução de cerimônias, sprint planning, review e retrospectivas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
