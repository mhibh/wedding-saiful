import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#FAFAF8] flex flex-col items-center justify-center p-6 text-center">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
      `}} />

      {/* Decorative Top Ornament */}
      <div className="text-gold font-arabic text-5xl mb-8 opacity-80">
        ﷽
      </div>

      {/* Animated Envelope SVG */}
      <div className="relative mb-8 animate-wiggle">
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-sm"
        >
          {/* Envelope Body */}
          <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          
          {/* X badge overlay */}
          <circle cx="19" cy="5" r="4.5" fill="#FAFAF8" stroke="#C9A84C" strokeWidth="1.5" />
          <path d="M17 3L21 7M21 3L17 7" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <h1 className="font-heading text-4xl md:text-5xl font-bold text-gold mb-4 tracking-wide">
        Kamu Tidak Diundang
      </h1>
      
      <p className="text-gray-500 font-body text-sm md:text-base max-w-md mx-auto leading-relaxed">
        Halaman ini tidak tersedia atau link undangan kamu salah.
      </p>
    </div>
  );
}
