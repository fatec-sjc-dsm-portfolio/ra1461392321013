import React, { useState, useRef, useEffect } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../data/projects';
import '../styles/ProjectTabs.css';

interface ProjectTabsProps {
  projects: Project[];
  ariaLabel?: string;
}

const ProjectTabs: React.FC<ProjectTabsProps> = ({ projects, ariaLabel }) => {
  const [activeId, setActiveId] = useState<string>(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeId) ?? projects[0];
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeTabRef.current && tabsRef.current) {
      const tab = activeTabRef.current;
      const container = tabsRef.current;
      const tabRect = tab.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      if (tabRect.left < containerRect.left || tabRect.right > containerRect.right) {
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeId]);

  return (
    <div className="project-tabs">
      <div
        className="project-tabs-bar"
        role="tablist"
        aria-label={ariaLabel}
        ref={tabsRef}
      >
        {projects.map((project) => {
          const isActive = project.id === activeId;
          return (
            <button
              key={project.id}
              ref={isActive ? activeTabRef : undefined}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${project.id}`}
              id={`tab-${project.id}`}
              className={`project-tab ${isActive ? 'active' : ''} ${project.isCurrent ? 'tab-current' : ''}`}
              onClick={() => setActiveId(project.id)}
            >
              {project.isCurrent && <span className="tab-status-dot" aria-hidden="true"></span>}
              <span className="tab-label">{project.tabLabel}</span>
            </button>
          );
        })}
      </div>

      <div
        key={activeProject.id}
        role="tabpanel"
        id={`panel-${activeProject.id}`}
        aria-labelledby={`tab-${activeProject.id}`}
        className={`project-panel ${activeProject.isCurrent ? 'panel-current' : ''}`}
      >
        <div className="panel-header">
          <div className="panel-badges">
            {activeProject.badges.map((badge, idx) => (
              <span key={idx} className={`panel-badge badge-${badge.kind}`}>
                {badge.kind === 'current' && <span className="status-dot" aria-hidden="true"></span>}
                {badge.label}
              </span>
            ))}
          </div>
          <h3 className="panel-title">{activeProject.title}</h3>
        </div>

        {activeProject.leadership && (
          <div className="leadership-banner">
            <span className="leadership-icon" aria-hidden="true">🎯</span>
            <span>
              <strong>{activeProject.leadership.role}</strong> · {activeProject.leadership.summary}
            </span>
          </div>
        )}

        {activeProject.meta && (
          <div className="panel-meta">
            {activeProject.meta.map((item, idx) => (
              <span key={idx} className="meta-item">
                <strong>{item.label}:</strong> {item.value}
              </span>
            ))}
          </div>
        )}

        <h4>Contexto</h4>
        <p>{activeProject.context}</p>

        {activeProject.sections.map((section, idx) => (
          <div key={idx}>
            <h4>{section.title}</h4>
            {section.paragraph && <p>{section.paragraph}</p>}
            {section.bullets && (
              <ul className="feature-list">
                {section.bullets.map((bullet, bi) => (
                  <li key={bi}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {activeProject.tech && activeProject.tech.length > 0 && (
          <div className="tech-stack">
            <h4>Tecnologias</h4>
            <div className="tech-tags">
              {activeProject.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        )}

        {activeProject.repoUrl && (
          <div className="project-link">
            <a
              href={activeProject.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              Ver Repositório <FaExternalLinkAlt />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectTabs;
