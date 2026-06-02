const coreIncludes = [
  'Full access to all training playbooks — Meta Ads, Email, Shopify, Branding, Google Ads, Content & more',
  'Weekly Implementation Call — live Q&A with in-house experts across ads, email, website, and content',
  'Weekly Strategic Support Call — workshops, trainings, and big-picture growth topics',
  'Community of 600+ Shopify founders sharing wins, tools, and strategies',
  'Tools library — templates, worksheets, swipe files, and calculators built from real client work',
  'New resources added regularly, pulled directly from our coaching sessions',
]

const proIncludes = [
  'Everything in Bloom',
  'Monthly 1-on-1 coaching call with a dedicated Shopanova growth coach',
  'Custom growth roadmap built for your specific store in week one',
  'Priority async DM access to your coach between calls',
  'Quarterly account audit and roadmap refresh',
]

const guarantees = [
  {
    icon: '3',
    label: 'Day Grace Period',
    desc: 'Cancel for any reason within your first 3 days and receive a full refund — no questions asked.',
  },
  {
    icon: '60',
    label: 'Day Guarantee',
    desc: 'Do the work — attend 4 calls and complete your action steps. If you still don\'t see results, we\'ll refund you in full.',
  },
  {
    icon: '⏸',
    label: 'Hardship Pause',
    desc: 'Family emergency or medical hardship? Pause your membership for up to 3 months. Life happens — we\'ve got you.',
  },
]

export default function BloomSection() {
  return (
    <section id="bloom" className="section bg-white">
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="eyebrow mb-4">The Program</div>
          <h2 className="h2 text-near-black mb-4">
            Introducing the{' '}
            <span className="italic text-forest">Bloom Program</span>
          </h2>
          <p className="body-lg text-gray-500">
            The exact playbooks, expert coaching calls, and founder community you need to grow your Shopify store predictably — on your own terms, at your own pace.
          </p>
        </div>

        {/* Two tiers */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">

          {/* Core */}
          <div className="card p-8 reveal">
            <div className="eyebrow mb-3">Most Popular</div>
            <h3 className="h3 text-near-black mb-2">Bloom</h3>
            <p className="body-sm text-gray-500 mb-4">
              Self-directed. Expert-supported. Community-powered. For founders doing $5k–$50k/month who are ready to learn and implement the right system.
            </p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="h2 text-near-black" style={{ fontFamily: 'var(--font-display)' }}>$497</span>
              <span className="body-md text-gray-400">/month</span>
            </div>
            <p className="body-sm text-gray-400 mb-6">Or $3,997/year — save $967</p>
            <div className="rule mb-6" />
            <ul className="space-y-3 mb-8">
              {coreIncludes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(82,91,70,0.12)' }}>
                    <span style={{ fontSize: '9px', color: '#525B46', fontWeight: 700 }}>✓</span>
                  </span>
                  <span className="body-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://shopanova.co/join" className="btn btn-forest w-full justify-center">
              Join Bloom — $497/mo →
            </a>
            <p className="body-sm text-center text-gray-400 mt-3">3-day grace period · 60-day guarantee</p>
          </div>

          {/* Pro */}
          <div className="card p-8 reveal" style={{ background: '#1B231B', borderColor: 'transparent', transitionDelay: '0.1s' }}>
            <div className="eyebrow mb-3" style={{ color: '#C9CBC3' }}>For Faster Results</div>
            <h3 className="h3 mb-2" style={{ color: 'white', fontFamily: 'var(--font-display)' }}>Bloom Pro</h3>
            <p className="body-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Everything in Core, plus a dedicated coach who builds your custom roadmap and meets with you monthly. For founders doing $30k–$100k/month who want personalized direction.
            </p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="h2" style={{ color: 'white', fontFamily: 'var(--font-display)' }}>$1,500</span>
              <span className="body-md" style={{ color: 'rgba(255,255,255,0.35)' }}>/month</span>
            </div>
            <p className="body-sm mb-6" style={{ color: 'rgba(255,255,255,0.3)' }}>Or $12,000/year — save $6,000</p>
            <div className="mb-6" style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
            <ul className="space-y-3 mb-8">
              {proIncludes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(82,91,70,0.5)' }}>
                    <span style={{ fontSize: '9px', color: '#C9CBC3', fontWeight: 700 }}>✓</span>
                  </span>
                  <span className="body-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://shopanova.co/join-pro" className="btn btn-white w-full justify-center">
              Apply for Bloom Pro →
            </a>
            <p className="body-sm text-center mt-3" style={{ color: 'rgba(255,255,255,0.25)' }}>Limited spots available · 3-day grace period</p>
          </div>

        </div>

        {/* Guarantees */}
        <div className="reveal">
          <div className="text-center mb-8">
            <div className="eyebrow" style={{ color: '#7B897C' }}>Risk-Free — We Mean It</div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {guarantees.map((g, i) => (
              <div key={i} className="text-center p-7 rounded-xl"
                style={{ background: 'rgba(82,91,70,0.04)', border: '1px solid rgba(82,91,70,0.1)' }}>
                <div className="mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: '#525B46', lineHeight: 1 }}>
                  {g.icon}
                </div>
                <div className="eyebrow mb-3" style={{ color: '#7B897C' }}>{g.label}</div>
                <p className="body-sm text-gray-500">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
