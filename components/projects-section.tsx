"use client";

import { useMemo, useState } from "react";
import { projectCategories } from "@/lib/portfolio-data";
import type { Project, ProjectCategory } from "@/types/portfolio";
import { ProjectCard } from "./project-card";

type ProjectsSectionProps = {
  projects: Project[];
};

type ProjectFilter = "TODOS" | ProjectCategory;

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("TODOS");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "TODOS") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <section id="projetos" className="section-anchor shell py-12 sm:py-16 lg:py-20">
      <div className="flex flex-wrap gap-3">
        <FilterButton
          label="TODOS"
          isActive={activeFilter === "TODOS"}
          onClick={() => setActiveFilter("TODOS")}
        />
        {projectCategories.map((category) => (
          <FilterButton
            key={category.value}
            label={category.label}
            isActive={activeFilter === category.value}
            onClick={() => setActiveFilter(category.value)}
          />
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

type FilterButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

function FilterButton({ label, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition sm:px-5",
        isActive
          ? "border-accent bg-accent text-white"
          : "border-line bg-white text-muted hover:border-accent hover:text-accent",
      ].join(" ")}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}
