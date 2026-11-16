import type { Locale } from "@/lib/i18n";
import type { Heading } from "@/lib/content/chrome";

const NB = "\u00a0";

export type HomeContent = {
  meta: string[];
  h1Words: string[];
  h1Hl: string;
  leadA: string; leadStrong: string; leadB: string;
  ctaPrimary: string; ctaSecondary: string; ctaNote: string;
  /** Second-language line under the hero (Instrument Serif). */
  altLine: { lang: "fr" | "pt"; text: string };
  heroAlt: string; founderLabel: string;
  logosLabel: string; logosTitle: string;
  services: { meta: string[]; h2: Heading; intro: string; more: string; items: { t: string; d: string; l: string[] }[] };
  work: {
    meta: string[]; h2: Heading; seeCase: string;
    espresso: { meta: string; d: string; chips: string[]; browser: string; alts: string[] };
    usgv: { meta: string; d: string; chips: string[]; alts: string[] };
    sitesTitle: string; sitesMeta: string;
    sites: { alt: string; meta: string; d: string }[];
  };
  method: { meta: string[]; h2: Heading; steps: { t: string; d: string }[] };
  about: { meta: string[]; h2: Heading; pA: string; pB: string; p2: string; altLine: { lang: "fr" | "pt"; text: string }; alts: [string, string]; facts: [string, string][] };
  faq: { meta: string[]; h2: Heading; items: { q: string; a: string }[] };
};

export const HOME: Record<Locale, HomeContent> = {
  fr: {
    meta: ["TRÍADE · Genève", "Marketing & publicité", "PME de Suisse romande"],
    h1Words: ["Votre", "entreprise", "mérite", "d’être"], h1Hl: "choisie.",
    leadA: "Stratégie, image et présence digitale pour les PME de Suisse romande. ", leadStrong: "Un seul interlocuteur", leadB: ", du logo au site web, de Google Maps à Instagram.",
    ctaPrimary: "Réserver mon diagnostic gratuit", ctaSecondary: "Voir nos réalisations", ctaNote: "30 minutes, sans engagement · en français ou en portugais",
    altLine: { lang: "pt", text: "Agência lusófona em Genebra: atendemos em francês e português." },
    heroAlt: "Augusto Sousa, fondateur de TRÍADE", founderLabel: "Fondateur",
    logosLabel: "Clients", logosTitle: "Ils nous font confiance",
    services: {
      meta: ["01 — Services", "Ce que nous faisons"], h2: { lines: ["Trois leviers.", "Un seul"], hl: "interlocuteur." },
      intro: "Pas besoin de cinq prestataires. Nous construisons les trois choses dont une PME a besoin pour attirer de nouveaux clients, et nous les faisons travailler ensemble.",
      more: "Voir le détail des services",
      items: [
        { t: "Être trouvé", d: "Quand un client vous cherche sur Google, il doit vous trouver, et avoir envie de pousser la porte.", l: ["Fiche Google Business Profile", "Site web sur mesure, FR · PT · EN", "Référencement local (SEO)", "Google Ads"] },
        { t: "Être choisi", d: "Une image cohérente et professionnelle, qui inspire confiance avant même le premier contact.", l: ["Identité visuelle et logo", "Photographie", "Vidéo et Reels", "Supports imprimés"] },
        { t: "Être suivi", d: "Une présence régulière, qui transforme les curieux en clients et les clients en habitués.", l: ["Gestion Instagram et Facebook", "Calendrier éditorial", "Publicité Meta", "Rapport de résultats"] },
      ],
    },
    work: {
      meta: ["02 — Réalisations", "Projets réels · images réelles"], h2: { lines: ["Des clients d’ici.", "Du travail"], hl: "réel." }, seeCase: "Voir l’étude de cas",
      espresso: { meta: "Cas 01 · Pâquis, Genève", d: "Bar, pizzeria et cocktails aux Pâquis. Nous avons repositionné la marque, créé un site trilingue, et nous gérons ses réseaux sociaux et sa fiche Google.", chips: ["Branding", "Site FR · PT · EN", "Réseaux sociaux", "Google Business"], browser: "Site web · Espresso Club",
        alts: ["Page d’accueil du site de l’Espresso Club : salle éclairée par des suspensions coniques", "Comptoir en bois de l’Espresso Club sous des suspensions coniques", "Verres à vin et couverts sur une serviette rouge", "Bouteilles de vin rouge alignées sur le comptoir"] },
      usgv: { meta: "Cas 02 · Football, Genève", d: "Un club qui vit le week-end. Nous couvrons les matchs et les entraînements en photo et produisons les visuels Match Day, résultats et classements pour Instagram et TikTok.", chips: ["Photo de match", "Match Day", "Instagram & TikTok"],
        alts: ["Joueurs de l’US Genève-Ville à l’échauffement", "Joueur de l’US Genève-Ville portant le numéro 17", "Joueur de l’US Genève-Ville portant le numéro 11"] },
      sitesTitle: "Sites web réalisés", sitesMeta: "En ligne aujourd’hui",
      sites: [
        { alt: "Page d’accueil du site de l’Espresso Club", meta: "Restaurant · bar · Genève", d: "Site trilingue avec carte, galerie et itinéraire." },
        { alt: "Page d’accueil du site de l’association culturelle Dora d’Istria", meta: "Association culturelle · Genève", d: "Identité visuelle et site bilingue, français et albanais." },
        { alt: "Page d’accueil du site de l’entreprise Peinture Vedia", meta: "Peinture · rénovation · Genève", d: "Site vitrine avec formulaire de demande de devis." },
      ],
    },
    method: {
      meta: ["03 — Méthode", "Comment nous travaillons"], h2: { lines: ["Simple, clair,"], hl: "mesurable." },
      steps: [
        { t: "Diagnostic", d: "30 minutes pour comprendre votre entreprise, vos clients et ce qui bloque aujourd’hui. Gratuit." },
        { t: "Plan et devis", d: "Des priorités claires et un devis détaillé. Vous savez ce que vous payez, et pourquoi." },
        { t: "Production", d: `Shooting, design, site web, contenus${NB}: nous réalisons, vous validez chaque étape.` },
        { t: "Suivi", d: "Un point régulier sur les résultats, et des ajustements quand quelque chose peut mieux marcher." },
      ],
    },
    about: {
      meta: ["04 — À propos", "Genève · Suisse romande"], h2: { lines: ["Un interlocuteur direct. Pas un"], hl: "standard." },
      pA: "TRÍADE est dirigée par ", pB: ", à Genève. Vous parlez directement à la personne qui pense votre stratégie, tient la caméra et construit votre site.",
      p2: "Une agence à taille humaine, ancrée en Suisse romande, qui travaille en français, en portugais et en anglais.",
      altLine: { lang: "pt", text: "Uma agência lusófona dentro do mercado suíço." },
      alts: ["Augusto Sousa, caméra à la main lors d’un tournage", "Augusto Sousa au téléphone devant son ordinateur"],
      facts: [["Basé à", "Genève"], ["Langues", "FR · PT · EN"], ["Métier", "Stratégie · Image"]],
    },
    faq: {
      meta: ["05 — Questions fréquentes", "Avant de nous écrire"], h2: { lines: ["Vos"], hl: "questions." },
      items: [
        { q: `Travaillez-vous avec les petites entreprises${NB}?`, a: `Oui. La plupart de nos clients sont des PME, des commerces et des indépendants de Suisse romande${NB}: restaurants, artisans, associations, prestataires de services.` },
        { q: `Combien coûte un site web ou la gestion de vos réseaux sociaux${NB}?`, a: "Chaque projet est chiffré après le diagnostic gratuit, selon vos besoins réels. Vous recevez un devis détaillé avant tout engagement." },
        { q: `Dans quelles langues travaillez-vous${NB}?`, a: "En français, en portugais et en anglais. Nous créons aussi des sites multilingues, comme celui de l’Espresso Club." },
        { q: `Où intervenez-vous${NB}?`, a: "À Genève et en Suisse romande. Les shootings photo et vidéo se font sur place, chez vous." },
        { q: `Comment se passe le diagnostic gratuit${NB}?`, a: "En 30 minutes, nous regardons votre fiche Google, votre site et vos réseaux, puis nous vous donnons trois priorités concrètes. Sans engagement." },
        { q: `Pouvez-vous reprendre un site ou des réseaux existants${NB}?`, a: "Oui. Si c’est plus pertinent pour vous, nous améliorons ce qui existe déjà plutôt que de tout refaire." },
      ],
    },
  },
  pt: {
    meta: ["TRÍADE · Genebra", "Marketing e publicidade", "PMEs da Suíça francófona"],
    h1Words: ["Sua", "empresa", "merece", "ser"], h1Hl: "escolhida.",
    leadA: "Estratégia, imagem e presença digital para pequenas empresas na Suíça francófona. ", leadStrong: "Um único interlocutor", leadB: ", do logo ao site, do Google Maps ao Instagram.",
    ctaPrimary: "Agendar meu diagnóstico grátis", ctaSecondary: "Ver nossos trabalhos", ctaNote: "30 minutos, sem compromisso · em português ou em francês",
    altLine: { lang: "fr", text: "Agence lusophone à Genève : nous travaillons en français et en portugais." },
    heroAlt: "Augusto Sousa, fundador da TRÍADE", founderLabel: "Fundador",
    logosLabel: "Clientes", logosTitle: "Quem confia na gente",
    services: {
      meta: ["01 — Serviços", "O que fazemos"], h2: { lines: ["Três alavancas.", "Um único"], hl: "interlocutor." },
      intro: "Você não precisa de cinco fornecedores. Construímos as três coisas de que uma pequena empresa precisa para atrair novos clientes, e fazemos tudo funcionar junto.",
      more: "Ver os serviços em detalhe",
      items: [
        { t: "Ser encontrado", d: "Quando um cliente procura você no Google, ele precisa te encontrar e ter vontade de entrar.", l: ["Perfil no Google (Google Business Profile)", "Site sob medida, FR · PT · EN", "SEO local", "Google Ads"] },
        { t: "Ser escolhido", d: "Uma imagem coerente e profissional, que passa confiança antes mesmo do primeiro contato.", l: ["Identidade visual e logo", "Fotografia", "Vídeo e Reels", "Materiais impressos"] },
        { t: "Ser seguido", d: "Uma presença constante, que transforma curiosos em clientes e clientes em frequentadores.", l: ["Gestão de Instagram e Facebook", "Calendário editorial", "Anúncios na Meta", "Relatório de resultados"] },
      ],
    },
    work: {
      meta: ["02 — Trabalhos", "Projetos reais · imagens reais"], h2: { lines: ["Clientes daqui.", "Trabalho"], hl: "real." }, seeCase: "Ver o estudo de caso",
      espresso: { meta: "Caso 01 · Pâquis, Genebra", d: "Bar, pizzaria e coquetéis no bairro de Pâquis. Reposicionamos a marca, criamos um site em três idiomas e cuidamos das redes sociais e do perfil no Google.", chips: ["Branding", "Site FR · PT · EN", "Redes sociais", "Google Business"], browser: "Site · Espresso Club",
        alts: ["Página inicial do site do Espresso Club: salão iluminado por luminárias cônicas", "Balcão de madeira do Espresso Club sob luminárias cônicas", "Taças de vinho e talheres sobre um guardanapo vermelho", "Garrafas de vinho tinto enfileiradas no balcão"] },
      usgv: { meta: "Caso 02 · Futebol, Genebra", d: "Um clube que vive o fim de semana. Fotografamos jogos e treinos e produzimos as artes de Match Day, resultados e classificação para Instagram e TikTok.", chips: ["Foto de jogo", "Match Day", "Instagram e TikTok"],
        alts: ["Jogadores do US Genève-Ville no aquecimento", "Jogador do US Genève-Ville com a camisa 17", "Jogador do US Genève-Ville com a camisa 11"] },
      sitesTitle: "Sites que criamos", sitesMeta: "No ar hoje",
      sites: [
        { alt: "Página inicial do site do Espresso Club", meta: "Restaurante · bar · Genebra", d: "Site em três idiomas com cardápio, galeria e como chegar." },
        { alt: "Página inicial do site da associação cultural Dora d’Istria", meta: "Associação cultural · Genebra", d: "Identidade visual e site bilíngue, francês e albanês." },
        { alt: "Página inicial do site da empresa Peinture Vedia", meta: "Pintura · reforma · Genebra", d: "Site institucional com formulário de pedido de orçamento." },
      ],
    },
    method: {
      meta: ["03 — Método", "Como trabalhamos"], h2: { lines: ["Simples, claro,"], hl: "mensurável." },
      steps: [
        { t: "Diagnóstico", d: "30 minutos para entender sua empresa, seus clientes e o que está travando hoje. Grátis." },
        { t: "Plano e orçamento", d: "Prioridades claras e um orçamento detalhado. Você sabe o que está pagando, e por quê." },
        { t: "Produção", d: "Sessão de fotos, design, site, conteúdo: a gente faz, você aprova cada etapa." },
        { t: "Acompanhamento", d: "Conversas regulares sobre os resultados e ajustes quando algo pode funcionar melhor." },
      ],
    },
    about: {
      meta: ["04 — Sobre", "Genebra · Suíça francófona"], h2: { lines: ["Um contato direto. Não um atendimento"], hl: "padrão." },
      pA: "A TRÍADE é dirigida por ", pB: ", em Genebra. Você fala direto com quem pensa sua estratégia, segura a câmera e constrói seu site.",
      p2: "Uma agência de tamanho humano, enraizada na Suíça francófona, que trabalha em francês, português e inglês.",
      altLine: { lang: "fr", text: "Une agence lusophone au cœur du marché suisse." },
      alts: ["Augusto Sousa com a câmera na mão durante uma filmagem", "Augusto Sousa ao telefone em frente ao computador"],
      facts: [["Baseada em", "Genebra"], ["Idiomas", "FR · PT · EN"], ["Ofício", "Estratégia · Imagem"]],
    },
    faq: {
      meta: ["05 — Perguntas frequentes", "Antes de escrever pra gente"], h2: { lines: ["Suas"], hl: "perguntas." },
      items: [
        { q: "Vocês trabalham com pequenas empresas?", a: "Sim. A maioria dos nossos clientes são PMEs, comércios e autônomos da Suíça francófona: restaurantes, artesãos, associações e prestadores de serviço." },
        { q: "Quanto custa um site ou a gestão das redes sociais?", a: "Cada projeto é orçado depois do diagnóstico gratuito, de acordo com as suas necessidades reais. Você recebe um orçamento detalhado antes de qualquer compromisso." },
        { q: "Em quais idiomas vocês trabalham?", a: "Em francês, português e inglês. Também criamos sites multilíngues, como o do Espresso Club." },
        { q: "Onde vocês atuam?", a: "Em Genebra e na Suíça francófona. As sessões de foto e vídeo são feitas no local, na sua empresa." },
        { q: "Como funciona o diagnóstico gratuito?", a: "Em 30 minutos, olhamos seu perfil no Google, seu site e suas redes e te passamos três prioridades concretas. Sem compromisso." },
        { q: "Vocês podem assumir um site ou redes que já existem?", a: "Sim. Quando faz mais sentido pra você, melhoramos o que já existe em vez de refazer tudo." },
      ],
    },
  },
  en: {
    meta: ["TRÍADE · Geneva", "Marketing & advertising", "SMEs in French-speaking Switzerland"],
    h1Words: ["Your", "business", "deserves", "to", "be"], h1Hl: "chosen.",
    leadA: "Strategy, image and digital presence for SMEs in French-speaking Switzerland. ", leadStrong: "One point of contact", leadB: ", from logo to website, from Google Maps to Instagram.",
    ctaPrimary: "Book my free diagnostic", ctaSecondary: "See our work", ctaNote: "30 minutes, no commitment · in English, French or Portuguese",
    altLine: { lang: "pt", text: "Agência lusófona em Genebra: atendemos em francês e português." },
    heroAlt: "Augusto Sousa, founder of TRÍADE", founderLabel: "Founder",
    logosLabel: "Clients", logosTitle: "They trust us",
    services: {
      meta: ["01 — Services", "What we do"], h2: { lines: ["Three levers.", "One single"], hl: "point of contact." },
      intro: "No need for five different suppliers. We build the three things a small business needs to win new customers, and we make them work together.",
      more: "See services in detail",
      items: [
        { t: "Get found", d: "When a customer looks for you on Google, they should find you, and want to walk through your door.", l: ["Google Business Profile", "Custom website, FR · PT · EN", "Local SEO", "Google Ads"] },
        { t: "Get chosen", d: "A consistent, professional image that builds trust before the first contact.", l: ["Visual identity and logo", "Photography", "Video and Reels", "Print materials"] },
        { t: "Get followed", d: "A steady presence that turns curious visitors into customers, and customers into regulars.", l: ["Instagram and Facebook management", "Content calendar", "Meta ads", "Results report"] },
      ],
    },
    work: {
      meta: ["02 — Work", "Real projects · real images"], h2: { lines: ["Local clients.", "Work that’s"], hl: "real." }, seeCase: "See the case study",
      espresso: { meta: "Case 01 · Pâquis, Geneva", d: "Bar, pizzeria and cocktails in the Pâquis district. We repositioned the brand, built a three-language website, and we run its social media and Google profile.", chips: ["Branding", "Website FR · PT · EN", "Social media", "Google Business"], browser: "Website · Espresso Club",
        alts: ["Espresso Club website homepage: dining room lit by cone pendant lamps", "Espresso Club wooden bar under cone pendant lamps", "Wine glasses and cutlery on a red napkin", "Red wine bottles lined up on the bar"] },
      usgv: { meta: "Case 02 · Football, Geneva", d: "A club that comes alive at the weekend. We photograph matches and training sessions and produce Match Day, results and standings visuals for Instagram and TikTok.", chips: ["Match photography", "Match Day", "Instagram & TikTok"],
        alts: ["US Genève-Ville players warming up", "US Genève-Ville player wearing number 17", "US Genève-Ville player wearing number 11"] },
      sitesTitle: "Websites we built", sitesMeta: "Live today",
      sites: [
        { alt: "Espresso Club website homepage", meta: "Restaurant · bar · Geneva", d: "Three-language website with menu, gallery and directions." },
        { alt: "Dora d’Istria cultural association website homepage", meta: "Cultural association · Geneva", d: "Visual identity and bilingual website, French and Albanian." },
        { alt: "Peinture Vedia company website homepage", meta: "Painting · renovation · Geneva", d: "Company website with a quote request form." },
      ],
    },
    method: {
      meta: ["03 — Method", "How we work"], h2: { lines: ["Simple, clear,"], hl: "measurable." },
      steps: [
        { t: "Diagnostic", d: "30 minutes to understand your business, your customers and what’s holding you back. Free." },
        { t: "Plan and quote", d: "Clear priorities and a detailed quote. You know what you pay for, and why." },
        { t: "Production", d: "Photo shoots, design, website, content: we produce, you approve every step." },
        { t: "Follow-up", d: "Regular check-ins on results, and adjustments when something can work better." },
      ],
    },
    about: {
      meta: ["04 — About", "Geneva · French-speaking Switzerland"], h2: { lines: ["A direct contact. Not a"], hl: "switchboard." },
      pA: "TRÍADE is run by ", pB: " in Geneva. You talk directly to the person who designs your strategy, holds the camera and builds your website.",
      p2: "A small, hands-on agency rooted in French-speaking Switzerland, working in French, Portuguese and English.",
      altLine: { lang: "pt", text: "Uma agência lusófona dentro do mercado suíço." },
      alts: ["Augusto Sousa holding a camera during a shoot", "Augusto Sousa on the phone in front of his computer"],
      facts: [["Based in", "Geneva"], ["Languages", "FR · PT · EN"], ["Craft", "Strategy · Image"]],
    },
    faq: {
      meta: ["05 — FAQ", "Before you write to us"], h2: { lines: ["Your"], hl: "questions." },
      items: [
        { q: "Do you work with small businesses?", a: "Yes. Most of our clients are SMEs, shops and independents in French-speaking Switzerland: restaurants, craftspeople, associations and service providers." },
        { q: "How much does a website or social media management cost?", a: "Every project is quoted after the free diagnostic, based on your actual needs. You receive a detailed quote before any commitment." },
        { q: "Which languages do you work in?", a: "French, Portuguese and English. We also build multilingual websites, like the Espresso Club’s." },
        { q: "Where do you work?", a: "In Geneva and across French-speaking Switzerland. Photo and video shoots take place on site, at your business." },
        { q: "How does the free diagnostic work?", a: "In 30 minutes, we review your Google profile, website and social media, then give you three concrete priorities. No commitment." },
        { q: "Can you take over an existing website or social accounts?", a: "Yes. When it makes more sense for you, we improve what already exists rather than starting from scratch." },
      ],
    },
  },
};
