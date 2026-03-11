import { Link } from 'react-router-dom';
import RevealSection from '../RevealSection';
import GlowBadge from '../GlowBadge';

const categories = ['Technical Events', 'Non-Technical Events', 'Fun Events'];

export default function EventsBanner() {
  return (
    <section className="relative py-24 md:py-32 section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <RevealSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">
            Discover All Events
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Explore 8+ events across Technical, Non-Technical, and Fun categories — from web development to gaming and chess championships.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <GlowBadge key={cat} label={cat} variant="cyan" />
            ))}
          </div>

          <Link
            to="/events"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-navy-900 font-bold text-base shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300"
          >
            Explore Events →
          </Link>
        </RevealSection>
      </div>
    </section>
  );
}
