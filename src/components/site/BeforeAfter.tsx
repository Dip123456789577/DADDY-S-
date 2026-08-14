import { useCallback, useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-card"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) setFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
    >
      {/* After image (background layer) */}
      <img
        src={after}
        alt={afterAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute right-4 top-4 z-10 rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-sm">
        AFTER
      </span>

      {/* Before image (clipped top layer) */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={beforeAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 z-10 rounded-md bg-background/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground backdrop-blur border border-white/10">
          BEFORE
        </span>
      </div>

      {/* Slider handle divider */}
      <div
        className="pointer-events-none absolute inset-y-0 z-20 w-0.5 bg-primary"
        style={{ left: `${pos}%` }}
      >
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(pos)}
          aria-label="Reveal before and after commercial roof comparison"
          onChange={(e) => setPos(Number(e.target.value))}
          className="sr-only"
        />
        <div className="pointer-events-auto absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-background shadow-glow transition-transform hover:scale-110 active:scale-95">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-primary"
            aria-hidden="true"
          >
            <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
