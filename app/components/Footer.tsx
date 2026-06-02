import Link from 'next/link'
import { IMG } from '../images'

export default function Footer() {
  return (
    <footer style={{ background: '#1B231B' }}>
      <div className="container py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <img src={IMG.logo_white} alt="Shopanova" style={{ height: '20px', marginBottom: '16px' }} />
            <p className="body-sm mb-4" style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '280px' }}>
              Helping Shopify founders scale their stores, reclaim their time, and build lasting wealth — since 2014.
            </p>
            <p className="body-sm mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Homer, Alaska</p>
            <p className="body-sm font-semibold" style={{ color: '#7B897C' }}>$720M+ in client revenue generated.</p>
          </div>
          <div>
            <p className="eyebrow mb-5" style={{ color: '#7B897C' }}>Program</p>
            <ul className="space-y-3">
              {[
                ['How It Works', '#how-it-works'],
                ['Bloom', '#bloom'],
                ['Bloom Pro', '#bloom'],
                ['Client Results', '#results'],
                ['About Us', '#about'],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="body-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.35)' }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5" style={{ color: '#7B897C' }}>Free Resources</p>
            <ul className="space-y-3">
              {[
                ['Free Masterclass', '#masterclass'],
                ['21 Ad Angles Guide', '/resources/21-ad-angles'],
                ['All Resources', '/resources'],
              ].map(([l, h]) => (
                <li key={l}>
                  <Link href={h} className="body-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.35)' }}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t pt-10 mt-4 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <p className="body-sm" style={{ color: 'rgba(255,255,255,0.2)' }}>© 2025 Shopanova. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Earnings Disclaimer'].map(l => (
              <a key={l} href="#" className="body-sm" style={{ color: 'rgba(255,255,255,0.2)' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
