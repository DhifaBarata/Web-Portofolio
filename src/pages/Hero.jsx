/* ============================================
   PAGE: Hero
   File: src/pages/Hero.jsx
   Deskripsi: Landing section utama dengan avatar,
              floating orbs, stats, dan CTA buttons
   ============================================ */

import { HERO_STATS } from '../data/index.js'
import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="beranda" className="hero">
      {/* Animated background orbs */}
      <div className="hero-bg">
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-orb orb-3" />
      </div>

      <div className="hero-content">
        {/* Left: text */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for work
          </div>

          <h1 className="hero-title">
            Halo, Saya<br />
            <span className="name">Putra</span><br />
            <span className="role">Web &amp; Networking</span>
          </h1>

          <p className="hero-desc">
            {' '}
            <strong>Belajar dan Berkembang di Dunia Web Development</strong>{' '}
            mahasiswa yang tertarik pada pengembangan website dan jaringan dengan terus meningkatkan kemampuan dalam Jaringan, IOT, HTML, CSS, dan JavaScript.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('proyek')}>
              Lihat Proyek ↓
            </button>
            <button className="btn-outline" onClick={() => scrollTo('kontak')}>
              Download CV
            </button>
          </div>

          <div className="hero-stats">
            {HERO_STATS.map(({ num, label }) => (
              <div key={label} className="stat-item">
                <span className="stat-num">{num}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: avatar */}
        <div className="hero-visual">
          <div className="avatar-wrap">
            <div className="avatar-ring"  />
            <div className="avatar-ring ring-2" />
            <div className="avatar-img">
              {
                <img src="Public/Fotoprofile.png" alt="Dhifa Barata Putra" />
              }
              <span className="avatar-initials"></span>
            </div>

            {/* Floating tech bubbles */}
            <div className="tech-bubble b1"><span>⚛️</span> React Native</div>
            <div className="tech-bubble b2"><span>🟢</span> Node.js</div>
            <div className="tech-bubble b3"><span>⚡</span> Next.js</div>
            <div className="tech-bubble b4"><span>📶</span> IoT</div>
          </div>
        </div>
      </div>
    </section>
  )
}
