import { Link } from "@tanstack/react-router";
import logo from "@/assets/triade-logo.png";

export function SiteNav() {
  return (
    <nav className="fixed top-0 z-40 flex w-full items-center justify-between px-6 py-4 mix-blend-difference md:px-10 md:py-5">
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="TRÍADE" className="h-10 w-auto md:h-12" />
      </Link>
      <div className="flex items-center gap-5 md:gap-8">
        <a href="#travaux" className="text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent">
          Travaux
        </a>
        <a href="#services" className="hidden text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent sm:inline">
          Services
        </a>
        <a href="#studio" className="hidden text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent md:inline">
          Studio
        </a>
        <a href="#methode" className="hidden text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent md:inline">
          Méthode
        </a>
        <div className="hidden h-px w-8 bg-foreground/30 md:block" />
        <a
          href="#contact"
          className="rounded-full border border-foreground/30 px-5 py-2.5 text-[10px] uppercase tracking-widest transition-all hover:bg-foreground hover:text-background"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
