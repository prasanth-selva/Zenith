import { teamGroups } from '../../data/siteData';
import RevealSection from '../RevealSection';
import SectionHeading from '../SectionHeading';

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <SectionHeading
            title="Our Team"
            subtitle="The organizing committee behind Zenith 2k26."
          />
        </RevealSection>

        <div className="space-y-16 mt-8">
          {teamGroups.map((group, gi) => (
            <RevealSection key={group.title} delay={gi * 0.1}>
              <div>
                <h3 className="text-center text-lg md:text-xl font-serif font-bold text-amber-400 mb-8 uppercase tracking-wider">
                  {group.title}
                </h3>

                <div className={`grid gap-6 md:gap-8 justify-items-center ${
                  group.members.length === 1
                    ? 'grid-cols-1 max-w-xs mx-auto'
                    : group.members.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2 max-w-xl mx-auto'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}>
                  {group.members.map((member) => (
                    <div
                      key={member.name}
                      className="glass rounded-2xl p-6 text-center glow-border-cyan hover:glow-border-amber transition-all duration-500 group w-full max-w-[260px]"
                    >
                      <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-cyan-400/40 transition-colors">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0d1326&color=22d3ee&bold=true`;
                          }}
                        />
                      </div>
                      <h4 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-sm text-white/40 mt-1">{member.role}</p>
                      {member.department && (
                        <p className="text-xs text-amber-400/60 mt-1">{member.department}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
