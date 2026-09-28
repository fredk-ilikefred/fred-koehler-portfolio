import React from 'react'
import { WIP_ITEMS } from '../data/portfolioData'

export const WipSection: React.FC = () => {
  return (
    <section id="wip" className="section-container" aria-labelledby="wip-heading">
      <div className="section-heading-wrap">
        <span className="section-eyebrow">Studio Development</span>
        <h2 id="wip-heading" className="section-heading">Works in Progress / Rights Available</h2>
        <p className="section-description">
          Four active manuscripts, middle-grade adventures, and character worlds currently in
          development. Pitch details, rights availability, and process materials will link here once final assets arrive.
        </p>
      </div>

      <div className="wip-list">
        {WIP_ITEMS.map((item, idx) => {
          const isArtRight = item.artOrientation === 'right'

          return (
            <article
              key={item.id}
              className={`wip-row ${isArtRight ? 'art-right' : 'art-left'}`}
              aria-label={item.title}
            >
              <div className="wip-visual-stage">
                <div className="wip-placeholder-canvas">
                  <div className="wip-badge-bar">
                    <span className="wip-status-badge">
                      <span aria-hidden="true">●</span> {item.status}
                    </span>
                    <span className="wip-pill">Slot 0{idx + 1}</span>
                  </div>

                  <div className="wip-canvas-inner">
                    <h3 className="wip-canvas-title">{item.title}</h3>
                    <p className="wip-canvas-note">
                      Placeholder visual stage · Final artwork / dummy spreads will be placed here
                    </p>
                  </div>

                  <div className="wip-canvas-footer">
                    <span>ASSET SOURCE: GOOGLE DRIVE WIP FOLDER</span>
                    <span>16:10 SPREAD RATIO</span>
                  </div>
                </div>
              </div>

              <div className="wip-text-column">
                <span className="wip-category-tag">{item.category}</span>
                <h3 className="wip-project-title">{item.title}</h3>
                <p className="wip-pitch-text">{item.pitch}</p>

                <div className="wip-meta-strip">
                  <span className="wip-pill">Dummy Available</span>
                  <span className="wip-pill">Author-Illustrator</span>
                  <span className="wip-pill">Inquiries Welcome</span>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
