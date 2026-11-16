import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useLocale, type Locale } from "@/lib/i18n";
import { CONTACT_EMAIL, LEGAL } from "@/lib/site-config";
import { MetaRow } from "@/components/brand";

const L: Record<Locale, { title: string; company: string; form: string; address: string; byAppt: string; uid: string; owner: string; email: string; phone: string; note: string }> = {
  fr: { title: "Impressum", company: "Raison sociale", form: "Forme juridique", address: "Adresse", byAppt: "Genève, sur rendez-vous", uid: "N° IDE", owner: "Responsable", email: "E-mail", phone: "Téléphone", note: "Malgré un contrôle attentif, TRÍADE décline toute responsabilité quant au contenu des liens externes." },
  pt: { title: "Impressum", company: "Razão social", form: "Forma jurídica", address: "Endereço", byAppt: "Genebra, mediante agendamento", uid: "N° IDE", owner: "Responsável", email: "E-mail", phone: "Telefone", note: "Apesar de uma verificação cuidadosa, a TRÍADE não se responsabiliza pelo conteúdo de links externos." },
  en: { title: "Impressum", company: "Company name", form: "Legal form", address: "Address", byAppt: "Geneva, by appointment", uid: "UID no.", owner: "Responsible person", email: "Email", phone: "Phone", note: "Despite careful review, TRÍADE accepts no liability for the content of external links." },
};

export function ImpressumPage() {
  const t = L[useLocale()];
  const rows: [string, React.ReactNode][] = [
    [t.company, "TRÍADE Marketing & Publicité"],
    ...(LEGAL.legalForm ? [[t.form, LEGAL.legalForm] as [string, string]] : []),
    [t.address, LEGAL.address || t.byAppt],
    ...(LEGAL.uid ? [[t.uid, LEGAL.uid] as [string, string]] : []),
    [t.owner, LEGAL.owner],
    [t.email, <a key="e" href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>],
    [t.phone, <a key="p" href="tel:+41789670537" className="underline">+41 78 967 05 37</a>],
  ];
  return (
    <div className="min-h-screen bg-superficie text-tinta">
      <SiteNav />
      <main id="main" className="section-y !pt-10 md:!pt-14">
        <div className="wrap">
          <MetaRow items={["TRÍADE", t.title]} />
          <h1 className="mt-10 !text-[clamp(44px,6vw,88px)]">{t.title}</h1>
          <dl className="mt-10 max-w-[70ch] border-t-[3px] border-azul">
            {rows.map(([k, v]) => (
              <div key={k} className="grid gap-1 border-b border-linha py-5 sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="meta !leading-normal">{k}</dt>
                <dd className="font-semibold text-azul">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 max-w-[70ch] text-suave">{t.note}</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
