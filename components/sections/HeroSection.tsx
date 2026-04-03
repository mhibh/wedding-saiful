'use client';

import { motion } from 'framer-motion';
import GoldDivider from '@/components/ui/GoldDivider';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center section-padding overflow-hidden">
      {/* Decorative background circles */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Corner ornaments */}
      <CornerOrnament className="absolute top-6 left-6 opacity-40" />
      <CornerOrnament className="absolute top-6 right-6 opacity-40 scale-x-[-1]" />
      <CornerOrnament className="absolute bottom-6 left-6 opacity-40 scale-y-[-1]" />
      <CornerOrnament className="absolute bottom-6 right-6 opacity-40 scale-[-1]" />

      <motion.div
        className="relative z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Bismillah */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <p
            className="font-arabic text-4xl sm:text-5xl leading-relaxed mb-2"
            style={{ color: '#C9A84C' }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="my-6"
        >
          <GoldDivider />
        </motion.div>

        {/* Assalamualaikum */}
        <motion.p
          className="font-heading text-lg sm:text-xl tracking-widest uppercase mb-2"
          style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Assalamualaikum
        </motion.p>

        <motion.p
          className="font-heading italic text-base sm:text-lg"
          style={{ color: '#6B6B6B' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Warahmatullahi Wabarakatuh
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="my-8"
        >
          <GoldDivider diamond />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="font-body text-sm tracking-[0.25em] uppercase"
          style={{ color: '#9B9B9B' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Undangan Walimatul Ursy
        </motion.p>

        <motion.p
          className="font-heading text-5xl sm:text-6xl mt-4"
          style={{ color: '#1A1A1A' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.9 }}
        >
          Saiful <span style={{ color: '#C9A84C' }}>&amp;</span> Aulia
        </motion.p>

        <motion.p
          className="font-body text-sm mt-6 tracking-widest"
          style={{ color: '#9B9B9B', letterSpacing: '0.15em' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          09 APRIL 2026 · MEMPAWAH
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="font-body text-xs tracking-widest" style={{ color: '#C9A84C' }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-10 origin-top"
          style={{ background: 'linear-gradient(to bottom, #C9A84C, transparent)' }}
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}

function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      className={className}
    >
      <path d="M2 2 L2 20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 2 L20 2" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 8 L8 18" stroke="#C9A84C" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M8 8 L18 8" stroke="#C9A84C" strokeWidth="0.7" strokeLinecap="round" />
      <circle cx="8" cy="8" r="2" fill="#C9A84C" fillOpacity="0.5" />
    </svg>
  );
}
