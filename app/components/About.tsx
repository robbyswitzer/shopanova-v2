import { IMG } from '../images'

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div className="reveal">
            <div className="eyebrow mb-4">Our Story</div>
            <h2 className="h2 text-near-black mb-6">
              Built By Founders,<br />
              <span className="italic text-forest">For Founders</span>
            </h2>

            <p className="body-lg text-gray-600 mb-5">
              Robby Switzer and Daniel Stafford started Shopanova 11 years ago in Homer, Alaska. What began as a hands-on marketing operation grew into something much bigger — a community and education platform built to give every Shopify founder access to the same strategies that helped us generate $720M+ in client revenue.
            </p>

            <p className="body-md text-gray-500 mb-5">
              We've worked across 21 eComm niches, served 600+ brands, and spent over a decade refining what actually works. The Bloom program is the result of all of that — packaged into a system any motivated founder can follow.
            </p>

            <p className="body-md text-gray-500 mb-8">
              We built Bloom because we believe every founder with a great product deserves a clear path to grow — without burning out, spending blindly, or feeling alone. We've been there. We know what it costs. And we built the program we wish we'd had.
            </p>

            {/* Signatures */}
            <div className="flex items-center gap-10">
              <div>
                <img src={IMG.robby_autograph} alt="Robby's signature"
                  style={{ height: 40, opacity: 0.85, mixBlendMode: 'multiply' }} />
                <p className="body-sm text-gray-400 mt-1">Robby Switzer</p>
              </div>
              <div>
                <img src={IMG.daniel_autograph} alt="Daniel's signature"
                  style={{ height: 40, opacity: 0.85, mixBlendMode: 'multiply' }} />
                <p className="body-sm text-gray-400 mt-1">Daniel Stafford</p>
              </div>
            </div>
          </div>

          {/* Right: Photos */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="relative mb-4">
              <img
                src={IMG.founders_city}
                alt="Robby and Daniel, co-founders of Shopanova"
                className="w-full rounded-2xl object-cover shadow-lg"
                style={{ maxHeight: '400px', objectPosition: 'center top' }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-4 flex items-center gap-3">
                <img src={IMG.robby} alt="Robby Switzer"
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
                <div>
                  <div className="body-sm font-semibold" style={{ color: '#1B231B' }}>Robby Switzer</div>
                  <div className="body-sm text-gray-400">Co-Founder & CEO</div>
                </div>
              </div>
              <div className="card p-4 flex items-center gap-3">
                <img src={IMG.daniel} alt="Daniel Stafford"
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
                <div>
                  <div className="body-sm font-semibold" style={{ color: '#1B231B' }}>Daniel Stafford</div>
                  <div className="body-sm text-gray-400">Co-Founder & COO</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Family / freedom section */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center reveal">
          <img
            src={IMG.family_autumn}
            alt="The Switzer family"
            className="w-full rounded-2xl object-cover shadow-md"
            style={{ maxHeight: '360px', objectPosition: 'center top' }}
          />
          <div>
            <div className="eyebrow mb-3">Why This Matters To Us</div>
            <h3 className="h3 text-near-black mb-4">Freedom Is The Point</h3>
            <p className="body-md text-gray-500 mb-4">
              Between us, we have 9 kids. We know what it means to want a business that works for your life — not one that consumes it. A business that creates predictable income, protects your peace, and gives you more time with the people you love.
            </p>
            <p className="body-md text-gray-500">
              That's what Bloom is built to help you create. Not just a bigger store — a better life.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
