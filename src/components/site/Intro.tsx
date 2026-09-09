import { Reveal } from "./Reveal";
import { Btn } from "./Btn";

export function Intro() {
  return (
    <section id="o-mnie" className="mx-auto max-w-[1280px] px-6 pt-28 lg:px-10 lg:pt-40">
      <div className="grid gap-12 border-t border-border pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">O mnie</p>
          <h2 className="mt-6 font-display text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[3rem]">
            Zaczynam budować swoje portfolio.
          </h2>
        </Reveal>

        <Reveal delay={100} className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Jestem Mateusz i zajmuję się tworzeniem stron internetowych. Rozwijam swoją
            działalność i obecnie skupiam się na realizacji pierwszych projektów dla klientów.
          </p>
          <p>
            Zależy mi na tym, żeby każda strona była estetyczna, funkcjonalna i dopasowana do
            konkretnego biznesu — bez niepotrzebnego komplikowania.
          </p>
          <p className="border-l-2 border-accent pl-6 text-foreground">
            Jeśli szukasz kogoś do stworzenia strony i zależy Ci na bezpośrednim kontakcie,
            chętnie porozmawiam o Twoim pomyśle.
          </p>
          <div className="pt-2">
            <Btn href="#kontakt" variant="outline">
              Napisz do mnie
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
