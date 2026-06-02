import Link from 'next/link'

export default function ResourcesTeaser() {
  return (
    <section className="section-sm" style={{ background: '#525B46' }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow mb-3" style={{ color: '#C9CBC3' }}>Free Resources</div>
            <h2 className="h2 mb-4" style={{ color: 'white', fontFamily: 'var(--font-display)' }}>
              Not Ready to Join Yet?<br />Start Here — For Free.
            </h2>
            <p className="body-lg mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Every resource we publish is pulled directly from the frameworks and playbooks we use with real clients. Grab one, implement it, and see what the Bloom system feels like before you commit to anything.
            </p>
            <Link href="/resources" className="btn btn-white">
              Browse All Free Resources →
            </Link>
          </div>
          <div className="grid gap-3">
            {[
              {
                title: '21 Ad Angles That Generated $720M+',
                tag: 'Ad Creative',
                desc: 'The exact static ad frameworks we use across 600+ brands.',
                href: '/resources/21-ad-angles',
              },
              {
                title: 'More free resources coming soon',
                tag: 'Coming Soon',
                desc: 'We publish new tools and frameworks regularly.',
                href: '/resources',
              },
            ].map((r, i) => (
              <Link key={i} href={r.href}
                className="flex items-start justify-between p-4 rounded-xl group transition-all gap-4"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="flex-1">
                  <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9CBC3', marginBottom: '3px' }}>{r.tag}</div>
                  <div className="body-sm font-semibold mb-1" style={{ color: 'white' }}>{r.title}</div>
                  <div className="body-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{r.desc}</div>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0 }} className="group-hover:translate-x-1 transition-transform mt-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
