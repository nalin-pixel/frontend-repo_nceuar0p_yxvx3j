import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WA_LINK =
  'https://wa.me/6285520926801?text=Assalamu%20Alaikum%2C%20Halo%2C%20RAVEN%20CCTV!';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI0OTY0MjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white sm:text-4xl"
        >
          Lindungi Aset dan Keluarga Anda Sekarang!
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-200">
          Dapatkan konsultasi gratis dengan tim CCTV profesional kami.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
          >
            <MessageCircle className="h-5 w-5" />
            Hubungi Raven Security Bandung Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
