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
              <h2 className="h2 text-near-black mb-4">
                Ready to See It Work?
              </h2>
              <p className="body-md text-gray-500 mb-6">
                Start with the free masterclass. See the exact system, understand how it fits your store, and decide for yourself.
              </p>
              <div className="space-y-3">
                <a href="#masterclass" className="btn btn-forest btn-lg w-full justify-center">
                  Watch the Free Masterclass →
                </a>
                <a href="#bloom" className="btn btn-outline w-full justify-center">
                  Join Bloom — $497/mo
                </a>
              </div>
              <p className="body-sm text-center text-gray-400 mt-4">
                60-day guarantee · 3-day grace period · cancel anytime
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
