'use client';

import { motion, type Variants } from 'framer-motion';
import GoldDivider from '@/components/ui/GoldDivider';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' as const },
  }),
};

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  custom: number;
}

function InfoCard({ icon, label, value, sub, custom }: InfoCardProps) {
  return (
    <motion.div
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="gold-card rounded-2xl p-6 flex flex-col items-center text-center gap-3 bg-white/60 backdrop-blur-sm"
    >
      <div className="text-3xl mb-1">{icon}</div>
      <p className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: '#C9A84C' }}>
        {label}
      </p>
      <p className="font-heading text-xl sm:text-2xl font-semibold" style={{ color: '#1A1A1A' }}>
        {value}
      </p>
      {sub && (
        <p className="font-body text-sm" style={{ color: '#6B6B6B' }}>
          {sub}
        </p>
      )}
    </motion.div>
  );
}

export default function EventSection() {
  return (
    <section className="section-padding bg-paper">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-body text-xs tracking-[0.3em] uppercase mb-3"
          style={{ color: '#C9A84C' }}
        >
          Waktu &amp; Tempat
        </motion.p>

        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-heading text-3xl sm:text-4xl mb-8"
          style={{ color: '#1A1A1A' }}
        >
          Detail Acara
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <InfoCard
            custom={2}
            icon={<span style={{ color: '#C9A84C' }}>📅</span>}
            label="Hari & Tanggal"
            value="Kamis, 09 April 2026"
          />
          <InfoCard
            custom={3}
            icon={<span style={{ color: '#C9A84C' }}>🕐</span>}
            label="Waktu"
            value="12:30 – 17:00 WIB"
          />
          <InfoCard
            custom={4}
            icon={<span style={{ color: '#C9A84C' }}>📍</span>}
            label="Tempat"
            value="Pondok Pesantren Al-Qomar"
            sub="Jl. Daeng Menambon, Desa Kuala Secapah, Kec. Mempawah Hilir"
          />
        </div>

        {/* Map link */}
        <motion.div
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <a
            href="https://maps.google.com/?q=Pondok+Pesantren+Al-Qomar+Mempawah+Hilir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-body font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #E8D5A3)',
              color: '#1A1A1A',
            }}
          >
            <span>🗺️</span>
            Buka Google Maps
          </a>
        </motion.div>

        <motion.div
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-10"
        >
          <GoldDivider />
        </motion.div>
      </div>
    </section>
  );
}
