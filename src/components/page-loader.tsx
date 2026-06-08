import { useEffect, useState } from "react";
import logo from "@/assets/triade-logo.png";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 200 : 900;
    const fadeAt = setTimeout(() => setFading(true), duration);
    const hideAt = setTimeout(() => setVisible(false), duration + 600);
    return () => {
      clearTimeout(fadeAt);
      clearTimeout(hideAt);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ease-[cubic-bezier(0.2,0,0,1)] ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <img
          src={logo}
          alt=""
          className="h-14 w-auto animate-[loader-pulse_1.6s_ease-in-out_infinite] md:h-16"
        />
        <div className="h-px w-24 overflow-hidden bg-white/10">
          <div className="h-full w-full origin-left animate-[loader-bar_1.1s_cubic-bezier(0.2,0,0,1)_forwards] bg-accent" />
        </div>
      </div>
    </div>
  );
}
