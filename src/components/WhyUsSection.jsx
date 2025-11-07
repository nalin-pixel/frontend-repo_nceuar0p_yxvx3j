import { motion } from 'framer-motion';
import { BadgeCheck, Users, Cable, Scale } from 'lucide-react';

export default function WhyUsSection() {
  const reasons = [
    {
      icon: <BadgeCheck className="h-6 w-6 text-orange-400" />,
      title: 'Garansi & Layanan Responsif',
      desc: 'Setiap pekerjaan dilindungi garansi resmi dan dukungan cepat.',
    },
    {
      icon: <Users className="h-6 w-6 text-orange-400" />,
      title: 'Tim Profesional & Berpengalaman',
      desc: 'Teknisi bersertifikat, sopan, dan teliti.',
    },
    {
      icon: <Cable className="h-6 w-6 text-orange-400" />,
      title: 'Instalasi Rapi & Estetis',
      desc: 'Kabel tersembunyi, hasil bersih, dan enak dipandang.',
    },
    {
      icon: <Scale className="h-6 w-6 text-orange-400" />,
      title: 'Harga Jujur, Hasil Memuaskan',
      desc: 'Tidak termurah, tapi menjamin kualitas terbaik.',
    },
  ];

  return (
    <section className="bg-neutral-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white sm:text-3xl"
        >
          Mengapa Pilih Raven Security Bandung?
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5"
            >
              <div className="mb-2 flex items-center gap-2">{r.icon}<h3 className="font-semibold text-white">{r.title}</h3></div>
              <p className="text-sm text-neutral-300">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
