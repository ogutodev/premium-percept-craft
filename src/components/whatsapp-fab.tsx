import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Round WhatsApp button; fades out while #diagnostic (or the mobile menu) is visible. */
export function WhatsAppFab() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [off, setOff] = useState(false);
  useEffect(() => {
    const el = document.getElementById("diagnostic");
    if (!el) { setOff(false); return; }
    const io = new IntersectionObserver(([e]) => setOff(e.isIntersecting), { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, [pathname]);
  return (
    <a
      href="https://wa.me/41789670537?text=Bonjour%20TR%C3%8DADE%2C%20je%20souhaite%20un%20diagnostic%20gratuit."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire à TRÍADE sur WhatsApp"
      aria-hidden={off || undefined}
      tabIndex={off ? -1 : undefined}
      className={`wa-fab fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white hover:scale-105 md:bottom-8 md:right-8 ${off ? "is-off" : ""}`}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19.05 4.91A10 10 0 0 0 4.1 17.34L3 22l4.78-1.25A10 10 0 1 0 19.05 4.91Zm-7 16.18a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-2.84.74.76-2.77-.2-.31A8.2 8.2 0 1 1 12.05 21.1Zm4.5-6.13c-.25-.13-1.47-.73-1.7-.81-.23-.09-.4-.13-.56.13s-.64.81-.79.98-.29.19-.54.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.34a.45.45 0 0 0 0-.43c-.06-.13-.56-1.35-.77-1.85s-.41-.43-.56-.44h-.48a.93.93 0 0 0-.67.31 2.83 2.83 0 0 0-.88 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c.6.26 1.07.42 1.43.54a3.46 3.46 0 0 0 1.58.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .15-1.2c-.06-.11-.23-.18-.48-.31Z" />
      </svg>
    </a>
  );
}
