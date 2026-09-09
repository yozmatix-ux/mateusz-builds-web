import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV } from "./data";
import { btnStyles } from "./Btn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1280px] items-center justify-between px-6 transition-all duration-500 lg:px-10",
          scrolled ? "h-16" : "h-24",
        )}
      >
        <a href="#top" className="group flex items-center gap-3" aria-label="Mateusz Wojtera">
          <span className="flex size-9 items-center justify-center rounded-sm border border-border-strong font-display text-[0.7rem] font-semibold tracking-[0.1em] transition-colors group-hover:border-accent group-hover:text-accent">
            MW
          </span>
          <span className="hidden font-display text-sm font-medium tracking-tight sm:block">
            Mateusz Wojtera
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Główna nawigacja">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#kontakt" className={cn(btnStyles.solid, "hidden py-3 sm:inline-flex")}>
            Porozmawiajmy
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            className="flex size-10 items-center justify-center rounded-sm border border-border-strong text-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-background px-6 pb-10 pt-6 lg:hidden">
          <nav className="flex flex-col" aria-label="Nawigacja mobilna">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-5 font-display text-2xl tracking-tight"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className={cn(btnStyles.solid, "mt-8 w-full")}
          >
            Porozmawiajmy
          </a>
        </div>
      )}
    </header>
  );
}
