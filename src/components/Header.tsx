import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#hero" className="brand-link" aria-label="Fred Koehler Home">
          <svg className="brand-symbol" viewBox="0 0 512 512" aria-hidden="true">
            <rect width="512" height="512" fill="#5E9C95" />
            <path fill="#F6F2E8" d="M144 404h224v36H144zM188 380h136v24H188zM204 224h104v156H204zM222 104h68l18 76h-104zM234 68h44v36h-44zM208 180h96v44h-96z" />
            <path fill="#5E9C95" d="M240 210h32v170h-32zM224 252h64v20h-64zM224 300h64v20h-64z" />
            <path fill="#D6A83A" d="M324 104l48 48-26 26-48-48z" />
          </svg>
          <span className="brand-wordmark">Fred Koehler</span>
        </a>

        <nav className="site-nav" aria-label="Primary Navigation">
          <a href="#books">Books</a>
          <a href="#portfolio">Work</a>
          <a href="#wip">Rights Available</a>
          <a href="#contact">About &amp; Contact</a>
        </nav>
      </div>
    </header>
  )
}
