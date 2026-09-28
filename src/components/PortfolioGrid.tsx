import React from 'react'
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData'

interface PortfolioGridProps {
  onSelectPiece: (piece: PortfolioItem, index: number) => void
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectPiece }) => {
  return (
    <section id="portfolio" className="section-container" aria-labelledby="portfolio-heading">
      <div className="section-heading-wrap">
        <span className="section-eyebrow">Visual Storytelling</span>
        <h2 id="portfolio-heading" className="section-heading">Selected Portfolio</h2>
        <p className="section-description">
          A curated selection of favorite illustration spreads, sketchbook explorations, character
          studies, and narrative key art. Hover for a subtle zoom preview, or click any piece to open
          the full-screen, high-resolution original view.
        </p>
      </div>

      <div className="portfolio-grid" role="region" aria-label="Portfolio grid items">
        {PORTFOLIO_ITEMS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className="portfolio-card"
            onClick={() => onSelectPiece(item, index)}
            aria-haspopup="dialog"
            aria-label={`Open high-resolution view of ${item.title}`}
          >
            <div className="portfolio-media-box">
              <img
                src={item.src}
                alt={item.title}
                className="portfolio-thumb"
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="portfolio-info">
              <span className="portfolio-caption">{item.title}</span>
              <span className="portfolio-zoom-tag" aria-hidden="true">
                Enlarge ↗
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
