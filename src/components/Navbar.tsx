import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Schedule', href: '/#schedule' },
  { label: 'Events', href: '/events' },
  { label: 'Registration', href: '/#registration' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/assets/logo/logo.png"
            alt="ZENITH"
            className="w-9 h-9 md:w-10 md:h-10 transition-transform group-hover:scale-110"
          />
          <span className="text-lg md:text-xl font-serif font-bold tracking-wide text-glow-cyan">
            ZENITH <span className="text-amber-400">2K26</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isRoute = !link.href.startsWith('/#');
            const isActive = isRoute
              ? location.pathname === link.href
              : false;

            const inner = (
              <span
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-cyan-400' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-cyan-400 rounded-full"
                  />
                )}
              </span>
            );

            if (isRoute) {
              return (
                <Link key={link.label} to={link.href}>
                  {inner}
                </Link>
              );
            }

            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="cursor-pointer"
              >
                {inner}
              </button>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white rounded"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-900/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-2">
              {navLinks.map((link) => {
                const isRoute = !link.href.startsWith('/#');

                if (isRoute) {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="py-3 text-base font-medium text-white/80 hover:text-cyan-400 transition-colors border-b border-white/5"
                    >
                      {link.label}
                    </Link>
                  );
                }

                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="py-3 text-left text-base font-medium text-white/80 hover:text-cyan-400 transition-colors border-b border-white/5"
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
