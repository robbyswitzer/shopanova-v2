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
          <div className="eyebrow mb-4">Real Results</div>
          <h2 className="h2 text-near-black mb-4">
            What Our Members
            <br /><span className="italic text-forest">Are Saying</span>
          </h2>
          <p className="body-md text-gray-500">
            These aren't cherry-picked outliers. This is what happens when founders with great products finally get the right system.
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
                style={{ height: 36, opacity: 0.5, filter: 'brightness(0)', objectFit: 'contain' }} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
