import { useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { btnStyles } from "./Btn";
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "./data";
import { submitContactForm } from "@/lib/contact.functions";

const TYPES = [
  "Strona wizytówka",
  "Strona firmowa",
  "Landing page",
  "Sklep internetowy",
  "Inne",
];

const field =
  "w-full rounded-sm border border-input bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";
const labelCls = "block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Imię: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Telefon: ${data.get("phone")}`,
      `Rodzaj strony: ${data.get("type")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `${EMAIL_HREF}?subject=${encodeURIComponent(
      "Zapytanie o stronę internetową",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="kontakt" className="mt-28 lg:mt-40">
      <div className="accent-glow relative overflow-hidden border-t border-border py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">Kontakt</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-[3.5rem]">
                Masz pomysł na stronę?
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Opowiedz mi, czego potrzebujesz. Nawet jeśli nie masz jeszcze dokładnego pomysłu —
                możemy wspólnie ustalić, czego potrzebujesz.
              </p>

              <div className="mt-10 space-y-4 border-t border-border pt-10">
                <p className="font-display text-lg font-semibold">Mateusz Wojtera</p>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
                >
                  <Phone className="size-4" />
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
                >
                  <Mail className="size-4" />
                  {EMAIL}
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={EMAIL_HREF} className={btnStyles.solid}>
                  Napisz e-mail
                </a>
                <a href={PHONE_HREF} className={btnStyles.outline}>
                  Zadzwoń
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              {sent ? (
                <div className="flex h-full min-h-64 flex-col justify-center border border-accent/40 bg-surface/70 p-10">
                  <p className="font-display text-2xl font-semibold tracking-tight">
                    Dziękuję za wiadomość.
                  </p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Odezwę się tak szybko, jak to możliwe.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 border border-border bg-surface/50 p-6 sm:p-10"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className={labelCls} htmlFor="name">
                        Imię
                      </label>
                      <input id="name" name="name" required className={field} placeholder="Twoje imię" />
                    </div>
                    <div className="space-y-2">
                      <label className={labelCls} htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={field}
                        placeholder="twoj@email.pl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className={labelCls} htmlFor="phone">
                        Telefon
                      </label>
                      <input id="phone" name="phone" className={field} placeholder="opcjonalnie" />
                    </div>
                    <div className="space-y-2">
                      <label className={labelCls} htmlFor="type">
                        Rodzaj strony
                      </label>
                      <select id="type" name="type" className={cn(field, "appearance-none")}>
                        {TYPES.map((t) => (
                          <option key={t} value={t} className="bg-background">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className={labelCls} htmlFor="message">
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className={cn(field, "resize-none")}
                      placeholder="Napisz krótko, czego potrzebujesz."
                    />
                  </div>

                  <button type="submit" className={cn(btnStyles.solid, "w-full")}>
                    Wyślij zapytanie
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Formularz otworzy Twój program pocztowy z gotową wiadomością do mnie.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
