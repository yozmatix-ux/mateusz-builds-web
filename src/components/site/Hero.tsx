import heroImg from "@/assets/hero-browser.jpg";
import { Reveal } from "./Reveal";
import { Btn } from "./Btn";

export function Hero() {
  return (
    <section id="top" className="accent-glow relative overflow-hidden pt-36 lg:pt-44">
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">
                Strony internetowe <span className="text-accent">•</span> Sklepy{" "}
                <span className="text-accent">•</span> Realizacje na zamówienie
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-[2.6rem] leading-[1.05] font-semibold sm:text-6xl lg:text-[4.2rem]">
                Tworzę strony internetowe, które dobrze reprezentują{" "}
                <span className="text-accent">Twój biznes.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Proste wizytówki, strony firmowe, landing page&apos;e i sklepy internetowe —
                dopasowane do Twoich potrzeb.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Btn href="#kontakt">Zapytaj o stronę</Btn>
                <Btn href="#realizacje" variant="outline">
                  Zobacz realizacje
                </Btn>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Pierwsze realizacje od <span className="text-foreground">1500 zł</span>
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-8 rounded-full bg-accent/10 blur-[90px]"
              />
              <img
                src={heroImg}
                alt="Przykładowy interfejs nowoczesnej strony internetowej w oknie przeglądarki"
                width={1408}
                height={1008}
                className="relative w-full rounded-md border border-border"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
