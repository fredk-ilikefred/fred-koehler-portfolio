import React from 'react'
import { HERO_ASSET } from '../data/portfolioData'

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section" aria-label="Fred Koehler">
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
    </section>
  )
}
