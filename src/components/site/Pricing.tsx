import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { btnStyles } from "./Btn";

const PACKAGES = [
  {
    name: "Start",
    price: "od 1500 zł",
    for: "Dla prostych stron wizytówkowych.",
    items: [
      "do 5 podstron",
      "responsywny design",
      "indywidualny wygląd",
      "formularz kontaktowy",
      "podstawowa optymalizacja SEO",
      "wdrożenie strony",
    ],
    highlight: false,
  },
  {
    name: "Business",
    price: "od 2200 zł",
    for: "Dla bardziej rozbudowanych stron firmowych.",
    items: [
      "większa liczba podstron",
      "indywidualny design",
      "formularze",
      "blog",
      "dodatkowe integracje",
      "podstawowe SEO",
      "responsywność",
      "wdrożenie",
    ],
    highlight: true,
  },
  {
    name: "Sklep",
    price: "od 3000 zł",
    for: "Dla sklepów internetowych.",
    items: [
      "sklep internetowy",
      "produkty",
      "koszyk",
      "zamówienia",
      "płatności online",
      "podstawowa konfiguracja dostawy",
      "konto klienta",
      "responsywność",
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="cennik" className="mx-auto max-w-[1280px] px-6 pt-28 lg:px-10 lg:pt-40">
      <Reveal>
        <p className="eyebrow">Cennik</p>
        <h2 className="mt-6 max-w-2xl font-display text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[3rem]">
          Prosty i przejrzysty cennik
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Podane ceny są cenami startowymi. Ostateczna wycena zależy od zakresu projektu, liczby
          podstron i dodatkowych funkcji.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-px lg:grid-cols-3">
        {PACKAGES.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 100}
            className={cn(
              "flex flex-col border border-border p-8 lg:p-10",
              p.highlight && "border-accent/40 bg-surface/70",
            )}
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
              {p.name}
            </p>
            <p className="mt-6 font-display text-4xl font-semibold tracking-tight">{p.price}</p>
            <p className="mt-3 text-sm text-muted-foreground">{p.for}</p>
            <ul className="mt-8 flex-1 space-y-3 border-t border-border pt-8">
              {p.items.map((it) => (
                <li key={it} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-accent">—</span>
                  {it}
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className={cn(p.highlight ? btnStyles.solid : btnStyles.outline, "mt-10 w-full")}
            >
              Zapytaj o wycenę
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={60}>
        <p className="mt-8 text-sm text-muted-foreground">
          Dodatkowe funkcje i płatne usługi zewnętrzne mogą być wyceniane osobno.
        </p>
      </Reveal>
    </section>
  );
}
