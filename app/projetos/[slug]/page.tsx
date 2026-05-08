import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactSection } from "@/components/contact-section";
import { ProjectGallery } from "@/components/project-gallery";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/portfolio-data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Projeto não encontrado | Pedro Vinicius",
    };
  }

  return {
    title: `${project.title} | Pedro Vinicius`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pb-14 sm:pb-20">
      <section className="shell py-10 sm:py-14 lg:py-20">
        <div className="surface-card-strong relative overflow-hidden p-7 sm:p-10 lg:p-12">
          <div
            className="absolute inset-x-0 top-0 h-28 opacity-80 blur-3xl"
            style={{
              background: `linear-gradient(90deg, ${project.palette[0]}, ${project.palette[1]})`,
            }}
          />
          <div className="relative">
            <Link
              href="/#projetos"
              className="eyebrow transition hover:opacity-80"
            >
              ← Voltar aos projetos
            </Link>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl">{project.title}</h1>
                <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.tools.map((tool) => (
                    <span key={tool} className="pill">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.externalLink.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-center font-semibold text-white transition hover:-translate-y-0.5"
              >
                {project.externalLink.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-6 sm:py-8">
        <ProjectGallery items={project.media} title={project.title} palette={project.palette} />
      </section>

      <section className="shell py-12 sm:py-16">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="surface-card p-7 sm:p-8">
            <SectionHeading
              eyebrow="Features"
              title="Principais entregas"
              description="Recorte das mecânicas, sistemas e integrações mais relevantes deste projeto."
              compact
            />
            <ul className="mt-8 space-y-4">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-[1.5rem] border border-line bg-white/70 p-5 text-sm leading-7 text-muted dark:bg-white/5 sm:text-base"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-7 sm:p-8">
            <SectionHeading
              eyebrow="Minhas responsabilidades"
              title="O que eu construí neste projeto"
              compact
            />
            <div className="copy-block mt-8">
              {project.responsibilities.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        eyebrow="Contato"
        title="Vamos conversar?"
        description="Entre em contato ou acompanhe as minhas redes sociais para ver mais projetos, estudos técnicos e atualizações."
      />
    </div>
  );
}
