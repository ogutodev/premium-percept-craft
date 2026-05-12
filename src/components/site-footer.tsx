export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:justify-between">
        <div className="space-y-6">
          <div className="font-display text-3xl italic">TRÍADE</div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Elevating Swiss brands through cinematic narrative and strategic design.
          </p>
          <div className="flex gap-6">
            <a href="https://instagram.com/triadepublicite" className="font-mono text-xs uppercase text-muted-foreground transition-colors hover:text-accent">
              Instagram
            </a>
            <a href="#" className="font-mono text-xs uppercase text-muted-foreground transition-colors hover:text-accent">
              LinkedIn
            </a>
            <a href="#" className="font-mono text-xs uppercase text-muted-foreground transition-colors hover:text-accent">
              Vimeo
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 md:gap-20">
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent">Contact</h4>
            <a href="tel:+41768402732" className="block text-sm transition-colors hover:text-accent">
              +41 76 840 27 32
            </a>
            <a href="mailto:info@triadepublicite.ch" className="block text-sm transition-colors hover:text-accent">
              info@triadepublicite.ch
            </a>
          </div>
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent">Studio</h4>
            <p className="text-sm">
              Geneva
              <br />
              Switzerland
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-7xl items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>© 2026 TRÍADE Marketing &amp; Publicité</span>
        <span className="hidden md:inline">Crafting Authority</span>
      </div>
    </footer>
  );
}
