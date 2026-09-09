import { Reveal } from "./Reveal";
import { PROJECTS } from "./projects";
import { PortfolioProject } from "./PortfolioProject";

export function Portfolio() {
  return (
    <section id="realizacje" className="mx-auto max-w-[1280px] px-6 pt-28 lg:px-10 lg:pt-40">
      <Reveal>
        <p className="eyebrow">Realizacje</p>
        <h2 className="mt-6 max-w-2xl font-display text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[3rem]">
          Projekty demonstracyjne
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Buduję swoje portfolio, dlatego poniżej pokazuję przykładowe projekty przygotowane w celu
          zaprezentowania różnych możliwości.
        </p>
      </Reveal>

      <div className="mt-16 space-y-24 lg:mt-24 lg:space-y-36">
        {PROJECTS.map((project, i) => (
          <PortfolioProject key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
