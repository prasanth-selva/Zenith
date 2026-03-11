import { motion } from 'framer-motion';
import { useCountdown } from '../../hooks/useCountdown';
import GlowBadge from '../GlowBadge';
import { REGISTRATION_URL } from '../../data/siteData';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const { days, hours, minutes, seconds, isOver } = useCountdown();

  const countdownItems = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Min', value: minutes },
    { label: 'Sec', value: seconds },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding pt-24 pb-16 overflow-hidden"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-transparent to-navy-900 z-[1]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-[100px] z-0" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GlowBadge label="National Level Technical Symposium" />
        </motion.div>

        <motion.div
          className="mt-6 mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src="/assets/logo/logo.png"
            alt="ZENITH 2K26 Logo"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]"
          />
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="gradient-text">ZENITH</span>{' '}
          <span className="text-amber-400 text-glow-amber">2K26</span>
        </motion.h1>

        <motion.div
          className="mt-6 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-base md:text-xl text-white/70 font-light">
            Where IT innovation, AI intelligence and Cyber Security unite
          </p>
          <p className="text-sm md:text-base text-white/40">
            A celebration of technology, creativity and excellence.
          </p>
        </motion.div>

        {/* Meta info */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-2 text-white/60">
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            24th March 2026
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            09:00 AM onwards
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            KGiSL Institute of Technology
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-3 md:gap-5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {isOver ? (
            <div className="glass rounded-2xl px-8 py-4 glow-border-amber">
              <p className="text-amber-400 font-serif text-xl font-bold">🎉 Event Day!</p>
            </div>
          ) : (
            countdownItems.map((item) => (
              <div key={item.label} className="glass rounded-xl px-4 py-3 md:px-6 md:py-4 glow-border-cyan text-center min-w-[70px] md:min-w-[90px]">
                <p className="text-2xl md:text-4xl font-mono font-bold text-white">
                  {String(item.value).padStart(2, '0')}
                </p>
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-white/40 mt-1">
                  {item.label}
                </p>
              </div>
            ))
          )}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-sm md:text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
          >
            Register Now
          </a>
          <Link
            to="/events"
            className="px-8 py-3 rounded-full border border-white/20 text-white/80 font-semibold text-sm md:text-base hover:border-amber-400/50 hover:text-amber-400 hover:shadow-lg hover:shadow-amber-400/10 transition-all duration-300"
          >
            Explore Events
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-cyan-400/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
