import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useLocale, type Locale } from "@/lib/i18n";

const C: Record<Locale, { title: string; updated: string; blocks: { h: string; p: string }[] }> = {
  fr: {
    title: "Politique de confidentialité",
    updated: "Conforme à la loi fédérale suisse sur la protection des données (nLPD). Dernière mise à jour : octobre 2026.",
    blocks: [
      { h: "Responsable du traitement", p: "TRÍADE Marketing et Publicité, Genève, Suisse — info@triadepublicite.ch — +41 78 967 05 37." },
      { h: "Formulaire de contact", p: "Nous collectons : nom, entreprise, e-mail, téléphone (facultatif), type de projet, budget estimé, délai et message, ainsi que votre consentement et la langue du site." },
      { h: "WhatsApp", p: "Si vous nous contactez via WhatsApp, votre numéro et vos messages sont traités par WhatsApp (Meta Platforms) selon sa propre politique de confidentialité. Nous utilisons ces échanges uniquement pour répondre à votre demande." },
      { h: "Mesure d'audience et cookies", p: "Ce site n'utilise ni cookies publicitaires ni outils de suivi tiers. Notre hébergeur peut enregistrer des statistiques de visite anonymes et techniques (pages vues, type d'appareil) sans cookie, afin d'assurer le bon fonctionnement du site." },
      { h: "Finalité", p: "Répondre à vos demandes, préparer une offre et assurer le suivi de la relation. Vos données ne sont jamais vendues ni utilisées à des fins publicitaires." },
      { h: "Stockage et durée", p: "Les demandes sont stockées dans une base de données sécurisée chez notre prestataire d'hébergement cloud, accessible uniquement à TRÍADE. Elles sont conservées le temps nécessaire au suivi, puis supprimées." },
      { h: "Vos droits", p: "Vous pouvez à tout moment demander l'accès à vos données, leur rectification, leur suppression ou vous opposer à leur traitement, en écrivant à info@triadepublicite.ch. Vous pouvez également vous adresser au Préposé fédéral à la protection des données et à la transparence (PFPDT)." },
      { h: "Contact", p: "Pour toute question relative à vos données : info@triadepublicite.ch." },
    ],
  },
  pt: {
    title: "Política de privacidade",
    updated: "De acordo com a lei federal suíça de proteção de dados (nLPD). Última atualização: outubro de 2026.",
    blocks: [
      { h: "Responsável pelo tratamento", p: "TRÍADE Marketing et Publicité, Genebra, Suíça — info@triadepublicite.ch — +41 78 967 05 37." },
      { h: "Formulário de contato", p: "Coletamos: nome, empresa, e-mail, telefone (opcional), tipo de projeto, orçamento estimado, prazo e mensagem, além do seu consentimento e do idioma do site." },
      { h: "WhatsApp", p: "Se você nos contatar pelo WhatsApp, seu número e suas mensagens são tratados pelo WhatsApp (Meta Platforms) conforme a política de privacidade dele. Usamos essas conversas apenas para responder à sua solicitação." },
      { h: "Análise de audiência e cookies", p: "Este site não usa cookies publicitários nem ferramentas de rastreamento de terceiros. Nossa hospedagem pode registrar estatísticas de visita anônimas e técnicas (páginas vistas, tipo de dispositivo), sem cookies, para garantir o funcionamento do site." },
      { h: "Finalidade", p: "Responder às suas solicitações, preparar uma proposta e acompanhar o relacionamento. Seus dados nunca são vendidos nem usados para publicidade." },
      { h: "Armazenamento e prazo", p: "As solicitações ficam em um banco de dados seguro no nosso provedor de hospedagem em nuvem, acessível apenas à TRÍADE. São mantidas pelo tempo necessário ao acompanhamento e depois excluídas." },
      { h: "Seus direitos", p: "Você pode a qualquer momento pedir acesso, correção ou exclusão dos seus dados, ou se opor ao tratamento, escrevendo para info@triadepublicite.ch. Também pode recorrer ao Encarregado Federal de Proteção de Dados e Transparência (PFPDT)." },
      { h: "Contato", p: "Para qualquer dúvida sobre seus dados: info@triadepublicite.ch." },
    ],
  },
  en: {
    title: "Privacy policy",
    updated: "In line with the Swiss Federal Act on Data Protection (nFADP). Last updated: October 2026.",
    blocks: [
      { h: "Controller", p: "TRÍADE Marketing et Publicité, Geneva, Switzerland — info@triadepublicite.ch — +41 78 967 05 37." },
      { h: "Contact form", p: "We collect: name, company, email, phone (optional), project type, estimated budget, timeline and message, plus your consent and the site language." },
      { h: "WhatsApp", p: "If you contact us via WhatsApp, your number and messages are processed by WhatsApp (Meta Platforms) under its own privacy policy. We use these conversations only to answer your request." },
      { h: "Analytics and cookies", p: "This site uses no advertising cookies and no third-party tracking tools. Our host may record anonymous, technical visit statistics (page views, device type) without cookies to keep the site running properly." },
      { h: "Purpose", p: "To answer your requests, prepare a proposal and follow up. Your data is never sold or used for advertising." },
      { h: "Storage and retention", p: "Requests are stored in a secure database with our cloud hosting provider, accessible only to TRÍADE. They are kept as long as needed for follow-up, then deleted." },
      { h: "Your rights", p: "You may at any time request access to, correction or deletion of your data, or object to its processing, by writing to info@triadepublicite.ch. You may also contact the Federal Data Protection and Information Commissioner (FDPIC)." },
      { h: "Contact", p: "For any question about your data: info@triadepublicite.ch." },
    ],
  },
};

export function PrivacyPage() {
  const c = C[useLocale()];
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 pt-40 pb-32 md:px-10">
        <h1 className="font-display mb-6">{c.title}</h1>
        <p className="mb-16 text-sm text-muted-foreground">{c.updated}</p>
        <div className="space-y-10">
          {c.blocks.map((b) => (
            <div key={b.h} className="rounded-[2rem] border border-border bg-card/40 p-8">
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-accent">{b.h}</h2>
              <p className="mt-4 text-muted-foreground">{b.p}</p>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
