import { useEffect, useState } from 'react'
import './LoadingScreen.css'

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Animasi progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Tunggu sebentar lalu fade out
          setTimeout(() => {
            setFadeOut(true)
            setTimeout(onFinish, 600)
          }, 300)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      {/* Background orbs */}
      <div className="loading-orb orb-1" />
      <div className="loading-orb orb-2" />

      {/* Logo */}
      <div className="loading-logo">
        Dhifa Barata Putra<span>.</span>
      </div>

      {/* Teks animasi */}
      <p className="loading-text">Mempersiapkan portfolio...</p>

      {/* Progress bar */}
      <div className="loading-bar-wrap">
        <div className="loading-bar" style={{ width: `${progress}%` }} />
      </div>

      {/* Angka persen */}
      <span className="loading-percent">{progress}%</span>
    </div>
  )
}