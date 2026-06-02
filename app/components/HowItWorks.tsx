import { IMG } from '../images'

const steps = [
  {
    num: '01',
    title: 'Watch the Free Masterclass',
    body: 'Start with our free training that breaks down the exact Growth Made Simple process we\'ve used to help 600+ brands scale predictably. No fluff, no pitch — just the system.',
    cta: 'Watch Free →',
    href: '#masterclass',
  },
  {
    num: '02',
    title: 'Join the Bloom Program',
    body: 'Get instant access to all our training playbooks, weekly group coaching calls with in-house experts, and a community of founders scaling their stores the right way.',
    cta: 'Join Bloom →',
    href: '#bloom',
  },
  {
    num: '03',
    title: 'Implement & Scale',
    body: 'Follow your personalized growth path — watch the relevant playbooks, show up to calls, ask questions, and implement. Founders who do the work see real results.',
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
          <div className="eyebrow mb-4">The Process</div>
          <h2 className="h2 text-near-black mb-4">
            Ready to Profitably Scale<br />
            <span className="italic text-forest">Your Shopify Store?</span>
          </h2>
          <p className="body-lg text-gray-500">
            We've built the simplest, most effective and predictable process for growing Shopify stores.
            Here's how it works.
          </p>
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
                Shopify Analytics — Tag Aloha Co.
              </span>
            </div>
            <img src={IMG.shopify_dash} alt="Client Shopify results" className="w-full" />
          </div>
          <p className="body-sm text-center text-gray-400 mt-3">
            Tag Aloha Co. — $1,151,798 in sales, up 90% year over year.
          </p>
        </div>

      </div>
    </section>
  )
}
