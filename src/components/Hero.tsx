import React from 'react'
import { HERO_ASSET } from '../data/portfolioData'

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section" aria-label="Fred Koehler">
      <div className="hero-art-frame">
        <img
          src={HERO_ASSET.src}
          alt={HERO_ASSET.altText}
          title={HERO_ASSET.altText}
          className="hero-img"
          width={HERO_ASSET.width}
          height={HERO_ASSET.height}
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  )
}
