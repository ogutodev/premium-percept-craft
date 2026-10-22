import { useMemo, useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import workWatch from "@/assets/work-watch.webp";
import workFashion from "@/assets/work-fashion.webp";
import workVilla from "@/assets/work-villa.webp";
import workNoir from "@/assets/work-noir.webp";
import feedRestaurant from "@/assets/feed-restaurant.webp";
import feedAerialCar from "@/assets/feed-aerial-car.webp";
import feedBoutique from "@/assets/feed-boutique.webp";
import feedEditing from "@/assets/feed-editing.webp";
import feedCampaignNoel from "@/assets/feed-campaign-noel.webp";
import feedPhone from "@/assets/feed-phone.webp";


type Solution = {
  slug: string;
  title: string;
  short: string;
  inclus: string[];
  benefices: string[];
  livrables: string[];
  delai: string;
  pour: string;
  image: string;
};

type Objective = {
  id: string;
  kicker: string;
  title: string;
  pitch: string;
  solutions: Solution[];
};

const objectives: Objective[] = [
  {
    id: "visibilite",
    kicker: "Objetivo 01",
    title: "Quero mais visibilidade",
    pitch:
      "Dê voz à sua marca nos canais certos, com conteúdos criados para conquistar a atenção desde o primeiro segundo.",
    solutions: [
      {
        slug: "reseaux-sociaux",
        title: "Gestão de redes sociais",
        short: "Uma presença editorial consistente, premium e estratégica no Instagram, TikTok e LinkedIn.",
        inclus: [
          "Estratégia editorial mensal",
          "Calendário de publicações",
          "Criação de peças visuais & Reels",
          "Gestão de comunidade",
        ],
        benefices: [
          "Identidade de marca consistente",
          "Engajamento ampliado",
          "Público qualificado em Genebra",
        ],
        livrables: ["12 a 20 publicações / mês", "4 a 8 Reels", "Relatório mensal"],
        delai: "Início em até 7 dias",
        pour: "PMEs, restaurantes, marcas de lifestyle e hotéis na Suíça francófona.",
        image: feedRestaurant,
      },
      {
        slug: "creation-de-contenu",
        title: "Criação de conteúdo",
        short: "Fotos, vídeos e formatos para redes sociais sob medida para seus canais, sem conteúdo genérico.",
        inclus: [
          "Direção de arte",
          "Produção de foto & vídeo",
          "Edição e pós-produção",
          "Adaptações para múltiplos formatos",
        ],
        benefices: [
          "Acervo exclusivo de conteúdo",
          "Consistência visual premium",
          "Mais tempo para sua equipe",
        ],
        livrables: ["Pacote mensal ou pontual", "Arquivos em alta resolução entregues na nuvem"],
        delai: "Entrega em 10 a 15 dias",
        pour: "Marcas que querem deixar de improvisar seu conteúdo.",
        image: feedEditing,
      },
      {
        slug: "production-video",
        title: "Produção de vídeo",
        short: "Filmes de marca, campanhas e peças cinematográficas criados para deixar uma impressão duradoura.",
        inclus: [
          "Pré-produção & roteiro",
          "Filmagem cinematográfica",
          "Color grading & sound design",
          "Versões curtas para redes sociais",
        ],
        benefices: ["Estética cinematográfica", "Narrativas marcantes", "Maior ROI publicitário"],
        livrables: ["Filme principal", "Versões 9:16 / 1:1 / 16:9"],
        delai: "3 a 5 semanas",
        pour: "Marcas premium, mercado imobiliário, relojoaria e hotelaria.",
        image: feedAerialCar,
      },
    ],
  },
  {
    id: "clients",
    kicker: "Objetivo 02",
    title: "Quero mais clientes",
    pitch:
      "Transforme visitantes em clientes qualificados com campanhas bem conduzidas e páginas que convertem.",
    solutions: [
      {
        slug: "google-ads",
        title: "Google Ads",
        short: "Capture a intenção de compra no Google com campanhas de Search, Performance Max e YouTube.",
        inclus: [
          "Análise do mercado local",
          "Criação de campanhas",
          "Otimização semanal",
          "Relatórios transparentes",
        ],
        benefices: ["Leads qualificados", "ROAS mensurado", "Visibilidade imediata"],
        livrables: ["Conta de Ads estruturada", "Painel de desempenho"],
        delai: "Lançamento em até 10 dias",
        pour: "Serviços locais, e-commerce e B2B em Genebra e na Suíça.",
        image: feedPhone,
      },
      {
        slug: "meta-ads",
        title: "Meta Ads",
        short: "Anúncios no Instagram & Facebook que unem criação cinematográfica e segmentação precisa.",
        inclus: [
          "Estratégia de funil",
          "Produção de criativos em vídeo",
          "Testes A/B contínuos",
          "Pixel & eventos de conversão",
        ],
        benefices: ["Menor custo por lead", "Reconhecimento + conversão", "Escalabilidade"],
        livrables: ["Campanhas estruturadas", "10+ criativos por mês"],
        delai: "Lançamento em até 10 dias",
        pour: "Marcas DTC, serviços premium e eventos.",
        image: feedCampaignNoel,
      },
      {
        slug: "landing-pages",
        title: "Landing Pages",
        short: "Landing pages de alta conversão, criadas para transformar cada clique em oportunidade.",
        inclus: [
          "Wireframe orientado à conversão",
          "Copywriting persuasivo em francês",
          "Design premium responsivo",
          "Rastreamento & análise de dados",
        ],
        benefices: ["Maior taxa de conversão", "Imagem consistente", "Mensuração precisa"],
        livrables: ["1 landing page otimizada", "Integração de rastreamento"],
        delai: "2 a 3 semanas",
        pour: "Campanhas de Ads, lançamentos e eventos.",
        image: workNoir,
      },
    ],
  },
  {
    id: "image",
    kicker: "Objetivo 03",
    title: "Quero elevar minha imagem",
    pitch:
      "Construa uma identidade forte, memorável e alinhada ao seu posicionamento premium.",
    solutions: [
      {
        slug: "branding",
        title: "Branding",
        short: "Identidade visual completa: nome, logo, diretrizes e um universo de marca coeso.",
        inclus: [
          "Plataforma de marca",
          "Logo & sistema visual",
          "Manual de identidade visual",
          "Templates para impresso & digital",
        ],
        benefices: ["Reconhecimento imediato", "Posicionamento premium", "Consistência duradoura"],
        livrables: ["Brand book em PDF", "Arquivos vetoriais"],
        delai: "4 a 6 semanas",
        pour: "Novas marcas ou renovação de identidade.",
        image: workFashion,
      },
      {
        slug: "photographie",
        title: "Fotografia profissional",
        short: "Reportagens, retratos corporativos, fotos de produtos e imagens editoriais.",
        inclus: ["Visita técnica", "Direção de arte", "Sessão em estúdio ou externa", "Retoque profissional"],
        benefices: ["Imagem consistente", "Imagens exclusivas", "Mais credibilidade"],
        livrables: ["Galeria em alta resolução entregue na nuvem"],
        delai: "1 a 2 semanas",
        pour: "Hotéis, restaurantes, relojoaria e executivos.",
        image: workVilla,
      },
      {
        slug: "site-internet",
        title: "Criação de sites",
        short: "Sites institucionais e e-commerce sob medida, rápidos, elegantes e otimizados para SEO.",
        inclus: [
          "UX/UI sob medida",
          "Desenvolvimento de alto desempenho",
          "SEO técnico",
          "Treinamento para autonomia",
        ],
        benefices: ["Presença premium 24/7", "Mais conversões", "SEO em Genebra"],
        livrables: ["Site responsivo", "CMS & treinamento"],
        delai: "4 a 8 semanas",
        pour: "PMEs, marcas premium e profissionais independentes ambiciosos.",
        image: feedBoutique,
      },
    ],
  },
  {
    id: "accompagnement",
    kicker: "Objetivo 04",
    title: "Quero uma parceria completa",
    pitch:
      "Confie seu marketing a um estúdio criativo que pensa, produz e gerencia tudo para você, mês após mês.",
    solutions: [
      {
        slug: "gestion-marketing",
        title: "Gestão completa de marketing",
        short: "Um estúdio externo: estratégia, conteúdo, anúncios e relatórios sob uma única direção.",
        inclus: [
          "Estratégia 360°",
          "Produção mensal",
          "Gestão de publicidade",
          "Reuniões estratégicas",
        ],
        benefices: ["Tranquilidade total", "Direção unificada", "Desempenho monitorado"],
        livrables: ["Plano mensal", "Relatório consolidado"],
        delai: "Integração em 14 dias",
        pour: "Líderes que querem recuperar seu tempo.",
        image: workWatch,
      },
      {
        slug: "production-mensuelle",
        title: "Produção mensal de conteúdo",
        short: "Uma produção recorrente para alimentar suas redes, seu site e suas campanhas.",
        inclus: ["Dia de produção / mês", "Foto + vídeo", "Edição & entrega", "Banco de arquivos criativos"],
        benefices: ["Fluxo constante de conteúdo", "Custo otimizado", "Imagem consistente"],
        livrables: ["20 a 40 peças / mês"],
        delai: "Início em até 14 dias",
        pour: "Marcas presentes em múltiplos canais.",
        image: feedRestaurant,
      },
      {
        slug: "conseil-strategique",
        title: "Consultoria estratégica",
        short: "Sessões de direção criativa e marketing para dar clareza ao seu caminho.",
        inclus: ["Auditoria completa", "Plano de ação de 90 dias", "Recomendações criativas", "Acompanhamento"],
        benefices: ["Visão clara", "Prioridades definidas", "Decisões mais ágeis"],
        livrables: ["Documento estratégico"],
        delai: "2 a 3 semanas",
        pour: "Fundadores e equipes de marketing.",
        image: feedEditing,
      },
    ],
  },
];

const seoZones = [
  { tag: "Marketing Digital em Genebra", desc: "Estratégias digitais 360° para marcas da Suíça francófona." },
  { tag: "Gestão de Redes Sociais em Genebra", desc: "Uma presença premium nas redes, gerenciada todos os dias." },
  { tag: "Criação de Sites em Genebra", desc: "Sites sob medida, rápidos, otimizados e elegantes." },
  { tag: "Produção de Vídeo em Genebra", desc: "Filmes de marca cinematográficos produzidos localmente." },
  { tag: "Fotografia Profissional em Genebra", desc: "Imagens editoriais para marcas e executivos." },
  { tag: "Branding em Genebra", desc: "Identidades visuais criadas para durar e valorizar sua marca." },
  { tag: "Publicidade Digital em Genebra", desc: "Campanhas Google & Meta Ads orientadas a resultados." },
];

const testimonials = [
  {
    quote:
      "A TRÍADE transformou nossa imagem. Nossas redes finalmente refletem uma verdadeira marca premium.",
    name: "Camille R.",
    role: "Fundadora — Joalheria, Genebra",
  },
  {
    quote:
      "Profissionalismo, criatividade e eficiência. Nosso custo por lead caiu 38% em dois meses.",
    name: "Marc D.",
    role: "Diretor — Imóveis de alto padrão",
  },
  {
    quote:
      "Um estúdio que pensa nos negócios antes da estética. Era exatamente o que nos faltava.",
    name: "Léa S.",
    role: "CEO — Grupo de restaurantes",
  },
];

export function SolutionsPage() {
  const [activeObjective, setActiveObjective] = useState<string>(objectives[0].id);
  const current = useMemo(
    () => objectives.find((o) => o.id === activeObjective) ?? objectives[0],
    [activeObjective],
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative px-6 pt-32 pb-16 md:px-10 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Soluções · TRÍADE Marketing & Publicidade · Genebra
          </p>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Como podemos ajudar <em className="italic text-accent">sua empresa</em>?
          </h1>
          <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            Escolha seu objetivo. Criamos a solução sob medida — visibilidade, clientes,
            imagem ou uma parceria completa.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {objectives.map((o) => (
              <button
                key={o.id}
                onClick={() => {
                  setActiveObjective(o.id);
                  document.getElementById("solutions-detail")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.18em] transition-all duration-500 ${
                  activeObjective === o.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-foreground/20 hover:border-foreground/60"
                }`}
              >
                {o.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIVE NAV (sticky) */}
      <section id="solutions-detail" className="sticky top-0 z-30 border-y border-foreground/10 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4 md:px-10">
          {objectives.map((o) => (
            <button
              key={o.id}
              onClick={() => setActiveObjective(o.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors ${
                activeObjective === o.id
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {o.kicker} — {o.title.replace("Quero ", "")}
            </button>
          ))}
        </div>
      </section>

      {/* SOLUTIONS CONTENT */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{current.kicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            {current.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">{current.pitch}</p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {current.solutions.map((s) => (
              <article
                key={s.slug}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-foreground/10 bg-card transition-all duration-700 hover:-translate-y-1 hover:border-foreground/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-5 p-7">
                  <h3 className="font-display text-2xl leading-tight">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.short}</p>

                  <div className="mt-2 grid gap-4 border-t border-foreground/10 pt-5 text-xs">
                    <Block label="O que está incluído" items={s.inclus} />
                    <Block label="Benefícios" items={s.benefices} />
                    <Block label="Entregáveis" items={s.livrables} />
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <Meta label="Prazo" value={s.delai} />
                      <Meta label="Para quem" value={s.pour} />
                    </div>
                  </div>

                  <a
                    href={`#contact?service=${encodeURIComponent(s.title)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("contact");
                      const sel = document.getElementById("service-select") as HTMLSelectElement | null;
                      if (sel) sel.value = s.title;
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-3 inline-flex items-center justify-between rounded-full border border-foreground/30 px-5 py-3 text-[10px] uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background"
                  >
                    Solicitar um orçamento
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO ZONES */}
      <section className="border-t border-foreground/10 bg-card/40 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Genebra · Lausanne · Suíça francófona
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
            Uma agência local, soluções <em className="italic text-accent">premium</em>.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {seoZones.map((z) => (
              <div
                key={z.tag}
                className="rounded-2xl border border-foreground/10 bg-background/60 p-6 transition-colors hover:border-foreground/30"
              >
                <h3 className="text-sm font-medium tracking-tight">{z.tag}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent">Quem confia em nós</p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl">Marcas que confiam em nós.</h2>
            </div>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <Stat n="+80" l="Marcas atendidas" />
              <Stat n="+5M" l="Visualizações geradas" />
              <Stat n="98%" l="Clientes fiéis" />
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col gap-6 rounded-[2rem] border border-foreground/10 bg-card p-8"
              >
                <blockquote className="font-display text-xl leading-snug">“{t.quote}”</blockquote>
                <figcaption className="mt-auto text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="block text-foreground">{t.name}</span>
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Mini portfolio */}
          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[workWatch, workFashion, workVilla, workNoir].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-2xl">
                <img src={src} alt="Portfólio TRÍADE" className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / LEAD FORM */}
      <ContactForm />

      <SiteFooter />
    </main>
  );
}

function Block({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
      <ul className="mt-2 space-y-1.5">
        {items.map((i) => (
          <li key={i} className="flex gap-2 text-[13px] text-foreground/90">
            <span className="mt-[7px] inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-foreground/10 p-3">
      <p className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
      <p className="mt-1 text-[12px] leading-snug text-foreground/90">{value}</p>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-foreground">{n}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.22em]">{l}</p>
    </div>
  );
}

const SERVICE_OPTIONS = objectives.flatMap((o) => o.solutions.map((s) => s.title));

function ContactForm() {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    email: "",
    entreprise: "",
    service: SERVICE_OPTIONS[0],
    description: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [k]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom || !form.telephone || !form.email) return;
    const msg = `Olá TRÍADE,\n\nGostaria de obter um orçamento.\n\nNome : ${form.nom}\nTelefone : ${form.telephone}\nE-mail : ${form.email}\nEmpresa : ${form.entreprise}\nServiço desejado : ${form.service}\nDescrição do projeto : ${form.description}\n\nAgradeço.`;
    const url = `https://wa.me/41789670537?text=${encodeURIComponent(msg)}`;
    setSent(true);
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="border-t border-foreground/10 bg-foreground px-6 py-24 text-background md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-background/60">Orçamento expresso</p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
            Vamos falar do seu projeto em <em className="italic">30 segundos</em>.
          </h2>
          <p className="mt-6 max-w-md text-sm text-background/70">
            Preencha este formulário — você será redirecionado ao WhatsApp com sua
            solicitação pronta para enviar. Resposta em até 24 horas úteis.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <a href="https://wa.me/41789670537" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-background/80 hover:text-background">
              <span className="h-px w-8 bg-background/40" /> WhatsApp · +41 78 967 05 37
            </a>
            <a href="mailto:info@triadepublicite.ch" className="flex items-center gap-3 text-background/80 hover:text-background">
              <span className="h-px w-8 bg-background/40" /> info@triadepublicite.ch
            </a>
            <a href="https://instagram.com/triadepublicite" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-background/80 hover:text-background">
              <span className="h-px w-8 bg-background/40" /> Instagram · @triadepublicite
            </a>
            <p className="flex items-center gap-3 text-background/60">
              <span className="h-px w-8 bg-background/40" /> Genebra · Suíça francófona
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-[2rem] border border-background/15 bg-background/5 p-6 backdrop-blur-sm md:p-8"
        >
          <Field label="Nome *" value={form.nom} onChange={handleChange("nom")} required maxLength={80} />
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Telefone *" value={form.telephone} onChange={handleChange("telephone")} required maxLength={30} type="tel" />
            <Field label="E-mail *" value={form.email} onChange={handleChange("email")} required maxLength={120} type="email" />
          </div>
          <Field label="Empresa" value={form.entreprise} onChange={handleChange("entreprise")} maxLength={120} />

          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.22em] text-background/60">Serviço desejado</span>
            <select
              id="service-select"
              value={form.service}
              onChange={handleChange("service")}
              className="mt-2 w-full rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background outline-none transition-colors focus:border-background/60"
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-foreground text-background">
                  {opt}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.22em] text-background/60">Breve descrição</span>
            <textarea
              value={form.description}
              onChange={handleChange("description")}
              maxLength={600}
              rows={4}
              className="mt-2 w-full resize-none rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background outline-none transition-colors placeholder:text-background/40 focus:border-background/60"
              placeholder="Em poucas palavras, seu objetivo…"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-between rounded-full bg-background px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
          >
            Enviar pelo WhatsApp
            <span aria-hidden>→</span>
          </button>
          {sent && (
            <p className="text-xs text-background/70">
              Sua mensagem será aberta no WhatsApp. Se nada acontecer, entre em contato pelo +41 78 967 05 37.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.22em] text-background/60">{label}</span>
      <input
        type={type}
        {...rest}
        className="mt-2 w-full rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background outline-none transition-colors placeholder:text-background/40 focus:border-background/60"
      />
    </label>
  );
}
