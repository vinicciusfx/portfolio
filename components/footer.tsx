import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { profileLinks, socialLinks } from "@/lib/portfolio-data";

const footerLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Contato", href: "/#contato" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-white/45 py-8 backdrop-blur-xl dark:bg-[#08111f]/65">
      <div className="shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-lg font-semibold text-ink">Pedro Vinicius</div>
          <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
            Programação de jogos, sistemas escaláveis, LiveOps, VFX e infraestrutura para jogos em
            produção.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold text-muted">
            {footerLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-accent">
                {item.label}
              </Link>
            ))}
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noreferrer noopener"
              className="transition hover:text-accent"
            >
              GitHub
            </a>
          </nav>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition hover:text-accent"
                >
                  {item.platform}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
