import RevealSection from '../RevealSection';
import SectionHeading from '../SectionHeading';
import GlowBadge from '../GlowBadge';

const departments = ['Information Technology', 'AI & Machine Learning', 'Cyber Security'];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <SectionHeading
            title="About Zenith 2k26"
            subtitle="A flagship event organized by the departments of IT, AI&ML and Cyber Security at KGiSL Institute of Technology."
          />
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-8">
          {/* Image card */}
          <RevealSection direction="left" delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-amber-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative glass-strong rounded-2xl overflow-hidden glow-border-cyan">
                <img
                  src="/assets/about/about.png"
                  alt="KGiSL Institute of Technology Campus"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </RevealSection>

          {/* Text content */}
          <RevealSection direction="right" delay={0.3}>
            <div className="space-y-6">
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                <span className="text-white font-semibold">Zenith 2K26</span> is a celebration of technology, creativity and innovation. A stage where brilliant minds connect, compete and shape the future.
              </p>
              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                Our mission is to foster a culture of technical excellence and provide students with real-world challenges that push their boundaries.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {departments.map((dept) => (
                  <GlowBadge key={dept} label={dept} variant="amber" />
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
