import { motion } from 'framer-motion';
import { Hammer, RefreshCcw, PlusCircle, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: <CheckCircle className="h-6 w-6 text-orange-400" />,
    title: 'Pemasangan CCTV Baru',
    desc: 'Instalasi rapi dan estetis, cocok untuk rumah, kantor, atau tempat ibadah.',
    img: 'https://images.unsplash.com/photo-1581092333127-39a84754b8bb?q=80&w=1974&auto=format&fit=crop',
  },
  {
    icon: <RefreshCcw className="h-6 w-6 text-orange-400" />,
    title: 'Servis & Perbaikan CCTV',
    desc: 'Spesialis mengatasi CCTV mati/offline dengan respon cepat.',
    img: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1974&auto=format&fit=crop',
  },
  {
    icon: <Hammer className="h-6 w-6 text-orange-400" />,
    title: 'Maintenance Berkala (Bisnis & Sekolah)',
    desc: 'Pemeriksaan rutin agar sistem CCTV selalu optimal.',
    img: 'https://images.unsplash.com/photo-1581091215367-59ab6b4b4d3b?q=80&w=1974&auto=format&fit=crop',
  },
  {
    icon: <PlusCircle className="h-6 w-6 text-orange-400" />,
    title: 'Upgrade & Tambah Titik Kamera',
    desc: 'Penambahan titik baru tanpa merusak instalasi lama.',
    img: 'https://images.unsplash.com/photo-1524758870432-af57e54afa26?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function ServicesSection() {
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
          Layanan Kami
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
              </div>
              <div className="space-y-2 p-5">
                <div className="flex items-center gap-2">{svc.icon}<h3 className="font-semibold text-white">{svc.title}</h3></div>
                <p className="text-sm text-neutral-300">{svc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
