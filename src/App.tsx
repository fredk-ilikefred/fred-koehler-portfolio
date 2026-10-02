import React, { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { BooksShelf } from './components/BooksShelf'
import { PortfolioGrid } from './components/PortfolioGrid'
import { WipSection } from './components/WipSection'
import { ContactSection, Footer } from './components/ContactSection'
import { Lightbox } from './components/Lightbox'
import { PORTFOLIO_ITEMS, PortfolioItem } from './data/portfolioData'

export const App: React.FC = () => {
  const [selectedPiece, setSelectedPiece] = useState<{
    item: PortfolioItem
    index: number
  } | null>(null)

  const handleSelectPiece = (item: PortfolioItem, index: number) => {
    setSelectedPiece({ item, index })
  }

  const handleCloseLightbox = () => {
    setSelectedPiece(null)
  }

  const handlePrevPiece = () => {
    if (!selectedPiece) return
    const prevIndex =
      (selectedPiece.index - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length
    setSelectedPiece({
      item: PORTFOLIO_ITEMS[prevIndex],
      index: prevIndex,
    })
  }

  const handleNextPiece = () => {
    if (!selectedPiece) return
    const nextIndex = (selectedPiece.index + 1) % PORTFOLIO_ITEMS.length
    setSelectedPiece({
      item: PORTFOLIO_ITEMS[nextIndex],
      index: nextIndex,
    })
  }

  return (
    <div className="site-shell">
      <Header />
      <main className="main-content">
        <Hero />
        <AboutSection />
        <BooksShelf />
        <PortfolioGrid onSelectPiece={handleSelectPiece} />
        <WipSection />
        <ContactSection />
      </main>
      <Footer />

      {selectedPiece && (
        <Lightbox
          piece={selectedPiece.item}
          currentIndex={selectedPiece.index}
          totalCount={PORTFOLIO_ITEMS.length}
          onClose={handleCloseLightbox}
          onPrev={handlePrevPiece}
          onNext={handleNextPiece}
        />
      )}
    </div>
  )
}

export default App
