/* ============================================
   PAGE: About
   File: src/pages/About.jsx
   Deskripsi: Section tentang diri, soft skills,
              dan about cards
   ============================================ */

import { ABOUT_CARDS, SOFT_SKILLS } from '../data/index.js'
import './About.css'

export default function About() {
  return (
    <section id="tentang" className="section about fade-in">
      <div className="section-tag">Tentang Saya</div>
      <h5 className="section-title">
        Belajar dari kelas,{" "}
        <span className="highlight">berkembang</span>
        <br />
        lewat pengalaman nyata
      </h5>
 
      <div className="about-grid">
        {/* Left: bio text */}
        <div className="about-text">
          <p>
            Saya adalah mahasiswa <strong>Pendidikan Teknologi Informasi di UNESA</strong>{" "}
            dengan latar belakang vokasional dari SMKS Al-Huda Kota Kediri jurusan TKJ.
            Perjalanan saya di dunia teknologi dimulai dari bangku SMK — belajar jaringan,
            hardware, dan pemrograman dasar hingga terjun langsung ke industri.
          </p>
          <p>
            Saya mengikuti program <strong>Samsung Innovation Campus (SIC)</strong> di bidang
            IoT & Networking, menjalani magang sebagai teknisi di Samsung Service Center,
            dan meraih dua sertifikasi resmi dari program tersebut. Saya percaya bahwa{" "}
            <strong>pengalaman lapangan adalah guru terbaik.</strong>
          </p>
          <p>
            Di luar akademik, saya aktif di organisasi himpunan sebagai{" "}
            <strong>Ketua Departemen Ekonomi Kreatif</strong> — memimpin tim dan
            menjalankan 3 proyek ekraf yang sudah berjalan. Saya menikmati membangun
            sesuatu yang nyata, baik itu sistem, jaringan, maupun komunitas.
          </p>
 
          <div className="about-skills">
            {SOFT_SKILLS.map((s) => (
              <span key={s} className="skill-tag">
                {s}
              </span>
            ))}
          </div>
        </div>
 
        {/* Right: cards */}
        <div className="about-cards">
          {ABOUT_CARDS.map((card) => (
            <div key={card.title} className="about-card">
              <div className="about-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
