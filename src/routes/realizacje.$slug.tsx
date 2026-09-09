import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/components/site/projects";
import { Footer } from "@/components/site/Footer";
import { Btn } from "@/components/site/Btn";

export const Route = createFileRoute("/realizacje/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Nie znaleziono projektu" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.project.title} – projekt demonstracyjny | Mateusz Wojtera`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.project.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/realizacje/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/realizacje/${params.slug}` }],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();

  return (
    <>
      <main className="mx-auto max-w-[1100px] px-6 pb-24 pt-28 lg:px-10 lg:pt-36">
        <Link
          to="/"
          hash="realizacje"
          className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Wróć do realizacji
        </Link>

        <p className="eyebrow mt-12">{project.category} — projekt demonstracyjny</p>
        <h1 className="mt-6 font-display text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {project.longDescription}
        </p>

        <img
          src={project.image}
          alt={project.alt}
          width={1200}
          height={912}
          className="mt-12 w-full rounded-md border border-border"
        />

        <div className="mt-16 grid gap-10 border-t border-border pt-12 sm:grid-cols-2">
          <div>
            <p className="eyebrow">Zakres i funkcje</p>
            <ul className="mt-5 space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 text-muted-foreground">
                  <span className="text-accent">—</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Informacja</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              To projekt demonstracyjny, przygotowany w celu zaprezentowania możliwości — nie jest
              to realizacja dla klienta. Podobną stronę mogę przygotować dla Twojego biznesu.
            </p>
            <Btn href="/#kontakt" className="mt-8">
              Zapytaj o podobną stronę
            </Btn>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
