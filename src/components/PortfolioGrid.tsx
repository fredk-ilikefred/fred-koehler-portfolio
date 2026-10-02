import React, { useEffect, useState } from 'react'
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData'

interface PortfolioGridProps {
  onSelectPiece: (piece: PortfolioItem, index: number) => void
}

const DESKTOP_ROWS = [
  ['portfolio-09', 'portfolio-18', 'portfolio-19', 'portfolio-20'],
  ['portfolio-13', 'portfolio-04', 'portfolio-01', 'portfolio-03', 'portfolio-07'],
  ['portfolio-08', 'portfolio-06', 'portfolio-12', 'portfolio-11'],
  ['portfolio-15', 'portfolio-21', 'portfolio-14', 'portfolio-10'],
  ['portfolio-17', 'portfolio-05', 'portfolio-02', 'portfolio-16'],
] as const

const MOBILE_ROWS = [
  ['portfolio-08', 'portfolio-09'],
  ['portfolio-13', 'portfolio-05'],
  ['portfolio-20', 'portfolio-18'],
  ['portfolio-11', 'portfolio-03', 'portfolio-15'],
  ['portfolio-06', 'portfolio-01'],
  ['portfolio-10', 'portfolio-17'],
  ['portfolio-12', 'portfolio-07'],
  ['portfolio-16', 'portfolio-02'],
  ['portfolio-19', 'portfolio-14'],
  ['portfolio-21', 'portfolio-04'],
] as const

const portfolioById = new Map(PORTFOLIO_ITEMS.map((item) => [item.id, item]))

const resolveRows = (order: readonly (readonly string[])[]): PortfolioItem[][] =>
  order.map((row) =>
    row.map((id) => {
      const item = portfolioById.get(id)
      if (!item) throw new Error(`Unknown artwork item: ${id}`)
      return item
    })
  )

const useCompactGallery = (): boolean => {
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)')
    const update = () => setIsCompact(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return isCompact
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectPiece }) => {
  const isCompact = useCompactGallery()
  const rows = resolveRows(isCompact ? MOBILE_ROWS : DESKTOP_ROWS)

  return (
    <section id="artwork" className="section-container" aria-labelledby="artwork-heading">
      <div className="section-heading-wrap">
        <span className="section-eyebrow">Selected Artwork</span>
        <h2 id="artwork-heading" className="sr-only">Selected Artwork</h2>
      </div>

      <div className="portfolio-grid" role="region" aria-label="Selected artwork">
        {rows.map((row, rowIndex) => (
          <div className="portfolio-row" key={`portfolio-row-${rowIndex}`}>
            {row.map((item) => {
              const index = PORTFOLIO_ITEMS.findIndex((piece) => piece.id === item.id)

              return (
                <button
                  key={item.id}
                  type="button"
                  className="portfolio-card"
                  style={{
                    aspectRatio: item.aspectRatio,
                    flexGrow: item.aspectRatio,
                  }}
                  onClick={() => onSelectPiece(item, index)}
                  aria-haspopup="dialog"
                  aria-label={`Open larger view of ${item.title}`}
                >
                  <img
                    src={item.src}
                    alt={item.altText}
                    title={item.altText}
                    className="portfolio-thumb"
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}
