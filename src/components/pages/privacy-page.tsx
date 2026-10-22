import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useLocale, type Locale } from "@/lib/i18n";

const C: Record<Locale, { title: string; blocks: { h: string; p: string }[] }> = {
  fr: {
    title: "Politique de confidentialité",
    blocks: [
      { h: "Responsable", p: "TRÍADE Marketing et Publicité, Genève, Suisse — info@triadepublicite.ch." },
      { h: "Données collectées", p: "Via le formulaire de contact : nom, entreprise, e-mail, téléphone (facultatif), type de projet, budget, délai et message." },
      { h: "Finalité", p: "Ces données servent uniquement à répondre à votre demande et à préparer une offre. Elles ne sont ni vendues ni partagées à des fins publicitaires." },
      { h: "Conservation", p: "Les demandes sont conservées le temps nécessaire au suivi de la relation, puis supprimées." },
      { h: "Vos droits", p: "Conformément à la loi suisse sur la protection des données (nLPD), vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à info@triadepublicite.ch." },
    ],
  },
  pt: {
    title: "Política de privacidade",
    blocks: [
      { h: "Responsável", p: "TRÍADE Marketing et Publicité, Genebra, Suíça — info@triadepublicite.ch." },
      { h: "Dados coletados", p: "Pelo formulário de contato: nome, empresa, e-mail, telefone (opcional), tipo de projeto, orçamento, prazo e mensagem." },
      { h: "Finalidade", p: "Os dados servem apenas para responder à sua solicitação e preparar uma proposta. Não são vendidos nem compartilhados para fins publicitários." },
      { h: "Conservação", p: "As solicitações são guardadas pelo tempo necessário ao acompanhamento e depois excluídas." },
      { h: "Seus direitos", p: "De acordo com a lei suíça de proteção de dados (nLPD), você pode pedir acesso, correção ou exclusão dos seus dados escrevendo para info@triadepublicite.ch." },
    ],
  },
  en: {
    title: "Privacy policy",
    blocks: [
      { h: "Controller", p: "TRÍADE Marketing et Publicité, Geneva, Switzerland — info@triadepublicite.ch." },
      { h: "Data collected", p: "Through the contact form: name, company, email, phone (optional), project type, budget, timeline and message." },
      { h: "Purpose", p: "This data is used only to answer your request and prepare a proposal. It is never sold or shared for advertising." },
      { h: "Retention", p: "Requests are kept for as long as needed to follow up, then deleted." },
      { h: "Your rights", p: "Under the Swiss Federal Act on Data Protection (nFADP), you may request access, correction or deletion of your data by writing to info@triadepublicite.ch." },
    ],
  },
};

export function PrivacyPage() {
  const c = C[useLocale()];
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 pt-40 pb-32 md:px-10">
        <h1 className="font-display mb-16">{c.title}</h1>
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
