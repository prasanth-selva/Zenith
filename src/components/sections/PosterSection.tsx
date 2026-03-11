import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealSection from '../RevealSection';
import SectionHeading from '../SectionHeading';

export default function PosterSection() {
  const [lightbox, setLightbox] = useState(false);

  return (
    <section id="poster" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <SectionHeading
            title="Symposium Poster"
            subtitle="Official poster for Zenith 2k26 National Level Technical Symposium."
          />
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="flex justify-center">
            <div
              onClick={() => setLightbox(true)}
              className="relative group cursor-pointer max-w-lg w-full"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-amber-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative glass-strong rounded-2xl overflow-hidden glow-border-amber hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/assets/posters/common.jpeg"
                  alt="Zenith 2K26 Symposium Poster"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-medium text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    Click to zoom
                  </span>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src="/assets/posters/common.jpeg"
              alt="Zenith 2K26 Poster Full"
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
