import React, { useState } from 'react'

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSent(true)
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
            Inspiring in-person assemblies, virtual school visits, and interactive drawing workshops
            teaching kids how to invent characters and tell resilient stories.
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
            Direct communication regarding new manuscripts, book illustration assignments, dummy
            acquisitions, and literary agency representation discussions.
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
            Questions from young artists, classroom letters, and notes from families who love Little
            Jumbo, Archibald Shrew, and Cheerio the dog.
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
          <form className="form-grid" onSubmit={handleSubmit} noValidate>
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
              <label htmlFor="contact-reason" className="form-label">I want to talk about…</label>
              <select id="contact-reason" className="form-select" defaultValue="art-direction">
                <option value="school-visit">School Visit / Assembly / Workshop</option>
                <option value="art-direction">Editor &amp; Art Director Inquiry / Commission</option>
                <option value="rights">Rights Available / Project Acquisition</option>
                <option value="fan-mail">Fan Mail / General Question</option>
              </select>
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
                Early prototype front-end preview · Form submissions are not hooked up yet.
              </span>
            </div>

            <div className="form-actions full-width">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
              {formSent && (
                <span className="form-status-note" role="status">
                  ✓ Preview notice: Form interface confirmed (submission backend not connected).
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
