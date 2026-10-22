import { Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-12"];
const aspects = ["aspect-16/10", "aspect-16/10 md:aspect-auto", "aspect-21/9"];
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactSection, BookCallButton } from "@/components/contact-section";
import { ShowreelMedia } from "@/components/showreel-media";
import founder1 from "@/assets/founder-1.webp";
import founder2 from "@/assets/founder-2.webp";
import founder3 from "@/assets/founder-3.webp";
import feedRestaurant from "@/assets/feed-restaurant.webp";
import feedWatch from "@/assets/feed-watch.webp";
import feedBoutique from "@/assets/feed-boutique.webp";
import feedFood from "@/assets/feed-food.webp";
import feedAerialCar from "@/assets/feed-aerial-car.webp";
import feedBtsCamera from "@/assets/feed-bts-camera.webp";
import feedEditing from "@/assets/feed-editing.webp";
import feedCampaignNoel from "@/assets/feed-campaign-noel.webp";
import feedEvent from "@/assets/feed-event.webp";
import feedPhone from "@/assets/feed-phone.webp";
import feedWedding from "@/assets/feed-wedding.webp";


const services = [
  {
    n: "01",
    title: "Estratégia de marca",
    body: "Identidades visuais criadas para durar, elevar o valor da marca e ser reconhecidas de imediato.",
  },
  {
    n: "02",
    title: "Produção cinematográfica",
    body: "Filmes publicitários autorais — histórias que prendem o olhar, não se perdem na rolagem.",
  },
  {
    n: "03",
    title: "Fotografia & direção de arte",
    body: "Um olhar editorial que coloca sua marca ao lado das grandes referências do mercado.",
  },
  {
    n: "04",
    title: "Presença nas redes",
    body: "Sistemas de conteúdo pensados para marcar presença em Reels, TikTok e feeds com precisão.",
  },
  {
    n: "05",
    title: "Arquitetura digital",
    body: "Sites sob medida, concebidos como vitrines digitais que convertem com elegância.",
  },
  {
    n: "06",
    title: "Crescimento em mídia",
    body: "Campanhas pagas movidas por imagens tão fortes que vão além do investimento em mídia.",
  },
];

const process = [
  { n: "01", title: "Estratégia", body: "Diagnóstico do posicionamento, do público e da distância visual em relação à referência do mercado." },
  { n: "02", title: "Production", body: "Direção, luz, locação, elenco — cada plano pensado com intenção." },
  { n: "03", title: "Montagem", body: "Cor, som e ritmo unidos em uma narrativa que seu público não consegue ignorar." },
  { n: "04", title: "Distribuição", body: "Distribuição e amplificação paga que transformam seu conteúdo em presença mensurável." },
];

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav />

      {/* HERO — split editorial avec portrait */}
      <section className="relative flex min-h-screen items-center px-6 pt-28 md:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 30%, color-mix(in oklab, var(--accent) 35%, transparent), transparent), radial-gradient(45% 40% at 10% 80%, color-mix(in oklab, var(--brand) 50%, transparent), transparent)",
          }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-6 animate-reveal-up font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
              Genebra · Estúdio criativo
            </p>
            <h1
              className="mb-10 font-display text-balance text-5xl italic leading-[0.95] sm:text-6xl md:text-7xl lg:text-[6.5rem]"
              style={{ animation: "var(--animate-reveal-up)", animationDelay: "150ms" }}
            >
              A maioria das marcas não precisa{" "}
              <span className="text-foreground/40">de mais posts.</span>
              <br />
              Elas precisam de{" "}
              <span className="relative inline-block">
                presença.
                <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-accent/60" />
              </span>
            </h1>
            <div
              className="flex flex-col items-start gap-10 md:flex-row md:items-end"
              style={{ animation: "var(--animate-reveal-up)", animationDelay: "300ms" }}
            >
              <div className="max-w-md space-y-4">
              <p className="max-w-md text-balance text-lg leading-relaxed text-muted-foreground">
                A TRÍADE cria narrativas visuais estratégicas que transformam empresas em
                marcas premium com autoridade.
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Estúdio bilíngue francês · português, em Genebra.
              </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <BookCallButton className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-xs font-medium uppercase tracking-widest text-background transition-colors hover:bg-accent hover:text-accent-foreground">
                  Agendar uma chamada
                  <span aria-hidden>→</span>
                </BookCallButton>
                <a
                  href="#travaux"
                  className="inline-flex items-center gap-3 rounded-full border border-foreground/25 px-7 py-4 text-xs font-medium uppercase tracking-widest transition-colors hover:border-foreground"
                >
                  Ver nossos trabalhos
                </a>
              </div>
            </div>
          </div>

          <div
            className="relative lg:col-span-5"
            style={{ animation: "var(--animate-reveal-up)", animationDelay: "450ms" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] ring-1 ring-border">
              <ShowreelMedia poster={founder3} alt="Fundador da TRÍADE dirigindo uma filmagem" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Augusto Sousa · Fundador
                </p>
                <p className="mt-2 font-display text-2xl italic">Direção & Imagem</p>
              </div>
            </div>
            <div className="absolute -left-6 -top-6 hidden size-32 rounded-full border border-accent/40 lg:block" />
            <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-card/90 px-5 py-4 backdrop-blur ring-1 ring-border lg:block">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                Estúdio
              </p>
              <p className="font-display text-lg italic">Cinematic Authority</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:flex">
          <span className="h-px w-12 bg-foreground/30" />
          Explore
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="travaux" className="px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between md:mb-20">
            <div className="space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
                01 — Seleção
              </span>
              <h2 className="font-display text-4xl italic md:text-6xl">Autoridade visual.</h2>
            </div>
            <a
              href="#contact"
              className="hidden rounded-full border border-foreground/30 px-5 py-2.5 text-xs uppercase tracking-widest transition-all hover:border-accent hover:text-accent md:inline-block"
            >
              Encomendar um projeto
            </a>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {projects.map((w, i) => (
              <Link
                key={w.slug}
                to="/pt/travaux/$slug"
                params={{ slug: w.slug }}
                className={`group relative col-span-12 overflow-hidden rounded-[1.75rem] bg-card ring-1 ring-border ${spans[i % spans.length]}`}
              >
                <div className={`relative ${aspects[i % aspects.length]} h-full overflow-hidden`}>
                  <img
                    src={w.cover}
                    alt={w.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-cinema)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-accent">
                      {w.service} · {w.location}
                    </p>
                    <h3 className="font-display text-2xl italic md:text-3xl">{w.name}</h3>
                    <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
                      Ver o estudo de caso →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO — coulisses & atmosphère */}
      <section id="studio" className="px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7 space-y-6">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
                02 — O estúdio
              </span>
              <h2 className="font-display text-4xl italic leading-[1.05] md:text-6xl">
                Uma assinatura.
                <br />
                Uma obsessão pelo detalhe.
              </h2>
            </div>
            <p className="md:col-span-5 text-balance text-base leading-relaxed text-muted-foreground">
              A TRÍADE é conduzida como uma casa de criação — cada imagem carrega uma intenção,
              cada plano responde a uma estratégia. De Genebra, trabalhamos para marcas
              que não se contentam com o comum.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-7 relative aspect-[4/5] md:aspect-[16/11] overflow-hidden rounded-[2rem] ring-1 ring-border">
              <img src={founder1} alt="Direção de arte no set" className="size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Bastidores · 02:14</p>
                <p className="mt-2 font-display text-2xl italic md:text-3xl">O instante capturado.</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-cols-1 gap-4 md:gap-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-border">
                <img src={founder2} alt="Enquadramento e composição cinematográfica" className="size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="rounded-[2rem] bg-card p-8 ring-1 ring-border">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent">Abordagem</p>
                <p className="mt-4 font-display text-xl italic leading-snug">
                  “Não produzimos conteúdo. Construímos percepção.”
                </p>
                <p className="mt-6 text-sm text-muted-foreground">— Augusto Sousa, fundador</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FONDATEUR — Augusto Sousa */}
      <section id="fondateur" className="border-t border-border px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] ring-1 ring-border shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
              <img
                src={founder1}
                alt="Augusto Sousa, fundador e diretor criativo da TRÍADE"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Fundador · CEO
                </p>
                <p className="mt-2 font-display text-3xl italic">Augusto Sousa</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
              03 — O olhar por trás da marca
            </span>
            <h2 className="font-display text-4xl italic leading-[1.05] md:text-6xl">
              Uma visão criativa.
              <br />
              <span className="text-foreground/50">Uma assinatura suíça.</span>
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Augusto Sousa é o fundador e diretor criativo da TRÍADE. Empreendedor radicado na
                Suíça, conduz cada projeto com rigor autoral — do primeiro briefing
                estratégico à última correção de cor.
              </p>
              <p>
                Sua convicção é simples: uma marca não se constrói publicando mais,
                mas definindo como é percebida. É essa obsessão que alimenta a assinatura
                visual da TRÍADE e o trabalho realizado para seus clientes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Função
                </p>
                <p className="mt-2 font-display text-lg italic">Diretor criativo</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Base
                </p>
                <p className="mt-2 font-display text-lg italic">Genebra, Suíça</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Expertise
                </p>
                <p className="mt-2 font-display text-lg italic">Imagem & estratégia</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* DILEMME */}
      <section className="relative border-y border-border px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-5xl">
          <span className="mb-10 block text-center font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
            04 — O dilema
          </span>
          <h2 className="text-balance text-center font-display text-4xl leading-[1.05] md:text-7xl">
            Bom conteúdo já não basta.
            <br />
            <span className="italic text-foreground/50">Hoje, é preciso</span>{" "}
            <span className="italic">prender o olhar.</span>
          </h2>
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-border bg-secondary/40 p-8 md:p-10">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Sem a TRÍADE
              </p>
              <p className="text-balance italic leading-relaxed text-muted-foreground">
                “Publicamos todos os dias, mas nossa marca continua pequena. Somos iguais a todos
                os concorrentes — e o preço vira o único assunto.”
              </p>
            </div>
            <div className="rounded-[2rem] border border-foreground bg-foreground p-8 text-background md:p-10">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
                Com a TRÍADE
              </p>
              <p className="text-balance leading-relaxed">
                “Nossa marca tem a estatura de uma instituição. As pessoas param para olhar. O preço já não
                é o assunto — a percepção tomou seu lugar.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-foreground px-6 py-32 text-background md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-6xl italic leading-none md:text-8xl">Nosso arsenal.</h2>
            <p className="max-w-sm text-balance text-base leading-relaxed opacity-70">
              Um estúdio integrado de ponta a ponta — estratégia, narrativa, imagem e crescimento,
              sob o mesmo teto.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2 md:gap-x-20">
            {services.map((s) => (
              <div key={s.n} className="group border-t border-background/10 pt-8">
                <span className="font-mono text-xs opacity-50">{s.n}</span>
                <h3 className="mt-4 font-display text-3xl transition-colors group-hover:text-accent md:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed opacity-70">{s.body}</p>
                <a
                  href="/pt/solutions"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest opacity-70 transition-all hover:gap-3 hover:text-accent hover:opacity-100"
                >
                  Saiba mais <span aria-hidden>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section id="methode" className="px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 space-y-4">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
              05 — Método
            </span>
            <h2 className="font-display text-4xl italic md:text-6xl">Um processo cinematográfico.</h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] ring-1 ring-border">
            <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-4">
              {process.map((p) => (
                <div
                  key={p.n}
                  className="group bg-background p-8 transition-colors hover:bg-secondary/40 md:p-10"
                >
                  <div className="mb-12 flex items-center justify-between">
                    <span className="font-mono text-xs text-accent">{p.n}</span>
                    <span className="size-2 rounded-full bg-accent" />
                  </div>
                  <h3 className="mb-4 font-display text-3xl italic">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RÉSEAUX SOCIAUX — showcase agence */}
      <section className="relative overflow-hidden px-6 py-32 md:px-10 md:py-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(50% 40% at 85% 20%, color-mix(in oklab, var(--accent) 25%, transparent), transparent), radial-gradient(40% 35% at 10% 85%, color-mix(in oklab, var(--brand) 40%, transparent), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
                06 — Presença nas redes
              </span>
              <h2 className="font-display text-4xl italic leading-[1.05] md:text-6xl">
                Conteúdo pensado
                <br />
                para <span className="text-foreground/50">marcas.</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Reels, campanhas, fotografia, motion — um ecossistema visual pensado para seus
              clientes, seus produtos e seu universo.
            </p>
          </div>

          {/* Masonry éditoriale */}
          <div className="grid grid-cols-12 gap-3 md:gap-5">
            {/* Reel vertical — restaurant */}
            <article className="group relative col-span-6 md:col-span-3 row-span-2 aspect-[9/16] overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img src={feedRestaurant} alt="Reel de gastronomia" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/30" />
              <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-background/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-foreground backdrop-blur">
                <span className="size-1.5 rounded-full bg-red-500" /> Reel
              </div>
              <div className="absolute inset-x-3 bottom-3 space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Reel · Gastronomia</p>
                <p className="font-display text-base italic leading-tight">A arte à mesa.</p>
              </div>
            </article>

            {/* Campagne large — horlogerie */}
            <article className="group relative col-span-6 md:col-span-5 aspect-[4/3] overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img src={feedWatch} alt="Campanha de relojoaria" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/10 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full bg-foreground px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-background">
                Campanha
              </div>
              <div className="absolute inset-x-4 bottom-4">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Campanha · Relojoaria</p>
                <p className="mt-1 font-display text-xl italic md:text-2xl">O tempo como assinatura.</p>
              </div>
            </article>

            {/* Mockup phone — Instagram UI */}
            <article className="group relative col-span-12 md:col-span-4 aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-card ring-1 ring-border">
              <img src={feedPhone} alt="Mockup do Instagram" className="size-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-background/80" />
              {/* Faux post UI */}
              <div className="absolute left-4 top-4 right-4 flex items-center gap-2">
                <div className="size-7 rounded-full bg-accent/80 ring-2 ring-background" />
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest">triadepublicite</p>
                  <p className="font-mono text-[8px] text-muted-foreground">Genebra · Patrocinado</p>
                </div>
                <span className="font-mono text-foreground/60">···</span>
              </div>
              <div className="absolute inset-x-4 bottom-4 space-y-2 rounded-2xl bg-background/60 p-4 backdrop-blur-md ring-1 ring-border">
                <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                  <span>♥  💬  ↗</span>
                  <span>🔖</span>
                </div>
                <p className="font-display text-sm italic leading-snug">
                  “Uma marca que prende o olhar. Não que passa pelo feed.”
                </p>
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Post patrocinado</p>
              </div>
            </article>

            {/* Boutique landscape */}
            <article className="group relative col-span-6 md:col-span-4 aspect-[5/4] overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img src={feedBoutique} alt="Direção de arte para boutique" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute inset-x-4 bottom-4">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Varejo · Direção</p>
                <p className="mt-1 font-display text-lg italic">Universo boutique</p>
              </div>
            </article>

            {/* Reel vertical — voiture */}
            <article className="group relative col-span-6 md:col-span-3 row-span-2 aspect-[9/16] overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img src={feedAerialCar} alt="Produção aérea automotiva" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/30" />
              <div className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-accent-foreground">
                4K · Drone
              </div>
              <div className="absolute inset-x-3 bottom-3 space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Reel · Automotivo</p>
                <p className="font-display text-base italic leading-tight">Cinema de marca.</p>
              </div>
            </article>

            {/* BTS caméra */}
            <article className="group relative col-span-12 md:col-span-3 aspect-square overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img src={feedBtsCamera} alt="Bastidores de filmagem" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              <div className="absolute left-3 top-3 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-foreground">
                <span className="size-1.5 animate-pulse rounded-full bg-accent" /> Filmagem
              </div>
              <div className="absolute inset-x-3 bottom-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">BTS · 03</p>
                <p className="mt-1 font-display text-base italic">Bastidores</p>
              </div>
            </article>

            {/* Food éditorial */}
            <article className="group relative col-span-6 md:col-span-3 aspect-square overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img src={feedFood} alt="Editorial gastronômico" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/75 to-transparent" />
              <div className="absolute inset-x-3 bottom-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Fotografia</p>
                <p className="mt-1 font-display text-base italic">Editorial</p>
              </div>
            </article>

            {/* Editing process */}
            <article className="group relative col-span-6 md:col-span-3 aspect-square overflow-hidden rounded-[1.5rem] ring-1 ring-border bg-card">
              <img src={feedEditing} alt="Estúdio de edição" className="size-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-background/10" />
              <div className="absolute inset-x-3 bottom-3 space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Pós-produção</p>
                <p className="font-display text-base italic">Cor · Som · Ritmo</p>
              </div>
            </article>

            {/* Campagne Noël — large */}
            <article className="group relative col-span-12 md:col-span-6 aspect-[16/9] overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img src={feedCampaignNoel} alt="Campanha sazonal" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex flex-col justify-between p-5 md:p-7 max-w-[60%]">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Campanha sazonal</p>
                <div>
                  <p className="font-display text-2xl italic leading-tight md:text-3xl">Uma marca que se espera.</p>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    Reel · Festas de fim de ano
                  </p>
                </div>
              </div>
            </article>

            {/* Event */}
            <article className="group relative col-span-6 md:col-span-3 aspect-[4/5] overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img src={feedEvent} alt="Evento de marca" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute inset-x-3 bottom-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Evento</p>
                <p className="mt-1 font-display text-base italic">Cobertura ao vivo</p>
              </div>
            </article>

            {/* Wedding / lifestyle */}
            <article className="group relative col-span-6 md:col-span-3 aspect-[4/5] overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img src={feedWedding} alt="Reportagem lifestyle" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute inset-x-3 bottom-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Lifestyle</p>
                <p className="mt-1 font-display text-base italic">Narrativa de marca</p>
              </div>
            </article>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden px-6 py-40 text-center md:px-10 md:py-56">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-accent to-transparent"
        />
        <div className="mx-auto max-w-4xl space-y-12">
          <h2 className="text-balance font-display text-5xl italic leading-[1.05] md:text-7xl lg:text-8xl">
            Sua empresa já tem potencial.
            <br />
            <span className="text-accent">Falta o posicionamento.</span>
          </h2>
          <p className="mx-auto max-w-xl text-balance text-lg text-muted-foreground">
            Vamos construir algo de que as pessoas se lembrem — e que seus
            concorrentes estudem em silêncio.
          </p>
          <div className="pt-4">
            <a
              href="mailto:info@triadepublicite.ch"
              className="inline-flex items-center gap-4 rounded-full bg-accent px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Iniciar uma conversa
              <span aria-hidden>→</span>
            </a>
          </div>
          <p className="pt-12 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Genebra — Suíça — Internacional
          </p>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}
