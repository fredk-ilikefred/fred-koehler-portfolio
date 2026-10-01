import React from 'react'
import { WIP_PROJECTS } from '../data/portfolioData'

export const WipSection: React.FC = () => {
  return (
    <section id="wip" className="section-container" aria-labelledby="wip-heading">
      <div className="section-heading-wrap">
        <span className="section-eyebrow">Current Work in Progress</span>
        <h2 id="wip-heading" className="sr-only">Current Work in Progress</h2>
        <p className="section-description">
          These are works in progress currently taking shape. Stay tuned for more!
        </p>
      </div>

      <div className="wip-project-list">
        {WIP_PROJECTS.map((project) => (
          <article key={project.id} className="wip-project-item" aria-labelledby={`${project.id}-title`}>
            <div className="wip-project-art-stage">
              <img
                src={project.artSrc}
                alt={project.artAlt}
                className="wip-project-art-img"
                width={project.artWidth}
                height={project.artHeight}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="wip-project-content">
              <div className="wip-project-header">
                <span className="wip-project-category">{project.category}</span>
                <h3 id={`${project.id}-title`} className="wip-project-name">
                  {project.title}
                </h3>
              </div>

              <p className="wip-project-pitch">{project.pitch}</p>

              <div className="wip-project-action">
                <a
                  href={project.readerfulUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary wip-readerful-link"
                >
                  Preview the story on Readerful →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
