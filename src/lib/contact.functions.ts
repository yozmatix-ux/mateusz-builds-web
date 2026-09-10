import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const NOTIFY_TO = "wojtera.web@gmail.com";

const schema = z.object({
  imie: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  telefon: z.string().trim().max(60).optional().default(""),
  rodzaj_strony: z.string().trim().max(120).optional().default(""),
  wiadomosc: z.string().trim().min(1).max(5000),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendNotification(input: z.infer<typeof schema>) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  const senderDomain = process.env["LOVABLE_EMAIL_DOMAIN"];
  if (!apiKey || !senderDomain) return;

  const { sendLovableEmail } = await import("@lovable.dev/email-js");

  const rows: Array<[string, string]> = [
    ["Imię", input.imie],
    ["Email", input.email],
    ...(input.telefon ? ([["Telefon", input.telefon]] as Array<[string, string]>) : []),
    ["Rodzaj strony", input.rodzaj_strony || "—"],
  ];

  const text = [
    "Nowe zapytanie z formularza kontaktowego na stronie.",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Wiadomość:",
    input.wiadomosc,
  ].join("\n");

  const html = `
    <h2>Nowe zapytanie z formularza kontaktowego</h2>
    <p>Ktoś wysłał zapytanie przez formularz na Twojej stronie.</p>
    <ul>
      ${rows.map(([k, v]) => `<li><strong>${k}:</strong> ${escapeHtml(v)}</li>`).join("")}
    </ul>
    <p><strong>Wiadomość:</strong></p>
    <p>${escapeHtml(input.wiadomosc).replace(/\n/g, "<br />")}</p>
  `;

  await sendLovableEmail(
    {
      to: NOTIFY_TO,
      from: `formularz@${senderDomain}`,
      sender_domain: senderDomain,
      reply_to: input.email,
      subject: `Nowe zapytanie ze strony – ${input.imie}`,
      html,
      text,
      purpose: "transactional",
      label: "contact-form",
    },
    { apiKey },
  );
}

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabase = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabase.from("formularze").insert({
      imie: data.imie,
      email: data.email,
      telefon: data.telefon || null,
      rodzaj_strony: data.rodzaj_strony || null,
      wiadomosc: data.wiadomosc,
    });

    if (error) {
      console.error("Contact form insert failed", error);
      throw new Error("SAVE_FAILED");
    }

    try {
      await sendNotification(data);
    } catch (emailError) {
      console.error("Contact form notification failed", emailError);
    }

    return { ok: true };
  });
