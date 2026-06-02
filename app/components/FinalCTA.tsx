import { IMG } from '../images'

export default function FinalCTA() {
  return (
    <section className="section" style={{ background: '#F8F4F0' }}>
      <div className="container max-w-4xl">
        <div className="card overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">

            {/* Left: founder photo */}
            <div className="relative overflow-hidden" style={{ minHeight: '380px' }}>
              <img
                src={IMG.robby_headshot}
                alt="Robby Switzer, Co-Founder of Shopanova"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to right, transparent 55%, white)'
              }} />
            </div>

            {/* Right: copy */}
            <div className="p-10 flex flex-col justify-center">
              <div className="eyebrow mb-4">Ready to Grow?</div>
              <h2 className="h2 text-near-black mb-4">
                Start With the<br />
                <span className="italic text-forest">Free Masterclass</span>
              </h2>
              <p className="body-md text-gray-500 mb-6">
                Watch our free training and see the exact process we use to turn Shopify stores into predictable, profitable growth engines. No pitch. No fluff. Just the system.
              </p>
              <div className="space-y-3">
                <a href="#masterclass" className="btn btn-forest btn-lg w-full justify-center">
                  Watch Free Masterclass →
                </a>
                <a href="#bloom" className="btn btn-outline w-full justify-center">
                  Join Bloom — Starting at $497/mo
                </a>
              </div>
              <p className="body-sm text-center text-gray-400 mt-4">
                60-day guarantee · 3-day grace period · Cancel anytime
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
