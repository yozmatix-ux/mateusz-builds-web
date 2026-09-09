import formaImg from "@/assets/project-forma.jpg";
import northImg from "@/assets/project-north.jpg";
import domformaImg from "@/assets/project-domforma.jpg";

export type Project = {
  slug: string;
  n: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  alt: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "forma-studio",
    n: "01",
    title: "Forma Studio",
    category: "Strona firmowa",
    description:
      "Koncepcja strony dla studia fitness i wellness — grafik zajęć, prezentacja trenerów i zapisy online.",
    longDescription:
      "Projekt demonstracyjny pokazujący, jak może wyglądać strona lokalnego studia fitness. Spokojna typografia, duże zdjęcia i przejrzysty grafik zajęć, a całość prowadzi użytkownika do zapisu na trening.",
    features: ["Grafik zajęć", "Profile trenerów", "Formularz zapisu", "Cennik karnetów", "SEO lokalne"],
    image: formaImg,
    alt: "Makieta strony internetowej studia fitness i wellness Forma Studio",
  },
  {
    slug: "north-coffee",
    n: "02",
    title: "North Coffee",
    category: "Landing page",
    description:
      "Landing page premium marki kawowej — jedna strona skupiona na produkcie i wezwaniu do działania.",
    longDescription:
      "Projekt demonstracyjny jednostronicowej witryny dla marki kawy specialty. Mocna typografia, ciemna kolorystyka i wyraźna ścieżka od historii marki do zamówienia.",
    features: ["Jedna strona", "Sekcja produktu", "Newsletter", "Animacje przy scrollu", "Optymalizacja mobilna"],
    image: northImg,
    alt: "Makieta landing page'a premium marki kawowej North Coffee",
  },
  {
    slug: "domforma",
    n: "03",
    title: "DomForma",
    category: "Sklep internetowy",
    description:
      "Koncepcja sklepu z dekoracjami do domu — katalog produktów, koszyk i płatności online.",
    longDescription:
      "Projekt demonstracyjny sklepu internetowego z minimalistycznymi dodatkami do wnętrz. Jasny, spokojny układ, czytelna karta produktu i prosty proces zakupu.",
    features: ["Katalog produktów", "Koszyk", "Płatności online", "Konto klienta", "Panel zamówień"],
    image: domformaImg,
    alt: "Makieta sklepu internetowego z dekoracjami do domu DomForma",
  },
];
