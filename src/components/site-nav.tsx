import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="fixed top-0 z-40 flex w-full items-center justify-between px-6 py-5 mix-blend-difference md:px-10 md:py-6">
      <Link to="/" className="font-display text-xl tracking-tight">
        TRÍADE
      </Link>
      <div className="flex items-center gap-5 md:gap-8">
        <a href="#work" className="text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent">
          Work
        </a>
        <a href="#services" className="hidden text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent sm:inline">
          Services
        </a>
        <a href="#process" className="hidden text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent md:inline">
          Process
        </a>
        <div className="hidden h-px w-8 bg-foreground/30 md:block" />
        <a
          href="#contact"
          className="rounded-full border border-foreground/20 px-4 py-2 text-[10px] uppercase tracking-widest transition-all hover:bg-foreground hover:text-background"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
