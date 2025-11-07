import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import WhyUsSection from './components/WhyUsSection';
import PortfolioTestimonials from './components/PortfolioTestimonials';
import FinalCTA from './components/FinalCTA';

export default function App() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content =
      'Raven Security Bandung – Ahli Instalasi & Servis CCTV di Bandung. Instalasi rapi bergaransi, layanan purnajual cepat, dan tim profesional siap melindungi rumah, bisnis, masjid, sekolah, hingga gudang Anda.';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-100">
      {/* Simple top bar */}
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-orange-500" />
            <div className="text-sm">
              <div className="font-bold text-white">Raven Security Bandung</div>
              <div className="text-xs text-neutral-400">Tepercaya Mengawasi, Andal Melindungi</div>
            </div>
          </div>
          <a
            href="https://wa.me/6285520926801?text=Assalamu%20Alaikum%2C%20Halo%2C%20RAVEN%20CCTV!"
            className="hidden rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-orange-500/20 hover:bg-orange-600 sm:block"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <WhyUsSection />
        <PortfolioTestimonials />
        <FinalCTA />
      </main>

      <footer className="border-t border-neutral-800 bg-neutral-950 py-8 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Raven Security Bandung. All rights reserved.
      </footer>
    </div>
  );
}
