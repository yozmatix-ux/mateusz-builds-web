import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { EMAIL, EMAIL_HREF } from "@/components/site/data";

const TITLE = "Cookies | Mateusz Wojtera";
const DESC = "Informacja o plikach cookies wykorzystywanych na stronie Mateusza Wojtery.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
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
          Pliki cookies
        </h1>
        <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
          <p>
            Ta strona nie wykorzystuje plików cookies do celów marketingowych ani profilowania. Nie
            zbieram danych o zachowaniu użytkowników.
          </p>
          <p>
            Jeśli w przyszłości dodam narzędzia analityczne, poinformuję o tym w tym miejscu i
            poproszę o zgodę przed ich uruchomieniem.
          </p>
          <p>
            Pytania dotyczące prywatności możesz kierować na adres{" "}
            <a href={EMAIL_HREF} className="text-foreground underline underline-offset-4">
              {EMAIL}
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
