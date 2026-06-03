import { IMG } from '../images'

const stats = [
  { num: '$720M+', label: 'Store Sales Generated' },
  { num: '$100M+', label: 'Ad Spend Managed' },
  { num: '600+', label: 'Stores Grown' },
  { num: '11 Yrs', label: 'Proven & Refined' },
]

const pressLogos = [
  { src: IMG.yahoo_finance, alt: 'Yahoo Finance', h: 28 },
  { src: IMG.digital_journal, alt: 'Digital Journal', h: 22 },
  { src: IMG.entrepreneur, alt: 'Entrepreneur', h: 24 },
  { src: IMG.nbc, alt: 'NBC', h: 32 },
  { src: IMG.bloomberg, alt: 'Bloomberg', h: 22 },
]

export default function SocialProofBar() {
  return (
    <>
      {/* Stats row */}
      <section className="bg-near-black py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="stat-num mb-1" style={{ color: '#ffffff' }}>{s.num}</div>
                <div className="eyebrow" style={{ color: '#C9CBC3' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="bg-cream-dark py-8 border-y" style={{ borderColor: 'rgba(82,91,70,0.1)', background: '#EDE8E2' }}>
        <div className="container">
          <p className="eyebrow text-center mb-6" style={{ color: '#7B897C' }}>As Seen In</p>
          <div className="overflow-hidden">
            <div className="flex items-center gap-16 whitespace-nowrap marquee">
              {[...pressLogos, ...pressLogos].map((logo, i) => (
                <img key={i} src={logo.src} alt={logo.alt}
                  style={{ height: logo.h, opacity: 0.6, flexShrink: 0 }} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
