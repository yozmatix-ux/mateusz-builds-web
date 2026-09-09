export const CONTACT = {
  name: "Mateusz Wojtera",
  role: "Freelance web developer",
  phone: "+48 511 872 509",
  email: "yozmatix@gmail.com",
  website: "https://mateusz-builds-web.lovable.app",
  language: "pl",
};

export const SERVICES = [
  {
    title: "Strona wizytówka",
    description: "Prosta strona dla osoby, freelancera lub małego biznesu.",
    includes: ["strona główna", "informacje o firmie/osobie", "oferta", "kontakt", "formularz"],
    priceFrom: "od 1500 zł",
  },
  {
    title: "Strona firmowa",
    description: "Rozbudowana strona dla firmy lub usługodawcy.",
    includes: ["kilka podstron", "oferta", "o firmie", "kontakt", "formularze", "blog opcjonalnie"],
    priceFrom: "od 2200 zł",
  },
  {
    title: "Landing page",
    description: "Jedna strona nastawiona na prezentację usługi, produktu lub kampanii.",
    includes: ["jedna strona", "sekcja oferty", "wezwanie do działania", "formularz"],
    priceFrom: "od 1000 zł",
  },
  {
    title: "Sklep internetowy",
    description: "Sklep z produktami, koszykiem, zamówieniami i płatnościami online.",
    includes: ["produkty", "koszyk", "zamówienia", "płatności online", "konto klienta"],
    priceFrom: "od 3000 zł",
  },
  {
    title: "Indywidualny projekt",
    description: "Niestandardowe rozwiązanie z indywidualnie ustalonym zakresem.",
    includes: ["dowolny zakres", "integracje", "wycena indywidualna"],
    priceFrom: "wycena indywidualna",
  },
];

export const PACKAGES = [
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
  },
];

export const PRICING_NOTE =
  "Podane ceny są cenami startowymi. Ostateczna wycena zależy od zakresu projektu, liczby podstron i dodatkowych funkcji. Wycena jest bezpłatna.";

export const DEMO_PROJECTS = [
  {
    slug: "forma-studio",
    title: "Forma Studio",
    category: "Strona firmowa",
    description:
      "Koncepcja strony dla studia fitness i wellness — grafik zajęć, prezentacja trenerów i zapisy online.",
    longDescription:
      "Projekt demonstracyjny pokazujący, jak może wyglądać strona lokalnego studia fitness. Spokojna typografia, duże zdjęcia i przejrzysty grafik zajęć, a całość prowadzi użytkownika do zapisu na trening.",
    features: ["Grafik zajęć", "Profile trenerów", "Formularz zapisu", "Cennik karnetów", "SEO lokalne"],
    url: "/realizacje/forma-studio",
  },
  {
    slug: "north-coffee",
    title: "North Coffee",
    category: "Landing page",
    description:
      "Landing page premium marki kawowej — jedna strona skupiona na produkcie i wezwaniu do działania.",
    longDescription:
      "Projekt demonstracyjny jednostronicowej witryny dla marki kawy specialty. Mocna typografia, ciemna kolorystyka i wyraźna ścieżka od historii marki do zamówienia.",
    features: ["Jedna strona", "Sekcja produktu", "Newsletter", "Animacje przy scrollu", "Optymalizacja mobilna"],
    url: "/realizacje/north-coffee",
  },
  {
    slug: "domforma",
    title: "DomForma",
    category: "Sklep internetowy",
    description:
      "Koncepcja sklepu z dekoracjami do domu — katalog produktów, koszyk i płatności online.",
    longDescription:
      "Projekt demonstracyjny sklepu internetowego z minimalistycznymi dodatkami do wnętrz. Jasny, spokojny układ, czytelna karta produktu i prosty proces zakupu.",
    features: ["Katalog produktów", "Koszyk", "Płatności online", "Konto klienta", "Panel zamówień"],
    url: "/realizacje/domforma",
  },
];

export const PROJECTS_NOTE =
  "Wszystkie projekty są demonstracyjne (koncepcyjne), a nie realizacjami dla klientów.";

export const FAQ = [
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
