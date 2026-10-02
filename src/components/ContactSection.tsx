import React, { useState } from 'react'

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSent(true)
  }

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newsletterEmail) return
    setNewsletterSubscribed(true)
  }

  return (
    <section id="contact" className="section-container" aria-labelledby="contact-heading">
      <div className="section-heading-wrap">
        <span className="section-eyebrow">Representation &amp; Inquiries</span>
        <h2 id="contact-heading" className="sr-only">Representation &amp; Inquiries</h2>
        <p className="section-description">
          Whether you are an art director looking for your next picture-book collaborator, an editor
          interested in acquired rights, a librarian planning a school assembly, or a young reader
          sending fan mail, choose your reason below to connect.
        </p>
      </div>

      <div className="contact-reasons-grid">
        <article className="reason-card">
          <div className="reason-icon-wrap" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <h3 className="reason-title">School Visits</h3>
          <p className="reason-desc">
            Reach out for in-person assemblies and interactive drawing workshops.
          </p>
        </article>

        <article className="reason-card">
          <div className="reason-icon-wrap" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <h3 className="reason-title">Editor &amp; Art Director Inquiries</h3>
          <p className="reason-desc">
            My inbox is open to editors and art directors for discussions about works in progress or new
            projects.
          </p>
        </article>

        <article className="reason-card">
          <div className="reason-icon-wrap" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <h3 className="reason-title">Fan Mail</h3>
          <p className="reason-desc">
            Questions from young artists, classroom letters, and notes from families. I may be slow, but I
            always respond.
          </p>
        </article>
      </div>

      <div className="contact-layout">
        <aside className="author-bio-card" aria-label="About Fred Koehler">
          <div className="author-bio-header">
            <span className="author-bio-kicker">About the Author &amp; Illustrator</span>
            <h3 className="author-bio-name">Fred Koehler</h3>
          </div>
          <div className="author-bio-body">
            <p>
              Fred Koehler is an artist, novelist, and screenwriter whose real-life misadventures include
              sunken boats, shark encounters, and narrow escapes from hurricanes. Whether freediving in the
              Gulf of Mexico or backpacking across Africa, Fred’s sense of adventure and awe of nature overflow
              into his characters’ stories.
            </p>
            <p>
              His published works include the illustrated novel <em>Garbage Island</em>, the Boston Globe-Horn Book
              honoree <em>One Day, The End</em>, and the New York Public Library Best of the Year{' '}
              <em>Flashlight Night</em>, among others.
            </p>
            <p className="author-bio-closer">
              Fred lives in Florida with his wife, kids, and a rescue dog named Cheerio Mutt-Face McChubbybutt.
            </p>
          </div>
        </aside>

        <div className="contact-form-stage">
          {/* Mailing List Opt-In */}
          <div className="newsletter-block">
            <div className="newsletter-header">
              <span className="newsletter-kicker">Mailing List</span>
              <h3 className="newsletter-title">Stay in the Loop</h3>
              <p className="newsletter-desc">
                Occasional studio news, new artwork, and upcoming book releases. No spam, ever.
              </p>
            </div>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit} noValidate>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  className="form-input newsletter-input"
                  placeholder="Enter your email address…"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  aria-label="Email address for mailing list"
                />
                <button type="submit" className="btn btn-primary newsletter-btn">
                  Sign Up
                </button>
              </div>
              {newsletterSubscribed && (
                <span className="form-status-note" role="status">
                  ✓ You’re on the list! (Preview mode)
                </span>
              )}
            </form>
          </div>

          <div className="contact-divider" aria-hidden="true" />

          {/* Direct Inquiry Form */}
          <div className="direct-inquiry-header">
            <span className="form-kicker">Direct Inquiry</span>
            <h3 className="inquiry-title">Send a Message</h3>
          </div>

          <form className="form-grid" onSubmit={handleContactSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">Name</label>
              <input
                id="contact-name"
                type="text"
                className="form-input"
                placeholder="Jane Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">Email</label>
              <input
                id="contact-email"
                type="email"
                className="form-input"
                placeholder="jane@example.com"
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="contact-message" className="form-label">Message</label>
              <textarea
                id="contact-message"
                className="form-textarea"
                placeholder="Tell Fred about your school, project timeline, or manuscript ideas…"
                required
              ></textarea>
              <span className="form-help">
                Ready for Google Form integration · Submissions will connect to your designated Google Sheet.
              </span>
            </div>

            <div className="form-actions full-width">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
              {formSent && (
                <span className="form-status-note" role="status">
                  ✓ Message sent! (Preview mode)
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <span className="footer-brand">Fred Koehler · Children’s Book Author &amp; Illustrator</span>
        <div className="footer-links">
          <a href="#hero">Back to Top ↑</a>
          <a href="#books">Books</a>
          <a href="#artwork">Artwork</a>
          <a href="#wip">Work in Progress</a>
          <a href="#contact">Contact</a>
        </div>
        <span>All original artwork © Fred Koehler. Used with permission.</span>
      </div>
    </footer>
  )
}
