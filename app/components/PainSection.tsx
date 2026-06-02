import { IMG } from '../images'

const traps = [
  {
    num: '01',
    title: 'You\'re solving strategic problems with tactical fixes.',
    body: 'Most founders think growth is about running better ads or finding the right creative. But without the right system underneath — the right economics, offer structure, and acquisition model — more traffic just means more wasted spend.',
  },
  {
    num: '02',
    title: 'Your income is in the hands of someone who doesn\'t understand your brand.',
    body: 'You\'ve placed your hopes in freelancers or agencies who don\'t truly understand what you sell, who you sell it to, or why customers buy. They optimize for metrics, not for your business.',
  },
  {
    num: '03',
    title: 'Nobody ever taught you how to actually run a profitable store.',
    body: 'You started with a great product and a dream. But nobody handed you a clear system for ads, email, conversion, and retention — so you\'ve been figuring it out the hard way, alone.',
  },
]

export default function PainSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div className="reveal order-2 md:order-1">
            <div className="relative">
              <img
                src={IMG.founders_office}
                alt="Robby and Daniel"
                className="w-full rounded-2xl object-cover shadow-lg"
                style={{ maxHeight: '520px', objectPosition: 'center' }}
              />
              {/* Small callout */}
              <div className="absolute bottom-5 right-5 bg-white rounded-xl px-4 py-3 shadow-md"
                style={{ border: '1px solid rgba(82,91,70,0.1)' }}>
                <div className="body-sm font-semibold text-near-black">11 Years in Business</div>
                <div className="body-sm text-gray-400">Homer, Alaska</div>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="order-1 md:order-2 reveal">
            <div className="eyebrow mb-4">Can We Be Real For a Second?</div>
            <h2 className="h2 text-near-black mb-4">
              Business Can Be Hard.
            </h2>
            <p className="body-lg text-gray-600 mb-8">
              We've all been down the endless hole of free content and paid "opportunities" that never seem to move the needle. The hustle quickly sours the passion and dream of building something that creates real freedom for your family.
            </p>
            <p className="body-md text-gray-600 mb-10 italic border-l-4 pl-4" style={{ borderColor: '#C9CBC3' }}>
              "I pretty much hated myself when I canceled lunch with my son on his fifth birthday because I was too busy trying to fix the business. I was frustrated, overwhelmed, guilty, and just flat-out sad."
              <br /><br />
              <span className="not-italic font-semibold text-near-black">— Robby Switzer, Co-Founder</span>
            </p>

            <div className="eyebrow mb-6" style={{ color: '#7B897C' }}>Three Traps Are Holding You Back</div>

            <div className="space-y-6">
              {traps.map((trap, i) => (
                <div key={i} className="flex gap-4">
                  <div className="step-num flex-shrink-0" style={{ fontSize: '1.8rem', color: '#C9CBC3' }}>{trap.num}</div>
                  <div>
                    <h4 className="h4 text-near-black mb-1">{trap.title}</h4>
                    <p className="body-sm text-gray-500">{trap.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-xl" style={{ background: 'rgba(82,91,70,0.06)', border: '1px solid rgba(82,91,70,0.12)' }}>
              <p className="body-md text-near-black font-medium">
                And this isn't what you envisioned for yourself, your business, or your family — but all of that is about to change.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
