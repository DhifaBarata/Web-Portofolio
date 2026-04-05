/* ============================================
   COMPONENT: MockDesktop
   File: src/components/MockDesktop.jsx
   Deskripsi: SVG mock browser window untuk preview
              proyek web/desktop di project card
   ============================================ */

import './MockPreview.css'

/* --- Individual screen SVGs --- */
function EcommerceScreen() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="400" height="200" fill="#0a1628" />
      {/* Topbar */}
      <rect x="0" y="0" width="400" height="32" fill="#061020" />
      <rect x="8" y="8" width="60" height="16" rx="3" fill="#1a3a5c" opacity="0.8" />
      <rect x="80" y="10" width="200" height="12" rx="2" fill="#1a2a3c" opacity="0.6" />
      <rect x="350" y="8" width="40" height="16" rx="3" fill="#6ee7b7" opacity="0.9" />
      {/* Hero area */}
      <rect x="0" y="32" width="280" height="100" fill="#0d2040" />
      <rect x="12" y="48" width="100" height="12" rx="2" fill="#6ee7b7" opacity="0.8" />
      <rect x="12" y="66" width="140" height="8" rx="2" fill="#fff" opacity="0.7" />
      <rect x="12" y="78" width="120" height="6" rx="2" fill="#fff" opacity="0.4" />
      <rect x="12" y="92" width="60" height="20" rx="4" fill="#6ee7b7" />
      {/* Product cards */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={12 + i * 88} y={145} width={80} height={48} rx="4" fill="#0d2040" />
          <rect x={16 + i * 88} y={149} width={72} height={28} rx="2" fill={['#1a3a5c', '#1a2a4c', '#0d3050'][i]} />
          <rect x={16 + i * 88} y={182} width={50} height={5} rx="1" fill="#fff" opacity="0.5" />
          <rect x={16 + i * 88} y={190} width={30} height={4} rx="1" fill="#6ee7b7" opacity="0.7" />
        </g>
      ))}
      {/* Sidebar */}
      <rect x="280" y="32" width="120" height="100" fill="#0a1e36" />
      <rect x="290" y="42" width="60" height="6" rx="1" fill="#6ee7b7" opacity="0.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={290} y={54 + i * 12} width={[80, 60, 70, 50, 65][i]} height={4} rx="1" fill="#fff" opacity={0.25} />
      ))}
      <rect x="290" y="116" width="80" height="10" rx="2" fill="#38bdf8" opacity="0.7" />
    </svg>
  )
}

function DashboardScreen() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="400" height="200" fill="#0a2818" />
      {/* Sidebar */}
      <rect x="0" y="0" width="70" height="200" fill="#061a10" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={12} y={20 + i * 28} width={46} height={20} rx="4"
          fill={i === 0 ? '#6ee7b7' : '#0a2818'} opacity={i === 0 ? 0.9 : 0.5} />
      ))}
      {/* KPI cards */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={80 + i * 80} y={14} width={72} height={38} rx="4" fill="#0d3020" />
          <rect x={88 + i * 80} y={20} width={30} height={4} rx="1" fill="#6ee7b7" opacity="0.5" />
          <rect x={88 + i * 80} y={28} width={50} height={12} rx="2" fill="#fff" opacity="0.8" />
          <rect x={88 + i * 80} y={44} width={25} height={3} rx="1"
            fill={['#6ee7b7', '#38bdf8', '#f472b6', '#facc15'][i]} opacity="0.7" />
        </g>
      ))}
      {/* Bar chart */}
      <rect x="80" y="60" width="190" height="120" rx="4" fill="#0d3020" />
      <rect x="90" y="68" width="60" height="6" rx="1" fill="#fff" opacity="0.6" />
      {[40, 55, 35, 70, 50, 80, 45, 65, 55, 75].map((h, i) => (
        <rect key={i} x={95 + i * 17} y={175 - h} width={12} height={h}
          rx="2" fill="#6ee7b7" opacity={0.5 + i * 0.04} />
      ))}
      {/* Donut chart */}
      <rect x="280" y="60" width="100" height="120" rx="4" fill="#0d3020" />
      <circle cx="330" cy="120" r="35" fill="none" stroke="#6ee7b7" strokeWidth="20"
        strokeDasharray="88 132" transform="rotate(-90 330 120)" />
      <circle cx="330" cy="120" r="35" fill="none" stroke="#38bdf8" strokeWidth="20"
        strokeDasharray="44 176" strokeDashoffset="-88" transform="rotate(-90 330 120)" />
      <circle cx="330" cy="120" r="35" fill="none" stroke="#f472b6" strokeWidth="20"
        strokeDasharray="48 132" strokeDashoffset="-132" transform="rotate(-90 330 120)" />
    </svg>
  )
}

function CmsScreen() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="400" height="200" fill="#1a1208" />
      <rect x="0" y="0" width="400" height="36" fill="#100d04" />
      <rect x="12" y="10" width="80" height="16" rx="3" fill="#2a2010" />
      <rect x="300" y="10" width="40" height="16" rx="3" fill="#facc15" opacity="0.8" />
      <rect x="346" y="10" width="40" height="16" rx="3" fill="#f472b6" opacity="0.5" />
      {/* Editor pane */}
      <rect x="0" y="36" width="260" height="164" fill="#120f06" />
      {/* Title highlight */}
      <rect x="12" y="50" width="200" height="10" rx="2" fill="#facc15" opacity="0.6" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={12} y={68 + i * 14} width={[180, 220, 140, 200, 160, 220, 100, 180][i]}
          height={5} rx="1" fill="#fff" opacity="0.2" />
      ))}
      {/* Preview pane */}
      <rect x="265" y="36" width="135" height="164" fill="#0a0804" />
      <rect x="272" y="44" width="120" height="60" rx="3" fill="#1a1208" />
      <rect x="278" y="50" width="80" height="8" rx="2" fill="#facc15" opacity="0.7" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={278} y={65 + i * 10} width={[100, 80, 90, 60][i]}
          height={4} rx="1" fill="#fff" opacity="0.25" />
      ))}
      <rect x="272" y="112" width="120" height="40" rx="3" fill="#1a1208" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={278} y={118 + i * 11} width={[90, 100, 70][i]}
          height={5} rx="1" fill="#fff" opacity="0.2" />
      ))}
    </svg>
  )
}

/* Registry maps content key → screen component */
const SCREENS = {
  ecommerce: EcommerceScreen,
  dashboard:  DashboardScreen,
  cms:        CmsScreen,
}

export default function MockDesktop({ content }) {
  const Screen = SCREENS[content] || EcommerceScreen

  return (
    <div className="mock-desktop">
      {/* Chrome titlebar */}
      <div className="mock-titlebar">
        <div className="mock-dot red"   />
        <div className="mock-dot yellow"/>
        <div className="mock-dot green" />
        <div className="mock-urlbar" />
      </div>
      {/* Screen content */}
      <div className="mock-screen">
        <Screen />
      </div>
    </div>
  )
}
