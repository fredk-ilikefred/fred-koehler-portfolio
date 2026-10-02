import React from 'react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container about-section" aria-label="About Fred Koehler">
      <div className="about-layout">
        <div className="about-photo-col">
          <div className="about-photo-frame">
            <img
              src="/assets/about/fred-koehler-headshot.jpg"
              alt="Black-and-white portrait of children’s book author and illustrator Fred Koehler"
              title="Fred Koehler — children’s book author and illustrator"
              className="about-photo-img"
              width={1711}
              height={1711}
              loading="lazy"
            />
          </div>
        </div>

        <div className="about-text-col">
          <div className="about-bio-block">
            <span className="about-subhead-kicker">Biography</span>
            <div className="about-bio-body">
              <p>
                Fred Koehler is an artist, novelist, and screenwriter whose real-life misadventures
                include sunken boats, shark encounters, and narrow escapes from hurricanes. Whether
                freediving in the Gulf of Mexico or backpacking across Africa, Fred’s sense of adventure
                and awe of nature overflow into his characters’ stories.
              </p>
              <p>
                His published works include the illustrated novel <em>Garbage Island</em>, the Boston
                Globe-Horn Book honoree <em>One Day, The End</em>, and the New York Public Library Best
                of the Year <em>Flashlight Night</em>, among others.
              </p>
              <p>
                Fred lives in Florida with his wife, kids, and a rescue dog named Cheerio Mutt-Face
                McChubbybutt.
              </p>
            </div>
          </div>

          <div className="about-statement-block">
            <span className="about-subhead-kicker">Artist Statement</span>
            <blockquote className="about-statement-text">
              “I work both digitally and traditionally, with a strong attraction to stories about family
              and adventure. I love to add layers of storytelling into my illustration work, so the
              observant viewer finds so much more than just a depiction of the words. My favorite
              manuscripts to illustrate are unexpected or odd in some way. If you’re an editor / art
              director scratching your head about how anyone would or could illustrate this manuscript,
              I’d love to see it.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
