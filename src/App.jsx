import { useState, useEffect } from 'react'
import Cursor  from './components/Cursor.jsx'
import Navbar  from './components/Navbar.jsx'
import Footer  from './components/Footer.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'  // ← tambah import ini
import Hero       from './pages/Hero.jsx'
import About      from './pages/About.jsx'
import Skills     from './pages/Skills.jsx'
import Projects   from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Contact    from './pages/Contact.jsx'

const SECTIONS = ['beranda', 'tentang', 'keahlian', 'proyek', 'pengalaman', 'kontak']

export default function App() {
  const [activeSection, setActiveSection] = useState('beranda')
  const [loading, setLoading] = useState(true)  // ← tambah state ini

  useEffect(() => {
    if (loading) return  // ← jangan jalankan observer saat loading
    const sectionEls = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean)
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.25 }
    )
    sectionEls.forEach((el) => sectionObserver.observe(el))

    const fadeEls = document.querySelectorAll('.fade-in')
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    fadeEls.forEach((el) => fadeObserver.observe(el))

    return () => {
      sectionObserver.disconnect()
      fadeObserver.disconnect()
    }
  }, [loading])  // ← tambah loading sebagai dependency

  // Tampilkan loading screen dulu
  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />
  }

  return (
    <>
      <Cursor />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}