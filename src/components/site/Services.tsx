import { Reveal } from "./Reveal";
import { Btn } from "./Btn";

const SERVICES = [
  {
    n: "01",
    title: "Strona wizytówka",
    desc: "Prosta strona dla osoby, freelancera lub małego biznesu.",
    items: ["strona główna", "informacje o firmie/osobie", "oferta", "kontakt", "formularz"],
    price: "od 1500 zł",
  },
  {
    n: "02",
    title: "Strona firmowa",
    desc: "Rozbudowana strona dla firmy lub usługodawcy.",
    items: ["kilka podstron", "oferta", "o firmie", "kontakt", "formularze", "blog opcjonalnie"],
    price: "od 2200 zł",
  },
  {
    n: "03",
    title: "Landing page",
    desc: "Jedna konkretna strona nastawiona na prezentację usługi, produktu lub kampanii.",
    items: ["jedna strona", "sekcja oferty", "wezwanie do działania", "formularz"],
    price: "od 1000 zł",
  },
  {
    n: "04",
    title: "Sklep internetowy",
    desc: "Sklep z produktami, koszykiem, zamówieniami i możliwością podpięcia płatności.",
    items: ["produkty", "koszyk", "zamówienia", "płatności online", "konto klienta"],
    price: "od 3000 zł",
  },
  {
    n: "05",
    title: "Indywidualny projekt",
    desc: "Jeśli potrzebujesz niestandardowego rozwiązania, ustalimy zakres i przygotuję indywidualną wycenę.",
    items: ["dowolny zakres", "integracje", "wycena indywidualna"],
    price: "wycena indywidualna",
  },
];

export function Services() {
  return (
    <section id="uslugi" className="mx-auto max-w-[1280px] px-6 pt-28 lg:px-10 lg:pt-40">
      <Reveal>
        <p className="eyebrow">Usługi</p>
        <h2 className="mt-6 max-w-2xl font-display text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[3rem]">
          W czym mogę Ci pomóc?
        </h2>
      </Reveal>

      <div className="mt-14 border-t border-border">
        {SERVICES.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 60}
            className="group grid gap-6 border-b border-border py-10 transition-colors duration-500 hover:bg-surface/60 md:grid-cols-[auto_1.1fr_1fr_auto] md:items-start md:gap-10 md:px-4"
          >
            <span className="font-display text-xs tracking-[0.2em] text-accent md:pt-2">
              {s.n}
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                {s.title}
              </h3>
              <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:pt-2">
              {s.items.map((it) => (
                <li key={it} className="text-sm text-muted-foreground">
                  <span className="mr-2 text-accent">—</span>
                  {it}
                </li>
              ))}
            </ul>
            <p className="font-display text-sm font-semibold whitespace-nowrap md:pt-2">
              {s.price}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={80} className="mt-12">
        <Btn href="#kontakt">Zapytaj o wycenę</Btn>
      </Reveal>
    </section>
  );
}
