import React from 'react'
import { HERO_ASSET } from '../data/portfolioData'

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section" aria-label="Hero Overview">
      <div className="hero-art-frame">
        <img
          src={HERO_ASSET.src}
          alt="Original panoramic signature illustration by Fred Koehler: adventure boat and lighthouse ocean spread"
          className="hero-img"
          width={HERO_ASSET.width}
          height={HERO_ASSET.height}
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="hero-content-panel">
        <div className="hero-title-group">
          <p className="hero-subtitle">Children’s Book Author &amp; Illustrator</p>
          <p className="hero-bio-hook">
            Crafting adventurous, heartfelt, and humorous picture books, middle-grade novels,
            and visual storytelling for young readers, art directors, and publishers nationwide.
          </p>
        </div>

        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-primary">
            Explore Work
          </a>
          <a href="#books" className="btn btn-secondary">
            View Books
          </a>
          <a href="#contact" className="btn btn-secondary">
            School Visits
          </a>
        </div>
      </div>
    </section>
  )
}
