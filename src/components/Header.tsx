import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#hero" className="brand-link" aria-label="Fred Koehler Home">
          <img
            src="/assets/header/icon.gif"
            alt=""
            aria-hidden="true"
            className="brand-symbol-fish"
            width={32}
            height={31}
          />
          <span className="brand-wordmark">Fred Koehler</span>
        </a>

        <nav className="site-nav" aria-label="Primary Navigation">
          <a href="#books">Books</a>
          <a href="#artwork">Artwork</a>
          <a href="#wip">Work in Progress</a>
          <a href="#contact">About &amp; Contact</a>
        </nav>
      </div>
    </header>
  )
}
