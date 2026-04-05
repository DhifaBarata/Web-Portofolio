/* ============================================
   COMPONENT: Cursor
   File: src/components/Cursor.jsx
   Deskripsi: Custom animated cursor dengan ring follower
   ============================================ */

import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX - 5 + 'px'
        cursorRef.current.style.top  = mouseY - 5 + 'px'
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ringX - 18 + 'px'
        ringRef.current.style.top  = ringY - 18 + 'px'
      }
      requestAnimationFrame(animate)
    }

    // Hover effect: scale up on interactive elements
    const onEnter = () => {
      if (ringRef.current)   ringRef.current.style.transform   = 'scale(1.8)'
      if (cursorRef.current) cursorRef.current.style.transform = 'scale(0.5)'
    }
    const onLeave = () => {
      if (ringRef.current)   ringRef.current.style.transform   = 'scale(1)'
      if (cursorRef.current) cursorRef.current.style.transform = 'scale(1)'
    }

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    window.addEventListener('mousemove', onMove)
    animate()
    addHoverListeners()

    // Re-attach when DOM changes (filter buttons, etc.)
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef}   className="cursor-ring" />
    </>
  )
}
