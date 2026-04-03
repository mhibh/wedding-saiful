'use client';

import { motion, type Variants } from 'framer-motion';
import GoldDivider from '@/components/ui/GoldDivider';

interface Props {
  guestName: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' as const },
  }),
};

export default function GuestGreetingSection({ guestName }: Props) {
  return (
    <section className="section-padding bg-paper">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-body text-xs tracking-[0.3em] uppercase mb-3"
          style={{ color: '#C9A84C' }}
        >
          Kepada Yth.
        </motion.p>

        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-heading text-3xl sm:text-4xl mb-6"
          style={{ color: '#1A1A1A' }}
        >
          {guestName}
        </motion.h2>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-8"
        >
          <GoldDivider />
        </motion.div>

        <motion.p
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-body text-base leading-relaxed"
          style={{ color: '#4A4A4A' }}
        >
          Dengan memohon Ridho dan Rahmat Allah SWT, kami mengundang
          Bapak/Ibu/Saudara/i untuk hadir pada tasyakuran pernikahan kami.
        </motion.p>
      </div>
    </section>
  );
}
