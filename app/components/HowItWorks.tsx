import { IMG } from '../images'

const steps = [
  {
    num: '01',
    title: 'Watch the Free Masterclass',
    body: "See the Growth Made Simple System in action and understand exactly how it applies to your store. No cost, no pitch. Just the framework.",
    cta: 'Watch Free →',
    href: '#masterclass',
  },
  {
    num: '02',
    title: 'Join Bloom',
    body: "Get the full system: every playbook, two weekly expert coaching calls, the community, and the tools, all for $497/month. Start implementing immediately.",
    cta: 'Join Bloom →',
    href: '#bloom',
  },
  {
    num: '03',
    title: 'Install It & Take Control',
    body: "Follow your path, get expert help when you're stuck, and watch your store start producing. You're the one driving now, and it's finally working.",
    cta: 'See Results →',
    href: '#results',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" style={{ background: '#F8F4F0' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="eyebrow mb-4">HOW IT WORKS</div>
          <h2 className="h2 text-near-black mb-4">
            Your Path to a Store That Works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="card p-8 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="step-num mb-4">{step.num}</div>
              <div className="rule mb-5" />
              <h3 className="h4 text-near-black mb-3">{step.title}</h3>
              <p className="body-sm text-gray-500 mb-5">{step.body}</p>
              <a href={step.href} className="eyebrow hover:text-forest-dk transition-colors" style={{ color: '#525B46' }}>
                {step.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Shopify dashboard proof */}
        <div className="reveal">
          <div className="card overflow-hidden shadow-lg">
            <div className="bg-near-black px-6 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="eyebrow text-sage ml-2" style={{ color: '#7B897C', letterSpacing: '0.1em', fontSize: '10px' }}>
                Shopify Analytics · Tag Aloha Co.
              </span>
            </div>
            <img src={IMG.shopify_dash} alt="Client Shopify results" className="w-full" />
          </div>
          <p className="body-sm text-center text-gray-400 mt-3">
            Tag Aloha Co.: $1,151,798 in sales, up 90% year over year.
          </p>
        </div>

      </div>
    </section>
  )
}
