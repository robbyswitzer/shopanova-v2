import { IMG } from '../images'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-28 pb-0 md:pt-36">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #525B46 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container relative pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Copy */}
          <div>
            <div className="eyebrow mb-5 fade-up">THE GROWTH MADE SIMPLE SYSTEM</div>

            <h1 className="h1 text-near-black mb-6 fade-up delay-1">
              Finally: A Proven Way to Make Your Shopify Store{' '}
              <span className="italic text-forest">Actually Work.</span>
            </h1>

            <p className="body-lg text-gray-600 mb-8 fade-up delay-2">
              Stop guessing. Stop piecing together tactics that don't add up. Get the exact system behind $720M in sales and 600+ stores, plus the help to install it into your own. So you're in control, and it's finally working.
            </p>

            <div className="flex flex-wrap gap-3 mb-10 fade-up delay-3">
              <a href="#masterclass" className="btn btn-forest btn-lg">
                Watch the Free Masterclass →
              </a>
              <a href="#how-it-works" className="btn btn-outline btn-lg">
                See How It Works
              </a>
            </div>

            {/* Social proof micro */}
            <div className="flex items-center gap-4 fade-up delay-4">
              <div className="flex -space-x-2">
                {[IMG.aj_tag_aloha, IMG.allison_williams, IMG.jessica_rey].map((src, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {'★★★★★'.split('').map((s, i) => <span key={i} className="text-amber-400 text-sm">{s}</span>)}
                </div>
                <p className="body-sm text-gray-500">Trusted by 600+ Shopify founders</p>
              </div>
            </div>
          </div>

          {/* Right: Family photo + floating stats */}
          <div className="relative fade-up delay-2">
            <div className="relative">
              <img
                src="/photos/dan-robby-homepage-hero.jpg"
                alt="Robby and Daniel, co-founders of Shopanova"
                className="w-full rounded-2xl object-cover shadow-xl"
                style={{ maxHeight: '520px', objectPosition: 'center top' }}
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3"
                style={{ border: '1px solid rgba(82,91,70,0.1)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ background: 'rgba(82,91,70,0.1)', color: '#525B46' }}>↑</div>
                <div>
                  <div className="font-semibold text-sm leading-tight" style={{ color: '#1B231B' }}>145% avg. growth</div>
                  <div className="text-xs text-gray-400">Students in first 90 days</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 rounded-xl px-4 py-2.5 shadow-lg"
                style={{ background: '#525B46', color: 'white' }}>
                <div className="text-xs font-semibold mb-0.5" style={{ opacity: 0.8 }}>Client Revenue</div>
                <div className="font-bold text-xl leading-tight">$720M+</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Masterclass section anchored directly below hero */}
      <div id="masterclass" className="bg-near-black py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="eyebrow mb-3" style={{ color: '#C9CBC3' }}>FREE TRAINING</div>
              <h2 className="h2 mb-3" style={{ color: 'white', fontFamily: 'var(--font-display)' }}>
                See the System That's Built $720M in Store Sales
              </h2>
              <p className="body-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
                In this free masterclass, we break down the exact Growth Made Simple System: the same one we've validated across $100M in ad spend and 600+ Shopify stores over 11 years. No theory. No hype. Just the system that works.
              </p>
            </div>

            {/* Wistia embed */}
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: '#000' }}>
              <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                  <iframe
                    src="https://fast.wistia.net/embed/iframe/i6fg61bh0e?web_component=true&seo=false"
                    title="Shopanova Free Masterclass"
                    allow="autoplay; fullscreen"
                    allowTransparency={true}
                    frameBorder={0}
                    scrolling="no"
                    className="wistia_embed"
                    name="wistia_embed"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
            <script src="https://fast.wistia.net/player.js" async />

            {/* CTA below video */}
            <div className="text-center mt-8">
              <a href="#bloom" className="btn btn-white btn-lg">
                Join Bloom After Watching →
              </a>
              <p className="body-sm mt-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                $497/month · 60-day guarantee · cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
