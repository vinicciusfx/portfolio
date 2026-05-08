import Link from "next/link";
import { withBasePath } from "@/lib/site-paths";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projetos/${project.slug}`}
      className="group surface-card-strong flex h-full flex-col overflow-hidden transition hover:-translate-y-1.5 hover:[border-color:var(--color-accent)]"
    >
      <div className="relative min-h-56 overflow-hidden">
        {project.cardImage ? (
          <>
            <img
              src={withBasePath(project.cardImage.src)}
              alt={project.cardImage.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,14,29,0.08),rgba(7,14,29,0.72))]" />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]})`,
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_38%)]" />
          </>
        )}
        <div className="relative flex min-h-56 flex-col justify-between px-6 py-7">
          <span className="inline-flex w-fit rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
            {project.category}
          </span>
          <div className="text-2xl font-semibold text-white">{project.title}</div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-base leading-7 text-muted">{project.shortDescription}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.slice(0, 3).map((tool) => (
            <span key={tool} className="pill border-line bg-accentSoft px-3 py-1 text-xs">
              {tool}
            </span>
          ))}
        </div>
        <div className="mt-6 text-sm font-semibold text-accent transition group-hover:translate-x-0.5">
          Ver projeto →
        </div>
      </div>
    </Link>
  );
}
