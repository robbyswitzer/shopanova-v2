import { IMG } from '../images'

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div className="reveal">
            <div className="eyebrow mb-4">WHO'S BEHIND IT</div>
            <h2 className="h2 text-near-black mb-6">
              The System Comes From the Trenches
            </h2>

            <p className="body-lg text-gray-600 mb-5">
              Shopanova has spent 11 years in the weeds of real Shopify stores, managing over $100M in ad spend and generating more than $720M in sales across 600+ brands and 21 niches. The Growth Made Simple System isn't theory. It's everything that actually worked, refined over a decade and packaged so any founder can follow it.
            </p>

            <p className="body-md text-gray-500 mb-8">
              Founders Robby Switzer and Daniel Stafford built Bloom to put that system in the hands of the founders who need it most: the ones with a great product and the drive to make it work.
            </p>

            {/* Signatures */}
            <div className="flex items-center gap-10">
              <div>
                <img src={IMG.robby_autograph} alt="Robby's signature"
                  style={{ height: 40, opacity: 0.85 }} />
                <p className="body-sm text-gray-400 mt-1">Robby Switzer</p>
              </div>
              <div>
                <img src={IMG.daniel_autograph} alt="Daniel's signature"
                  style={{ height: 40, opacity: 0.85 }} />
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


      </div>
    </section>
  )
}
