import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useLocale, type Locale } from "@/lib/i18n";
import { CONTACT_EMAIL, LEGAL } from "@/lib/site-config";

const L: Record<Locale, { title: string; company: string; form: string; address: string; byAppt: string; uid: string; owner: string; email: string; phone: string; note: string }> = {
  fr: { title: "Impressum", company: "Raison sociale", form: "Forme juridique", address: "Adresse", byAppt: "Genève, sur rendez-vous", uid: "N° IDE", owner: "Responsable", email: "E-mail", phone: "Téléphone", note: "Malgré un contrôle attentif, TRÍADE décline toute responsabilité quant au contenu des liens externes." },
  pt: { title: "Impressum", company: "Razão social", form: "Forma jurídica", address: "Endereço", byAppt: "Genebra, mediante agendamento", uid: "N° IDE", owner: "Responsável", email: "E-mail", phone: "Telefone", note: "Apesar de uma verificação cuidadosa, a TRÍADE não se responsabiliza pelo conteúdo de links externos." },
  en: { title: "Impressum", company: "Company name", form: "Legal form", address: "Address", byAppt: "Geneva, by appointment", uid: "UID no.", owner: "Responsible person", email: "Email", phone: "Phone", note: "Despite careful review, TRÍADE accepts no liability for the content of external links." },
};

export function ImpressumPage() {
  const t = L[useLocale()];
  const rows: [string, React.ReactNode][] = [
    [t.company, "TRÍADE Marketing et Publicité"],
    ...(LEGAL.legalForm ? [[t.form, LEGAL.legalForm] as [string, string]] : []),
    [t.address, LEGAL.address || t.byAppt],
    ...(LEGAL.uid ? [[t.uid, LEGAL.uid] as [string, string]] : []),
    [t.owner, LEGAL.owner],
    [t.email, <a key="e" href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent">{CONTACT_EMAIL}</a>],
    [t.phone, <a key="p" href="tel:+41789670537" className="hover:text-accent">+41 78 967 05 37</a>],
  ];
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 pt-40 pb-32 md:px-10">
        <h1 className="font-display mb-16">{t.title}</h1>
        <dl className="divide-y divide-border overflow-hidden rounded-[2rem] border border-border bg-card/40">
          {rows.map(([k, v]) => (
            <div key={k} className="grid grid-cols-1 gap-2 p-6 md:grid-cols-3 md:p-8">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-accent">{k}</dt>
              <dd className="md:col-span-2">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-sm text-muted-foreground">{t.note}</p>
      </main>
      <SiteFooter />
    </div>
  );
}
