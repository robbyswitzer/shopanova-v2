import { IMG } from '../images'

const testimonials = [
  {
    quote: "Honestly, when I saw Shopanova ads 6-7 months ago I was already burned by a few agencies and was hesitant to reach out once again for help. Something about the genuine way Robby came across on those first videos I saw really made the difference.",
    name: 'AJ White',
    brand: 'Tag Aloha Co.',
    img: IMG.aj_tag_aloha,
    result: '$1.15M in sales · up 90%',
    stars: 5,
  },
  {
    quote: "We just have a million good things we could say about them. We've grown almost 10 times what we were when we started. The systems they built changed everything for our business.",
    name: 'Vera & Natalie',
    brand: 'Dwell Differently',
    img: IMG.dwell_differently,
    result: '10x revenue growth',
    stars: 5,
  },
  {
    quote: "We have been working with Shopanova since about 2018. Right off the bat we were seeing up to 8x ROAS, averaging 5.5x in our peak swimsuit season. Before them we had no idea what we were doing.",
    name: 'Jessica Rey',
    brand: 'jessicarey.com',
    img: IMG.jessica_rey,
    result: '5.5x avg ROAS · peak season',
    stars: 5,
  },
]

const clientLogos = [
  { src: IMG.tag_aloha_logo, alt: 'Tag Aloha Co.' },
  { src: IMG.old_saguaro_logo, alt: 'Old Saguaro Woodcraft' },
  { src: IMG.deen_fuel_logo, alt: 'DeenFuel' },
  { src: IMG.guaraxez_logo, alt: 'Guaraxez' },
  { src: IMG.pastabilities_logo, alt: 'Pastabilities' },
]

export default function Results() {
  return (
    <section id="results" className="section" style={{ background: '#F8F4F0' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14 reveal">
          <div className="eyebrow mb-4">REAL FOUNDERS, REAL TRACTION</div>
          <h2 className="h2 text-near-black mb-4">
            This Is What "Finally Working" Looks Like
          </h2>
          <p className="body-md text-gray-500">
            Not vanity metrics. Real stores, real founders, real momentum. Including the ones who got so dialed in they shipped more orders than they ever imagined.
          </p>
        </div>

        {/* Visual proof gallery */}
        <div className="mb-14 reveal">
          <div className="flex flex-col md:grid md:grid-cols-[3fr_2fr] md:items-center gap-3">
            {/* Landscape: featured prominently */}
            <div
              className="rounded-2xl overflow-hidden shadow-md"
              style={{ border: '1px solid rgba(82,91,70,0.1)' }}
            >
              <img
                src="/wins/win-comments.jpg"
                alt="A customer sharing their store momentum on social media"
                className="w-full block object-cover object-center aspect-[3/2]"
              />
            </div>
            {/* 2x2 portrait thumbnails */}
            <div className="grid grid-cols-2 gap-3">
              {['win-packages-1', 'win-packages-2', 'win-packages-3', 'win-packages-4'].map((name, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden shadow-md"
                  style={{ border: '1px solid rgba(82,91,70,0.1)' }}
                >
                  <img
                    src={`/wins/${name}.jpg`}
                    alt="Customer orders piling up"
                    className="w-full block object-cover object-center aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="body-sm text-center text-gray-400 mt-4">
            Real founders. Real orders. Real traction.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-7 flex flex-col reveal" style={{ transitionDelay: `${i*0.1}s` }}>
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {'★★★★★'.split('').map((s, j) => (
                  <span key={j} className="text-amber-400 text-sm">{s}</span>
                ))}
              </div>

              <p className="body-md text-gray-600 mb-5 flex-1">"{t.quote}"</p>

              {/* Result badge */}
              <div className="guarantee-badge mb-4 w-fit">↑ {t.result}</div>

              {/* Attribution */}
              <div className="flex items-center gap-3 border-t pt-4" style={{ borderColor: 'rgba(82,91,70,0.1)' }}>
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="body-sm font-semibold text-near-black">{t.name}</div>
                  <div className="body-sm text-gray-400">{t.brand}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client win screenshots */}
        <div className="grid md:grid-cols-2 gap-5 mb-14 reveal">
          <div className="card overflow-hidden">
            <div className="bg-near-black px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1">
                {['bg-red-400','bg-yellow-400','bg-green-400'].map(c => <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`}/>)}
              </div>
              <span style={{ fontSize: '10px', color: '#7B897C', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Client Analytics · Shopify</span>
            </div>
            <img src={IMG.client_wins_multi} alt="Multiple client wins" className="w-full" />
          </div>
          <div className="card overflow-hidden">
            <img src={IMG.client_win_tbw} alt="TBW client win" className="w-full" />
          </div>
        </div>

        {/* Trusted by logos */}
        <div className="reveal">
          <p className="eyebrow text-center mb-8" style={{ color: '#C9CBC3' }}>Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {clientLogos.map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt}
                style={{ height: 36, opacity: 0.55, objectFit: 'contain' }} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
