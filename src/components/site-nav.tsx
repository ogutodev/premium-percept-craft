import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/triade-logo.png";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`nav-shell fixed top-0 z-40 flex w-full items-center justify-between px-6 py-4 md:px-10 ${
        scrolled ? "is-scrolled py-3 md:py-3" : "mix-blend-difference md:py-5"
      }`}
    >
      <Link to="/" className="flex items-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] hover:scale-[1.03]">
        <img src={logo} alt="TRÍADE" className="h-10 w-auto md:h-12" />
      </Link>
      <div className="flex items-center gap-5 md:gap-8">
        <a href="/solutions" className="text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent">
          Solutions
        </a>
        <a href="/contenus" className="text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent">
          Contenus
        </a>
        <a href="/#travaux" className="hidden text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent sm:inline">
          Travaux
        </a>
        <a href="/#studio" className="hidden text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent md:inline">
          Studio
        </a>
        <a href="/#methode" className="hidden text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent md:inline">
          Méthode
        </a>
        <div className="hidden h-px w-8 bg-foreground/30 md:block" />
        <a
          href="#contact"
          className="rounded-full border border-foreground/30 px-5 py-2.5 text-[10px] uppercase tracking-widest transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-y-0.5 hover:border-accent hover:bg-foreground hover:text-background"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
