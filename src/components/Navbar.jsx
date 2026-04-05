/* ============================================
   COMPONENT: Navbar
   File: src/components/Navbar.jsx
   Deskripsi: Fixed navbar dengan scroll effect,
              active section highlight, hamburger mobile
   ============================================ */

import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { id: 'beranda',    label: 'Beranda'    },
  { id: 'tentang',    label: 'Tentang'    },
  { id: 'keahlian',   label: 'Keahlian'   },
  { id: 'proyek',     label: 'Proyek'     },
  { id: 'pengalaman', label: 'Pengalaman' },
]

export default function Navbar({ activeSection }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Logo */}
          <span className="nav-logo" onClick={() => scrollTo('beranda')}>
            ImPutraaa<span className="accent">.</span>net
          </span>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`nav-link ${activeSection === id ? 'active' : ''}`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <button className="nav-cta" onClick={() => scrollTo('kontak')}>
                Hubungi Saya
              </button>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {[...NAV_LINKS, { id: 'kontak', label: 'Kontak' }].map(({ id, label }) => (
          <button key={id} className="mobile-link" onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
      </div>
    </>
  )
}
