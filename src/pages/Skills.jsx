/* ============================================
   PAGE: Skills
   File: src/pages/Skills.jsx
   Deskripsi: Section keahlian teknis dalam 4 kategori
   ============================================ */

import { SKILLS } from '../data/index.js'
import './Skills.css'

export default function Skills() {
  return (
    <div className="skills-bg">
      <section id="keahlian" className="section skills fade-in">
        <div className="section-tag">Keahlian</div>
        <h2 className="section-title">
          Stack yang saya<br />
          <span className="highlight">kuasai</span>
        </h2>
        <p className="section-desc">
          Dari frontend hingga backend, dari web hingga mobile — saya siap
          membantu proyek Anda dari awal hingga selesai.
        </p>

        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div key={s.title} className="skill-card">
              <div className="skill-card-icon">{s.icon}</div>
              <h3 className="skill-card-title">{s.title}</h3>
              <div className="skill-pill-list">
                {s.items.map((item) => (
                  <span key={item} className="skill-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
