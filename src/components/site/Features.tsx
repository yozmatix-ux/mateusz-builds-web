import { Reveal } from "./Reveal";

const FEATURES = [
  "sklep internetowy",
  "płatności online",
  "formularze",
  "newsletter",
  "blog",
  "konta użytkowników",
  "logowanie",
  "system rezerwacji",
  "integracje",
  "Google Maps",
  "analityka",
  "SEO",
  "social media",
  "automatyczne wiadomości",
];

export function Features() {
  return (
    <section className="mt-28 border-y border-border bg-surface/50 py-24 lg:mt-40 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[3rem]">
              Strona może robić znacznie więcej.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Stronę internetową można rozbudować o dodatkowe funkcje — od sprzedaży online, przez
              rezerwacje, po konta użytkowników. Wszystko można wdrożyć od razu albo dodawać
              stopniowo, kiedy biznes tego potrzebuje.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="flex flex-wrap gap-2.5">
              {FEATURES.map((f) => (
                <li
                  key={f}
                  className="rounded-sm border border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-foreground"
                >
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-lg border-l-2 border-accent pl-6 leading-relaxed">
              Nie wiesz, czego dokładnie potrzebujesz? Napisz — wspólnie ustalimy najlepsze
              rozwiązanie.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
