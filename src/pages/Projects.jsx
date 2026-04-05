/* ============================================
   PAGE: Projects
   File: src/pages/Projects.jsx
   Deskripsi: Section proyek dengan filter kategori,
              project cards, dan mock preview (desktop/mobile)
   ============================================ */

import { useState } from 'react'
import { PROJECTS, PROJECT_FILTERS } from '../data/index.js'
import MockDesktop from '../components/MockDesktop.jsx'
import MockMobile  from '../components/MockMobile.jsx'
import './Projects.css'

function ProjectCard({ project }) {
  const { title, desc, tags, type, typeLabel, mockType, mockBg, mockContent,image, demo, code } = project

  return (
    <div className="project-card">
      {/* Preview area */}
          <div className="project-preview">
      {project.image
        ? <img src={project.image} alt={project.title} className="project-preview-img" />
        : project.mockType === 'desktop'
          ? <MockDesktop content={project.mockContent} />
          : <MockMobile  content={project.mockContent} bg={project.mockBg} />
      }
      <div className="project-overlay" />
      <span className={`project-badge ${project.type}`}>{project.typeLabel}</span>
    </div>

      {/* Card body */}
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>

        <div className="project-tags">
          {tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
        </div>

        <div className="project-links">
          {/* <a href={demo} className="project-link primary">Live Demo →</a> */}
          <a href={code} className="project-link secondary">GitHub ↗</a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('semua')

  const filtered = activeFilter === 'semua'
    ? PROJECTS
    : PROJECTS.filter((p) => p.type === activeFilter)

  return (
    <section id="proyek" className="section projects fade-in">
      <div className="section-tag">Proyek</div>
      <h2 className="section-title">
        Karya yang pernah<br />
        saya <span className="highlight">bangun</span>
      </h2>
      <p className="section-desc">
        Koleksi proyek terpilih — dari aplikasi skala kecil hingga platform
        yang sudah berjalan.
      </p>

      {/* Filter buttons */}
      <div className="projects-filter">
        {PROJECT_FILTERS.map(({ key, label }) => (
          <button
            key={key}
            className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
            onClick={() => setActiveFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
