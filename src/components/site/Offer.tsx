import { Reveal } from "./Reveal";

const ITEMS = [
  {
    n: "01",
    title: "Bezpośredni kontakt",
    text: "Współpracujesz bezpośrednio ze mną — od pierwszej rozmowy aż do uruchomienia strony.",
  },
  {
    n: "02",
    title: "Indywidualne podejście",
    text: "Nie każda firma potrzebuje tego samego. Dopasowuję zakres projektu do Twoich potrzeb i budżetu.",
  },
  {
    n: "03",
    title: "Nowoczesny design",
    text: "Stawiam na przejrzyste, estetyczne i responsywne strony, które dobrze wyglądają również na telefonie.",
  },
  {
    n: "04",
    title: "Możliwość rozbudowy",
    text: "Stronę można później rozbudować o sklep, płatności, formularze, konto klienta, blog czy inne funkcje.",
  },
];

export function Offer() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-28 lg:px-10 lg:pt-40">
      <Reveal>
        <h2 className="max-w-2xl font-display text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[3rem]">
          Co mogę Ci zaoferować?
        </h2>
      </Reveal>

      <ul className="mt-14 grid gap-px border-t border-border sm:grid-cols-2">
        {ITEMS.map((item, i) => (
          <Reveal as="li" key={item.n} delay={i * 80} className="group border-b border-border py-10 sm:px-8 sm:odd:pl-0 sm:even:border-l">
            <span className="font-display text-xs tracking-[0.2em] text-accent">{item.n}</span>
            <h3 className="mt-5 text-lg font-semibold uppercase tracking-[0.06em]">
              {item.title}
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{item.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
