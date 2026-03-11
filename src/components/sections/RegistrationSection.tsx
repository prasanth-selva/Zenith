import RevealSection from '../RevealSection';
import SectionHeading from '../SectionHeading';
import { REGISTRATION_URL } from '../../data/siteData';

export default function RegistrationSection() {
  return (
    <section id="registration" className="relative py-24 md:py-32 section-padding">
      {/* Spotlight gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-[120px]" />

      <div className="max-w-3xl mx-auto relative z-10">
        <RevealSection>
          <SectionHeading
            title="Ready to join Zenith?"
            subtitle="Registration is open! Secure your spot now and be part of the most exciting symposium of 2k26."
          />
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="glass-strong rounded-2xl p-8 md:p-12 glow-border-cyan text-center">
            {/* Info pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-bold text-amber-400">₹250</p>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-wide">Per Person</p>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block" />
              <div className="text-center">
                <p className="text-lg md:text-xl font-bold text-white">22nd March</p>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-wide">Last Date</p>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block" />
              <div className="text-center">
                <p className="text-lg md:text-xl font-bold text-teal-400">Available</p>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-wide">On-Spot</p>
              </div>
            </div>

            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold text-base md:text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Register via Google Form
            </a>

            <p className="mt-6 text-xs text-white/30">
              * Includes lunch and participation certificate
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
