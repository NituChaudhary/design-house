const REVIEWS = [
  {
    name: 'James Thornton',
    role: 'Commercial Developer',
    rating: 5,
    text: 'Design House delivered our office complex on time and within budget. Their attention to structural detail and communication throughout the project was exceptional.',
    date: 'March 2024',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    rating: 5,
    text: 'From the first consultation to the final handover, the team was professional and creative. Our home exceeded every expectation we had.',
    date: 'January 2024',
  },
  {
    name: 'David Nguyen',
    role: 'Property Investor',
    rating: 5,
    text: 'Outstanding quality workmanship on our multi-unit development. The Design House team are true experts   I would not hesitate to recommend them.',
    date: 'November 2023',
  },
]

function Stars({ count, size = 'sm' }: { count: number; size?: 'sm' | 'md' | 'lg' }) {
  const cls = size === 'lg' ? 'w-7 h-7' : size === 'md' ? 'w-5 h-5' : 'w-4 h-4'
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`${cls} ${s <= count ? 'text-gold' : 'text-white/20'}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2)
  return (
    <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0">
      <span className="text-gold font-heading font-bold text-sm">{initials}</span>
    </div>
  )
}

export default function WelcomeSection() {
  return (
    <section id="welcome" className="py-20 bg-charcoal text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="block w-12 h-0.5 bg-gold" />
          <span className="text-gold font-heading font-semibold text-xs tracking-[0.2em] uppercase">
            Welcome
          </span>
          <span className="block w-12 h-0.5 bg-gold" />
        </div>

        {/* Heading */}
        <h2
          className="font-heading font-extrabold uppercase leading-tight tracking-wide mb-8"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
        >
          Welcome to{' '}
          <span className="text-gold">Design House</span>{' '}
          Architects and Builders
        </h2>

        <div className="w-16 h-1 bg-gold mx-auto mb-8" />

        {/* Description */}
        <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-16">
          The Design House Architects and Builders is a multidisciplinary design and
          construction firm dedicated to delivering innovative, functional, and sustainable
          architectural solutions. The company specializes in architectural design, interior
          planning, and turnkey construction services, combining creative vision with technical
          expertise to meet client needs. With a strong focus on quality, efficiency, and client
          satisfaction, The Design House aims to create timeless spaces that balance aesthetics,
          practicality, and structural excellence.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden mb-16">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '200+', label: 'Projects Completed' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '50+', label: 'Expert Engineers' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-charcoal px-6 py-8 flex flex-col items-center gap-2">
              <span
                className="font-heading font-extrabold text-gold leading-none"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
              >
                {value}
              </span>
              <span className="text-white/60 text-xs tracking-[0.15em] uppercase font-heading">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="flex flex-col lg:flex-row gap-8 text-left">

          {/* Left   overall score panel */}
          <div className="lg:w-56 flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4">
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase font-heading">Client Reviews</p>
            <p
              className="font-heading font-extrabold text-gold leading-none"
              style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)' }}
            >
              4.8
            </p>
            <Stars count={5} size="lg" />

          </div>

          {/* Right   review cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-1 gap-5">
            {REVIEWS.map(({ name, role, rating, text, date }) => (
              <div
                key={name}
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-6 flex flex-col gap-4 hover:border-gold/40 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar name={name} />
                    <div>
                      <p className="font-heading font-semibold text-white text-sm">{name}</p>
                      <p className="text-gold text-xs tracking-wide">{role}</p>
                    </div>
                  </div>
                  <span className="text-white/30 text-xs">{date}</span>
                </div>
                <Stars count={rating} size="sm" />
                <p className="text-white/70 text-sm leading-relaxed">"{text}"</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
