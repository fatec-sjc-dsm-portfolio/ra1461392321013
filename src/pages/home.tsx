import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import MinhaFoto from '../img/DiogoPalharini.png';
import { FaChevronDown } from 'react-icons/fa';
import ProjectTabs from '../components/ProjectTabs';
import { professionalProjects, academicProjects } from '../data/projects';

type ProjectCategory = 'academic' | 'professional' | 'personal';

const Home: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('academic');

  const categorySubtitle =
    activeCategory === 'academic'
      ? 'Projetos desenvolvidos em parceria com instituições durante o curso de DSM na FATEC SJC.'
      : activeCategory === 'professional'
      ? 'Atuação atual na empresa da qual sou sócio.'
      : 'Um pouco do que me move além do trabalho — interesses, hobbies e curiosidades.';

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
              
            </p>
            <p className="hero-description">
              Sou <strong>desenvolvedor full-stack</strong> é onde tudo começou e onde me sinto
              em casa. Gosto de construir, entender como as coisas funcionam por dentro e ver
              ideia virando produto. Também atuo como Product Owner e sou sócio de uma empresa
              de tecnologia, mas é da mão na massa que vem a maior parte do que sei.
            </p>
            <p className="hero-description">
              Meu foco hoje é a <strong>Integra Rural</strong>, plataforma voltada ao agronegócio.
              Participo de praticamente tudo por lá: do desenho do produto à construção do sistema,
              das conversas com produtores até as decisões da empresa.
            </p>
            <p className="hero-description">
              Sou formado em <strong>Desenvolvimento de Software Multiplataforma</strong> pela
              FATEC São José dos Campos uma graduação ampla, que cobre desde desenvolvimento web e
              mobile até gestão de projetos, dados, infraestrutura e arquitetura. Durante o curso,
              ganhei vivência em parcerias com Exército Brasileiro, Tecsus, FAPG e outras
              instituições, atuando ora como dev, ora como PO. Não gosto de me prender a um único
              título: prefiro aprender, experimentar e seguir construindo.
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

          <div className="project-category-section">
            <div
              className="project-category-switch"
              role="tablist"
              aria-label="Categoria de projetos"
            >
              <button
                role="tab"
                type="button"
                aria-selected={activeCategory === 'academic'}
                className={`category-tab ${activeCategory === 'academic' ? 'active' : ''}`}
                onClick={() => setActiveCategory('academic')}
              >
                Acadêmicos · APIs FATEC
              </button>
              <button
                role="tab"
                type="button"
                aria-selected={activeCategory === 'professional'}
                className={`category-tab ${activeCategory === 'professional' ? 'active' : ''}`}
                onClick={() => setActiveCategory('professional')}
              >
                Profissional
              </button>
              <button
                role="tab"
                type="button"
                aria-selected={activeCategory === 'personal'}
                className={`category-tab ${activeCategory === 'personal' ? 'active' : ''}`}
                onClick={() => setActiveCategory('personal')}
              >
                Pessoal
              </button>
            </div>

            <p className="project-category-subtitle">{categorySubtitle}</p>

            {activeCategory === 'personal' ? (
              <div className="personal-grid" role="list" aria-label="Interesses pessoais">
                <div className="skill-card" role="listitem">
                  <div className="skill-icon">🌱</div>
                  <h3>Agronegócio</h3>
                  <p>Imersão prática no setor através da Integra Rural — conversar com produtores, entender o campo de perto.</p>
                </div>
                <div className="skill-card" role="listitem">
                  <div className="skill-icon">💡</div>
                  <h3>Empreendedorismo</h3>
                  <p>Gosto de construir coisas do zero — produtos, negócios, ideias que resolvem algo real.</p>
                </div>
                <div className="skill-card" role="listitem">
                  <div className="skill-icon">📚</div>
                  <h3>Leitura</h3>
                  <p>Produto digital, tecnologia, negócios e biografias. Aprender com quem já trilhou o caminho.</p>
                </div>
                <div className="skill-card" role="listitem">
                  <div className="skill-icon">📺</div>
                  <h3>Animes & Séries</h3>
                  <p>Maratonar boas histórias é o meu jeito favorito de desligar — de animes clássicos a séries do momento.</p>
                </div>
                <div className="skill-card" role="listitem">
                  <div className="skill-icon">🎮</div>
                  <h3>Games & Tech</h3>
                  <p>Acompanhar lançamentos de tecnologia, jogos e cultura digital — entusiasta de longa data.</p>
                </div>
                <div className="skill-card" role="listitem">
                  <div className="skill-icon">✈️</div>
                  <h3>Viagens</h3>
                  <p>Conhecer lugares, pessoas e perspectivas diferentes — combustível para criatividade.</p>
                </div>
              </div>
            ) : (
              <ProjectTabs
                key={activeCategory}
                projects={activeCategory === 'professional' ? professionalProjects : academicProjects}
                ariaLabel={
                  activeCategory === 'professional'
                    ? 'Projetos profissionais'
                    : 'Projetos acadêmicos da FATEC'
                }
              />
            )}
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
