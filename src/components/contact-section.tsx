import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";
import { BUDGETS, lp, ui, useLocale } from "@/lib/i18n";
import { CALENDLY_URL, CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/site-config";

const field =
  "w-full rounded-2xl border border-border bg-background/60 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-accent";
const label = "mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground";

export function ContactSection() {
  const locale = useLocale();
  const t = ui[locale].form;
  const types = ui[locale].types;
  const send = useServerFn(submitContact);
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error" | "invalid">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const payload = {
      name: v("name"), company: v("company"), email: v("email"), phone: v("phone"),
      project_type: v("project_type"), budget: v("budget"), timeline: v("timeline"),
      message: v("message"), consent: fd.get("consent") === "on", locale,
    };
    if (!payload.name || !payload.company || !payload.email || !payload.project_type || !payload.budget || !payload.message || !payload.consent) {
      setState("invalid");
      return;
    }
    setState("sending");
    try {
      await send({ data: payload });
      setState("ok");
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="border-t border-border px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-5">
          <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">{t.eyebrow}</span>
          <h2 className="font-display">{t.title}</h2>
          <p className="max-w-md text-muted-foreground">{t.intro}</p>
          <div className="space-y-3 pt-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.alt}</p>
            <BookCallButton />
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="block text-sm transition-colors hover:text-accent">WhatsApp · +41 78 967 05 37</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="block text-sm transition-colors hover:text-accent">{CONTACT_EMAIL}</a>
          </div>
        </div>

        <div className="lg:col-span-7">
          {state === "ok" ? (
            <div role="status" className="rounded-[2rem] border border-accent/40 bg-card/50 p-10 md:p-14">
              <span className="mb-6 block size-3 rounded-full bg-accent" />
              <h3 className="font-display">{t.okTitle}</h3>
              <p className="mt-4 text-muted-foreground">{t.okBody}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-5 rounded-[2rem] border border-border bg-card/40 p-6 md:grid-cols-2 md:p-10">
              <div><label className={label} htmlFor="c-name">{t.name} *</label><input id="c-name" name="name" required maxLength={120} autoComplete="name" className={field} /></div>
              <div><label className={label} htmlFor="c-company">{t.company} *</label><input id="c-company" name="company" required maxLength={160} autoComplete="organization" className={field} /></div>
              <div><label className={label} htmlFor="c-email">{t.email} *</label><input id="c-email" name="email" type="email" required maxLength={255} autoComplete="email" className={field} /></div>
              <div><label className={label} htmlFor="c-phone">{t.phone}</label><input id="c-phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className={field} /></div>
              <div>
                <label className={label} htmlFor="c-type">{t.type} *</label>
                <select id="c-type" name="project_type" required defaultValue="" className={field}>
                  <option value="" disabled>{t.choose}</option>
                  {types.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className={label} htmlFor="c-budget">{t.budget} *</label>
                <select id="c-budget" name="budget" required defaultValue="" className={field}>
                  <option value="" disabled>{t.choose}</option>
                  {BUDGETS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="md:col-span-2"><label className={label} htmlFor="c-time">{t.timeline}</label><input id="c-time" name="timeline" maxLength={120} placeholder={t.timelinePh} className={field} /></div>
              <div className="md:col-span-2"><label className={label} htmlFor="c-msg">{t.message} *</label><textarea id="c-msg" name="message" required maxLength={3000} rows={5} className={`${field} resize-none`} /></div>
              <label className="flex items-start gap-3 text-sm text-muted-foreground md:col-span-2">
                <input type="checkbox" name="consent" required className="mt-1 size-4 rounded accent-[var(--accent)]" />
                <span>
                  {t.consentA}
                  <a href={lp(locale, "/confidentialite")} className="underline underline-offset-4 hover:text-accent">{t.consentLink}</a>.
                </span>
              </label>
              <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
                <p aria-live="polite" className="text-sm text-destructive">
                  {state === "error" ? t.error : state === "invalid" ? t.invalid : ""}
                </p>
                <button type="submit" disabled={state === "sending"} className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-xs uppercase tracking-widest text-accent-foreground transition-transform hover:scale-[1.02] disabled:opacity-60">
                  {state === "sending" ? t.sending : t.submit} <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export function BookCallButton({ className, children }: { className?: string; children?: React.ReactNode }) {
  const locale = useLocale();
  const text = children ?? ui[locale].form.book;
  const cls = className ?? "inline-flex items-center gap-3 rounded-full border border-foreground/25 px-6 py-3 text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent";
  if (CALENDLY_URL) {
    return <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className={cls}>{text}</a>;
  }
  return <a href="#contact" className={cls}>{text}</a>;
}
