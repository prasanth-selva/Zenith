import { contacts } from '../../data/siteData';
import RevealSection from '../RevealSection';
import SectionHeading from '../SectionHeading';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <SectionHeading
            title="Contact Coordinators"
            subtitle="Have questions? Reach out to our team."
          />
        </RevealSection>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-8 max-w-2xl mx-auto">
          {contacts.map((contact, i) => (
            <RevealSection key={contact.name} delay={i * 0.15} direction={i === 0 ? 'left' : 'right'}>
              <div className="glass-strong rounded-2xl p-8 text-center glow-border-cyan hover:glow-border-amber transition-all duration-500 group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-teal-400/20 flex items-center justify-center border border-cyan-400/20">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {contact.name}
                </h3>
                <p className="text-sm text-white/40 mt-1">{contact.role}</p>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="inline-block mt-4 text-amber-400 font-mono text-sm hover:text-amber-300 transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
