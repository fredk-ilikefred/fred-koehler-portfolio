import React, { useRef, useState } from 'react'
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

  const onMouseLeave = () => setIsDragging(false)
  const onMouseUp = () => setIsDragging(false)

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = scrollLeft - (x - startX) * 1.6
  }

  return (
    <section id="books" className="section-container" aria-labelledby="books-heading">
      <div className="section-heading-wrap">
        <span className="section-eyebrow">Published Books</span>
        <h2 id="books-heading" className="sr-only">Published Books</h2>
      </div>

      <div className="books-shelf-wrapper">
        <div
          ref={trackRef}
          className="books-scroll-track"
          role="region"
          aria-label="Published book covers"
          tabIndex={0}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {PUBLISHED_BOOKS.map((book) => (
            <article key={book.id} className="book-card" aria-label={book.title}>
              <img
                src={book.src}
                alt={book.altText}
                title={book.altText}
                className="book-cover-img"
                width={book.width}
                height={book.height}
                loading="lazy"
                decoding="async"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
