import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

const SEL = "[data-reveal],[data-reveal-stagger],[data-logos],[data-clip],[data-rules],.hl";

/** One-shot IntersectionObserver reveals. Hidden states only exist under html.js-motion. */
export function MotionRuntime() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("js-motion")) return;
    document.querySelectorAll<HTMLElement>("[data-reveal-stagger],[data-logos],[data-rules]").forEach((g) => {
      Array.from(g.children).forEach((c, i) => (c as HTMLElement).style.setProperty("--i", String(i)));
      g.querySelectorAll<HTMLElement>(".rule-top").forEach((c, i) => c.style.setProperty("--i", String(i)));
    });
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(SEL).forEach((el) => el.classList.add("is-revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            // clip-path hides the element from IO, so [data-clip] is observed via its parent.
            e.target.querySelectorAll(":scope > [data-clip]").forEach((c) => c.classList.add("is-revealed"));
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll(`:is(${SEL}):not(.is-revealed)`).forEach((el) => {
      io.observe(el.hasAttribute("data-clip") && el.parentElement ? el.parentElement : el);
    });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
