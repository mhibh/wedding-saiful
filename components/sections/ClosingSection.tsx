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

export default function ClosingSection() {
  return (
    <section className="section-padding bg-paper">
      <div className="max-w-2xl mx-auto text-center">
        {/* Closing Doa */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-8"
        >
          <GoldDivider diamond />
        </motion.div>

        <motion.p
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-arabic text-3xl sm:text-4xl mb-6 leading-loose"
          style={{ color: '#C9A84C' }}
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
        </motion.p>

        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-body text-xs italic mb-8"
          style={{ color: '#9B9B9B' }}
        >
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri"
          <br />
          (QS. Ar-Rum: 21)
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-8"
        >
          <GoldDivider />
        </motion.div>

        <motion.p
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-body text-base leading-relaxed mb-10"
          style={{ color: '#4A4A4A' }}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do&apos;a restu.
          Atas kehadiran dan do&apos;a restu Bapak/Ibu/Saudara/i, kami mengucapkan
          Jazakallahu Khairan.
        </motion.p>

        {/* Signatures */}
        <motion.div
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-12"
        >
          <p className="font-body text-sm mb-1" style={{ color: '#9B9B9B' }}>
            Dengan Penuh Cinta,
          </p>
          <p
            className="font-heading text-3xl sm:text-4xl"
            style={{ color: '#1A1A1A' }}
          >
            Saiful <span style={{ color: '#C9A84C' }}>&amp;</span> Aulia
          </p>
          <p className="font-body text-xs mt-2 tracking-widest" style={{ color: '#C9A84C' }}>
            09 · 04 · 2026
          </p>
        </motion.div>

        {/* Footer ornament */}
        <motion.div
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <GoldDivider diamond />
          <p
            className="font-arabic text-2xl mt-6"
            style={{ color: '#C9A84C' }}
          >
            وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ
          </p>
          <p
            className="font-body text-xs mt-2"
            style={{ color: '#9B9B9B' }}
          >
            Wassalamualaikum Warahmatullahi Wabarakatuh
          </p>
        </motion.div>
      </div>
    </section>
  );
}
