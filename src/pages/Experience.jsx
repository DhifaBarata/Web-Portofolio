/* ============================================
   PAGE: Experience
   File: src/pages/Experience.jsx
   Deskripsi: Section pengalaman kerja dengan
              vertical timeline animasi
   ============================================ */

import { EXPERIENCE } from '../data/index.js'
import './Experience.css'

function TimelineItem({ item, index }) {
  return (
    <div className="timeline-item fade-in" style={{ animationDelay: `${index * 0.12}s` }}>
      <div className="timeline-dot" />
      <span className="timeline-period">{item.period}</span>
      <h3 className="timeline-title">{item.title}</h3>
      <p className="timeline-company">{item.company}</p>
      <p className="timeline-desc">{item.desc}</p>
      <div className="timeline-techs">
        {item.techs.map((t) => (
          <span key={t} className="timeline-tech">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <div className="experience-bg">
      <section id="pengalaman" className="section experience fade-in">
        <div className="section-tag">Pengalaman</div>
        <h2 className="section-title">
          Perjalanan<br />
          karier saya
        </h2>
        <p className="section-desc">
          Dari junior developer hingga memimpin tim — inilah cerita profesional saya.
        </p>

        <div className="timeline">
          {EXPERIENCE.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
