/* ============================================
   COMPONENT: MockMobile
   File: src/components/MockMobile.jsx
   Deskripsi: SVG mock Android phone untuk preview
              proyek mobile di project card
   ============================================ */

import './MockPreview.css'

const MOBILE_CONFIGS = {
  fitness: {
    bg:    'linear-gradient(160deg, #6ee7b722, #38bdf822)',
    accent: '#6ee7b7',
    icon:  'P',
    title: 'FitTrack',
    bars:  ['#6ee7b7', '#38bdf8', '#6ee7b7'],
  },
  finpay: {
    bg:    'linear-gradient(160deg, #a78bfa22, #f472b622)',
    accent: '#a78bfa',
    icon:  '💳',
    title: 'FinPay',
    bars:  ['#a78bfa', '#f472b6', '#a78bfa'],
  },
  foodorder: {
    bg:    'linear-gradient(160deg, #fb923c22, #f472b622)',
    accent: '#fb923c',
    icon:  '🍔',
    title: 'FoodGo',
    bars:  ['#fb923c', '#f472b6', '#fb923c'],
  },
}

function PhoneScreen({ config }) {
  return (
    <div className="phone-screen" style={{ background: config.bg }}>
      <div className="phone-icon">{config.icon}</div>
      <div className="phone-title" style={{ color: config.accent }}>{config.title}</div>
      <div className="phone-bars">
        {config.bars.map((color, i) => (
          <div key={i} className="phone-bar" style={{ background: color, opacity: 0.3 + i * 0.15 }} />
        ))}
      </div>
      <div className="phone-cta" style={{ background: config.accent }} />
    </div>
  )
}

export default function MockMobile({ content, bg }) {
  const config = MOBILE_CONFIGS[content] || MOBILE_CONFIGS.fitness

  return (
    <div className="mock-mobile" style={{ background: `linear-gradient(135deg, ${bg}, #0a0a14)` }}>
      {/* Back phone (slightly rotated) */}
      <div className="mock-phone" style={{ transform: 'scale(0.88) rotate(-6deg)', opacity: 0.65 }}>
        <div className="phone-notch" />
        <PhoneScreen config={config} />
      </div>
      {/* Front phone */}
      <div className="mock-phone" style={{ transform: 'rotate(4deg)' }}>
        <div className="phone-notch" />
        <PhoneScreen config={config} />
      </div>
    </div>
  )
}
