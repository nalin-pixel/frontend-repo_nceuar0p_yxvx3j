import { motion } from 'framer-motion';
import { AlertTriangle, Cable, Signal, Wrench } from 'lucide-react';

export default function ProblemSection() {
  const items = [
    {
      icon: <Cable className="h-6 w-6 text-orange-400" />,
      title: 'Instalasi lama berantakan dan tidak estetis',
      img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1974&auto=format&fit=crop',
    },
    {
      icon: <Wrench className="h-6 w-6 text-orange-400" />,
      title: 'Teknisi sulit dihubungi saat CCTV bermasalah',
      img: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1974&auto=format&fit=crop',
    },
    {
      icon: <Signal className="h-6 w-6 text-orange-400" />,
      title: 'Kamera sering mati/offline atau hasil gambar buram',
      img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1974&auto=format&fit=crop',
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-orange-400" />,
      title: 'Tidak ada garansi atau layanan perawatan',
      img: 'https://images.unsplash.com/photo-1609081839310-736f84b31e82?q=80&w=1974&auto=format&fit=crop',
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
          Pernah Mengalami Masalah Ini?
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                {item.icon}
                <h3 className="font-semibold text-white">{item.title}</h3>
              </div>
              <div className="relative h-36 w-full overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
