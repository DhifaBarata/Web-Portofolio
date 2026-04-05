/* ============================================
   PAGE: Contact
   File: src/pages/Contact.jsx
   Deskripsi: Section kontak dengan form interaktif
              dan daftar link sosial/info
   ============================================ */

import { useState } from 'react'
import { CONTACT_LINKS } from '../data/index.js'
import './Contact.css'

function ContactForm() {
  const [form, setForm]   = useState({ name: '', email: '', subject: '', msg: '' })
  const [sent, setSent]   = useState(false)
  const [error, setError] = useState(false)

  const update = (key, val) => setForm((prev) => ({ ...prev, [key]: val }))

  const submit = () => {
    if (!form.name || !form.email || !form.msg) {
      setError(true)
      setTimeout(() => setError(false), 2500)
      return
    }
    setSent(true)
    setForm({ name: '', email: '', subject: '', msg: '' })
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <div className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="c-name">NAMA</label>
          <input
            id="c-name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Nama Anda"
          />
        </div>
        <div className="form-group">
          <label htmlFor="c-email">EMAIL</label>
          <input
            id="c-email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="email@anda.com"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="c-subject">SUBJEK</label>
        <input
          id="c-subject"
          value={form.subject}
          onChange={(e) => update('subject', e.target.value)}
          placeholder="Perihal pesan Anda"
        />
      </div>

      <div className="form-group">
        <label htmlFor="c-msg">PESAN</label>
        <textarea
          id="c-msg"
          value={form.msg}
          onChange={(e) => update('msg', e.target.value)}
          placeholder="Ceritakan proyek atau kebutuhan Anda..."
        />
      </div>

      {error && <p className="form-error">⚠️ Mohon isi nama, email, dan pesan.</p>}

      <button className="btn-primary submit-btn" onClick={submit}>
        {sent ? '✅ Pesan Terkirim!' : 'Kirim Pesan →'}
      </button>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="kontak" className="section contact fade-in">
      <div className="contact-grid">
        {/* Info side */}
        <div className="contact-info">
          <div className="section-tag">Kontak</div>
          <h2 className="contact-heading">
            Mari<br />
            <span className="highlight">berkolaborasi</span>
          </h2>
          <p className="contact-intro">
            Punya proyek menarik? Butuh developer handal untuk tim Anda?
            Atau sekadar ingin ngobrol soal teknologi — saya selalu terbuka!
          </p>

          <div className="contact-links">
            {CONTACT_LINKS.map(({ icon, label, value, href }) => (
              <a key={label} href={href} className="contact-link-item">
                <div className="contact-link-icon">{icon}</div>
                <div className="contact-link-text">
                  <span className="link-label">{label}</span>
                  <span className="link-value">{value}</span>
                </div>
                <span className="link-arrow">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Form side */}
        <ContactForm />
      </div>
    </section>
  )
}
