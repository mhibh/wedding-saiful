import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Undangan Pernikahan Saiful & Aulia';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FAFAF8',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
        }}
      >
        {/* Gold top border */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '8px',
          background: '#C9A84C'
        }} />

        {/* Gold bottom border */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '8px',
          background: '#C9A84C'
        }} />

        {/* Bismillah text */}
        <div style={{
          fontSize: 28,
          color: '#C9A84C',
          marginBottom: 24,
          letterSpacing: 4
        }}>
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </div>

        {/* Ornament */}
        <div style={{
          fontSize: 20,
          color: '#E8D5A3',
          marginBottom: 32
        }}>
          ✦ ── ── ── ✦ ── ── ── ✦
        </div>

        {/* Main title */}
        <div style={{
          fontSize: 52,
          fontWeight: 'bold',
          color: '#1A1A1A',
          marginBottom: 16,
          textAlign: 'center'
        }}>
          Saiful & Aulia
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: 24,
          color: '#C9A84C',
          marginBottom: 32,
          textAlign: 'center'
        }}>
          Tasyakuran Pernikahan
        </div>

        {/* Date */}
        <div style={{
          fontSize: 20,
          color: '#666',
          textAlign: 'center'
        }}>
          Kamis, 09 April 2026  •  12:30 – 17:00 WIB
        </div>

        {/* Ornament bottom */}
        <div style={{
          fontSize: 20,
          color: '#E8D5A3',
          marginTop: 32
        }}>
          ✦ ── ── ── ✦ ── ── ── ✦
        </div>
      </div>
    ),
    { ...size }
  );
}
