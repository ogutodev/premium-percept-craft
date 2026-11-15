import type { ReactNode } from "react";

/** Lima keyword band (Instrument Serif italic). */
export function Highlight({ children }: { children: ReactNode }) {
  return <span className="hl">{children}</span>;
}

/** Uppercase meta line with a 2px rule under it. */
export function MetaRow({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <div className={`meta-row ${className}`}>
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}
