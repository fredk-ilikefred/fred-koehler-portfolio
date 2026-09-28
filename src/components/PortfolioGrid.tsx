import React from 'react'
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData'

interface PortfolioGridProps {
  onSelectPiece: (piece: PortfolioItem, index: number) => void
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectPiece }) => {
  return (
    <section id="portfolio" className="section-container" aria-labelledby="portfolio-heading">
      <div className="section-heading-wrap">
        <h2 id="portfolio-heading" className="section-heading">Selected Portfolio</h2>
      </div>

      <div className="portfolio-grid" role="region" aria-label="Selected portfolio">
        {PORTFOLIO_ITEMS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className="portfolio-card"
            style={{ aspectRatio: item.aspectRatio }}
            onClick={() => onSelectPiece(item, index)}
            aria-haspopup="dialog"
            aria-label={`Open larger view of ${item.title}`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="portfolio-thumb"
              width={item.width}
              height={item.height}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </section>
  )
}
