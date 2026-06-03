import { IMG } from '../images'

const traps = [
  {
    num: '01',
    title: "You're chasing tactics instead of building a system.",
    body: "Better ads. New creative. Another app. But tactics without a system underneath just burn money. Real growth comes from understanding how acquisition, conversion, and retention work together — and almost nobody teaches you that.",
  },
  {
    num: '02',
    title: "You've been outsourcing the thing you most need to understand.",
    body: "When you hand your growth to someone else and don't understand it yourself, you're not in control — you're hoping. The founders who win are the ones who learn how the machine actually works, so they can direct it.",
  },
  {
    num: '03',
    title: "Nobody ever gave you the validated playbook.",
    body: "You've got a great product and the drive to make it work. What you've never had is the proven, step-by-step system the best stores use — and someone in your corner to help you put it in place.",
  },
]

export default function PainSection() {
  return (
    <section className="section bg-white">
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
            <div className="eyebrow mb-4">WHY IT HASN'T CLICKED YET</div>
            <h2 className="h2 text-near-black mb-4">
              Three Reasons Your Store Isn't Growing The Way It Should
            </h2>

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
                That's exactly what we built Bloom to fix.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
