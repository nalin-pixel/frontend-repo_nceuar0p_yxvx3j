import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const portfolio = [
  {
    before: 'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?q=80&w=1974&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600585154340-1e4ce9a08f17?q=80&w=1974&auto=format&fit=crop',
    label: 'Rumah Tinggal',
  },
  {
    before: 'https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&w=1974&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1974&auto=format&fit=crop',
    label: 'Kafe & Kantor',
  },
  {
    before: 'https://images.unsplash.com/photo-1569078449082-d264d9e8a7a2?q=80&w=1974&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1974&auto=format&fit=crop',
    label: 'Masjid & Sekolah',
  },
  {
    before: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1974&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1974&auto=format&fit=crop',
    label: 'Gudang & Industri',
  },
];

const testimonials = [
  {
    name: 'Ahmad – Pemilik Kafe',
    rating: 5,
    comment:
      'Pengerjaan sangat rapi, kamera jernih, dan respon cepat saat maintenance. Recommended!'
  },
  {
    name: 'Bu Siti – Ketua DKM',
    rating: 5,
    comment:
      'Area masjid kini terpantau dengan baik. Tim sopan dan sangat profesional.'
  },
  {
    name: 'Pak Rudi – Kepala Sekolah',
    rating: 5,
    comment:
      'Sistem CCTV sekolah kami kini stabil. Laporan maintenance jelas dan berkala.'
  },
];

export default function PortfolioTestimonials() {
  return (
    <section className="bg-neutral-900 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white sm:text-3xl"
        >
          Hasil Pekerjaan Kami
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60"
            >
              <div className="relative h-24 w-full overflow-hidden">
                <img src={p.before} alt={`Before ${p.label}`} className="h-full w-full object-cover" loading="lazy" />
                <div className="pointer-events-none absolute left-2 top-2 rounded bg-neutral-900/80 px-2 py-1 text-xs text-neutral-200">Before</div>
              </div>
              <div className="relative h-28 w-full overflow-hidden">
                <img src={p.after} alt={`After ${p.label}`} className="h-full w-full object-cover" loading="lazy" />
                <div className="pointer-events-none absolute left-2 top-2 rounded bg-green-600/90 px-2 py-1 text-xs text-white">After</div>
              </div>
              <div className="p-4 text-sm text-neutral-300">{p.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-2xl font-bold text-white sm:text-3xl"
        >
          Apa Kata Pelanggan Kami
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6"
            >
              <div className="mb-2 flex items-center gap-2 text-orange-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-400" />
                ))}
              </div>
              <p className="text-neutral-200">“{t.comment}”</p>
              <div className="mt-4 text-sm font-semibold text-white">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
