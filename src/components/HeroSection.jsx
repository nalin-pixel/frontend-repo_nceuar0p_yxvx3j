import { motion } from 'framer-motion';
import { Shield, MessageCircle } from 'lucide-react';

const WA_LINK =
  'https://wa.me/6285520926801?text=Assalamu%20Alaikum%2C%20Halo%2C%20RAVEN%20CCTV!';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-800">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1960&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 text-sm text-orange-400 ring-1 ring-orange-500/30">
            <Shield className="h-4 w-4" />
            Raven Security Bandung
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Solusi CCTV Profesional di Bandung
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-neutral-200">
            Instalasi rapi bergaransi dan layanan purnajual cepat tanggap. Tepercaya
            Mengawasi, Andal Melindungi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              <MessageCircle className="h-5 w-5 transition group-hover:scale-110" />
              Konsultasi Gratis via WhatsApp
            </a>
            <span className="text-sm text-neutral-300">
              Bukan yang termurah — yang paling profesional.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
