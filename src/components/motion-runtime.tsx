import { useEffect } from "react";

/**
 * Global scroll-reveal: any element with `data-reveal` fades + lifts when it
 * enters the viewport. Disabled when the user prefers reduced motion.
 * Mounts once at the root.
 */
export function MotionRuntime() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Auto-reveal every <section> on the home/content pages unless opted out.
    const sections = document.querySelectorAll<HTMLElement>("section");
    sections.forEach((el) => {
      if (!el.hasAttribute("data-reveal") && !el.hasAttribute("data-no-reveal")) {
        el.setAttribute("data-reveal", "");
      }
    });

    if (reduce) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const observe = () =>
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)")
        .forEach((el) => io.observe(el));

    observe();
    // Re-observe shortly after route transitions add new DOM.
    const t = window.setInterval(observe, 800);
    const stop = window.setTimeout(() => window.clearInterval(t), 6000);

    return () => {
      io.disconnect();
      window.clearInterval(t);
      window.clearTimeout(stop);
    };
  }, []);

  return null;
}
