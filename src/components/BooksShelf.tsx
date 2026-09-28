import React, { useRef, useState, useEffect } from 'react'
import { PUBLISHED_BOOKS } from '../data/portfolioData'

export const BooksShelf: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }

  const onMouseLeave = () => {
    setIsDragging(false)
  }

  const onMouseUp = () => {
    setIsDragging(false)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.6
    trackRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section id="books" className="section-container" aria-labelledby="books-heading">
      <div className="section-heading-wrap">
        <span className="section-eyebrow">Bibliography</span>
        <h2 id="books-heading" className="section-heading">Published Books</h2>
        <p className="section-description">
          A continuous shelf of published picture books and middle-grade titles. Covers are shown
          flat at their natural aspect ratios with no 3D distortion. Drag or scroll horizontally to browse the collection.
        </p>
      </div>

      <div className="books-shelf-wrapper">
        <div
          ref={trackRef}
          className="books-scroll-track"
          role="region"
          aria-label="Horizontally scrollable book cover shelf"
          tabIndex={0}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {PUBLISHED_BOOKS.map((book) => (
            <article key={book.id} className="book-card" aria-label={book.title}>
              <div className="book-cover-stage">
                <img
                  src={book.src}
                  alt={`Cover of ${book.title}`}
                  className="book-cover-img"
                  width={book.width}
                  height={book.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="book-meta">
                <span className="book-role-pill">{book.role}</span>
                <h3 className="book-title">{book.title}</h3>
                <p className="book-sub">
                  {book.category} {book.year ? `· ${book.year}` : ''}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="books-shelf-hint" aria-hidden="true">
          <span>← Scroll or drag to explore all {PUBLISHED_BOOKS.length} titles →</span>
          <span>Flat 2D covers · Natural aspect ratios</span>
        </div>
      </div>
    </section>
  )
}
