import { useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { btnStyles } from "./Btn";
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "./data";
import { supabase } from "@/integrations/supabase/client";

const TYPES = [
  "Strona wizytówka",
  "Strona firmowa",
  "Landing page",
  "Sklep internetowy",
  "Inne",
];

const field =
  "w-full rounded-sm border border-input bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

const labelCls =
  "block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const imie = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telefon = String(data.get("phone") ?? "").trim();
    const rodzaj_strony = String(data.get("type") ?? "").trim();
    const wiadomosc = String(data.get("message") ?? "").trim();

    setError(null);

    if (!imie || !email || !wiadomosc) {
      setError("Uzupełnij wszystkie wymagane pola.");
      return;
    }

    setSending(true);

    try {
      console.log("[Contact] Rozpoczynam zapis formularza...");

      const { error: insertError } = await supabase
        .from("formularze")
        .insert({
          imie,
          email,
          telefon: telefon || null,
          rodzaj_strony: rodzaj_strony || null,
          wiadomosc,
        });

      if (insertError) {
        console.error("[Contact] SUPABASE INSERT ERROR:", {
          message: insertError.message,
          details: insertError.details,
          hint: insertError.hint,
          code: insertError.code,
        });

        throw insertError;
      }

      console.log("[Contact] Formularz zapisany poprawnie.");

      form.reset();
      setSent(true);
    } catch (err) {
      console.error("[Contact] Contact form error:", err);

      const supabaseError = err as {
        message?: string;
        details?: string;
