'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Wedding date: April 09, 2026 12:30 WIB (UTC+7)
const WEDDING_DATE = new Date('2026-04-09T12:30:00+07:00');

interface TimeUnit {
  value: number;
  label: string;
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function getTimeLeft(): TimeUnit[] {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return [
      { value: 0, label: 'Hari' },
      { value: 0, label: 'Jam' },
      { value: 0, label: 'Menit' },
      { value: 0, label: 'Detik' },
    ];
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return [
    { value: days, label: 'Hari' },
    { value: hours, label: 'Jam' },
    { value: minutes, label: 'Menit' },
    { value: seconds, label: 'Detik' },
  ];
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsOver(WEDDING_DATE.getTime() <= Date.now());
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
      setIsOver(WEDDING_DATE.getTime() <= Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FAFAF8 0%, #F0E8D0 50%, #FAFAF8 100%)',
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-body text-xs tracking-[0.3em] uppercase mb-3"
          style={{ color: '#C9A84C' }}
        >
          {isOver ? 'Alhamdulillah' : 'Menghitung Hari'}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-heading text-3xl sm:text-4xl mb-10"
          style={{ color: '#1A1A1A' }}
        >
          {isOver ? 'Pernikahan Telah Berlangsung' : 'Menuju Hari Bahagia'}
        </motion.h2>

        {mounted && (
          <div className="grid grid-cols-4 gap-3 sm:gap-6">
            {timeLeft.map((unit, i) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                className="gold-card rounded-2xl p-4 sm:p-6 bg-white/70 backdrop-blur-sm flex flex-col items-center"
              >
                <span
                  className="font-heading text-3xl sm:text-5xl font-bold tabular-nums"
                  style={{ color: '#C9A84C' }}
                >
                  {pad(unit.value)}
                </span>
                <span
                  className="font-body text-xs mt-2 tracking-widest uppercase"
                  style={{ color: '#9B9B9B' }}
                >
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-body text-sm mt-8"
          style={{ color: '#9B9B9B' }}
        >
          Kamis, 09 April 2026 · 12:30 WIB
        </motion.p>
      </div>
    </section>
  );
}
