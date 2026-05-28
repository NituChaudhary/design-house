import { ChevronDown } from 'lucide-react'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col"
      style={{ minHeight: '100svh' }}
    >
      {/* Background   real aerial skyline image, gradient fallback */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg'), linear-gradient(160deg, #0d1b2a 0%, #1b3a4b 35%, #2c5364 65%, #1a2a3a 100%)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Layered overlays   tuned for bright blue-sky aerial photo */}
      {/* Base darkening so text always reads */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Strong left-side fade for text block */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      {/* Top-to-mid fade so sky doesn't blow out */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
      {/* Bottom fade into stats strip */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-24">
          <div className="max-w-2xl xl:max-w-3xl">

            {/* Gold eyebrow label */}
            <div className="animate-fade-in-left delay-100 flex items-center gap-3 mb-6">
              <span className="block w-10 h-0.5 bg-gold" />
              <span className="text-gold font-heading font-semibold text-xs tracking-[0.2em] uppercase">
                Trusted Civil Engineering
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-in-up delay-200 font-heading font-extrabold text-white uppercase leading-[1.05] tracking-tight mb-6"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
                textShadow: '0 2px 20px rgba(0,0,0,0.5)',
              }}
            >
              Build Your{' '}
              <span className="text-gold">Dream Home</span>
              <br />
              With Us
            </h1>

            {/* Description panel   frosted glass, matching reference */}
            <div className="animate-fade-in-up delay-300 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-5 mb-8 space-y-3 max-w-xl">
              <p className="text-white/95 text-sm md:text-[0.95rem] leading-relaxed">
                Design House offers head Civil engineering services from
                conceptual design to completion. Each project is handled with
                seamless processes that connect engineering, procurement,
                fabrication, material management and construction.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Our aim is to deliver safe, cost effective projects with utmost
                efficiency and to always meet our clients' requirements and
                expectations.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="animate-fade-in-up delay-400 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('who-we-are')}
                className="bg-gold hover:bg-yellow-500 text-white font-heading font-bold text-sm px-8 py-3.5 rounded transition-all duration-200 tracking-widest uppercase shadow-lg shadow-yellow-900/30 hover:shadow-yellow-600/40 hover:-translate-y-0.5"
              >
                Learn More
              </button>
              <button
                onClick={() => scrollTo('contact-us')}
                className="border-2 border-white/70 text-white hover:bg-white hover:text-charcoal font-heading font-bold text-sm px-8 py-3.5 rounded transition-all duration-200 tracking-widest uppercase hover:-translate-y-0.5"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-6 animate-fade-in-up delay-600">
        <button
          onClick={() => scrollTo('who-we-are')}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-1 text-white/50 hover:text-gold transition-colors group"
        >
          <span className="text-[10px] font-heading tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={20} className="animate-bounce-slow" />
        </button>
      </div>

    </section>
  )
}
