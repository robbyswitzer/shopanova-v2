'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Who is Bloom for?',
    a: 'Bloom is built for Shopify founders doing $5k–$100k/month who have a validated product but need the right system to grow predictably. If you\'re coachable, willing to implement, and tired of guessing, Bloom is for you. Our best members are self-directed go-getters who show up, do the work, and use the community and calls to get unstuck fast.',
  },
  {
    q: 'What do I actually get access to?',
    a: 'Bloom members get all training playbooks covering Meta Ads, Email, Shopify, Branding, Google Ads, Content, and more. You also get two weekly group coaching calls with in-house experts (one implementation Q&A, one strategic workshop), the community platform, and a growing tools library. Pro members add monthly 1-on-1 coaching and a custom growth roadmap.',
  },
  {
    q: 'How is this different from just watching YouTube or buying a course?',
    a: 'YouTube gives you tactics in isolation. Bloom gives you a system, with expert accountability every week and a community of founders who are ahead of where you are. You also get 11 years of real client frameworks, not theory. The calls are where the real value is: you can ask specific questions about your specific store and get specific answers.',
  },
  {
    q: 'What if I\'ve been burned by agencies before?',
    a: 'We hear this constantly. Bloom is not an agency. Nobody runs your ads for you. We teach you the system, help you implement it at your own pace, and hold you accountable through calls and community. You own your marketing. You understand why things work. That\'s a very different relationship.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Members who show up to calls, watch the playbooks relevant to their situation, and implement consistently typically see meaningful movement within 30–60 days. Results depend on your product, your market, and how much you put in, but the system works when you do.',
  },
  {
    q: 'What are the guarantees?',
    a: 'Three-day grace period: cancel for any reason in the first 3 days, full refund. Sixty-day do-the-work guarantee: if you attend at least 4 calls, complete your action steps, and still don\'t see results, we\'ll refund you. Hardship pause: if you or an immediate family member faces a major medical or financial hardship, we\'ll pause your membership for up to 3 months.',
  },
  {
    q: 'What\'s the difference between Bloom and Bloom Pro?',
    a: 'Bloom is self-directed with full community and group call access. You learn, you implement, you grow. Pro adds a dedicated 1-on-1 coach who builds your personalized growth roadmap in week one, meets with you monthly, and is available for async questions. Pro is best for brands doing $30k+ who want individual attention on top of the program.',
  },
  {
    q: 'Do I need a big ad budget?',
    a: 'No. Many of our best results come from founders who started with modest budgets. The system focuses on making what you already have convert better before scaling spend. We teach you to understand your economics first: AOV, LTV, break-even. So every dollar you spend is intentional.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="section bg-white">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 reveal">
          <div className="eyebrow mb-4">Questions</div>
          <h2 className="h2 text-near-black">
            Answered <span className="italic text-forest">Clearly</span>
          </h2>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="card overflow-hidden transition-all"
              style={{ borderColor: open === i ? 'rgba(82,91,70,0.25)' : 'rgba(82,91,70,0.1)' }}>
              <button className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}>
                <span className="body-md font-semibold text-near-black pr-4">{faq.q}</span>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                  ${open === i ? 'rotate-45' : ''}`}
                  style={{ background: open === i ? '#525B46' : 'transparent', border: open === i ? 'none' : '1px solid #e5e7eb' }}>
                  <span className="text-sm leading-none" style={{ color: open === i ? 'white' : '#9ca3af' }}>+</span>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-56' : 'max-h-0'}`}>
                <p className="px-6 pb-6 body-md text-gray-500">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
