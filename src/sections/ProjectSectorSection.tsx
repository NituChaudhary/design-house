import { useState, useEffect } from 'react'
import {
  Home, Building2, HardHat, Layers, Ruler, Leaf,
  Wrench, Landmark, Hammer,
  X, CheckCircle2, ArrowRight,
} from 'lucide-react'

interface Sector {
  icon: React.ElementType
  title: string
  description: string
  image: string
  gradient: string
  fullDescription: string[]
  services: { title: string; detail: string }[]
}

interface Category {
  category: string
  description: string
  sectors: Sector[]
}

const CATEGORIES: Category[] = [
  {
    category: 'Construction',
    description: 'End-to-end building solutions across residential, commercial, and industrial sectors.',
    sectors: [
      {
        icon: Home,
        title: 'Residential Construction',
        description: 'Custom homes, townhouses, and multi-unit residential complexes built to the highest standards   from slab to final handover.',
        gradient: 'from-stone-800 via-stone-700 to-amber-900',
        image: '/images/sectors/residential.jpg',
        fullDescription: [
          'At Design House, residential construction is about more than building a structure   it is about creating a home. We work closely with every client to understand their lifestyle, preferences, and vision, translating those aspirations into thoughtfully designed, carefully constructed living spaces.',
          'Our residential portfolio spans single-storey custom homes, double-storey residences, townhouse developments, and multi-unit complexes. Each project is managed by an experienced team that coordinates every trade, manages all council approvals, and maintains transparent communication from the first sod to final handover.',
          'We take pride in our attention to detail   from the foundation engineering and framing through to the finishing selections and landscaping. Every home we build reflects our commitment to quality, craftsmanship, and client satisfaction.',
        ],
        services: [
          { title: 'Custom Home Design & Build', detail: 'Bespoke residences designed around your lifestyle and delivered as a turnkey package.' },
          { title: 'Townhouse & Multi-Unit Development', detail: 'Efficient, high-quality multi-lot developments maximising site yield without compromising quality.' },
          { title: 'Knockdown & Rebuild', detail: 'Full demolition, approvals, and reconstruction of your existing property to a brand-new home.' },
          { title: 'Luxury Residential Builds', detail: 'Premium materials, superior finishes, and bespoke detailing for high-end residential projects.' },
          { title: 'Renovations & Extensions', detail: "Seamless additions and renovations that integrate with your existing home's character and structure." },
          { title: 'Project Management', detail: 'End-to-end coordination of contractors, trades, councils, and suppliers on your behalf.' },
        ],
      },
      {
        icon: Building2,
        title: 'Commercial Construction',
        description: 'Office towers, retail centres, and mixed-use developments delivered on schedule with uncompromising build quality.',
        gradient: 'from-slate-800 via-slate-700 to-zinc-800',
        image: '/images/sectors/commercial.jpg',
        fullDescription: [
          'Commercial construction demands a unique blend of precision engineering, efficient project management, and the ability to deliver within tight timeframes without compromising quality. Design House brings extensive experience across office buildings, retail developments, hospitality fit-outs, and mixed-use precincts.',
          'Our commercial team understands the commercial realities of development   cost certainty, programme adherence, and tenancy requirements all shape our approach from day one. We engage proactively with developers, tenants, consultants, and councils to keep projects on track and on budget.',
          'From base building works to full interior fit-out and façade engineering, we deliver commercial spaces that function efficiently, present professionally, and stand the test of time.',
        ],
        services: [
          { title: 'Office & Corporate Buildings', detail: 'Purpose-built office facilities from boutique suites to multi-storey corporate towers.' },
          { title: 'Retail & Mixed-Use Developments', detail: 'Shopping centres, retail strips, and mixed-use precincts designed for commercial performance.' },
          { title: 'Hospitality Construction', detail: 'Hotels, restaurants, cafés, and entertainment venues built to brand specification and guest expectations.' },
          { title: 'Medical & Healthcare Facilities', detail: 'Specialist construction for clinics, medical centres, and healthcare buildings meeting strict compliance standards.' },
          { title: 'Education Facilities', detail: 'Schools, training centres, and campus buildings delivering safe, functional learning environments.' },
          { title: 'Tenancy Fit-Outs', detail: 'Interior commercial fit-outs coordinated with base building works for seamless delivery.' },
        ],
      },
      {
        icon: Hammer,
        title: 'Industrial Construction',
        description: 'Warehouses, manufacturing facilities, and industrial complexes engineered for safety, efficiency, and long-term performance.',
        gradient: 'from-zinc-800 via-neutral-700 to-stone-800',
        image: '/images/sectors/industrial.jpg',
        fullDescription: [
          'Industrial construction requires robust engineering solutions built to withstand the demands of manufacturing, logistics, and heavy industry operations. Design House delivers industrial facilities that are safe, functional, and built for the long term.',
          'Our industrial projects range from large-scale warehouses and distribution centres to specialised manufacturing plants and processing facilities. We understand that downtime is costly   our project scheduling and phased delivery strategies minimise disruption to adjacent operations throughout the build.',
          'We manage all structural, civil, mechanical, and services elements in-house, providing a single point of accountability and ensuring every system is coordinated and compliant from day one.',
        ],
        services: [
          { title: 'Warehouses & Distribution Centres', detail: 'Large clear-span warehouses engineered for logistics, storage, and operational efficiency.' },
          { title: 'Manufacturing Plants', detail: 'Specialised industrial buildings designed around your production process and equipment requirements.' },
          { title: 'Cold Storage & Processing Facilities', detail: 'Temperature-controlled environments built to food-grade and pharmaceutical standards.' },
          { title: 'Structural Steel & Concrete Works', detail: 'Heavy structural fabrication and concrete construction for demanding industrial applications.' },
          { title: 'Industrial Fit-Out & Fitup', detail: 'Internal fit-out of industrial spaces including mezzanines, racking systems, and service connections.' },
          { title: 'Compliance & Safety Engineering', detail: 'Industrial builds designed and certified to meet all WHS, building code, and EPA requirements.' },
        ],
      },
    ],
  },
  {
    category: 'Civil & Infrastructure',
    description: 'Robust civil engineering works underpinning communities and developments.',
    sectors: [
      {
        icon: HardHat,
        title: 'Civil Works & Earthworks',
        description: 'Roads, drainage systems, retaining walls, and bulk earthworks executed with precision and full compliance to engineering standards.',
        gradient: 'from-amber-900 via-stone-800 to-yellow-900',
        image: '/images/sectors/civil.jpg',
        fullDescription: [
          'Civil works form the backbone of every successful development. Design House provides comprehensive civil engineering and earthworks services that deliver safe, durable, and compliant outcomes across residential estates, commercial precincts, and civil infrastructure projects.',
          'Our civil team is experienced in complex cut-and-fill operations, drainage network design, road construction, and retaining structure engineering. We utilise modern plant and equipment, combined with rigorous quality control, to meet programme milestones and specification requirements.',
          'We work collaboratively with councils, utility authorities, and developers to manage approvals, inspections, and compliance throughout every phase of civil delivery.',
        ],
        services: [
          { title: 'Bulk Earthworks & Grading', detail: 'Large-scale cut, fill, and compaction works to prepare sites for development to design levels.' },
          { title: 'Road Construction & Pavement', detail: 'Subgrade preparation, sub-base, basecourse, and asphalt or concrete pavement construction.' },
          { title: 'Drainage & Stormwater Systems', detail: 'Pipe networks, pits, channels, and detention basins designed and installed to council requirements.' },
          { title: 'Retaining Walls & Stabilisation', detail: 'Engineered retaining solutions in concrete, block, and piling for challenging terrain.' },
          { title: 'Subdivision & Lot Development', detail: 'Civil servicing of residential and commercial subdivisions from concept through to title release.' },
          { title: 'Erosion & Sediment Control', detail: 'ESCP implementation and management throughout construction to protect waterways and comply with regulations.' },
        ],
      },
      {
        icon: Landmark,
        title: 'Infrastructure Development',
        description: 'Bridges, culverts, stormwater management, and public infrastructure projects designed for durability and community benefit.',
        gradient: 'from-neutral-800 via-stone-700 to-amber-800',
        image: '/images/sectors/infrastructure.jpg',
        fullDescription: [
          'Public infrastructure underpins the safety and functionality of communities. Design House has the expertise to deliver complex infrastructure projects   from bridges and major culverts to stormwater detention systems and public amenity works.',
          'Our infrastructure team brings deep technical knowledge in reinforced concrete, structural steel, and geotechnical engineering, enabling us to deliver robust solutions that perform under sustained load and environmental exposure.',
          'We work within public authority and government frameworks, meeting the reporting, inspection, and compliance obligations that accompany publicly funded infrastructure.',
        ],
        services: [
          { title: 'Bridge & Culvert Construction', detail: 'Reinforced concrete and structural steel bridges and culverts engineered for design loads and longevity.' },
          { title: 'Stormwater Detention & Harvesting', detail: 'Underground tanks, detention basins, and water quality improvement devices for urban catchments.' },
          { title: 'Utility & Services Infrastructure', detail: 'Water, sewer, gas, and electrical conduit networks coordinated across development sites.' },
          { title: 'Public Realm & Streetscape Works', detail: 'Footpaths, kerbing, street furniture, signage, and landscaping for public spaces.' },
          { title: 'Government & Council Projects', detail: 'Public infrastructure delivered under government contract frameworks with full compliance and reporting.' },
          { title: 'Structural Concrete Works', detail: 'In-situ and precast concrete structures for bridges, retaining systems, and civil infrastructure.' },
        ],
      },
      {
        icon: Wrench,
        title: 'Site Development & Preparation',
        description: 'Site clearing, grading, compaction, and utility connections   turning raw land into construction-ready sites.',
        gradient: 'from-stone-700 via-zinc-800 to-neutral-800',
        image: '/images/sectors/site.jpg',
        fullDescription: [
          'Before any structure can rise, the ground must be prepared. Design House provides thorough site development and preparation services that set the foundation for safe, efficient, and compliant construction.',
          'Our site preparation works encompass everything from initial clearing and demolition through to detailed grading, compaction testing, and temporary service connections. We coordinate geotechnical investigations, contamination assessments, and surveying to ensure your site is fully understood before work begins.',
          'A well-prepared site reduces construction risk, minimises programme delays, and gives every subsequent trade the best possible platform to deliver quality work.',
        ],
        services: [
          { title: 'Site Clearing & Demolition', detail: 'Vegetation clearing, structure demolition, and site remediation to make way for new construction.' },
          { title: 'Geotechnical Investigation', detail: 'Soil testing, bore logs, and geotechnical reporting to inform foundation and pavement design.' },
          { title: 'Site Grading & Compaction', detail: 'Precise grading to design levels with engineered compaction testing for structural suitability.' },
          { title: 'Contamination Assessment & Remediation', detail: 'Environmental site assessments and remediation of contaminated land for safe redevelopment.' },
          { title: 'Temporary Works & Services', detail: 'Temporary fencing, access roads, site sheds, and utility connections to support construction operations.' },
          { title: 'Survey & Setting Out', detail: 'Licensed surveying for boundary definition, design set-out, and as-constructed verification.' },
        ],
      },
    ],
  },
  {
    category: 'Design & Architecture',
    description: 'Creative design intelligence fused with structural and interior expertise.',
    sectors: [
      {
        icon: Ruler,
        title: 'Architectural Design',
        description: 'Concept development, schematic design, construction documentation, and council approvals for projects of every scale.',
        gradient: 'from-yellow-900 via-amber-800 to-stone-800',
        image: '/images/sectors/architecture.jpg',
        fullDescription: [
          'Good architecture begins with listening. At Design House, our architectural design process is driven by deep client engagement   understanding your aspirations, constraints, and context before a single line is drawn.',
          'Our design team blends creative vision with technical rigour, producing architecture that is not only beautiful but structurally sound, energy-efficient, and buildable within your budget. From initial concept sketches and 3D visualisations through to full construction documentation, we guide every project with clarity and precision.',
          'We manage the entire approval process   development applications, construction certificates, and certifier coordination   so you can focus on the outcome, not the paperwork.',
        ],
        services: [
          { title: 'Concept & Schematic Design', detail: 'Initial spatial concepts, massing studies, and design options developed in close collaboration with the client.' },
          { title: '3D Visualisation & Rendering', detail: 'Photo-realistic renders and virtual walkthroughs to communicate design intent before construction begins.' },
          { title: 'Development Application (DA) Preparation', detail: 'Comprehensive DA documentation, statement of environmental effects, and council submission management.' },
          { title: 'Construction Documentation', detail: 'Detailed architectural drawings, specifications, and schedules ready for tender and construction.' },
          { title: 'Building Certification Coordination', detail: 'Liaison with private certifiers and councils through construction certificate and occupation certificate stages.' },
          { title: 'Heritage & Conservation Design', detail: 'Sensitive design solutions for heritage-listed buildings balancing conservation obligations with contemporary need.' },
        ],
      },
      {
        icon: Layers,
        title: 'Interior Design & Planning',
        description: 'Functional, aesthetically refined interiors   space planning, material selection, and bespoke fit-outs tailored to each client.',
        gradient: 'from-stone-800 via-amber-900 to-zinc-800',
        image: '/images/sectors/interior.jpg',
        fullDescription: [
          'Interior design is where architecture becomes personal. Our interior design team creates spaces that are not only visually compelling but deeply functional   designed around the way people actually live, work, and move.',
          'We take an integrated approach to interior planning, working alongside our architects and builders to ensure seamless coordination between structure, services, and finishes. From material palettes and lighting design to custom joinery and furniture specification, we manage every detail of the interior environment.',
          'Whether it is a luxury residential interior, a high-performance commercial workspace, or a hospitality environment designed to delight guests, we bring the same level of care and creativity to every project.',
        ],
        services: [
          { title: 'Space Planning & Layout', detail: 'Optimised floor plan arrangements that balance function, flow, and spatial quality.' },
          { title: 'Material & Finish Selection', detail: 'Curated palettes of flooring, wall finishes, ceilings, and surfaces aligned to project brief and budget.' },
          { title: 'Custom Joinery & Cabinetry', detail: 'Bespoke joinery design   kitchens, wardrobes, bathrooms, and feature furniture   crafted to specification.' },
          { title: 'Lighting Design', detail: 'Layered lighting strategies combining ambient, task, and accent lighting for function and atmosphere.' },
          { title: 'Furniture & Styling', detail: 'Furniture procurement, styling, and FF&E specification for residential and commercial interiors.' },
          { title: 'Residential & Commercial Fit-Out', detail: 'Full interior fit-out management from demolition through to final styling and handover.' },
        ],
      },
      {
        icon: Leaf,
        title: 'Sustainable & Green Design',
        description: 'Energy-efficient design, passive solar principles, sustainable materials, and green building certifications integrated from concept.',
        gradient: 'from-emerald-900 via-stone-800 to-amber-900',
        image: '/images/sectors/sustainable.jpg',
        fullDescription: [
          'Sustainable design is no longer optional   it is the responsible foundation of every project we undertake. At Design House, environmental performance is embedded into our design thinking from the very first conversation, not bolted on as an afterthought.',
          'We apply passive design principles   orientation, natural ventilation, thermal mass, and shading   to reduce energy loads before mechanical systems are even considered. Where active systems are required, we specify high-efficiency solutions and integrate renewable energy generation where feasible.',
          'Our approach helps clients achieve lower running costs, healthier living and working environments, and measurable reductions in environmental impact   without sacrificing aesthetics or functionality.',
        ],
        services: [
          { title: 'Passive Solar Design', detail: 'Optimised building orientation, glazing ratios, and shading strategies to minimise heating and cooling loads.' },
          { title: 'Energy Efficiency Modelling', detail: 'NatHERS and NABERS assessments, energy modelling, and compliance documentation for building approvals.' },
          { title: 'Green Building Certification', detail: 'Green Star, NABERS, and BASIX compliance pathways integrated into design and documentation.' },
          { title: 'Sustainable Materials Selection', detail: 'Specification of low-embodied-carbon, recycled, and ethically sourced building materials.' },
          { title: 'Renewable Energy Integration', detail: 'Solar PV, battery storage, and EV charging infrastructure designed into new and existing buildings.' },
          { title: 'Water Efficiency & Recycling', detail: 'Rainwater harvesting, greywater reuse, and low-flow fixture specification to reduce potable water consumption.' },
        ],
      },
    ],
  },
]

function Modal({ sector, onClose }: { sector: Sector; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const Icon = sector.icon

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-56 sm:h-64 flex-shrink-0">
          <img src={sector.image} alt={sector.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-end p-7">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/30 border border-gold/60 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Icon size={24} className="text-white" strokeWidth={1.6} />
              </div>
              <h2 className="font-heading font-extrabold text-white text-xl sm:text-2xl uppercase tracking-wide leading-tight">
                {sector.title}
              </h2>
            </div>
          </div>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-gold/60 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-7 sm:p-10 space-y-8">
          {/* Full description */}
          <div className="space-y-4">
            {sector.fullDescription.map((para, i) => (
              <p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-0.5 bg-gold" />
              <h3 className="font-heading font-bold text-charcoal text-xs tracking-[0.2em] uppercase">
                Our Services
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sector.services.map(({ title, detail }) => (
                <div key={title} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100">
                  <CheckCircle2 size={16} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="font-heading font-semibold text-charcoal text-sm">{title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <p className="text-gray-400 text-sm">Ready to start your project?</p>
            <button
              onClick={() => {
                onClose()
                setTimeout(() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' }), 100)
              }}
              className="flex items-center gap-2 bg-gold hover:bg-yellow-500 text-white font-heading font-bold text-xs px-6 py-3 rounded tracking-widest uppercase transition-colors duration-200"
            >
              Get in Touch <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectorCard({ sector, onOpen }: { sector: Sector; onOpen: () => void }) {
  const Icon = sector.icon
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-gold/30 transition-all duration-300 flex flex-col">
      {/* Image area */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={sector.image}
          alt={sector.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-gold/40 group-hover:border-gold/60 transition-all duration-300">
            <Icon size={28} className="text-white" strokeWidth={1.6} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>

      {/* Text content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <h3 className="font-heading font-bold text-charcoal text-sm leading-snug group-hover:text-gold transition-colors duration-200">
          {sector.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{sector.description}</p>
        <div className="pt-3 border-t border-gray-100">
          <button
            onClick={onOpen}
            className="text-gold text-xs font-heading font-semibold tracking-widest uppercase hover:underline underline-offset-4 transition-all"
          >
            Learn More →
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProjectSectorSection() {
  const [activeSector, setActiveSector] = useState<Sector | null>(null)

  return (
    <section id="project-sector" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-12 h-0.5 bg-gold" />
            <span className="text-gold font-heading font-semibold text-xs tracking-[0.2em] uppercase">
              What We Deliver
            </span>
          </div>
          <h2
            className="font-heading font-extrabold text-charcoal uppercase tracking-wide leading-tight mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            Project Sectors
          </h2>
          <div className="w-16 h-1 bg-gold mb-6" />
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {CATEGORIES.map(({ category, description, sectors }) => (
            <div key={category}>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-7">
                <div>
                  <h3 className="font-heading font-bold text-charcoal text-xl uppercase tracking-wide">
                    {category}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{description}</p>
                </div>
                <div className="h-0.5 flex-1 bg-gradient-to-r from-gold/40 to-transparent hidden sm:block ml-6 mb-1.5" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectors.map((sector) => (
                  <SectorCard
                    key={sector.title}
                    sector={sector}
                    onOpen={() => setActiveSector(sector)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {activeSector && (
        <Modal sector={activeSector} onClose={() => setActiveSector(null)} />
      )}
    </section>
  )
}
