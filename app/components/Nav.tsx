'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { IMG } from '../images'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled py-3' : 'py-5'}`}>
      <div className="container flex items-center justify-between">
        <Link href="/"><img src={IMG.logo_black} alt="Shopanova" style={{ height: '22px', width: 'auto' }} /></Link>
        <div className="hidden md:flex items-center gap-8">
          {[['About Us','#about'],['How It Works','#how-it-works'],['Results','#results'],['Resources','/resources']].map(([l,h]) => (
            <a key={l} href={h} className="body-sm font-medium text-gray-600 hover:text-forest transition-colors">{l}</a>
          ))}
          <a href="#masterclass" className="btn btn-forest">Watch Our Masterclass</a>
        </div>
        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setOpen(!open)}>
          <span className={`block w-5 h-0.5 bg-near-black transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-near-black transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-near-black transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80' : 'max-h-0'}`}>
        <div className="container py-5 flex flex-col gap-5 border-t border-gray-100 mt-3">
          {[['About Us','#about'],['How It Works','#how-it-works'],['Results','#results'],['Resources','/resources']].map(([l,h]) => (
            <a key={l} href={h} className="body-sm font-medium text-gray-600" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="#masterclass" className="btn btn-forest w-fit" onClick={() => setOpen(false)}>Watch Our Masterclass</a>
        </div>
      </div>
    </nav>
  )
}
