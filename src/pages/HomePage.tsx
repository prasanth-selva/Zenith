import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ScheduleSection from '../components/sections/ScheduleSection';
import EventsBanner from '../components/sections/EventsBanner';
import PosterSection from '../components/sections/PosterSection';
import RegistrationSection from '../components/sections/RegistrationSection';
import VenueSection from '../components/sections/VenueSection';
import TeamSection from '../components/sections/TeamSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/sections/Footer';
import FrameSequenceOverlay from '../components/sections/FrameSequenceOverlay';

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-[2]"
    >
      <FrameSequenceOverlay />
      <div className="relative z-[5]">
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <EventsBanner />
        <PosterSection />
        <RegistrationSection />
        <VenueSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </motion.main>
  );
}
