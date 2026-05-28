import { useEffect, useState } from 'react'
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react'
import logoSvg from '../assets/logo.svg'

const EMPTY_FORM = { firstName: '', lastName: '', phone: '', email: '', message: '' }

export default function ContactUsSection() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [contactMethod, setContactMethod] = useState<'call' | 'email' | ''>('')
  const [toast, setToast] = useState(false)

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(false), 4000)
    return () => clearTimeout(timer)
  }, [toast])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('https://formspree.io/f/xlgzzdbe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: `${form.firstName} ${form.lastName}`,
        phone: form.phone,
        email: form.email,
        contact_preference: contactMethod || 'Not specified',
        message: form.message,
      }),
    })
    if (res.ok) {
      setForm(EMPTY_FORM)
      setContactMethod('')
      setToast(true)
    }
  }

  return (
    <section id="contact-us" className="py-20 bg-charcoal text-white">
      <div className="w-full px-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left   logo + contact details */}
          <div className="sticky top-28">
            <img src={logoSvg} alt="The Design Houses" className="h-16 w-auto mb-8" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 uppercase tracking-wide">
              Contact Us
            </h2>
            <div className="w-16 h-1 bg-gold mb-8" />
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Address</p>
                  <p className="text-gray-400 text-sm">Nepalgunj, Banke</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Phone</p>
                  <a
                    href="tel:+9779840056685"
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    + 977-9866755761
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <a
                    href="mailto:info@thedesignhouses.com"
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    info@thedesignhouses.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right   contact form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={form.firstName}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={form.lastName}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
            />
            <textarea
              rows={4}
              name="message"
              placeholder="Message"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors resize-none"
            />

            {/* Preferred contact method */}
            <div>
              <p className="text-sm font-semibold mb-3">What can we do for you?</p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setContactMethod(contactMethod === 'call' ? '' : 'call')}
                  className={`px-4 py-2 rounded text-sm font-heading font-semibold tracking-wide border transition-colors ${
                    contactMethod === 'call'
                      ? 'bg-gold border-gold text-white'
                      : 'bg-white/10 border-white/20 text-gray-300 hover:border-gold hover:text-white'
                  }`}
                >
                  Please call me
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod(contactMethod === 'email' ? '' : 'email')}
                  className={`px-4 py-2 rounded text-sm font-heading font-semibold tracking-wide border transition-colors ${
                    contactMethod === 'email'
                      ? 'bg-gold border-gold text-white'
                      : 'bg-white/10 border-white/20 text-gray-300 hover:border-gold hover:text-white'
                  }`}
                >
                  Please contact via email
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="bg-gold hover:bg-yellow-600 text-white font-heading font-semibold text-sm px-6 py-3 rounded tracking-wide transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer links */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap gap-6">
          <a href="#" className="text-gray-400 text-sm hover:text-gold transition-colors">Information</a>
          <a href="#" className="text-gray-400 text-sm hover:text-gold transition-colors">Privacy</a>
          <a href="#" className="text-gray-400 text-sm hover:text-gold transition-colors">Legal Notice</a>
        </div>
      </div>

      {/* Toast */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white text-gray-900 px-5 py-3 rounded-lg shadow-lg transition-all duration-300 ${
          toast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <CheckCircle size={18} className="text-green-500 shrink-0" />
        <span className="text-sm font-medium">Message sent! We'll be in touch soon.</span>
      </div>
    </section>
  )
}
