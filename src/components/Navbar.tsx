import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logoSvg from '../assets/logo.svg'

const NAV_LINKS = [
  { label: 'HOME',            id: 'hero' },
  { label: 'WHO WE ARE',      id: 'who-we-are' },
  { label: 'PROJECT SECTOR',  id: 'project-sector' },
  { label: 'SAFETY & QUALITY',id: 'safety-quality' },
  { label: 'CAREERS',         id: 'careers' },
  { label: 'CONTACT US',      id: 'contact-us' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [active, setActive]   = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Update active section based on scroll position
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.id)
    const onScroll = () => {
      const scrollY = window.scrollY + 100
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.offsetTop <= scrollY) {
          setActive(ids[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setActive(id)
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="w-full px-6 lg:px-10 flex items-center justify-between h-24 lg:h-28">

        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex-shrink-0 focus:outline-none"
        >
          <img src={logoSvg} alt="Design House" className="h-20 w-auto" />
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map(({ label, id }) => {
            const isActive = active === id
            const isCareers = id === 'careers'
            return (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`relative px-3.5 py-1.5 text-[11px] font-heading font-semibold tracking-[0.08em] transition-all duration-200 rounded
                    ${isActive
                      ? 'bg-charcoal text-white'
                      : isCareers
                        ? 'bg-charcoal text-white hover:bg-gray-800'
                        : 'text-charcoal hover:text-gold'
                    }`}
                >
                  {label}
                  {/* Underline accent for non-active hover */}
                  {!isActive && !isCareers && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-4/5" />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-charcoal hover:text-gold transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`w-full text-left px-4 py-2.5 text-sm font-heading font-semibold tracking-wider rounded transition-colors ${
                  active === id
                    ? 'bg-charcoal text-white'
                    : 'text-charcoal hover:text-gold hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
