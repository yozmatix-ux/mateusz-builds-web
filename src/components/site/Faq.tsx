import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const FAQ = [
  {
    q: "Ile kosztuje strona internetowa?",
    a: "Prosta strona wizytówka zaczyna się od 1500 zł, strona firmowa od 2200 zł, a sklep od 3000 zł. Ostateczna cena zależy od zakresu i funkcji.",
  },
  {
    q: "Ile trwa realizacja?",
    a: "Zwykle od kilku dni do kilku tygodni — zależnie od wielkości projektu i tego, jak szybko otrzymam materiały i akceptacje.",
  },
  {
    q: "Czy pomagasz z domeną i hostingiem?",
    a: "Tak. Podpowiem, co wybrać, i pomogę wszystko skonfigurować. Opłaty za domenę i hosting ponosisz bezpośrednio u dostawcy.",
  },
  {
    q: "Czy strona będzie responsywna?",
    a: "Tak, każdą stronę przygotowuję tak, żeby dobrze działała i wyglądała na telefonie, tablecie i komputerze.",
  },
  {
    q: "Czy można później rozbudować stronę?",
    a: "Tak. Stronę można rozwijać etapami — dodać sklep, blog, płatności, rezerwacje czy konta użytkowników.",
  },
  {
    q: "Czy tworzysz sklepy internetowe?",
    a: "Tak. Przygotuję katalog produktów, koszyk, zamówienia oraz konto klienta.",
  },
  {
    q: "Czy można dodać płatności?",
    a: "Tak, można podpiąć płatności online. Rozliczenia i prowizje odbywają się po stronie wybranego operatora płatności.",
  },
  {
    q: "Czy można dodać konto użytkownika?",
    a: "Tak — logowanie, rejestracja i panel użytkownika to funkcje, które mogę wdrożyć.",
  },
  {
    q: "Co muszę przygotować przed rozpoczęciem?",
    a: "Najlepiej teksty, logo i zdjęcia, jeśli je masz. Jeśli nie — ustalimy to wspólnie i podpowiem, co będzie potrzebne.",
  },
  {
    q: "Jak wygląda wycena?",
    a: "Piszesz, czego potrzebujesz, ja zadaję kilka pytań i przygotowuję konkretną wycenę wraz z zakresem prac. Wycena jest bezpłatna.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-[1280px] px-6 pt-28 lg:px-10 lg:pt-40">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-6 font-display text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[3rem]">
            Najczęstsze pytania
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full border-t border-border">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left font-display text-base font-medium tracking-tight hover:no-underline sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
