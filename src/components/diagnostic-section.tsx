import { useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";
import { lp, useLocale } from "@/lib/i18n";
import { CALENDLY_URL, CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/site-config";
import { HeadingText } from "@/components/brand";
import { CHROME } from "@/lib/content/chrome";

type Msg = (typeof CHROME)["fr"]["diag"]["err"];
type Key = keyof Msg;
const ORDER: Key[] = ["name", "company", "email", "consent"];

function check(form: HTMLFormElement, k: Key, MSG: Msg): string | null {
  const el = form.elements.namedItem(k) as HTMLInputElement | null;
  if (!el) return null;
  if (k === "consent") return el.checked ? null : MSG.consent;
  const v = el.value.trim();
  if (k === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? null : MSG.email;
  return v ? null : MSG[k];
}

/** Home “Diagnostic 2027” block: pitch + lead form. Reusable on any page. */
export function DiagnosticSection() {
  const locale = useLocale();
  const d = CHROME[locale].diag;
  const send = useServerFn(submitContact);
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Partial<Record<Key, string>>>({});
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const onBlur = (k: Key) => () => {
    const f = formRef.current;
    if (!f) return;
    setErrors((e) => ({ ...e, [k]: check(f, k, d.err) ?? undefined }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const next: Partial<Record<Key, string>> = {};
    for (const k of ORDER) {
      const m = check(f, k, d.err);
      if (m) next[k] = m;
    }
    setErrors(next);
    const firstBad = ORDER.find((k) => next[k]);
    if (firstBad) {
      (f.elements.namedItem(firstBad) as HTMLElement | null)?.focus();
      return;
    }
    const fd = new FormData(f);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    if (v("website")) {
      setState("ok");
      return;
    }
    setState("sending");
    try {
      await send({
        data: {
          name: v("name"),
          company: v("company"),
          email: v("email"),
          phone: v("phone"),
          project_type: fd.getAll("interests").map(String).join(", "),
          message: v("message"),
          consent: true,
          locale,
          website: "",
        },
      });
      setState("ok");
    } catch {
      setState("error");
    }
  }

  const field = (k: Key, label: string, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <div>
      <label htmlFor={`d-${k}`} className="f-label">{label}</label>
      <input
        id={`d-${k}`}
        name={k}
        className="f-input"
        aria-invalid={errors[k] ? true : undefined}
        aria-describedby={errors[k] ? `d-${k}-err` : undefined}
        onBlur={onBlur(k)}
        {...props}
      />
      {errors[k] && <p id={`d-${k}-err`} className="f-err">{errors[k]}</p>}
    </div>
  );

  return (
    <section id="diagnostic" className="on-dark section-y bg-azul text-white">
      <div className="wrap grid items-start gap-14 lg:grid-cols-[1fr_480px]">
        <div className="space-y-6" data-reveal>
          <p className="meta text-nevoa">{d.eyebrow}</p>
          <h2 className="!text-white text-[clamp(52px,7.4vw,124px)]">
            <HeadingText h={d.h2} />
          </h2>
          <p className="max-w-xl text-[19px] text-white">
            {d.pitchA}<strong>{d.pitchB}</strong>{d.pitchC}
          </p>
          <p className="text-[14px] text-nevoa">{d.note}</p>
          <div className="flex flex-col items-start">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="link-u">WhatsApp +41 78 967 05 37</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="link-u">{CONTACT_EMAIL}</a>
          </div>
        </div>

        <div className="w-full max-w-[480px] border-[3px] border-white bg-white p-6 text-tinta shadow-[14px_14px_0_var(--color-lima)] sm:p-8">
          {state === "ok" ? (
            <div role="status" aria-live="polite" className="space-y-3 py-6">
              <p className="t-cond !text-azul text-[34px]">{d.okTitle}</p>
              <p>{d.okBody}</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
              <h3 className="t-cond !text-azul text-[30px]">{d.formTitle}</h3>
              {field("name", d.name, { autoComplete: "name", required: true })}
              {field("company", d.company, { autoComplete: "organization", required: true })}
              {field("email", d.email, { type: "email", autoComplete: "email", required: true })}
              <div>
                <label htmlFor="d-phone" className="f-label">{d.phone}</label>
                <input id="d-phone" name="phone" type="tel" autoComplete="tel" className="f-input" />
              </div>
              <fieldset>
                <legend className="f-label">{d.interests}</legend>
                <div className="flex flex-wrap gap-2">
                  {d.interestList.map((i) => (
                    <label key={i} className="toggle-chip">
                      <input type="checkbox" name="interests" value={i} />
                      <span>{i}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="d-message" className="f-label">{d.message}</label>
                <textarea id="d-message" name="message" rows={4} maxLength={3000} className="f-input" />
              </div>
              <div className="sr-hp" aria-hidden="true">
                <label htmlFor="d-website">{d.hp}</label>
                <input id="d-website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <div>
                <label className="flex items-start gap-3 text-[14px]">
                  <input
                    type="checkbox"
                    name="consent"
                    className="mt-1 size-5 shrink-0 accent-[var(--color-azul)]"
                    aria-invalid={errors.consent ? true : undefined}
                    aria-describedby={errors.consent ? "d-consent-err" : undefined}
                    onChange={onBlur("consent")}
                  />
                  <span>
                    {d.consentA}
                    <a href={lp(locale, "/confidentialite")} className="font-semibold text-azul underline">{d.consentLink}</a>. *
                  </span>
                </label>
                {errors.consent && <p id="d-consent-err" className="f-err">{errors.consent}</p>}
              </div>
              <button type="submit" disabled={state === "sending"} className="btn-pill w-full disabled:opacity-70">
                {state === "sending" ? d.sending : <>{d.submit} <span className="arr">→</span></>}
              </button>
              {state === "error" && (
                <p role="alert" className="f-err">{d.error}</p>
              )}
              {CALENDLY_URL && (
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="link-u !text-azul">
                  {d.calendly} <span className="arr">→</span>
                </a>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
