import { schedule } from '../../data/siteData';
import RevealSection from '../RevealSection';
import SectionHeading from '../SectionHeading';

export default function ScheduleSection() {
  return (
    <section id="schedule" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <SectionHeading
            title="Event Schedule"
            subtitle="Plan your day at Zenith 2k26. Don't miss out on any of our flagship sessions."
          />
        </RevealSection>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-amber-400/40 to-cyan-400/10" />

          <div className="space-y-8 md:space-y-12">
            {schedule.map((item, i) => (
              <RevealSection key={i} delay={i * 0.1} direction="left">
                <div className="relative flex gap-6 md:gap-8 pl-2">
                  {/* Glowing node */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-navy-900 border-2 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.4)] z-10 relative" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-cyan-400/20 animate-ping" />
                  </div>

                  {/* Content card */}
                  <div className="glass rounded-xl p-5 md:p-6 flex-1 glow-border-cyan hover:glow-border-amber transition-all duration-500 group">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <span className="text-sm font-mono text-amber-400 tracking-wide font-semibold">
                        {item.time}
                      </span>
                      <h3 className="text-lg md:text-xl font-serif font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
