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
      className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-xl border border-border bg-surface"
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
      <img
        src={after}
        alt={afterAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={beforeAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full max-w-none object-cover"
          style={{ width: containerRef.current?.offsetWidth ?? "100%" }}
        />
        <span className="absolute left-3 top-3 rounded-md bg-background/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground backdrop-blur">
          Before
        </span>
      </div>
      <span className="absolute right-3 top-3 rounded-md bg-primary/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur">
        After
      </span>
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary"
        style={{ left: `${pos}%` }}
      >
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(pos)}
          aria-label="Reveal the restored roof"
          onChange={(e) => setPos(Number(e.target.value))}
          className="sr-only"
        />
        <div className="pointer-events-auto absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-background shadow-glow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary" aria-hidden="true">
            <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
