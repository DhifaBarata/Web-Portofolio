/* ============================================
   COMPONENT: Footer
   File: src/components/Footer.jsx
   Deskripsi: Footer dengan logo, copyright, social icons
   ============================================ */

import { SOCIAL_LINKS } from '../data/index.js'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo" onClick={scrollToTop}>
          Putra<span className="accent">.</span>dev
        </span>

        <p className="footer-copy">
          © {new Date().getFullYear()} Dhifa Barata Putra. All rights reserved.
        </p>

        <div className="footer-socials">
          {SOCIAL_LINKS.map(({ icon, href, label }) => (
            <a key={label} href={href} className="footer-social" aria-label={label}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
