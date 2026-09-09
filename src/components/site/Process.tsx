import { Reveal } from "./Reveal";

const STEPS = [
  { n: "01", title: "Napisz do mnie", text: "Opowiedz krótko, czego potrzebujesz." },
  {
    n: "02",
    title: "Ustalamy szczegóły",
    text: "Rozmawiamy o wyglądzie, funkcjach i zakresie projektu.",
  },
  { n: "03", title: "Tworzę stronę", text: "Przygotowuję projekt i wprowadzam ustalone elementy." },
  { n: "04", title: "Publikujemy", text: "Po akceptacji uruchamiamy gotową stronę." },
];

export function Process() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-28 lg:px-10 lg:pt-40">
      <Reveal>
        <p className="eyebrow">Współpraca</p>
        <h2 className="mt-6 max-w-2xl font-display text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[3rem]">
          Jak wygląda współpraca?
        </h2>
      </Reveal>

      <ol className="mt-14 grid gap-10 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {STEPS.map((s, i) => (
          <Reveal as="li" key={s.n} delay={i * 90}>
            <span className="font-display text-xs tracking-[0.2em] text-accent">{s.n}</span>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
