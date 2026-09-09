import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { EMAIL, EMAIL_HREF } from "@/components/site/data";

const TITLE = "Polityka prywatności | Mateusz Wojtera";
const DESC = "Informacje o przetwarzaniu danych osobowych na stronie Mateusza Wojtery.";

export const Route = createFileRoute("/polityka-prywatnosci")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/polityka-prywatnosci" },
    ],
    links: [{ rel: "canonical", href: "/polityka-prywatnosci" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-28 lg:pt-36">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Strona główna
        </Link>
        <h1 className="mt-10 font-display text-4xl leading-tight font-semibold sm:text-5xl">
          Polityka prywatności
        </h1>
        <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
          <p>
            Administratorem danych podanych w formularzu kontaktowym oraz w korespondencji
            e-mailowej jest Mateusz Wojtera. Kontakt w sprawie danych:{" "}
            <a href={EMAIL_HREF} className="text-foreground underline underline-offset-4">
              {EMAIL}
            </a>
            .
          </p>
          <h2 className="pt-4 font-display text-2xl font-semibold text-foreground">
            Jakie dane zbieram
          </h2>
          <p>
            Zbieram wyłącznie dane, które przekazujesz mi dobrowolnie: imię, adres e-mail, numer
            telefonu oraz treść wiadomości. Formularz kontaktowy przygotowuje wiadomość w Twoim
            programie pocztowym — dane nie są zapisywane w bazie strony.
          </p>
          <h2 className="pt-4 font-display text-2xl font-semibold text-foreground">
            W jakim celu
          </h2>
          <p>
            Dane wykorzystuję wyłącznie do odpowiedzi na zapytanie, przygotowania wyceny i
            ewentualnej realizacji projektu.
          </p>
          <h2 className="pt-4 font-display text-2xl font-semibold text-foreground">
            Twoje prawa
          </h2>
          <p>
            Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia oraz ograniczenia
            przetwarzania. Wystarczy napisać na podany adres e-mail.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
