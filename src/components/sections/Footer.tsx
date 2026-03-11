export default function Footer() {
  return (
    <footer className="relative py-12 section-padding border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="/assets/logo/logo.png" alt="ZENITH" className="w-8 h-8" />
          <span className="text-xl font-serif font-bold">
            <span className="text-cyan-400">ZENITH</span>{' '}
            <span className="text-amber-400">2K26</span>
          </span>
        </div>
        <p className="text-white/30 text-sm mb-2">KGiSL Institute of Technology</p>
        <p className="text-white/20 text-xs">
          © Zenith 2K26 Symposium. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
