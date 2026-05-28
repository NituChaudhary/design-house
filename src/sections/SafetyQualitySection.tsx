import { ShieldCheck, ClipboardCheck, TreePine, CheckCircle2 } from 'lucide-react'

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Safety Management',
    description:
      'Rigorous site safety protocols, WHS compliance, hazard identification, toolbox talks, and safety management plans are enforced across every project   protecting our people and the public at every stage.',
    image: '/images/sectors/safety.jpg',
    points: [
      'Work Health & Safety (WHS) compliance',
      'Daily hazard identification & control',
      'Site induction & toolbox talks',
      'Incident reporting & investigation',
      'Emergency response planning',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Assurance',
    description:
      'Structured quality management systems, hold-point inspections, and independent verification ensure every build meets specification   delivering consistent, reliable outcomes for our clients.',
    image: '/images/sectors/quality.jpg',
    points: [
      'ISO-aligned quality management systems',
      'Hold-point & witness-point inspections',
      'Material testing & certification',
      'Defect identification & rectification',
      'As-built documentation & handover',
    ],
  },
  {
    icon: TreePine,
    title: 'Environmental Compliance',
    description:
      'We embed environmental responsibility into every project   from erosion and sediment control to waste management and ecological protection   minimising our footprint and meeting all regulatory obligations.',
    image: '/images/sectors/environment.jpg',
    points: [
      'Environmental impact assessments',
      'Erosion & sediment control plans',
      'Waste minimisation & recycling',
      'Dust & noise management',
      'Flora & fauna protection protocols',
    ],
  },
]

const COMMITMENTS = [
  'Zero tolerance for unsafe work practices',
  'Continuous improvement through audits and reviews',
  'Full regulatory compliance on every project',
  'Transparent reporting to clients and stakeholders',
  'Trained and competent workforce at all levels',
  'Proactive risk management from project inception',
]

export default function SafetyQualitySection() {
  return (
    <section id="safety-quality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-12 h-0.5 bg-gold" />
            <span className="text-gold font-heading font-semibold text-xs tracking-[0.2em] uppercase">
              Our Standards
            </span>
          </div>
          <h2
            className="font-heading font-extrabold text-charcoal uppercase tracking-wide leading-tight mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            Safety &amp; Quality
          </h2>
          <div className="w-16 h-1 bg-gold mb-6" />
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {PILLARS.map(({ icon: Icon, title, description, image, points }) => (
            <div
              key={title}
              className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-gold/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-gold/40 group-hover:border-gold/60 transition-all duration-300">
                    <Icon size={28} className="text-white" strokeWidth={1.6} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7 bg-white gap-4">
                <h3 className="font-heading font-bold text-charcoal text-lg group-hover:text-gold transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

                {/* Key points */}
                <ul className="mt-2 space-y-2">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-gray-500 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Our commitments */}
        <div className="bg-charcoal rounded-2xl px-8 py-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-10 h-0.5 bg-gold" />
            <span className="text-gold font-heading font-semibold text-xs tracking-[0.2em] uppercase">
              Our Commitments
            </span>
          </div>
          <h3 className="font-heading font-bold text-white text-xl uppercase tracking-wide mb-8">
            What We Stand For
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMMITMENTS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                <span className="text-white/75 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
