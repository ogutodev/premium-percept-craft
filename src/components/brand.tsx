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

/** Renders a dictionary heading: lines separated by <br/>, highlight word last. */
export function HeadingText({ h }: { h: { lines: string[]; hl: string } }) {
  return (
    <>
      {h.lines.map((l, i) => (
        <span key={i}>
          {l}
          {i < h.lines.length - 1 ? <br /> : " "}
        </span>
      ))}
      <Highlight>{h.hl}</Highlight>
    </>
  );
}
