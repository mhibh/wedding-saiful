'use client';

interface GoldDividerProps {
  diamond?: boolean;
}

export default function GoldDivider({ diamond = false }: GoldDividerProps) {
  if (diamond) {
    return (
      <div className="flex items-center justify-center gap-3">
        <div
          className="flex-1 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }}
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="shrink-0"
        >
          <rect
            x="8"
            y="1"
            width="9"
            height="9"
            rx="0.5"
            transform="rotate(45 8 1)"
            fill="#C9A84C"
            fillOpacity="0.6"
          />
          <rect
            x="8"
            y="3"
            width="6"
            height="6"
            rx="0.5"
            transform="rotate(45 8 3)"
            fill="#C9A84C"
            fillOpacity="0.3"
          />
        </svg>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0 -mx-1">
          <circle cx="5" cy="5" r="4" stroke="#C9A84C" strokeWidth="1" />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="shrink-0"
        >
          <rect
            x="8"
            y="1"
            width="9"
            height="9"
            rx="0.5"
            transform="rotate(45 8 1)"
            fill="#C9A84C"
            fillOpacity="0.6"
          />
        </svg>
        <div
          className="flex-1 h-px"
          style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }}
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div
        className="flex-1 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }}
      />
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="shrink-0">
        <circle cx="3" cy="3" r="3" fill="#C9A84C" fillOpacity="0.5" />
      </svg>
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="shrink-0">
        <rect x="1" y="1" width="4" height="4" transform="rotate(45 3 3)" fill="#C9A84C" />
      </svg>
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="shrink-0">
        <circle cx="3" cy="3" r="3" fill="#C9A84C" fillOpacity="0.5" />
      </svg>
      <div
        className="flex-1 h-px"
        style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }}
      />
    </div>
  );
}
