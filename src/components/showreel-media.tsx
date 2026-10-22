import { useEffect, useState } from "react";
import { SHOWREEL } from "@/lib/site-config";

/** Hero media: muted looping showreel when available, otherwise the poster photo. */
export function ShowreelMedia({ poster, alt }: { poster: string; alt: string }) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!SHOWREEL.webm && !SHOWREEL.mp4) return;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    const saveData = nav.connection?.saveData === true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    if (reduce || (mobile && saveData)) return;
    setPlay(true);
  }, []);

  if (!play) return <img src={poster} alt={alt} className="size-full object-cover" />;
  return (
    <video className="size-full object-cover" poster={poster} autoPlay muted loop playsInline preload="metadata" aria-label={alt}>
      {SHOWREEL.webm && <source src={SHOWREEL.webm} type="video/webm" />}
      {SHOWREEL.mp4 && <source src={SHOWREEL.mp4} type="video/mp4" />}
    </video>
  );
}
