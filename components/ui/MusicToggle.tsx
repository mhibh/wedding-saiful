'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MUSIC_SRC = '/music/nasheed.mp3';

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    audioRef.current = new Audio(MUSIC_SRC);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    // Try to auto-play immediately
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch {
        // Browser blocked autoplay (requires interaction first)
        // Fall back: play on first user interaction
        const handleInteraction = async () => {
          try {
            await audioRef.current?.play();
            setIsPlaying(true);
          } catch (err) {
            console.error(err);
          }
          window.removeEventListener('click', handleInteraction);
          window.removeEventListener('touchstart', handleInteraction);
          window.removeEventListener('scroll', handleInteraction);
        };
        window.addEventListener('click', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);
        window.addEventListener('scroll', handleInteraction);
      }
    };

    playAudio();

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  if (!mounted) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, duration: 0.5, ease: 'easeOut' as const }}
      onClick={toggleMusic}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      className="floating-btn"
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.div
            key="playing"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-end gap-[3px] h-5"
          >
            {[1, 2, 3].map((i) => (
              <motion.span
                key={i}
                className="w-[3px] rounded-full"
                style={{ background: '#C9A84C' }}
                animate={{ height: ['40%', '100%', '60%', '80%', '40%'] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8 + i * 0.1,
                  ease: 'easeInOut' as const,
                  delay: i * 0.15,
                }}
              />
            ))}
          </motion.div>
        ) : (
          <motion.svg
            key="paused"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#C9A84C"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
