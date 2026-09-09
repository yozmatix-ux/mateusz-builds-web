import { Link } from "@tanstack/react-router";
import { NAV, EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-16 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-10 lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-sm border border-border-strong font-display text-[0.7rem] font-semibold tracking-[0.1em]">
              MW
            </span>
            <span className="font-display text-sm font-medium tracking-tight">
              Mateusz Wojtera
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">
            Strony internetowe na zamówienie.
          </p>
        </div>

        <nav aria-label="Nawigacja w stopce">
          <p className="eyebrow">Nawigacja</p>
          <ul className="mt-5 space-y-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Kontakt</p>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={PHONE_HREF}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={EMAIL_HREF}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {EMAIL}
              </a>
            </li>
          </ul>
          <ul className="mt-8 space-y-3">
            <li>
              <Link
                to="/polityka-prywatnosci"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Polityka prywatności
              </Link>
            </li>
            <li>
              <Link
                to="/cookies"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-6 py-6 lg:px-10">
          <p className="text-xs text-muted-foreground">© 2026 Mateusz Wojtera</p>
        </div>
      </div>
    </footer>
  );
}
