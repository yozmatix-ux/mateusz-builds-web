import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import type { Project } from "./projects";

export function PortfolioProject({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal
      as="article"
      className={cn(
        "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
        reversed && "lg:[&>*:first-child]:order-2",
      )}
    >
      <Link
        to="/realizacje/$slug"
        params={{ slug: project.slug }}
        className="group relative block overflow-hidden rounded-md border border-border"
      >
        <img
          src={project.image}
          alt={project.alt}
          width={1200}
          height={912}
          loading="lazy"
          className="w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 rounded-sm bg-background/80 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          Projekt demonstracyjny
        </span>
      </Link>

      <div>
        <div className="flex items-center gap-4">
          <span className="font-display text-xs tracking-[0.2em] text-accent">{project.n}</span>
          <span className="eyebrow">{project.category}</span>
        </div>
        <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.features.map((f) => (
            <li
              key={f}
              className="rounded-sm border border-border px-3 py-1.5 text-xs text-muted-foreground"
            >
              {f}
            </li>
          ))}
        </ul>
        <Link
          to="/realizacje/$slug"
          params={{ slug: project.slug }}
          className="mt-8 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-accent"
        >
          Zobacz projekt
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </Reveal>
  );
}
