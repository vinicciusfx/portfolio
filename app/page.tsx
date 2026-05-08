import Link from "next/link";
import { ContactSection } from "@/components/contact-section";
import { ProjectsSection } from "@/components/projects-section";
import { experienceItems, projects } from "@/lib/portfolio-data";
import { withBasePath } from "@/lib/site-paths";

const stackItems = ["Unity", "VFX", "Firebase", "Unity Game Services"];

export default function HomePage() {
  return (
    <div className="pb-14 sm:pb-20">
      <section id="sobre" className="section-anchor shell relative py-10 sm:py-16 lg:py-20">
        <div
          className="absolute left-0 top-8 -z-10 h-48 w-48 rounded-full blur-3xl sm:h-72 sm:w-72"
          style={{ background: "rgba(246, 203, 84, 0.4)" }}
        />
        <div
          className="absolute right-0 top-20 -z-10 h-56 w-56 rounded-full blur-3xl sm:h-80 sm:w-80"
          style={{ background: "rgba(47, 105, 255, 0.2)" }}
        />
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_380px] lg:gap-12">
          <div>
            <span className="eyebrow">Programador de jogos</span>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl leading-none sm:text-6xl lg:text-7xl">
              Pedro Vinicius
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              Sou programador de jogos Unity e artista técnico com 8 anos de experiência prática
              em desenvolvimento de mecânicas e sistemas, shaders, otimização, remote config e
              infraestrutura em cloud para jogos em produção, lidando com updates frequentes,
              balanceamento e estabilidade em escala.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {stackItems.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside
            aria-hidden="true"
            className="relative min-h-[28rem] overflow-hidden lg:min-h-[34rem]"
          >
            <img
              src={withBasePath("/hero/vini.png")}
              alt="Ilustração estilizada de personagem do portfolio de Pedro Vinicius"
              className="h-full w-full object-contain object-center"
            />
          </aside>
        </div>
        <div className="mt-8 flex items-center justify-center sm:mt-10 lg:mt-12">
          <Link
            href="#projetos"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5"
          >
            Ver projetos
          </Link>
        </div>
      </section>

      <ProjectsSection projects={projects} />

      <section id="experiencia" className="section-anchor shell py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Experiência</h2>
        <div className="mt-8">
          <ul className="space-y-6">
          {experienceItems.map((item) => (
            <li
              key={`${item.company}-${item.period}`}
              className="border-b border-line pb-6 last:border-b-0 last:pb-0"
            >
              <div className="text-lg font-semibold text-ink">{item.company}</div>
              <div className="mt-1 text-sm text-muted">{item.period}</div>
            </li>
          ))}
          </ul>
        </div>
      </section>

      <ContactSection
        id="contato"
        eyebrow="Contato"
        title="Procurando um desenvolvedor Unity?"
        description="Experiência prática com LiveOps, ferramentas internas e sistemas para jogos em Unity e C#."
      />
    </div>
  );
}
