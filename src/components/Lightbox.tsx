import React, { useEffect, useRef } from 'react'
import { PortfolioItem } from '../data/portfolioData'

interface LightboxProps {
  piece: PortfolioItem
  currentIndex: number
  totalCount: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export const Lightbox: React.FC<LightboxProps> = ({
  piece,
  currentIndex,
  totalCount,
  onClose,
  onPrev,
  onNext,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        onPrev()
      } else if (e.key === 'ArrowRight') {
        onNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${piece.title} detail view`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div ref={dialogRef} className="lightbox-dialog">
        <button
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close lightbox (Escape)"
        >
          Close ✕
        </button>

        <button
          type="button"
          className="lightbox-nav-btn lightbox-nav-prev"
          onClick={onPrev}
          aria-label="Previous artwork (Left arrow)"
        >
          ‹
        </button>

        <div className="lightbox-img-frame">
          <img
            src={piece.src}
            alt={piece.altText}
            title={piece.altText}
            className="lightbox-img"
            width={piece.width}
            height={piece.height}
            decoding="async"
          />
        </div>

        <button
          type="button"
          className="lightbox-nav-btn lightbox-nav-next"
          onClick={onNext}
          aria-label="Next artwork (Right arrow)"
        >
          ›
        </button>

        <div className="lightbox-bar">
          <span className="lightbox-title">{piece.title}</span>
          <span className="lightbox-count">
            {currentIndex + 1} of {totalCount}
          </span>
        </div>
      </div>
    </div>
  )
}
