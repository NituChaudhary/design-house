import chairmanPhoto from '../assets/profilepic.jpg'

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading font-bold text-charcoal text-3xl md:text-4xl mb-4 uppercase tracking-wide">
          Who We Are
        </h2>
        <div className="w-16 h-1 bg-gold mb-12" />

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-shrink-0">
            <img
              src={chairmanPhoto}
              alt="Chairman, The Design House Architects and Builders"
              className="w-56 object-cover object-top rounded-sm shadow-md"
              style={{ aspectRatio: '232 / 393' }}
            />
          </div>

          <div className="flex flex-col gap-5 text-gray-600 text-base leading-relaxed">
            <p>
              At The Design House Architects and Builders, our journey is rooted in a clear
              vision to create meaningful, innovative, and enduring spaces that enhance the
              quality of life and contribute positively to the built environment. From the very
              beginning, our focus has been on combining creative architectural thinking with
              reliable construction practices to deliver projects that stand the test of time.
            </p>
            <p>
              We believe that architecture and construction are not merely about structures, but
              about shaping experiences, lifestyles, and communities. Every project we undertake
              is guided by a strong commitment to design excellence, functional planning, and
              uncompromising quality. By integrating modern technology, sustainable practices,
              and meticulous attention to detail, we strive to exceed client expectations at
              every stage of the project lifecycle.
            </p>
            <p>
              As Chairman, I am proud to lead a team of dedicated professionals who share a
              passion for innovation, integrity, and continuous improvement. Our strength lies
              in our collaborative approach, transparent communication, and deep understanding
              of our clients' aspirations. We value trust and long-term relationships, and we
              see every assignment as a responsibility to deliver value, reliability, and
              excellence.
            </p>
            <p>
              Looking ahead, The Design House Architects and Builders remains committed to
              growth, innovation, and responsible development. We aim to expand our capabilities
              while staying true to our core values quality, professionalism, and client
              satisfaction. Together, we look forward to building inspiring spaces and
              contributing meaningfully to the future of architecture and construction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
