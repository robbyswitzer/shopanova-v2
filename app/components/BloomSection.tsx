const coreIncludes = [
  'Every Growth Made Simple playbook: Meta, Email, Shopify, Branding, Google Ads, Content & more',
  'Weekly Implementation Call: live Q&A with our in-house experts',
  'Weekly Strategic Support Call: workshops and big-picture growth training',
  'Community of 600+ founders building alongside you',
  'Full tools library: templates, swipe files, calculators',
  'New resources added continuously from real client work',
]

const proIncludes = [
  'Everything in Bloom',
  'Monthly 1-on-1 coaching with a dedicated growth coach',
  'A custom growth roadmap built for your store in week one',
  'Direct access to message your coach between calls',
  'Quarterly account audit and roadmap refresh',
]

const guarantees = [
  {
    icon: '3',
    label: 'Day Grace Period',
    desc: 'Cancel for any reason within your first 3 days and receive a full refund. No questions asked.',
  },
  {
    icon: '60',
    label: 'Day Guarantee',
    desc: 'Do the work: attend 4 calls and complete your action steps. If you still don\'t see results, we\'ll refund you in full.',
  },
  {
    icon: '⏸',
    label: 'Hardship Pause',
    desc: 'Family emergency or medical hardship? Pause your membership for up to 3 months. Life happens. We\'ve got you.',
  },
]

export default function BloomSection() {
  return (
    <section id="bloom" className="section bg-white">
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="eyebrow mb-4">THE PROGRAM</div>
          <h2 className="h2 text-near-black mb-4">
            Everything You Need to Install the System
          </h2>
          <p className="body-lg text-gray-500">
            The complete Growth Made Simple System, the experts to help you implement it, and a community of founders building right alongside you. For a fraction of what you've spent on things that didn't work.
          </p>
        </div>

        {/* Two tiers */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">

          {/* Core */}
          <div className="card p-8 reveal">
            <div className="eyebrow mb-3">Most Popular</div>
            <h3 className="h3 text-near-black mb-2">Bloom</h3>
            <p className="body-sm text-gray-500 mb-4">
              The full system, self-directed with expert support. For founders ready to learn it and build it.
            </p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="h2 text-near-black" style={{ fontFamily: 'var(--font-display)' }}>$497</span>
              <span className="body-md text-gray-400">/month</span>
            </div>
            <p className="body-sm text-gray-400 mb-6">Or $4,970/year (2 months free)</p>
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
              Join Bloom · $497/mo →
            </a>
            <p className="body-sm text-center text-gray-400 mt-2">
              Not sure if it's the right fit?{' '}
              <a href="/talk" className="underline hover:text-forest-dk transition-colors">Talk to our team →</a>
            </p>
            <p className="body-sm text-center text-gray-400 mt-3">3-day grace period · 60-day guarantee</p>
          </div>

          {/* Pro */}
          <div className="card p-8 reveal" style={{ background: '#1B231B', borderColor: 'transparent', transitionDelay: '0.1s' }}>
            <div className="eyebrow mb-3" style={{ color: '#C9CBC3' }}>For Faster Results</div>
            <h3 className="h3 mb-2" style={{ color: 'white', fontFamily: 'var(--font-display)' }}>Bloom Pro</h3>
            <p className="body-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Everything in Bloom, plus a dedicated coach to build and guide your plan. For founders who want a personal expert in their corner.
            </p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="h2" style={{ color: 'white', fontFamily: 'var(--font-display)' }}>$1,500</span>
              <span className="body-md" style={{ color: 'rgba(255,255,255,0.35)' }}>/month</span>
            </div>
            <p className="body-sm mb-6" style={{ color: 'rgba(255,255,255,0.3)' }}>Or $15,000/year (2 months free)</p>
            <div className="mb-6" style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
            <ul className="space-y-3 mb-5">
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
            {/* Annual bonus callout */}
            <div className="mb-6 px-4 py-3 rounded-xl" style={{ background: 'rgba(201,203,195,0.12)', border: '1px solid rgba(201,203,195,0.25)' }}>
              <div className="eyebrow mb-1" style={{ color: '#C9CBC3', fontSize: '0.6rem' }}>ANNUAL PLAN BONUS</div>
              <p className="body-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Pay annually and get up to 10 hours of done-with-you implementation services included.
              </p>
            </div>
            <a href="https://shopanova.co/join-pro" className="btn btn-white w-full justify-center">
              Apply for Bloom Pro →
            </a>
            <p className="body-sm text-center mt-3" style={{ color: 'rgba(255,255,255,0.25)' }}>Limited spots · 3-day grace period</p>
          </div>

        </div>

        {/* Affordability line */}
        <p className="text-center body-md text-gray-500 mb-14">
          For less than the cost of a single freelancer project, you get the entire system plus the experts to help you install it.
        </p>

        {/* Guarantees */}
        <div className="reveal">
          <div className="text-center mb-8">
            <div className="eyebrow" style={{ color: '#7B897C' }}>RISK-FREE. WE MEAN IT.</div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {guarantees.map((g, i) => (
              <div key={i} className="text-center p-7 rounded-xl"
                style={{ background: 'rgba(82,91,70,0.04)', border: '1px solid rgba(82,91,70,0.1)' }}>
                <div className="mb-2" style={{
                  fontFamily: g.icon === '⏸' ? 'initial' : 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: g.icon === '⏸' ? 400 : 700,
                  color: '#525B46',
                  lineHeight: 1,
                }}>
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
