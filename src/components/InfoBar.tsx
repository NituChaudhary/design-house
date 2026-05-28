import { MapPin, Phone, Mail } from 'lucide-react'

export default function InfoBar() {
  return (
    <div className="bg-charcoal text-white/80 text-[11px] py-2 px-4">
      <div className="max-w-7xl mx-auto lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-0">

        <div className="flex items-center gap-1.5 hover:text-white transition-colors">
          <MapPin size={11} className="text-gold shrink-0" />
          <span className="tracking-wide">Dhanusha</span>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          <a
            href="tel:+61000000000"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={11} className="text-gold shrink-0" />
            <span className="tracking-wide">+61 000 000 000</span>
          </a>
          <span className="text-white/20">|</span>
          <a
            href="mailto:info@thedesignhouse.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={11} className="text-gold shrink-0" />
            <span className="tracking-wide">info@thedesignhouse.com</span>
          </a>
        </div>

        {/* Mobile: show both inline */}
        <div className="flex sm:hidden items-center gap-4">
          <a href="tel:+61000000000" className="flex items-center gap-1 hover:text-white transition-colors">
            <Phone size={11} className="text-gold" />
            <span>+61 000 000 000</span>
          </a>
          <a href="mailto:info@thedesignhouse.com" className="flex items-center gap-1 hover:text-white transition-colors">
            <Mail size={11} className="text-gold" />
            <span>info@thedesignhouse.com</span>
          </a>
        </div>

      </div>
    </div>
  )
}
