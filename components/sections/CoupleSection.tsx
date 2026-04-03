'use client';

import { motion, type Variants } from 'framer-motion';
import GoldDivider from '@/components/ui/GoldDivider';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.8, ease: 'easeOut' as const },
  }),
};

export default function CoupleSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #FAFAF8 0%, #F5EDD8 50%, #FAFAF8 100%)',
      }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.04'%3E%3Cpath d='M30 30 L30 0 M30 30 L60 30 M30 30 L30 60 M30 30 L0 30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-body text-xs tracking-[0.3em] uppercase mb-8"
          style={{ color: '#C9A84C' }}
        >
          Mempelai
        </motion.p>

        {/* Groom */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="font-body text-xs tracking-widest uppercase mb-2" style={{ color: '#9B9B9B' }}>
            Mempelai Pria
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold mb-3" style={{ color: '#1A1A1A' }}>
            Kyai Muh. Saiful Anwar
          </h2>
          <p className="font-body text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
            Putra dari{' '}
            <span className="font-medium" style={{ color: '#4A4A4A' }}>
              Almaghfurlah DR. KH. Saudi Abd Razak
            </span>{' '}
            &amp;{' '}
            <span className="font-medium" style={{ color: '#4A4A4A' }}>
              Nyai Nuryati
            </span>
          </p>
        </motion.div>

        {/* Gold Ampersand Divider */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="my-10 flex flex-col items-center gap-4"
        >
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, #C9A84C)' }} />
          <span
            className="font-heading text-6xl"
            style={{ color: '#C9A84C', lineHeight: 1 }}
          >
            &amp;
          </span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, #C9A84C, transparent)' }} />
        </motion.div>

        {/* Bride */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="font-body text-xs tracking-widest uppercase mb-2" style={{ color: '#9B9B9B' }}>
            Mempelai Wanita
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold mb-3" style={{ color: '#1A1A1A' }}>
            Aulia Priyangka
          </h2>
          <p className="font-body text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
            Putri kelima dari{' '}
            <span className="font-medium" style={{ color: '#4A4A4A' }}>
              Bapak Munawar
            </span>{' '}
            &amp;{' '}
            <span className="font-medium" style={{ color: '#4A4A4A' }}>
              Ibu Hindun
            </span>
          </p>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-10"
        >
          <GoldDivider diamond />
        </motion.div>
      </div>
    </section>
  );
}
