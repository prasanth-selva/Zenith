import RevealSection from '../RevealSection';
import SectionHeading from '../SectionHeading';
import { GOOGLE_MAPS_URL } from '../../data/siteData';

export default function VenueSection() {
  return (
    <section id="venue" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <SectionHeading
            title="How to reach us"
            subtitle="Visit us at KGiSL Institute of Technology campus."
          />
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Location card */}
          <RevealSection direction="left" delay={0.2}>
            <div className="glass-strong rounded-2xl p-8 md:p-10 glow-border-cyan h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4">
                  KGiSL INSTITUTE OF TECHNOLOGY
                </h3>
                <p className="text-white/50 text-base leading-relaxed mb-2">
                  KGiSL Campus, 365, Thudiyalur Road,
                </p>
                <p className="text-white/50 text-base leading-relaxed">
                  Saravanampatti, Coimbatore – 641035
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </RevealSection>

          {/* QR Code card */}
          <RevealSection direction="right" delay={0.3}>
            <div className="glass-strong rounded-2xl p-8 glow-border-amber flex flex-col items-center justify-center h-full">
              <p className="text-white/40 text-sm uppercase tracking-wider mb-4">Scan to navigate</p>
              <div className="bg-white rounded-xl p-3 shadow-lg shadow-amber-400/10">
                <img
                  src="/assets/venue/map-qr.png"
                  alt="Google Maps QR Code"
                  className="w-40 h-40 md:w-48 md:h-48"
                  loading="lazy"
                />
              </div>
              <p className="text-white/30 text-xs mt-4">Google Maps QR Code</p>
            </div>
          </RevealSection>
        </div>

        {/* Campus image */}
        <RevealSection delay={0.4}>
          <div className="mt-8 glass rounded-2xl overflow-hidden glow-border-cyan">
            <img
              src="/assets/venue/campus.jpg"
              alt="KGiSL Campus"
              className="w-full h-48 md:h-64 object-cover"
              loading="lazy"
            />
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
