import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { events, REGISTRATION_URL } from '../data/siteData';
import type { ZenithEvent } from '../types';
import RevealSection from '../components/RevealSection';
import GlowBadge from '../components/GlowBadge';
import Footer from '../components/sections/Footer';

const categories = [
  { key: 'technical' as const, label: 'Technical Events' },
  { key: 'non-technical' as const, label: 'Non-Technical Events' },
  { key: 'fun' as const, label: 'Fun Events' },
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<'technical' | 'non-technical' | 'fun'>('technical');
  const [selectedEvent, setSelectedEvent] = useState<ZenithEvent | null>(null);

  const filteredEvents = events.filter((e) => e.category === activeCategory);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-[2] pt-24 md:pt-28"
    >
      {/* Header */}
      <section className="section-padding pb-4">
        <div className="max-w-6xl mx-auto text-center">
          <RevealSection>
            <GlowBadge label="Discover & Compete" variant="amber" />
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-bold gradient-text">
              Events Lineup
            </h1>
            <p className="mt-4 text-white/50 text-base md:text-lg max-w-2xl mx-auto">
              Select a category to explore all events in that section.
            </p>
          </RevealSection>

          {/* Category tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/20'
                    : 'glass border border-white/10 text-white/60 hover:text-white hover:border-cyan-400/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events grid */}
      <section className="section-padding py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12 md:space-y-16"
            >
              {filteredEvents.map((event, i) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={i}
                  onSelect={() => setSelectedEvent(event)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredEvents.length === 0 && (
            <p className="text-center text-white/30 py-24">No events in this category.</p>
          )}
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>
    </motion.main>
  );
}

/* ─── Event Card Component ────────────────────────────────── */

function EventCard({
  event,
  index,
  onSelect,
}: {
  event: ZenithEvent;
  index: number;
  onSelect: () => void;
}) {
  const isEven = index % 2 === 0;

  return (
    <RevealSection direction={isEven ? 'left' : 'right'} delay={index * 0.05}>
      <div
        className={`glass-strong rounded-2xl overflow-hidden glow-border-cyan hover:glow-border-amber transition-all duration-500 group ${
          isEven ? '' : ''
        }`}
      >
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
          {/* Image */}
          <div className="lg:w-2/5 relative overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 sm:h-56 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-900/20" />
            <div className="absolute top-4 left-4">
              <GlowBadge label={event.category} variant="cyan" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/5 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                {event.title}
              </h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
                  {event.format}
                </span>
                <span className="text-xs font-mono text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full">
                  {event.participants} participant{event.participants > 1 ? 's' : ''}
                </span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                  {event.rounds.length} round{event.rounds.length > 1 ? 's' : ''}
                </span>
              </div>
              <p className="text-white/50 text-sm md:text-base leading-relaxed line-clamp-3">
                {event.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <button
                onClick={onSelect}
                className="px-6 py-2.5 rounded-full border border-cyan-400/30 text-cyan-400 text-sm font-medium hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300"
              >
                View Details
              </button>
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Event Modal ─────────────────────────────────────────── */

function EventModal({ event, onClose }: { event: ZenithEvent; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-start justify-center p-4 pt-20 md:pt-24 overflow-y-auto"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative glass-strong rounded-2xl max-w-4xl w-full mb-12 glow-border-cyan overflow-hidden"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-red-400/50 transition-colors"
        >
          ✕
        </button>

        {/* Poster */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          <img
            src={event.poster}
            alt={`${event.title} Poster`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <GlowBadge label={event.category} />
            <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-white">
              {event.title}
            </h2>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-serif font-bold text-cyan-400 mb-3">About</h3>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">{event.fullDescription}</p>
          </div>

          {/* Format */}
          <div className="flex flex-wrap gap-4">
            <div className="glass rounded-xl px-5 py-3 glow-border-cyan text-center">
              <p className="text-xs text-white/40 uppercase tracking-wider">Format</p>
              <p className="text-base font-semibold text-white mt-1">{event.format}</p>
            </div>
            <div className="glass rounded-xl px-5 py-3 glow-border-amber text-center">
              <p className="text-xs text-white/40 uppercase tracking-wider">Participants</p>
              <p className="text-base font-semibold text-white mt-1">{event.participants}</p>
            </div>
            <div className="glass rounded-xl px-5 py-3 glow-border-cyan text-center">
              <p className="text-xs text-white/40 uppercase tracking-wider">Rounds</p>
              <p className="text-base font-semibold text-white mt-1">{event.rounds.length}</p>
            </div>
          </div>

          {/* Rounds */}
          <div>
            <h3 className="text-lg font-serif font-bold text-cyan-400 mb-4">Rounds</h3>
            <div className="space-y-4">
              {event.rounds.map((round, i) => (
                <div key={i} className="glass rounded-xl p-5 glow-border-cyan">
                  <h4 className="text-sm font-semibold text-amber-400 mb-2">{round.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{round.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rules */}
          <div>
            <h3 className="text-lg font-serif font-bold text-cyan-400 mb-3">Rules</h3>
            <ul className="space-y-2">
              {event.rules.map((rule, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/50">
                  <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinators */}
          <div>
            <h3 className="text-lg font-serif font-bold text-cyan-400 mb-3">Coordinators</h3>
            <div className="flex flex-wrap gap-4">
              {event.coordinators.map((c) => (
                <div key={c.name} className="glass rounded-xl px-5 py-3 glow-border-amber">
                  <p className="text-sm font-semibold text-white">{c.name}</p>
                  <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="text-xs text-amber-400 font-mono">
                    {c.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
            <a
              href={event.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300"
            >
              📄 View Event PDF
            </a>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              Register Now
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
